import buttonSetTime from './buttonSetTime'
import {fetch} from './fetch'
import {api} from './api'

import '../less/main.less'

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
