import styles from './styles.module.css'
import { useContext, useEffect, useState } from 'react'
import { Context } from '@/contexts/cartContext'

import { IoIosArrowDown } from 'react-icons/io'
import { MdShoppingCart } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { useFormatter } from '../../../libs/useFormatter'

export const Cart = () => {

    const  { state, dispatch } = useContext(Context)
    const formatter = useFormatter()

    const [opened, setOpened] = useState(false)
    const [total, setTotal] = useState(0)

    const productFilter = state.cart.products.filter(product => product.quantity > 0)

    const toggleOpened = () => {
        if(opened === true){
            setOpened(false)
        } else{
            setOpened(true)
        }
    }

    const addQt = (key: number) => {

        dispatch({
            type: 'ADD_QUANTITY',
            payload:{
                key
            }
        })
    }

    const lowQt = (key: number) => {
        dispatch({
            type: 'LOW_QUANTITY',
            payload:{
                key
            }
        })
    }

    
        const totalPrice = productFilter.reduce((accumulator, product) => {
            const productTotal = product.quantity * product.price;
            return accumulator + productTotal;
          }, 0);
    

    useEffect(() => {
        setTotal(totalPrice)

    }, [productFilter])

    return(
        <div className={styles.container}>
            <div className={styles.cartHeader} onClick={toggleOpened}>
                <MdShoppingCart className={styles.cartIcon}/>
                <p>Meu Carrinho    

                    {productFilter.length > 0 &&
                        <span>
                            ({productFilter.length})
                        </span>
                    }

                </p>

                {opened === true &&
                    <IoIosArrowDown className={styles.cartArrow}/>
                }
                
            </div>

            {productFilter.length > 0 &&
                <div 
                    className={styles.cartBody}
                    style={{display: opened ? 'flex' : 'none'}}
                >
                    <div className={styles.productsArea}>

                        {state.cart.products.map((item, index) => (

                            <div 
                                className={`${styles.productItem} product-item`} 
                                key={item.id}
                                style={{display: item.quantity <= 0 ? 'none' : 'flex'}}
                            >

                                <div className={styles.productInfo}>
                                    <div className={styles.imgArea}>
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className={styles.productText}>
                                        <h6>{item.name}</h6>
                                        <p>{formatter.formatPrice(item.price)}</p>
                                    </div>    
                                </div>

                                <div className={styles.quantityArea}>
                                    <button 
                                        className={styles.decreaseButton}
                                        onClick={() => lowQt(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>
                                        {item.quantity}
                                    </span>
                                    <button 
                                        className={styles.increaseButton}
                                        onClick={() => addQt(item.id)}
                                        >
                                            +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className={styles.adressArea}>
                            <h3>Endereço</h3>

                            <div className={styles.adressContent}>
                                <p>Recife, Pe</p>
                                <FiEdit className={styles.adressIcon}/>
                            </div>
                    </div>

                    <div className={styles.dicountArea}>
                            <h3>Cupom de Desconto</h3>
                            <div className={styles.discountCupom}></div>
                    </div>

                    <div className={styles.valuesArea}>
                            <div className={styles.values}>
                                <p>Desconto</p>
                                <p>{formatter.formatPrice(5)}</p>
                            </div>
                            <div className={styles.values}>
                                <p>Taxa de Entrega</p>
                                <p>{formatter.formatPrice(8.5)}</p>
                            </div>
                            <div className={styles.values}>
                                <p>Total</p>

                                <p>{formatter.formatPrice(total - 13.5)}</p>
                            </div>
                    </div>

                    <button className={styles.buyButton}>Finalizar Compra</button>
                </div>
            }

            {productFilter.length === 0 && opened === true &&
                <div className={styles.empty}>
                    Seu carrinho está vazio
                </div> 
            }

            
        </div>
    )
}