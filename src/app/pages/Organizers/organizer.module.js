(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Organizer', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('NewOrganizer',{
      url:'/newOrganizer',
      templateUrl:'app/pages/Organizers/newOrganizer.html',
      title: 'New organizer',
      sidebarMeta:{
          icon: 'ion-ios-plus',
            
            
      },
        
    })
    
    .state('AllOrganizers',{
        url:'/allOrganizers',
        templateUrl:'app/pages/Organizers/allOrganizers.html',
        title: 'All organizers',
      sidebarMeta:{
          icon: 'ion-clipboard',
          
    },

  });

}
})();
