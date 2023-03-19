let studentArray = [];

//1. Hàm thêm 
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

//3. hàm tìm kiếm 
function searchStudent() {
    // B1: Dom
    let search = document.getElementById('search').value;

    // B2: lọc 
    let newStudentArray = studentArray.filter((student) => {
        let name = student.name.toLowerCase();
        search = search.toLowerCase();

        return name.indexOf(search) !== -1;
    });

    // B3:
    renderTableStudent(newStudentArray);

}

//4. hàm xóa 
function DeleteStudent(studentId) {
    studentArray = studentArray.filter((student) => {
        return student.id !== studentId;
    })

    renderTableStudent(studentArray);
}

//5. fill len form 
function selectStudent(studentId) {
    let selectedStudent = studentArray.find((student) => {
        return student.id === studentId;
    })


    document.getElementById("code").value = selectedStudent.id;
    document.getElementById("name").value = selectedStudent.name;
    document.getElementById("email").value = selectedStudent.email;
    document.getElementById("address").value = selectedStudent.address;
    document.getElementById("chucvu").value = selectedStudent.type;
    document.getElementById("toan").value = selectedStudent.toan;
    document.getElementById("ly").value = selectedStudent.ly;
    document.getElementById("hoa").value = selectedStudent.hoa;

    $("#myModal").modal("show");

}

// 6. hàm cập nhật 
function UpdateForm() {
    let id = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let type = document.getElementById("chucvu").value;
    let toan = +document.getElementById("toan").value;
    let ly = +document.getElementById("ly").value;
    let hoa = +document.getElementById("hoa").value;

   const student = new Student(id,name,email,address,type,toan,ly,hoa);

   let index = studentArray.findIndex((student) => {
    return student.id === id;
   });
   studentArray[index] = student;

   renderTableStudent(studentArray);

}

//2. hàm hiển thị 
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
            <td>
            <button class="btn btn-primary" onclick="selectStudent('${student.id}')">Chỉnh sửa</button>
            <button class="btn btn-danger" onclick="DeleteStudent('${student.id}')">Xóa</button>
            </td>           
        </tr>
        `;
    },"")

    document.getElementById("tbodyThongTinStudent").innerHTML = html;
}

// hàm reset form
function resetForm() {
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("chucvu").value = "";
    document.getElementById("toan").value = "";
    document.getElementById("ly").value = "";
    document.getElementById("hoa").value = "";
}

// hàm reset giao diện 
function resetTable() {
    document.getElementById("tbodyThongTinStudent") = "";
}


