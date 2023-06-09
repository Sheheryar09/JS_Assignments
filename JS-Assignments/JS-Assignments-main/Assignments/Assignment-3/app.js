 var age = 23
 alert(age)

// // Retrieve the current count from localStorage
var visitCount = localStorage.getItem("visitCount");

// // Check if the count exists in localStorage
 if (visitCount) {
   visitCount = parseInt(visitCount); // Convert the stored value to an integer
   visitCount++; // Increment the count
 } else {
   visitCount = 1; // If the count doesn't exist, initialize it to 1
}

//  Store the updated count in localStorage
 localStorage.setItem("visitCount", visitCount);

// Display the visit count in an alert
alert("You have visited this site " + visitCount + " times.");


var birthYear = 2002
var dt = typeof birthYear
document.body.innerHTML = "My Birth year is " + birthYear + "\n" + " and datatype of my birth year is " + dt

var cusName = "Joh doe"
var prTitle = "T-shirts"
var quantity = 5

document.body.innerHTML = cusName + " ordered " + quantity + " " + prTitle + " from xyz clothing shop"














