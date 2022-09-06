import {
  fetch,
  post
} from './isAxios'

export const server = {
  getcommditylist(data) {
    return fetch('/goods/selectByGoodsDTO', data)
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
  },
  // 恢复删除的商品恢复倒仓库
  backtocangku(data){
    return post('/goods/updateDelete',data)
  },
  //批量上架
  updatagoods(data){
    return post('/goods/updateStateOn',data)
  },
  // 评论列表接口
  getreviewlist(data){
    return fetch('/comment/selectAll',data)
  },
  // 商品回复
  reviewback(data){
    return post('/comment/replyComment',data)
  },
  // 商品评论回显
  showconetent(data){
    return fetch('/comment/selectAllById',data)
  }
}