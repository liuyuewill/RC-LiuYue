export default {
    install(flow) {
        flow.rendertext = function ({ content, time, uType }) { // 在实例上挂载 rendertext 函数
            const txtClassName = uType ? 'txt rightMsg' : 'txt leftMsg'
            const html = `
                <div class="block">
                    <div class="time">${time}</div>
                    <div class="${txtClassName}">${content}</div>
                </div>
            `
            return html
        }
    }
}