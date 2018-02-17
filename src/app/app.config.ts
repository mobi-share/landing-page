import { ICompileProvider } from 'angular';
import { StateProvider, StateDeclaration } from 'angular-ui-router';

import { loadLazyState, resolveLazyState } from './shared/util.service';

function configure($compileProvider: ICompileProvider, $stateProvider: StateProvider) {

    let isProductionBuild: boolean = __ENV !== "build";

    $compileProvider.debugInfoEnabled(!isProductionBuild);

    $stateProvider.state("home", <StateDeclaration>{
        lazyLoad: loadLazyState(function (resolve, $ocLazyLoad) {
            require.ensure([], function () {
                let lazyModule: any = require('./home/home.module');
                resolveLazyState(lazyModule, resolve, $ocLazyLoad);
            }, "home");
        }),
        component: "homeComponent",
        url: '/'
    }).state("privacy", <StateDeclaration>{
        lazyLoad: loadLazyState(function (resolve, $ocLazyLoad) {
            require.ensure([], function () {
                let lazyModule: any = require('./privacy/privacy.module');
                resolveLazyState(lazyModule, resolve, $ocLazyLoad);
            }, "privacy");
        }),
        component: "privacyComponent",
        url: '/privacy'
    });
}

configure.$inject = ['$compileProvider', '$stateProvider'];

export default configure;