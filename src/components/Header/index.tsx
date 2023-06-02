import styles from './styles.module.css'
import { useEffect, useState } from 'react'

let searchTimer: any = null

type Props = {
    setSearch: (value: string) => void
}

export const Header = ({ setSearch }: Props) => {
    const [inputOpened, setInputOpened] = useState(false)
    const [inputValue, setInputValue] = useState('')


    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => {
            setSearch(inputValue)
        }, 1800)
    }, [inputValue])

    useEffect(() => {
        setInputValue('')
    }, [inputOpened])

    return(
        <div className={styles.container}>
            <img src="/logo.png" alt="logo Devsfood" className={inputOpened ? `${styles.logo}` : ''}/>

            <input 
                type="text" 
                placeholder='Digite um produto' 
                className={styles.input}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onClick={() => setInputOpened(true)}
                onKeyUp={e => e.code === 'Enter' ? setInputOpened(false) : ''}
                style={{width: inputOpened ? '350px' : '0', cursor: inputOpened ? 'initial' : 'pointer'}}
            />
        </div>
    )
}