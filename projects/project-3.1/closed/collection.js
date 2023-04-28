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


		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
			`
				
				<p>${item.data.title}</p>
				<p>${item.data.address}</p>
				<p>${item.data.phone}</p>
				<p>${item.data.bus}</p>
				<p>${item.data.subway}</p>
				<p>${item.data.hours}</p>
				<p>${item.data.closingmsg}</p>
				<p>${item.data.access}</p>
				<p>${item.data.tags}</p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}


//<p>${item.data.Monday}</p><p>${item.data.Tuesday}</p><p>${item.data.Wednesday}</p><p>${item.data.Thursday}</p><p>${item.data.Friday}</p><p>${item.data.Saturday}</p><p>${item.data.Sunday}</p>
//

// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		
		renderItems(collection[0].collection) // In reverse order
	})