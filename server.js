const app=require('./app.js');

//const PORT=8000; //we should hard code the port number so we will create an .env file 


const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server running at port http://localhost:${PORT}...`);
})