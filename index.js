//problem 1
function square (a){
    var square = a * a;
    return square
}
var squareOfNmbr = (4)
console.log(`Square ofgiven Numbr: ${squareOfNmbr}`)

//problem 2
var count = 10 ;
 function myFunction(){
    var count = 15;
count= count * 2;
return count
 } 
 var square = myFunction();
  console.log(`global count: ${count}`)
  console.log(`local count : ${square}`)


  //problem 3
  var total = 50
  function addTotal(x){
    total = total + x
    return total
  }
  var updatedTotal = addTotal(30)
  console.log(`updated value of total ${updatedTotal}`)


  //problem 4

  function greetUser(userName){
    var gMessage = "Hello, "+ userName
    return gMessage
  }
  var Message = greetUser("Moeed")
  console.log(`Message:${Message}`)


  //problem 5

  var status = "intractive"
  function activate(){
    status = "ACTIVE"
    console.log(`The value of status inside function: ${status}`)
  }
  activate();
  console.log(`The value of status outside funvtion: ${status}`)