import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

function ViewPost(props) {
    const [postData, setPostData] = useState(null);
    const {post} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`);
                console.log(data)
                setPostData(data);
            } catch (e) {
                console.error(e);
            }
        })()
    }, [post]);

    return (
        postData ? (
                <div>
                    <p>{postData.id}</p>
                    <p>{postData.title}</p>
                    <p>{postData.body}</p>
                </div>
            )
            : <div> There is no data</div>
    );
}

export default ViewPost;