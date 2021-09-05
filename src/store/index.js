import Vue from 'vue'
import Vuex from 'vuex'

//Vue注册插件Vuex
Vue.use(Vuex)

// 准备actions，用于相应组件中的动作
// content上下文类似minis$tore
const actions = {
    jiaOdd(context, value) {
        if (context.state.m % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);
    }
}

// 准备mutations，用于操作数据state
// 第一个参数是上下文content，但跟actions里的不一样，类似state
const mutations = {
    JIA(state, value) {
        state.m += value;
    },
    JIAN(state, value) {
        state.m -= value;
    }
}

// 准备state，用于存贮数据
const state = {
    m: 0,//求和
}

//准备getters。类似计算属性
const getters = {
    newM(state) {
        return state.m * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})