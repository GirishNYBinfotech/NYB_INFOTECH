//Observer factory
console.log("Observer pattren:")
class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }
  notify(data) {
    this.observers.forEach(observer => {
      observer(data)
    })
  }
}

const subject = new Subject()
subject.subscribe(data => {
  console.log("User 1:", data)
})
subject.subscribe(data => {
  console.log("User 2:", data)
})
subject.notify("New notification received")