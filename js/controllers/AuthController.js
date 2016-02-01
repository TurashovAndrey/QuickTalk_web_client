angular.module('leasingApp')
.controller('AuthController', function(AuthService, $scope, $location){
        $scope.getUsername = function(){
            return (AuthService.getUsername())? AuthService.getUsername() : 'Unauthorized';
        }
        $scope.isLoggedIn = function() {
            return AuthService.isLoggedIn();
        }

        $scope.login = function() {
            //console.log($scope.email, $scope.password);
            AuthService.login({
                username: $scope.email,
                password: $scope.password
            });
            $location.path('/profile');
        }
        $scope.logout = function(){
            AuthService.logout();
            $location.path('/login')
        }
        //return {
        //    isLoggedIn: isLoggedIn,
        //    getUsername: getUsername,
        //    login: login,
        //    logout: logout
        //}
    })