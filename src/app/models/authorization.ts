import {UserType} from "../services/user.service";

export interface Token {
  userRole: UserType
  token: string
}

export interface Login {
  userNameOrEmail: string
  password: string
}

export interface Registration {
  firstName: string
  secondName: string
  email: string
  userName: string
  password: string
}
