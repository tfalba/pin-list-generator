// Problem is something to do with holding 1 fixed at
// A1 instead of B1 -- also doesn't work in excel sheet
// Rewrite code so it does it how spreadsheet was before.

const numberStudents = document.querySelector('#total-students')
const round = document.querySelector('#round')
const form = document.querySelector('#form')
const sideBar = document.querySelector('.side-bar')
const dropStudents = document.querySelector('#drop-students')
const boxA = document.querySelector('#boxa')
const boxB = document.querySelector('#boxb')
const lifeboat = document.querySelector('#lifeboat')

const boxes = new Array(44)
for (let i = 0; i < 44; i++) {
  boxes[i] = document.querySelector(`#box${i + 1}`)
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const studentArrays = new Array(86)
  for (let i = 0; i < 86; i++) {
    studentArrays[i] = []
  }


  /* --------------------------------- Do this section after get new total of students -------------------------------- */


  for (let i = 1; i <= (numberStudents.value); i++) {
    studentArrays[0].push(i)
  }

  /* -------- just need to create array from form input -- look for how to turn string expression into an array ------- */
  // let totalStudents = numberStudents.value

  const dropStudentsArray = dropStudents.value.split(', ').map(x => +x)
  let studentArray1 = studentArrays[0]
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

  const shifter = totalStudents / 2
  for (let i = 1; i < studentArrays.length; i++) {
    studentArrays[i].push(studentArrays[0][0])
    for (let j = 1; j < (totalStudents); j++) {
      if (j < shifter) {
        studentArrays[i].push(studentArrays[i - 1][j + shifter])
      } else {
        studentArrays[i].push(studentArrays[i - 1][j - shifter + 1])
      }
    }
  }

  for (let i = 0; i < totalStudents / 2; i++) {
    boxes[i].innerHTML = studentArrays[round.value - 1][i]
    boxes[i].classList.remove('hideme')
  }

  // for (let i = shifter; i < 50 - shifter; i++) {

  for (let i = shifter; i < 44 - shifter; i++) {
    boxes[i].classList.add('hideme')
  }

  // for (let i = 50 - shifter; i < 50; i++) {
  for (let i = 44 - shifter; i < 44; i++) {
  //  boxes[i].innerHTML = studentArrays[round.value - 1][i - (50 - totalStudents)]
    boxes[i].innerHTML = studentArrays[round.value - 1][i - (44 - totalStudents)]
    boxes[i].classList.remove('hideme')
  }
  if (numberStudents.value < 33) {
    boxA.classList.add('bigger')
    boxB.classList.add('bigger')
    for (let i = 0; i < 44; i++) {
      boxes[i].classList.add('bigger')
    }
  }
  let s = ''
  for (let i = 1; i <= 28; i++) {
    s = i.toString()
    if (round.value === s) {
      sideBar.classList.add(`round${i}`)
      boxA.classList.add(`round${i}`)
      boxB.classList.add(`round${i}`)
      console.log('adding round# class ' + i)
    }
  }

  sideBar.innerHTML = `ROUND ${round.value}`
  if (lifeboat.checked === true & round.value < numberStudents.value) {
    boxA.innerText = 'A =>'
    boxB.innerText = 'B'
  } else if (lifeboat.checked === true & round.value >= numberStudents.value) {
    boxB.innerText = '<= B'
    boxA.innerText = 'A'
  } else {
    boxA.innerText = 'A'
    boxB.innerText = 'B'
  }
  console.log(studentArrays[3])
})

// can rewrite to add box elements in js instead of html -- column a would be 0 to numberStudents.value/2 -1
// column b would be reverse from numberStudents.value/2 to numbersStudents.value
// where 44 is the current max of students
// then don't need to deal with the issue of what presents intially
// turn part where array[0] gets set and turn it into a function for 50 students

