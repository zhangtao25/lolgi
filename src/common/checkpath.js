import store from '../store/index';

function checkpathHeros(to) {
  if (to.name!='hero') {
    store.dispatch("hidenHeros");
    console.log("关了")

  }else {
    store.dispatch("showHeros");
    console.log("开了")
  }
}

function checkpathPadding(to) {
  if (to.name!='hero'){
    store.dispatch("hidenPadding");
  }else {
    store.dispatch("showPadding");
  }
}

export default {checkpathHeros,checkpathPadding};
