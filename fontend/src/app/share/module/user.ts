export interface IUser {
  username?: any;
  password?: any;
  role?: any;
}

export class User implements IUser {
  constructor(
    username?: any,
    password?: any,
    role?: any
  ) {}
}
