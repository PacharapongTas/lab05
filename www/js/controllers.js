angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.islogin = true;
  $scope.islogout = false;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout = function() {
  $scope.loginData = {};
  $scope.islogin = true;
  $scope.islogout = false;
  $scope.loginData.username = '';
  $scope.loginData.password = '';
  $scope.loginData.loginErr = '';

};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    if(($scope.loginData.username == "admin")&&($scope.loginData.password == "1234")){
            $scope.islogin = false;
            $scope.islogout = true;
            $scope.closeLogin();
          }else{
            $scope.loginData.loginErr = "Error pls check your username and password !!!!";
            $scope.closeLogin();
          }
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.$on('$ionicView.enter', function(){
    console.log('PlayListsView - enter');
  });

  $scope.$on('$ionicView.leave', function(){
     console.log('PlayListsView - leave');
  });

  $scope.$on('$ionicView.beforeEnter', function(){
     console.log('PlayListsView - beforeEnter');
  });

  $scope.$on('$ionicView.afterEnter', function(){
     console.log('PlayListsView - afterEnter');
  });

  $scope.$on('$ionicView.beforeLeave', function(){
     console.log('PlayListsView - beforeLeave');
  });

  $scope.$on('$ionicView.afterLeave', function(){
     console.log('PlayListsView - afterLeave');
  });

  $scope.$on('$ionicView.unloaded', function(){
     console.log('PlayListsView - unloaded');
  });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.$on('$ionicView.enter', function(){
    console.log('DetailsView - enter');
  });

  $scope.$on('$ionicView.leave', function(){
     console.log('DetailsView - leave');
  });

  $scope.$on('$ionicView.beforeEnter', function(){
     console.log('DetailsView - beforeEnter');
  });

  $scope.$on('$ionicView.afterEnter', function(){
     console.log('DetailsView - afterEnter');
  });

  $scope.$on('$ionicView.beforeLeave', function(){
     console.log('DetailsView - beforeLeave');
  });

  $scope.$on('$ionicView.afterLeave', function(){
     console.log('DetailsView - afterLeave');
  });

  $scope.$on('$ionicView.unloaded', function(){
     console.log('DetailsView - unloaded');
  });
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('app.browse');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ChatsCtrl', function($scope, Chats){
  Chats.getUsers().then(function(chats){
    $scope.chats = chats;
  });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  var index = $stateParams.index;
  $scope.chat = Chats.getUser(index);
  // $scope.chat = Chats.get($stateParams.chatId);
})
