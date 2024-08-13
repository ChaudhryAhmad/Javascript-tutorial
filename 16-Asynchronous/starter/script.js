'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry=function(data,className=''){
  const html=`  
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity = 1;
}

const renderError=function(err){
  countriesContainer.insertAdjacentText('beforeend',err);
  countriesContainer.style.opacity=1;
}

// const getJSON=function(url,errorMessage='Something went wrong'){
//  return fetch(url).then(response => {
//     if(!response.ok)
//      throw new Error(`${errorMessage} (${response.status})`);

//    return response.json();
//    });
// };
// -------------------------------Our first AJAX call--------------------------------------------
// const getCountry=function(name){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${name}`); // Updated URL
// request.send();
// // // Register a callback on the request object for the load event
// request.addEventListener('load', function () {
//     if (request.status >= 200 && request.status < 300) { // Check if the request was successful
// // The property responseText is gonna be set only after the data arrived
// // Now we need to convert it into javascript object because what we have here is simply a json
//         const [data] = JSON.parse(this.responseText); // Destructure the first item from the array
//         console.log(data); // Log the country data to the console

//         const html=`  
//         <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity = 1;

//     } else {
//         console.error('Error:', request.statusText); // Log an error if the request was not successful
//     }
// });

// request.addEventListener('error', function() {
//     console.error('Network Error'); // Handle network errors
// });
// }

// getCountry('portugal');
// getCountry('turkiye');

// ---------------------------------Welcome to callback hell-------------------------------------

// const getCountryAndNeighbour=function(name){
//   // AJAX call entry
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${name}`); 
// request.send();

// request.addEventListener('load', function () {
//     if (request.status >= 200 && request.status < 300) { 

//         const [data] = JSON.parse(this.responseText); 
//         console.log(data); 
//   // render country
//         renderCountry(data);

//   // get neighbouring country
//         const [neighbour]=data.borders;
//         if(!neighbour)return;

//   // AJAX CALL Country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`); 
//         request2.send();

//         request2.addEventListener('load',function(){
//           // We will not destructure because response of this API is not an array
//           const data2 = JSON.parse(this.responseText); 
//           console.log(data2); 
//     // render country
//           renderCountry(data2,'neighbour');
//         })

//     } else {
//         console.error('Error:', request.statusText);
//     }
// });

// request.addEventListener('error', function() {
//     console.error('Network Error');
// });
// }

// getCountryAndNeighbour('bharat');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${name}`); 
// request.send();


// -----------------------------------Consuming Promises-----------------------------------------

// const request=fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountry=function(name){
//   fetch(`https://restcountries.com/v2/name/${name}`)
//   .then(function(response){
//   console.log(response);
//   return response.json();
//   }).then(function(data){
//     console.log(data);
//     renderCountry(data[0]);
//   })
// }

//////////////////////////////////////////////////////////////////////////
// const getCountry=function(name){
//   fetch(`https://restcountries.com/v2/name/${name}`)
//   .then(response =>response.json())
// // Agle then k parameter mein vo value hoti hai wo fulfilled value hoti hai promise ki
//   .then(data=>{
//     renderCountry(data[0]);
//     const neighbour = data[0].borders ? data[0].borders[0] : null;

//     if(!neighbour)return;

//     return fetch(`https://restcountries.com/v2/name/${neighbour}`)
// })
//     .then(response=>response.json())
//     .then(data=> renderCountry(data,'neighbour'));
// };
// getCountry('portugal');


////////////////////////////////////////////////////////
// const getCountry = function(name) {
//   fetch(`https://restcountries.com/v2/name/${name}`)
//     .then(response => {
//      if (!response) return;
//      if(!response.ok)
//       throw new Error(`Country not found (${response.status})`);

//     return response.json();

//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders ? data[0].borders[0] : null;

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response) return;
//       if (!response.ok) throw new Error(`Neighbour country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`HI ${err}`);
//      renderError(`Something went wrong ${err.message} Try Again`)
//     })
//     .finally(()=>{
//       countriesContainer.style.opacity = 1;
//     })
// }

// /////////////////////////////////////////////////////////////////////////////

// const getCountry = function(name) {
//   getJSON(`https://restcountries.com/v2/name/${name}`,'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders ? data[0].borders[0] : null;

//       if (!neighbour) throw new Error('Neighbour not found');

//       return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'Neighbour country not found');
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`HI ${err}`);
//      renderError(`Something went wrong ${err.message} Try Again`)
//     })
//     .finally(()=>{
//       countriesContainer.style.opacity = 1;
//     })
// }

// btn.addEventListener('click',function(){
//   getCountry('australia');
// })

// -------------------------------Coding Challenge 1---------------------------------------------

// const whereAmI=function(lat,long){
// const request=fetch(`https://geocode.xyz/52.508,13.381?geoit=json`);
// console.log(request);

// request.then(function(response){
//   return(response.json())
// })
// .then(function(data){
//   console.log(data);
// });
// }
// whereAmI(19.037, 72.873);


// --------------------------Coding Challenge 1--------------------------------------------------

// const whereAmI=function(lat,lng){
//  const request=fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//  request.then(function(response){
//   if(!response.ok)throw new Error(`Problem with Geocoding ${response.status}`)
//  return response.json()
// })
//  .then(function(data){
//   console.log(`You are in ${data.city}, ${data.country}`)
//   console.log(data);
//   return fetch(`https://restcountries.com/v2/name/${data.country}`)
// })
// .then(function(response){
//   if(!response.ok){
//     throw new Error(`Country not found ${response.status}`)
//   }
//   return response.json();
// })
// .then(function(data){
//   renderCountry(data[0]);
//   const neighbour = data[0].borders ? data[0].borders[0] : null;
//   if (!neighbour) throw new Error('Neighbour not found');
// })
// .catch(function(err){
//   console.log(`Error : ${err.message} ${err.status}`);
// })
// }

//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);

// -------------------------------Building a promise---------------------------------------------

// const lotteryPromise=new Promise(function(resolve,reject){
//   console.log("Lottery draw is happening");

//   setTimeout(function(){
//     if(Math.random()>=0.5){
//       resolve('You win money')
//     }
//     else{
//       reject(new Error('You lost your money'))
//     }
//   },1000)
// });

// lotteryPromise.then(res=>console.log(res))
// .catch(err=>console.error(err));

// Promisifying setTimeout
// const wait=function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve,seconds*1000)
//   })
// }

// wait(1).then(function(){
//   console.log("-1 second passed");
// return wait(1);
// })
// .then(()=>console.log("1 second passed"))
// .then(()=>console.log("2 second passed"))
// .then(()=>console.log("3 second passed"))
// .then(()=>console.log("4 second passed"))

// setTimeout(()=>{
//   console.log("1 seocnd passed");
//   setTimeout(()=>{
//     console.log("2 seocnd passed");
//     setTimeout(()=>{
//       console.log("3 second passed");
//       setTimeout(()=>{
//         console.log("4 second passed");
//       },1000)
//     },1000)
//   },1000)
// },1000)

// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject('Problem').catch(x=>console.error(x))

// ---------------------------Promisifying the Geoloacation API----------------------------------

// Using callback
// navigator.geolocation.getCurrentPosition(position=>console.log(position),
// err=>console.error(err));

// Now promisfying it making it to promise based instead of callback based
// const getPosition=function(){
//   return new Promise(function(resolve,reject){
//     // navigator.geolocation.getCurrentPosition(
//     //   (position)=>resolve(position),
//     //   (error)=>reject(error)
//     // )

//     navigator.geolocation.getCurrentPosition(resolve,reject);
//   })
// }

// getPosition().then((pos)=>console.log(pos))

// const whereAmI=function(){
//  getPosition().then(pos=>{
//   const {latitude:lat,longitude:lng}=pos.coords;
//  return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//  })
//  .then(function(response){
//   if(!response.ok)throw new Error(`Problem with Geocoding ${response.status}`)
//  return response.json()
// })
//  .then(function(data){
//   console.log(`You are in ${data.city}, ${data.country}`)
//   console.log(data);
//   return fetch(`https://restcountries.com/v2/name/${data.country}`)
// })
// .then(function(response){
//   if(!response.ok){
//     throw new Error(`Country not found ${response.status}`)
//   }
//   return response.json();
// })
// .then(function(data){
//   renderCountry(data[0]);
// })
// .catch(function(err){
//   console.log(`Error : ${err.message} ${err.status}`);
// })
// }

// btn.addEventListener('click',whereAmI);

// -----------------------------Coding Challenge 2-----------------------------------------------

// const imgClass=document.querySelector('.images');

// const wait=function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve,seconds*1000)
//   })
// }

// const createImage=function(imgPath){
//   return new Promise(function(resolve,reject){
//     const img=document.createElement('img');
//     img.src=imgPath;
//     img.addEventListener('load',function(){
//       imgClass.append(img);
//       resolve(img);
//     })

//     img.addEventListener('error',function(){
//       reject(new Error('Image Not loaded'));
//     });

//   });
// };

// let currentImg;
// createImage('img/img-1.jpg').then((img)=>{
//   console.log("Image 1 Fully Loaded");
//   currentImg=img;
//   return wait(2);
// })
// .then(()=>{
//   currentImg.style.display='none';
//   return createImage('img/img-2.jpg')
// })
// .then((img)=>{
//   currentImg=img;
//   console.log("Image 2 loaded");
//   return wait(2);
// })
// .then(()=>{
//   currentImg.style.display='none';
//   return createImage('img/img-3.jpg')
// })
// .then((img)=>{
//   currentImg=img;
//   console.log("Image 3 loaded");
//   return wait(2);
// })
// .catch(err=>console.error(err));

// -------------------------Consuming Promises with async wait-----------------------------------

// const getPosition=function(){
//   return new Promise(function(resolve,reject){
//     navigator.geolocation.getCurrentPosition(resolve,reject);
//   })
// }

// const whereAmI=async function(){
// // GeoLocation
//   try{
//   const pos=await getPosition();
//   const {latitude:lat,longitude:lng}=pos.coords;
// // Reverse GeoCoding 
//   const resGeo=await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   if(!resGeo.ok) throw new Error('Problem getting location data')
//   const dataGeo=await resGeo.json();
//   console.log(dataGeo);

// // // Country Data  
//   const res=await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
//   if(!res.ok) throw new Error('Problem getting Country Data')
//   const data=await res.json();
//   renderCountry(data[0]);

//   return `You are in ${dataGeo.city}, ${dataGeo.country}`;
// }
// catch(err){
//   console.error(err+'chahmad');
//   renderError(`Something Went Wrong ${err.message}`)
// // Reject Promise returned from async function
//   throw err;
// }
// }
// Country Data
  // fetch(`https://restcountries.com/v2/name/${country}`)
       // .then((res)=>console.log(res)); These are exactly the same
 
// console.log('1: Finished getting Location');
// whereAmI()
// .then((city)=>console.log(`2: ${city}`))
// .catch((err)=>console.error(`2 : ${err}`))
// .finally(()=>console.log("3: Finished Getting Location"));

// Now converting it into async await



// (async function(){
//   try{
//     const city=await whereAmI();
//     console.log(`2: ${city}`);
//   }
//   catch(err){
//     console.error(`2 : ${err.message}`);
//   }
//   console.log("3: Finished Getting Location");
// })();


// ------------------Error Handling With Try-------Catch-----------------------------------------

// try{
//   let y=1;
//   const x=2;
//   x=3;
// }
// catch(err){
//   alert(err.message)
// }

// --------------------------Running Promises in Parallel----------------------------------------

// const get3Countries=async function(c1,c2,c3){
//   try{
//     // const [data1]=await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2]=await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3]=await getJSON(`https://restcountries.com/v2/name/${c3}`);
//     // console.log([data1.capital,data2.capital,data3.capital]);

//     const data=await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`)
//     ]);
//     console.log(data);
//     console.log(data.map((d)=>d[0].capital));
//   }
//   catch(err){
//     console.error(err);
//   }
// }

// get3Countries('pakistan','bharat','china');



// ---------------Other Promise Combinators Race, AllSettled and Any-----------------------------

// Promise.race
const getJSON = function(url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
};
// (async function() {
//   try {
//     const res = await Promise.race([
//       getJSON(`https://restcountries.com/v2/name/italy`),
//       getJSON(`https://restcountries.com/v2/name/romania`),
//       getJSON(`https://restcountries.com/v2/name/pakistan`)
//     ]);
//     console.log(res); // Check the response structure
//     // Check if the response is an array before accessing res[0]
//     if (Array.isArray(res) && res.length > 0) {
//       console.log(res[0]);
//     } else {
//       console.log('The response is not an array or it is empty', res);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// })();

const timeout=function(sec){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error('Request took too long'))
    },sec*1000);
  });
};

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/italy`),
//   getJSON(`https://restcountries.com/v2/name/portugal`)
// ])
// .then(res=>console.log(res[0]))
// .catch(err=>console.log(err));

//----------------- Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success Ahmad'),
//   Promise.reject('Failure'),
//   Promise.resolve('Another Success')
// ])
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// // Diiference between Promise.allSettled and Promise.all
// Promise.all([
//   Promise.resolve('Success Ahmad'),
//   Promise.reject('Failure'),
//   Promise.resolve('Another Success')
// ])
// .then(res=>console.log(res))
// .catch(err=>console.log(err));

// -----------------Promise.any

Promise.any([
  Promise.reject('Failure'),
  Promise.resolve('Success Ahmad'),
  Promise.resolve('Another Success')
])
.then(res=>console.log(res))
.catch(err=>console.log(err));