import {UserType} from "../services/user.service";

export interface Token {
  userRole: UserType
  token: string
}

export interface Login {
  userName: string
  password: string
}

export interface Registration {
  email: string
  userName: string
  password: string
}
