angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.authorization', {
    url: '/login',
    views: {
      'tab1': {
        templateUrl: 'templates/authorization.html',
        controller: 'authorizationCtrl'
      }
    }
  })

  .state('passwordRecovery', {
    url: '/recovery',
    templateUrl: 'templates/passwordRecovery.html',
    controller: 'passwordRecoveryCtrl'
  })

  .state('tabsController.registrationForm', {
    url: '/register',
    views: {
      'tab1': {
        templateUrl: 'templates/registrationForm.html',
        controller: 'registrationFormCtrl'
      }
    }
  })

  .state('products', {
    url: '/page7',
    templateUrl: 'templates/products.html',
    controller: 'productsCtrl'
  })

  .state('products2', {
    url: '/page11',
    templateUrl: 'templates/products2.html',
    controller: 'products2Ctrl'
  })

  .state('chooseAnItemTheShopperWantsToPurchase', {
    url: '/page8',
    templateUrl: 'templates/chooseAnItemTheShopperWantsToPurchase.html',
    controller: 'chooseAnItemTheShopperWantsToPurchaseCtrl'
  })

  .state('cozyLooseTurtleneckTop', {
    url: '/page9',
    templateUrl: 'templates/cozyLooseTurtleneckTop.html',
    controller: 'cozyLooseTurtleneckTopCtrl'
  })

  .state('cozyLooseTurtleneckTop2', {
    url: '/page10',
    templateUrl: 'templates/cozyLooseTurtleneckTop2.html',
    controller: 'cozyLooseTurtleneckTop2Ctrl'
  })

  .state('paymentOptionsPage', {
    url: '/page12',
    templateUrl: 'templates/paymentOptionsPage.html',
    controller: 'paymentOptionsPageCtrl'
  })

  .state('customFitOrderHas', {
    url: '/page13',
    templateUrl: 'templates/customFitOrderHas.html',
    controller: 'customFitOrderHasCtrl'
  })

  .state('customFitOrder', {
    url: '/page14',
    templateUrl: 'templates/customFitOrder.html',
    controller: 'customFitOrderCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page15',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page1/login')


});