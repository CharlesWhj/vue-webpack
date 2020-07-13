import Vue from 'vue'
import App from './App.vue'


const options = ['1','2','3']
const  status = '1'
if(options.includes(status)){
   let index =  options.findIndex(item=>item == status)
    console.log(index)
}

new Vue ({
    el : '#app',
    render: function (createElement) {
        return createElement(App)
    }
})