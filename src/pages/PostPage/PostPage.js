import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import './PostPage.css';
import Comment from './Comment/Comment';
import Loader from "../../components/Loader/Loader";

const PostPage = () => {

    const { postId } = useParams();
    const { data, fetchData, loader } = useFetch(`/items/${postId}`);

    useEffect(() => {
        fetchData(true);
    }, [postId])

    if (loader) {
        return <div className="post-page">
            <Loader />
        </div>
    }

    if (!data) {
        return <div className="post-page">
            <p>No Post Found</p>
        </div>
    }

    const { title, type, points, children, author } = data;

    return (
        <div className="post-page">
            <div className="post-wrapper">
            <h1>Post :</h1>
                <div className="post">
                    <h3>
                        {title} 
                    </h3>
                    <p> Author: <span>{author}</span></p>
                    <div id='post-description'>
                        <p>Type: <span>{type}</span></p>
                        <p>Points: <span>{points}</span></p>
                    </div>
                </div>
                <div className="post-comments">
                    <p>Comments : </p>
                    <div className="comments">
                    {
                        children?.map((item, index) => {
                            return <Comment data={item} key={index} />
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostPage;