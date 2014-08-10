angular.module('app').controller('GithubCtrl', function ($scope, GithubSvc) {
        //test
        GithubSvc.fetchStories().success(function (users) {
            $scope.users = users
        })
});