/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('productsModule', [])


.service('ProductsService', ['$http', function($http){
    
    var apiUrl = 'https://api.fitasize.com/v1/';

    
    this.viewItemList = function(productsForm) {
        var req = {
            method: "GET",
            url: apiUrl + 'item/search',
            params: {
                filter: productsForm.filter,
                search_phrase: productsForm.search,
                //query_id: ''
            }
        }
        
        return new Promise ( (resolve, reject) => {
            $http(req)
                .then(
                    (respond) => {
                        console.log(respond),
                        resolve(respond.data)
                    },
                    (error) => {
                        console.log(error);
                        reject(error);
                    }
                )
        })
    }
    
    this.getBrandsList = function() {
        var req = {
            method: 'GET',
            url: apiUrl + 'brand/search',
            params: {
                clothing_type: 'jeans',
                search_phrase: '',
                query_id: ''
            }
        }
        
        return new Promise ( function(resolve, reject ) {
            $http(req)
            .then( function( response ) {
                resolve( response );
                console.log(response)
            },
            function( error ) {
                reject ( response )
            })
        })
    }
    
    this.loadBrandsSpecification = function( brandInfo) {
        req = {
           method: 'GET',
            url: apiUrl + 'brand/details',
            params: {
                brand_id: '1',
                clothing_type: 'jeans',
                gender: 'male'
            }  
        }
        
        return new Promise( (resolve, reject) =>{
            $http( req )
                .then( ( response ) => {
                    resolve(response);
                    console.log(response);
                },
                ( reject ) => {
                    console.log (reject )
                }
            )
        })
    }
    
   
    
    
}]);

