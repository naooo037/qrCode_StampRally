import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Base, Button, FormControl, Input } from 'smarthr-ui'
import styled from 'styled-components'

import { UserAuthData } from '@/.openapi/api'

import { ErrorLabel } from '@/components/ErrorLabel'
import { theme } from '@/lib/smarthrTheme'

type Props = {
	onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
	register: UseFormRegister<UserAuthData>
	errors: FieldErrors<UserAuthData>
}

export const Signin: FC<Props> = ({ onSubmit, register, errors }) => {
	return (
		<SigninBase>
			<FormContainer onSubmit={onSubmit}>
				<FormControl title='ユーザID'>
					{errors.username?.message && <ErrorLabel message={errors.username?.message} />}
					<Input
						{...register('username', {
							required: 'ユーザIDを入力してください',
						})}
						error={errors.username?.message ? true : false}
						id='username'
						name='username'
						type='text'
						autoComplete='username'
					/>
				</FormControl>
				<FormControl title='パスワード'>
					{errors.password?.message && <ErrorLabel message={errors.password?.message} />}
					<Input
						{...register('password', {
							required: 'パスワードを入力してください',
						})}
						error={errors.password?.message ? true : false}
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
					/>
				</FormControl>
				<Button type='submit'>Login</Button>
			</FormContainer>
		</SigninBase>
	)
}
const SigninBase = styled(Base)`
	width: 400px;
	padding: ${theme.spacing.L};
	margin: ${theme.spacing.XL} auto;
`
const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: ${theme.spacing.M};

	button {
		margin-top: ${theme.spacing.XS};
	}
`
