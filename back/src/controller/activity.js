const db = require("../config/config");

module.exports={
    createActivity(req,res){
        let {title,thumbnail,content,pictures,status}=req.body
        console.log(req.body)
        db.run(`INSERT INTO activity(title,thumbnail,content,pictures,status) VALUES('${title}','${thumbnail}','${content}','${pictures}','${status}')`, function(err) {
            if (err) {
              return console.log(err.message);
            }
            res.send('บันทึกกิจกรรมสำเร็จ')
          });

    },
    showAll(req,res){
      db.all('SELECT * from activity WHERE status="true"',function(err,result){
        if(err){
          return console.log(err.message)
        }
        res.send(result)
      })
    },
    editActivity(req,res){
      if(req.body.set){
        db.run(`UPDATE activity SET status = '${req.body.status}' WHERE activityID = ${req.body.activityID}`,
        function(err){
          if(err){
            return console.log(err.message)
          }
        })
      }else{
        console.log(req.body)
        let {activityID,title,thumbnail,content,pictures,status} = req.body
        db.run(`UPDATE activity SET title = '${title}',thumbnail='${thumbnail}',
        content='${content}',pictures='${pictures}',status='${status}' WHERE activityID = ${activityID}`,
        function(err){
          if(err){
            return console.log(err.message)
          }
          res.send('แก้ไขสำเร็จ')
        })
      }
      
    },
    show(req,res){
      let id =req.params.id
      db.get(`SELECT * from activity WHERE activityID = ${id}`,function(err,result){
        if(err){
          return console.log(err.message)
        }
        res.send(result)
      })
    }
}