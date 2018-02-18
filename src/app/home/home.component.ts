import { IComponentController, IComponentOptions } from 'angular';
import { StateService } from 'angular-ui-router';
import './home.component.scss';

class HomeController implements IComponentController {

    public userForm: any;
    public user = <{email: string, postcode: string}>{};
    private url: string = "https://script.google.com/macros/s/AKfycbxD-_ALl6hUb99I4wGYV5XWeEeg1jlPjOddc4AvZlN4vFOWSoo/exec";
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
            this.$http.get(this.url, {
                params: this.user,
                // data: angular.toJson(this.user),
                responseType: "json"
            }).then(() => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent("Thanks for signing up!")
                    .position('top right')
                );
            }, () => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                    .textContent("There was an error submitting your details! Please refresh the page and try again." )
                    .position('top right')
                );
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