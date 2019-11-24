var dbconnect =require('./connectsql.js');

module.exports ={
    view:(req,res)=>{
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        // var sqql=`Select * from todolist where userId=${req.query.userId} limit 10 offset 10`; 
       // console.log(res.query.userId)
          var sqql=`Select * from todolist`;  
          con.query(sqql,(e,r)=>{
               if(err) throw(err);
                 console.log(r)
                  res.json(r);
                   })
                })

      
                
                
    
}
}