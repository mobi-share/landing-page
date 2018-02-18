import { module } from 'angular';

import appComponent from './app.component';
import configure from './app.config';
import runBlock from './app.run';
import Core from './core/core.module';
import Shared from './shared/shared.module';
import homeComponent from './home/home.component';
import privacyComponent from './privacy/privacy.component';

const AppModule: string = module('app', [Core, Shared])
    .component('appComponent', appComponent)
    .component('homeComponent', homeComponent)
    .component('privacyComponent', privacyComponent)
    .config(configure)
    .run(runBlock)
    .name;

angular.bootstrap(document, [AppModule]);

