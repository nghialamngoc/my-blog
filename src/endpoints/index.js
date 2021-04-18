import { isDevlopment } from 'helper/env'
import * as DEV from './endpoint-dev'
import * as PROD from './endpoint-prod'

let ENDPOINTS = PROD

if (isDevlopment()) {
  ENDPOINTS = DEV
}

export default ENDPOINTS