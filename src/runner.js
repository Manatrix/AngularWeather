export default function Runner($state) {
    $state.go("weather-detail");
}
Runner.$inject = ["$state"];
