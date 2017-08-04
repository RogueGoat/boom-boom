(function() {
   function OldListCtrl($scope, $uibModal, List, Items) {
    $scope.listName = List.all;
    $scope.listItems = {};
    $scope.currentList = {};

    $scope.setCurrentList = function(list){
           $scope.currentList = list;
           $scope.listItems = Items.getByListId(list.$id);
    };

   }

   angular
     .module('BoomBoom')
     .controller('OldListCtrl', ['$scope', '$uibModal', 'List', 'Items', OldListCtrl]);
 })();
