import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/product/Index.vue";
import ProductDetails from "@/product/ProductDetails.vue";
import Cart from '@/product/Cart.vue'

const routes = [
    {
        path: "/",
        name: "ProductList",
        component: ProductList,
    },
    {
        path: "/product/:id",
        name: "ProductDetails",
        component: ProductDetails,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
