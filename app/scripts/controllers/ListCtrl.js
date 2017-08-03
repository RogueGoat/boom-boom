(function() {
   function ListCtrl($scope, $uibModal, List) {
    $scope.listName = List.all;

     $scope.createList = function(){
         $uibModal.open({
           animation: true,
           templateUrl: '/templates/newlist.html',
           conroller: 'NewListCtrl'
         })
     };
   }

   angular
     .module('BoomBoom')
     .controller('ListCtrl', ['$scope', '$uibModal', 'List', ListCtrl]);
 })();
