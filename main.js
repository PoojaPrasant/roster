var students = [];
function submit (){
    var stu1 = document.getElementById ("stud1").value;
    var stu2 = document.getElementById ("stud2").value;
    var stu3 = document.getElementById ("stud3").value;
    var stu4 = document.getElementById ("stud4").value;
    var stu5 = document.getElementById ("stud5").value;
    students.push(stu1);
    students.push(stu2);
    students.push(stu3);
    students.push(stu4);
    students.push(stu5);
    console.log(students);
    document.getElementById("display").innerHTML=students;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting() {
    students.sort();
    console.log(students);
    document.getElementById("display").innerHTML=students;
}
