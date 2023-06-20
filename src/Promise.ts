type ResolveType = (value: any) => void
type RejectType = (reason: any) => void

type Executor = (resolve: ResolveType, reject: RejectType) => void

class _Promise {
  public resolveFunction: ResolveType
  public rejectFunction: RejectType

  constructor(executor: Executor) {
    this.resolveFunction = value => { }
    this.rejectFunction = reason => {}

    executor(this.resolveFunction, this.rejectFunction)
  }
}

const p = new _Promise((resolve, reject) => {})

export {}
