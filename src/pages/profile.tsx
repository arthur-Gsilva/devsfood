import styles from '../styles/profile.module.css'
import { Context } from '@/contexts/cartContext'
import { FormEvent, useContext, useRef } from 'react'
import { useRouter } from 'next/router'

const Profile = () => {

    const  { state, dispatch } = useContext(Context)
    const { register } = state.register
    const router = useRouter()

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const telRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)

    const handleRegister = (e: FormEvent) => {
        e.preventDefault()

        const name = nameRef?.current?.value
        const email = emailRef?.current?.value
        const tel = telRef?.current?.value
        const address = addressRef?.current?.value

        if(name && email && tel && address){
            if(register === false){
                dispatch({
                    type: "CHANGE_REGISTER",
                    payload: {
                        register: true
                    }
                }),
                dispatch({
                    type: "CHANGE_FIELDS",
                    payload: {
                        address
                    }
                })
            }
            router.push('/')
        } else{
            alert('Preencha todos os campos!!!')
        }

    }

    return(
        <div className={styles.container}>

            <div className={styles.profileContent}>

                <h2>Preencha aqui as suas informações</h2>

                <form className={styles.form} onSubmit={handleRegister}>
                    <label htmlFor="name">Nome Completo</label> 
                    <input 
                        type="text" 
                        id='name'
                        ref={nameRef}
                        autoFocus
                    /> 

                    <label htmlFor="email">Email</label> 
                    <input 
                        type="email" 
                        id='email'
                        ref={emailRef}
                    />

                    <label htmlFor="tel">Telefone</label> 
                    <input 
                        type="text" 
                        id="tel" 
                        ref={telRef}
                    />

                    <label htmlFor="address">Endereço</label> 
                    <input 
                        type="text" 
                        id='address'
                        ref={addressRef}
                    />

                    <button>Salvar</button>
                </form>
            </div>
            
        </div>
    )
    
}

export default Profile