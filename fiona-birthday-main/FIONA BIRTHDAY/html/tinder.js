function Show_Div(Div_id) {
    var a = document.getElementById('tinder');
    if (false == $(Div_id).is(':visible') && a.value == "tinder" || a.value == "Tinder") {
      $(Div_id).show(150);
    }
  }

  $(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });

  function Hide_Div(Div_id) {
    if (true == $(notificationNumber).is(':visible')) {
      $(hideForm).hide(250);
    }
}

$(document).ready(function(){
    // Delay the action by 10000ms
    setTimeout(function(){
       // Display the div containing the class "bottomdiv"
       $(".icon-button__badge").show();
    }, 2000);
 });

 function Show_Div(Div_id) {
    if (false == $(Div_id).is(':visible') || $(notificationNumber) == "1")  {
      $(Div_id).show(250);
      $(notificationNumber).text('1')
    } else {  if (true == $(notificationOne).is(':visible')) {
        $(notificationTwo).show(250);
        $(notificationNumber).hide();
    }
    }}














