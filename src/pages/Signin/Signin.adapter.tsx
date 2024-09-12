import { FC, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { ErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { UserAuthData } from '@/.openapi/api'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useSigninAction } from '@/hooks/useSigninAction'
import { useUserAuthStore } from '@/stores/userAuthStore'

import { Signin } from './Signin'

const SigninAdapter = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()

	const [, setCookie] = useCookies()

	const signin = useUserAuthStore((state) => state.signin)
	const userSignin = useUserAuthStore((state) => state.userSignin)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<UserAuthData>()

	const onSubmit: SubmitHandler<UserAuthData> = async (data) => {
		userSignin(await useSigninAction(data))
	}
	useEffect(() => {
		if (signin) {
			const expires = new Date()
			expires.setDate(expires.getDate() + 1)

			setCookie('username', watch('username') || '', { expires })
			setCookie('password', watch('password') || '', { expires })

			const redirect = searchParams.get('redirect')
			navigate(redirect || '/')
		}
	}, [signin])

	return <Signin onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
}

export const SigninAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SigninAdapter />
		</ErrorBoundary>
	)
}
