function grandFather(){
  const a = 1
  return function father(){
    const b = 2
    return function(){
      const c = 3
      // 下面这个语句打断点就能知道闭包是啥了
      console.log(a, b, c)
    }
  }
}

const fn = grandFather()()
fn()