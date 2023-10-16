// Function to fetch data from the Open Brewery API
async function fetchBreweries() {
  try {
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const breweries = await response.json();
    return breweries;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function to display breweries based on search input
function displayBreweries(breweries) {
  const searchByName = document.getElementById('searchByName');
  const searchByCity = document.getElementById('searchByCity');
  const searchByType = document.getElementById('searchByType');
  const breweryList = document.getElementById('breweryList');

  const updateList = () => {
    const nameFilter = searchByName.value.toLowerCase();
    const cityFilter = searchByCity.value.toLowerCase();
    const typeFilter = searchByType.value.toLowerCase();

    breweryList.innerHTML = '';

    breweries.forEach(brewery => {
      const nameMatches = brewery.name.toLowerCase().includes(nameFilter);
      const cityMatches = brewery.city.toLowerCase().includes(cityFilter);
      const typeMatches = brewery.brewery_type.toLowerCase().includes(typeFilter);

      if (nameMatches && cityMatches && typeMatches) {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>Name:</strong> ${brewery.name}<br>
          <strong>Type:</strong> ${brewery.brewery_type}<br>
          <strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}<br>
          <strong>Website:</strong> ${brewery.website_url || 'Not available'}<br>
          <strong>Phone No:</strong> ${brewery.phone || 'Not available'}<br>
          <hr>
        `;
        breweryList.appendChild(li);
      }
    });
  };

  // Add event listeners for all three input fields
  searchByName.addEventListener('input', updateList);
  searchByCity.addEventListener('input', updateList);
  searchByType.addEventListener('input', updateList);

  // Initial display of breweries
  updateList();
}

// Main function to initialize the page
async function init() {
  const breweries = await fetchBreweries();
  displayBreweries(breweries);
}

init();
