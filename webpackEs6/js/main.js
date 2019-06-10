import buttonSetTime from './buttonSetTime'
import {fetch} from './fetch'
import {api} from './api'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../less/main.less'

Vue.use(ElementUI);

buttonSetTime('btn').init({
  index: 5,
  start: '获取验证码',
  during: '秒后重新获取..',
  end: '重新获取',
  fn: async function(){
    // p_fetch
    let {data} = await fetch.get(api.get_brand_product_list)
    // let [err, res] = await fetch.get(api.get_brand_product_list)
    console.log(data)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
});


