import { IComponentController, IComponentOptions } from 'angular';
import { StateService } from 'angular-ui-router';
import './privacy.component.scss';

class PrivacyController implements IComponentController {

    static $inject = ['$scope', '$state'];

    constructor(
        private $scope: Core.IVmScope,
        private $state: StateService
    ) {
        this.$scope.vm = this;
    }

    $onInit() {}

    goTo(state: string) {
        this.$state.go(state);
    }
}

const privacyComponent: IComponentOptions = {
    bindings: { $transition$: '<' },
    controller: PrivacyController,
    template: require('./privacy.component.html') as string
};

export default privacyComponent;