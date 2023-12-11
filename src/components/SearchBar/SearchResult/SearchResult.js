import { useNavigate } from "react-router-dom";
import './SearchResult.css';

const SearchResult = ({ data, setShowSearch }) => {

    const navigate = useNavigate();

    const clickHandler = (e) => {
        navigate(`/post/${data?.story_id}`);
        setShowSearch(false);
    }

    return (
        <div className="search-result" onClick={clickHandler}>
            <h1>{data?.title}</h1>
            <div>
            {
                data?._tags?.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
            </div>
        </div>
    );
}
export default SearchResult;