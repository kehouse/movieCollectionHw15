var createMovieView = Backbone.View.extend({
  tempCreate: _.template(templates.create),
  el: '.createNewMovie',
  events: {
    'click .submit': 'addMovie'
  },
  addMovie: function(event){
    console.log("CLICKAGHE");
    event.preventDefault();
    this.model.set({
    moviePoster: this.$el.find('input[name="image"]').val(),
    title: this.$el.find('input[name="title"]').val(),
    storyline: this.$el.find('input[name="storyline"]').val(),
    submit: this.$el.find('input[name="submit"]').val()
  });
  this.$el.find('input').val('');
  this.$el.find('textarea').val('');
  this.collection.add(this.model);
},
initialize: function(){
  if(!this.model){
    this.model = new MovieModel({});
  }
  this.render();
},
render: function(){
  var mark = this.tempCreate();
  this.$el.html(mark);
  return this;
},
});

var MovieView = Backbone.View.extend({
  tagName: 'article',
  template: _.template(templates.movies),
  events: {
  'click .delete': 'removeMovie',
  'click .edit': 'editMovie',
  'click .editButton': 'completeEdit'
},
  completeEdit: function(event){
    event.preventDefault();
    this.model.set({
      moviePoster: this.$el.find('.image').val(),
      title: this.$el.find('.title').val(),
      storyline: this.$el.find('.storyline').val()
    });
  },
  editMovie: function(){
    window.glob = this;
    var temp = _.template(templates.edit);
    var mark = (this.model.toJSON());
    this.$el.append(temp(mark));
  },
  removeMovie: function(){
    this.model.destroy();
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});

var CollectionView = Backbone.View.extend({
  el: '.container',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
  },
  addOne: function (el) {
    var modelView = new MovieView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    $('.container').html('');
    _.each(this.collection.models, this.addOne, this);
}
});
