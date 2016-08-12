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
      jav += 1;
    }

    if ($("input:radio[name=q3]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q3]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q3]:checked").val() === "jav"){
      jav += 1;
    }

    if ($("input:radio[name=q4]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q4]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q4]:checked").val() === "jav"){
      jav += 1;
    }

    if ($("input:radio[name=q5]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q5]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q5]:checked").val() === "jav"){
      jav += 1;
    }

    if ($("input:radio[name=q6]:checked").val() === "php"){
      php += 1;
    } else if ($("input:radio[name=q6]:checked").val() === "ruby"){
      ruby += 1;
    } else if ($("input:radio[name=q6]:checked").val() === "jav"){
      jav += 1;
    }

    if ((ruby > jav) && (ruby > php)){
      $("#phplogo").hide();
      $("#javalogo").hide();
      $(".pursue").text("Ruby");
      $("#rubylogo").show();
    } else if ((jav > ruby) && (jav > php)){
      $("#phplogo").hide();
      $("#rubylogo").hide();
      $(".pursue").text("Java");
      $("#javalogo").show();
    } else if ((php > ruby) && (php > jav)){
      $("#rubylogo").hide();
      $("#javalogo").hide();
      $(".pursue").text("pHp");
      $("#phplogo").show();
    } else if ((ruby === jav)){
      $(".pursue").text("Ruby & Java. Your results were tied");
      $("#rubylogo").hide();
      $("#javalogo").hide();
      $("#phplogo").hide();
    } else if ((ruby === php)){
      $(".pursue").text("Ruby & pHp. Your results were tied");
      $("#rubylogo").hide();
      $("#javalogo").hide();
      $("#phplogo").hide();
    } else if ((jav === php)){
      $(".pursue").text("Java & pHp. Your results were tied");
      $("#rubylogo").hide();
      $("#javalogo").hide();
      $("#phplogo").hide();
    } else {
      $("#output").text("Your results were inconclusive. We can't help you. Sorry!");
    }
    //Error message for empty text field
    if($("input#user").val() === "") {
      alert("Please enter your name.")
    }
    $(".name").text(userName);
    $("#output").show();
  });
});
