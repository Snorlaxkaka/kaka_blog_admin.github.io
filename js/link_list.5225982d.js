(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["link_list"],{2375:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("m-top-handle",{attrs:{title:"站名",content:"新建友链",path:"/links/create"}}),l("h1",[t._v("友链列表")]),l("el-table",{attrs:{data:t.items}},[l("el-table-column",{attrs:{prop:"_id",label:"ID",width:"250"}}),l("el-table-column",{attrs:{prop:"name",label:"名称"}}),l("el-table-column",{attrs:{prop:"site",label:"地址"}}),l("el-table-column",{attrs:{prop:"description",label:"描述"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(l){return t.$router.push("/links/edit/"+e.row._id)}}},[t._v(" 编辑 ")]),l("el-button",{attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(l){return t.remove(e.row._id)}}},[t._v(" 删除 ")])]}}])})],1)],1)},n=[],s={data(){return{items:[]}},methods:{async fetch(){const t=await this.$http.get("rest/links");this.items=t.data},remove(t){this.$confirm("是否确定要删除该友链?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("rest/links/"+t),this.$message({type:"success",message:"删除成功!"}),await this.fetch()}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}},created(){this.fetch()}},i=s,o=l("0c7c"),r=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=r.exports},ab3a:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("m-top-handle",{attrs:{title:"昵称",content:"新建用户"}},[l("el-button",{staticClass:"fr",attrs:{slot:"email",type:"primary"},on:{click:t.sendEmail},slot:"email"},[t._v(" 推送邮件 ")])],1),l("el-table",{attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),l("el-table-column",{attrs:{prop:"_id",label:"id"}}),l("el-table-column",{attrs:{prop:"avatarImg",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("img",{attrs:{src:t.row.avatarImg,alt:"",height:"50"}})]}}])}),l("el-table-column",{attrs:{prop:"nickName",label:"昵称"}}),l("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),l("el-table-column",{attrs:{prop:"url",label:"博客/github网址"}}),l("el-table-column",{attrs:{label:"操作",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.$router.push("/users/editor/"+e.row._id)}}},[t._v(" 编辑 ")]),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.deleteHandle(e.row)}}},[t._v(" 删除 ")])]}}])}),l("el-table-column",{attrs:{type:"selection",width:"55"}})],1),l("el-dialog",{attrs:{title:"上传文件",visible:t.dialogVisible,width:"320px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules}},[l("el-form-item",{attrs:{props:"sendContent",label:"发送内容"}},[l("el-input",{model:{value:t.form.sendContent,callback:function(e){t.$set(t.form,"sendContent",e)},expression:"form.sendContent"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:t.sendhandle}},[t._v("提交")])],1)],1)],1)],1)},n=[],s={data(){return{tableData:[],title:"",multipleSelection:[],emailArr:[],form:{sendContent:""},formRules:{},dialogVisible:!1}},created(){this.getList()},methods:{async getList(){let t=await this.$http.get("/rest/users");this.tableData=t.data},deleteHandle(t){this.$confirm(`是否确定要删除留言: ${t.content} ?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("/rest/users/"+t._id),await this.getList(),this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},handleSelectionChange(t){this.multipleSelection=t.map(t=>({email:t.email,subject:t.nickName}))},async sendEmail(){if(0===this.multipleSelection.length)return this.$message.warning("请选一个");this.dialogVisible=!0},sendhandle(){let t=[];this.multipleSelection.forEach(e=>{let l={recipient:e.email,subject:e.subject,html:this.form.sendContent};t.push(this.$http.post("/email",l))}),Promise.all(t).then(()=>{this.dialogVisible=!1})}}},i=s,o=l("0c7c"),r=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=link_list.5225982d.js.map