import { MonAn } from '../models/MonAn.js';
import { Menu } from '../models/Menu.js'

let menu = new Menu();

//Định nghĩa sự kiện click sau khi người dùng nhập liệu hoàn tất
document.getElementById('btnThemMon').onclick = (event) => { //event đại diện cho sự kiện của nút btnThemMon
    let arrInput = document.querySelectorAll('#foodForm select,#foodForm input,#foodForm textarea');


    //Tạo đối tượng chứa dữ liệu của người dùng nhập
    let mon = new MonAn();
    // console.log(arrInput)
    for (let input of arrInput) {
        let { value, id } = input;
        // let id = input.id; //maMon
        // mon['maMon'] = value;
        mon[id] = value;
    }

    //Làm bài tập về nhà phần hiển thị

    let arrText = document.querySelectorAll('#card-body-food .text-muted');

    for (let tagSpan of arrText) {
        let { id } = tagSpan;
        tagSpan.innerHTML = mon[id];

        //console.log(id);
    }
    document.getElementById('giaSauKhuyenMai').innerHTML = mon
    ['tinhGiaSauKhuyenMai']();
    //Thêm dữ liệu vào menu
    menu.themMonAn(mon);
    Menu.luuMonAn(menu.mangMonAn);
}

