<template>
  <div>
    <Navbar />
    <table class="table mt-5">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">กลุ่มสาระ</th>
          <th scope="col">แก้ไขเนื้อหา</th>
          <th scope="col">เพิ่ม/แก้ไข คุณครู</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in data" :key="d.gsubjectID">
          <th scope="row">#</th>
          <td>{{ d.title }}</td>
          <td>
            <router-link
              type="button"
              class="btn btn-info"
              :to="pathEdit + d.gsubjectID"
              >แก้ไข</router-link
            >
          </td>
          <td style="width:400px">
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#staticBackdrop"
              @click="EditTeacher(d.gsubjectID, d.title)"
            >
              คุณครูผู้ดูแล
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              ครูผู้ดูแล <b>กลุ่มสาระ{{ modalName }}</b>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" style="text-align:center;">ชื่อ - สกุล</th>
                  <th scope="col" style="text-align:center;">ลบ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in teacherHave" :key="n.teacherID">
                  <th scope="row" style="text-align:center;">
                    {{ n.name }} {{ n.lastname }}
                  </th>
                  <th scope="row" style="text-align:center;">
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="DeleteTeacher(n.teasubID, n.teacherID)"
                    >
                      ลบ
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
            <select
              class="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              v-model="selectTeacher"
            >
              <option selected></option>
              <option v-for="d in teachers" :key="d.teacherID" :value="d"
                >{{ d.name }} {{ d.lastname }}</option
              >
            </select>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              @click="AddTeacher(selectTeacher,gsubjectID)"
            >
              เพิ่ม
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
              @click="Clear"
            >
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../../components/navbarAdmin";
import Api from "../../../services/AdminServices";
export default {
  data() {
    return {
      gsubjectID:null,
      selectTeacher: null,
      teacherHave: [],
      teachers: [],
      modalName: "",
      data: null,
      pathEdit: "/admin/subject/edit/",
      pathTeacher: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async EditTeacher(id, name) {
      this.gsubjectID=id
      this.modalName = name;
      this.teacherHave = (await Api.ShowTeacherSubject(id)).data;
      
    },
    async DeleteTeacher(id, teacherID) {
      try {
        let data = {
          ID: id,
        };
        if (id == undefined) {
          this.teacherHave = this.teacherHave.filter((r) => {
            return r.teacherID !== teacherID;
          });
        } else {
          this.teacherHave = this.teacherHave.filter((r) => {
            return r.teasubID !== id;
          });
        }
        await Api.DeleteTeacherSubject(data);
      } catch (err) {
        console.log(err);
      }
    },
    async AddTeacher(data,gsubjectID) {
      this.teacherHave.push(data);
      let dataRes={
        teacherID:data.teacherID,
        gsubjectID:gsubjectID
      }
      console.log(dataRes)
      this.selectTeacher=[]
      await Api.AddTeacher(dataRes)
    },

    Clear() {
      this.teacherHave = [];
    },
  },
  async created() {
    this.data = (await Api.ShowAll()).data;
    this.teachers = (await Api.ShowAllTeacher()).data;
  },
};
</script>
<style scoped>
.table {
  width: 100% !important;
}
</style>
