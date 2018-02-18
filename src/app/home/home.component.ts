import { IComponentController, IComponentOptions } from 'angular';
import { StateService } from 'angular-ui-router';
import './home.component.scss';

class HomeController implements IComponentController {

    public userForm: any;
    public user = <{email: string, postcode: string}>{};
    private url: string = "";
    static $inject = ['$scope', '$state', '$http', '$mdToast'];

    constructor(
        private $scope: Core.IVmScope,
        private $state: StateService,
        private $http: ng.IHttpService,
        private $mdToast: ng.material.IToastService
    ) {
        this.$scope.vm = this;
    }

    $onInit() {
    }

    goTo(state: string) {
        this.$state.go(state);
    }

    sendFormData() {
        if (this.userForm.$valid) {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent("Thanks for signing up!")
                .position('top right')
            );
            this.$http.get(this.url, {
                data: this.userForm.serializeObject(),
                responseType: "json"
            });
        } else {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent("Please provide both an email and a postcode.")
                .position('top right')
            );
        }
    }
}

const homeComponent: IComponentOptions = {
    bindings: { $transition$: '<' },
    controller: HomeController,
    template: require('./home.component.html') as string
};

export default homeComponent;