import { ReactElement } from 'react'
import styles from './styles.module.css'
import { Menu } from '../Menu'
import { Cart } from '../Cart'


type Props = {
    children: ReactElement
}

export const Layout = ({ children }: Props) => {
    return(
        <div className={styles.container}>
            <Menu />

            <main className={styles.main}>
                {children}
            </main>

            <Cart />
        </div>
    )
}