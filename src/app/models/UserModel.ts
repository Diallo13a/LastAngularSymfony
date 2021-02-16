export class UserModel{
  // tslint:disable-next-line:prefer-const
  id: number;
  prenom: string | undefined;
  nom: string | undefined;
  password: string;
  photo: string;
  email: string;
  // date: any;
  date: any;

  constructor(id: number, nom: string, prenom: string, password: string, photo: string, email: string, date: any) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.password = password;
    this.photo = photo;
    this.email = email;
    this.date = date;
  }

}
