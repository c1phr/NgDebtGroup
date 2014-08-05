'use strict';

app.factory('Auth',
            function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
              var ref = new Firebase(FIREBASE_URL);

              var auth = new FirebaseSimpleLogin(ref, function(error, user) {
                if (error) {
                  console.log(error);
                }
                if (user) {
                  $rootScope.user = user;
                  console.log(user);
                }
                else {
                  $rootScope.user = null;
                  console.log('No user logged in');
                }
              });

              var Auth = {
                register: function (user) {
                  return auth.$createUser(user.email, user.password);
                },
                signedIn: function() {
                  console.log($rootScope.user);
                  return $rootScope.user !== null;
                },
                login: function(user) {
                  return auth.login('password', user);
                },
                logout: function() {
                  auth.logout();
                  console.log('Logged out');
                }
              };
              $rootScope.signedIn = function() {
                return Auth.signedIn();
              };

              return Auth;
            });
