/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('fittingModule', [])



.service('FittingService', ['$http', 'ExternalServices', function($http, ExternalServices){
    const apiUrl = 'https://api.fitasize.com/v1/';
    
    this.loadFitDetails = function( fittingForm ) {
        var req = {
            method: 'GET',
            url: apiUrl + 'fitting/load',
            params: {
                email_address: fittingForm.emailOrPhone,
                password:      fittingForm.password,
                ip_address:    '192.168.1.1' // HARDCODED FOR NOW
            }
        }
        return new Promise ((resolve, reject) => {
            ExternalServices.getIpAddress()
                .then(
                    ( ipAddress) => {

                        //req.params.ip_address = ipAddress;
                         
                            $http(req)
                                .then(
                                    ( response ) => {
                                        resolve ( response );
                                    },
                                    
                                    ( error ) => {
                                        console.log(error)
                                        reject(error)
                                    }
                                )
                        })
                    }
            )
    }
    
    this.saveShopperFeedback = function () {
        var req = {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
            url: apiUrl + 'fitting/feedback',
            data: {
                //shopper_account_id: '',
                //email_address: '',
                brand_id: 2,
                item_id: 2,
                suggested_sizing: 21,
                feedback_value: 'Good product',
                feedback_comment: 'I would definetely recommend it to my friends',
                ip_address: '192.168.1.1',
                location: '',
                session_id: '',
                gender: 'male'
            }
        }
        return new Promise((resolve, reject) => {
            ExternalServices.getIpAddress()
                .then(
                    (ipAddress) => {
                       // req.data.ip_address = ipAddress;
                            $http(req)
                                .then(
                                    (respond) => {
                                        console.log(respond);
                                        resolve(respond);
                                    },
                                    
                                    (error) => {
                                        console.log(error);
                                        rejest(error);
                                    }
                                )
                            }
                        )
                    
                }
            )
    }
    
    this.processShopperFit = function() {
        var req = {
                method: 'POST',
                url: apiUrl + 'fitting/process',
                headers : {
                        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                data: {
                    shopper_account_id: '',
                    brand_id: 1,
                    item_id: 1,
                    sizing_country: 'United States',
                    sizing_value: 37,
                    //body_type: '', shoe_type: '', bottom_type: '',
                    measurements: {
                        measurement_1: 12,
                        measurement_2: 13
                    },
                    location: {
                        
                    }
                    
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
                    }
                )
        })
    }
    
    this.saveMeasurement = function(){
        var req = {
            method: "POST",
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                },
            url: apiUrl + 'fitting/measurement',
            data: {
                shopper_account_id: 2,
                measurements: {
                    measurement_1: 1,
                    measurement_2: 2
                }
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
                        reject(error)
                    }
                    )
        })
    }
}]);

