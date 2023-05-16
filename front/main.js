// fetch('http://localhost:2002/data')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error('Error:', error);
//   });


// ==== axios= ==== 


  axios.get('http://localhost:2002/data')
  .then(response => {
    // Handle the response
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });


  document.querySelector("button").addEventListener('click' , ()=>{
    axios.post('http://localhost:2002/post-data',  {
      ism: names,
      yosh: age
    } ,  {
      headers : { 
        'Content-Type' : 'application/json'
      }
    })
   
    .then(response => {
      let userData = JSON.parse(response.config.data)
      document.querySelector("#posts").innerHTML =   `
      <h1> ${userData.ism} </h1>
      <h2>${userData.yosh}</h2>
      `
      console.log( typeof response.config.data);
    })
    .catch(error => {
      console.error(error.response);
    });
  })