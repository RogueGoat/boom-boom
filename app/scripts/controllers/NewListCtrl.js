(function() {
  function NewListCtrl($scope, List, $uibModalInstance){
    $scope.list = null;
    $scope.addList = function(newList){
          if (newList !== undefined){
                  List.makeList(newList);
                  $uibModalInstance.close();

          } else if (newList === undefined){
                 $uibModalInstance.close();
            }
          }
                
    $scope.cancel = function() {
         $uibModalInstance.close();
    }

  }

  angular
    .module('BoomBoom')
    .controller('NewListCtrl', ['$scope', 'List', '$uibModalInstance', NewListCtrl])
})();
