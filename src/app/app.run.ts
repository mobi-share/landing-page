import { StateService } from 'angular-ui-router';

function appRun($state: StateService) {
    $state.go("home");
}

appRun.$inject = ['$state'];

export default appRun;