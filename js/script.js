            //back-end logic:
var aname = function(year, month, date, gender) {
    var femaleNames = ["Akosua", "Andwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var date = new Date(year, --month, date);
    if (gender === "Female") {
        return date && femaleNames[date.getDay()];
    }
    else {
        return date && maleNames[date.getDay()];
    }
}
            //user interface logic:
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var year = parseInt($("#year").val());
        var month = parseInt($("#month").val());
        var date = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        
        var results = aname(year, month, date, gender);
        alert("Your Akan name is: " + reset);

                //reload page
        document.getElementById("form").reset();
    })
})

