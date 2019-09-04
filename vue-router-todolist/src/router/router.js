import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '../App.vue'
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import Person from '../components/Person.vue'
import TodoList from '../components/TodoList.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: App },
        { path: '/main', component: Main },
        { path: '/home', component: Home },
        { path: '/person', component: Person },
        { path: '/todolist', component: TodoList }
    ]
});

export default router;