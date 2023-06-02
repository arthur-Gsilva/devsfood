import { Header } from '@/components/Header'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import api from './api'
import { categoryProps } from '@/types/category'
import { Product } from '../types/product'
import { Products } from '@/components/Product'
import { Modal } from '@/components/Modal'
import Head from 'next/head'


const Home = () => {
    const [categories, setCategories] = useState<categoryProps[]>()
    const [activeCategory, setActiveCategory] = useState(0)
    const [products, setProducts] = useState<Product[]>()
    const [activeSearch, setActiveSearch] = useState('')

    const [modalStatus, setModalStatus] = useState(false)
    const [modalData, setModalData] = useState<Product>()


    const modalProduct = (data: Product) => {
        setModalStatus(true)
        setModalData(data)
    }

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.getCategories()
            setCategories(categories.result)
        }

        getCategories()
    }, [])

    const changeCategory = (categoryID: number) => {
        setActiveCategory(categoryID)
    }

    const getProducts = async () => {
        const prod = await api.getProducts()
        const duplicateProducts = [...prod.result.data, ...prod.result.data]
        setProducts(duplicateProducts)
    }

    useEffect(() => {
        getProducts()
    }, [activeCategory, activeSearch])

    return(


        <div className={styles.container}>

            <Head>
                <title>devsfood</title>
            </Head>

            <Header setSearch={setActiveSearch}/>

            <p className={styles.categoryText}>Selecione uma categoria</p>

            {!categories &&
                <img src="/spinner.gif" alt="spinner loading" className={styles.loadSpinner}/>
            }

            {categories &&
                <div className={styles.categoriesContainer}>

                    <div 
                        className={styles.categoryItem}
                        style={{backgroundColor: activeCategory === 0 ? '#fff' : '#bbb'}}
                        onClick={() => changeCategory(0)}
                    >
                            <img src="/food-and-restaurant.png" alt="Todas as categorias" />
                            <p className={styles.categoryName}>Todos</p>
                    </div>

                    {categories?.map((item) => (
                        <div 
                            className={styles.categoryItem} 
                            key={item.id}
                            style={{backgroundColor: activeCategory === item.id ? '#fff' : '#bbb'}}
                            onClick={() => changeCategory(item.id)}
                        >
                            <img src={item.image} alt={item.name} />
                            <p className={styles.categoryName}>{item.name}</p>
                        </div>
                    ))}
                </div>
            }

            {products &&
                <>  
                    <div className={styles.productsArea}>
                        {products.map((data, index) => (
                                <Products 
                                    data={data} 
                                    key={index}   
                                    activeCategory={activeCategory}
                                    onClick={modalProduct}
                                />
                        ))}
                    </div>
                </>
            }

            <Modal 
                status={modalStatus} 
                setStatus={setModalStatus}
                data={modalData}
            />
        </div>
    )
}

export default Home