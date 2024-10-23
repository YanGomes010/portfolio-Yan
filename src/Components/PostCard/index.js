import { Link } from "react-router-dom"
import styles from "./post.module.css"
import Botao from "Components/Botao"

export default function PostCard({post}){
    return(
        <Link to={`post/${post.id}`}>
        <div className={styles.post}>
            <img 
            className={styles.capa}
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa do post"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Botao>Ler</Botao>
        </div>
        </Link>
    )
}