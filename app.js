// Question 1
// var stdName = [];

// Question 2
// var stdName = new Array();

// Question 3
// var strArr = ["Haris", "Ali", "Khan"];

// Question 4
// var numArr = [1, 2, 3];

// Question 5
// var boolArr = [true, false, true];

// Question 6
// var mixArr = ["Haris", 1, true];

// Question 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1>")
// document.write("<br />1) " + qualifications[0]);
// document.write("<br />2) " + qualifications[1]);
// document.write("<br />3) " + qualifications[2]);
// document.write("<br />4) " + qualifications[3]);
// document.write("<br />5) " + qualifications[4]);
// document.write("<br />6) " + qualifications[5]);
// document.write("<br />7) " + qualifications[6]);
// document.write("<br />8) " + qualifications[7]);

// Question 8
// var stdName = ["Haris", "Taha", "Shahab"];
// var stdNum = [320, 230, 480];
// document.write("Score of " + stdName[0] + " is " + stdNum[0] + ". Percentage: " + ((stdNum[0] * 100) / 500) + "%")
// document.write("<br />Score of " + stdName[1] + " is " + stdNum[1] + ". Percentage: " + ((stdNum[1] * 100) / 500) + "%")
// document.write("<br />Score of " + stdName[2] + " is " + stdNum[2] + ". Percentage: " + ((stdNum[2] * 100) / 500) + "%")

// Question 9
// var color = ["red", "orange", "green"];
// document.write("Array: " + color);
// color.unshift(prompt("Write a color to add to beginning:"));
// document.write("<br />Now the updated array is: " + color);
// color.push(prompt("Write a color to add to the end:"));
// document.write("<br />Now the updated array is: " + color);
// color.unshift(prompt("Write a color to add to the beginning:"));
// color.unshift(prompt("Write a color to add to the beginning:"));
// document.write("<br />Now the updated array is: " + color);
// color.shift();
// document.write("<br />Now the updated array is: " + color);
// color.pop();
// document.write("<br />Now the updated array is: " + color);
// color.splice(((+prompt("Write the number where you want to add the color:")) - 1), 0, prompt("Write a color to add:"));
// document.write("<br />Now the updated array is: " + color);
// color.splice(((+prompt("Write from where you want to delete the elements:")) - 1), +prompt("Write how many elements you want to delete:"));
// document.write("<br />Now the updated array is: " + color);

// Question 10
// var stdScore = [320, 230, 480, 120];
// document.write("Scores of Students: " + stdScore);
// stdScore.sort();
// document.write("<br />Ordered Scores of Students: " + stdScore);

// Question 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities List:<br />" + cities);
// var selCities = cities.slice(2,5);
// document.write("<br /><br />Selected cities List:<br />" + selCities);

// Question 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:<br />" + arr);
// document.write("<br /><br />String:<br />" + arr.join(" "));

// Question 13
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices:<br />" + arr);
// document.write("<br /><br />Out:<br />" + arr.shift());
// document.write("<br />Out:<br />" + arr.shift());
// document.write("<br />Out:<br />" + arr.shift());
// document.write("<br />Out:<br />" + arr.shift());

// Question 14
// var arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// document.write("Devices:<br />" + arr);
// document.write("<br /><br />Out:<br />" + arr.pop());
// document.write("<br />Out:<br />" + arr.pop());
// document.write("<br />Out:<br />" + arr.pop());
// document.write("<br />Out:<br />" + arr.pop());

// Question 15
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Select a Phone Manufacturer: ");
// document.write("<select>");
// document.write("<option>" + phoneManufacturers[0] + "</option>");
// document.write("<option>" + phoneManufacturers[1] + "</option>");
// document.write("<option>" + phoneManufacturers[2] + "</option>");
// document.write("<option>" + phoneManufacturers[3] + "</option>");
// document.write("<option>" + phoneManufacturers[4] + "</option>");
// document.write("<option>" + phoneManufacturers[5] + "</option>");
// document.write("</select>");