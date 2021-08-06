export class MonAn {
    //Lưu ý thông tin nào có thể tính toán được sẽ không đưa vào lưu trữ
    maMon = '';
    tenMon = '';
    loaiMon = '';
    giaMon = '';
    khuyenMai = '';
    tinhTrang = '';
    moTa = '';
    constructor() {
    }

    tinhGiaSauKhuyenMai() {
        let giaSauKhuyenMai = this.giaMon - (this.giaMon * this.khuyenMai / 100);
        return giaSauKhuyenMai;
    }
}