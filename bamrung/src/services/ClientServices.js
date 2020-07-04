import Api from './Api'

export default {
    showSubject(name){
        return Api().get('/subject/view/'+name)
    },
    showTeacherClient(id){
        return Api().get('/subject/view/teachers/'+id)
    }
}   