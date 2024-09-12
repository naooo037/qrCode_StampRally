import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { SigninAdapter } from '@/components/SigninAdapter'

import { Home } from './Home'

const HomeAdapter = () => {
	return <Home />
}

export const HomeAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SigninAdapter>
				<HomeAdapter />
			</SigninAdapter>
		</ErrorBoundary>
	)
}
