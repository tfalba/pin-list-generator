const totalField = document.querySelector('#total')
const numberStudents = document.querySelector('#total-students')
const form = document.querySelector('#form')
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
let pigs = ['market', 'home', 'wee-wee']
let studentArray1 = []
let studentArray2 = []
let studentArray3 = []
let studentArray4 = []
let studentArray5 = []
let studentArray6 = []
let studentArray7 = []
let studentArrays = [studentArray1, studentArray2, studentArray3, studentArray4, studentArray5, studentArray6, studentArray7]

form.addEventListener('submit', function (event) {
  event.preventDefault()
  for (let i = 1; i <= (numberStudents.value); i++) {
    studentArray1.push(i)
    console.log(studentArray1)
    console.log(i)
  }
  for (let i = 1; i < 7; i++) {
    studentArrays[i].push(studentArrays[i - 1][studentArrays[i - 1].length - 1])
    for (let j = 0; j < (numberStudents.value - 1); j++) {
      studentArrays[i].push(studentArrays[i - 1][j])
      console.log(studentArrays)
      console.log(studentArrays[i])
      console.log(studentArrays[i][j])
      console.log(i)
    }
  }
  /* ----------------------- Add an extra box to the html for which round is desired. Make this ----------------------- */
  totalField.innerHTML = 'Total number of students is ' + numberStudents.value
  //   totalField.innerHTML = studentArray + studentArray2
  totalField.innerHTML = studentArray1 + studentArray7
  /* ----------------------------- define round as a field in the form let i = round.value ---------------------------- */
  // make an array of all the student arrays called studentArrays -- call array element matching
  // the round i, as studentArrays[i-1]
  box1.innerHTML = studentArray6[0]
  box2.innerHTML = studentArray6[1]
})

// const totalField = document.querySelector('#total')
// const numberStudents = document.querySelector('#total-students')
// const form = document.querySelector('#form')

// const box1 = document.querySelector('#box1')
// const box2 = document.querySelector('#box2')

// let boxArray = []

// // begin code for handling hiding fields when number of students <50
// const a = 3
// form.addEventListener('submit', function (event) {
//   let studentArray = []
//   for (let i = 1; i <= (numberStudents.value); i++) {
//     studentArray.push(i)
//   }
//   let studentArray2 = [studentArray[studentArray.length - 1]]
//   for (let i = 0; i < studentArray.length - 1; i++) {
//     studentArray2.push(studentArray[i])
//   }
// })

// // numberStudents.addEventListener('change', function (event) {
// //   let studentArray = []
// //   for (let i = 1; i <= (numberStudents.value); i++) {
// //     studentArray.push(i)
// //   }
// //   let studentArray2 = [studentArray[studentArray.length - 1]]
// //   for (let i = 0; i < studentArray.length - 1; i++) {
// //     studentArray2.push(studentArray[i])
// //   }
// // })

// form.addEventListener('submit', function (event) {
//   event.preventDefault()
//   totalField.innerHTML = 'Total number of students is ' + numberStudents.value
//   totalField.innerHTML = studentArray + studentArray2
//   box1.innerHTML = studentArray[0]
//   box2.innerHTML = studentArray[1]

//   console.log(`This should read box 4: box${a + 1}`)
//   // make a loop here with box'${i+1}' and studentArray[i]
//   // using the above can make something like a loop with i from
//   // 0 to array length and setting box`$[i+1]`.innerHTML to studentArray[i]
//   // to get around only one form problem, set a variable for input
//   // called round -- this will be the array cycle that gets pulled and output
// })

// //   form.classList.add('hideme')  -- use this as a way to shift content of the page.
// //    could add a varname.classList.remove('hideme') to whatever was in background
