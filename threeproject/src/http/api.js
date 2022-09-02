import {
  fetch,
  post
} from './isAxios'

export const server = {
  getcommditylist(data) {
    return post('/goods/selectByGoodsDTO', data)
  }
}