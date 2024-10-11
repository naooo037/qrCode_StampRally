import { useCookies } from "react-cookie"

import { StampApi } from "@/.openapi/api"

export const useCollectStampAction = () => {
	const stampApi = new StampApi()
	const [cookies] = useCookies()

	return async (stampId:string) => {
		console.log("useCollectStampAction")
		const response = await stampApi.postStampCollect(stampId, cookies.userId)
		return response.data
	}
}