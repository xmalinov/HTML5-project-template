(function () {
  'use strict';

  function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  };

  var item = getURLParameter('item');
  console.log(item);

  var codesArray = [];

  $('.code-field-val').each(function (index) {
    codesArray[index] = $(this).val();
    console.log('Code ' + index + ': ' + $(this).val());
  });

  $('#sample-btn').on('click', myCall);


  function myCall() {

    var request = $.ajax({
      url: 'http://localhost/prototype/sample.php',
      type: 'GET',
      dataType: 'html'
    });

    request.done(function (msg) {
      $('#mybox').html(msg);
    });

    request.fail(function (jqXHR, textStatus) {
      alert('Request failed: ' + textStatus);
    });

    console.log('click');
  };

})();
