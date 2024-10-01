import { UserApi } from "@/.openapi/api";

export const useRegisterUserAction = () => {
  const userApi = new UserApi();
  return (rally_id: string, name: string) => {
    userApi.postUserRegister({
      rally_id,
      name,
    });
  }
}