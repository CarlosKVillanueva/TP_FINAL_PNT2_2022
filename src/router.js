import VueRouter from "vue-router";
import Vue from "vue";
import Turno from "@/components/Turno"
import Mascota from "@/components/Mascota"
import Familiar from "@/components/Familiar"
import HomeView from "@/components/HomeView"

Vue.use( VueRouter )

export const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/', redirect: '/home'
        },
        {
            path: '/home', component: HomeView
        },
        {
            path: '/turnos', component: Turno
        },
        {
            path: '/mascotas', component: Mascota
        },
        {
            path: '/familiar', component: Familiar
        }
    ]
} )