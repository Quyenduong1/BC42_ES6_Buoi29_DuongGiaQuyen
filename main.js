const studentArray = [];

// B1: 
function createStudent() {
   let id = document.getElementById("code").value;
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let address = document.getElementById("address").value;
   let type = document.getElementById("chucvu").value;
   let toan = +document.getElementById("toan").value;
   let ly = +document.getElementById("ly").value;
   let hoa = +document.getElementById("hoa").value;

//    B2:
   const student = new Student(id,name,email,address,type,toan,ly,hoa);

//    B3 
    studentArray.push(student);

    // B4: render
    renderTableStudent(studentArray);    
}

function renderTableStudent(studentArray) {
    let html = studentArray.reduce((output,student) => {
        return output + `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.address}</td>
            <td>${student.type}</td>
            <td>${student.toan}</td>
            <td>${student.ly}</td>
            <td>${student.hoa}</td>
            <td>${Math.floor(student.CalcSubject())}</td>
        </tr>
        `;
    },"")

    document.getElementById("tbodyThongTinStudent").innerHTML = html;
}

