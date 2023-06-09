

// 1
var num1 = 15
var num2 = 9
var result = num1 + num2

document.write("<br> Sum of " + num1 + " and " + num2 + " is " + result)

// 2
var num1 = 65
var num2 = 25
var result = num1 - num2

document.write("<br>" + num1 + " - " + num2 + " is " + result)

var num1 = 6
var num2 = 4
var result = num1 * num2

document.write("<br>" + num1 + " * " + num2 + " is " + result)

var num1 = 200
var num2 = 2
var result = num1 / num2

document.write("<br>" + num1 + " / " + num2 + " is " + result)

var num1 = 200
var num2 = 30
var result = num1 % num2

document.write("<br>" + num1 + " % " + num2 + " is " + result)

// 3
var num3
document.write("<br><br><br> value after variable declaration is " + num3)
num3 = 10
document.write("<br> <br> Initial value is " + num3)
num3++
document.write("<br> <br> value after increment is " + num3)
num3 += 7
document.write("<br> <br> value after addition is " + num3)
num3--
document.write("<br> <br> value after decrement is " + num3)
num3 = num3 % 3
document.write("<br> <br> the remainder is " + num3)


// 4 
var ticketPrice = 600
var numberOfPeople = 5
document.write("<br><br><br>Total cost of " + numberOfPeople +  " tickets to a movie is " + ticketPrice * numberOfPeople)

// 5. 
document.write("<br><br><h3>Multiplication Table of 11</h3>")
for (var index = 1; index <= 10; index++) {
    document.write("<br>6x"+ index + " = " + 6*index)
}

// 6.
document.write("<br><br><h3>Temperature Converter</h3>")
var tempInC = 32
var tempInF = (tempInC * 9 / 5) + 32
document.write(tempInC +"C is " + tempInF.toFixed(2) + "F <br><br>")

tempInF = 110
tempInC = (tempInF - 32) * 5 / 9
document.write(tempInF +"F is " + tempInC.toFixed(2) + "C")


// 7
document.write("<br><br><br><h2>Shopping Card</h2>")
document.write("<br><h3>Checkout</h3>")
var priceOfItem1 = 250
var priceOfItem2 = 200
var orderedQuantityOfItem1 = 4
var orderedQuantityOfItem2 = 2
var shippingCharges = 180

document.write("<br> Price of Item 01 is " + priceOfItem1)
document.write("<br> Quantity of Item 01 is " + orderedQuantityOfItem1)
document.write("<br> Price of Item 02 is " + priceOfItem2)
document.write("<br> Quantity of Item 02 is " + orderedQuantityOfItem2)
document.write("<br> Shipping Charges " + shippingCharges)
var total = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges
document.write("<br><br>Total cost of your order is " + total)


// 8   
document.write("<br><br><h3>Marks Sheet</h3>")

var totalMarks = 840
var marksObtained = 796

var percentage = (marksObtained / totalMarks) * 100

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");

// 9
document.write("<br><br><h3>Currency</h3>")
document.write("<br><br><h3>arithmetic</h3>")

var usd = 10
var riyals = 25
var totalInPkr = (usd * 104.80) + (riyals * 28)
document.write("Total Amount in PKR:" + totalInPkr)

// 10
document.write("<br><br><h3>Arithmetic</h3>")
var numberX = 20
var result = ((numberX + 5) * 10) / 2;
alert(result)

// 11

document.write("<br><br><h3>Age Calculator</h3>")
var currentYear = new Date().getFullYear()
var birthYear = 2002
var age = currentYear - birthYear
var age2 = age - 1 
document.write("<br> Current Year: " + currentYear)
document.write("<br> Birth Year: " + birthYear)
document.write("<br> Age is either " + age + " or " + age2)

// 12

document.write("<br><br><h3>The Geometrizer</h3>")
var radius = 20
var circumference = 2 * 3.142 * 20
var area =  3.142 * radius ** 2
document.write("<br> Radius of a circle is " + radius)
document.write("<br> The Circumference is " + circumference)
document.write("<br> The Area is " + area)

// 13.
document.write("<br><br><h3>The Lifetime Supply</h3>")
var snack = "kurkure"
var age = 20
var maxAge = 70
var amount_per_day  = 3     
var years_remaining = maxAge - age
var days_remaining = years_remaining * 365 
var total_snacks_needed = days_remaining * amount_per_day
document.write("<br> Favorite snack: " + snack)
document.write("<br> Current Age ")
document.write("<br> The Area is " + area)
document.write("You will need " + total_snacks_needed + " to last you until the ripe old age of" + maxAge)
