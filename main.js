var templates = {};
templates.movies = [
  "<article data-id='<%= movies.id %>'>",
  "<img src='<%= movies.moviePoster %>'>",
  "<h3><%= movies.title %></h3>",
  // "<p><%= movies.genre %></p>",
  "<p><%= movies.storyline %></p>",
  "<button class='delete'>delete</button>",
  "<button class='edit'>edit</button>",
  "</article>"
].join('');

templates.edit = [
  <input type="text" name="image" value="" placeholder="Image">
  <input type="text" name="title" value="" placeholder="Title">
  <input type="text" name="storyline" value="" placeholder="Storyline">
  <input type="button" name="submit" value="Submit" class="button">
].join('');

$(document).ready(function(){
  page.init();
});

var movieCollection = new MovieCollection(movies);

var page = {
  init: function(){
    page.addAll();
    page.initEvents();
  },
  movieTmpl: _.template(templates.movies),
  initEvents: function () {
    $('.container').on('click', '.delete', function(event){
      event.preventDefault();
      var movieId = $(this).closest('article').data('id');
      movieCollection.remove(movieId);
      page.addAll();
    });
    $('.button').on('click', function(event){
      event.preventDefault();
      var newMovie = {
        moviePoster: $('input[name="image"]').val(),
        title: $('input[placeholder="Title"]').val(),
        storyline: $('input[placeholder="Storyline"]').val(),
      };
      $('input[name="image"]').val(''),
      $('input[placeholder="Title"]').val(''),
      $('input[placeholder="Storyline"]').val(''),
      console.log(newMovie);
      var myMovie = new MovieModel(newMovie);
      movieCollection.add(myMovie);
      console.log(movieCollection);
      window.glob = movieCollection;
      page.addAll();
    });
  },
  $('body').on('click', '.edit', function(event){
    event.preventDefault();
    var tmpl = _.template(templates.edit);
    
    $(this).closest(article).append(templates.edit);
  });
    addOne: function (el) {
      el.attributes.id = el.cid;
      var markup = page.movieTmpl({movies: el.toJSON()});
      $('.container').append(markup);
    },
    addAll: function () {
      $('.container').html('');
      _.each(movieCollection.models, page.addOne);
    }
}
