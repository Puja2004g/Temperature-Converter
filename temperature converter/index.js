$("button").on("click", () => {
    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input3").val();

    // Convert input to a number using parseFloat
    var temperature1 = parseFloat(input1);
    var temperature2 = parseFloat(input2);
    var temperature3 = parseFloat(input3);


    // celsius to fahrenheit and kelvin
    if (!isNaN(temperature1) && (isNaN(temperature2)) && (isNaN(temperature3))) {
        var F = temperature1 * (9 / 5) + 32;
        var K = temperature1 + 273.15;

        $("#input2").val(F.toFixed(2) + "F");
        $("#input3").val(K.toFixed(2) + "K");
    }


    //fahrenheit to celsius and kelvin
    else if (!isNaN(temperature2) && (isNaN(temperature1)) && (isNaN(temperature3))) {
        var c = (temperature2 - 32) * (5 / 9);
        var k = (temperature2 - 32) * (5 / 9) + 273.15;

        $("#input1").val(c.toFixed(2) + "C");
        $("#input3").val(k.toFixed(2) + "K");
    }

    //kelvin to celsius and fahrenheit
    else if (!isNaN(temperature3) && (isNaN(temperature1)) && (isNaN(temperature2))) {
        var c = temperature3 - 273.15;
        var f = (temperature3 - 273.15) * (9 / 5) + 32;

        $("#input1").val(c.toFixed(2) + "C");
        $("#input2").val(f.toFixed(2) + "F");
    }
    else {
        alert("Enter a valid value");
    }
});


