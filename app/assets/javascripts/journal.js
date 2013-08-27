window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {
    // alert('Hello from Backbone!');

    var posts = new Journal.Collections.Posts();
    var fetched_posts;
    posts.fetch({
      success: function(posts){
        view = new Journal.Views.PostsIndex({ 
          collection: posts  
        });
        $("body").html(view.render().$el);
      }
    });



    // These SHOULD be further namespaced under another top level var
    // like Storage or something
    this.hi = "Howdy!";
    // this.posts = new Journal.Collections.Posts();

  }


};


// Put all the initialization stuff down here
$(document).ready(function(){

  Journal.initialize($("body"));
});
