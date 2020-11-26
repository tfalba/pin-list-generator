// Problem is something to do with holding 1 fixed at
// A1 instead of B1 -- also doesn't work in excel sheet
// Rewrite code so it does it how spreadsheet was before.

const numberStudents = document.querySelector('#total-students')
const round = document.querySelector('#round')
const form = document.querySelector('#form')
const display = document.querySelector('#display')
const sideBar = document.querySelector('#side-bar')
const dropStudents = document.querySelector('#drop-students')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let initialStudents = []
  let studentArray1 = []
  let studentArray2 = []
  let studentArray3 = []
  let studentArray4 = []
  let studentArray5 = []
  let studentArray6 = []
  let studentArray7 = []
  let studentArray8 = []
  let studentArray9 = []
  let studentArray10 = []
  let studentArray11 = []
  let studentArray12 = []
  let studentArray13 = []
  let studentArray14 = []
  let studentArray15 = []
  let studentArray16 = []
  let studentArray17 = []
  let studentArray18 = []
  let studentArray19 = []
  let studentArray20 = []
  let studentArray21 = []
  let studentArray22 = []
  let studentArray23 = []
  let studentArray24 = []
  let studentArray25 = []
  let studentArray26 = []
  let studentArray27 = []
  let studentArray28 = []
  // change first array to finalStudents

  /* --------------------------------- Do this section after get new total of students -------------------------------- */

  for (let i = 1; i <= (numberStudents.value); i++) {
    studentArray1.push(i)
  }

  let studentArrays = [studentArray1, studentArray2, studentArray3, studentArray4, studentArray5, studentArray6, studentArray7,
    studentArray8, studentArray9, studentArray10, studentArray11, studentArray12, studentArray13, studentArray14, studentArray15,
    studentArray16, studentArray17, studentArray18, studentArray19, studentArray20, studentArray21, studentArray22, studentArray23,
    studentArray24, studentArray25, studentArray26, studentArray27, studentArray28]

  /* -------- just need to create array from form input -- look for how to turn string expression into an array ------- */
  // let totalStudents = numberStudents.value

  const dropStudentsArray = dropStudents.value.split(', ').map(x => +x)
  let finalStudents = studentArray1
  // loop over this for the length of the array that contains dropped students
  for (let i = 0; i <= dropStudentsArray.length; i++) {
    function isNotDrop (value) {
      return value !== dropStudentsArray[i]
    }
    finalStudents = finalStudents.filter(isNotDrop)
  }

  studentArray1 = finalStudents

  let totalStudents = studentArray1.length

  const students = studentArray1.length
  totalStudents = 0
  if (students % 2 === 0) {
    totalStudents = students
  } else {
    totalStudents = students + 1
    studentArray1.push(50)
  }
  studentArrays[0] = studentArray1
  // debugger

  // set totalStudents = finalStudents.length
  //change out references to studentArray1 to finalStudents

  const shifter = totalStudents / 2
  for (let i = 1; i < studentArrays.length; i++) {
    // studentArrays[i].push(studentArrays[i - 1][studentArrays[i - 1].length - 1])
    studentArrays[i].push(studentArrays[0][0])
    for (let j = 1; j < (totalStudents); j++) {
      if (j < shifter) {
        studentArrays[i].push(studentArrays[i - 1][j + shifter])
      }
      else {
        studentArrays[i].push(studentArrays[i - 1][j - shifter + 1])
      }

      // console.log(studentArrays)
      // console.log(studentArrays[i])
      // console.log(studentArrays[i][j])
      // console.log(i)
    }
  }

  for (let i = 0; i < totalStudents / 2; i++) {
    boxes[i].innerHTML = studentArrays[round.value - 1][i]
    boxes[i].classList.remove('hideme')
  }

  for (let i = shifter; i < 50 - shifter; i++) {
    boxes[i].classList.add('hideme')
  }

  for (let i = 50 - shifter; i < 50; i++) {
    boxes[i].innerHTML = studentArrays[round.value - 1][i - (50 - totalStudents)]
    boxes[i].classList.remove('hideme')
  }

  // change above to go to shifter -- from shifter to 25 set to hideme
  // then hide from 26 for (50-shifter/2)
  // close to above but see post it note.
  // need to have two nested loops each counting by 2.

  // for (let i = shifter; i < 50 - shifter - 1; i++) {
  //   boxes[i].classList.add('hideme')
  // }

  if (round.value === '1' | round.value === '6' | round.value === '11' | round.value === '16') {
    display.classList.add('round1')
  }
  if (round.value === '2' | round.value === '7' | round.value === '12' | round.value === '17') {
    display.classList.add('round2')
  }
  sideBar.innerHTML = `ROUND ${round.value}`
  console.log(studentArrays[3])
})

// //   form.classList.add('hideme')  -- use this as a way to shift content of the page.
// //    could add a varname.classList.remove('hideme') to whatever was in background

const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
const box10 = document.querySelector('#box10')
const box11 = document.querySelector('#box11')
const box12 = document.querySelector('#box12')
const box13 = document.querySelector('#box13')
const box14 = document.querySelector('#box14')
const box15 = document.querySelector('#box15')
const box16 = document.querySelector('#box16')
const box17 = document.querySelector('#box17')
const box18 = document.querySelector('#box18')
const box19 = document.querySelector('#box19')
const box20 = document.querySelector('#box20')
const box21 = document.querySelector('#box21')
const box22 = document.querySelector('#box22')
const box23 = document.querySelector('#box23')
const box24 = document.querySelector('#box24')
const box25 = document.querySelector('#box25')
const box26 = document.querySelector('#box26')
const box27 = document.querySelector('#box27')
const box28 = document.querySelector('#box28')
const box29 = document.querySelector('#box29')
const box30 = document.querySelector('#box30')
const box31 = document.querySelector('#box31')
const box32 = document.querySelector('#box32')
const box33 = document.querySelector('#box33')
const box34 = document.querySelector('#box34')
const box35 = document.querySelector('#box35')
const box36 = document.querySelector('#box36')
const box37 = document.querySelector('#box37')
const box38 = document.querySelector('#box38')
const box39 = document.querySelector('#box39')
const box40 = document.querySelector('#box40')
const box41 = document.querySelector('#box41')
const box42 = document.querySelector('#box42')
const box43 = document.querySelector('#box43')
const box44 = document.querySelector('#box44')
const box45 = document.querySelector('#box45')
const box46 = document.querySelector('#box46')
const box47 = document.querySelector('#box47')
const box48 = document.querySelector('#box48')
const box49 = document.querySelector('#box49')
const box50 = document.querySelector('#box50')
const boxes = [box1, box2, box3, box4, box5, 
  box6, box7, box8, box9, box10,
  box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24,
  box25, box26, box27, box28, box29, box30, box31, box32, box33, box34, box35, box36, box37, box38,
  box39, box40, box41, box42, box43, box44, box45, box46, box47, box48, box49, box50]
