function setupImages() {
  $('[data-toggle="popover"]').popover({
    container: 'body',
    html: true,
    placement: 'auto',
    trigger: 'hover',
    content: function() {
      var url = $(this).data('full');
      return '<img src="' + url + '">'
    }
  });
}
