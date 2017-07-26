(function() {
  function NewListCtrl($scope, $uibModalInstance){
    $scope.text = "";

    $scope.cancel = function() {
        $uibModal.dismiss('cancel');
    };

  }

  angular
    .module('BoomBoom')
    .controller('NewListCtrl', ['$scope', '$uibModalInstance', NewListCtrl])
})();
