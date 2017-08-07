(function() {
  function List($firebaseArray) {
      var ref = firebase.database().ref().child("lists");
      var listOfLists = $firebaseArray(ref);

      return {
         all: listOfLists,
         makeList: function(newList){
           create_list(newList, 'unknown');
         },
         create_list: create_list,
     };

     function create_list(title, type) {
       listOfLists.$add({
         title: title,
         type: type,
         created_at: (new Date()).getTime(),
         updated_at: (new Date()).getTime(),
       });
     }
  }

  angular
    .module('BoomBoom')
    .factory('List', ['$firebaseArray', List]);
})();
