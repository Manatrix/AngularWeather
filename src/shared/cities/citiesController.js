export default class citiesDirective {
    constructor($scope) {
        this.scope = $scope;
        this.name = $scope.name;
        this.model = $scope.model;
        this.collection = [{
            "id": 1850147,
            "name": "Tokyo",
            "country": "JP",
            "coord": {
                "lon": 139.691711,
                "lat": 35.689499
            }
        },
            {
                "id": 6058560,
                "name": "London",
                "country": "CA",
                "coord": {
                    "lon": -81.23304,
                    "lat": 42.983391
                }
            },
            {
                "id": 2988506,
                "name": "Paris",
                "country": "FR",
                "coord": {
                    "lon": 2.34864,
                    "lat": 48.85339
                }
            },
            {
                "id": 756135,
                "name": "Warsaw",
                "country": "PL",
                "coord": {
                    "lon": 21.01178,
                    "lat": 52.229771
                }
            },
            {
                "id": 2673730,
                "name": "Stockholm",
                "country": "SE",
                "coord": {
                    "lon": 18.064899,
                    "lat": 59.332581
                }
            },
            {
                "id": 658226,
                "name": "Helsinki",
                "country": "FI",
                "coord": {
                    "lon": 24.93417,
                    "lat": 60.17556
                }
            },
            {
                "id": 2950159,
                "name": "Berlin",
                "country": "DE",
                "coord": {
                    "lon": 13.41053,
                    "lat": 52.524368
                }
            },
            {
                "id": 524901,
                "name": "Moscow",
                "country": "RU",
                "coord": {
                    "lon": 37.615555,
                    "lat": 55.75222
                }
            },
            {
                "id": 498817,
                "name": "Saint Petersburg",
                "country": "RU",
                "coord": {
                    "lon": 30.264168,
                    "lat": 59.894444
                }
            },
            {
                "id": 2267056,
                "name": "Distrito de Lisboa",
                "country": "PT",
                "coord": {
                    "lon": -9.13333,
                    "lat": 39
                }
            },
            {
                "id": 6359304,
                "name": "Madrid",
                "country": "ES",
                "coord": {
                    "lon": -3.68275,
                    "lat": 40.489349
                }
            },
            {
                "id": 6356055,
                "name": "Barcelona",
                "country": "ES",
                "coord": {
                    "lon": 2.12804,
                    "lat": 41.399422
                }
            },
            {
                "id": 1816670,
                "name": "Beijing",
                "country": "CN",
                "coord": {
                    "lon": 116.397232,
                    "lat": 39.907501
                }
            },
            {
                "id": 2147714,
                "name": "Sydney",
                "country": "AU",
                "coord": {
                    "lon": 151.207321,
                    "lat": -33.867851
                }
            },
            {
                "id": 4140963,
                "name": "Washington, D. C.",
                "country": "US",
                "coord": {
                    "lon": -77.036369,
                    "lat": 38.895111
                }
            },
            {
                "id": 5128638,
                "name": "New York",
                "country": "US",
                "coord": {
                    "lon": -75.499901,
                    "lat": 43.000351
                }
            },
            {
                "id": 6094817,
                "name": "Ottawa",
                "country": "CA",
                "coord": {
                    "lon": -75.69812,
                    "lat": 45.411171
                }
            },
            {
                "id": 3469058,
                "name": "Brasilia",
                "country": "BR",
                "coord": {
                    "lon": -47.929722,
                    "lat": -15.77972
                }
            },
            {
                "id": 3435910,
                "name": "Buenos Aires",
                "country": "AR",
                "coord": {
                    "lon": -58.377232,
                    "lat": -34.613152
                }
            },
            {
                "id": 293397,
                "name": "Tel Aviv",
                "country": "IL",
                "coord": {
                    "lon": 34.780571,
                    "lat": 32.080879
                }
            }];
    }

    change() {
        this.scope.$emit('change', this.model.id);
    }
}
citiesDirective.$inject = ["$scope"];
