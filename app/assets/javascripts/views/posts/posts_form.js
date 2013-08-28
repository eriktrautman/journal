Journal.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/form"],

  events: {
    "click button.submit": "submit_form"
  },

  render: function(){
    var that = this;
    console.log("ABOUT TO RENDER Form");

    var renderedContent = that.template( { post: that.model } );
    that.$el.html(renderedContent);
    return that
  },

  submit_form: function(e){
    e.preventDefault();
    var that = this;
    target = $(event.currentTarget).find('form');

    // Uses the serializeJSON library (see vendor/javascripts)
    // or https://github.com/marioizquierdo/jquery.serializeJSON
    var formData = target.serializeJSON();
    var post = new Journal.Models.Post(formData.post)

      console.log(post);
      console.log(post.isNew())
    var result = post.save({}, {
      success: function(saved_post){
        that.collection.add(saved_post);  // Add to local collection
        Backbone.history.navigate("#/")
      },
      error: function(a,b,c){
        console.log("ERROR");
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }); // save to DB via the API
  }
});