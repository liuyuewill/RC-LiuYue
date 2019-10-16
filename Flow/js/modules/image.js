
export default {
    install(flow) {
        flow.renderimage = function ({ content, time, uType }) { // 在实例上挂载 renderimage 函数
            const imgClassName = uType ? 'image rightImg' : 'image leftImg'

            let html = `
                <div class="block">
                    <div class="time">${time}</div>
                    <img class="${imgClassName}" src="${content}"></img>
                </div>
            `
            return html
        }
    }
}