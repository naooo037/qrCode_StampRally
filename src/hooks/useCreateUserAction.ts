import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import { UserApi } from '@/.openapi/api'

export const useRegisterUserAction = () => {
	const userApi = new UserApi()
	const [, setCookie] = useCookies()
	const navigate = useNavigate()

	return (rally_id: string, name: string) => {
		userApi
			.postUserRegister({
				rally_id,
				name,
			})
			.then((res) => {
				setCookie('userId', res.data.Id)
				setCookie('rallyId', res.data.rally_id)
				setCookie('name', res.data.name)
				navigate('/')
			})
	}
}
