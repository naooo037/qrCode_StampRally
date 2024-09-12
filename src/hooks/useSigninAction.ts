import { UserApi, UserAuthData } from '@/.openapi/api'

export const useSigninAction = async (user: UserAuthData): Promise<boolean> => {
  const userAPI = new UserApi()
  return await userAPI.postSignin(user).then((response) => {
    if (response.status === 200) {
      return true
    }
    return false
  }).catch(() => {
    return false
  })
}