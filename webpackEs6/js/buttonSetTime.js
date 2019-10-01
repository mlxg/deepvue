/**
 * 倒计时功能
 */
function ButtonSetTime(ele){
  this.element = document.getElementById(ele)
}

/**
 * 初始化obj
 * @param obj
 */
ButtonSetTime.prototype.init = function(obj){
  this.index = obj.index
  this.start = obj.start || "获取验证码"
  this.during = obj.during || '秒后重新获取..'
  this.end = obj.end || this.start
  this.element.innerHTML = this.start
  const that = this
  this.element.onclick = function(){
    that.element.setAttribute('disabled', true)
    that.element.innerHTML = that.index + that.during

    const timeId = setInterval(function(){
      that.index--
      if(that.index === 0){
        clearInterval(timeId)
        that.element.innerHTML = that.end
        that.element.removeAttribute('disabled')
        that.index = obj.index
      }else{
        that.element.innerHTML = that.index + that.during
      }
    }, 1000)

    if(obj.fn){
      that.fn(obj.fn)
    }
  }
}
/**
 * 回调
 * @param fn
 */
ButtonSetTime.prototype.fn = function(fn){
  fn()
}

const buttonSetTime = function(ele){
  return new ButtonSetTime(ele)
}

export default buttonSetTime
