/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('registrationModule', [])



.service('RegistrationService', ['$http', '$state', 'ExternalServices', function( $http, $state, ExternalServices ){
   
    /**
    * Create user accound
    * @param {Object} registrationForm
    * @return {String} redirectTo
    */
    this.registerShopper = function( registrationForm ){
        
        var shopper = {
            company_name: registrationForm.companyName,
            contact_name: registrationForm.fullName,
            contact_email: registrationForm.userEmail,
            contact_telephone: registrationForm.cellPhone,
            
            address: registrationForm.companyAddress,
            city: registrationForm.companyCity,
            state: registrationForm.companyState,
            company_email: registrationForm.companyEmail,
            zipcode: registrationForm.companyZip,
            company_telephone: registrationForm.companyPhone,
            
            ip_address: '65.49.22.66',
            estimated_items: registrationForm.numberOfItems,
            estimated_turnover: registrationForm.annualTurnover
        };
        
        
        var req = {
             method: 'POST',
             url: 'https://api.fitasize.com/v1/business/seller_signup',
             headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
             data: shopper
        };
         
         
        ExternalServices.getIpAddress()
            .then( function( ipAddress) {
               // shopper.ip_address = ipAddress;
            })
            .then( function() {
                $http(req)
            .then(
                function( response ) {
                    // TODO
                    $state.go('tabsController.authorization');
                    console.dir( response )
                },
                function ( error ) {
                   console.log( "Error in authorization")
                }
            )
            })
         
         
    }
    
    
}]);

