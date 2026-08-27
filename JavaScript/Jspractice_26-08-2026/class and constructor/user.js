class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  login() {
    console.log(`${this.name} logged in`)
  }
}
const user1=new User("Girish", "girish@gmail.com")
const user2=new User("king", "king@gmail.com")
user1.login()
user2.login()