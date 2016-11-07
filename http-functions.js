
var https = require('https');


module.exports = function getHTML (options, callback) {
    /* Your code here */
    var stream = "";

    https.get(options, function (response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log('Chunk received. Length:', data.length );
      stream += data;
    });

    response.on('end', function(){
      console.log('Response stream complete.');
      // console.log('Output stream:\n', stream);
      callback(stream);

    });
  });
};