var checkIn = document.getElementById("checkIn");
var checkOut = document.getElementById("checkOut");

var today = new Date();
var todayText = today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

checkIn.min = todayText;
checkOut.min = todayText;

checkIn.addEventListener("change", function() {
    checkOut.min = checkIn.value;

    if (checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.value = "";
    }
});

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var start = new Date(checkIn.value);
    var end = new Date(checkOut.value);
    var nights = (end - start) / (1000 * 60 * 60 * 24);

    if (checkIn.value === "" || checkOut.value === "" || nights <= 0) {
        alert("Please select a valid check-in and check-out date.");
    }
    else{
        alert("Booking submitted successfully!"+nights+" nights booked from "+checkIn.value+" to "+checkOut.value+".");
    }
});
