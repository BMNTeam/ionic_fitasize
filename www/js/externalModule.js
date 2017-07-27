/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('externalModule', [])



.service('ExternalServices', ['$http',function($http){
     /**
    * Get user Ip Address
    * @return {Promise} ipAddress
    */
    this.getIpAddress = function () {
      var req = {
          method: 'GET',
          url: 'https://api.ipify.org/?format=json'
      }
      
     return new Promise( (resolve, reject) => {
         $http(req)
            .then(
               ( response ) => {
                   console.log('done');
                    resolve( response );
                },
                    
                ( error ) => {
                    reject( error );
                }
            )
        }) 
    }
    
}]);

