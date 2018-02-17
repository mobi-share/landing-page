import { module } from 'angular';

import privacyComponent from './privacy.component';
import privacyRun from './privacy.run';

const Privacy = module('app.privacy', [])
    .component('privacyComponent', privacyComponent)
    .run(privacyRun)
    .name;

export default Privacy;