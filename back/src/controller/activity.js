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

    }
}