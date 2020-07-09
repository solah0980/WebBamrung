import Api from './Api'

export default {
    //Api Login 
    Login(data){
        return Api().post('/admin/login',data)
    },

   //Api Upload Delete Photo
    upload(formdata){
       return Api().post('/upload',formdata)
    },
    delete(name){
        return Api().post('/delete',name)
     },

     /*----------------------------------------------------*/

    //Api Manage Subject and Manage Teacher Subject
    ShowAll(){
        return Api().get('/admin/subject')
    },
    ShowSubject(id){
        return Api().get('/admin/subject/edit/'+ id)
    },
    EditSubject(id,data){
        return Api().put('/admin/subject/edit/'+ id,data)
    },
    ShowTeacherSubject(id){
        return Api().get('/admin/subject/teacher/'+ id)
    },
    DeleteTeacherSubject(data){
        return Api().put('/admin/subject/teacher/delete',data)
    },
    AddTeacher(data){
        return Api().post('/admin/subject/teacher/add',data)
    },
    /*----------------------------------------------------*/

    //API Manage Teacher
    ShowAllTeacher(){
        return Api().get('/admin/teacher')
    },
    ShowTeacher(id){
        return Api().get('/admin/teacher/edit/'+ id)
    },
    EditTeacher(id,data){
        return Api().put('/admin/teacher/edit/'+ id,data)
    },
    CreateTeacher(data){
        return Api().post('/admin/teacher/create',data)
    },
    DeleteTeacher(data){
        return Api().delete('/admin/techer/delete/'+data)
    },
 /*----------------------------------------------------*/

    //API Manage Activity
    CreateActivity(data){
        return Api().post('/admin/activity/create',data)
    },
    ShowActivityAll(data){
        return Api().get('/admin/activitys/'+data.name)
    },
    EditActivity(data){
        return Api().put('/admin/activity/edit/'+data.activityID,data)
    },
    ShowActivity(id){
        return Api().get('/admin/activity/show/'+id)
    },
     /*----------------------------------------------------*/

     //API Mange News
     CreateNews(data){
         return Api().post('/admin/news/create',data)
     },
     ShowNews(data){
        return Api().get('/admin/news/show/'+data)
     },
     EditNews(data){
        return Api().put('/admin/news/edit/'+data.newsID,data)
     },
     ShowAllNews(data){
         return Api().get('/admin/news/'+data.name)
     }
}