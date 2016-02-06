angular.module('leasingApp').
    factory('VideochatService', function(){
        var CREDENTIALS = {
            appId: 34976,
            authKey: 'K4KO4ZxeSqM6yHU',
            authSecret: 'KOz-PRkGQ7V-Uh7'
            },
            calleesIds = [56, 76, 34],
            mediaParams = {
                audio: true,
                video: true,
                options: {
                    muted: false,
                    mirror: true
                },
                elemId: 'myVideo'
            };

        return {
            init: function(){
                QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret);
                //console.log(CREDENTIALS);
            },
            chat: function() {
                console.log(QB);
                QB.chat.connect({userId: 4355, password: 'password'}, function(err, roster) {
                    if (err) {
                        console.log(error);
                    } else {
                        console.log(roster);
                    }
                })
            },
            getMedia: function(){

                var sessionType = QB.webrtc.CallType.VIDEO,
                    session = QB.webrtc.createNewSession(calleesIds,sessionType);
                session.getUserMedia(mediaParams, function(err, stream){
                    if (err) {
                        console.log(err);
                    } else {
                        //session.attachMediaStream()
                    }
                })
            }
        }
    })