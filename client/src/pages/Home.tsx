import { useEffect, useState } from "react"
import Post from "../components/Post";
import { IPost } from "../models/IPost";
import PostService from "../services/PostService"

export default function Home() {
    const [posts, setPosts] = useState<any>(null);
    
    async function fetchPosts() {
        setPosts(await PostService.getAll());
    }

    useEffect(()=>{
        fetchPosts();
    }, [])
    
    return (
        <div>
            {posts && posts.map((post: IPost)=> <Post key={post.id} post={post} />)}
        </div>
    )
}