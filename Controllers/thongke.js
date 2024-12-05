app.controller('thongkeController', function($scope, $http) {
    $scope.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    $http.get('https://localhost:7297/api/Hoadon')
    .then(function(response){
        
    })
});