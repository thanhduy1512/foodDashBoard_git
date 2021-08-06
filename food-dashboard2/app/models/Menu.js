export class Menu {
    mangMonAn = [];

    themMonAn(monAn) {
        this.mangMonAn.push(monAn);
    }
    //phương thức tĩnh ko cần khởi tạo đối tượng 

    static luuMonAn(mangMonAn) {
        //static dùng để định nghĩa hàm mà không phải tạo đối tượng 
        let data = JSON.stringify
            (mangMonAn)
        localStorage.setItem
            ('mangMonAn', mangMonAn);
    }
}