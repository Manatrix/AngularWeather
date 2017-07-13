require 'bootstrap-loader'
angular = require 'angular'

require './shared/style.scss'

config = require './config'
runner = require './runner'

weather = require './modules/weather'

navbar = require './shared/navbar'
cities = require './shared/cities'

angular
.module 'main', [weather]
.config config.default
.run runner.default
.directive 'navbar', navbar.default
.directive 'cities', cities.default

