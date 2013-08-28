Journal.Routers.Posts = Backbone.Router.extend({

  initialize: function($rootEl, posts){
    this.$rootEl = $rootEl;
    this.posts = posts;
  },

  routes: {
    "": "index",
    "tasks/:id": "show",
    "tasks/:id/edit": "edit"
  },

  index: function(){
    var that = this;
    var postsIndexView = new Journal.Views.PostsIndex({
      collection: that.posts
    });

    that.$rootEl.html(postsIndexView.render().$el);
  },
  show: function(){
    console.log("CALLING SHOW");
  },
  edit: function(){
    console.log("CALLING EDIT");
  }

});
