(function() {
   function ListCtrl($scope, $uibModal, List, $cookies) {
     $scope.allLists = List.all;

     $scope.new = function() {
       var modalInstance = $uibModal.open({
         animation: true,
         templateURL: '/templates/newlist.html',
         controller: 'NewListCtrl'
       })
     }
   }

   angular
     .module('BoomBoom')
     .controller('ListCtrl', ['$scope', '$uibModal', 'List', '$cookies', ListCtrl]);
 })();
