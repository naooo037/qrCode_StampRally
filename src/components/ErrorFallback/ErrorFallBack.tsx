import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	return (
		<div>
			<h1>Something went wrong!</h1>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	)
}
