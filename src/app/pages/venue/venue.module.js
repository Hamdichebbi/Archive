(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Venue', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('NewVenue',{
      url:'/newVenue',
      templateUrl:'app/pages/venue/new_venue.html',
      title: 'New venue',
      sidebarMeta:{
          icon: 'ion-plus-round',
          order:600,
      },
        
    })
    
    .state('AllVenue',{
        url:'/allVenues',
        templateUrl:'app/pages/venue/venus.html',
        title: 'All venue',
      sidebarMeta:{
          icon: 'ion-plus-round',
          order:700,
    },

  });

}
})();
