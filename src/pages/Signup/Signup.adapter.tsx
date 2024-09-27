import { FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useFetchRallies } from '@/hooks/useFetchRallies'

import { Signup } from './Signup'
import { SignupType } from './SignupType'

const SignupAdapter = () => {
	const rallies = useFetchRallies()

	const selectOptions = rallies.map((rally) => ({
		label: rally.name!,
		value: rally.Id!,
	}))
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupType>({
		defaultValues: {
			rallyId: selectOptions[0]?.label || '',
			name: '名無し',
		},
	})

	const onClickAction: SubmitHandler<SignupType> = (data) => {
		console.log(data)
	}

	return (
		<Signup
			register={register}
			onClickAction={handleSubmit(onClickAction)}
			errors={errors}
			options={selectOptions}
		/>
	)
}

export const SignupAdapterErrorBoundary: FC = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<SignupAdapter />
		</ErrorBoundary>
	)
}
