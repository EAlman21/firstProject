var app = angular.module('bookBayApp',[]);

//add definition to sign up in authentication page
app.controller('authController',function($scope){
  $scope.user = {username:'', password:''};
  $scope.error_msg = '';

  $scope.login = function(){
    //need to finish this
    $scope.error_msg = 'login request for '+ $scope.user.username;
  }
  $scope.register = function(){
    $scope.error_msg = 'registeration request for '+ $scope.user.username +' is taken';
  }

});

app.controller('indexController',function($scope){
  this.home = true;
  this.inbox = false;
  this.owned = false;
  this.settings = false;

  this.showHome = function(){
    this.inbox = false;
    this.owned = false;
    this.settings = false;
    this.home = true;
  };

  this.showInbox = function(){
    this.home = false;
    this.settings = false;
    this.owned = false;
    this.inbox = true;
  };
  this.showOwned = function(){
    this.home = false;
    this.settings = false;
    this.inbox = false;
    this.owned = true;
  };

  this.showSettings = function(){
    this.home = false;
    this.settings = false;
    this.owned = false;
    this.settings = true;
  };
});
