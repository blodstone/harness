(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)r=o[m],n[r]&&d.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0d64":function(t,e,s){},"14f2":function(t,e,s){"use strict";var a=s("df01"),n=s.n(a);n.a},"194f":function(t,e,s){"use strict";var a=s("af5a"),n=s.n(a);n.a},"1cb3":function(t,e,s){"use strict";var a=s("d1f8"),n=s.n(a);n.a},"53ad":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=s("8a03"),i=s.n(n),r=(s("5abe"),s("a23f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"clearfix"},[s("router-view")],1)}),o=[],l=(s("5c0b"),s("2877")),c={},u=Object(l["a"])(c,r,o,!1,null,null,null),m=u.exports,d=s("8c4f"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero is-primary is-large"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("\n        Welcome to HArnESS!\n      ")]),s("h2",{staticClass:"subtitle"},[t._v("\n        An open source manual evaluation software for abstractive summarization!\n      ")])])])])}],f={name:"Home"},v=f,_=(s("9f7d"),Object(l["a"])(v,h,p,!1,null,"c93b39a8",null)),g=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"container is-fluid"},[t._m(0),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v("\n                Projects\n              ")]),s("div",{staticClass:"navbar-dropdown"},[s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"new"}}},[t._v("\n                  New...\n                ")]),s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"manage"}}},[t._v("\n                  Manage...\n                ")])],1)])])])])]),s("router-view")],1)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",attrs:{href:"/"}},[t._v("\n          Summ-Eval\n        ")])])}],w={name:"admin"},C=w,j=Object(l["a"])(C,b,y,!1,null,null,null),k=j.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-primary is-fullheight login"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-4 is-offset-4"},[s("h3",{staticClass:"title has-text-white"},[t._v("Login")]),s("p",{staticClass:"subtitle"},[t._v("Please login to proceed to admin page.")]),s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.email,expression:"input.email"}],staticClass:"input is-large",attrs:{type:"email",placeholder:"Your Email",autofocus:""},domProps:{value:t.input.email},on:{input:function(e){e.target.composing||t.$set(t.input,"email",e.target.value)}}})])]),s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],staticClass:"input is-large",attrs:{type:"password",placeholder:"Your Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}})])]),s("button",{staticClass:"button is-block is-info is-large is-fullwidth",attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")])])])])])])},T=[],$=(s("28a5"),new a["default"]);function P(t){if(!t||t.split(".").length<3)return!1;var e=JSON.parse(atob(t.split(".")[1])),s=new Date(1e3*e.exp),a=new Date;return console.log(s),a<s}var E={name:"Login",data:function(){return{input:{email:"",password:""}}},methods:{login:function(){var t=this;""!==this.input.email&&""!==this.input.password&&this.$store.dispatch("login",{email:this.input.email,password:this.input.password}).then(function(){return t.$router.push({name:"admin"})}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;$.$on("failedAuthentication",function(){t.$toast.open({message:"Email or password does not exist!",type:"is-danger"})})}},S=E,A=(s("1cb3"),Object(l["a"])(S,x,T,!1,null,"56f80762",null)),M=A.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("div",[s("b-table",{attrs:{data:t.fluency_projects,striped:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{field:"no",label:"No.",width:"40"}},[t._v("\n                    "+t._s(e.row.no)+"\n                ")]),s("b-table-column",{attrs:{field:"id",label:"ID",width:"40"}},[t._v("\n                    "+t._s(e.row.project.id)+"\n                ")]),s("b-table-column",{attrs:{field:"name",label:"Name",width:"100"}},[s("a",{attrs:{href:"/#/admin/evaluation_status/"+e.row.id}},[t._v("\n                    "+t._s(e.row.project.name)+"\n                    ")])]),s("b-table-column",{attrs:{field:"progress",label:"Progress"}},[s("div",{staticClass:"columns level"},[s("div",{staticClass:"column is-2 level-item"},[t._v("\n                            "+t._s(e.row.progress.current)+"/"+t._s(e.row.progress.total)+"\n                        ")])])]),s("b-table-column",{attrs:{label:"Link for Participants"}},[s("b-field",[s("b-input",{attrs:{"icon-pack":"fas",icon:"link",value:e.row.link,readonly:"",size:"is-small"}})],1)],1),s("b-table-column",{attrs:{field:"id",label:"Close Project"}},[s("a",{staticClass:"button is-danger is-outlined is-small",on:{click:function(s){return t.close_project(e.row.id)}}},[s("span",[t._v("Close")]),s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-times"})])])])]}}])},[s("template",{slot:"empty"},[s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"frown",pack:"fas",size:"is-large"}})],1),s("p",[t._v("There is no active evaluation project in database.")])])])])],2),s("hr"),t._m(1),s("b-table",{attrs:{data:t.clarity_projects,striped:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("b-table-column",{attrs:{field:"no",label:"No.",width:"40"}},[t._v("\n                    "+t._s(e.row.no)+"\n                ")]),s("b-table-column",{attrs:{field:"id",label:"ID",width:"40"}},[t._v("\n                    "+t._s(e.row.project.id)+"\n                ")]),s("b-table-column",{attrs:{field:"name",label:"Name",width:"100"}},[s("a",{attrs:{href:"/#/admin/evaluation_status/"+e.row.id}},[t._v("\n                    "+t._s(e.row.project.name)+"\n                    ")])]),s("b-table-column",{attrs:{field:"progress",label:"Progress"}},[s("div",{staticClass:"columns level"},[s("div",{staticClass:"column is-2 level-item"},[t._v("\n                            "+t._s(e.row.progress.current)+"/"+t._s(e.row.progress.total)+"\n                        ")])])]),s("b-table-column",{attrs:{label:"Link for Participants"}},[s("b-field",[s("b-input",{attrs:{"icon-pack":"fas",icon:"link",value:e.row.link,readonly:"",size:"is-small"}})],1)],1),s("b-table-column",{attrs:{field:"id",label:"Close Project"}},[s("a",{staticClass:"button is-danger is-outlined is-small",on:{click:function(s){return t.close_project(e.row.id)}}},[s("span",[t._v("Close")]),s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-times"})])])])]}}])},[s("template",{slot:"empty"},[s("section",{staticClass:"section"},[s("div",{staticClass:"content has-text-grey has-text-centered"},[s("p",[s("b-icon",{attrs:{icon:"frown",pack:"fas",size:"is-large"}})],1),s("p",[t._v("There is no active evaluation project in database.")])])])])],2)],1)])},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h3",[t._v("Fluency Projects")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h3",[t._v("Clarity Projects")])])}],z=s("e49b"),D=s("6d8d"),R=s("bc3a"),N={name:"ManageProject",components:{BTableColumn:D["a"],BTable:z["a"]},data:function(){return{fluency_projects:[],clarity_projects:[]}},methods:{get_progress:function(){var t=this;R.get("admin/fluencylist").then(function(e){t.fluency_projects=e.data}),R.get("admin/claritylist").then(function(e){t.clarity_projects=e.data})},close_project:function(t){var e=this;this.$dialog.confirm({message:"Do you want to close project ".concat(t,"?"),onConfirm:function(){R.post("project/".concat(t,"/close")).then(function(){e.$toast.open({message:"Project ".concat(t," has been closed"),type:"is-success"}),e.get_progress()}).catch(function(t){e.$toast.open({message:"".concat(t),type:"is-danger"})})}})}},beforeMount:function(){this.get_progress()}},F=N,B=(s("194f"),Object(l["a"])(F,O,L,!1,null,"1a80a97f",null)),I=B.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("div",{staticClass:"tile is-child tabs"},[s("ul",[s("li",{class:{"is-active":t.isActive.annotation},on:{click:function(e){return t.toggleActive("annotation")}}},[s("router-link",{attrs:{to:{name:"newAnnotation"}}},[t._v("Annotation")])],1),s("li",{class:{"is-active":t.isActive.evaluation},on:{click:function(e){return t.toggleActive("evaluation")}}},[s("router-link",{attrs:{to:{name:"newEvaluation"}}},[t._v("Evaluation")])],1)])])])]),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-5"},[s("div",{staticClass:"tile is-child"},[s("router-view")],1)])])])},H=[],Y={name:"NewProject",data:function(){return{isActive:{annotation:!0,evaluation:!1}}},methods:{toggleActive:function(t){"annotation"===t?(this.isActive.annotation=!0,this.isActive.evaluation=!1):"evaluation"===t&&(this.isActive.evaluation=!0,this.isActive.annotation=!1)}}},J=Y,W=Object(l["a"])(J,q,H,!1,null,"56b7ad3e",null),G=W.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"label"},[t._v("Create a New Project for Manual Evaluation")]),s("b-field",{attrs:{horizontal:"",label:"Name",message:"Please enter the project name"}},[s("b-input",{attrs:{name:"name",expanded:""},model:{value:t.project.name,callback:function(e){t.$set(t.project,"name",e)},expression:"project.name"}})],1),s("b-field",{attrs:{horizontal:"",label:"Category"}},[s("b-select",{attrs:{placeholder:"Select evaluation category",icon:"wrench","icon-pack":"fas"},model:{value:t.project.category,callback:function(e){t.$set(t.project,"category",e)},expression:"project.category"}},[s("option",{attrs:{value:"Fluency"}},[t._v("Fluency")]),s("option",{attrs:{value:"Clarity"}},[t._v("Clarity")])])],1),t.datasets?s("b-field",{attrs:{horizontal:"",label:"Dataset"}},[s("b-select",{attrs:{placeholder:"Select a dataset",icon:"database","icon-pack":"fas"},model:{value:t.project.dataset,callback:function(e){t.$set(t.project,"dataset",e)},expression:"project.dataset"}},t._l(t.datasets,function(e){return s("option",{key:e.name,domProps:{value:e}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),0)],1):t._e(),t.project.dataset?s("b-field",{attrs:{horizontal:"",label:"Summary Group"}},[s("b-select",{attrs:{multiple:"","native-size":"3",placeholder:"Select one or more group"},model:{value:t.project.summ_group_list,callback:function(e){t.$set(t.project,"summ_group_list",e)},expression:"project.summ_group_list"}},t._l(t.project.dataset.summ_groups,function(e){return s("option",{key:e.name,domProps:{value:e}},[t._v(t._s(e.name))])}),0)],1):t._e(),s("b-field",{attrs:{horizontal:"",label:"# of evaluation",message:"Number of evaluation per document"}},[s("b-input",{attrs:{name:"total_exp_results",type:"number"},model:{value:t.project.total_exp_results,callback:function(e){t.$set(t.project,"total_exp_results",t._n(e))},expression:"project.total_exp_results"}})],1),s("b-field",{attrs:{horizontal:"",label:"Expire Duration (in min)",message:"The time the task has to be finished."}},[s("b-input",{attrs:{name:"expire_duration",type:"number"},model:{value:t.project.expire_duration,callback:function(e){t.$set(t.project,"expire_duration",t._n(e))},expression:"project.expire_duration"}})],1),s("b-field",{attrs:{horizontal:"",label:"# Summaries",message:"Number of summaries to be shown at once."}},[s("b-input",{attrs:{name:"n_summaries",type:"number"},model:{value:t.project.n_summaries,callback:function(e){t.$set(t.project,"n_summaries",t._n(e))},expression:"project.n_summaries"}})],1),s("button",{staticClass:"button is-primary",on:{click:t.createProject}},[t._v("Create Project")])],1)},Q=[],U=s("bc3a"),V={name:"NewEvaluation",data:function(){return{datasets:null,project:{name:"",dataset:null,summ_group_list:null,category:null,n_summaries:5,total_exp_results:1,expire_duration:3}}},methods:{createProject:function(){var t=this;"Fluency"===this.project.category?U.put("admin/fluency",this.project).then(function(){t.$toast.open({message:"Project created!",type:"is-success"}),t.$router.push({name:"manage"})}).catch(function(){t.$toast.open({message:"Project is not created! Something is wrong",type:"is-danger"})}):"Clarity"===this.project.category&&U.put("admin/clarity",this.project).then(function(){t.$toast.open({message:"Project created!",type:"is-success"}),t.$router.push({name:"manage"})}).catch(function(){t.$toast.open({message:"Project is not created! Something is wrong",type:"is-danger"})})}},mounted:function(){var t=this;U.get("admin/dataset").then(function(e){404===e.status?t.$toast.open({message:e.statusText,type:"is-danger"}):t.datasets=e.data}).catch(function(e){t.$toast.open({message:"".concat(e),type:"is-danger"})})}},X=V,Z=Object(l["a"])(X,K,Q,!1,null,"5e386fe2",null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container home"},[s("div",{staticClass:"columns",style:{display:t.display.landing}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s(t.dynamicLanding,{tag:"component"}),s("div",{attrs:{align:"center"}},[s("button",{staticClass:"button is-primary is-large",staticStyle:{"margin-bottom":"2rem"},on:{click:function(e){return t.closeLanding()}}},[t._v("I consent")])])],1)]),t.res_sums?s("div",{staticClass:"columns",style:{display:t.display.content}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s("div",{staticClass:"box summary"},[s("div",{staticClass:"content"},[s("h1",{attrs:{align:"center"}},[t._v("Please don't refresh the page.")]),s("hr"),s("h5",{staticClass:"my-header"},[t._v("Assess the following summary.")]),t.res_sums?s("div",[s("p",{staticClass:"my-summary"},[t._v("\n                            "+t._s(t.summaryText)+"\n                          ")])]):t._e(),s("hr"),t._m(0),s("p",[t._v("\n                          Hover the mouse on top of the\n                          "),s("b-tooltip",{attrs:{label:"Don't forget to enter the m_turk code\n                                  at the end of the session."}},[s("b-icon",{attrs:{pack:"fas",icon:"info-circle",size:"is-small"}})],1),t._v(" to see more information.\n                      ")],1),s("p",{staticClass:"my-text"},[s("b-tooltip",{attrs:{label:"There should be no difficulties in\n                                  identifying the referents of the noun phrases\n                                  (every noun/place/event should be well-specified)\n                                  or understanding the meaning of the sentence."}},[s("b-icon",{attrs:{pack:"fas",icon:"info-circle",size:"is-small"}})],1),t._v("\n                        The summary is a "),s("strong",[t._v("clear")]),t._v(".\n                      ")],1),s("div",{staticClass:"level",staticStyle:{"margin-bottom":"1.8rem","margin-top":"1.8rem"},attrs:{align:"center"}},[t._m(1),s("span",{staticClass:"level-item"},[t.show?s("vue-slider",{attrs:{min:1,max:100,width:"100%"},model:{value:t.res_sums[t.page.current-1].result.clarity,callback:function(e){t.$set(t.res_sums[t.page.current-1].result,"clarity",e)},expression:"res_sums[page.current - 1].result.clarity"}}):t._e()],1),t._m(2)]),s("div",{staticClass:"level column-5"},[s("div",{staticClass:"level-item"},[s("button",{staticClass:"button is-primary",attrs:{disabled:1===t.page.current},on:{click:t.prev}},[t._v("\n                            Prev\n                          ")])]),s("div",{staticClass:"level-item"},[s("strong",[t._v("\n                            "+t._s(t.page.current)+"/"+t._s(t.page.total)+"\n                          ")])]),s("div",{staticClass:"level-item"},[s("button",{staticClass:"button is-primary",attrs:{disabled:t.page.current===t.res_sums.length},on:{click:t.next}},[t._v("\n                            Next\n                          ")])])]),s("div",{attrs:{align:"center"}},[s("button",{staticClass:"button is-primary",attrs:{disabled:t.finish_disabled},on:{click:t.saveEvaluation}},[t._v("\n                          Finish\n                        ")])])])])])]):t._e(),s("div",{staticClass:"columns",style:{display:t.display.message}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s("div",{attrs:{align:"center"},domProps:{innerHTML:t._s(t.message)}})])])])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"my-header"},[s("strong",[t._v("How strongly agree are you on the following statements?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"level-left"},[s("label",{staticClass:"label is-small"},[t._v("Strongly "),s("br"),t._v(" disagree")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"level-right"},[s("label",{staticClass:"label is-small"},[t._v("Strongly "),s("br"),t._v(" agree")])])}],at=(s("96cf"),s("a481"),s("84b4"),s("3b8d")),nt=(s("55dd"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"document"},[s("h1",{attrs:{align:"center"}},[t._v("\n        Please Read This Thoroughly Before You Consent!\n    ")]),s("p",[t._v("Your task is to assess the "),s("strong",[t._v("clarity")]),t._v(" of an English summary sentence. A "),s("strong",[t._v("clear")]),t._v(" summary has to be easy to be understood. There should be no difficulties in identifying the referents of the noun phrases (every noun/place/event should be well-specified) or understanding the meaning of the sentence. ")]),s("p",[t._v("There are at most 8 sentences that need to be evaluated separately. The task should be possible to complete in less than "),s("strong",[t._v("2 minutes")]),t._v(".")]),s("hr"),s("p",[t._v("The following are assessment of a bad summary according to each aspect:")]),s("blockquote",[s("strong",[t._v("Lack of clarity")]),s("br"),s("a",{staticClass:"highlight"},[t._v("He")]),t._v(" is an English retired professional footballer and current President of Inter Miami CF.\n      "),s("p",[s("strong",[t._v("Explanation:")]),t._v(" The highlighted word is not well-specified (we don’t know who is the subject) which reduce the clarity of the sentence.")])]),s("p",[t._v("You will be scoring each summary sentence by stating how strongly you agree or disagree using a slider from scale 1 (strong disagreement) to 100 (strong agreement).")]),s("hr"),s("h4",[s("strong",[t._v("Sanity Check")])]),s("p",[t._v("We have inserted "),s("strong",[t._v("an obviously bad, mediocre and good summaries")]),t._v(" in between a real summaries. A bad summary has no clarity at all, a mediocre summary has some part of the referents that are specified while others don't, while a good summary has good clarity.")]),s("p",[t._v("Any submission that failed to recognize the bad, mediocre and good summaries with a suitable scores (bad < mediocre < good) will be "),s("strong",[t._v("rejected.")])]),s("hr"),s("p",[t._v("There is a "),s("strong",[t._v("code")]),t._v(" that you have to copy and paste to Amazon platform at the end of the task.")]),s("p",[t._v("Thank you for reading this")]),s("p",[t._v("\n        Do you consent for this information to be used\n        anonymously for research purposes only?\n    ")])])}],rt={name:"LandingInfRefMTurk"},ot=rt,lt=(s("6b39"),Object(l["a"])(ot,nt,it,!1,null,"79c2473e",null)),ct=lt.exports,ut=s("3b62"),mt=s("be08"),dt=s("0e95"),ht=s("6f79"),pt=s.n(ht),ft=s("bc3a");function vt(){var t=0;while(this.arr.length<3)t=Math.floor(Math.random()*this.res_sums.length)+1,-1===this.arr.indexOf(t)&&this.arr.push(t);this.arr.sort(),this.res_sums.splice(this.arr[0],0,{result:{clarity:50,type:"good"},summary:{text:this.sanity_summ.good_summary}}),this.res_sums.splice(this.arr[1],0,{result:{clarity:50,type:"mediocre"},summary:{text:this.sanity_summ.mediocre_summary}}),this.res_sums.splice(this.arr[2],0,{result:{clarity:50,type:"bad"},summary:{text:this.sanity_summ.bad_summary}}),this.page.total=this.res_sums.length}function _t(){return gt.apply(this,arguments)}function gt(){return gt=Object(at["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ft.get("/clarity/".concat(this.project_id)).then(function(t){e.sanity_summ=t.data.sanity_summ,e.res_sums=t.data.res_sums,e.proj_status=t.data.proj_status}).then(function(){vt.call(e)}).catch(function(){e.showMessage("Server is busy! Please wait 3 minutes and refresh!")});case 2:case"end":return t.stop()}},t,this)})),gt.apply(this,arguments)}function bt(){for(var t=this,e=[],s=0;s<this.res_sums.length;s+=1)e.push(this.res_sums[s].result);ft.post("clarity",{results:e,proj_status:this.proj_status}).then(function(){t.$toast.open({message:"Submission successful.",type:"is-success"});var e="<p>Please enter this code:</p>"+"<blockquote>".concat(t.proj_status.mturk_code,"</blockquote>");t.showMessage("<h3>Thank you for submitting!</h3><br/> ".concat(e))}).catch(function(e){t.$toast.open({message:"".concat(e),type:"is-danger"})})}window.onbeforeunload=function(){return"Are you sure you want leave?"};var yt={components:{BIcon:dt["a"],BTooltip:mt["a"],BRadio:ut["a"],LandingClarity:ct,vueSlider:pt.a},data:function(){return{max:100,min:1,arr:[],start_time:0,show:!1,res_sums:null,proj_status:null,sanity_summ:null,finish_disabled:!0,page:{current:1,total:0},timer:{now:Math.trunc((new Date).getTime()/1e3),date:Math.trunc((new Date).getTime()/1e3),isRunning:!0,timer:null},project_id:this.$route.params.project_id,display:{content:"none",landing:"block",message:"none",test:"none"},message:"",email:"",radio:""}},methods:{prev:function(){1!==this.page.current&&(this.page.current-=1)},next:function(){this.page.current!==this.page.total&&(this.page.current+=1),this.page.current===this.page.total&&(this.finish_disabled=!1)},showTest:function(){this.display.landing="none",this.display.content="none",this.display.message="none",this.display.test="flex"},showMessage:function(t){this.display.landing="none",this.display.content="none",this.display.message="flex",this.display.test="none",this.message=t},closeLanding:function(){this.display.content="flex",this.display.landing="none",window.scrollTo(0,0),this.show=!0,this.start_time=(new Date).getTime()},saveEvaluation:function(){this.proj_status.good_summ_score=this.res_sums[this.arr[0]].result.clarity,this.proj_status.mediocre_summ_score=this.res_sums[this.arr[1]].result.clarity,this.proj_status.bad_summ_score=this.res_sums[this.arr[2]].result.clarity,this.proj_status.is_finished=!1,this.res_sums[this.arr[2]].result.clarity<this.res_sums[this.arr[0]].result.clarity&&(this.proj_status.validity=!0,this.proj_status.is_finished=!0),this.proj_status.is_active=!1,this.proj_status.sanity_summ_id=this.sanity_summ.id,this.res_sums.splice(this.arr[2],1),this.res_sums.splice(this.arr[1],1),this.res_sums.splice(this.arr[0],1),this.page.current=1,this.page.total=this.res_sums.length,bt.call(this)}},computed:{summaryText:function(){var t=this.res_sums[this.page.current-1].summary.text;return t=t.replace("-lrb-","("),t=t.replace("-rrb-",")"),t},testPrompt:function(){var t="Is the statement below according to the reference sentence is True or False?";return"".concat(t,"<blockquote>").concat(this.sanity_statement,"</blockquote>")},dynamicLanding:function(){return"LandingClarity"},mTurkDisplay:function(){return"0"===this.is_mturk?"block":"none"}},beforeMount:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:_t.call(this);case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},wt=yt,Ct=(s("58f2"),Object(l["a"])(wt,et,st,!1,null,null,null)),jt=Ct.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container home"},[s("div",{staticClass:"columns",style:{display:t.display.landing}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s(t.dynamicLanding,{tag:"component"}),s("div",{attrs:{align:"center"}},[s("button",{staticClass:"button is-primary is-large",staticStyle:{"margin-bottom":"2rem"},on:{click:function(e){return t.closeLanding()}}},[t._v("I consent")])])],1)]),t.res_sums?s("div",{staticClass:"columns",style:{display:t.display.content}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s("div",{staticClass:"box summary"},[s("div",{staticClass:"content"},[s("h1",{attrs:{align:"center"}},[t._v("Please don't refresh the page.")]),s("hr"),s("h5",{staticClass:"my-header"},[t._v("Assess the following summary.")]),t.res_sums?s("div",[s("p",{staticClass:"my-summary"},[t._v("\n                            "+t._s(t.summaryText)+"\n                          ")])]):t._e(),s("hr"),t._m(0),s("p",[t._v("\n                          Hover the mouse on top of the\n                          "),s("b-tooltip",{attrs:{label:"Don't forget to enter the m_turk code\n                                  at the end of the session."}},[s("b-icon",{attrs:{pack:"fas",icon:"info-circle",size:"is-small"}})],1),t._v(" to see more information.\n                      ")],1),s("p",{staticClass:"my-text"},[s("b-tooltip",{attrs:{label:"The summary should sound natural\n                                  and has no grammar-related problem that\n                                  makes the text difficult to read. "}},[s("b-icon",{attrs:{pack:"fas",icon:"info-circle",size:"is-small"}})],1),t._v("\n                          The summary is "),s("strong",[t._v("fluent")]),t._v(".")],1),s("div",{staticClass:"level",staticStyle:{"margin-bottom":"1.8rem","margin-top":"1.8rem"},attrs:{align:"center"}},[t._m(1),s("span",{staticClass:"level-item"},[t.show?s("vue-slider",{attrs:{min:1,max:100,width:"100%"},model:{value:t.res_sums[t.page.current-1].result.fluency,callback:function(e){t.$set(t.res_sums[t.page.current-1].result,"fluency",e)},expression:"res_sums[page.current - 1].result.fluency"}}):t._e()],1),t._m(2)]),s("div",{staticClass:"level column-5"},[s("div",{staticClass:"level-item"},[s("button",{staticClass:"button is-primary",attrs:{disabled:1===t.page.current},on:{click:t.prev}},[t._v("\n                            Prev\n                          ")])]),s("div",{staticClass:"level-item"},[s("strong",[t._v("\n                            "+t._s(t.page.current)+"/"+t._s(t.page.total)+"\n                          ")])]),s("div",{staticClass:"level-item"},[s("button",{staticClass:"button is-primary",attrs:{disabled:t.page.current===t.res_sums.length},on:{click:t.next}},[t._v("\n                            Next\n                          ")])])]),s("div",{attrs:{align:"center"}},[s("button",{staticClass:"button is-primary",attrs:{disabled:t.finish_disabled},on:{click:t.saveEvaluation}},[t._v("\n                          Finish\n                        ")])])])])])]):t._e(),s("div",{staticClass:"columns",style:{display:t.display.message}},[s("div",{staticClass:"column is-8 is-offset-2 box content"},[s("div",{attrs:{align:"center"},domProps:{innerHTML:t._s(t.message)}})])])])},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",{staticClass:"my-header"},[s("strong",[t._v("How strongly agree are you on the following statements?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"level-left"},[s("label",{staticClass:"label is-small"},[t._v("Strongly "),s("br"),t._v(" disagree")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"level-right"},[s("label",{staticClass:"label is-small"},[t._v("Strongly "),s("br"),t._v(" agree")])])}],Tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"document"},[s("h1",{attrs:{align:"center"}},[t._v("\n        Please Read This Thoroughly Before You Consent!\n    ")]),s("p",[t._v("Your task is to assess the "),s("strong",[t._v("fluency")]),t._v(" of an English summary sentence. A "),s("strong",[t._v("fluent")]),t._v(" summary should sound natural and has no grammar-related problem that makes the text difficult to read.")]),s("p",[t._v("There are at most 8 sentences that need to be evaluated separately. The task should be possible to complete in less than "),s("strong",[t._v("2 minutes")]),t._v(".")]),s("hr"),s("p",[t._v("The following are assessment of a bad summary that is not fluent:")]),s("blockquote",[s("strong",[t._v("Lack of Fluency")]),s("br"),t._v("\n      David Robert Joseph Beckham, born 2 May 1975, "),s("a",{staticClass:"highlight"},[t._v("are a")]),t._v(" English retired professional footballer and current "),s("a",{staticClass:"highlight"},[t._v("current")]),t._v(" President of Inter Miami CF.\n     "),s("p",[s("strong",[t._v("Explanation:")]),t._v(" The highlighted words have grammar-related problem or duplicity.")])]),s("p",[t._v("You will be scoring each summary sentence by stating how strongly you agree or disagree using a slider from scale 1 (strong disagreement) to 100 (strong agreement).")]),s("hr"),s("h4",[s("strong",[t._v("Sanity Check")])]),s("p",[t._v("We have inserted "),s("strong",[t._v("an obviously bad, mediocre and good summaries")]),t._v(" in between a real summaries. A bad summary has many grammatical mistakes and isn't fluent at all, a mediocre summary has some grammatical mistakes but still understandable, while a good summary has no grammatical mistakes and is fluent.")]),s("p",[t._v("Any submission that failed to recognize the bad, mediocre and good summaries with a suitable scores (bad < mediocre < good) will be "),s("strong",[t._v("rejected.")])]),s("hr"),s("p",[t._v("There is a "),s("strong",[t._v("code")]),t._v(" that you have to copy and paste to Amazon platform at the end of the task.")]),s("p",[t._v("Thank you for reading this")]),s("p",[t._v("\n        Do you consent for this information to be used\n        anonymously for research purposes only?\n    ")])])}],Pt={name:"LandingInfRefMTurk"},Et=Pt,St=(s("14f2"),Object(l["a"])(Et,Tt,$t,!1,null,"141003f8",null)),At=St.exports,Mt=s("bc3a");function Ot(){var t=0;while(this.arr.length<3)t=Math.floor(Math.random()*this.res_sums.length)+1,-1===this.arr.indexOf(t)&&this.arr.push(t);this.arr.sort(),this.res_sums.splice(this.arr[0],0,{result:{fluency:50,type:"good"},summary:{text:this.sanity_summ.good_summary}}),this.res_sums.splice(this.arr[1],0,{result:{fluency:50,type:"mediocre"},summary:{text:this.sanity_summ.mediocre_summary}}),this.res_sums.splice(this.arr[2],0,{result:{fluency:50,type:"bad"},summary:{text:this.sanity_summ.bad_summary}}),this.page.total=this.res_sums.length}function Lt(){return zt.apply(this,arguments)}function zt(){return zt=Object(at["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Mt.get("/fluency/".concat(this.project_id)).then(function(t){e.sanity_summ=t.data.sanity_summ,e.res_sums=t.data.res_sums,e.proj_status=t.data.proj_status}).then(function(){Ot.call(e)}).catch(function(){e.showMessage("Server is busy! Please wait 3 minutes and refresh!")});case 2:case"end":return t.stop()}},t,this)})),zt.apply(this,arguments)}function Dt(){for(var t=this,e=[],s=0;s<this.res_sums.length;s+=1)e.push(this.res_sums[s].result);Mt.post("fluency",{results:e,proj_status:this.proj_status}).then(function(){t.$toast.open({message:"Submission successful.",type:"is-success"});var e="<p>Please enter this code:</p>"+"<blockquote>".concat(t.proj_status.mturk_code,"</blockquote>");t.showMessage("<h3>Thank you for submitting!</h3><br/> ".concat(e))}).catch(function(e){t.$toast.open({message:"".concat(e),type:"is-danger"})})}window.onbeforeunload=function(){return"Are you sure you want leave?"};var Rt={components:{BIcon:dt["a"],BTooltip:mt["a"],BRadio:ut["a"],LandingFluency:At,vueSlider:pt.a},data:function(){return{max:100,min:1,arr:[],start_time:0,show:!1,res_sums:null,proj_status:null,sanity_summ:null,finish_disabled:!0,page:{current:1,total:0},timer:{now:Math.trunc((new Date).getTime()/1e3),date:Math.trunc((new Date).getTime()/1e3),isRunning:!0,timer:null},project_id:this.$route.params.project_id,display:{content:"none",landing:"block",message:"none",test:"none"},message:"",email:"",radio:""}},methods:{prev:function(){1!==this.page.current&&(this.page.current-=1)},next:function(){this.page.current!==this.page.total&&(this.page.current+=1),this.page.current===this.page.total&&(this.finish_disabled=!1)},showTest:function(){this.display.landing="none",this.display.content="none",this.display.message="none",this.display.test="flex"},showMessage:function(t){this.display.landing="none",this.display.content="none",this.display.message="flex",this.display.test="none",this.message=t},closeLanding:function(){this.display.content="flex",this.display.landing="none",window.scrollTo(0,0),this.show=!0,this.start_time=(new Date).getTime()},saveEvaluation:function(){this.proj_status.good_summ_score=this.res_sums[this.arr[0]].result.fluency,this.proj_status.mediocre_summ_score=this.res_sums[this.arr[1]].result.fluency,this.proj_status.bad_summ_score=this.res_sums[this.arr[2]].result.fluency,this.proj_status.is_finished=!1,this.res_sums[this.arr[2]].result.fluency<this.res_sums[this.arr[0]].result.fluency&&(this.proj_status.validity=!0,this.proj_status.is_finished=!0),this.proj_status.is_active=!1,this.proj_status.sanity_summ_id=this.sanity_summ.id,this.res_sums.splice(this.arr[2],1),this.res_sums.splice(this.arr[1],1),this.res_sums.splice(this.arr[0],1),this.page.current=1,this.page.total=this.res_sums.length,Dt.call(this)}},computed:{summaryText:function(){var t=this.res_sums[this.page.current-1].summary.text;return t=t.replace("-lrb-","("),t=t.replace("-rrb-",")"),t},testPrompt:function(){var t="Is the statement below according to the reference sentence is True or False?";return"".concat(t,"<blockquote>").concat(this.sanity_statement,"</blockquote>")},dynamicLanding:function(){return"LandingFluency"},mTurkDisplay:function(){return"0"===this.is_mturk?"block":"none"}},beforeMount:function(){var t=Object(at["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:Lt.call(this);case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},Nt=Rt,Ft=(s("b730"),Object(l["a"])(Nt,kt,xt,!1,null,null,null)),Bt=Ft.exports,It=s("2f62"),qt=s("bc3a"),Ht=s.n(qt);function Yt(t){return Ht.a.post("/admin/login",t)}a["default"].use(It["a"]);var Jt={isAuthenticated:function(t){return P(t.jwt.token)}},Wt={login:function(t,e){return Yt(e).then(function(e){return t.commit("setJWTToken",{jwt:e.data})}).catch(function(t){$.$emit("failedAuthentication",t)})}},Gt={setJWTToken:function(t,e){localStorage.token=e.jwt.token,t.jwt=e.jwt}},Kt={jwt:""},Qt=new It["a"].Store({actions:Wt,mutations:Gt,state:Kt,getters:Jt}),Ut=Qt;a["default"].use(d["a"]);var Vt=new d["a"]({routes:[{path:"/",redirect:{name:"admin"}},{path:"/fluency/:project_id/",name:"fluency",component:Bt},{path:"/clarity/:project_id/",name:"clarity",component:jt},{path:"/admin",component:k,children:[{path:"",name:"admin",component:g},{path:"manage",name:"manage",component:I},{path:"new",component:G,children:[{path:"",name:"new",component:tt},{path:"evaluation",name:"newEvaluation",component:tt}]}],beforeEnter:function(t,e,s){Ut.getters.isAuthenticated?s():s("/login")}},{path:"/login",name:"login",component:M,beforeEnter:function(t,e,s){Ut.getters.isAuthenticated?s("/admin"):s()}}]});a["default"].config.productionTip=!1,a["default"].use(i.a),new a["default"]({store:Ut,router:Vt,render:function(t){return t(m)}}).$mount("#app")},"58f2":function(t,e,s){"use strict";var a=s("0d64"),n=s.n(a);n.a},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},"651e":function(t,e,s){},"6b39":function(t,e,s){"use strict";var a=s("53ad"),n=s.n(a);n.a},"900b":function(t,e,s){},"9f7d":function(t,e,s){"use strict";var a=s("651e"),n=s.n(a);n.a},af5a:function(t,e,s){},b730:function(t,e,s){"use strict";var a=s("900b"),n=s.n(a);n.a},d1f8:function(t,e,s){},df01:function(t,e,s){}});
//# sourceMappingURL=app.371bb5ad.js.map