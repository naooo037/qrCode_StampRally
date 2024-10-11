import { RallyApi, RallySchema } from '@/.openapi/api'

export const useCreateRallyAction = () => {
	const rallyApi = new RallyApi()

	return async (name: string, description: string): Promise<RallySchema> => {
		const response = await rallyApi.postRally({ name, description })
		return response.data
	}
}
