let employeeArray = [];

function createEmployee() {
   let id = document.getElementById("code").value;
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let address = document.getElementById("address").value;
   let type = document.getElementById("chucvu").value;
   let Timework = +document.getElementById("giolam").value;
   let LuongtoDate = +document.getElementById("luongDate").value;

//    B2:
   const employee = new Employee(id,name,email,address,type, Timework, LuongtoDate);

//    B3 
    employeeArray.push(employee);

    // B4: render
    renderTableEmployee(employeeArray);    
}

function searchStudent() {
    // B1: Dom
    let search = document.getElementById('search').value;

    // B2: lọc 
    let newEmployeeArray = employeeArray.filter((employee) => {
        let name = employee.name.toLowerCase();
        search = search.toLowerCase();

        return name.indexOf(search) !== -1;
    });

    // B3:
    renderTableEmployee(newEmployeeArray);

}

function DeleteEmployee(employeeId) {
    employeeArray = employeeArray.filter((employee) => {
        return employee.id !== employeeId;
    })

    renderTableEmployee(employeeArray);
}

function selectEmployee(employeeId) {
    let selectedEmployee = employeeArray.find((employee) => {
        return employee.id === employeeId;
    })


    document.getElementById("code").value = selectedEmployee.id;
    document.getElementById("name").value = selectedEmployee.name;
    document.getElementById("email").value = selectedEmployee.email;
    document.getElementById("address").value = selectedEmployee.address;
    document.getElementById("chucvu").value = selectedEmployee.type;
    document.getElementById("giolam").value = selectedEmployee.Timework;
    document.getElementById("luongDate").value = selectedEmployee.LuongtoDate;

    $("#myModal").modal("show");

}

function UpdateForm() {
    let id = document.getElementById("code").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let type = document.getElementById("chucvu").value;
    let Timework = +document.getElementById("giolam").value;
   let LuongtoDate = +document.getElementById("luongDate").value;

   const employee = new Employee(id,name,email,address,type, Timework, LuongtoDate);

   let index = employeeArray.findIndex((employee) => {
    return employee.id === id;
   });
   employeeArray[index] = employee;

   renderTableEmployee(employeeArray);

}

function renderTableEmployee(employeeArray) {
    let html = employeeArray.reduce((output,employee) => {
        return output + `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.address}</td>
            <td>${employee.type}</td>
            <td>${employee.Timework}</td>
            <td>${employee.LuongtoDate}</td>
            <td>${Math.floor(employee.CalcLuong())}</td>
            <td>
            <button class="btn btn-primary" onclick="selectEmployee('${employee.id}')">Chỉnh sửa</button>
            <button class="btn btn-danger" onclick="DeleteEmployee('${employee.id}')">Xóa</button>
            </td>           
        </tr>
        `;
    }, "")

    document.getElementById("tbodyThongTinEmployee").innerHTML = html;
}

function resetForm() {
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("chucvu").value = "";
    document.getElementById("giolam").value = "";
    document.getElementById("luongDate").value = "";
}