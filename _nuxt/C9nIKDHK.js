import{r as d,f as H,g as K,h as n,i as J,j as z,k as X,l as Y,m as Z,n as A,q as L,s as V,v as D,x as W,o as C,c as S,y as tt,z as et,_ as at,A as st,B as ot,C as it,u as dt,a as e,b as O,t as _,F as nt,D as lt,d as ct}from"./BV96B_by.js";import{u as rt}from"./Bqtt2uGC.js";function ut(s,i){let a,l,f;const m=d(!0),u=()=>{m.value=!0,f()};H(s,u,{flush:"sync"});const c=typeof i=="function"?i:i.get,o=typeof i=="function"?void 0:i.set,r=K((p,v)=>(l=p,f=v,{get(){return m.value&&(a=c(),m.value=!1),l(),a},set(y){o==null||o(y)}}));return Object.isExtensible(r)&&(r.trigger=u),r}function _t(s){return typeof s=="function"?s():n(s)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function ft(s){var i;const a=_t(s);return(i=a==null?void 0:a.$el)!=null?i:a}function mt(s){const i=X(),a=ut(()=>null,()=>s?ft(s):i.proxy.$el);return J(a.trigger),z(a.trigger),a}function pt(s){const i=Y().public.googleAdsense,a=Z(s,i),l=a.adClient??a.id,f=a.test?"on":null,m=Math.random(),u=mt(),c=d(""),o=d(!1),r=A(()=>o.value?`page-${Math.random()}`:null),p=A(()=>{var h;return((h=u.value)==null?void 0:h.getAttribute("data-ad-status"))==="unfilled"}),v=M("path"),y=M("query"),j=A(()=>o.value?null:"");async function w(){o.value=!1,await D(),g()}async function g(){var h;if(o.value=!0,await D(),!((h=u.value)!=null&&h.innerHTML))try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(x){console.error(x)}}return H([v,y],(h,x)=>{const b=ht(h,x,a.includeQuery);u.value&&!u.value.isConnected||b&&w()}),L(()=>{!u.value||!u.value.isConnected||(o.value?u.value.innerHTML="":u.value.innerHTML=" ")}),a.hideUnfilled&&L(()=>p.value&&(c.value="hide-unfilled")),z(()=>g()),{adClass:c,dataAdClient:l,dataAdRegion:r,dataAdTest:f,dataAnalyticsDomainName:a.analyticsDomainName,dataAnalyticsUacct:a.analyticsUacct,isUnfilled:p,key:m,status:j,updateAd:w,showAd:g}}function M(s){const i=V();return A(()=>i[s])}function ht(s,i,a){const[l,f]=s,[m,u]=i;if(l!==m)return!0;if(!a)return;const c=Object.keys(f),o=Object.keys(u);return c.length!==o.length||c.some(r=>f[r]!==u[r])}const bt=["data-ad-client","data-ad-slot","data-ad-format","data-ad-region","data-ad-layout","data-ad-layout-key","data-page-url","data-analytics-uacct","data-analytics-domain-name","data-adtest","data-adsbygoogle-status","data-ad-full-width-responsive"],vt=W({__name:"Adsbygoogle",props:{adClient:{default:void 0},adSlot:{default:null},adFormat:{},adLayout:{default:null},adLayoutKey:{default:null},adStyle:{default:()=>({display:"block"})},adFullWidthResponsive:{type:Boolean,default:!1},hideUnfilled:{type:Boolean,default:void 0},pageUrl:{default:null},analyticsUacct:{},analyticsDomainName:{},includeQuery:{type:Boolean}},setup(s,{expose:i}){const{adClient:a,analyticsDomainName:l,analyticsUacct:f,hideUnfilled:m,includeQuery:u}=s,{adClass:c,dataAdClient:o,dataAdRegion:r,dataAdTest:p,dataAnalyticsDomainName:v,dataAnalyticsUacct:y,isUnfilled:j,key:w,status:g,updateAd:h,showAd:x}=pt({adClient:a,analyticsDomainName:l,analyticsUacct:f,hideUnfilled:m,includeQuery:u});return i({isUnfilled:j,updateAd:h,showAd:x}),(b,$)=>(C(),S("ins",{ref:"ad",key:n(w),class:tt(["adsbygoogle",n(c)]),style:et(b.adStyle),"data-ad-client":n(o),"data-ad-slot":b.adSlot,"data-ad-format":b.adFormat,"data-ad-region":n(r),"data-ad-layout":b.adLayout,"data-ad-layout-key":b.adLayoutKey,"data-page-url":b.pageUrl,"data-analytics-uacct":n(y),"data-analytics-domain-name":n(v),"data-adtest":n(p),"data-adsbygoogle-status":n(g),"data-ad-full-width-responsive":b.adFullWidthResponsive},null,14,bt))}}),yt=at(vt,[["__scopeId","data-v-101bfb4a"]]),gt=()=>{const s=st();return ot()!=="v4"&&console.warn("useStrapi4 is only available for v4"),{find:(c,o,r)=>s(`/${c}`,{method:"GET",params:o,...r}),findOne:(c,o,r,p)=>{typeof o=="object"&&(r=o,o=void 0);const v=[c,o].filter(Boolean).join("/");return s(v,{method:"GET",params:r,...p})},create:(c,o)=>s(`/${c}`,{method:"POST",body:{data:o}}),update:(c,o,r)=>{typeof o=="object"&&(r=o,o=void 0);const p=[c,o].filter(Boolean).join("/");return s(p,{method:"PUT",body:{data:r}})},delete:(c,o)=>{const r=[c,o].filter(Boolean).join("/");return s(r,{method:"DELETE"})}}},xt=()=>gt();function wt(s){return s.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5")}function Q(s){return s.replace(/^(\d{4})(\d{1})(\d{2})$/,"$1-$2/$3")}function jt(s){let i=s+"00";s.length<3&&(s=i.padStart(3,"0"));const a=i.slice(0,-2)+"."+i.slice(-2),f=parseFloat(a).toFixed(2).split("."),m=f[0],u=f[1];return`R$ ${m.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${u}`}const At=it({id:"company_store",state:()=>({Item:null,Loading:!1}),actions:{async getItem(s){try{this.Loading=!0;const{findOne:i}=xt(),a=await i("companies",{fields:["id","name","slug","cnpj"],filters:{cnpj:s},populate:{addresses:{fields:["id","street_type","street","number","complement","neighborhood","city","state","country","zipcode"]},company_tax_info:{fields:["cnpj","situacao_cadastral","data_situacao_cadastral","motivo_situacao_cadastral","data_inicio_atividade","matriz_filial","porte_empresa","natureza_juridica","legal_name","trading_name","capital_social"]},primary_activity:{fields:["code","description"]},secondary_activities:{fields:["code","description"]},header_objs:{fields:["title","description"]}}});return this.Item={id:a.data[0].id.toString(),name:a.data[0].attributes.name,slug:a.data[0].attributes.slug,cnpj:a.data[0].attributes.cnpj,addresses:a.data[0].attributes.addresses.data.map(l=>({id:l.id.toString(),street_type:l.attributes.street_type,street:l.attributes.street,number:l.attributes.number,complement:l.attributes.complement,neighborhood:l.attributes.neighborhood,city:l.attributes.city,state:l.attributes.state,country:l.attributes.country,zipcode:l.attributes.zipcode})),company_tax_info:{cnpj:wt(a.data[0].attributes.company_tax_info.data.attributes.cnpj),matriz_filial:a.data[0].attributes.company_tax_info.data.attributes.matriz_filial,situacao_cadastral:a.data[0].attributes.company_tax_info.data.attributes.situacao_cadastral,data_situacao_cadastral:a.data[0].attributes.company_tax_info.data.attributes.data_situacao_cadastral,motivo_situacao_cadastral:a.data[0].attributes.company_tax_info.data.attributes.motivo_situacao_cadastral,data_inicio_atividade:a.data[0].attributes.company_tax_info.data.attributes.data_inicio_atividade,natureza_juridica:a.data[0].attributes.company_tax_info.data.attributes.natureza_juridica,porte_empresa:a.data[0].attributes.company_tax_info.data.attributes.porte_empresa,legal_name:a.data[0].attributes.company_tax_info.data.attributes.legal_name,trading_name:a.data[0].attributes.company_tax_info.data.attributes.trading_name,capital_social:jt(a.data[0].attributes.company_tax_info.data.attributes.capital_social)},primary_activity:{code:Q(a.data[0].attributes.primary_activity.data.attributes.code),description:a.data[0].attributes.primary_activity.data.attributes.description},secondary_activities:a.data[0].attributes.secondary_activities.data.map(l=>({code:Q(l.attributes.code),description:l.attributes.description})),header_objs:{title:a.data[0].attributes.header_objs.data[0].attributes.title,description:a.data[0].attributes.header_objs.data[0].attributes.description}},this.Item}catch(i){console.log(i)}finally{this.Loading=!1}}}}),Ct={class:"w-full"},St={class:"relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden pb-4"},$t={id:"company_info",class:"w-full pb-2"},Lt={class:"relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden"},zt={class:"font-bold"},Et={id:"company_summary",class:"mt-6 w-2/3 border-b"},kt=e("h2",{class:"font-bold my-2"},"Resumo da Empresa",-1),Tt={id:"company_more_info",class:"mt-6 w-2/3 border-b"},Bt=e("h2",{class:"font-bold my-6"},"Outras Informações",-1),Ut={class:"my-2"},Ft={class:"flex flex-col flex-wrap gap-2"},Rt={class:"flex flex-row"},It=e("dt",{class:"font-semibold w-32"},"Nome Fantasia:",-1),Nt={class:"font-normal w-auto"},Pt={class:"flex flex-row"},Dt=e("dt",{class:"font-semibold w-32"},"Data Fundação:",-1),Ot={class:"font-normal w-auto"},Mt={id:"company_irs_summary",class:"mt-6 w-2/3 border-b"},Qt=e("h2",{class:"font-bold my-6"},[ct("Informações Receita Federal "),e("span",{class:"font-light text-sm italic"},"Atualizado em 24/04/2024")],-1),Ht={class:"my-2"},Vt={class:"flex flex-col flex-wrap gap-2"},Wt={class:"flex flex-row"},qt=e("dt",{class:"font-semibold w-32"},"Tipo:",-1),Gt={class:"font-normal w-auto"},Kt={class:"flex flex-row"},Jt=e("dt",{class:"font-semibold w-32"},"Status:",-1),Xt={class:"font-normal w-auto"},Yt={class:"flex flex-row"},Zt=e("dt",{class:"font-semibold w-32"},"Capital Social:",-1),te={class:"font-normal w-auto"},ee={id:"company_address_info",class:"w-full pb-2"},ae={class:"relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden"},se=e("h2",{class:"font-bold my-6"},"Localização",-1),oe={class:"my-2"},ie={class:"flex flex-col flex-wrap gap-2"},de={class:"flex flex-row"},ne=e("dt",{class:"font-semibold w-40"},"Endereço:",-1),le={class:"w-auto"},ce={class:"flex flex-row"},re=e("dt",{class:"font-semibold w-40"},"Complemento:",-1),ue={class:"w-auto"},_e={class:"flex flex-row"},fe=e("dt",{class:"font-semibold w-40"},"Bairro:",-1),me={class:"w-auto"},pe={class:"flex flex-row"},he=e("dt",{class:"font-semibold w-40"},"Município:",-1),be={class:"w-auto"},ve={class:"flex flex-row"},ye=e("dt",{class:"font-semibold w-40"},"Estado:",-1),ge={class:"w-auto"},xe={class:"flex flex-row"},we=e("dt",{class:"font-semibold w-40"},"País:",-1),je={class:"w-auto"},Ae={class:"flex flex-row"},Ce=e("dt",{class:"font-semibold w-40"},"Código Postal:",-1),Se={class:"w-auto"},$e={class:"relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden pb-4"},Le={id:"company_activity_info",class:"w-full pb-2"},ze={class:"relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden"},Ee=e("h2",{class:"font-bold my-6"},"Atividades",-1),ke=e("h3",{class:"font-semibold my-2"},"Atividade Principal",-1),Te=e("h3",{class:"font-semibold my-2"},"Atividades Secundárias",-1),Be={class:"my-1"},Ie=W({__name:"[id]",setup(s){const i=d(""),a=d(""),l=d(""),f=d(""),m=d("");dt({titleTemplate:i,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"twitter:title",content:l},{property:"twitter:description",content:a}]});const u=A(()=>[{"@type":"ListItem",position:1,name:"Home",item:"https://ccnpj.com"},{"@type":"ListItem",position:2,name:"Empresas",item:"https://ccnpj.com/empresas"},{"@type":"ListItem",position:3,name:f.value,item:m.value}]),c=d({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[]});L(()=>{c.value.itemListElement=u.value}),rt(c);const o=d(""),r=d(""),p=d(""),v=d(""),y=d(""),j=d(""),w=d(""),g=d(""),h=d(""),x=d(""),b=d(""),$=d(""),E=d(""),k=d(""),T=d(""),B=d(""),U=d(""),F=d(""),R=d(""),I=d([]),q=At(),G=V();return z(async()=>{const t=await q.getItem(G.params.id);x.value=(t==null?void 0:t.addresses[0].street_type)+" "+(t==null?void 0:t.addresses[0].street),b.value=t==null?void 0:t.addresses[0].number,$.value=t==null?void 0:t.addresses[0].complement,E.value=t==null?void 0:t.addresses[0].neighborhood,k.value=t==null?void 0:t.addresses[0].city,T.value=t==null?void 0:t.addresses[0].state,B.value=t==null?void 0:t.addresses[0].country,U.value=t==null?void 0:t.addresses[0].zipcode,p.value=t==null?void 0:t.company_tax_info.cnpj,o.value=t==null?void 0:t.company_tax_info.trading_name,r.value=t==null?void 0:t.company_tax_info.legal_name,w.value=t==null?void 0:t.company_tax_info.capital_social,h.value=t==null?void 0:t.company_tax_info.matriz_filial,g.value=t==null?void 0:t.company_tax_info.situacao_cadastral,v.value=t==null?void 0:t.company_tax_info.data_inicio_atividade,i.value=t==null?void 0:t.header_objs.title,l.value=t==null?void 0:t.header_objs.title,a.value=t==null?void 0:t.header_objs.description,f.value=t==null?void 0:t.header_objs.title,m.value="https://ccnpj.com/empresas/"+(t==null?void 0:t.cnpj),y.value=`${t==null?void 0:t.company_tax_info.legal_name} localizada na cidade de ${t==null?void 0:t.addresses[0].city} no estado de ${t==null?void 0:t.addresses[0].state} iniciou suas atividades em ${t==null?void 0:t.company_tax_info.data_inicio_atividade}.`,j.value=`A empresa tem como atividade principal ${t==null?void 0:t.primary_activity.description}.`,F.value=t==null?void 0:t.primary_activity.code,R.value=t==null?void 0:t.primary_activity.description,I.value=t==null?void 0:t.secondary_activities}),(t,Ue)=>{const N=yt;return C(),S("div",Ct,[e("div",St,[O(N,{"ad-format":"auto","ad-style":{display:"block"}})]),e("section",$t,[e("div",Lt,[e("h1",zt,_(n(r))+" - "+_(n(p)),1),e("section",Et,[kt,e("p",null,_(n(y))+" "+_(n(j)),1)]),e("section",Tt,[Bt,e("dl",Ut,[e("dd",null,[e("dl",Ft,[e("div",Rt,[It,e("dd",Nt,_(n(o)),1)]),e("div",Pt,[Dt,e("dd",Ot,_(n(v)),1)])])])])]),e("section",Mt,[Qt,e("dl",Ht,[e("dd",null,[e("dl",Vt,[e("div",Wt,[qt,e("dd",Gt,_(n(h)),1)]),e("div",Kt,[Jt,e("dd",Xt,_(n(g)),1)]),e("div",Yt,[Zt,e("dd",te,_(n(w)),1)])])])])])])]),e("section",ee,[e("div",ae,[se,e("dl",oe,[e("dd",null,[e("dl",ie,[e("div",de,[ne,e("dd",le,_(n(x))+", "+_(n(b)),1)]),e("div",ce,[re,e("dd",ue,_(n($)),1)]),e("div",_e,[fe,e("dd",me,_(n(E)),1)]),e("div",pe,[he,e("dd",be,_(n(k)),1)]),e("div",ve,[ye,e("dd",ge,_(n(T)),1)]),e("div",xe,[we,e("dd",je,_(n(B)),1)]),e("div",Ae,[Ce,e("dd",Se,_(n(U)),1)])])])])])]),e("div",$e,[O(N,{"ad-format":"auto","ad-style":{display:"block"}})]),e("section",Le,[e("div",ze,[Ee,ke,e("p",null,_(n(F))+" : "+_(n(R)),1),Te,(C(!0),S(nt,null,lt(n(I),P=>(C(),S("p",Be,_(P.code)+" : "+_(P.description),1))),256))])])])}}});export{Ie as default};
