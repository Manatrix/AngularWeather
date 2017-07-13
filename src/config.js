export default function Config($locationProvider) {
	$locationProvider.html5Mode(true);
}
Config.$inject = ["$locationProvider"];
