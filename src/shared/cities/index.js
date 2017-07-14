import Controller from './citiesController';
import Template from './cities.html';

export default function () {
    return {
        replace: true,
        template: Template,
        controller: Controller,
        controllerAs: 'cities',
        scope: {
            model: '='
            // name: '@'
        }
    };
}
