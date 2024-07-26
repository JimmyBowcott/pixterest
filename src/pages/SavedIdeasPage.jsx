import Nav from "../components/Nav";
import { useGallery } from "../components/GalleryContext";
import { useState, useEffect } from "react";
import SearchTile from "../components/SearchTile";

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
    if (width > w*5) return 5;
    if (width > w*4) return 4;
    if (width > w*3) return 3;
    if (width > w*2) return 2;
    return 1;
  };

const SavedIdeasPage = () => {
    const { Gallery, handleDelete } = useGallery();
    const [columns, setColumns] = useState([]);

    // Update column count based on window size
    useEffect(() => {
        const updateColumnCount = () => {
            const newCols = getColumnCount(272);
            const distributedItems = distributeItems(Gallery, newCols);
            setColumns(distributedItems);
        };

        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);

        return () => {
            window.removeEventListener('resize', updateColumnCount);
        };
    }, [Gallery]);

    const getColStart = (colIndex) => {
        let cumSum =  0;
        for (let i = 0; i < colIndex; i++) {
            cumSum += columns[i];
        }
        return cumSum;
    }

    return (
        <>
        <Nav showSearchBar={true}/>
        <div className="flex flex-col justify-center items-center pt-20 gap-4 w-full">
            <h1 className="mt-4 text-2xl font-bold">Saved Ideas</h1>
            <div className="flex flex-row gap-4 w-full justify-center mt-4">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4">
                    {Gallery.slice(getColStart(colIndex), getColStart(colIndex) + col).map((item, index) => (
                        <SearchTile key={index} item={item} isSaved={true} onDelete={handleDelete}/>
                    ))}
                </div>
            ))}
        </div>
        </div>
        </>
    )
}

export default SavedIdeasPage;