/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('authenticationModule', [])


.service('Auth', ['$http','ExternalServices', function($http, ExternalServices){
    const defaultRoute = 'https://api.fitasize.com/v1/';
    var api = {
            urls: {
                authorise: defaultRoute + 'business/login',
                recoveryPassword: defaultRoute + '/business/recover'
            }
    }
    
    
    this.authenticate = function ( authenticationForm ) {
        var req = {
             method: 'POST',
             url: api.urls.authorise,
             headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
             data: { 
                 seller_account_number: authenticationForm.sellerAccountNumber,
                 secret_key: authenticationForm.secretKey,
                 ip_address: 'https://api.fitasize.com/ios'
                 
             }
         }
         
         return new Promise ( (resolve, reject ) => {
             $http(req)
            .then(
                    (respond) => {
                        resolve( respond );
                    },
                    (error) => {
                        reject(error);
                    }
                );
         })
         
         
    }
    
    
    
    this.recoverPassword = function( recoveryForm ){
       var req = {
           method: 'POST',
           headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
           url: api.urls.recoveryPassword,
           data: {
               email_address: recoveryForm.email,
               ip_address: 'testIp'
           }
       }
       
       return new Promise ( (resolve, reject) => {
           ExternalServices.getIpAddress()
                .then(
                        (ipAddress) => {
                            req.data.ip_address = ipAddress
                            $http(req)
                                .then(
                                        (respond) => {
                                            resolve(respond);
                                        },
                                        (error) => {
                                            reject(error);
                                        }
                                    )
                        }
                    )
       })
    }
}]);

