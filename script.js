// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Galeri içindeki her article elemanını seç
    const articles = document.querySelectorAll(".gallery article");

    // Her article elemanı için işlem yap
    articles.forEach(function(article) {
        // Resmin dosya adını al
        const imageSource = article.querySelector("img").getAttribute("src");

        // Dosya adını al, tirelerden ve dosya uzantısından arındır ve kelimeleri düzenle
        const fileName = imageSource.split("/").pop().split(".")[0]
                                    .replace(/-/g, ' ')
                                    .replace(/\b\w/g, c => c.toUpperCase());
        const caption = document.createElement("p");
        caption.textContent = "Prompt: " + fileName;

        // Paragrafı article elemanının içine ekle
        article.appendChild(caption);
    });
});
