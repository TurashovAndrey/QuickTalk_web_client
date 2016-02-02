angular.module('leasingApp')
.service('AuthService', ['$http', function($http){
        var username,
            password;
        function isLoggedIn() {
            return (username && password)? true : false;
            //return loggedIn;
        }
        function getUsername() {
            return username;
        }
        function login(data){
            if (isLoggedIn()) {
                alert('You are already logged in!');
                return;
            }
            //username = data.username;
            //password = data.password;
            //loggedIn = true;

            var response = $http.post('http://127.0.0.1:9000/api-auth/login/', data);
            return response;
        }

        function logout(){
            if (!isLoggedIn()) {
                alert('You are not logged in!');
                return;
            }
            username = undefined;
            password = undefined;
            //loggedIn = false;
        }

        function test(data){
            $http.get('http://127.0.0.1:9000/api-auth/login/').then(function successCallback(response){
                console.log(response)
            }, function errorCallback(response){
                console.log(response)
            })
        }
        return {
            isLoggedIn: isLoggedIn,
            getUsername: getUsername,
            login: login,
            logout: logout,
            test: test
        }
    }]);