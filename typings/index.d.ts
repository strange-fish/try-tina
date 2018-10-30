// / <reference types="@types/tinajs__tina" />
import * as tina from '@tinajs/tina'
import dayjs from 'dayjs'
import * as fly from 'flyio'

import http from '../src/utils/http.js'
import Bus from '../src/utils/Bus.js'
import global from '../src/utils/globalVariable.js'

interface WxRouteWrap {
  (path: string, params?: {[key: string]: string | number}): Promise<T>;
}

declare module '@tinajs/tina' {
  export interface Component {
    $day(config: dayjs.ConfigType): dayjs.Dayjs;
    $bus: Bus;
    $global: global;
    $http: fly.Fly;
    $navigateTo: WxRouteWrap;
    $redirectTo: WxRouteWrap;
    $reLaunch: WxRouteWrap;
  }
}