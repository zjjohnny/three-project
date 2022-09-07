export default [
    /* 忘记密码 */
    {
        path: '/RetrievePassword',
        name: 'RetrievePassword',
        meta: {isAuth: true},
        component: () => import('../../views/CRain/RetrievePassword.vue')
    },
    /* 重置密码 */
    {
        path: '/RestPassword',
        name: 'RestPassword',
        meta: {isAuth: true},
        component: () => import('../../views/CRain/RestPassword.vue')
    },
    /* 设置新密码 */
    {
        path: '/NewPassword',
        name: 'NewPassword',
        meta: {isAuth: true},
        component: () => import('../../views/CRain/NewPassword.vue')
    },
    /* 个人资料 */
    {
        path: '/PersonalData',
        name: 'PersonalData',
        meta: { isAuth: true },
        component:()=>import('../../views/CRain/PersonalData.vue')
    },
    /* 安全设置 */
    {
        path: '/SecuritySetting',
        name: 'SecuritySetting',
        meta: { isAuth: true },
        component:()=>import('../../views/CRain/SecuritySetting.vue')
    },
    /* 修改密码 */
    {
        path: '/ModifyPassword',
        name: 'ModifyPassword',
        meta: { isAuth: true },
        component:()=>import('../../views/CRain/ModifyPassword.vue')
    },
    /* 修改手机 */
    {
        path: '/ModifyPhone',
        name: 'ModifyPhone',
        meta: { isAuth: true },
        component:()=>import('../../views/CRain/ModifyPhone.vue')
    },
]