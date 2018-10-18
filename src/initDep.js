import { Page, Component } from '@tinajs/tina'
import dayjs from 'dayjs'
import Bus from './utils/bus'
import apis from './utils/wxApi'

function injectDep (deps) {
  [Page, Component].forEach((item) => {
    Object.defineProperties(item.prototype, deps)
  })
}

const eventBus = new Bus()

injectDep({
  $day: {
    get () {
      return dayjs
    }
  },
  $bus: {
    get () {
      return eventBus
    }
  },
  ...apis
})
