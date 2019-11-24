var dbconnect =require('./connectsql.js');

module.exports ={
    delet:(req,res)=>{
        var msgId = req.query.msgId;
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
         var sqql=`DELETE from todolist where msgId=${msgId} and userId=${req.query.userId}`;  
         
         con.query(sqql,(e,r)=>{
               if(e) throw(e);
                 console.log(r)
                  res.json(r);
                   })
                })
            }
        }