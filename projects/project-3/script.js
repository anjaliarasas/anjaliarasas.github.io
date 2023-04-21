const url = "https://www.bklynlibrary.org/locations/json";
const main = document.querySelector('main')
const aslArea = document.querySelector('.asl-area')
const alArea = document.querySelector('.al-area')
const brlArea = document.querySelector('.brl-area')
const blArea = document.querySelector('.bl-area')
const bplArea = document.querySelector('.bpl-area')
const bblArea = document.querySelector('.bbl-area')

let localData = []

const parseData = (data) => {
	// Set up variables for the counts
	let brl = 0 // These are `let` because they will change
	let asl = 0
	let bl = 0
	let al = 0
	let bpl = 0

    // Go through each item in the object
	data.forEach(library => {
        const libraryPoint = document.createElement('div')
        libraryPoint.classList.add('library-data')
       otherArea.appendChild(libraryPoint)

		if (tree.spc_common == 'Bay Ridge Library') brl = brl+1,brlArea.appendChild(libraryPoint),libraryPoint.classList.add('brl')
        else if (tree.spc_common == 'red maple') redMaple = redMaple+1,mapleArea.appendChild(treePoint), treePoint.classList.add('maple')
        else if (tree.spc_common == 'honeylocust') honeyLocust = honeyLocust+1, honeyArea.appendChild(treePoint),treePoint.classList.add('honey') 
        else if (tree.spc_common == 'willow oak') willowOak = willowOak+1, oakArea.appendChild(treePoint), treePoint.classList.add('oak')
		else if (tree.spc_common == 'London planetree') londonPlanet = londonPlanet+1, planetArea.appendChild(treePoint), treePoint.classList.add('planet')


	})

    console.log('linden: ' + americanLinden)
	console.log('maple: ' + redMaple)
	console.log('honey: ' + honeyLocust)
	console.log('willow: ' + willowOak)
	console.log('planetree: ' + londonPlanet)
}


fetch(url + '?$limit=300') // Appends a higher limit; the default is only 1000
	.then(response => response.json())
	.then(data => {
			localData = data // Save the data to our local variable, so we don’t have to re-request
			parseData(localData) // And parse it!
            // console.log(localData)
		})