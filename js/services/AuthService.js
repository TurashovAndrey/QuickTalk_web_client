angular.module('leasingApp')
.service('AuthService', function(){
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
            username = data.username;
            password = data.password;
            //loggedIn = true;
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
        return {
            isLoggedIn: isLoggedIn,
            getUsername: getUsername,
            login: login,
            logout: logout
        }
    });