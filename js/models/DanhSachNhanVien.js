function DanhSachNhanVien() {
    this.arr = [];

    this.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    }
}

//protype: dùng để đinh nghĩa thuộc tính bên ngoài
DanhSachNhanVien.prototype.timViTri = function(maNV){
    //findIndex từ động duyệt mảng từ đầu tới cuối, nhận vào một callBack function
    //khi new lên nó sẽ k thực sự thuộc obj 
    return this.arr.findIndex(function(item){
        return maNV === item.ma;
    })
}

DanhSachNhanVien.prototype.xoaNhanVien = function(maNV){
    var viTri = this.timViTri(maNV);
    if(viTri !== -1){
        this.arr.splice(viTri,1);
    }
}