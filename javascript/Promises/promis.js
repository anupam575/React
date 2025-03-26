/*
let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  resolve("success");
});  */

/*
function getData(dataId, getNextdata) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log("data", dataId);
      resolve("success");
      //reject("error")
      if (getNextdata) {
        getNextdata();//outputlet promise = getData(123);

      }
      
    }, 5000);
  });
}
  */

/*
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am promise");

    // resolve("success");
    reject("error");
  }); //promise return
};
let promise = getPromise();
promise.then((res) => {
  console.log("promise fullfilled", res); // function call
});
//reject error solve
promise.catch((err) => {
  console.log("rejected", err);
});
*/



