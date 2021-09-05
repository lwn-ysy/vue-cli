// 改文件专门用来创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import Message2 from '../pages/Message2'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: 'news',
                    component: Message
                },
                {
                    path: 'message',
                    component: Message2
                },
            ]
        },
        {
            path: '/home',
            component: Home
        },
    ]
})