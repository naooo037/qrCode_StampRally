import { FC, useState } from 'react'
import { useCookies } from 'react-cookie'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/ErrorFallback'
import { SigninAdapter } from '@/components/SigninAdapter'
import { useFetchRallyStamps } from '@/hooks/useFetchRallyStamps'
import { useUserStore } from '@/stores/userStore'

import { Home } from './Home'

const HomeAdapter = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [cookies] = useCookies()
	const userId = useUserStore((state) => state.userId) || cookies.userId

	const stamps = useFetchRallyStamps(userId)

	return <Home stamps={stamps} isOpen={isOpen} setIsOpen={setIsOpen} />
}

export const HomeAdapterErrorBoundary: FC = () => {
	return (
		<SigninAdapter>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HomeAdapter />
			</ErrorBoundary>
		</SigninAdapter>
	)
}
