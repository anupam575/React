/*

function asyncFunc1() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
      
    }, 4000)
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
      
    }, 4000)
  });
}
console.log("fetching dat1..");
asyncFunc1().then((res)=> {
  console.log("fetching data2...");
  asyncFunc2().then((res) => {

  

  });


  
});
*/
function getData(dataId) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log("data", dataId);
      resolve("success")
    },3000)
  });
}

//promise chaining
console.log("getting data 1");

getData(1)
.then((res)=> {
  console.log("getting data 1");

  return getData(2);
})
.then((res) => {
  console.log("getting data 1");


  return getData(3);
})
.then((res)=> {
  console.log("getting data 1");

  return getData(4);
  
})
.then((res)=>{
  console.log("getting data 1");

  console.log(res);
  
});