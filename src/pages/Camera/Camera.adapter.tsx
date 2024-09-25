import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'

import { Camera } from './Camera'

const CameraAdapter = () => {
	return <Camera />
}

export const CameraAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<CameraAdapter />
		</ErrorBoundary>
	)
}
