import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

require('promise.prototype.finally').shim()

const app = new Vue({
    ...App
})
app.$mount()
