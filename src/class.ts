class People {
  name: string
  age: number
  static count: number = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    People.count++
  }
  doSomethings() {
    console.log('do something')
  }
}