export class UserModel{
  // tslint:disable-next-line:prefer-const
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  photo: string;
  email: string;


  constructor(id: number, firstname: string, lastname: string, password: string, photo: string, email: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.photo = photo;
    this.email = email;
  }

}
