import { createRouter, createWebHistory } from 'vue-router';
import product from '@/components/product.vue';
import cart from '@/components/cart.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{ path: '/', name: 'product', component: product }
             ,{ path: '/cart', name: 'cart', component: cart }
            ],
});

export default router;
