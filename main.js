//setup a form that will request number of students 
//start with that as basic
//next iteration, request any numbers to be removed from that list
//take number of students and convert to an array
//so loop over 30 students for example and push to student array

//need to think about how would output the columns
//two outer flex box for column 'a' and column 'b'
//number of boxes 'turned on' in form depends on totalStudents/2
//set 50 boxes (25+25) and only show when innerHTML is written with array value


//setup an eventListener to get 'input' from field that enters student number
//this value will be the length of the array

const totalField = document.querySelector('#total')
const numberStudents = document.querySelector('#total-students')
const form = document.querySelector('#form')


form.addEventListener('submit', function (event) {
    event.preventDefault()
    // let total=days.value*5
    // console.log(total)
    let studentArray=[]
    for (i=1; i<=(numberStudents.value); i++) {
        studentArray.push(i)
        // console.log(studentArray)
        console.log(i)
    }
    totalField.innerHTML = "Total number of students is " + numberStudents.value
    totalField.innerHTML = studentArray
})
  
    
    //   form.classList.add('hideme')  -- use this as a way to shift content of the page.
    //    could add a varname.classList.remove('hideme') to whatever was in background
