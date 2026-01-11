const dsdongvat = [
    {
        ten: "Con Hổ", // Đổi tên
        hinhanh: "./images/ho/ho1.jpg", // Đường dẫn ảnh mới
        imgCount: 4, // Số lượng ảnh bạn có trong thư mục ho
        folder: "./images/ho",
        diaiem: "Khu vực: Rừng rậm Châu Á",
        prefix: "ho", // Tên file là ho1.jpg, ho2.jpg...
        mota: "Hổ là loài mèo lớn nhất thế giới, biểu tượng của sức mạnh và sự nhanh nhẹn.",
        id: "ho"
    },
   {
    ten: "Ngựa Vằn",
    hinhanh: "./images/ngua/ngua1.jpg",
    imgCount: 4,
    folder: "./images/ngua",
    diaiem: "Khu vực: Đồng cỏ Châu Phi",
    prefix: "ngua",
    mota: "Mỗi cá thể ngựa vằn có một bộ sọc duy nhất, không con nào giống con nào.",
    id: "ngua"
},
    {
        ten: "Hươu Cao Cổ", // Đổi tên
        hinhanh: "./images/huu/huu1.jpg",
        imgCount: 3,
        folder: "./images/huu",
        diaiem: "Khu vực: Đồng cỏ Châu Phi",
        prefix: "huu",
        mota: "Loài động vật cao nhất thế giới với chiếc cổ dài đặc trưng.",
        id: "huucaoco"
    },
    {
        ten: "Gấu Trúc",
        hinhanh: "./images/gau/gau1.jpg",
        imgCount: 6,
        folder: "./images/gau",
        diaiem: "Khu vực: Trung Quốc",
        prefix: "gau",
        mota: "Loài gấu hiền lành, thức ăn chủ yếu là lá tre và trúc.",
        id: "gautruc"
    }
];

const hienthids = document.getElementById("dongvatList");

dsdongvat.forEach(pet => {
    const the = document.createElement("div");
    the.classList.add("dongvat-card"); // Giữ class cũ để dùng style.css
    the.innerHTML = `
        <img src="${pet.hinhanh}" alt="${pet.ten}">
        <div class="dongvat-name">${pet.ten}</div>
    `;
    
    the.addEventListener("click", () => {
        localStorage.setItem('dongvatSelected', JSON.stringify(pet));
        window.location.href = 'chitiet.html';
    });
    hienthids.appendChild(the);
});