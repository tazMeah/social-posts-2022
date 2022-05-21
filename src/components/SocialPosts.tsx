import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

export default function SocialPosts() {
    const [posts, setPosts] = useState<Post[]>([
        {title: "Grand Circus", thought: "Grand Circus is cool."},
        {title: "React", thought: "React give me power!"},
        {title: "Beatrice", thought: "My friend Beatrice has mad skills. She made the top 10! I'm just so proud of her!"}
    ]);

    function addPost(newPost: Post) {
        // copy then modify
        let copiedPosts = [newPost, ...posts];
        setPosts(copiedPosts);
    }

    function deletePost(index: number) {
        // copy then modify
        let copiedPosts = [...posts];
        copiedPosts.splice(index, 1);
        setPosts(copiedPosts);
    }

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button onClick={() => {setShowForm(true)}}>New Thought</button>
            <div className="postlist">
                {posts.map((post, index) => <PostInList onDelete={() => {deletePost(index)}} post={post} key={index}/>) }
            </div>
            {showForm && <PostForm onClose={() => {setShowForm(false)}} onSubmit={addPost}/>}
        </div>
    )
}