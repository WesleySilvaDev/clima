import { createWebHistory } from 'vue-router';
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './Views/Home.vue';
import Avaliacoes from './Views/Avaliacoes.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: '/avaliacoes',
        name: "avaliacoes",
        component: Avaliacoes
    }
]


export default new VueRouter({
    history: createWebHistory,
    routes
})


