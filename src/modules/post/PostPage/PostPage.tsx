import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostItem } from "../models/PostItem"
import './PostPage.css'

export const PostPage = () => {
    const {postId} = useParams()
    const [post, setPost] = useState<PostItem>();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`)
        .then(response => response.json())
        .then((data: PostItem) => {
            setPost(data)
        })
    }, [postId])

    const handleGoBackButtonClick = () => {
        navigate('..');
    }

    const handleNextPageClick = () => {
        navigate(`../${+postId! + 1}`);
    }

    return <div className="container">
        {post && <div className="content">
            <button className="back__btn" onClick={handleGoBackButtonClick}>go back</button>
            <h1 className="title">{post.title}</h1>
            <div className="body">{post.body}</div>
            {post.tags.map((tag)=> <div className="tag" key={tag}>
                #{tag}
            </div> )}
        </div>}
        <button className="next__page" onClick={handleNextPageClick}>next-page</button>
    </div>
}