import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import {auth} from '../firebase.ts';

const routes: RouteRecordRaw[] =[
     {
        path: '/',
        alias: '/cityshearch',
        component: () => import('../view/CitySearch.vue'),
    },
    {
        path: '/dashboard-trip',
        component: () => import('../view/DashboardTrip.vue'),
    },
    {
        path: '/connexion',
        component: () => import('../view/Connexion.vue'),
    },
    {
        path: '/inscription',
        component: () => import('../view/Inscription.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    await auth.authStateReady();
    
    const currentUser = auth.currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !currentUser) {
        return { name: 'login' };
    }
    if ((to.name === 'login' || to.name === 'register') && currentUser) {
        return { name: 'dashboard' };
    }
});

export default router;