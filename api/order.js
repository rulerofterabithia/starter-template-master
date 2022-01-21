import request from '@/utils/request'

export default {
    //生成订单
    createOrder(courseId) {
        return request({
            url: '/eduorder/order/createOrder/' + courseId,
            method: 'post'
        })
    },
    //根据订单id查询订单信息
    getOrderInfo(orderId) {
        return request({
            url: '/eduorder/order/getOrderInfo/' + orderId,
            method: 'get'
        })
    },
    //生成二维码的方法
    createQRCode(orderNo) {
        return request({
            url: '/eduorder/paylog/createQRCode/' + orderNo,
            method: 'get'
        })
    },

    //查询订单状态的方法
    //生成二维码的方法
    queryPayStatus(orderNo) {
        return request({
            url: '/eduorder/paylog/queryPayStatus/' + orderNo,
            method: 'get'
        })
    }
}