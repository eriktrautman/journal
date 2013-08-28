Journal.Routers.Posts = Backbone.Router.extend({

  initialize: function($rootEl, posts){
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "posts/new": "new",
    "posts/:id": "show",
    "posts/:id/edit": "edit",
  },

  index: function(){
    console.log("CALLING INDEX");
    var that = this;
    var postsIndexView = new Journal.Views.PostsIndex({
      collection: that.posts
    });

    $("#sidebar").html(postsIndexView.render().$el);
    $("#content").html("");
  },
  show: function(id){
    console.log("CALLING SHOW ON ID " + id);
    var that = this;
    var post = that.posts.get(id);
    var postsShowView = new Journal.Views.PostsShow({
      collection: posts,
      model: post
    });
    $("#content").html(postsShowView.render().$el);
  },
  edit: function(id){
    console.log("CALLING EDIT");
    var that = this;
    var post = that.posts.get(id);
    console.log(post);
    var postsEditView = new Journal.Views.PostsForm({
      collection: posts,
      model: post
    });
    $("#content").html(postsEditView.render().$el);
  },
  new: function(){
    console.log("CALLING NEW");
    var that = this;
    var postsNewView = new Journal.Views.PostsForm({
      collection: posts,
      model: null
    })
    $("#content").html(postsNewView.render().$el);
  }

});
