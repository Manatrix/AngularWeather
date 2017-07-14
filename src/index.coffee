require 'bootstrap-loader'
angular = require 'angular'

require './shared/style.scss'

config = require './config'
runner = require './runner'

weather = require './modules/weather'

selector = require './shared/selector'
cities = require './shared/cities'

angular
.module 'main', [weather]
.config config.default
.run runner.default
.directive 'selector', selector.default
.directive 'cities', cities.default

