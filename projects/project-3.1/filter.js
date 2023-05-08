const open =document.querySelector(".open")
const all =document.querySelector(".all")
const closed =document.querySelector(".closed")
const newCollection = []
// const filterClosed = (collection) => {
//     // The `ul` where the items will be inserted
// 	const collectionList = document.getElementById('collection')

// 	// Loop through each item in the collection array
// 	collection.forEach(item => {
// 		const listItem = document.createElement('li') // Make the `li`


// 		// // You can make each element inside of that…
// 		// const itemTitle = document.createElement('h2') // Make an `h2`
// 		// itemTitle.innerHTML = item.title // Put the JSON title inside
// 		// listItem.appendChild(itemTitle) // And add it to the `li`!

// 		// const itemImage = document.createElement('img') // And an image
// 		// itemImage.src = item.posterImage // Set the `src` attribute from the JSON
// 		// listItem.appendChild(itemImage) // And add that too

// 		// This can get annoying, so we can use “template literals” instead
// 		const itemDetails =
// 			`

// 				<p>${newCollection.data.title}</p>
// 				<p>${newCollection.data.address}</p>
// 				<p>${newCollection.data.phone}</p>
// 				<p>${newCollection.data.bus}</p>
// 				<p>${newCollection.data.subway}</p>
// 				<p>${newCollection.data.hours}</p>
// 				<p>${newCollection.data.closingmsg}</p>
// 				<p>${newCollection.data.access}</p>
// 				<p>${newCollection.data.tags}</p>
// 			`
// 		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

// 		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
// 	})
    
// }

// Function to render your items
const renderItems = (collection) => {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection')

	// Loop through each item in the collection array
	collection.forEach(item => {
		const listItem = document.createElement('li') // Make the `li`


		// // You can make each element inside of that…
		// const itemTitle = document.createElement('h2') // Make an `h2`
		// itemTitle.innerHTML = item.title // Put the JSON title inside
		// listItem.appendChild(itemTitle) // And add it to the `li`!

		// const itemImage = document.createElement('img') // And an image
		// itemImage.src = item.posterImage // Set the `src` attribute from the JSON
		// listItem.appendChild(itemImage) // And add that too

        if (item.data.title[0] ==="(" ){
            //check to see if closed
            listItem.dataset.closed = true
        } else {
            listItem.dataset.closed = false
        }

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				
            <p>${item.data.title}</p>
            <p>${item.data.address}</p>
            <p>${item.data.phone}</p>
            <p>${item.data.bus}</p>
            <p>${item.data.subway}</p>
            <p>${item.data.hours}</p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
    const openElements = document.querySelectorAll('[data-closed=false]')
    const closedElements = document.querySelectorAll('[data-closed=true]')

    open.addEventListener('click', () => {
        if (closedElements[0].style.display === 'block') {
            openElements.forEach(element => {
                element.style.display = 'block'
            })
            closedElements.forEach(element => {
                element.style.display = 'none'
            })
            
        }
    })

    closed.addEventListener('click', () => {
        if (openElements[0].style.display === 'block') {
            closedElements.forEach(element => {
                element.style.display = 'block'
            })
            openElements.forEach(element => {
                element.style.display = 'none'
            })
            

        }
    })

    all.addEventListener('click', () => {
        openElements.forEach(element => {
            element.style.display = 'block'
        })
        closedElements.forEach(element => {
            element.style.display = 'block'
        })
   

    })
}

//function changeColor(id)document.getElementById("closed").addEventListener("click", function() {alert("Hello World!");});
//

// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
	    // closed.addEventListener("click", filterClosed(collection[0].collection))	;
		renderItems(collection[0].collection) // In reverse order
        
	})



