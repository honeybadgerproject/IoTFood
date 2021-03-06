;(function() {
"use strict";


angular.module("app.login" , [])


// disable spinner in loading-bar
/*.run(function($rootScope, $location, $cookieStore, UserFacebookID) {

  // register listener to watch route changes
  $rootScope.$on( "$routeChangeStart", function(event, next) {

    var current = $location.path();
    if(current == "/404") current = "/pages/signin";
    console.log("step 1... about to authenticate - toState: " + current  + " logged: " + UserFacebookID.logged);*/

    // Get cookie
   /* UserFacebookID.user = $cookieStore.get('userCached');
    if(UserFacebookID.user.status == "connected") {
    	UserFacebookID.logged == true;
        console.log(UserFacebookID.user);
    }*/

/*    console.log(UserFacebookID.logged);
    if ( UserFacebookID.logged == false ) {
      // no logged user, we should be going to #login (current path equal to signin)
      if ( current == "/pages/signin" ) {
        // already going to #login, no redirect needed
      //    $cookieStore.remove('userCached');
      } else {
        // not going to #login, we should redirect now (current path different to signin)
        console.log("step 2... save current state " + current);
        UserFacebookID.scopeState = current;
        console.log("step 3... jump to login  " +   UserFacebookID.scopeState);
        $location.path( "/pages/signin" );
        event.preventDefault();
      }
    }
    else {
    	if(current == "/pages/signin") $location.path( "/dashboard" );
    }

  });
})*/


// Root Controller
.controller("loginCtrl", ["$rootScope", "$scope", "$http", "$location", "$timeout", "$cookies", "$cookieStore", "$window", "Facebook", "UserFacebookID" , "profileFacebook",
        function($rs, $scope, $http, $location, $timeout, $cookies, $cookieStore, $window, Facebook, UserFacebookID, profileFacebook) {

          UserFacebookID.user.status = "connected";
          UserFacebookID.logged == true;


  //'loginCtrl', function($scope, $http, $timeout, $state, $cookies, $cookieStore, $window, Facebook, UserFacebookID
  //"$cookies", "$cookieStore",

  console.log("heloo wombath codes - inside LoginCtrl");



    // Define user empty data :/
    $scope.user = {};

    // Defining user logged status
    $scope.logged = false;

    // And some fancy flags to display messages upon user status change
    $scope.byebye = false;
    $scope.salutation = false;

    $scope.facebookProfile = {};


    ///
    /// Watch for Facebook to be ready.
    ///There's also the event that could be used
    ///

/*    $scope.$watch(
      function() {
         return Facebook.isReady();
       },
       function(newVal) {
         if (newVal)
           $scope.facebookReady = true;
       }
    );



    var userIsConnected = false;

    Facebook.getLoginStatus(function(response) {
      if (response.status == 'connected') {
        userIsConnected = true;
      }
    });*/

    ///
    /// IntentLogin
    ///
    $scope.IntentLogin = function() {
      //if(!userIsConnected) {
      //   $scope.login();
      // }

       $location.path("/dashboard");
    };

    /*

    var IntentLoginHTML = function(){
      console.log("step 4... starting the facebook login");
      Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          UserFacebookID.logged = true;

          $scope.me();

          console.log("step 5... jumping to the previus state");
          if(UserFacebookID.scopeState != "/pages/signin") {
          //  $location.path(UserFacebookID.scopeState);  uncomment
          }
        }

      }, {scope: 'email'});
    };

    ///// >>> emit
     var refreshProjectList = function(){
      console.log("/////>>>> refreshProjectList in emit");
      $scope.$emit('refreshProjectList', {});// res - your data
    };

    ///
    /// Login
    ///
    $scope.login = function() {
      // start login at the beggining
      console.log("step 4... starting the facebook login");
      Facebook.login(function(response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          UserFacebookID.logged = true;
          console.log("authenticate log 1..");
          console.log(response);

          UserFacebookID.access_token = response.authResponse.accessToken;
  */
          /*$http.get("https://graph.facebook.com/v2.2/me", {params: {access_token: access_token, fields: "name,email", format: "json" }}).then(function(result) {

            console.log(result);
            console.log(result.data.email);
            console.log(result.data.name);

          }, function(error) {
              alert("Error: " + error);
          });*/
/*
          $scope.me();

          console.log("step 5... jumping to the previus state");
          if(UserFacebookID.scopeState != "/pages/signin") {
          //  $location.path(UserFacebookID.scopeState);  uncomment
            console.log("authenticate log 2.. jump previus state");
          }
        }

      }, {scope: 'email'});
    };

    ///
    /// me
    ///
    $scope.me = function() {
      Facebook.api('/me', function(response) {
        ///
        /// Using $scope.$apply since this happens outside angular framework.
        ///

        console.log("authenticate log 4.. inside me");
        console.log(response);
        $scope.user = response;
        UserFacebookID.user = response;
        $cookies.userName =   UserFacebookID.user.name;
        $scope.platformCookie = $cookies.userName;
        $cookieStore.put('userCached', response);

        // call email
        var email;
        var pictureFacebook;
        var nameFacebook;
        var roleFacebook = 'wizard';
        $http.get("https://graph.facebook.com/v2.2/me", {params: {access_token: UserFacebookID.access_token, fields: "email", format: "json" }}).then(function(result) {
          console.log(result);
          console.log(result.data.email);
          email = result.data.email;
*/
          /******** new user *******/
  /*        console.log(email);

          UserFacebookID.email = email;

          var mainuserinfo = {
            user_name: UserFacebookID.user.name,
            user_email: UserFacebookID.email,
            user_owner: UserFacebookID.user.id
          }

          console.log(">>>>>> facebookProfile 1");
          pictureFacebook = 'https://graph.facebook.com/' + UserFacebookID.user.id + '/picture?type=small';
          nameFacebook =  UserFacebookID.user.name;


      		console.log(">>>>>> facebookProfile 2");
      		console.log(pictureFacebook);


          console.log(">>>>>>  1. insert user");
          console.log(mainuserinfo);

            $scope.facebookProfile.picture = pictureFacebook;
            console.log($scope.facebookProfile.picture);
            $scope.facebookProfile.name = nameFacebook;
            console.log($scope.facebookProfile.name);

            profileFacebook.name = nameFacebook;
            profileFacebook.picture = pictureFacebook;
            profileFacebook.flag = true;


          $http.post('/mainuserinfo', mainuserinfo).success(function(response) {
            console.log(response);
          });  */
          //********* end insert user  ******/
  /*      }, function(error) {
            alert("Error: " + error);
        });


        console.log("step 6... adding the user info");
        $scope.$apply(function() {
          $scope.user = response;
          UserFacebookID.user = response;
          console.log("authenticate log 3.. inside me");
          console.log(response);
        //  console.log(response.email);

          console.log("cookie >> step 1.. adding the user info to cookie");
          // Put cookie
          //$cookies.userName =   UserFacebookID.user.name;
          //$scope.platformCookie = $cookies.userName;
          //$cookieStore.put('userCached', response);
          console.log("set cookie");

          console.log("1. send the current user to sever");
          console.log(UserFacebookID.user);
          //refreshProjectList();

        });
      });
    }; */

    ///// >>> emit
  /*   var refreshProfileFacebook = function(){
      console.log("/////>>>> refreshProfileFacebook in emit");
      $scope.$emit('refreshProfileFacebook', {});// res - your data
    };*/
/*
    ///
    /// Logout
    ///
    $scope.logout = function() {
      Facebook.logout(function() {
        $scope.$apply(function() {
          $scope.user   = {};
          $scope.logged = false;
          UserFacebookID.user = {};
          // Removing a cookie
          $cookieStore.remove('userCached');
          console.log("remove cookie");
          UserFacebookID.logged = false;
          userIsConnected = false;
        //  $location.path("/pages/signin");  // uncomment
        //  event.preventDefault();
        });
      });
    };

    ///
    /// Taking approach of Events :D
    ///
    $scope.$on('Facebook:statusChange', function(ev, data) {
      console.log('Status: ', data);
      if (data.status == 'connected') {
        $scope.$apply(function() {
          $scope.salutation = true;
          $scope.byebye     = false;

          //UserFacebookID.user = $cookieStore.get('userCached');
          //console.log(UserFacebookID.user);
          //console.log("get cookie");

          //$scope.user   = {};
          $scope.logged = true;
          //UserFacebookID.user = {};
          UserFacebookID.logged = true;
        //  $location.path("/dashboard");  uncomment
          //refreshProjectList();

        });
      } else {
        $scope.$apply(function() {
          $scope.salutation = false;
          $scope.byebye     = true;
          userIsConnected = false;
        //  $cookieStore.remove('userCached');
          // Dismiss byebye message after two seconds
          $timeout(function() {
            $scope.byebye = false;
          }, 2000)
        });
      }
    });

*/

}])



// #end
})()
