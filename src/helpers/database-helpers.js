export async function checkLogin(username, password) {
    let person = [];
    await fetch('/login', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({username: username, password: password})
                      })
        .then(res => res.json())
        .then(login => person.push(login));
    return person;
}

export function insertPerson(userID,type,fname,lname,uname,pwd){
    let result = [];
    fetch('/insertPerson', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({userID: userID, type:type,fname:fname,lname:lname,uname:uname,pwd:pwd})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export function insertScore(studentID,classID,attempts,correct,dateStamp){
    let result = [];
    fetch('/insertScore', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({studentID: studentID, classID:classID,attempts:attempts,correct:correct,dateStamp:dateStamp})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export function insertObject(object){
    let result = [];
    fetch('/insertObject', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({object:object})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export function insertClass(teacherID,name,subject,difficulty){
    let result = [];
    fetch('/insertClass', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({teacherID: teacherID, name:name,subject:subject,difficulty:difficulty})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export function getStudentByName(fname,lname){
    let students = [];
    fetch('/student', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({fname: fname, lname: lname})
                      })
        .then(res => res.json())
        .then(student => students.push(student) );
    return students;
}

