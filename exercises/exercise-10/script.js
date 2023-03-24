let pics = [
  {name:"bunny", url: "../../assets/bunny.png"},
  {name:"beetle", url: "../../assets/beetle1.png"},
  {name:"eye", url: "../../assets/eye.png"},
  {name:"beetle2", url: "../../assets/beetle2.png"}
]

function generateImages(pics) {
  const img = document.createElement('img')
  img.src = pics.url
  img.classList.add('gallery-img')

  const galleryItem = document.createElement('p')
  paragraph.innerHTML = signs.name

  const galleryItem = document.createElement("div")
  galleryItem.appendChild(img)

  galleryItem.appendChild(paragraph)

  document.QuerySelector('.gallery').appendChild(galleryItem)

  signs.forEach(generateImages)
}
