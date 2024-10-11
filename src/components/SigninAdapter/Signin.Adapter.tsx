import { FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import { useUserStore } from '@/stores/userStore'

type Props = {
	children: React.ReactNode
}

export const SigninAdapter: FC<Props> = ({ children }) => {
	const [cookies] = useCookies()
	const navigate = useNavigate()

	const setName = useUserStore((state) => state.setName)
	const setRallyId = useUserStore((state) => state.setRallyId)
	const setUserId = useUserStore((state) => state.setUserId)

	useEffect(() => {
		if (cookies.userId && cookies.rallyId && cookies.name) {
			setName(cookies.name)
			setRallyId(cookies.rallyId)
			setUserId(cookies.userId)
			return
		}
		navigate('/signup')
	}, [])

	return <>{children}</>
}
