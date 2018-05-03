<template>
  <div id="app">
    <div class="box">
      <ul class="nav">
        <router-link to="/hero" tag="li" active-class="active-class-green">英雄</router-link>
        <router-link to="/goods" tag="li" active-class="active-class-green">物品</router-link>
        <router-link to="/summonerSkill" tag="li" active-class="active-class-green">召唤师技能</router-link>
        <router-link to="/fuwen" tag="li" active-class="active-class-green">符文</router-link>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*@import url(../static/init.css);*/
  #app{
    background-color: #F7F8F8;
  }
  #app .box{
    width: 1240px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
  }
  #app .box ul.nav{display: flex;background-color: #F0F0F0;}
  #app .box ul.nav li{
    display: block;
    border-top: 4px solid #D7D7D7;
    height: 49px;
    line-height: 48px;
    width: 160px;
    text-align: center;
    color: #525252;
    font-size: 16px;
    cursor: pointer;
  }
  #app .box ul.nav li:hover{
    border-top: 4px solid #00A383;
    color: #00A383;
  }
  #app .box ul.nav .active-class-green{background-color: white;color: #00A383;border-top: 4px solid #00A383;}
</style>
