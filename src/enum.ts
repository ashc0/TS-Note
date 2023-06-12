enum Progress {
  IN_PROGRESS, // 审批中
  APPROVED_PROGRESS, // 审批通过
  NOT_APPROVED // 审批未通过
}

interface WorkOrder {
  id: number
  progress: Progress
  amount: number
}

function processWorkOrder(workOrder: WorkOrder) {
  if(workOrder.progress === Progress.IN_PROGRESS) {
    workOrder.progress = sendToLeader(workOrder)
    processWorkOrder(workOrder)
  } else if(workOrder.progress === Progress.APPROVED_PROGRESS) {
    makePayment(workOrder.id, workOrder.amount)
  } else if(workOrder.progress === Progress.NOT_APPROVED) {
    sendMessage(workOrder.id)
  } else {
    console.error("系统出错", workOrder.progress)
  }
}

function sendToLeader(workOrder: WorkOrder): Progress {
  if(workOrder.id === 123) {
    return Progress.APPROVED_PROGRESS
  } else {
    return Progress.NOT_APPROVED
  }
}

function makePayment(id: number, amount: number) {
  console.log(`向${id}打了${amount}元`)
}

function sendMessage(id: number) {
  console.log(`工号为${id}的员工报销失败`)
}