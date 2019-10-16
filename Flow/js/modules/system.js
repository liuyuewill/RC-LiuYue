export default {
    install(flow) {
        flow.rendersystem = function ({ content, uName, time }) { // 在实例上挂载 rendersystem 函数
            const html = `
                <div class="block">
                    <div class="time">${time}</div>
                    <div class="time system">${uName} ${content}</div>
                </div>
            `
            return html
        }
    }
}