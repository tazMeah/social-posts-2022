import { useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";
interface Props {
    onSubmit : (post: Post) => void,
    onClose: () => void
}

export default function PostForm({onSubmit, onClose} : Props) {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    return (
        <div className="PostForm">
            <form onSubmit={
                (e) => {
                e.preventDefault();
                onSubmit({title: title, thought: thought});
                onClose();
                }}>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange={(e) => {setTitle(e.target.value)}} required/>
                <label htmlFor="thought">Thought</label>
                <textarea id="thought"  rows={10} onChange={(e) => {setThought(e.target.value)}} required></textarea>
                <input type="submit" value="Add Post" />
                <i className="fa-solid fa-circle-xmark" onClick={onClose}></i>
            </form>
        </div>
    )
}