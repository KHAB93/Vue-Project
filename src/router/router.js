import {createRouter} from "vue-router"
import {createWebHistory} from "vue-router"

import HomeFeed from "../views/HomeFeed.vue";
import PageNofound from "../views/PageNofound.vue";


const routes = [
{ 
    path: '/',
    name: "HomeFeed",
    component: HomeFeed
},
{
    path: '/:pathMatch(.*)*',
    name: "PageNoFound",
    component: PageNofound
},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 