// 1. Tạo một danh sách 5 con vật bằng JavaScript
const animals = [
    {
        name: "Chó",
        image: "danhsachcho/cho.jpeg", 
        tags: ["chó", "thú cưng", "trung thành"], // Key/value thích hợp để gọi ảnh
        gallery: [
            "danhsachcho/cho-1.jpg",
            "danhsachcho/cho-2.jpg",
            "danhsachcho/cho-3.jpg",
            "danhsachcho/cho-4.jpg",
            "danhsachcho/cho-5.jpg",
            "danhsachcho/cho-6.jpg",
            "danhsachcho/cho-7.jpg"
        ]
    },
    {
        name: "Mèo",
        image: "danhsachmeo/meo.jpg",
        tags: ["mèo", "dễ thương", "độc lập"],
        gallery: [
            "danhsachmeo/meo-1.jpg",
            "danhsachmeo/meo-2.jpg",
            "danhsachmeo/meo-3.jpg",
            "danhsachmeo/meo-4.jpg",
            "danhsachmeo/meo-5.jpg",
            "danhsachmeo/meo-6.jpg",
            "danhsachmeo/meo-7.jpg"
        ]
    },
    {
        name: "Thỏ",
        image: "danhsachtho/tho.jpg",
        tags: ["thỏ", "nhanh nhẹn", "dễ thương"],
        gallery: [
            "danhsachtho/tho-1.jpg",
            "danhsachtho/tho-2.jpg",
            "danhsachtho/tho-3.jpg",
            "danhsachtho/tho-4.jpg",
            "danhsachtho/tho-5.jpg",
            "danhsachtho/tho-6.jpg"
        ]
    },
    {
        name: "Chim",
        image: "danhsachchim/chim.jpg",
        tags: ["chim", "bay", "lông vũ"],
        gallery: [
            "danhsachchim/chim-1.jpg",
            "danhsachchim/chim-2.jpg",
            "danhsachchim/chim-3.jpg",
            "danhsachchim/chim-4.jpg",
            "danhsachchim/chim-5.jpg",
            "danhsachchim/chim-6.jpg",
            "danhsachchim/chim-7.jpg",
            "danhsachchim/chim-8.jpg"

        ]
    },
    {
        name: "Cá",
        image: "danhsachca/ca.png",
        tags: [],
        gallery: [
            "danhsachca/ca-1.jpg",
            "danhsachca/ca-2.jpg",
            "danhsachca/ca-3.jpg",
            "danhsachca/ca-4.jpg",
            "danhsachca/ca-5.jpg",
            "danhsachca/ca-6.jpg",
            "danhsachca/ca-7.jpg",
            "danhsachca/ca-8.jpg"
        
        ]
    }
];


const danhSachDiv = document.getElementById('danhsach');
const thuVienAnhDiv = document.getElementById('thuvienanh');


function displayGallery(animal) {
    
    thuVienAnhDiv.innerHTML = ''; 

    
    if (animal.gallery && animal.gallery.length > 0) {
        
        const galleryTitle = document.createElement('h3');
        galleryTitle.textContent = `Thư viện ảnh của ${animal.name}`;
        thuVienAnhDiv.appendChild(galleryTitle);

        animal.gallery.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = animal.name;
            imgElement.classList.add('gallery-image'); 
            thuVienAnhDiv.appendChild(imgElement);
        });
    } else {
        // Thông báo nếu không có ảnh
        const noImage = document.createElement('p');
        noImage.textContent = `Không có ảnh nào cho ${animal.name}.`;
        thuVienAnhDiv.appendChild(noImage);
    }
}

// Hàm duyệt danh sách con vật và hiển thị lên HTML
function renderAnimalList() {
    // Duyệt qua từng con vật trong mảng animals
    animals.forEach(animal => {
        // Hiển thị mỗi con vật thành 1 thẻ riêng (sử dụng div)
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card'); // Thêm class để CSS

        // Nội dung của thẻ
        animalCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}" class="animal-image">
            <h3>${animal.name}</h3>
            <p>Tags: ${animal.tags.join(', ')}</p>
        `;

        // Thêm sự kiện click
        // Khi click vào 1 thẻ con vật, sẽ hiển thị thư viện ảnh
        animalCard.addEventListener('click', () => {
            // Xóa class 'selected' của tất cả các thẻ trước đó
            document.querySelectorAll('.animal-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Thêm class 'selected' cho thẻ đang được click
            animalCard.classList.add('selected');

            displayGallery(animal); // Gọi hàm hiển thị thư viện ảnh
        });

        // Thêm thẻ con vật vào div 'danhsach'
        danhSachDiv.appendChild(animalCard);
    });
}

// Khởi chạy hàm hiển thị danh sách
renderAnimalList();

// Mẹo: Sau khi tải trang, tự động click vào con vật đầu tiên để hiển thị gallery
document.addEventListener('DOMContentLoaded', () => {
    const firstAnimalCard = document.querySelector('.animal-card');
    if (firstAnimalCard) {
        firstAnimalCard.click();
    }
});