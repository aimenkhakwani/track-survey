$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var ruby = 0;
    var php = 0;
    var jav = 0;
    var result = "";
    var userName = $("input#user").val();

    if ($("input:radio[name=q1]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q1]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q1]:checked").val() === "jav"){
      jav+= 1;
    }

    if ($("input:radio[name=q2]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q2]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q2]:checked").val() === "jav"){
      jav+= 1;
    }

    if ($("input:radio[name=q3]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q3]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q3]:checked").val() === "jav"){
      jav+= 1;
    }

    if ($("input:radio[name=q4]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q4]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q4]:checked").val() === "jav"){
      jav+= 1;
    }

    if ($("input:radio[name=q5]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q5]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q5]:checked").val() === "jav"){
      jav+= 1;
    }

    if ($("input:radio[name=q6]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q6]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q6]:checked").val() === "jav"){
      jav+= 1;
    }

    if ((ruby > jav) && (ruby > php)){
      $(".pursue").text("Ruby");
    } else if ((jav > ruby) && (jav > php)){
      $(".pursue").text("Java");
    } else if ((php > ruby) && (php > jav)){
      $(".pursue").text("pHp");
    } else {
      $("#output").text("Your results were inconclusive. We can't help you. Sorry!");
    }


    $(".name").text(userName);
    $("#output").show();

  });


});
