'use strict';

app.factory('Auth',
            function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope, $location) {
              var ref = new Firebase(FIREBASE_URL);
              var userAuth = null;

              var authTool = new FirebaseSimpleLogin(ref, function(error, user) {
                if (error) {
                  console.log(error);
                }
                if (user) {
                  userAuth = user;
                  console.log(userAuth);
                  $location.path('/');
                }
                else {
                  $rootScope.user = null;
                  console.log('No user logged in');
                  $location.path('/');
                }
              });

              var Auth = {
                register: function (user) {
                  return authTool.createUser(user.email, user.password);
                },
                signedIn: function() {
                  console.log(userAuth);
                  return userAuth !== null;
                },
                login: function(user) {
                  return authTool.login('password', user);
                },
                logout: function() {
                  authTool.logout();
                  console.log('Logged out');
                }
              };
              $rootScope.signedIn = function() {
                return Auth.signedIn();
              };

              return Auth;
            });
