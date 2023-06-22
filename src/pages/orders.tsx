import styles from '@/styles/orders.module.css'

import { useEffect, useState, useContext } from 'react'
import { Context } from '@/contexts/cartContext'
import { Header } from '@/components/Header'
import { useFormatter } from '../../libs/useFormatter'
import { useRouter } from 'next/router'

const Orders = () => {

    const [activeSearch, setActiveSearch] = useState('')

    const { state, dispatch } = useContext(Context)
    const formatter = useFormatter()
    const router = useRouter()

    return(
        <div className={styles.container}>
            <Header setSearch={setActiveSearch}/>

            {state.order.products.length > 0 &&
                <div className={styles.orderContainer}>

                        <h2>Dados de Pedido</h2>

                        <div className={styles.progressArea}>
                            <div className={styles.bar}></div>
                            <div className={styles.progressBar}></div>
                        </div>

                        <div className={styles.orderContent}>
                            <div className={styles.productContent}>
                                {state.order.products.map((item) => (
                                    <div className={styles.productItem} key={item.id}>
                                        <div className={styles.productImage}>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className={styles.productInfo}>
                                            <h6>{item.name}</h6>
                                            <p>{formatter.formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.orderInfo}>
                                    <div className={styles.orderDate}>
                                        <h6>Data do pedido:</h6>
                                        <p>20/07/2030</p>
                                    </div>

                                    <div className={styles.address}>
                                        <h6>Endereço de Entrega</h6>
                                        <p>{state.user.address}</p>
                                    </div>
                            </div>

                            <div className={styles.orderPrices}>
                                <div className={styles.pricesContainer}>
                                    <div>
                                        <h6>Disconto</h6>
                                        <p>{formatter.formatPrice(5)}</p>
                                    </div>
                                    <div>
                                        <h6>Taxa de Entrega</h6>
                                        <p>{formatter.formatPrice(8.5)}</p>
                                    </div>
                                    <div>
                                        <h6>Total</h6>
                                        <p>{formatter.formatPrice(state.order.total)}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>
            }

            {state.order.products.length < 1 &&
                <div className={styles.noOrder}>
                    <p>Você ainda não fez seu pedido</p>
                    <button onClick={() => router.push('/')}>Fazer Pedidos</button>
                </div>
            }
        </div>
    )
}

export default Orders