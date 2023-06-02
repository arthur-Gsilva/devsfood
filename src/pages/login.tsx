import { useSession } from 'next-auth/react'

const Login = () => {

    const { data: session, status: sessionStatus } = useSession()

    return(
        <div>
            {sessionStatus === 'unauthenticated' &&
                <h1>Página em produção</h1>
            }
        </div>
    )
}

export default Login