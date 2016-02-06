angular.module('leasingApp').
    controller('ChatController', function($scope, VideochatService){
        $scope.videoID = 'myVideo';
        VideochatService.init();
        //VideochatService.chat();
        VideochatService.getMedia();
    })