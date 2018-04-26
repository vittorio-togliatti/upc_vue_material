
const SimpleListTemplate = {props: [], 
                          data: function() {
                                  return {
                                    shoppingItems: [
                                      {name: 'Manzanas', price: '8'},
                                        {name: 'Naranjas', price: '4'},
                                        {name: 'Fresas', price: '6'},
                                        {name: 'Aguacate', price: '6'},
                                        {name: 'Brocoli', price: '3'},
                                        {name: 'Calabaza', price: '8'},
                                      {name: 'Lechuga', price: '4'}
                                    ],
                                    peliculas:[{"vote_count":1488,"id":337167,"video":false,"vote_average":6,"title":"Fifty Shades Freed","popularity":517.238296,"poster_path":"/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg","original_language":"en","original_title":"Fifty Shades Freed","genre_ids":[18,10749],"backdrop_path":"/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg","adult":false,"overview":"Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.","release_date":"2018-02-07"}]
                                  }
                                },
                      template:`
    <ul>
  <li v-for="item in shoppingItems">
    {{ item.name }} - {{ item.price }}
  </li>

<li v-for="peli in peliculas">
    {{ peli.title }} - {{ peli.original_language }}
  </li>
</ul>

`,
created: function () {
    var that = this;
    
    $.ajax({  
       type: "GET",  
       url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58786ad096ac8bfe31522e77ee3e92f8",  
       dataType: "json",  
       success: function(resp){  
        that.peliculas = resp.results;
        console.log(JSON.stringify(resp.results));
           
       },  
       error: function(e){  
         alert('Error121212: ' + e);  
       }  
     });
    
    
//    var promise = $.ajax('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58786ad096ac8bfe31522e77ee3e92f8');
//          //al terminar la promesa:
//          promise.done(function () {
//              console.log('Promesa terminada');
//          });
//
//          //si la promesa falla:
//          promise.fail(errorFunction);
//          //independientemente de un fail o un done, se ejecutará siempre y después del done o del fail:
//          promise.always(alwaysFunction);
          
    
    
    
//    var promise = getPeliculas();
//          //al terminar la promesa:
//          promise.done(function (resp) {
//              that.peliculas = resp.results;
//              console.log('Promesa terminada');
//          });
//              
//          //si la promesa falla:
//          promise.fail(errorFunction);
//          //independientemente de un fail o un done, se ejecutará siempre y después del done o del fail:
//          promise.always(alwaysFunction);
        
    
    
    }
};




function getPeliculas() {
    var deferred = $.Deferred();
    
    
    $.ajax({  
       type: "GET",  
       url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58786ad096ac8bfe31522e77ee3e92f8",  
       dataType: "json",  
       success: function(resp){  
            deferred.resolve(resp);
            console.log(JSON.stringify(resp.results));   
       },  
       error: function(e){  
         alert('Error121212: ' + e);  
       }  
     });
 
  return deferred.promise();
}

function errorFunction() {
    console.log('error logged');
}

function alwaysFunction() {
    console.log('always logged');
}

    


