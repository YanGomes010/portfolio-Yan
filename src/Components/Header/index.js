import HeaderItem from "../HeaderItem"
import styles from "./header.module.css"

export default function Header(){


    

    return(
        <header>
            <nav className={styles.navegacao}>
                <HeaderItem to="/">
                    Inicio
                </HeaderItem>
                <HeaderItem  to="/sobremim">
                    Sobre Mim
                </HeaderItem>
            </nav>
        </header>
    )
}