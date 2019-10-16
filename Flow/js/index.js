import modules from './modules/index.js'
/**
 * Flow 消息流组件
 */
export default class Flow {
    /**
     * @param {String} id 需要插入组件的地方（必填）
     * @param {Object} param1 配置信息 options（选填）
     */
    constructor(id, { dataList = []}) {
        if (!id) {
            console.error('id is required')
            return
        }
        this.id = id
        this.existHtml = ''
        this.dataList = dataList
        this._init()
    }
    static modules = modules
    static use(module) { // 可外部调用此静态方法，目的是把外部模块注入
        if (Array.isArray(module)) {
            module.forEach(el => this.use(el))
        } else {
            Flow.modules.push(module)
        }
    }
    _init() {
        this._loadModule(Flow.modules) // 初始化注入 Flow 组件的不同模块（如文件类型、图片类型……）
        this.add(this.dataList)

        document.getElementById(this.id).className = 'flow' // 窗口默认样式
    }
    _loadModule(modules) {
        modules.forEach(module => { // 和模块约定 install 方法
            module.install && typeof module.install == 'function' && module.install(this) // 将实例注入各个模块
        })
    }
    add(dataList) {
        const addHtml = this._getHtml(dataList)
        const $flow = document.getElementById(this.id)
        $flow.innerHTML = addHtml + this.existHtml
        this.existHtml = $flow.innerHTML
    }
    _getHtml(dataList) {
        let html = ''
        dataList.forEach(el => {
            const renderFn = `render${el.type}`
            if (renderFn) html += this[renderFn](el)
        })
        return html
    }
}
