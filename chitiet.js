const goHome = document.getElementById("backhome");
goHome.addEventListener("click", () => {
    window.location.href = "index.html";
});

const dulieunhan = JSON.parse(localStorage.getItem('dongvatSelected'));

function hienthichitiet(data) {
    const chitietContainer = document.getElementById("noidung");
    chitietContainer.innerHTML = `
        <h1>${data.ten}</h1>
        <p>${data.diaiem}</p>
        <p>${data.mota}</p>
        <h2>Thư viện ảnh</h2>
        <div id="img-gallery" class='img-gallery'></div>
    `;

    const galleryContainer = document.getElementById("img-gallery");
    for(let i = 1; i <= data.imgCount; i++) {
        const img = document.createElement("img");
        // Đường dẫn ví dụ: ./lion/lion_1.jpg
        img.src = `${data.folder}/${data.prefix}${i}.jpg`;
        img.alt = `${data.ten} ${i}`;
        galleryContainer.appendChild(img);
    }
}

hienthichitiet(dulieunhan);