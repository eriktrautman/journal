Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],
  
  events: {
    "click button.delete": "delete_post",
  },

  initialize: function(){
    var that = this;

    // make sure that the render function has access
    // to the view's div regardless of the caller
    // var renderCallback = that.render.bind(that);

    // that.listenTo(that.collection, "remove", renderCallback);
    // that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "change", that.renderCallback);
    // that.listenTo(that.collection, "reset", renderCallback);
    that.collection.bind('add', that.renderCallback, that);
    // that.collection.bind('change', renderCallback, that);
    // that.collection.bind("any", this.anyThing, that);
  },

  renderCallback: function(e){
    var that = this;
    that.render();
  },

  render: function(){
    var that = this;
    // for some reason this function fires an ever-increasing
    // number of times as you keep playing with and adding
    // new posts to the collection.... er....
    console.log("rendering index");  
    var renderedContent = that.template({posts: that.collection});
    that.$el.html(renderedContent);
    return that
  },

  delete_post: function(e){
    var that = this;
    var id = $(e.target).data("id");
    e.preventDefault();
    console.log("TRYING TO DELETE POST ID = " + id);
    var post = that.collection.get(id);
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
