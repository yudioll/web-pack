# webpack特点
- 打包
- 翻译（loader）
- 插件（plugins）

loader 和 plugin 都是可插拔的

学习重点
1. 前端模块化
2. 理解webpack打包的核心思路
3. 理解webpack打包的“关键人物”

误区和规避
**避免直接看api**

## 前端模块化
1. 作用域
2. 标准模块写法

```javaScript
/**
 * 标准模块写法
 * @author yudioll
 * @param window 全局对象
 */
(function (window){
    var name = 'a'
    var sex= 'nv'
    function tell(){
        console.log('name==='+name)
        console.log('sex==='+sex)
    }
    // 声明a模块的方法
    window.a = {
        tell
    }
})(window)

```
## 模块化的优点
1. 作用域的封装
2. 可复用
3. 解除耦合



