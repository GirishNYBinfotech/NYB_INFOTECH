function User(name, email) {
  this.name=name
  this.email=email
}

User.prototype.login=function () {
  console.log(`${this.name} logged in with ${this.email}`)
}
const user1=new User("Girish", "girish@gmail.com")
const user2=new User("king", "king@gmail.com")
const user3=new User("queen", "queen@gmail.com")
user1.login()
user2.login()
user3.login()