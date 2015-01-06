QuickTalkApp.controller("UserController", function (UsersService1, $scope, $routeParams, $location, $dialogs) {
    $scope.signin = function () {
        data = {
            "email": $scope.username,
            "password": $scope.password
        }
    }
});
