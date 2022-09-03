import {
  fetch,
  post
} from './isAxios'

export const server = {
  getcommditylist(data) {
    return post('/goods/selectByGoodsDTO', data)
  },

  getdeletprodcut(data) {
    return post('/goods/deleteByIds', data)
  },
  // 批量下架
  getdownproduct(data) {
    return post('/goods/updateStateDown', data)
  },
  //修改商品
  editproduct(data){
    return post('/goods/updateGoods',data)
  },
  // 编辑商品
  editproductshow(data){
 return fetch('/goods/selectAllById',data)
  },
  // 新增商品
  addproudct(data){
    return post('/goods/insertGoods',data)
  }
}