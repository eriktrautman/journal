Journal.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],

  events: {
    "click a.delete": "delete_post"
  },

  render: function(){
    var that = this;
    console.log("ABOUT TO RENDER SHOW");

    var renderedContent = that.template( { post: that.model } );
    that.$el.html(renderedContent);
    return that
  },

  delete_post: function(e){
    var that = this;
    var id = $(e.target).data("id");
    e.preventDefault();
    console.log("TRYING TO DELETE POST ID = " + id);
    console.log(that.model);
    var post = that.model;
    post.destroy({success: function(){
        console.log("DELETED!");
        Backbone.history.navigate("#/", true)
      },
      error: function(a,b,c){
        console.log("ERROR");
        console.log(a);
        console.log(b);
        console.log(c);
      }
    });
  }

});