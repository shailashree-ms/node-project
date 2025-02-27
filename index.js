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

    const fs = require('fs').promises;

    const writeToFile = async () => {
      try {
        await fs.writeFile('message.txt', 'Hello, this file was created using fs and async/await!');
        console.log('File has been written!');
      } catch (error) {
        console.error('Error writing file:', error);
      }
    };
    
    writeToFile();