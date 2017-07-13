import "./navbarStyle.scss";
import NavbarController from "./navbarController";

export default function () {
	return {
		replace: true,
		template: require("./navbar.html"),
		transclude: true,
		controller: NavbarController,
		controllerAs: "nb"
	};
}
