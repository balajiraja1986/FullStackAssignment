// Function to fetch breweries by city
async function fetchBreweriesByCity(city) {
    try {
      const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching breweries: ${response.status} - ${response.statusText}`);
      }
      
      const breweries = await response.json();
      return breweries;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      throw error;
    }
  }
  
  // Function to render breweries
  function renderBreweries(breweries) {
    const breweryList = document.getElementById('breweryList');
    breweryList.innerHTML = '';
  
    breweries.forEach((brewery) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h2>${brewery.name}</h2>
        <p><strong>Type:</strong> ${brewery.brewery_type}</p>
        <p><strong>Address:</strong> ${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}</p>
        <p><strong>Website:</strong> <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
        <p><strong>Phone:</strong> ${brewery.phone}</p>
      `;
      breweryList.appendChild(li);
    });
  }
  
  // Event listener for search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', async () => {
    const city = searchInput.value;
    try {
      const breweries = await fetchBreweriesByCity(city);
      renderBreweries(breweries);
    } catch (error) {
      console.error(`Failed to fetch breweries: ${error.message}`);
    }
  });
  