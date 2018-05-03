import * as types from "./types";

export default {
  "showHeros":({commit,state},payload)=>{
    commit("showHeros",payload);
    console.log(0);
  },
  "hidenHeros":({commit,state},payload)=>{
    commit("hidenHeros",payload);
    console.log(1);
  },
  "showPadding":({commit,state},payload)=>{
    commit("showPadding",payload);
    console.log(1);
  },
  "hidenPadding":({commit,state},payload)=>{
    commit("hidenPadding",payload);
    console.log(1);
  },
}
