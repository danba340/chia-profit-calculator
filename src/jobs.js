const http = require('http');
const fs = require('fs');
 
const getPriceData = () => {
    http.get('http://burstcoin.cc/network/json', (resp) => {
        let data = '';
       
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
       
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            fs.writeFile("pricedata.json", data, function(err) {
                if(err) {
                    return console.log(err);
                }
            
                console.log("Price data saved to pricedata.json");
            }); 
        });
       
      }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

// Get data every minute
//setInterval(getPriceData, 60000);
getPriceData();

