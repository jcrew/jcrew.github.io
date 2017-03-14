var jaeyoon = angular.module('jaeyoon', ['angular-timeline', 'ngPrettyJson']);

jaeyoon.controller('timelineCtlr', ['$scope', function ($scope) {

    $scope.whoami = {
        jaeyoon: {
            occupation: 'Software Engineer',
            languages: ['English', 'Korean'],
            interests: ['Web', 'UX', 'Data Analysis', 'Speech Recognition', 'NLP', 'Machine Learning']
        }
    };

    // Timeline Event Model
    $scope.events = [{
        title: '2014.05',
        type: 'job',
        location: '',
        content: 'Siri @ Apple Inc'
    }, {
        title: '2013.11',
        type: 'job',
        location: '',
        content: 'Skyfire Labs'
    }, {
        title: '2012.02',
        type: 'job',
        location: '',
        content: 'Opera Software Americas, LLC'
    }, {
        title: '2008.09',
        type: 'job',
        location: '',
        content: 'Opera Software Korea'
    }, {
        title: '2006.08',
        type: 'job',
        location: '',
        content: 'NCOIC @ US Army'
    }, {
        title: '2001.08',
        type: 'job',
        location: '',
        content: 'University of North Texas'
    }];

    // $scope.animateIn = function($el) {
    //     $el.removeClass('hidden');
    //     $el.addClass('fadeIn');
    // };
    //
    // $scope.animateOut = function($el) {
    //     $el.addClass('hidden');
    //     $el.removeClass('fadeIn');
    // };
}]);