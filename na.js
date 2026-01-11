//VÕ LÊ NA - 24NT01025
const dsdv = [
    {
        ten: "Mèo",
        nguon: "./images/danhsachconmeo/conmeo-1.jpg",
        folder: './images/danhsachconmeo',
        imgCount: 6,
        prefix: 'conmeo-',
    },
    {
        ten: "Chó",
        nguon: "./images/danhsachconcho/concho-1.jpg",
        folder: './images/danhsachconcho',
        imgCount: 6,
        prefix: 'concho-',
    },
    {
        ten: "Chim cánh cụt",
        nguon: "./images/danhsachconchimcanhcut/canhcut-1.jpg",
        folder: './images/danhsachconchimcanhcut',
        imgCount: 6,
        prefix: 'canhcut-',
    },
    {
        ten: "Cá",
        nguon: "./images/danhsachconca/conca-1.jpg",
        folder: './images/danhsachconca',
        imgCount: 6,
        prefix: 'conca-',
    },
    {
        ten: "Thỏ",
        nguon: "./images/danhsachcontho/contho-1.jpg",
        folder: './images/danhsachcontho',
        imgCount: 6,
        prefix: 'contho-',
    },
   
];

const hienthiDSdv = document.getElementById("dvList");
const galleryContainer = document.getElementById("gallery");

dsdv.forEach(dv => {
    const thedv = document.createElement("div");
    thedv.classList.add("dv-card");

    // Nội dung trong thẻ
    thedv.innerHTML = `
        <img src="${dv.nguon}" alt="${dv.ten}">
        <div class="dv-name">${dv.ten}</div>
    `;

    thedv.addEventListener("click", () => {
        loadGallery(dv);
    });

    function loadGallery(dv) {
        galleryContainer.innerHTML = "";

        for (let i = 1; i <= dv.imgCount; i++) {
            const img = document.createElement("img");
            img.src = `${dv.folder}/${dv.prefix}${i}.jpg`;
            img.alt = `${dv.ten} ${i}`;
            galleryContainer.appendChild(img);
        }
    }

    hienthiDSdv.appendChild(thedv);
});