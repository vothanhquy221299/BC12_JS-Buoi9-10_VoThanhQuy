function Validator() {
    this.kiemTraRong = function (value, spanId, msg) {
        if (!value) {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = msg;
            return false;
        }
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    };

    this.kiemTraDoDaiKiTu = function (value, spanID, msg, min, max) {
        if (value.length >= min && value.length <= max) {
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = msg;
        return false;
    };

    this.kiemTraChuoi = function (value, spanID, msg) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        if (pattern.test(value)) {
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
             true;
        }
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = msg;
        return false;
        };
    this.validateEmail = function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    this.kiemTraEmail = function (value, spanID, msg) {
        if (this.validateEmail(value)) {
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = msg;
        return false;
    };
    this.currentDate = function(){
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear()
        return today = day + "/" + month + "/" + year
    }
    this.kiemTraNgaySinh = function(value, spanID, msg){
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear()
        if(value.getDate !== day && value.getMonth !== month && value.getFullYear !== year){
            getEle(spanID).style.display = 'none';
            getEle(spanID).innerHTML = '';
            return true;
        }
        getEle(spanID).style.display = 'block';
        getEle(spanID).innerHTML = msg;
  }
}
