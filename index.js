function Type() {
    let chose = document.getElementById('typeSelect').value;
    if(chose === 'Student') {
    const Student = `
    <div class="col-8 mx-auto">
        <table class="table">
            <thead>
            <tr id="th-head">
                <th>Mã</th>
                <th>Họ Và Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Type</th>
                <th>Toán</th>
                <th>Lý</th>
                <th>Hóa</th>
                <th>Điểm Trung Bình</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            </thead>
            <tbody id="tbodyThongTinStudent"></tbody>
        </table>
    </div>
    `;
    document.getElementById("tEmployee").innerHTML = "";
    document.getElementById("tCustomer").innerHTML = "";
    document.getElementById("tStudent").innerHTML = Student;
    } else if (chose === "Employee") {
        const employee = `
        <div class="col-8 mx-auto">
        <table class="table">
            <thead>
            <tr id="th-head">
                <th>Mã</th>
                <th>Họ Và Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Type</th>
                <th>Số Ngày Làm Việc</th>
                <th>Lương Theo Ngày</th>
                <th>Lương</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            </thead>
            <tbody id="tbodyThongTinEmployee"></tbody>
        </table>
    </div>
    `;
    document.getElementById("tCustomer").innerHTML = "";
    document.getElementById("tStudent").innerHTML = "";
    document.getElementById("tEmployee").innerHTML = employee;
    } else if (chose === "Customer") {
        const customer = `
        <div class="col-9 mx-auto">
        <table class="table">
            <thead>
            <tr id="th-head">
                <th>Mã</th>
                <th>Họ Và Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Type</th>
                <th>Tên Công Ty</th>
                <th>Trị Giá Hóa Đơn</th>
                <th>Đánh Giá</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            </thead>
            <tbody id="tbodyThongTinCustomer"></tbody>
        </table>
    </div>
    `;
    document.getElementById("tStudent").innerHTML = "";
    document.getElementById("tEmployee").innerHTML = "";
    document.getElementById("tCustomer").innerHTML = customer;
    } else {
        document.getElementById("tStudent").innerHTML = "";
        document.getElementById("tEmployee").innerHTML = "";
        document.getElementById("tCustomer").innerHTML = "";
    }
}

function myFuntion() {
    let chose = document.getElementById("chucvu").value;
    if(chose === "Student"){
        const subject = `
        <div class="form-group">
			<div class="input-group">
                <div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input  type="number" name="toan" id="toan" class="form-control input-sm "
				placeholder="Điểm toán">
                                    
			</div>
				<span class="sp-thongbao" id="tbDiemToan"></span>
		</div>

        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="ly" id="ly" class="form-control input-sm "
				placeholder="Điểm Lý">
			</div>
				<span class="sp-thongbao" id="tbDiemLy"></span>
		</div>

        <div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="hoa" id="hoa"  class="form-control input-sm "
				placeholder="Điểm Hóa">
			</div>
			<span class="sp-thongbao" id="tbDiemHoa"></span>
		</div>

        `;

        const buttonStuden = `
                    <button id="btnThemNV" type="button" onclick="createStudent()" class="btn btn-success">Thêm học sinh</button>
					<button id="btnCapNhat" type="button" onclick="UpdateForm()" class="btn btn-primary" data-dismiss="modal">Cập Nhật</button>
					<button id="btnCapNhat" type="button" onclick="resetForm()" class="btn btn-dark">Reset</button>
					
        `;
        document.getElementById('employee').innerHTML = "";
        document.getElementById('customer').innerHTML = "";
        document.getElementById('student-subject').innerHTML = subject;
        document.getElementById('modalfooter-2').innerHTML = "";
        document.getElementById('modalfooter-3').innerHTML = "";
        document.getElementById('modalfooter').innerHTML = buttonStuden;
    } else if(chose === 'Employee'){
        const employee = `
        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="timework" id="giolam" class="form-control input-sm "
				placeholder="Số ngày làm việc">
			</div>
				<span class="sp-thongbao" id="tbTimeWork"></span>
		</div>

        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="luong" id="luongDate"  class="form-control input-sm "
				placeholder="Lương theo ngày">
			</div>
				<span class="sp-thongbao" id="tbLuong"></span>
		</div>
        `;
        const buttonEmployee = `
                    <button id="btnThemNV" type="button" onclick="createEmployee()" class="btn btn-success">Thêm Nhân Viên</button>
					<button id="btnCapNhat" type="button" onclick="UpdateForm()" class="btn btn-primary" data-dismiss="modal">Cập Nhật</button>
					<button id="btnCapNhat" type="button" onclick="resetForm()" class="btn btn-dark">Reset</button>
					
        `;
        document.getElementById('student-subject').innerHTML = "";
        document.getElementById('customer').innerHTML = "";
        document.getElementById('employee').innerHTML = employee; 
        document.getElementById('modalfooter-3').innerHTML = "";
        document.getElementById('modalfooter').innerHTML = "";
        document.getElementById('modalfooter-2').innerHTML = buttonEmployee;
    } else if(chose === 'Customer'){
        const customer = `
        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="text" name="company"  class="form-control input-sm "
				placeholder="Tên công ty">
			</div>
				<span class="sp-thongbao" id="tbCompany"></span>
		</div>

        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="price"  class="form-control input-sm "
				placeholder="Trị giá hóa đơn">
			</div>
				<span class="sp-thongbao" id="tbPrice"></span>
		</div>

        <div class="form-group" >
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
				</div>
				<input type="number" name="danhgia"  class="form-control input-sm "
				placeholder="Đánh giá">
			</div>
				<span class="sp-thongbao" id="tbDanhGia"></span>
		</div>

        `;

        const buttonCustomer = `
                    <button id="btnThemNV" type="button" onclick="createStudent()" class="btn btn-success">Thêm Khách Hàng</button>
					<button id="btnCapNhat" type="button" onclick="UpdateForm()" class="btn btn-primary" data-dismiss="modal">Cập Nhật</button>
					<button id="btnCapNhat" type="button" onclick="resetForm()" class="btn btn-dark">Reset</button>
					
        `;
        document.getElementById('student-subject').innerHTML = "";
        document.getElementById('employee').innerHTML = "";
        document.getElementById('customer').innerHTML = customer;

        document.getElementById('modalfooter-3').innerHTML = buttonCustomer;
        document.getElementById('modalfooter').innerHTML = "";
        document.getElementById('modalfooter-2').innerHTML = "";
    } else {
        document.getElementById('student-subject').innerHTML = "";
        document.getElementById('employee').innerHTML = "";
        document.getElementById('customer').innerHTML = "";

        document.getElementById('modalfooter-3').innerHTML = "";
        document.getElementById('modalfooter').innerHTML = "";
        document.getElementById('modalfooter-2').innerHTML = "";
    }
}