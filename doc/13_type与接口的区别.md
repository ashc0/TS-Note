# Type 与接口的区别

interface：只能定义对象类型，或者接口当名字的函数类型
type：可以定义任何类型，包括基础类型 联合类型 交叉类型 元组


## 继承
 - interface 可以继承一个接口或者多个接口。
 - class 可以实现一个接口或多个接口
 - interface 可以继承 type
 - type 不能继承

```ts
interface A extends B, C {}
```

## 扩展
接口可以合并声明，type必须独一无二

```ts
interface A {a1: any}
interface A {a2: any}

```


项目基本用interface。因为可以合并声明