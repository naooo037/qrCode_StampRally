import { FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

import { useSigninAction } from '@/hooks/useSigninAction'
import { useUserAuthStore } from '@/stores/userAuthStore'

type Props = {
	children: React.ReactNode
}

export const SigninAdapter: FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	const pathname = useLocation().pathname

	const [cookies, setCookie] = useCookies()

	const username = cookies.username || ''
	const password = cookies.password || ''

	const signin = useUserAuthStore((state) => state.signin)
	const userSignin = useUserAuthStore((state) => state.userSignin)

	useEffect(() => {
		signinAction()
		if (signin === false) {
			navigate(`/signin?redirect=${pathname}`)
		} else {
			const expires = new Date()
			expires.setDate(expires.getDate() + 1)

			setCookie('username', username, { expires })
			setCookie('password', password, { expires })
		}
	}, [signin])

	const signinAction = async () => {
		userSignin(await useSigninAction({ username, password }))
	}

	return signin === undefined ? <div>Loading...</div> : <>{children}</>
}
