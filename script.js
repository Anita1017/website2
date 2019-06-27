function calculatetip(){
  var billAmount = document.getElementById("BillAmount").value;
  var service = document.getElementById("Quality").value;
  var people = document.getElementById("People").value;
  if(billAmount === "" || service == 0){
    window.alert("Please enter some value!");
    return;
  }
  if(people==="" || people<=1){
    people = 1;

    document.getElementById("each").style.display="none";
  }
  else{
    document.getElementById("each").style.display="block";
  }

  var total = (billAmount * service)/people;
  total = Math.round(total * 100)/100;
  total = total.toFixed(2);

  document.getElementById("totaltip").style.display="block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").oneclick = function() {calculatetip();};
