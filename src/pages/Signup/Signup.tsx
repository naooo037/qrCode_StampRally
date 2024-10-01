import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Base, Button, Center, FormControl, Input, Select } from 'smarthr-ui'
import styled from 'styled-components'

import { SignupType } from './SignupType'

type Props = {
	register: UseFormRegister<SignupType>
	onClickAction: () => void
	errors: FieldErrors<SignupType>
	options: { label: string; value: string }[]
}

export const Signup: FC<Props> = ({ register, onClickAction, options }) => (
	<SignupContainer>
		<h2>参加するスタンプラリーとニックネームを入力してください</h2>
		<form {...register} onSubmit={onClickAction}>
			<FormControl title='スタンプラリー'>
				<Select width={'100%'} options={options} {...register('rally_id')} />
			</FormControl>
			<FormControl title='ニックネーム'>
				<Input
					autoComplete='off'
					width={'100%'}
					{...register('name', {
						required: { value: true, message: 'ニックネームは必須です' },
						maxLength: { value: 30, message: 'ニックネームは30文字までです' },
					})}
				/>
			</FormControl>
			<MyCenter>
				<Button type='submit'>登録</Button>
			</MyCenter>
		</form>
	</SignupContainer>
)

const SignupContainer = styled(Base)`
	margin: 100px;
	padding: 30px;
`
const MyCenter = styled(Center)`
	margin-top: 20px;
`
