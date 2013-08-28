Journal.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],
  render: function(){
    var that = this;

    var renderedContent = that.template({post: that.collection});
    that.$el.html(renderedContent);
    return that
  }
});