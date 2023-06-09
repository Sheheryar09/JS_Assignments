var mainContent = document.getElementById("main-content");
console.log(mainContent);
var renders = document.querySelectorAll(".render")
for (var index = 0; index < renders.length; index++) {
    var element = renders[index];
    document.write("<br>" + element.innerHTML)
}

var firstName = document.getElementById("first-name")
firstName.value = "Sheheryar"


var lastName = document.getElementById("last-name")
lastName.value = "Uddin"
var email = document.getElementById("email")
email.value = "sheheryark505@gmail.com"

// i. What is node type of element having id “form-content”.
var formContent = document.getElementById("form-content")
document.write("<br><br>Type of #Form-Content: " + formContent.nodeType)
var lastName = document.getElementById("lastName")
document.write("<br><br>Type of #lastName: " + lastName.nodeType)
document.write("<br><br>Type of #lastName childNode: " + lastName.childNodes[0].nodeType)

lastName.childNodes[0].nodeValue = "Last Name: Joe"

var mainContent = document.getElementById("main-content")
var firstChild = mainContent.firstChild
var lastChild = mainContent.lastChild
console.log(firstChild, lastChild);

var previousSibling = lastName.previousSibling
var nextSibling = lastName.nextSibling
console.log(previousSibling, nextSibling)

var email = document.getElementById("email")
var emailParent = email.parentNode
console.log(emailParent, emailParent.nodeType)