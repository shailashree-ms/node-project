const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is a message from the promise!");
    }, 1000);
  });
  
  myPromise
    .then((message) => {
      console.log(message); // This will display the message after 1 second
    })
    .catch((error) => {
      console.error(error);
    });