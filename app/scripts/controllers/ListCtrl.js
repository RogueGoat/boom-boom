(function() {
   function ListCtrl($scope, $uibModal, List, Items) {
    $scope.listName = List.all;
    $scope.listItems = {};
    $scope.currentList = {};

    $scope.setCurrentList = function(list){
           $scope.currentList = list;
           $scope.listItems = Items.getByListId(list.$id);
    };

     $scope.createList = function(){
         $uibModal.open({
           animation: true,
           templateUrl: '/templates/newlist.html',
           controller: 'NewListCtrl'
         })
     };
   }

   angular
     .module('BoomBoom')
     .controller('ListCtrl', ['$scope', '$uibModal', 'List', 'Items', ListCtrl]);
 })();
