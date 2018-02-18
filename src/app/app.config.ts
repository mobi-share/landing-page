import { ICompileProvider } from 'angular';
import { StateProvider } from 'angular-ui-router';

function configure($compileProvider: ICompileProvider, $stateProvider: StateProvider) {

    let isProductionBuild: boolean = __ENV !== "build";

    $compileProvider.debugInfoEnabled(!isProductionBuild);

    $stateProvider.state("home", {
        url: "/",
        component: "homeComponent"
    }).state("privacy", {
        url: '/privacy',
        component: "privacyComponent"
    });
}

configure.$inject = ['$compileProvider', '$stateProvider'];

export default configure;