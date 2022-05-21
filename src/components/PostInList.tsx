import Post from "../models/Post";
import "./PostInList.css";

interface Props {
    post : Post,
    onDelete: () => void
}
export default function PostInList({post, onDelete} : Props) {
    return (
        <div className="PostInList">
            <h2>{post.title}</h2>
            <p>{post.thought}</p>
            <i className="fa-solid fa-trash" onClick={onDelete}></i>
        </div>
    )
}