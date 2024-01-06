import {useCallback, useEffect, useState} from "react";
import SearchInput from "./components/SearchInput";
import PhotosGallery from "./components/PhotosGallery";
import Pagination from "./components/Pagination";

function App() {
    const [inputValue, setInputValue] = useState('images');
    const [queryParam, setQueryParam] = useState('images');
    const [photoList, setPhotoList] = useState([]);
    const [page, setPage] = useState(1);

    const inputValueChangeHandle = useCallback((event) => {
        console.log('inputValueChangeHandle');
        setInputValue(event.target.value);
    }, []);

    const inputSubmitHandle = useCallback((event) => {
        console.log('inputSubmitHandle');
        event.preventDefault();
        setQueryParam(inputValue);
    }, [inputValue]);

    const getData = useCallback(() => {
        console.log('getData')
        fetch(`https://api.unsplash.com/search/photos?client_id=TnS6h1-CQw2aA1mn2cl6mUlG5LYscL16j48vN7ALGw0&page=${page}&query=${queryParam}`, {
            method: 'get'
        })
            .then(response => response.json())
            .then(data => {
                setPhotoList(data);
            })
    }, [page, queryParam]);

    const pageChangeHandle = useCallback((newPage) => {
        if (newPage >= 1 && newPage <= photoList.total_pages) {
            console.log('pageChangeHandle');
            setPage(newPage);
        }
    }, [photoList.total_pages]);

    useEffect(() => {
        console.log('useEffect')
        getData();
    }, [page, queryParam, getData]);

    return (
        <div className="app">
            <SearchInput onChange={inputValueChangeHandle} value={inputValue} onInputSubmit={inputSubmitHandle}/>
            <PhotosGallery photos={photoList.results}/>
            <Pagination pages={photoList.total_pages} currentPage={page} onPageChange={pageChangeHandle}/>
        </div>
    );
}

export default App;
