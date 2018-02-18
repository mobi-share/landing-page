import { module } from 'angular';
import MessageService from './message.service';

const Shared = module('app.shared', [])
    .service('MessageService', MessageService)
    .name;

export default Shared;