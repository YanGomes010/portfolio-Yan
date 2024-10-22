
import styles from "./inicio.module.css"
import posts from "assets/posts.json"
import Post from "Components/Post";

export default function Inicio(){
    return(
        <ul className={styles.post}>
        {posts.map((post)=>
            <li key={post.id}>
                <Post post={post}/>    
            </li>
        )}

        </ul>
    )
}