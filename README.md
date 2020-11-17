# pin-list-generator

THIS FILE WILL CREATE PIN LISTS THAT CAN HANDLE UP TO 50 STUDENTS AND GENERATE PAIRING FILES EVEN WHEN CERTAIN STUDENT NUMBERS HAVE DROPPED.

// setup a form that will request number of students
// start with that as basic
// next iteration, request any numbers to be removed from that list
// take number of students and convert to an array
// so loop over 30 students for example and push to student array

// need to think about how would output the columns
// two outer flex box for column 'a' and column 'b'
// number of boxes 'turned on' in form depends on totalStudents/2
// set 50 boxes (25+25) and only show when innerHTML is written with array value

// setup an eventListener to get 'input' from field that enters student number
// this value will be the length of the array