//loader是个函数，plugin是个类
class CopyrightWebpackPlugin {
    //options为class实例化后的参数{name:'lee'}
    constructor(options) {
        console.log(options)
    }
    //compiler为webpack实例,hook为时间钩子
    apply(compiler) {
        //选择compile同步时刻
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('conpile');
        }),

            //选择emit异步时刻
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
                //npm run debug,当node打包时，打一个断点
                debugger;
                //compilation与这一次打包的相关东西
                console.log(compilation.assets);
                //增加一个文件
                compilation.assets['copyright.txt'] = {
                    // 文件内容
                    source: function () {
                        return 'copyright by dell lee'
                    },
                    // 文件大小
                    size: function () {
                        return 21;
                    }
                }
                //使用tapAsync必须回调
                cb();
            })
    }
}

module.exports = CopyrightWebpackPlugin;