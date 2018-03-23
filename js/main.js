Vue.use(VueMaterial.default);
Vue.use(VueRouter);


function init(){
    
    const ListTemplate = { 
    props: [],
    template: '<mail-list></mail-list>' };
    
    
    const routes = [
                //{path: '/inbox', name: 'inbox', component: MailListTemplate},
            {path: '/settings', name: 'settings',  component: SettingsTemplate},
            {path: '/simplelist', name: 'simplelist', component: SimpleListTemplate},
            {path: '/advancedlist', name: 'advancedlist', component: ListTemplate},
        
            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
              message: 'Hola!'},
        methods: {
            goToInbox: function(){
                this.showNavigation = false;
                    router.push('inbox');
                },
            goToSettings: function(){
                this.showNavigation = false;
                    router.push({ name: 'settings'})
                },
            goToSimpleList: function(){
                this.showNavigation = false;
                    router.push('simplelist');
                },
            goToAdvancedList: function(){
                this.showNavigation = false;
                    router.push('advancedlist');
                }
        }
            
      }).$mount('#app');
    
    router.push({ name: 'settings'})
}

        

