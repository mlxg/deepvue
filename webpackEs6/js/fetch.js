import axios from 'axios'

const fetch = {
  async get(url, data){
    try{
      let res = await axios.get(url, {params: data})
      res = res.data
      return new Promise((resolve) => {
        resolve(res)
      })
    }catch(err){
      console.log(err)
    }
  }
}

const _fetch = {
  async get(url, data){
    try{
      let res = await axios.get(url, {params: data})
      return [null, res]
    }catch(err){
      return [err, null]
    }
  }
}
export {fetch}