export interface IGetLoggedUser {
  idToken: string
  bearerToken: string
}

export const ERROR_GET_USER = 'Cannot find user'