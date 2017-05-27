// setup plugin tableOfContents
$.fn.tableOfContents = function(header) {
  var backToTop = "<a href='#top'>Back to top</a>";
  var toc = "<h2 id='toc_header'>Table of contents</h2>";
  var toc_list = "<ul id='toc_list'>List</ul>";
  
  
  $(function() {
    $('div.article').append(backToTop);
  });
  
  
  $(function() {
    $('h1').after(toc);
    
  });
  
  $(function() {
    $('h2:first').after(toc_list);
  });
  
  // my version
  // $(function() {
  //   $('div.article h2').each(function() { // iterate each div.article
  //     var title = $(this).text(); // enclose innerHTML of this article in var
  //     var slug = title.trim().toLowerCase().replace(" ", "_");
  //     var listItem = "<li><a href='#" + slug + "'>" + title + "</a></li>";
  //     $(this).before(reference); // glue references to articles
  //     $('ul#toc_list').append(listItem); // append list items to table of contents
  //     var reference = "<a id='" + slug + "'></a>"; // create ref to glue to every article
      
  //   });
  // });
  
  // tutorial version
  $(function() {
    $('div.article h2').each(function() { // iterate each div.article
      var title = $(this).text(); // enclose innerHTML of this article in var
      var slug = title.trim().toLowerCase().replace(" ", "_"); // trim jquery, tLC & replace js methods
      $(this).attr('id', slug);
      var listItem = "<li><a href='#" + slug + "'>" + title + "</a></li>";
      $('ul#toc_list').append(listItem); // append list items to table of contents
      
      
      
      var toggleLink = $("<a href='#'>(hide)</a>");
      toggleLink.on('click', function (event) {
        event.preventDefault();
        $(this).siblings('p').toggle();
        var oldText = $(this).text();
        var newText = (oldText === '(hide)') ? '(show)' : '(hide)';
        $(this).text(newText);
      });
      $(this).after(toggleLink);
      
    });
  });
};

// call plugin tableOfContents on div.article
$(function (){
    $("div.article").tableOfContents($('h1'));
});



//////////////// jquery rights

// $(function() {
//   $('h1.target').text("Hello world, jquery");
// });