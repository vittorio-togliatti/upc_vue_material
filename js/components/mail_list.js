/*const MailListTemplate = {props: [], 
                      template:`
    <md-list class=""  id="maillist">
            <div 
                is="mail-item" 
                v-for="(shop, index) in tiendas"
                v-bind:key="shop.google_id"
                v-bind:name="shop.name"
                v-bind:adress="shop.adress"
                v-bind:distance="shop.distance"
                v-bind:google_id="shop.google_id"></div>
    </md-list>`
                     };*/


Vue.component('mail-list', {
    props: [],
    data: function () {
                        return {items:[{title:'Titulo 1', from:'Marc', text:'Hola soy Marc',id:1},
                                       {title:'Titulo 2', from:'Luis', text:'Hola soy Luis',id:2},
                                       {title:'Titulo 3', from:'John', text:'Hola soy John',id:3}
                                      ]
                                 }
                        },
    
    template: `
<md-list class=""  id="maillist">
            <div 
                is="mail-item" 
                v-for="(item, index) in items"
                v-bind:key="item.id"
                v-bind:title="item.title"
                v-bind:from="item.from"
                v-bind:text="item.text"></div>
    </md-list>
`,  
    
})
