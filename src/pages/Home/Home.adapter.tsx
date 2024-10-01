import { FC, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'

import { Home } from './Home'

const HomeAdapter = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return <Home isOpen={isOpen} setIsOpen={setIsOpen} />
}

export const HomeAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<HomeAdapter />
		</ErrorBoundary>
	)
}
