import { FC } from 'react'
import { useCookies } from 'react-cookie'
import { useLocation, useNavigate } from 'react-router-dom'

import { useUserAuthStore } from '@/stores/userAuthStore'

import { SignoutButton } from './SignoutButton'

export const SignoutButtonAdapter: FC = () => {
	const navigate = useNavigate()
	const pathname = useLocation().pathname
	const [, , removeCookie] = useCookies()

	const userSignout = useUserAuthStore((state) => state.userSignout)

	const onSignout = () => {
		userSignout()
		removeCookie('username')
		removeCookie('password')

		navigate(`/signin?redirect=${pathname}`)
	}
	return <SignoutButton onSignout={onSignout} />
}
