import * as types from "./types";

export default {
  "showHeros":(state,payload)=> {
    state.herosState=true;
  },
  "hidenHeros":(state,payload)=> {
    state.herosState=false;
  },
  "hidenPadding":(state,payload)=> {
    state.padding='padding1 hero';
  },
  "showPadding":(state,payload)=> {
    state.padding='padding0 hero';
  },
}
