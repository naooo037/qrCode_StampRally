import { RallyApi } from '@/.openapi/api'

export const useCreateStampAction = () => {
	const rallyApi = new RallyApi()

	return async (rally_id: string, name: string, description: string, qr_code: string) => {
		const response = await rallyApi.postRallyStamp(rally_id, { name, description, qr_code })
		return response.data
	}
}
