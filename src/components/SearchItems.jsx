import { useState, useEffect, useContext } from 'react';
import SearchTile from './SearchTile';
import { LastSearchContext } from './context/LastSearchContext';
import { useSettings } from './context/SettingsContext';

  // Distribute items across columns
  function distributeItems(items, nCols) {
    const nItems = items.length;
    const baseCount = Math.floor(nItems / nCols);
    const extraCount = nItems % nCols;
    
    const cols = Array.from({ length: nCols }, (_, i) => 
        i < extraCount ? baseCount + 1 : baseCount
    );
    
    return cols;
}

const getColumnCount = (w) => {
    const width = window.innerWidth;
    if (width > w*7) return 7;
    if (width > w*6) return 6;
    if (width > w*5) return 5;
    if (width > w*4) return 4;
    if (width > w*3) return 3;
    if (width > w*2) return 2;
    return 1;
  };

// WARNING: Big, ugly function below
const SearchItems = ({searchTerm, hideIndex=false}) => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [lastItems, setLastItems] = useContext(LastSearchContext);
    const [columns, setColumns] = useState([]);
    const {settings} = useSettings();

    // Fetch data from DeviantArt API
    useEffect(() => {
        setLoading(true);
        let isMounted = true;
        let itemsList = [];

        async function fetchData() {
            try {
                
                const response = await fetch(`https://backend.deviantart.com/rss.xml?type=deviation&q=boost%3Apopular+in%3Adigitalart%2Fdrawings+pixel+${searchTerm}`)
                const text = await response.text();
                const xml = new window.DOMParser().parseFromString(text, "text/xml");
                const mediaNamespace = "http://search.yahoo.com/mrss/";

                // Function to select an element with XPath
                const selectXPath = (xpath, contextNode) => {
                    return xml.evaluate(xpath, contextNode, (prefix) => {
                        if (prefix === 'media') return mediaNamespace;
                        return null;
                    }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                };

                const xpathResult = selectXPath('//item', xml);
                
                // Iterate through all items and add them to the items array
                for (let i = 0; i < xpathResult.snapshotLength; i++) {
                    const item = xpathResult.snapshotItem(i);
                    const title = item.querySelector('title').textContent;
                    const link = item.querySelector('link').textContent;
                    const mediaDescription = selectXPath('media:description', item).snapshotItem(0)
                    const mediaRating = selectXPath('media:rating', item).snapshotItem(0).textContent
                    const mediaContent = selectXPath('media:content', item).snapshotItem(0)
                    const mediaCredit = selectXPath('media:credit', item);
                    const mediaCopyright = selectXPath('media:copyright', item).snapshotItem(0)

                    // For mediaDescription, we need to parse the HTML into a string
                    let parsedDescription = 'N/A';
                    if (mediaDescription) {
                        const parser = new DOMParser();
                        parsedDescription = parser.parseFromString(mediaDescription.textContent, 'text/html');
                        mediaDescription.textContent = parsedDescription.body.textContent;
                    }
        
                    // Create an object for the current item
                    const itemObject = {
                        title: title ? title : 'N/A',
                        src: mediaContent?.getAttribute('url') || 'N/A',
                        height: mediaContent?.getAttribute('height') || 'N/A',
                        width: mediaContent?.getAttribute('width') || 'N/A',
                        description: mediaDescription.textContent,
                        link: link ? link : 'N/A',
                        isAdult: mediaRating === "nonadult" ? false : true,
                        author: mediaCredit?.snapshotItem(0)?.textContent || 'N/A',
                        authorIcon: mediaCredit?.snapshotItem(1)?.textContent || 'N/A',
                        copyright: mediaCopyright?.textContent || 'N/A',
                        filename: mediaContent?.getAttribute('url')?.split('/').pop() || 'N/A',
                        searchTerm: searchTerm,
                        index: itemsList.length,
                    };
        
                    // Add the object to the items array
                    if (!itemObject.isAdult) {
                        itemsList.push(itemObject);
                    } else if (settings.showAdult) {
                        itemsList.push(itemObject);
                    }

                }

            } catch (error) {

                console.error('Error fetching data:', error);
                if (isMounted) {
                    setLoading(false);
                }

            } finally {
                if (isMounted) {

                    setItems(itemsList);

                    setLastItems(itemsList);

                    setLoading(false);
            }
        }
    }

    fetchData();

    return () => {
        isMounted = false;
    };

    }, [searchTerm]);

    // Update column count based on window size
    useEffect(() => {
        const updateColumnCount = () => {
            const newCols = getColumnCount(272);
            const distributedItems = distributeItems(items, newCols);
            setColumns(distributedItems);
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);

        return () => {
            window.removeEventListener('resize', updateColumnCount);
        };
    }, [items]);

    const getColStart = (colIndex) => {
        let cumSum =  0;
        for (let i = 0; i < colIndex; i++) {
            cumSum += columns[i];
        }
        return cumSum;
    }

    if (loading) return (
        <div className="flex flex-row justify-center items-center">
            <div className="relative w-24 h-24">
                <img src="./assets/icons/cog1.png" alt="loading" className="pixelated spin h-20 w-20 absolute top-0 left-0 z-10" />
                <img src="./assets/icons/cog2.png" alt="loading" className="pixelated spin-anti absolute top-1 left-1"
                style={{width: "4.5rem", height: "4.5rem"}}/>
            </div>
        </div>
    );

    return (
        <div className="flex flex-row gap-4 w-full justify-center mt-4">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                    {items.slice(getColStart(colIndex), getColStart(colIndex) + col).map((item, index) => (
                        <SearchTile key={index} item={item} hideIndex={hideIndex}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SearchItems;