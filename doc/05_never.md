# never

一个类型，在要用的函数里面穷尽了它的所有类型对应的行为。但是如果有一天要给类型扩展，比如下面的例子，要多一个 Boolean 类型，可是下面的函数没有专门针对boolean类型的操作，因为第一次写这个函数的时候是没有Boolean的。为了方便，在实现函数的时候就用了一个else来给日后可能的新扩展类型来兜底，目的是写出绝对类型安全的代码。在这种兜底的分支下的变量类型就是 never 类型

```ts
type DataFlow = string | number
function print(dataFlow: DataFlow) {
  if(typeof dataFlow === 'string') {
    console.log('字符串')
  } else if(typeof dataFlow === 'number') {
    console.log('数字')
  } else {
    // 怕哪一天加了一个 boolean 类型，没有对应行为的代码实现，就用 else 兜底
    let data = dataFlow // never
  }
}
```