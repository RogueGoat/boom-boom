(function() {
  function List($firebaseArray) {
      var ref = firebase.database().ref().child("lists");
      var listOfLists = $firebaseArray(ref);


      return {
         all: listOfLists,
         makeList: function(newList){
         return listOfLists.$add(newList);
         }
     };
  }

  angular
    .module('BoomBoom')
    .factory('List', ['$firebaseArray', List]);
})();
