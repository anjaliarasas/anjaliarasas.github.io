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
				<p>${item.collection}</p>
				<p>${item.data}</p>
				<p>${item.title}</p>
				<p>${item.address}</p>
				<p>${item.phone}</p>
				<p>${item.position}</p>
				<p>${item.bus}</p>
				<p>${item.subway}</p>
				<p>${item.Monday}</p>
				<p>${item.Tuesday}</p>
				<p>${item.Wednesday}</p>
				<p>${item.Thursday}</p>
				<p>${item.Friday}</p>
				<p>${item.Saturday}</p>
				<p>${item.Sunday}</p>
				<p>${item.hours}</p>
				<p>${item.closingmsg}</p>
				<p>${item.access}</p>
				<p>${item.tags}</p>
				<p>${item.path}</p>
				<p>${item.branchid}</p>
				<p>${item.pickuploc}</p>
				<p>${item.branchlist}</p>
				<p>${item.region}</p>
			`
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})