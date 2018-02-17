import { TransitionService } from 'angular-ui-router';
import { preloadState } from '../shared/util.service';

function homeRun($transitions: TransitionService) {

    $transitions.onStart({
        to: state => !!(state && state.includes["home"])
    }, transition => {
        let options = transition.options();
        return (options &&
            options.custom &&
            options.custom.ignoreAuthentication);
    });

    $transitions.onSuccess({
        to: state => {
            return (state && state.includes["home"]);
        }
    }, transition => preloadState(transition, "lazyParent"));
}

homeRun.$inject = ['$transitions'];

export default homeRun;