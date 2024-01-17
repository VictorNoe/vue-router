import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view')
            },
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
            {
                path: '/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path: '/tercero',
                name: 'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path: '/inicio-landpage',
                name: 'inicio-landpage',
                component: () => import('../components/InicioLandpage.vue')
            },
            {
                path: '/reservas-vuelos',
                name: 'reservas-vuelos',
                component: () => import('../components/ReservasVuelos.vue')
            },
            {
                path: '/vuelos-disponibles',
                name: 'vuelos-disponibles',
                component: () => import('../components/VuelosDisponibles.vue')
            },
            {
                path: '/vuelos-cancelados',
                name: 'vuelos-cancelados',
                component: () => import('../components/VuelosCancelados.vue')
            },
            {
                path: '/asientos-reservados',
                name: 'asientos-reservados',
                component: () => import('../components/AsientosReservados.vue')
            },
            {
                path: '/linea-vuelo',
                name: 'linea-vuelo',
                component: () => import('../components/LineaVuelos.vue')
            },
            {
                path: '/proximo-vuelos',
                name: 'proximo-vuelos',
                component: () => import('../components/ProximosVuelos.vue')
            },
        ]
    },
];
    
const router = new VueRouter({routes,});
export default router; 