const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [0,1,2,3,4,5,6,7,8];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/Images/Gallery/TAT2021/TAT21_${i}.jpg`;
    image.alt = `TAT Picture ${i+1}`;
    image.classList.add('galleryImg');

    image.addEventListener("click", ()=>{
        //popup things
    })

    gallery.appendChild(image);
})