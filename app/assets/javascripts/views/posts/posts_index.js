Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],
  events: {
    "click button.delete": "delete_post",
    "click a.render": "render"
  },
  initialize: function(){
    var that = this;

    // make sure that the render function has access
    // to the view's div regardless of the caller
    var renderCallback = that.render.bind(that);

    // that.listenTo(that.collection, "remove", renderCallback);
    // that.listenTo(that.collection, "add", renderCallback);
    // that.listenTo(that.collection, "change:title", renderCallback);
    // that.listenTo(that.collection, "reset", renderCallback);
  },
  render: function(){
    var that = this;

    // console.log("IM OKAY, collection:");
    // console.log(that.collection);
    var renderedContent = that.template({posts: that.collection});
    that.$el.html(renderedContent);
    return that
  },
  delete_post: function(el){
    console.log("Deleting post number " + $(el.target).data("id") + "!");
    this.render();
  }


});
