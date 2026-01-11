home = document.getElementById("backhome");
backhome.addEventListener("click", () => {
    window.location.href = "index.html";
});

const dulieunhan = JSON.parse(localStorage.getItem("dulieutrangchu"));

function hienthichitiet(data) {
    if (!data) {
        document.body.innerHTML = "<p>Không tìm thấy dữ liệu địa điểm</p>";
        return;
    }

    let chitietcontainer = document.getElementById("noidung");
    if (!chitietcontainer) {
        chitietcontainer = document.createElement("div");
        chitietcontainer.id = "noidung";
        document.body.appendChild(chitietcontainer);
    }

    
    chitietcontainer.innerHTML = `
        <h1>${data.tendv}</h1>
        <img src="${data.anh}" alt="${data.tendv}" style="width: 100%; max-width: 500px;">
        <p>tuổi thọ: ${data.tt}</p>
        <p>${data.mota}</p>
        <h2>Thư viện hình ảnh</h2>
        <div id="image-gallery" style="display: flex; gap: 10px; flex-wrap: wrap;"></div>
    `;

    loadGallery(data);
}

function loadGallery(data) {
    const gallery = document.getElementById("image-gallery");
    gallery.innerHTML = "";

    for (let i = 1; i <= data.imgCount; i++) {
        const img = document.createElement("img");
        img.src = `${data.folder}/${data.prefix}${i}.jpg`;
        img.alt = `${data.tendv} ${i}`;
        gallery.appendChild(img);  
    }
}

window.addEventListener('DOMContentLoaded', () => {
    hienthichitiet(dulieunhan);
});