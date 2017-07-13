config = ($stateProvider) ->
  $stateProvider

  .state 'weather-detail',
    url: '/weather'
    template: require './detail/detail.html'
    controller: 'detailCtrl'
    controllerAs: 'dt'

config.$inject = ['$stateProvider']

module.exports = config
