const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('src/pages/ClockingInPage.vue') },
            { path: 'timeCalculator', component: () => import('src/pages/TimeCalculatorPage.vue') },
            { path: 'rezip', component: () => import('src/pages/RezipPage.vue') },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes
