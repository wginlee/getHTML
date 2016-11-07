var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  var stream = "";

  https.get(requestOptions, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log('Chunk received. Length:', data.length );
      stream += data;
    });

    response.on('end', function(){
      console.log('Response stream complete.');
      console.log('Output stream:\n', stream);

    });
  });

}

getAndPrintHTML();