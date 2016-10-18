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

app.controller('inboxContoller',function(){

});

app.controller('settingController',function(){

});
