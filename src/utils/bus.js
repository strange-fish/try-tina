export default class Bus {
  constructor () {
    this.eventMap = {}
  }
  on (event, cb) {
    if (typeof cb !== 'function') throw new Error('Not a function!')
    const cbList = this.eventMap[event] || []
    if (!cbList.includes(cb)) {
      cbList.push(cb)
      this.eventMap[event] = cbList
    }
  }
  off (event, cb) {
    const cbList = this.eventMap[event] || []
    this.eventMap[event] = cbList.filter(item => item !== cb)
  }
  emit (event, args) {
    this.eventMap[event].forEach(cb => cb(args))
  }
}
