/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('cardsModule', [])



.service('CardsService', ['$http', function($http){
   const apiUrl = 'https://api.fitasize.com/v1/';
    /**
    * Save card information
    */
    this.savePaymentCard = function ( cardPaymentForm ) {
        
        var req = {
            method: "POST",
            url: apiUrl+'/payment/card',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data : {
                user_account_id: cardPaymentForm.userAccount,
                shopper_account_id: cardPaymentForm.shopperAccountId,
                payer_name: cardPaymentForm.payerName,
                card_number: cardPaymentForm.cardNumber,
                expiry_date: cardPaymentForm.expireDate,
                cvv: cardPaymentForm.cvv,
                billing_city: cardPaymentForm.billingCity,
                billing_state: cardPaymentForm.billingState,
                billing_address: cardPaymentForm.billingAddress,
                billing_zipcode: cardPaymentForm.billingZipcode,
                billing_email_address: cardPaymentForm.billingEmailAddress,
                billing_telephone: cardPaymentForm.billingTelephone,
                save_card_for_reuse: cardPaymentForm.saveCardForReuse
            }
               
        };
        
        return new Promise ( (resolve, reject) => {
            $http(req)
                .then( function ( response ) {
                    resolve(response);
                }, function ( error ) {
                    reject( error );
                })
        })
    };
    
    this.getSavedCards = function() {
        var req = {
            method: 'POST',
            url: apiUrl + 'payment/swipe',
            params: {
                shopper_account_id: 2
                
            }
        }
        
        return new Promise ((resolve, reject) => {
            $http(req)
                .then (
                    ( response ) => {
                        resolve ( response );
                        console.log(response);
                    },
                    
                    ( reject ) => {
                        console.log(reject)
                    }
                    )
        })
    }
    
    this.saveSwipePaymentsDetails = function (){
        var req = {
            method: 'POST',
            url: apiUrl + 'payment/cards',
            params: {
                user_account_id: 2,
                shopper_account_id: 2,
                shopper_email_address: 'test@gmail.com',
                notes: 'test'
            }
        }
        
        return new Promise ((resolve, reject) => {
            $http(req)
                .then (
                    ( response ) => {
                        resolve ( response );
                        console.log(response);
                    },
                    
                    ( reject ) => {
                        console.log(reject)
                    }
                    )
        })
    }
    
    this.savePaypalInvoice = function() {
        var req = {
            method: 'POST',
            url: apiUrl + 'payment/paypal',
            params: {
                shopper_account_id: 2,
                paypal_email_address: 'test@gmail.com',
                notes: 'test'
                
            }
        }
        
        return new Promise ((resolve, reject) => {
            $http(req)
                .then (
                    ( response ) => {
                        resolve ( response );
                        console.log(response);
                    },
                    
                    ( reject ) => {
                        console.log(reject)
                    }
                )
        })
    }
}]);

