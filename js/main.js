/**
 * Khoi tao doi tuong dsnv tu lop doi tuong DanhSachNhanVien
 */
var dsnv = new DanhSachNhanVien();
var validator = new Validator();

function getEle(id){
    return document.getElementById(id);
}


//` `: string template
var hienThidanhSachNhanVien = function(arr){
    var content = "";
    arr.map(function(nv, index){
        /**
         * nv đại diện cho từng obj khi duyệt qua mảng, index: chỉ số của phần tử trogn mảng
         */
        content += `
                <tr>
                    <td>${nv.ma}</td>
                    <td>${nv.hoTen}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngaySinh}</td>
                    <td>${nv.chucVu}</td>
                    <td>
                        <button class="btn btn-info">Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="_xoaNhanVien('${nv.ma}')">Xóa</button>
                    </td>
                </tr>
        `;
    })
    getEle('tableDanhSach').innerHTML = content;
}

var setLocalStorage = function(){
    /**
     * Lưu data xuôngs local storage, chuyển dữ liệu thành chuỗi
     */
    //Đặt key là gì thì sẽ lấy dữ liệu lên bằng key đó
    localStorage.setItem('DSNV', JSON.stringify(dsnv.arr))
}

var getLocalStorage = function(){
    /**
     * Lấy data từ local storage, chuyển tùư chuỗi thành JSON
     */
    dsnv.arr = JSON.parse(localStorage.getItem('DSNV', ));
    hienThidanhSachNhanVien(dsnv.arr);
}
getLocalStorage();

/**
 * Xóa nhân viên
 */

//Sau khi xóa xong cũng phải tạo bảng và set lại localStorage
function _xoaNhanVien(maNV){
    dsnv.xoaNhanVien(maNV);
    hienThidanhSachNhanVien(dsnv.arr);
    setLocalStorage();
} 
document.getElementById('btnThem').addEventListener('click', function(){
    getEle('btnCapNhat').style.display = 'none';
});

/**
 * Them nhan vien
 */
getEle('btnThemNV').addEventListener('click', function(){
    /**
     * Lay gia tri nguoi dung nhap vao
     */
    var maNV =  getEle('msnv').value;
    var tenNV =  getEle('name').value;
    var email =  getEle('email').value;
    var matKhau =  getEle('password').value;
    var ngaySinh =  getEle('datepicker').value;
    var chucVu = getEle('chucvu').value;

    /**
     * Validate input
     */
    var isValid = true;

    isValid &= validator.kiemTraRong(maNV, 'tbMaNV', '(*) Mã nhân viên không được rỗng')
            && validator.kiemTraDoDaiKiTu(maNV, 'tbMaNV', '(*) Vui lòng nhập từ 4 đến 10 kí tự', 4, 10);
    isValid &= validator.kiemTraRong(tenNV, 'tbTen', '(*) Tên nhân viên không được rỗng')
            && validator.kiemTraChuoi(tenNV, 'tbTen', '(*) Vui lòng nhập vào chuỗi');
    isValid &= validator.kiemTraRong(email, 'tbEmail', '(*) Email không được rỗng')
            && validator.kiemTraEmail(email, 'tbEmail', '(*) Email theo định dạng example@gmail.com')
    isValid &= validator.kiemTraNgaySinh(ngaySinh, 'tbNgay', '(*) Ngày sinh phải khác ngày hiện tại')
    if(!isValid) return;
    /**
     * Khoi tao doi tuong nv tu lop doi tuong NhanVien
     */
    var nhanVien = new NhanVien(maNV, tenNV, email, ngaySinh, chucVu);
    dsnv.themNhanVien(nhanVien);
    // console.log(dsnv.arr);
    hienThidanhSachNhanVien(dsnv.arr);
    setLocalStorage();
});