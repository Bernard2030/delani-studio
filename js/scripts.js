// Business logic:

// manipulating what we do


$(document).ready(function () {
    $(".onCheck3").click(function () {
        $(".click3").toggle();
        $("#hideThree").toggle();
    });
    $(".onCheck2").click(function () {
        $(".click2").toggle();
        $("#hideTwo").toggle();
    });
    $(".onCheck1").click(function () {
        $(".click1").toggle();
        $("#hideOne").toggle();
    })
});

// manipulating the portfolio

$(document).ready(function () {
    $(".portfolio1").hover(() => {
        $(".add1").show({ opacity: 5 }, 5);
    },
        () => {
            $(".add1").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio2").hover(() => {
        $(".add2").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add2").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio3").hover(() => {
        $(".add3").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add3").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio4").hover(() => {
        $(".add4").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add4").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio5").hover(() => {
        $(".add5").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add5").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio6").hover(() => {
        $(".add6").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add6").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio7").hover(() => {
        $(".add7").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add7").hide({ opacity: 1 }, 5);
        }
    )

    $(".portfolio8").hover(() => {
        $(".add8").show({ opacity: 1 }, 5);
    },
        () => {
            $(".add8").hide({ opacity: 1 }, 5);
        }
    )

})
// user interface:
// getting the form

function delaniMessage() {
    let myName = document.getElementById("name").value;
    let myEmail = document.getElementById("email").value;
    let myMessage = document.getElementById("message").value;
    if ((myName !== "" && myEmail !== "") && (myMessage !== "" && myMessage.length > 10)) {

        // pop-up of document.getElementById.innerHTML will be
        alert("Hi," + "" + myName + "Your message has been received." + "Thank you for contacting Us.")

    } else if (myName === "" || myEmail === "" || myMessage === "") {
        alert("all fields MUST be field!");
    }

}


