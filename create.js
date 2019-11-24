var dbconnect =require('./connectsql.js');

module.exports ={
    create: (req,res)=>{
        var title=req.body.title;
        var description=req.body.description;
        var userId=req.body.userId;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        console.log(userId)
         var insert = `insert into todolist (title,description,userId) values ("${title}","${description}","${userId}")`;
             console.log(insert)         
            con.query(insert,(e,r)=>{
                if(e) throw e;
    
                else{ 
               return res.status(200).json(r);
                }
            })
          })
          
        }
    }
     
    