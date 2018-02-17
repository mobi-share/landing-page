import { module } from 'angular';
import MessageService from './message.service';
import Loader from './loader/loader.module';

const Shared = module('app.shared', [Loader])
    .service('MessageService', MessageService)
    .name;

export default Shared;