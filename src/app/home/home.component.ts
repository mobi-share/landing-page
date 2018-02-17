import { IComponentController, IComponentOptions } from 'angular';
import { StateService } from 'angular-ui-router';
import './home.component.scss';

class HomeController implements IComponentController {

    static $inject = ['$scope', '$state'];

    constructor(
        private $scope: Core.IVmScope,
        private $state: StateService
    ) {
        this.$scope.vm = this;
    }

    $onInit() {
    }

    goTo(state: string) {
        this.$state.go(state);
    }
}

const homeComponent: IComponentOptions = {
    bindings: { $transition$: '<' },
    controller: HomeController,
    template: require('./home.component.html') as string
};

export default homeComponent;