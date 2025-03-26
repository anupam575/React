/*
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 4000);
  });
}*/
async function getData() {
  //simulate getting data from a server
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json()
  return data
  
}

async function main() {
  console.log("loading modules");
  console.log("Do something else");
  console.log("load data");
  let data = await getData();
  console.log(data);
  console.log("Process data");
  console.log("task2");
  
  
  
}
main()
