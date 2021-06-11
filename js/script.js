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
