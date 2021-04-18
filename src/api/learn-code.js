import ENDPOINTS from 'endpoints'
import axios from 'axios'

export const getPostList = async () => {
  try {
    await axios.get(ENDPOINTS.GET_POST_LIST)
  } catch (err) {
    return Promise.reject(err)
  }
}
