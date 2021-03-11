import express from 'express';
import config from './config.js'




const app = express();


app.listen(process.env.PORT || config.development.server.port, function (err){
if (err){
  console.log('error en el server' + err);
}else{
 console.log("RUNNING===========")
    console.log("==================")
    console.log("ON================")
    console.log("==================")
    console.log(config.development.server.port+"==============")
   
}
})
