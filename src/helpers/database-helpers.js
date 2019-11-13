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

export async function insertPerson(classID,type,fname,lname,uname,pwd){
    let result = [];
    await fetch('/insertPerson', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({classID: classID, type:type,fname:fname,lname:lname,uname:uname,pwd:pwd})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function insertScore(studentID,classID,attempts,correct,dateStamp){
    let result = [];
    await fetch('/insertScore', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({studentID: studentID, classID:classID,attempts:attempts,correct:correct,dateStamp:dateStamp})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function insertClass(teacherID,name,subject,difficulty){
    let result = [];
    await fetch('/insertClass', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({teacherID: teacherID, name:name,subject:subject,difficulty:difficulty})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function insertObject(object){
    let result = [];
    await fetch('/insertObject', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({object:object})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function insertMessage(author,classID,text){
    let result = [];
    await fetch('/insertMessage', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({author:author,classID:classID,text:text})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getMessages(classID){
    let result = [];
    await fetch('/getMessages', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({classID: classID})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getStudents(classID){
    let result = [];
    await fetch('/getStudents', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({classID: classID})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getTeachers(){
    let result = [];
    await fetch('/getTeachers', {method: 'post'})
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getObjects(){
    let result = [];
    await fetch('/getObjects', {method: 'post'})
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getClass(classID){
    let result = [];
    await fetch('/getClass', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({classID: classID})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}

export async function getStudentScores(studentID){
    let result = [];
    await fetch('/getStudentScores', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({studentID: studentID})
                      })
        .then(res => res.json())
        .then(response => result.push(response));
    return result;
}