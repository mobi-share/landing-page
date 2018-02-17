import { TransitionService } from 'angular-ui-router';
import { preloadState } from '../shared/util.service';

function privacyRun($transitions: TransitionService) {

    $transitions.onStart({
        to: state => !!(state && state.includes["privacy"])
    }, transition => {
        let options = transition.options();
        return (options &&
            options.custom &&
            options.custom.ignoreAuthentication);
    });

    $transitions.onSuccess({
        to: state => {
            return (state && state.includes["privacy"]);
        }
    }, transition => preloadState(transition, "lazyParent"));
}

privacyRun.$inject = ['$transitions'];

export default privacyRun;