$(document).ready(function(){
  var movieCollection = new MovieCollection(movies);
  new CollectionView({collection: movieCollection});
  var formMarkup = new createMovieView({collection: movieCollection});
});

// var movieCollection = new MovieCollection(movies);
//
// var page = {
//   init: function(){
//     page.addAll();
//     page.initEvents();
//   },
//   movieTmpl: _.template(templates.movies),
//   initEvents: function () {
//     $('.container').on('click', '.delete', function(event){
//       event.preventDefault();
//       var movieId = $(this).closest('article').data('id');
//       movieCollection.remove(movieId);
//       page.addAll();
//     });
//     $('.button').on('click', function(event){
//       event.preventDefault();
//       var newMovie = {
//         moviePoster: $('input[name="image"]').val(),
//         title: $('input[placeholder="Title"]').val(),
//         storyline: $('input[placeholder="Storyline"]').val(),
//       };
//       $('input[name="image"]').val(''),
//       $('input[placeholder="Title"]').val(''),
//       $('input[placeholder="Storyline"]').val(''),
//       console.log(newMovie);
//       var myMovie = new MovieModel(newMovie);
//       movieCollection.add(myMovie);
//       console.log(movieCollection);
//       window.glob = movieCollection;
//       page.addAll();
//     });
//   $('body').on('click', '.edit', function(event){
//     event.preventDefault();
//     var tmpl = _.template(templates.edit);
//     window.glob = $(this);
//     var title = $(this).closest('article').find('h3').text();
//     var image = $(this).closest('article').find('img').prop('src');
//     var storyline = $(this).closest('article').find('p').text();
//     var tmplObj = {
//       moviePoster: image,
//       title: title,
//       storyline: storyline,
//     }
//     $(this).closest('article').append(tmpl({movies: tmplObj}));
//   });
//   $('body').on('click', '.editButton', function(event){
//     event.preventDefault();
//     var editMovie = {
//       moviePoster: $('input[name="image"]').val(),
//       title: $('input[placeholder="Title"]').val(),
//       storyline: $('input[placeholder="Storyline"]').val(),
//     };
//     $('input[name="image"]').val(''),
//     $('input[placeholder="Title"]').val(''),
//     $('input[placeholder="Storyline"]').val(''),
//     console.log(editMovie);
//     var myeditMovie = new MovieModel(editMovie);
//     movieCollection.add(myeditMovie);
//     console.log(movieCollection);
//     window.glob = movieCollection;
//     var movieId = $(this).closest('article').data('id');
//     movieCollection.remove(movieId);
//     page.addAll();
//   });
//   },
//
//     addOne: function (el) {
//       el.attributes.id = el.cid;
//       var markup = page.movieTmpl({movies: el.toJSON()});
//       $('.container').append(markup);
//     },
//     addAll: function () {
//       $('.container').html('');
//       _.each(movieCollection.models, page.addOne);
//     }
// }
