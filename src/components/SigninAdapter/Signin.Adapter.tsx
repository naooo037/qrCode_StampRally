import { FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

type Props = {
	children: React.ReactNode
}

export const SigninAdapter: FC<Props> = ({ children }) => {
	const [cookies] = useCookies()
	const navigate = useNavigate()

	useEffect(() => {
		if (cookies.userId && cookies.rallyId) {
			return
		}
		navigate('/signup')
	}, [])

	return <>{children}</>
}
