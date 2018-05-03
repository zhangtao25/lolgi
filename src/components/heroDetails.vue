<template>
  <div class="heroDetails">
    <!--我是测试test-->
    <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
    <el-carousel height="632px" :autoplay=false>
      <el-carousel-item v-if="herosDetails" v-for="(item,index) of herosDetailsx" :key="index">
        <div :style="styleObject">
          <img :src="imgDZ+item.id+'.jpg'" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        styleObject: {
          // backgroundColor: 'red',
          fontSize: '25px',
          height: '632px'
        },
        herosDetails:false,
        herosDetailsx:"",
        imgDZ:'http://ossweb-img.qq.com/images/lol/web201310/skin/big',
        arr:[]
      }
    },
    // created(){
    //   this.herosDetails = this.$route.params;
    // },
    created(){

    },
    mounted(){
      // console.log(this.$route.params.id);

      let _this = this;
      let _id = _this.$route.params.id;
      console.log(_id);
      axios.get("http://localhost:3000/herosDetails?id="+_id)
        .then((res)=>{
          // _this.herosDetails = res.data;
          _this.herosDetailsx = JSON.parse(JSON.stringify(res.data.data.skins));
          console.log(_this.herosDetailsx,"main")

          _this.herosDetails = JSON.parse(JSON.stringify(res.data));
          console.log(_this.herosDetails.data.skins[0].id,1111111);

          for (var i in _this.herosDetails.data.skins) {
            console.log(_this.herosDetails.data.skins[i].id);
            _this.arr.push(_this.herosDetails.data.skins[i].id);
          }
        })
    }
  }
</script>
<style>
  .el-carousel{padding-top: 50px;}
  .heroDetails .el-carousel__item>div {
    /*color: #475669;*/
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }

  .heroDetails .el-carousel__item:nth-child(2n) {
    /*background-color: #99a9bf;*/
  }

  .heroDetails .el-carousel__item:nth-child(2n+1) {
    /*background-color: #d3dce6;*/
  }

  .heroDetails .el-carousel__item>div>img{width:100%}
</style>
