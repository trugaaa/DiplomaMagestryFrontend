import {UserType} from "../services/user.service";

export interface User {
  id: string,
  userName: string,
  email: string,
  type?: UserType,
  firstName: string,
  secondName: string,
  age?: number,
  groupId: string
}
