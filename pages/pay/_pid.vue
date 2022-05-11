<template>
  <div class="cart py-container">
    <!--主内容-->
    <div class="checkout py-container pay">
      <div class="checkout-tit">
        <h4 class="fl tit-txt">
          <span class="success-icon"></span><span class="success-info">订单提交成功，请您及时付款！订单号：{{ payObj.out_trade_no
          }}</span>
        </h4>
        <span class="fr"><em class="sui-lead">应付金额：</em><em class="orange money">￥{{ payObj.total_fee }}</em></span>
        <div class="clearfix"></div>
      </div>
      <div class="checkout-steps">
        <div class="fl weixin">微信支付</div>
        <div class="fl sao">
          <p class="red">请使用微信扫一扫。</p>
          <div class="fl code">
            <qriously :value="payObj.code_url" :size="338" />
            <div class="saosao">
              <p>请使用微信扫一扫</p>
              <p>扫描二维码支付</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
import orderApi from "@/api/order";
export default {
  data() {
    return {
      orderNo: "",
      payObj: {},
      timer1: "",
    };
  },
  created() {
    this.orderNo = this.$route.params.pid;
    //生成二维码
    this.createQRcode();
  },

  //每个三秒去调用一次查询订单状态的方法
  //在页面渲染之后调用
  mounted() {
    this.timer1 = setInterval(() => {
      this.queryPayStatus(this.payObj.out_trade_no);
    }, 3000);
  },
  methods: {
    //生成二维码
    createQRcode() {
      orderApi.createQRCode(this.orderNo).then((resp) => {
        this.payObj = resp.data.data;
      });
    },
    //根据订单号查询支付状态
    queryPayStatus(out_trade_no) {
      orderApi.queryPayStatus(out_trade_no).then((response) => {
        if (response.data.success) {
          //如果支付成功，清除定时器
          clearInterval(this.timer1);
          //提示
          this.$message({
            type: "success",
            message: "支付成功!",
          });
          //跳转到课程详细页面观看视频
          this.$router.push({ path: "/course/" + this.payObj.course_id });
        }
      });
    },
  },
};
</script>
