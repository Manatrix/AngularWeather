import "./selectorStyle.scss";
import SelectorController from "./selectorController";

export default function () {
    return {
        replace: true,
        template: require("./selector.html"),
        transclude: true,
        controller: SelectorController,
        controllerAs: "sl"
    };
}
