var templates = {};
templates.movies = [
  // "<article data-id='<%= movies.id %>'>",
  "<img src='<%= moviePoster %>'>",
  "<h3><%= title %></h3>",
  // "<p><%= movies.genre %></p>",
  "<p><%= storyline %></p>",
  "<button class='delete'>delete</button>",
  "<button class='edit'>edit</button>",
  // "<input type='text' name='image' value='' placeholder='Image'>",
  // "<input type='text' name='title' value='' placeholder='Title'>",
  // "<input type='text' name='storyline' value='' placeholder='Storyline'>",
  // "<button class='submit'>Submit</button>"
  // "</article>"
].join('');

templates.create = [
  '<form class="createNewMovie">',
  '<input type="text" name="image" value="" placeholder="Image">',
  '<input type="text" name="title" value="" placeholder="Title">',
  '<textarea type="text" name="storyline" value="" placeholder="Storyline"></textarea>',
  "<button class='submit'>Submit</button>",
  '</form>'
].join('');

templates.edit = [
  "<div class='editSection'>",
  "<input type='text' name='image' class='image' value='<%= moviePoster %>' placeholder='Image'>",
  "<input type='text' name='title' class='title' value='<%= title %>' placeholder='Title'>",
  "<input type='text' name='storyline' class='storyline' value='<%= storyline %>' placeholder='Storyline'>",
  "<input type='button' name='edit' value='edit' class='editButton' placeholder='edit'>",
  "</div>"
].join('');
