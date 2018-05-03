<template>
  <div :class="padding">
    <router-view></router-view>
    <ul v-if="herosData" v-show="herosState">
      <li v-for="data in herosData.data" @click="go(data)">
        <img :src="'http://ossweb-img.qq.com/images/lol/img/champion/'+data.image.full" alt="">
        <p>{{data.id}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      heroImgs:Array(100),
      herosData:false
    }
  },
  methods:{
    go(data){
      this.$router.push({name:'heroDetails',params:{id:data.id}});
    }
  },
  mounted(){
    let _this = this;
    axios.get("http://localhost:3000/heros")
      .then((res)=>{
        console.log(res.data);
        _this.herosData=res.data;
      })
  },
  computed:{
    ...mapGetters(["herosState","padding"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .padding0{padding: 30px 37px 30px 30px;box-sizing: border-box;}
  .padding1{padding: 0;box-sizing: border-box;}
  .hero>ul{overflow: hidden;}
  .hero>ul>li{float: left;width: 90px;height: 100px;margin-bottom: 22px;}
  .hero>ul>li>img{display: block;width: 65px;margin: 0 auto;}
  .hero>ul>li>p{text-align: center;color: #333333;font-size: 12px;line-height: 24px;}
</style>
