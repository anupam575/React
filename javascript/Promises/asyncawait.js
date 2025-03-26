/*

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
      
    },2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
  
}
function getData(dataId){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {//getwetherdata
      console.log("data", dataId);
      resolve("success");
      
    },2000);
  });
}//getWeatherData()*/


function getData(dataId){
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
      console.log("data", dataId);
      resolve("success");
      
    },2000);
  })
}
async function getAllData() {
  console.log("getting data1 ..");
  
  await getData(1);
  console.log("getting data1 ..");

  await getData(1);
  console.log("getting data1 ..");

  await getData(1);
  console.log("getting data1 ..");

  await getData(1);
  console.log("getting data1 ..");


  
}
