let p = fetch("https://api.thecatapi.com/v1/images/search")
p.then((response)=> {
  console.log(response.status);
  console.log(response.ok);
  return response.json()
  

  
}).then((value2)=> {
  console.log(value2);
  
})