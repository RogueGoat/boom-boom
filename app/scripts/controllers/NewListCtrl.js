(function() {
  function NewListCtrl($scope, $uibModalInstance){
    $scope.text = "";

    $scope.create = function(){
        $uibModalInstance.close($scope.text);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

  }

  angular
    .module('BoomBoom')
    .controller('NewListCtrl', ['$scope', '$uibModalInstance', NewListCtrl])
})();
