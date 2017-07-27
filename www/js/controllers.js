angular.module('app.controllers', [])
  
.controller('authorizationCtrl', ['$scope', '$stateParams', 'Auth', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Auth, $http) {
 console.log(123);
 var accountNumber = '';
 var accountSecret = '';
 
 $scope.authorize = function (authorizationForm){
     if (authorizationForm === undefined) {
        alert('Please fill all fields');
        return
     }
     
     Auth.authenticate( authorizationForm )
        .then(
                (respond) => {
                    console.log(respond)
                }
            )
    
 }
 

}])
   
.controller('passwordRecoveryCtrl', ['$scope', '$stateParams', 'Auth', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Auth) {
    
    $scope.recoverPassword = function(recoveryForm) {
        Auth.recoverPassword( recoveryForm )
            .then(
                    (respond) => {
                        console.log(respond)
                    }
                )
    }

}])
   
.controller('registrationFormCtrl', ['$scope', '$stateParams', 'RegistrationService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, RegistrationService) {
    function validate( field ) {
        
    }
    var string = 'some@mail.ru';
    
    $scope.createAccount = function( registrationForm ) {
        
        //alert(JSON.stringify(registrationForm))
        //ValidationService.isEmail( registrationForm.userEmail );
        //alert(JSON.stringify(registrationForm.$invalid))
        RegistrationService.registerShopper( registrationForm );
        //RegistrationService.getIpAddress();
    }
}])
   
.controller('productsCtrl', ['$scope', '$stateParams', 'ProductsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ProductsService) {
    
    $scope.products =  new Object();
    
    $scope.receiveProducts = function( productsForm ) {
        var getProducts = ProductsService.getProducts();
       
        
        getProducts.then(function(data) {
            $scope.products = data;
            $scope.$apply();
            $scope.$digest();
            
            //alert(JSON.stringify($scope.products))
        })
    }
    
    $scope.viewItemList = function() {
        ProductsService.viewItemList()
            .then(
                (respond) => {
                    console.log(respond)
                }
                )
    }
}])
   
.controller('products2Ctrl', ['$scope', '$stateParams', 'FittingService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FittingService) {

$scope.rating = 0;

$scope.estimate = (rating) => {
    $scope.rating = rating;
}

$scope.sendFitDetails = ( sendFitDetailsForm ) => {
    FittingService.saveShopperFeedback()
        .then(
                ( respond ) => {
                    console.log( respond )
                }
            )
}
}])
   
.controller('chooseAnItemTheShopperWantsToPurchaseCtrl', ['$scope', '$stateParams', 'FittingService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, FittingService) {
    
    $scope.showErrorMessage = false;
    
    $scope.loadFitDetails = function( fittingForm ){
        FittingService.loadFitDetails( fittingForm )
            .then(
                (respond) => {
                    ( respond.data.message == 'invalid_credentials') ? $scope.showErrorMessage = true : $scope.showErrorMessage = false
                    $scope.$apply()
                    console.log(respond);
                }
            )
    }
}])
   
.controller('cozyLooseTurtleneckTopCtrl', ['$scope', '$stateParams', 'ProductsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, ProductsService) {
    $scope.brandsList = new Object();

    $scope.getBrandsList = function() {
        ProductsService.getBrandsList()
            .then(function( response ) {
                $scope.brandsList = response.data.data;
                $scope.$apply();
            })
        ProductsService.loadBrandsSpecification();
    }
}])
   
.controller('cozyLooseTurtleneckTop2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('paymentOptionsPageCtrl', ['$scope', '$stateParams', 'CardsService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, CardsService) {

    $scope.showedTab = 1;

    $scope.getSavedCards = () => {
        CardsService.getSavedCards();
    }

    $scope.showTab = ( tabNumber) => {
        $scope.showedTab = tabNumber;
    }

    $scope.submitOrder = ( cardPaymentForm ) => {
        CardsService.savePaymentCard( cardPaymentForm )
            .then (
                (response) => {
                    console.dir(response);
                }
            )
    }
}])
   
.controller('customFitOrderHasCtrl', ['$scope', '$stateParams', 'CustomService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, CustomService) {

    $scope.showedTab = 1;
    
    $scope.showTab = function ( tabNumber ) {
        $scope.showedTab = tabNumber;
    }
    
    $scope.addTracking = function( customOrderTrackingForm ) {

        CustomService.addCustomOrderTracking( customOrderTrackingForm )
            .then (
                (respond) => {
                    console.log('done');
                }
            )
    }
    
    $scope.sendOrderNumberLink = function( customSendOrderNumberForm ) {
        CustomService.sendOrderNumberLink( customSendOrderNumberForm )
            .then (
                    (respond) => {
                        console.log(respond)
                    }
                )
    }
}])
   
.controller('customFitOrderCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 