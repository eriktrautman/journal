window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl, bootstrapped_posts) {

    // Necessary to convert the flat array we bootstrapped
    // into a native collection object
    posts = new Journal.Collections.Posts(bootstrapped_posts);

    // var posts = new Journal.Collections.Posts();
    new Journal.Routers.Posts($rootEl, posts);
    Backbone.history.start();
  }
};


// Put all the initialization stuff down here
$(document).ready(function(){
  var posts = JSON.parse($("#bootstrapped-index").html());
  Journal.initialize($("body"), posts);

});
