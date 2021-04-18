/**
 * get current env
 */

export const env = () => {
  return process.env.NODE_ENV
}

/**
 * check if current env is development
 * 
 * @returns {Boolean}
 */

export const isDevlopment = () => {
  return env() === 'development'
}

/**
 * check if current env is production
 * 
 * @returns {Boolean}
 */

 export const isProduction = () => {
  return env() === 'production'
}