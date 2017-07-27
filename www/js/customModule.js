
angular.module('customModule', [])



.service('CustomService', ['$http', function($http){
    const apiUrl = "https://api.fitasize.com/v1/";
   this.saveCustomFittingOrder = function() {
        var req = {
        method: "POST",
        url: apiUrl + 'custom/order',
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data: {
            user_account_id: 2,
            shopper_account_id: 2,
            payment_method: 'paypal',
            session_id: 123,
            additional_instructions: 'not required field'
        }
    }
    
    return new Promise( (resolve, reject) =>{
        $http(req)
            .then (
                (respond) => {
                    console.log(respond);
                    resovle(respond);
                },
                (error) => {
                    console.log(error);
                    reject(error);
                }
                )
    })
   }
   
   this.addCustomOrderTracking = function( customOrderTrackingForm ){
       var req = {
           method: "POST",
           url: apiUrl + 'custom/tracking',
           headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
           },
           data: {
               fitting_id: 2,
               order_number: customOrderTrackingForm.orderNumber
           }
       }
       
       return new Promise ( (resolve, reject) => {
               $http(req)
                    .then( 
                        (respond) => {
                            console.log(respond);
                            resolve(respond);
                        },
                        
                        (error) => {
                            console.log(error);
                            reject(error);
                        }
                    )
           })
   }
   
   this.sendOrderNumberLink = function( customSendOrderNumberForm ){
       var req = {
           method: "POST",
           url: apiUrl + 'custom/link',
           headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
           },
           data: {
               fitting_id: 2,
               email_address: customSendOrderNumberForm.linkTo
               //email_address: 'depends on data', telephone: "depands on data"
           }
       }
       
       return new Promise( (resolve, reject) => {
           $http(req)
                .then(
                    
                    (respond) => {
                        resolve(respond);
                    },
                    
                    (error) => {
                        reject(error);
                    }
                    
                )
       })
   }
}]);

