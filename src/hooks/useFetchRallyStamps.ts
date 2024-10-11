import { useEffect, useState } from 'react'

import { GetUserStamps200ResponseInner, UserApi } from '@/.openapi/api'

export const useFetchRallyStamps = (userId: string): [GetUserStamps200ResponseInner[] | undefined, React.Dispatch<React.SetStateAction<GetUserStamps200ResponseInner[] | undefined>>] => {
	const userApi = new UserApi()
	const [stamps, setStamps] = useState<GetUserStamps200ResponseInner[] | undefined>(undefined)

	useEffect(() => {
		userApi.getUserStamps(userId).then((response) => {
			setStamps(response.data)
		})
	}, [])

	return [stamps, setStamps]
}
