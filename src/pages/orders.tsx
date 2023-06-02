import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Orders = () => {
    const router = useRouter()
    const [redirectToLogin, setRedirectToLogin] = useState(false)
    const { data: session, status: sessionStatus } = useSession()

    useEffect(() => {
        if(sessionStatus === 'unauthenticated') {
            setRedirectToLogin(true)
        }
    }, [sessionStatus])

    useEffect(() => {
        if(redirectToLogin) {
            router.push('/login')
        }
    }, [redirectToLogin])

    if(sessionStatus === 'loading') {
        return <div>carregando...</div>
    }

    return (
        <>
        {sessionStatus === 'authenticated' && <h2>Página em produção</h2>}
        </>
    )
}

export default Orders