const imageList = [
    "https://images.unsplash.com/photo-1719937050586-a37f7d9ce45b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const mainImage = document.querySelector(
    ".choose-item:first-child .choose-img"
);
const sideImage = document.querySelector(".choose-item:last-child .choose-img");
const prevBtn = document.getElementById("choose-prew-btn");
const nextBtn = document.getElementById("choose-next-btn");

let currentIndex = 0;

function updateImages() {
    // Міняємо зображення місцями
    let tempSrc = mainImage.src;
    let tempHeight = mainImage.style.height;

    mainImage.src = sideImage.src;
    mainImage.style.height = sideImage.style.height;

    sideImage.src = tempSrc;
    sideImage.style.height = tempHeight;
}

// Додаємо обробники подій для кнопок
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    updateImages();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageList.length;
    updateImages();
});
