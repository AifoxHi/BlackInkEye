import Vue from 'vue'

const VModal = (component) => {
    return Vue.component('VModal',{
        render(createElement){
            return createElement(component)
        }
    })
}

export default VModal