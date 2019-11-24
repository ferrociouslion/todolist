var dbconnect =require('./connectsql.js');

module.exports ={
    edit: (req,res)=>{
        var title=req.body.title;
        var description=req.body.description;
    
        
        var con=dbconnect.dbconnect();
        con.connect((err)=>{
        if(err) throw err;
        console.log('Connected!');
        var update = `update todolist set title="${title}", description="${description}" where msgId=${req.body.msgId} and userid=${req.body.userId}`;         
        console.log(update)
        con.query(update, (err, result)=> {
          if (err) throw err;  
          res.status(200).json({msg: "done"});
          })
    })
}
}