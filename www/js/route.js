// 全局路由Js
angular.module('route', [
  'tab.route',
  'guidePage.route',
  'home.route',
  'category.route',
  // 'goodsList.route'
])

  .config(function($stateProvider, $urlRouterProvider) {

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

  });
