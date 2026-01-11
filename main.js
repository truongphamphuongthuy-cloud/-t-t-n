const dsdv =[
    {
        id: "meo",
        tendv:"con mèo", 
        anh:"./images/danhsachconmeo/conmeo-1.jpg",
        tt:"12-15",
        folder:'./images/danhsachconmeo',
        imgCount: 6,
        mota:"mèo thích ăn cá",
        prefix: "conmeo-"
        },
    {
        id: "tho",
        tendv:"con thỏ", 
        anh:"./images/danhsachcontho/contho-1.jpg",
        tt:"7-10",
        folder:'./images/danhsachcontho',
        imgCount: 6,
        mota:"thỏ rất nhanh nhẹn",
        prefix: "contho-"

    },
    { 
        id: "canhcut",
        tendv:"con chim cánh cụt", 
        anh:"./images/danhsachconchimcanhcut/canhcut-1.jpg",
        tt:"15-20",
        folder:'./images/danhsachconchimcanhcut',
        imgCount: 6,
        mota:"cánh cụt có bộ lông mềm và ấm",
        prefix: "canhcut-"

    }
];

const hienthidsdv = document.getElementById("danhsach");

dsdv.forEach(location => {
    const theten = document.createElement("div");
    theten.classList.add("ten-card");

    theten.innerHTML = `
        <img src="${location.anh}" alt="${location.tendv}">
        <div class ="ten">${location.tendv}</div>
        <div class="tt">tuổi thọ ${location.tt}</div>
    `;

    theten.addEventListener("click", () => {
        localStorage.setItem("dulieutrangchu", JSON.stringify(location));
        window.location.href = "chitiet.html";
    });

    hienthidsdv.appendChild(theten);
});







