# any unknown

## 相同点
any 和 unknown 可以是任何类型的父类，也就是任何类型的东西都可以赋给 any 和 unknown 类型的变量

## 不同点

1. any 同时也是任何类型的子类，也就是any类型的变量可以赋给任意类型的变量。但是unknown不是任何类型的子类，也就是unknown类型的变量不能赋给任何类型的变量(unknown和any除外)

```ts
let data: any = [1, 2]
let num: number = data  // 不报错

let data: unknown = [1, 2]
let num: number = data  // 报错

let data: unknown = [1, 2]
let num: unknown = data  // 不报错

let data: unknown = [1, 2]
let num: any = data  // 不报错
```

2. unknown类型的变量不能取属性和方法，但是any可以

## 应用场景
any：自定义守卫

unknown：可以接收任意类型，但是你不能使用它。

```ts
function ref(value?: unknown) {
  return createRef(value) // 在这里只是单纯地传递变量，而不取属性
}
```