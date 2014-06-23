angular.module('advertsModule', [])
.factory("AdvertsService", function($http, MAX_LENGTH) {
  return { 
          get_advert : function(advert_id) {
              var promise = $http.get('http://fahlo.loc/leasing/getAdvert?advert_id='+advert_id).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          create_advert: function(data) {
              var data = {
                           "title": "Test",
                           "description": "Test description",
                           "type_id": "1",
                           "group_id": "1",
                           "price": "50"
                         }
              var promise = $http.post('http://fahlo.loc/leasing/createAdvert', data).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          get_advert_comments: function(advert_id) {
              var promise = $http.get('http://fahlo.loc/leasing/getAdvertComments?advert_id='+advert_id).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          create_advert_commment: function(data) {
              var data = {
                           "advert_id": "62a9d59a-4498-412f-9595-a5190433b9d4",
                           "from_user_id": "6e12f572-ed56-43b8-9aaf-a7f08f4ff1af",
                           "description": "1"
                         }
              var promise = $http.post('http://fahlo.loc/leasing/createAdvertComment', data).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          get_adverts : function(type_id) {
              var promise = $http.get('http://fahlo.loc/leasing/getAdverts?type_id='+type_id).then(function (response) {
                  return response.data;
              });
              return promise;
          },
          get_user_adverts : function(user_id) {
              var promise = $http.get('http://fahlo.loc/leasing/getAdverts?user_id='+user_id).then(function (response) {
                  return response.data;
              });
              return promise;
          },

  }
})
