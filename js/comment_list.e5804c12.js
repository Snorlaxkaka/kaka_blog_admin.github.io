(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comment_list"],{5013:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("m-top-handle",{attrs:{title:"昵称",content:"评论"}}),a("el-table",{attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{prop:"_id",label:"id"}}),a("el-table-column",{attrs:{prop:"avatarImg",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.avatarImg,alt:"",height:"50"}})]}}])}),a("el-table-column",{attrs:{prop:"nickName",label:"昵称"}}),a("el-table-column",{attrs:{prop:"byAiteName",label:"艾特谁"}}),a("el-table-column",{attrs:{prop:"content",label:"留言"}}),a("el-table-column",{attrs:{label:"操作",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("回复")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteHandle(e.row)}}},[t._v(" 删除 ")])]}}])})],1)],1)},n=[],s={data(){return{tableData:[],title:""}},created(){this.getList()},methods:{async getList(){let t=await this.$http.get("/rest/comments");this.tableData=t.data},deleteHandle(t){this.$confirm(`是否确定要删除留言: ${t.content} ?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("/rest/comments/"+t._id),await this.getList(),this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}}},r=s,o=a("0c7c"),i=Object(o["a"])(r,l,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=comment_list.e5804c12.js.map