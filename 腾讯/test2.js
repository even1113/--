class Flower {
  constructor() {
    this.flag = false
    this.birds = []
  }
  flower() {
    this.flag = true
    console.log('开了')
    this.birds.forEach((item) => {
      item.BindToFlower()
    })
  }

  addBird(item) {
    this.birds.push(item)
  }
}


class Bird {
  constructor(name, content) {
    this.name = name
    this.content = content
  }
  BindToFlower() {
    console.log(`${this.name} 叫了 ${this.content}` )
  }
}

const flower = new Flower()
const birds1 = new Bird('zhangsan', 'hhhhh')
const birds2 = new Bird('lisi', 'aaaaaa')


setTimeout(() => {
  flower.flower()
}, 3000)

flower.addBird(birds1)
flower.addBird(birds2)

