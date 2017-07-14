require './detailStyles.scss'

module.exports = class
  @$inject = ["$scope"]
  constructor: (@$scope) ->
    @scope = @$scope
    @$scope.$on 'change', (event, data)=>
      @request(data)

  request: (data) ->
    ow = new XMLHttpRequest()
    ow.open('GET', 'http://api.openweathermap.org/data/2.5/weather?appid=49e65d0773eb41a5fc1eb12d52e0f2fc&id=' + data.id, false)
    ow.send()
    @weather = JSON.parse ow.responseText
    @iconURL = "http://openweathermap.org/img/w/"+@weather.weather[0].icon+".png"
    console.log data
    apixu = new XMLHttpRequest()
    apixu.open('GET', "http://api.apixu.com/v1/current.json?key=7d9bc315a26c4b079d612651171407&q=" + data.name, false)
    apixu.send()
    @apixu = JSON.parse apixu.responseText

