import { module } from 'angular';

import homeComponent from './home.component';
import homeRun from './home.run';

const Home = module('app.home', [])
    .component('homeComponent', homeComponent)
    .run(homeRun)
    .name;

export default Home;