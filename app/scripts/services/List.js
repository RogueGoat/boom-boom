(function() {
  function List($firebaseArray) {
      var ref = firebase.database().ref().child("lists");
      var listOfLists = $firebaseArray(ref);
      // $scope.listRef = Lists.all;


      return {
       all: listOfLists,
       makeList: function(newList){
       return listOfLists.$add(newList);
       }
   };

      var newTasks = function(newList) {
        tasklist.$add({name: newList})
      }

  }

  angular
    .module('BoomBoom')
    .factory('List', ['$firebaseArray', List]);
})();
