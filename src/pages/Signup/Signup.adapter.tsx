import { FC, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorFallback } from '@/components/ErrorFallback'
import { useRegisterUserAction } from '@/hooks/useCreateUserAction'
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
		setValue,
		formState: { errors },
	} = useForm<SignupType>({
		defaultValues: {
			rally_id: '',
			name: '名無し',
		},
	})
	useEffect(() => {
		if (selectOptions.length === 0) {
			return
		}
		setValue('rally_id', selectOptions[0].value)
	}, [selectOptions])

	const useRegisterUser = useRegisterUserAction()

	const onClickAction: SubmitHandler<SignupType> = (data) => {
		useRegisterUser(data.rally_id, data.name)
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
