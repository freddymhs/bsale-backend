import express from 'express';





const app = express();


app.listen(3000, function (err){
if (err){
  console.log((err))
}else{
  console.log('api running')
}
})
