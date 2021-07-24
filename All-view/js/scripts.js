// Business logic:

// manipulating what we do
$(document).ready(function(){
    $(".onCheck1").click(function(){
        $("#click1").toggle();
        $("#hideOne").show();
    });

 $(".onCheck2").click(function(){
    $("#click2").toggle();
    $("#hideTwo").toggle();
});
$(".onCheck3").click(function(){
    $("#click3").toggle();
    $("#hideThree").toggle();
});
$("#hideOne").click(function(){
    $("#hideOne").toggle();
    $(".onCheck1").toggle();
});
$("#hideTwo").click(function(){
    $("#hideTwo").toggle();
    $(".onCheck2").toggle();
});
$("#hideThree").click(function(){
    $("hideThree").toggle();
    $("coCheck3").toggle();
});

});


// manipulating the portfolio

$(document).ready(function(){
    $("#projectOne").hover(function(){
        $(".add1").slideToggle();
    });
});
$(document).ready(function(){
    $("#projectTwo").hover(function(){
        $(".add2").slideToggle();
    });
});
$(document).ready(function(){
    $("#projectThree").hover(function(){
        $(".add3").slideToggle();
    });
});
$(document).ready(function(){
    $("#projectFour").hover(function(){
        $(".add4").slideToggle();
    });
});
$(document).ready(function(){
    $("#projectFive").hover(function(){
        $(".add5").slideToggle();
    });
});
$(document).ready(function(){
    ("#projectSix").hover(function(){
        $(".add6").slideToggle();
    });
});
$(document).ready(function(){
  $("#projectSeven").hover(function(){
      $(".add7").slideToggle();
  });
});
$(document).ready(function(){
    $("#projectEight").hover(function(){
        $(".add8").slideToggle();
    });
});

// user interface:
// getting the form

function delaniMessage() {
    let myName = document.getElementById("name").value;
    let myEmail = document.getElementById("email").value;
    let myMessage = document.getElementById("message").value;
    if ((myName !== "" && myEmail !== "") && (myMessage !== "" && myMessage.length > 10 )){

        // pop-up of document.getElementById.innerHTML will be
        alert("Hi," + "" + myName + "Your message has been received." + "Thank you for contacting Us.")
    
    } else if (myName === "" || myEmail === "" || myMessage === ""){
         alert("all fields MUST be field!");
     }

}


