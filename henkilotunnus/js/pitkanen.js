// Matti Pitkänen

function check (){

// kenttien tyhjennys

document.getElementById("error").innerHTML ="";
document.getElementById("age").innerHTML ="";
document.getElementById("sex").innerHTML ="";
document.getElementById("result").innerHTML ="";

// Error messaget

const IdLength = "Id code must have 11 characters.";
const IdFirst = "Id code must have 6 numbers at first.";
const Order = "Order number must be a number.";
const Day_error = "Day must be 1 ... 31.";
const Month_error = "Month must be 1 ... 12.";
const Year_error = "Year is too big."
const Divider = "The century mark must be +, - or A.";

// Alku tarkastuksia Hetun oikein syötöstä

let hetu = document.getElementById("idcode").value;
let day = Number(hetu.substring(0, 1));
let month = Number(hetu.substring(2, 3));

    // Onko hetu oikean mittainen.

        if(hetu.length !=11){
            error.innerHTML = IdLength;
            return;
        }
    
    // Onko ensimmäiset 6 merkkiä numeroita.

        else if(isNaN(hetu.substring(0, 6))){
            error.innerHTML = IdFirst;
            return;
        }

    // Päivämäärän ja kuukauden syötön tarkastus

        else if(day > 31){
            DateMessage = Day_error;
            return;
        } 

        else if(month > 12){
         DateMessage = Month_error;
            return;
        }
    // Onko vuosimerkki +,- tai A.

        else if(hetu.charAt(6) != "+" && hetu.charAt(6) != "-"  && hetu.charAt(6) != "A"){
            error.innerHTML = Divider;
            return;
        }

    // Tulostuksia

document.getElementById("age").innerHTML = Age();
/* document.getElementById("result").innerHTML = Check_mark(); */
document.getElementById("sex").innerHTML = sex();

 // Laske Sukupuoli

    function sex(){
        let hetu = document.getElementById("idcode").value;
        let nnn = Number(hetu.substring(7, 9));
        let sex = "";
            if(nnn%2 == 0 ){
                sex = "Female"
            }
                if(nnn%2 != 0 ){
                sex = "Male"
            }
        return sex;
    }

// Laske Ikä

function Age(){
    let Date = new.Date();
    let currentYear = date.getFullYear();
    let hetu = document.getElementById("idcode").value;

    let year = Number(hetu.substring(4, 5));
    let age = "";

        if(hetu.substring(6) === "+"){
          age = currentYear - (1800 + year);
            }
        if(hetu.substring(6) === "-"){
            age = currentYear - (1900 + year);
            }
        if(hetu.substring(6) === "A"){
            age = currentYear - (2000 + year);
            }
    return = age;
    
}


// Laske tarkastusmerkki

/*     function Check_mark(){

        let Check_marks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        let hetu = document.getElementById("idcode").value;
        let nnn = Number(hetu.substring(7, 9));
        let sum = (day + month + year + nnn)%31;
        let check = Check_mark.charAt(sum);
        let last = hetu.substring(10);
        let return = "";
            if(check === last){
                result = "tuloksesi on oikein";
            }
                else{
                    result = "tuloksesi on väärin. "+ "oikea tulos on " + check;
                }
            return result;
    }                
     */
}
