import styles from './styles.module.css'
import { useRouter } from 'next/router'

// ICONS
import { MdShoppingCart } from 'react-icons/md'
import { GiShop } from 'react-icons/gi'
import { FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'


export const Menu = () => {
    const router = useRouter()

    return(
        <div className={styles.container}>
            <div className={styles.iconsArea}>
                <Link 
                    href={'/'} 
                    className={styles.iconItem}
                    style={{backgroundColor: router.pathname === '/' ? '#154715' : 'transparent'}}
                >
                    <GiShop />
                </Link>

                <Link 
                    href={'/orders'} 
                    className={styles.iconItem}
                    style={{backgroundColor: router.pathname === '/orders' ? '#154715' : 'transparent'}}
                >
                    <MdShoppingCart />
                </Link>

                <Link 
                    href={'/profile'} 
                    className={styles.iconItem}
                    style={{backgroundColor: router.pathname === '/profile' ? '#154715' : 'transparent'}}
                >
                    <FaUserAlt />
                </Link>
            </div>

        </div>
    )
}