(function() {
  function List($firebaseArray) {
      var listRef = firebase.database().ref().child("tasklist")
      var ref = firebase.database().ref();
      var tasklist = $firebaseObject(ref);

      var newTasks = function(newList) {
        tasklist.$add({name: newList})
      }

  }

  angular
    .module('BoomBoom')
    .factory('List', ['$firebaseArray', List]);
})();
