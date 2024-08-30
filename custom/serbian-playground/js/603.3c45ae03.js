"use strict";(self["webpackChunkserbian_playground"]=self["webpackChunkserbian_playground"]||[]).push([[603],{3732:function(t,n,e){e.d(n,{F:function(){return a},h:function(){return c}});const r={A:"А",a:"а",B:"Б",b:"б",V:"В",v:"в",G:"Г",g:"г",D:"Д",d:"д","Đ":"Ђ","đ":"ђ",E:"Е",e:"е","Ž":"Ж","ž":"ж",Z:"З",z:"з",I:"И",i:"и",J:"Ј",j:"ј",K:"К",k:"к",L:"Л",l:"л",Lj:"Љ",lj:"љ",M:"М",m:"м",N:"Н",n:"н",Nj:"Њ",nj:"њ",O:"О",o:"о",P:"П",p:"п",R:"Р",r:"р",S:"С",s:"с",T:"Т",t:"т","Ć":"Ћ","ć":"ћ",U:"У",u:"у",F:"Ф",f:"ф",H:"Х",h:"х",C:"Ц",c:"ц","Č":"Ч","č":"ч","Dž":"Џ","dž":"џ","Š":"Ш","š":"ш"},l=Object.keys(r).reduce(((t,n)=>(t[r[n]]=n,t)),{});function a(t){return t.split("").map((n=>r[n+t.charAt(t.indexOf(n)+1)]?r[n+t.charAt(t.indexOf(n)+1)]:r[n]||n)).join("").replace(/љј|њј|Љј|Њј/g,(t=>{switch(t){case"љј":return"љ";case"њј":return"њ";case"Љј":return"Љ";case"Њј":return"Њ";default:return t}}))}function c(t){return t.split("").map((t=>l[t]||t)).join("")}},9603:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r=e(641),l=e(33),a=e(3751);const c={class:"container mt-3"},o={class:"mb-3"},i=(0,r.Lk)("label",{for:"latinInput",class:"form-label"},"SRB:",-1),s=["placeholder"],u={class:"mb-3"},d=(0,r.Lk)("label",{for:"cyrillicInput",class:"form-label"},"СРБ:",-1),p=["placeholder"];function b(t,n,e,b,k,T){const f=(0,r.g2)("b-button");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(f,{onClick:t.backToMenu,variant:"secondary",class:"mb-3"},{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(t.translate("Back")),1)])),_:1},8,["onClick"]),(0,r.Lk)("div",c,[(0,r.Lk)("div",o,[i,(0,r.bo)((0,r.Lk)("textarea",{id:"latinInput","onUpdate:modelValue":n[0]||(n[0]=n=>t.latinText=n),class:"form-control",rows:"3",placeholder:t.translate("EnterLatnText")},null,8,s),[[a.Jo,t.latinText]]),(0,r.Lk)("button",{onClick:n[1]||(n[1]=(...n)=>t.convertToCyrillic&&t.convertToCyrillic(...n)),class:"btn btn-primary mt-2"},(0,l.v_)(t.translate("ConvertToCyrl")),1)]),(0,r.Lk)("div",u,[d,(0,r.bo)((0,r.Lk)("textarea",{id:"cyrillicInput","onUpdate:modelValue":n[2]||(n[2]=n=>t.cyrillicText=n),class:"form-control",rows:"3",placeholder:t.translate("EnterCyrlText")},null,8,p),[[a.Jo,t.cyrillicText]]),(0,r.Lk)("button",{onClick:n[3]||(n[3]=(...n)=>t.convertToLatin&&t.convertToLatin(...n)),class:"btn btn-primary mt-2"},(0,l.v_)(t.translate("ConvertToLatn")),1)])])],64)}var k=e(3732),T=e(6992),f=e(6278),h=(0,r.pM)({data:()=>({latinText:"",cyrillicText:""}),setup(){const t=(0,T.s9)(),n=t.t;return{translate:n}},methods:{...(0,f.i0)(["updateAppState"]),backToMenu(){this.updateAppState("mainMenu")},convertToCyrillic(){this.cyrillicText=(0,k.F)(this.latinText)},convertToLatin(){this.latinText=(0,k.h)(this.cyrillicText)}}}),m=e(6262);const v=(0,m.A)(h,[["render",b]]);var y=v}}]);
//# sourceMappingURL=603.3c45ae03.js.map