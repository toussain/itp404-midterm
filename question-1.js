
function getName(name){
  var promise = $.ajax({
    url: 'http://itp-api.herokuapp.com/api/v1/me',
    type: 'get',
  });

return promise;
}

getName(name).then(function(response) {

    var templateSource = $('#name-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
        results:response.data
    });

    $('#name-list').html(html);
  }, function(){
    console.log('there was an error');
});
