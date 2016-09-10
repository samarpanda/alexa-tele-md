var ngrok = require('ngrok');
ngrok.connect(9090, function (err, url) {
  if(!err){
    console.log(url);
  }else{
    console.log(err);
  }
});