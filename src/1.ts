class DateUtil {
  static dateUtil: DateUtil
  static getInstance() {
    if(!this.dateUtil) {
      this.dateUtil = new DateUtil()
    }

    return this.dateUtil
  }
  private constructor() {}
  static formatData() {}
  static getData() {}
}

export default DateUtil.dateUtil