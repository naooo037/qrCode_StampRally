import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { SigninAdapter } from '@/components/SigninAdapter'

import { Camera } from './Camera'

const CameraAdapter = () => {
	return <Camera />
}

export const CameraAdapterErrorBoundary: FC = () => {
	return (
		<SigninAdapter>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<CameraAdapter />
			</ErrorBoundary>
		</SigninAdapter>
	)
}
