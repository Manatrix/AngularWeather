export default class citiesDirective {
    constructor($scope) {
        this.name = $scope.name;
        this.model = $scope.model;
        this.collection = [{id: 0, name: "city1"}, {id: 1, name: "city2"}, {id: 2, name: "city3"}];
    }
}
citiesDirective.$inject = ["$scope"];
