import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'

import { Signup } from './Signup'

const SignupAdapter = () => {
	return <Signup />
}

export const SignupAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SignupAdapter />
		</ErrorBoundary>
	)
}
