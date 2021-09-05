export class Token {
  token?: string
}

export interface Login {
  userName: string,
  password: string
}

export interface Registration {
  email: string,
  userName: string,
  password: string
}
