var app = angular.module('app', []);

angular.module('app').controller('GithubCtrl', function ($scope, GithubSvc) {
        //test
        GithubSvc.fetchStories().success(function (users) {
            $scope.users = users
        })
});
angular.module('app').factory('GithubSvc', function ($http) {
        return {
            fetchStories: function () {
                return $http.get('https://api.github.com/users')
            }
        }
});