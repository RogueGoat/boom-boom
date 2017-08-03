(function() {
    function Items($firebaseArray) {
     var ref = firebase.database().ref().child("items");
     var items = $firebaseArray(ref);
     return {
         getByListId: function (listId) {
         $firebaseArray(ref.orderByChild("listId").equalTo(listId));
      }
    };
  }
  angular
    .module('BoomBoom')
    .factory('Items', ['$firebaseArray', Items]);
})();
