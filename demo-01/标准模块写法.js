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