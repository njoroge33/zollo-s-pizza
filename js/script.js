function getPriceSize (type, size){
    var chicken = [600, 800, 1200];
    var meaty = [550, 700, 1000];
    var vegetarian = [500, 600, 900];

    if (type === "chicken") {
        return chicken[size];
    } else if (type === "meaty") {
        return meaty[size];
    } else if (type === "vegetarian") {
        return vegetarian[size];
    }
}

function getSize (size) {
    if (size === 0) {
        return "Small"
    }else if (size === 1) {
        return "Medium"
    }else if (size === 2) {
        return "large"
    }
} 

$(document).ready(function () {
    $("#menu").click(function () {
        $(".about").hide();
        $(".menu").toggle();
    });

    $("#about").click(function () {
        $(".menu").hide();
        $(".about").toggle();
    });

    $('#submit').click(function (event) {
        event.preventDefault();
        var type = $("input[name='type']:checked").val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var toppings = parseInt($("input[name='topping']:checked").val());
        var amount = parseInt($("#number").val());
        var total = (getPriceSize(type, size) + crust + toppings) * amount;

        if (amount <= 0) {
            amount = 1
        }

        if (Number.isNaN(total) === true) {
            alert("CONFIRM ATLEAST YOU HAVE SELECTED ONE ITEM IN EACH SECTION!");
        } else {
            $("#post").append(`Your Pick: Type:${type} Size: ${getSize(size)}  Crust: Kshs ${crust} Toppings: Kshs ${toppings} Total: Kshs ${total}`);
            $("#ok").show();
            $("#cancel").show();
            $('#submit').hide();
            $(".post").css('background-color', 'rgb(27, 1, 1)')
        }
    })

    $("#ok").click(function () {
        event.preventDefault();
        $("#ok").hide();
        var deliver = confirm("Would you like us to deliver your order?");

        if (deliver) {
            var place = prompt("Enter your location:");
            $("#post").html(`Your order will be delivered at  ${place} in 30 mins`);

        } else {
            alert("Collect your order at our outlet near you");
        }
        setTimeout(function () { location.reload(); }, 10000);
    })

    $("#cancel").click(function () {
        event.preventDefault();
        setTimeout(function () { location.reload(); }, 100);

    })
});