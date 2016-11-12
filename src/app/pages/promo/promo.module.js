(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Promo', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('NewPromo',{
      url:'/newPromo',
      templateUrl:'app/pages/promo/newPromo.html',
      title: 'New promo',
      sidebarMeta:{
          icon: 'ion-pricetag',      
      },
        
    })
    
    .state('AllPromos',{
        url:'/allPromos',
        templateUrl:'app/pages/promo/allPromo.html',
        title: 'All promos',
      sidebarMeta:{
          icon: 'ion-pricetags',
      },

  });

}
})();
