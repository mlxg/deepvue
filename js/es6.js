'use strict'
/**
 * 箭头函数
 * @param name
 * @returns {string}
 */
const greetings = name => `my_${name}`

/**
 * const
 * 可以修改其指向的对象的值。但是你不能修改其引用（reference）的值
 * @type {Array}
 */
const NAME = []
NAME.push('cai')    //true
//NAME = ['cai']      //false

/**
 * let
 * 允许开发者将变量的作用域限定在块级别。不会像var一样变量提升。
 */

/**
 * 参数默认值
 * 允许在函数定义的时候指定默认的值
 */

/**
 * 类定义和继承
 * 定义类(使用class关键字)，构造函数(使用constructor关键字)，和extend关键字来实现继承。
 */

/**
 * promise处理异步操作
 * @param a
 * @param b
 * @returns {Promise<any>}
 */
const isGreater = (a, b) => {
    return new Promise((resolve, reject) => {
        a > b ? resolve('big') : reject('small')
    })
}

isGreater(1, 2)
    .then(result => console.log(result))
    .catch(result => console.log(result))


/**
 * 模块的export和import
 * @type {{x: number, y: (function(): number)}}
 */
const mod = {x: 1, y: () => console.log('es5')}
export default mod

// import mod from './mod'

// exports.test = function () {
//     console.log('1');
// }


