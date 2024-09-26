import { FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
	children: React.ReactNode
}

export const SigninAdapter: FC<Props> = ({ children }) => {
	const [cookies] = useCookies()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (cookies.userId && cookies.rallyId) {
			return
		}
		navigate(`/signup?redirect=${location.pathname}`)
	}, [])

	return <>{children}</>
}
