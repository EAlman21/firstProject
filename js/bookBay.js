(function(){
  var app = angular.module('bookBayApp',[]);



//add definition to sign up in authentication page
  app.controller('authController',function($scope){
    $scope.user = {username:'', password:''};
    $scope.error_msg = '';
    $scope.login = function(){
    //verify when username password is wrong
      $scope.error_msg = 'login request for '+ $scope.user.username;
    }
    $scope.register = function(){
    //verify when username is taken
    $scope.error_msg = 'registeration request for '+ $scope.user.username +' is taken';
    }

  });

  app.controller('indexController',function($scope){
    this.home = true;
    this.inbox = false;
    this.owned = false;
    this.settings = false;
    this.settingsPassword = false;
    this.settingsAccount = false;

    this.showHome = function(){
      this.inbox = false;
      this.owned = false;
      this.settings = false;
      this.settingsPassword = false;
      this.settingsAccount = false;
      this.home = true;

    //define home information here
    };

    this.showInbox = function(){
      this.home = false;
      this.settings = false;
      this.settingsPassword = false;
      this.settingsAccount = false;
      this.owned = false;
      this.inbox = true;

    //define inbox infomation here
    };
    this.showOwned = function(){
      this.home = false;
      this.settings = false;
      this.settingsPassword = false;
      this.settingsAccount = false;
      this.inbox = false;
      this.owned = true;

      //define stuff owned here
    };

    this.showSettings = function(){
      this.home = false;
      this.settings = false;
      this.settingsPassword = false;
      this.settingsAccount = false;
      this.owned = false;
      this.settings = true;
    //define stuff settings
    };

    this.showPassword_form = function(){
      this.home = false;
      this.settings= false;
      this.settingsAccount = false;
      this.owned = false;
      this.inbox = false;
      this.settingsPassword = true;
    };
    this.showDelete_account = function(){
      this.home = false;
      this.settings = false;
      this.owned = false;
      this.inbox = false;
      this.settingsPassword = false;
      this.settingsAccount = true;
    };

  });
})();
