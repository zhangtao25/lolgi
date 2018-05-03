<template>
  <div class="heroDetails">
    <div class="margin">
      <el-carousel height="632px" :autoplay=false>
        <el-carousel-item v-if="herosDetails" v-for="(item,index) of herosDetailsx" :key="index">
          <div :style="styleObject">
            <img :src="imgDZ+item.id+'.jpg'" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="dfdata">
        <p>{{data.name}}</p>
        <p>{{data.title}}</p>
        <ul>
          <li>法师</li>
        </ul>
        <ul class="shuxing">
          <li v-for="i in sxlb">
            <p>{{i}}</p>
            <div>
              <div></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg">
      <p>背景故事</p>
      <div>
        {{blurb}}
      </div>
    </div>

    <div class="jn">
      <el-tabs type="border-card">
        <el-tab-pane label="被动">
          <p class="passive">{{data.passive.name}} <span>被动技能</span></p>
          <p v-html="data.passive.description"></p>
        </el-tab-pane>

        <el-tab-pane v-for="(item,index) in data.spells" :label="jnn[index]">
          <p>{{item.name}} <span>快捷技能：{{jnn[index]}}</span></p>
          <p v-html="item.tooltip"></p>
          <ul>
            <li v-for="(i,index) in item.leveltip.effect" :key="index">
              <span>{{item.leveltip.label[index]}}</span>：
              <span>{{i}}</span>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        styleObject: {
          fontSize: '25px',
          height: '632px'
        },
        herosDetails:false,
        herosDetailsx:"",
        imgDZ:'http://ossweb-img.qq.com/images/lol/web201310/skin/big',
        arr:[],
        blurb:'',
        data:'',
        jnn:['Q','W','E','R'],
        sxlb:['物理攻击','魔法攻击','防御能力','上手难度']
      }
    },
    mounted(){
      let _this = this;
      let _id = _this.$route.params.id;
      console.log(_id);
      axios.get("http://localhost:3000/herosDetails?id="+_id)
        .then((res)=>{
          _this.herosDetailsx = JSON.parse(JSON.stringify(res.data.data.skins));
          _this.herosDetails = JSON.parse(JSON.stringify(res.data));
          console.log(res.data);
          _this.blurb=res.data.data.blurb;
          _this.data=res.data.data;
        })
    }
  }
</script>
<style>
  .margin{position: relative;height: 682px;}
  .el-carousel{padding-top: 50px;position: absolute;width: 100%;}
  .heroDetails .el-carousel__item>div {
    font-size: 14px;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .heroDetails .el-carousel__item>div>img{width:100%}
  .dfdata{height: 682px;width: 300px;position: absolute;z-index: 10;padding-top: 100px;margin-left: 40px;}
  .dfdata>p:nth-child(1){font-size: 24px;color: #fff;}
  .dfdata>p:nth-child(2){font-size: 42px;color: #fff;}
  .dfdata>ul:nth-child(3)>li{width: 35px;height: 21px;background-color: #00a383;color: #fff;border-radius: 5px;}
  .dfdata>.shuxing>li{overflow: hidden;}
  .dfdata>.shuxing>li>p{float: left;color: #fff;}
  .dfdata>.shuxing>li>div{width: 90px;height: 12px;background-color: #3a8ee6;float: left;}
  .dfdata>.shuxing>li>div>div{width: 40%;background-color: #333333;height: 100%;}
  .bg{margin-top: 30px;}
  .bg>p{font-size: 16px;color: #00a383;font-weight: 700;line-height: 48px;}
  .bg>div{
    padding: 28px 32px;
    font-size: 14px;
    line-height: 24px;
    text-indent: 2em;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    background: #fff;
  }
  .jn .el-tabs .el-tab-pane>p:nth-child(1){font-size: 16px;font-weight: 700;line-height: 48px;}
  .jn .el-tabs .el-tab-pane>p:nth-child(1)>span{font-size: 14px;color: #999;font-weight: normal;}
</style>
