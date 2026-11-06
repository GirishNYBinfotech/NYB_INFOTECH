//Singleton pattren
console.log("singleton pattren:")
const Singleton = (function () {
  let instance;

  function createInstance() {
    return {
      name: "JavaScript",
      version: "ES6"
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})()
const obj1 = Singleton.getInstance()
const obj2 = Singleton.getInstance()
console.log(obj1 === obj2)