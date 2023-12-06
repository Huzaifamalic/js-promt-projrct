// Assigment 
var Name = prompt('Enter Your Name')
var FName = prompt('Enter Your F.Name')
var Age = +prompt('Enter Your Age')
var Contact = +prompt('Enter Your Contact')
var CityName = prompt('Enter Your City')


document.write(
    `<table border = '2px'>
    <tr>
    <th>Name</th>
    <th>FName</th>
    
    <th>Age</th>
    <th>Contact</th>
    <th>CityName</th>
    </tr>
    <tr>
    <td>${Name}</td>
    <td>${FName}</td>
    
    <td>${Age}</td>
    <td>${Contact}</td>
    <td>${CityName}</td>
    </tr>
    
    </table>`
    
    
)