(function () {
  'use strict';

  angular.module('BlurAdmin.pages.new_pages', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('myNewPage',{
      url:'/newPage',
      templateUrl:'app/pages/new_pages/new_page.html',
      title: 'Nice page',
      sidebarMeta:{
          icon: 'ion-android-home',
          order:800,
      },
    });

  }

})();
