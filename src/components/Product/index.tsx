import { useFormatter } from '../../../libs/useFormatter'
import { Product } from '../../types/product'
import styles from './styles.module.css'

import { IoIosArrowForward } from 'react-icons/io'

type Props = {
    data: Product,
    activeCategory: number,
    onClick: (product: Product) => void
}

export const Products = ({ data, activeCategory, onClick }: Props) => {

    const formatter = useFormatter()

    return(
        <div 
            className={styles.container}
            style={{display: activeCategory !== data.id_cat && activeCategory !== 0 ? 'none' : 'flex'}}
            onClick={() => onClick(data)}
        >
            <div className={styles.productImage}>
                <img src={data.image} alt="produto" />
            </div>

            <div className={styles.productContent}>
                <h3 className={styles.productName}>{data.name}</h3>
                <p className={styles.productPrice}>
                    {formatter.formatPrice(data.price)}
                </p>
                <p className={styles.productIngredients}>{data.ingredients}</p>
            </div>

            <div className={styles.productButton}>
                <IoIosArrowForward />
            </div>
        </div>
    )
}