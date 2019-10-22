export function checkLogin(username, password) {
    let person = [];
    fetch('/student', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({fname: fname, lname: lname})
                      })
        .then(res => res.json())
        .then(student => person.push(student));
    if(person.length > 0){
        
    }
    return true;
} 

export function getStudents() {
    let students = [];
    fetch('/student', {method: 'post',
                        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
                        body: JSON.stringify({a: 7, str: 'Some string: &=&'})
                      })
        .then(res => res.json())
        .then(student => students.push(student) );
    return students;
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

