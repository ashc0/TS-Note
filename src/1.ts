interface Product {
  name: string
  price: number
  account: number
  buy(): void
}

const p: Product = {
  name: 'iPhone XS Max',
  price: 1000,
  account: 1000,
  buy() {
    void 0
  }
}

interface ModilePhone extends Product {
  brand: string
}

const iphone: ModilePhone = {
  name: 'iPhone XS Max',
  price: 1000,
  account: 1000,
  buy() {
    void 0
  },
  brand: 'Apple'
}
