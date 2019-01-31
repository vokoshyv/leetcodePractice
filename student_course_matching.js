/*
Write a function that takes in a list of (student ID number, course name) pairs
and returns, for every pair of students, a list of all courses they share

Sample Input:
student_course_pairs = [
["58", "Software Design"],
["58", "Linear Algebra"],
["94", "Art History"],
["94", "operating Systems"],
["17", "Software Design"],
["58", "Mechanics"],
["58", "Economics"],
["17", "Linear Algebra"],
["17", "Political Science"],
["94", "Economics"]
]

Sample Output (pseudocode in any order):
find_pairs(student_course_pairs) =>
{
[58, 17] : ["Software Design", "Linear Algebra"]
[58, 94] : ["Economics"]
[17, 94] : []
}

Wondering what a good approach to this is - no time/space complexity constraints

my approach was make a map of ids and all classes associated with id
then loop through the map and add in common ones to a results list

kind of got stuck on actually implementing my code so i think my
diagramming maybe needed more work but i ran out of time
*/


function find_pairs(student_course_pairs) {
  let classrooms = {};

  // filling up a classroom with each student in a class
  for (let i = 0; i < student_course_pairs.length; i++) {
    let className = student_course_pairs[i][1];
    let student = student_course_pairs[i][0];
    if (className in classrooms) {
      // class has already been instantiated in classrooms object
      // and there's already a student in associated array
      classrooms[className].push(parseInt(student));
    } else {
      // class is being instantiated for the first time
      // insert student as well
      classrooms[className] = [parseInt(student)];
    }
  }

  console.log('-------------------');
  console.log("All classes with associated students: ", classrooms);
  console.log('-------------------');

  // Now, we'll look to create a list of all the student pairs
  // We're not even going to care about the classes for the moment
  // Going to use a set to not worry about students that appear in
  // the input multiple times due to being enrolled in more than one
  // class

  let students = new Set();

  for (let i = 0; i < student_course_pairs.length; i++) {
    students.add(parseInt(student_course_pairs[i][0]));
  }

  // Turn set of students into an array

  students = Array.from(students);

  // sort the students

  students = students.sort();

  // begin creating all possible pairings

  let pairings = {}

  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      let key = students[i] + '_' + students[j];
      pairings[key] = [];
    }
  }

  console.log("PAIRINGS BEFORE STUDENTS ENTERED: ", pairings);
  console.log('-------------------');

  // Begin going through each course and placing associated courses
  // if two or more students exists inside a single class

  for (let classroom in classrooms) {
    let currentClassStudents = classrooms[classroom];
    for (let i = 0; i < currentClassStudents.length; i++) {
      for (let j = i + 1; j < currentClassStudents.length; j++) {
        let key = [currentClassStudents[i], currentClassStudents[j]].sort().join('_');
        pairings[key].push(classroom);
      }
    }
  }

  return pairings;
}


console.log("SOLUTION OF GIVEN EXAMPLE: ", find_pairs([
["58", "Software Design"],
["58", "Linear Algebra"],
["94", "Art History"],
["94", "operating Systems"],
["17", "Software Design"],
["58", "Mechanics"],
["58", "Economics"],
["17", "Linear Algebra"],
["17", "Political Science"],
["94", "Economics"]
]));

/*
console.log("SOLUTION OF MORE COMPLEX EXAMPLE: ", find_pairs([
["58", "Software Design"],
["58", "Linear Algebra"],
["94", "Art History"],
["94", "operating Systems"],
["17", "Software Design"],
["58", "Mechanics"],
["58", "Economics"],
["17", "Linear Algebra"],
["17", "Political Science"],
["94", "Economics"],
["36", "Economics"],
["36", "Software Design"],
["36", "operating Systems"],
["100", "Economics"],
["100", "Software Design"],
["100", "operating Systems"],
]));
*/
