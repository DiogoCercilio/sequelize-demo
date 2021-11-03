// import { IPost } from "../models/IPost";

export default function Post({ post } : any) {
    return (
        <div>
            <ul>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.content}</li>
            </ul>
        </div>
    );
}