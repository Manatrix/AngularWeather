angular =  require 'angular'
ui_router =  require 'angular-ui-router'

config =  require './config'

detailCtrl =  require './detail'


module.exports = angular
  .module 'requests', [ui_router]
  .config config
  .controller 'detailCtrl', detailCtrl
  .name
