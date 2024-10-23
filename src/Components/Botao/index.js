import styles from "./botao.module.css"

export default function Botao({children,tamanho}){
    return(
        <button className=
        {`
        ${styles.botao}
        ${styles[tamanho]}    
        `}
        >
            {children}
        </button>
    )
}