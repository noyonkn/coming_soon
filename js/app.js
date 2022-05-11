
  $("#getting-started")
  .countdown("2022/05/20", function(event) {
    $('#days').text(
      event.strftime('%D')
    );
    $('#hours').text(
      event.strftime('%H')
    );
    $('#minutes').text(
      event.strftime('%M')
    );
    
  });
