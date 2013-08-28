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

    that.$rootEl.html(postsIndexView.render().$el);
  },
  show: function(id){
    console.log("CALLING SHOW ON ID " + id);
    var that = this;
    var post = that.posts.get(id);
    var postsShowView = new Journal.Views.PostsShow({
      collection: posts,
      model: post
    });
    that.$rootEl.html(postsShowView.render().$el);
  },
  edit: function(id){
    console.log("CALLING EDIT");
    var that = this;
    var post = that.posts.get(id);
    var postsEditView = new Journal.Views.PostsForm({
      collection: posts,
      model: post
    });
    that.$rootEl.html(postsEditView.render().$el);
  },
  new: function(){
    console.log("CALLING NEW");
    var that = this;
    var postsNewView = new Journal.Views.PostsForm({
      collection: posts,
      model: null
    })
    that.$rootEl.html(postsNewView.render().$el);
  }

});
