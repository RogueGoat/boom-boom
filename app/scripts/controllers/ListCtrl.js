(function() {
   function ListCtrl($scope, $uibModal, List, $cookies) {
     var List = {};
     var ref = firebase.database().ref().child("list");
     var listItems = $firebaseArray(ref);
     List.all = listItems;

     $scope.new = function() {
       var modalInstance = $uibModal.open({
         animation: true,
         templateURL: '/templates/newlist.html',
         controller: 'NewListCtrl'
       })
     }

     return List;
   }

   angular
     .module('BoomBoom')
     .controller('ListCtrl', ['$scope', '$uibModal', 'List', '$cookies', ListCtrl]);
 })();
