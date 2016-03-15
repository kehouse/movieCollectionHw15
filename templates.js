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
  '<input type="text" name="image" value="<%= movies.moviePoster %>" placeholder="Image">',
  '<input type="text" name="title" value="<%= movies.title %>" placeholder="Title">',
  '<input type="text" name="storyline" value="<%= movies.storyline %>" placeholder="Storyline">',
  '<input type="button" name="edit" value="edit" class="editButton" placeholder"edit>',
].join('');
