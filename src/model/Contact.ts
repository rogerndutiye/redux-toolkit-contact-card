class Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  constructor(name: string, email: string, telephone: string, id: string) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.id = id;
  }
}

export default Contact;
