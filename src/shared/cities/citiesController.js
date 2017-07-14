import _ from 'lodash';
export default class citiesDirective {
    constructor($scope) {
        this.scope = $scope;
        // this.name = $scope.name;
        this.model = {
            "id": 498817,
            "name": "Saint-Petersburg"
        };
        this.scope.$emit('change', this.model);
        this.collection = [
            {
                "id": 1850147,
                "name": "Tokyo"
            },
            {
                "id": 6058560,
                "name": "London"
            },
            {
                "id": 2988506,
                "name": "Paris"
            },
            {
                "id": 756135,
                "name": "Warsaw"
            },
            {
                "id": 2673730,
                "name": "Stockholm"
            },
            {
                "id": 658226,
                "name": "Helsinki"
            },
            {
                "id": 2950159,
                "name": "Berlin"
            },
            {
                "id": 524901,
                "name": "Moscow"
            },
            {
                "id": 498817,
                "name": "Saint-Petersburg"
            },
            {
                "id": 2267056,
                "name": "Lissabon"
            },
            {
                "id": 6359304,
                "name": "Madrid"
            },
            {
                "id": 6356055,
                "name": "Barcelona"
            },
            {
                "id": 1816670,
                "name": "Beijing"
            },
            {
                "id": 2147714,
                "name": "Sydney"
            },
            {
                "id": 4140963,
                "name": "Washington"
            },
            {
                "id": 5128638,
                "name": "New-York"
            },
            {
                "id": 6094817,
                "name": "Ottawa"
            },
            {
                "id": 3469058,
                "name": "Brasilia"
            },
            {
                "id": 3435910,
                "name": "Buenos-Aires"
            },
            {
                "id": 293397,
                "name": "Tel-Aviv"
            }];
    }

    change() {
        let data = _.find(this.collection, ['id', this.model.id]);
        this.scope.$emit('change', data);
    }
}
citiesDirective.$inject = ["$scope"];
