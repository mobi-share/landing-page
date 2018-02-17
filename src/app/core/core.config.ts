import * as moment from 'moment';
import { ILocationProvider } from 'angular';

function configure(
    $mdThemingProvider: ng.material.IThemingProvider,
    $mdDateLocaleProvider: ng.material.IDateLocaleProvider,
    $locationProvider: ILocationProvider) {

    const dateFormat = "DD/MM/YYYY";

    // Mobishare theme
    // $mdThemingProvider.definePalette('mobiPrimaryPalette', {
    //     '50': 'E8EAF6',
    //     '100': 'C5CAE9',
    //     '200': '9FA8DA',
    //     '300': 'e57373',
    //     '400': 'ef5350',
    //     '500': 'f44336',
    //     '600': 'e53935',
    //     '700': 'd32f2f',
    //     '800': 'c62828',
    //     '900': 'b71c1c',
    //     'A100': 'ff8a80',
    //     'A200': 'ff5252',
    //     'A400': 'ff1744',
    //     'A700': 'd50000',
    //     'contrastDefaultColor': 'light',
    //     'contrastDarkColors': ['50', '100',
    //     '200', '300', '400', 'A100'],
    //     'contrastLightColors': undefined
    // });

    // Angular material theme configuration
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('cyan', {
            'default': '500' // use shade 200 for default, and keep all other shades the same
        });

    // Angular material datepicker configuration    
    $mdDateLocaleProvider.formatDate = function (date) {
        return date ? moment(date).format(dateFormat) : '';
    };

    $mdDateLocaleProvider.parseDate = function (dateString) {
        var m = moment(dateString, dateFormat, true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };

    $locationProvider.html5Mode(true);
}

configure.$inject = ['$mdThemingProvider', '$mdDateLocaleProvider', '$locationProvider'];

export default configure;