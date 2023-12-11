import { useState } from 'react';
import './Comment.css';

const Comment = ({ data }) => {

    const [readmore, setReadmore] = useState(false);

    return (
        <div className="comment">
            {
             data?.text?.length > 200 ?
                !readmore ?
                    <h3>
                    {data?.text.slice(0, 200)}...
                    <span onClick={()=>setReadmore(true)}> Read More</span>
                    </h3>
                    :
                    <h3>
                    {data?.text}
                    <span onClick={()=>setReadmore(false)}> Read Less</span>
                    </h3>
               :
                <h3>
                    {data?.text}
                </h3>
            }
            <p> By <span>{data?.author}</span></p>
        </div>
    );
}
export default Comment;