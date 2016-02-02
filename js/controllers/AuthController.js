angular.module('leasingApp')
.controller('AuthController', function(AuthService, $scope, $location){
        $scope.getUsername = function(){
            return (AuthService.getUsername())? AuthService.getUsername() : 'Unauthorized';
        };
        $scope.isLoggedIn = function() {
            return AuthService.isLoggedIn();
        };

        $scope.login = function() {
            //console.log($scope.email, $scope.password);
            var response = AuthService.login({
                username: $scope.username,
                password: $scope.password
            });
            response.then(function successResponse(response){
                console.log(response);
            }, function errorResponse(response){
                console.log(response);
            })
            //$location.path('/profile');
        };
        $scope.logout = function(){
            AuthService.logout();
            $location.path('/login')
        };

        $scope.test = function(){
            AuthService.test({
                username: 'admin',
                password: 'password'
            });
        };
        //return {
        //    isLoggedIn: isLoggedIn,
        //    getUsername: getUsername,
        //    login: login,
        //    logout: logout
        //}
    });