import { Product } from '@/types/product'
import styles from './styles.module.css'
import { useFormatter } from '../../../libs/useFormatter'
import { useEffect, useState, useContext } from 'react'
import { Context } from '@/contexts/cartContext'


type Props = {
    status: boolean,
    setStatus: (a: boolean) => void,
    data: Product | undefined
}

export const Modal = ({ status, setStatus, data }: Props) => {

    const formatter = useFormatter()
    const  { state, dispatch } = useContext(Context)

    const [quantity, setQuantity] = useState(1)

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = e.target as HTMLDivElement

        if(container.classList.contains('styles_container__Sz4_C')){
            setStatus(false)
        }
    }

    const addCart = () => {

        dispatch({
            type: 'ADD_PRODUCT',
            payload: { data, quantity}
        })

        setStatus(false)
    }


    const decreaseQuantity = () => {
            if(quantity !== 1){
                setQuantity(quantity - 1)
            } else{
                setStatus(false)
            }
        
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    useEffect(() => {
        setQuantity(1)
    }, [status])

    return(
        <div 
            className={styles.container} 
            style={{display: status ? 'flex' : 'none'}}
            onClick={closeModal}
        >
            <div className={styles.modalContent}>
                <div className={styles.productArea}>
                    <div className={styles.imageArea}>
                        <img src={data?.image} alt={data?.name} />
                    </div>

                    <div className={styles.productContent}>
                        <div>
                            <h2>{data?.name}</h2>
                            <p>{data?.ingredients}</p>
                        </div>

                        <div className={styles.priceArea}>
                            <div className={styles.priceActions}>

                                <button 
                                    className={styles.decreaseButton}
                                    onClick={decreaseQuantity}
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button 
                                    className={styles.increaseButton}
                                    onClick={increaseQuantity}
                                >
                                    +
                                </button>

                            </div>

                            <div className={styles.price}>
                                {formatter.formatPrice(data?.price as number * quantity)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.buttonsArea}>
                    <button onClick={() => setStatus(false)}>Cancelar</button>
                    <button className={styles.addCart} onClick={() => addCart()}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}