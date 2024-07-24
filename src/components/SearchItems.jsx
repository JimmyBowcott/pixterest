import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {parseStringPromise } from 'xml2js';

  // Distribute items across columns
  function distributeItems(items, nCols = 7) {
    const nItems = items.length;
    const baseCount = Math.floor(nItems / nCols);
    const extraCount = nItems % nCols;
    
    const cols = Array.from({ length: nCols }, (_, i) => 
        i < extraCount ? baseCount + 1 : baseCount
    );
    
    console.log(cols);
    return cols;
}


// WARNING: Big, very big, ugly function coming up
const SearchItems = ({loading, setLoading, searchTerm}) => {
    const [items, setItems] = useState([]);
    const [columns, setColumns] = useState([9,9,9,9,8,8,8]);

    // Fetch data from DeviantArt API
    useEffect(() => {
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
                    const mediaRating = selectXPath('media:rating', item).snapshotItem(0)
                    const mediaContent = selectXPath('media:content', item).snapshotItem(0)
                    const mediaKeywords = selectXPath('media:keywords', item).snapshotItem(0)
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
                        description: parsedDescription,
                        link: link ? link : 'N/A',
                        isAdult: mediaRating === "nonadult" ? false : true,
                        keywords: mediaKeywords?.textContent || 'N/A',
                        author: mediaCredit?.snapshotItem(0)?.textContent || 'N/A',
                        authorIcon: mediaCredit?.snapshotItem(1)?.textContent || 'N/A',
                        copyright: mediaCopyright?.textContent || 'N/A',
                    };
        
                    // Add the object to the items array
                    itemsList.push(itemObject);

                }

            } catch (error) {

                console.error('Error fetching data:', error);
                if (isMounted) {
                    setLoading(false);
                }

            } finally {
                if (isMounted) {
                    setItems(itemsList);
                    setLoading(false);

                    if (itemsList.length !== 60) {
                        const newCols = distributeItems(itemsList, 7);
                        setColumns(newCols);
                }
            }
        }
    }

    fetchData();

    return () => {
        isMounted = false;
    };

    }, []);

        

    

    if (loading) return null;

    return (
        <>
            <h1 className="text-xl"> Showing search Results for: {searchTerm}</h1>
            <div className="flex flex-row">
            </div>
        </>
    );
};

export default SearchItems;