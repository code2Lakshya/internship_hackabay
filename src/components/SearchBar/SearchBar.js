import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useFetch from "../../utils/useFetch";
import SearchResult from "./SearchResult/SearchResult";
import './SearchBar.css';

const SearchBar = ({ setShowSearch }) => {

    const [search, setSearch] = useState('');
    const { data, setData, fetchData } = useFetch(`/search?query=${search}`)

    useEffect(() => {
        search.length !== 0 ? fetchData() : setData(null);
    }, [search])

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <div className="search-bar">
                    <input
                        type='text'
                        placeholder='Search Here...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        name='search'
                    />
                    <span onClick={() => setShowSearch(false)}>
                        <RxCross1 />
                    </span>
                </div>
                {
                    data &&
                        <div className="search-result-container">
                            {
                                data?.map((item, index) => <SearchResult data={item} key={index} setShowSearch={setShowSearch} />)
                            }
                        </div>
                }
            </div>
        </div>
    );
}
export default SearchBar;