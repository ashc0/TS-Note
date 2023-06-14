# null undefined

```ts
let str: string
console.log(str) // 报错

let str: string | undefined
console.log(str) // 不报错

let str: string = undefined // error when strictNullChecks is true
let str: string = null // error when strictNullChecks is true
```

```ts
function fn(data: string) {}
fn() // error

function fn(data?: string) {}
fn() // no error
fn(undefined) // no error

function fn(data: string | undefined) {}
fn() // error
fn(undefined) // no error
```

只有 any unknown undefined 可以接受 undefined 的值
只有 any unknown null 可以接受 null 的值
