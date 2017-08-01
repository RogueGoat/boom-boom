(function() {
   function ListCtrl($scope, $uibModal, List) {
     var List = {};
     var ref = firebase.database().ref().child("list");
     var listItems = $firebaseArray(ref);
     List.all = listItems;

     $scope.create = function(){
         $uibModal.open({
           animation: true,
           templateUrl: '/templates/newlist.html',
           conroller: 'NewListCtrl.js'
         });
     };

     return List;
   }

   angular
     .module('BoomBoom')
     .controller('ListCtrl', ['$scope', '$uibModal', 'List', ListCtrl]);
 })();
