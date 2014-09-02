(function () {
  'use strict';

  function getURLParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  var currentItem = getURLParameter('item');

  var discountedProducts = {
    1: 3,
    2: 4,
    3: 2,
    4: 5,
    5: 1,
    6: 5,
    7: 4,
    8: 3
  };

  for (var i = 0; i < discountedProducts[currentItem]; i++) {
    $('#code' + (i + 1)).removeAttr('disabled');
  };

  /*
  for (var i = 0; i < discountedProducts[currentItem]; i++) {
    var codeFieldString = '<div id="code-field' + i + '" class="code-field"><label for="field' + i + '">Code' + i + ' </label><input class="code-field-val" type="text" name="code' + i + '" id="code' + i + '" value="6zUIsIgL"></div>';
    $('#codes-section').append(codeFieldString);
  };
*/
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
