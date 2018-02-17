import { module } from 'angular';
import * as ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import configure from './core.config';

const core = module('app.core', [ngMaterial, uiRouter, 'ngMessages', 'oc.lazyLoad'])
    .config(configure)
    .name;

export default core;