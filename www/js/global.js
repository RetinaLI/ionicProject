// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('global', [])
  .constant("GlobalVariable",{
  'SERVER_PATH':'192.168.1.1',
  'HTTP':'https',
  'PORT':'8080',
  'VERSION':"1.0.1"

  })

