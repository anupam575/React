
async function fetchData() {
  const res = await fetch('https://www.givefood.org.uk/api/2/locations/search/?address=W1A1AA')
  const result = await res.json()
  console.log(result);
  
}
fetchData();
