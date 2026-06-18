(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();function S(e,t,s){return{id:e,tableNo:t,label:s}}function P(e,t,s){return{id:e,label:t,children:s}}const as=[P("1","隧道岩土体物理力学指标",[P("1-1","岩石物理力学性质指标",[S("1-1-1","1.1.1","中风化灰岩物理力学性质统计表（T1 j1）"),S("1-1-2","1.1.2-2","中风化泥岩物理力学性质统计表（T1f4）"),S("1-1-3","4.1.2-3","中风化灰岩物理力学性质统计表（T1f3）"),S("1-1-4","4.1.2-4","中风化泥灰岩物理力学性质统计表（T1f1）"),S("1-1-5","4.1.2-5","中风化灰岩物理力学性质统计表（P3c）"),S("1-1-6","4.1.2-6","中风化灰岩物理力学性质统计表（P3l）"),S("1-1-7","4.1.2-7","中风化炭质页岩物理力学性质统计表（P3l）"),S("1-1-8","4.1.2-8","中风化铝土页岩物理力学性质统计表（P3l）"),S("1-1-9","4.1.2-9","中风化页岩物理力学性质统计表（P3l 背斜西翼）"),S("1-1-10","4.1.2-10","中风化页岩物理力学性质统计表（P3l 背斜东翼）"),S("1-1-11","4.1.2-11","中风化灰岩物理力学性质统计表（P2m）"),S("1-1-12","4.1.2-12","中风化灰岩夹页岩物理力学性质统计表（P2m）"),S("1-1-13","4.1.2-13","中风化灰岩物理力学性质统计表（P2q）"),S("1-1-14","4.1.2-14","中风化页岩物理力学性质统计表（P1l）"),S("1-1-15","4.1.2-15","中风化页岩物理力学性质统计表（S2h）"),S("1-1-16","4.1.2-16","中风化白云质灰岩物理力学性质统计表（T1j2）"),S("1-1-17","4.2.1-16","中风化页岩物理力学性质统计表（断层角砾岩）")]),P("1-2","围岩弹性波速",[S("1-2-1","4.2.2-1","进出洞口钻孔物探声波测井测试成果表"),S("1-2-2","4.2.2-2","洞身段钻孔物探声波测井测试成果表"),S("1-2-3","4.2.2-3","洞身段钻孔物探综合测井测试成果表"),S("1-2-4","4.2.2-5","洞身段钻孔物探综合测井测试成果表（一）"),S("1-2-5","4.2.2-5","洞身段钻孔物探综合测井测试成果表（二）"),S("1-2-6","4.2.2-6","洞身段钻孔物探综合测井测试成果表")]),P("1-3","岩土参数建议",[S("1-3-1","1.3","隧道设计参数建议值一览表")])]),P("2","隧道工程地质评价",[P("2-1","隧道洞身工程地质评价",[S("2-1-1","—","围岩岩体完整程度定性划分表"),S("2-1-2","5.2.2-2","岩体完整度综合确定表"),S("2-1-3","5.2.3-3","隧道各级围岩分布情况表")]),P("2-2","竖井工程地质评价",[S("2-2-1","—","竖井工程地质评价")])]),P("3","隧道水文地质评价",[P("3-1","大气降水渗入法",[S("3-1-1","3.1-1","白云山隧道大气降雨入渗系数法计算成果")]),P("3-2","地下径流模数法",[S("3-2-1","3.2-1","地下径流模数法涌水量计算表")]),P("3-3","涌水量取值建议",[S("3-3-1","3.3-1","白云山隧道单洞涌水量分段预测表")])]),P("4","工程地质条件评价",[P("4-1","突水突泥预测",[S("4-1-1","—","白云山隧道突水突泥段落预测表")])])],Pe={left:{name:"左线隧道",chainage:{start:"ZK81+693",end:"ZK88+135",length:6442},entrance:{lon:107.333492,lat:29.298659,elevation:592.132},exit:{lon:107.398801,lat:29.28922,elevation:620.175},axisDirection:{min:75,max:105},segments:[{from:"ZK81+693",to:"ZK85+000",slope:.01453,gradePointElevation:640.585},{from:"ZK85+000",to:"ZK88+135",slope:-.0065}]},right:{name:"右线隧道",chainage:{start:"K81+705",end:"K88+109",length:6404},entrance:{lon:107.333701,lat:29.298371,elevation:592.597},exit:{lon:107.398503,lat:29.28857,elevation:620.55},axisDirection:{min:79,max:105},segments:[{from:"K81+705",to:"K85+000",slope:.014584,gradePointElevation:640.83},{from:"K85+000",to:"K88+109",slope:-.0065}]}},ke={left:{entrance:{x:-4115.94873046875,y:-1712.8272094726562,z:940.5238647460938},exit:{x:2654.744140625,y:-1712.8272094726562,z:940.5238647460938}},right:{entrance:{x:-4115.94873046875,y:-1741.1968383789062,z:940.5238647460938},exit:{x:2654.744140625,y:-1741.1968383789062,z:940.5238647460938}}},V={lon:107.333492,lat:29.298659,height:620.55},ns="基于WebGL的地下工程三维基础信息系统";function Ie(e,t){const a=e==="left"?"◀":"▶",n=document.createElement("button");n.type="button",n.className=`sidebar-expand-tab sidebar-expand-tab--${e}`,n.setAttribute("aria-label",`展开${t}`),n.innerHTML=`<span class="sidebar-expand-tab__label">${t}</span>`;const i=document.createElement("button");return i.type="button",i.className=`sidebar-edge-btn sidebar-edge-btn--${e}`,i.setAttribute("aria-label",`收起${t}`),i.textContent=a,{expandTab:n,collapseBtn:i}}function is(){const e=document.createElement("div");e.id="app",e.className="app-shell",e.innerHTML=`
    <div id="cesiumContainer" class="app-viewer"></div>

    <header class="app-header">
      <div class="app-header__side app-header__side--left">
        <span class="app-header__badge">地下工程</span>
        <span class="app-header__meta">三维可视化平台</span>
      </div>
      <div class="app-header__title-wrap">
        <div class="app-header__title-frame">
          <h1 class="app-header__title">${ns}</h1>
        </div>
      </div>
    </header>

    <aside class="app-sidebar app-sidebar--left">
      <div class="sidebar-slide sidebar-slide--left"></div>
    </aside>

    <aside class="app-sidebar app-sidebar--right">
      <div class="sidebar-slide sidebar-slide--right"></div>
    </aside>

    <div id="bottomToolbarRoot" class="bottom-toolbar-root"></div>
  `,document.body.prepend(e);const t=e.querySelector(".app-sidebar--left"),s=e.querySelector(".app-sidebar--right"),a=t.querySelector(".sidebar-slide--left"),n=s.querySelector(".sidebar-slide--right"),i=Ie("left","勘察数据"),l=Ie("right","数据表格");a.innerHTML=`
    <div class="cyber-panel cyber-panel--nav">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="cyber-panel__title">勘察数据</span>
      </div>
      <div class="cyber-panel__body">
        <div id="layerTreeRoot" class="layer-tree"></div>
      </div>
    </div>
  `;const o=document.createElement("div");o.id="chartPanelRoot",o.className="chart-panel-root",n.appendChild(l.collapseBtn),n.appendChild(o),a.appendChild(i.collapseBtn),t.appendChild(i.expandTab),s.appendChild(l.expandTab);function r(p,c){p.classList.toggle("is-collapsed",c),p.dataset.collapsed=c?"true":"false"}function d(p){return p.classList.contains("is-collapsed")}return i.collapseBtn.addEventListener("click",()=>{r(t,!0)}),i.expandTab.addEventListener("click",()=>{r(t,!1)}),l.collapseBtn.addEventListener("click",()=>{r(s,!0)}),l.expandTab.addEventListener("click",()=>{r(s,!1)}),{layerTreeRoot:e.querySelector("#layerTreeRoot"),chartPanelRoot:o,bottomToolbarRoot:e.querySelector("#bottomToolbarRoot"),cesiumContainer:e.querySelector("#cesiumContainer"),showLeftSidebar(){r(t,!1)},hideLeftSidebar(){r(t,!0)},showRightSidebar(){r(s,!1)},hideRightSidebar(){r(s,!0)},collapseSidebars(){r(t,!0),r(s,!0)},isRightSidebarCollapsed(){return d(s)},toggleLeftSidebar(){r(t,!d(t))},toggleRightSidebar(){r(s,!d(s))}}}function ls(e){var t;return!((t=e.children)!=null&&t.length)}function os(e,t){const s=e.tableNo?`${e.tableNo} ${e.label}`:e.label;return`
    <li class="layer-tree__item layer-tree__item--leaf" data-depth="${t}" data-id="${e.id}">
      <button
        type="button"
        class="layer-tree__node layer-tree__node--leaf"
        data-id="${e.id}"
        title="${s}"
      >
        <span class="layer-tree__bullet"></span>
        <span class="layer-tree__label">${e.label}</span>
      </button>
    </li>
  `}function rs(e,t){const s=e.children.map(a=>kt(a,t+1)).join("");return`
    <li class="layer-tree__item layer-tree__item--branch" data-depth="${t}" data-id="${e.id}">
      <button
        type="button"
        class="layer-tree__node layer-tree__node--branch"
        data-id="${e.id}"
        aria-expanded="true"
        title="${e.label}"
      >
        <span class="layer-tree__toggle" aria-hidden="true"></span>
        <span class="layer-tree__label">${e.label}</span>
      </button>
      <ul class="layer-tree__children">${s}</ul>
    </li>
  `}function kt(e,t=0){return ls(e)?os(e,t):rs(e,t)}function cs(e,t,{onSelect:s}={}){e.innerHTML=`
    <ul class="layer-tree__root">
      ${t.map(n=>kt(n,0)).join("")}
    </ul>
  `;function a(n){e.querySelectorAll(".layer-tree__node").forEach(i=>{i.classList.toggle("layer-tree__node--active",i.dataset.id===n)})}return e.addEventListener("click",n=>{const i=n.target.closest(".layer-tree__node--branch");if(i){const d=i.closest(".layer-tree__item--branch"),p=i.getAttribute("aria-expanded")==="true";i.setAttribute("aria-expanded",p?"false":"true"),d.classList.toggle("layer-tree__item--collapsed",p);return}const l=n.target.closest(".layer-tree__node--leaf");if(!l)return;const o=l.dataset.id;a(o);const r=Te(t,o);s==null||s(r)}),{setActive:a,getNodeById:n=>Te(t,n)}}function Te(e,t){for(const s of e){if(s.id===t)return s;if(s.children){const a=Te(s.children,t);if(a)return a}}return null}const xe={id:"1-1-1",tableNo:"1.1.1",title:"中风化灰岩物理力学性质统计表（T1 j1）",samples:[{sampleId:"BYSCK1-1",rows:[{density:"-",ucsNatural:"44.1",ucsSaturated:"31.2",softening:"0.71",c:"-",phi:"-"},{density:"-",ucsNatural:"46.6",ucsSaturated:"29.4",softening:"0.63",c:"-",phi:"-"},{density:"-",ucsNatural:"47.7",ucsSaturated:"31.7",softening:"0.66",c:"-",phi:"-"}]},{sampleId:"BYSCK2-1",triaxialRowspan:3,rows:[{density:"2.56",ucsNatural:"-",ucsSaturated:"-",softening:"-",c:"2.72",phi:"33.6"},{density:"2.55",ucsNatural:"-",ucsSaturated:"-",softening:"-"},{density:"2.57",ucsNatural:"-",ucsSaturated:"-",softening:"-"}]},{sampleId:"BYSCK2-2",rows:[{density:"-",ucsNatural:"47.9",ucsSaturated:"31.7",softening:"0.66",c:"-",phi:"-"},{density:"-",ucsNatural:"44.9",ucsSaturated:"32.4",softening:"0.72",c:"-",phi:"-"},{density:"-",ucsNatural:"47.2",ucsSaturated:"32.7",softening:"0.69",c:"-",phi:"-"}]},{sampleId:"BYSCK8-1",rows:[{density:"-",ucsNatural:"47.7",ucsSaturated:"31.0",softening:"0.65",c:"-",phi:"-"},{density:"-",ucsNatural:"46.9",ucsSaturated:"32.3",softening:"0.69",c:"-",phi:"-"},{density:"-",ucsNatural:"45.7",ucsSaturated:"31.7",softening:"0.69",c:"-",phi:"-"}]},{sampleId:"BYSCK4-8",rows:[{density:"-",ucsNatural:"44.7",ucsSaturated:"33.8",softening:"0.76",c:"-",phi:"-"},{density:"-",ucsNatural:"46.8",ucsSaturated:"34.7",softening:"0.74",c:"-",phi:"-"},{density:"-",ucsNatural:"44.4",ucsSaturated:"36.8",softening:"0.83",c:"-",phi:"-"}]},{sampleId:"BYSCK4-9",rows:[{density:"2.61",ucsNatural:"44.3",ucsSaturated:"33.8",softening:"0.76",c:"-",phi:"-"},{density:"2.60",ucsNatural:"46.4",ucsSaturated:"31.2",softening:"0.67",c:"-",phi:"-"},{density:"2.60",ucsNatural:"47.8",ucsSaturated:"32.8",softening:"0.69",c:"-",phi:"-"}]},{sampleId:"BYSCK8-2",rows:[{density:"2.54",ucsNatural:"46.8",ucsSaturated:"30.5",softening:"0.65",c:"-",phi:"-"},{density:"2.56",ucsNatural:"47.8",ucsSaturated:"29.8",softening:"0.62",c:"-",phi:"-"},{density:"2.54",ucsNatural:"47.6",ucsSaturated:"31.2",softening:"0.66",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["9","18","18","18","1","1"]},{label:"最大值",values:["2.61","47.90","36.80","0.83","2.72","33.60"]},{label:"最小值",values:["2.54","44.10","29.40","0.62","2.72","33.60"]},{label:"平均值",values:["2.57","46.41","32.15","0.69","2.72","33.60"]},{label:"标准差",values:["","1.363","1.796","","",""]},{label:"变异系数",values:["","0.029","0.056","","",""]},{label:"统计修正系数",values:["","0.988","0.977","","",""]},{label:"标准值",values:["","45.84","31.40","","",""]}],remark:""},Ze={id:"1-1-2",tableNo:"1.1.2-2",title:"中风化泥岩物理力学性质统计表（T1f4）",samples:[{sampleId:"BYSCK4-3",rows:[{density:"2.62",ucsNatural:"23.3",ucsSaturated:"10.4",softening:"0.45",c:"-",phi:"-"},{density:"2.63",ucsNatural:"20.7",ucsSaturated:"12.6",softening:"0.61",c:"-",phi:"-"},{density:"2.61",ucsNatural:"22.0",ucsSaturated:"13.8",softening:"0.63",c:"-",phi:"-"}]},{sampleId:"BYSCK4-4",rows:[{density:"-",ucsNatural:"19.2",ucsSaturated:"11.5",softening:"0.60",c:"-",phi:"-"},{density:"-",ucsNatural:"18.7",ucsSaturated:"12.9",softening:"0.69",c:"-",phi:"-"},{density:"-",ucsNatural:"24.4",ucsSaturated:"12.2",softening:"0.50",c:"-",phi:"-"}]},{sampleId:"BYSCK4-5",rows:[{density:"2.64",ucsNatural:"21.8",ucsSaturated:"12.0",softening:"0.55",c:"-",phi:"-"},{density:"2.67",ucsNatural:"22.4",ucsSaturated:"10.5",softening:"0.47",c:"-",phi:"-"},{density:"2.63",ucsNatural:"24.6",ucsSaturated:"12.2",softening:"0.50",c:"-",phi:"-"}]},{sampleId:"BYSCK4-6",rows:[{density:"-",ucsNatural:"20.8",ucsSaturated:"10.0",softening:"0.48",c:"-",phi:"-"},{density:"-",ucsNatural:"20.0",ucsSaturated:"11.7",softening:"0.59",c:"-",phi:"-"},{density:"-",ucsNatural:"22.0",ucsSaturated:"12.5",softening:"0.57",c:"-",phi:"-"}]},{sampleId:"BYSCK4-7",rows:[{density:"2.67",ucsNatural:"17.7",ucsSaturated:"10.4",softening:"0.59",c:"-",phi:"-"},{density:"2.69",ucsNatural:"20.5",ucsSaturated:"12.3",softening:"0.60",c:"-",phi:"-"},{density:"2.70",ucsNatural:"19.2",ucsSaturated:"10.2",softening:"0.53",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["9","15","15","15","",""]},{label:"最大值",values:["2.70","24.60","13.80","0.69","",""]},{label:"最小值",values:["2.61","17.70","10.00","0.45","",""]},{label:"平均值",values:["2.65","21.15","11.68","0.56","",""]},{label:"标准差",values:["","2.037","1.142","","",""]},{label:"变异系数",values:["","0.096","0.098","","",""]},{label:"统计修正系数",values:["","0.956","0.955","","",""]},{label:"标准值",values:["","20.21","11.15","","",""]}],remark:""},$e={id:"1-1-3",tableNo:"4.1.2-3",title:"中风化灰岩物理力学性质统计表（T1f3）",samples:[{sampleId:"BYSCK4-1",rows:[{density:"2.58",ucsNatural:"42.6",ucsSaturated:"32.2",softening:"0.76",c:"-",phi:"-"},{density:"2.60",ucsNatural:"46.5",ucsSaturated:"33.7",softening:"0.72",c:"-",phi:"-"},{density:"2.59",ucsNatural:"44.0",ucsSaturated:"32.7",softening:"0.74",c:"-",phi:"-"}]},{sampleId:"BYSCK4-2",rows:[{density:"-",ucsNatural:"44.6",ucsSaturated:"31.1",softening:"0.70",c:"-",phi:"-"},{density:"-",ucsNatural:"42.6",ucsSaturated:"30.5",softening:"0.72",c:"-",phi:"-"},{density:"-",ucsNatural:"42.3",ucsSaturated:"32.6",softening:"0.77",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["3","6","6","6","",""]},{label:"最大值",values:["2.60","46.50","33.70","0.77","",""]},{label:"最小值",values:["2.58","42.30","30.50","0.70","",""]},{label:"平均值",values:["2.59","43.77","32.13","0.73","",""]},{label:"标准差",values:["","1.618","1.160","","",""]},{label:"变异系数",values:["","0.037","0.036","","",""]},{label:"统计修正系数",values:["","0.969","0.970","","",""]},{label:"标准值",values:["","42.43","31.18","","",""]}],remark:""},Ae={id:"1-1-4",tableNo:"4.1.2-4",title:"中风化泥灰岩物理力学性质统计表（T1f1）",samples:[{sampleId:"BYSCK7-1",rows:[{density:"2.58",ucsNatural:"26.0",ucsSaturated:"18.3",softening:"0.70",c:"-",phi:"-"},{density:"2.56",ucsNatural:"23.6",ucsSaturated:"18.7",softening:"0.79",c:"-",phi:"-"},{density:"2.57",ucsNatural:"24.4",ucsSaturated:"19.6",softening:"0.80",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["3","3","3","3","",""]},{label:"最大值",values:["2.58","26.00","19.60","0.80","",""]},{label:"最小值",values:["2.56","23.60","18.30","0.70","",""]},{label:"平均值",values:["2.57","24.67","18.87","0.77","",""]},{label:"标准差",values:["","1.222","0.666","","",""]},{label:"变异系数",values:["","0.050","0.035","","",""]},{label:"统计修正系数",values:["","0.926","0.947","","",""]},{label:"标准值",values:["","22.83","17.87","","",""]}],remark:""},De={id:"1-1-5",tableNo:"4.1.2-5",title:"中风化灰岩物理力学性质统计表（P3c）",samples:[{sampleId:"BYSCK7-2",rows:[{density:"-",ucsNatural:"53.0",ucsSaturated:"34.5",softening:"0.65",c:"-",phi:"-"},{density:"-",ucsNatural:"51.7",ucsSaturated:"36.4",softening:"0.70",c:"-",phi:"-"},{density:"-",ucsNatural:"51.8",ucsSaturated:"37.9",softening:"0.73",c:"-",phi:"-"}]},{sampleId:"BYSCK7-3",rows:[{density:"2.59",ucsNatural:"51.1",ucsSaturated:"36.4",softening:"0.71",c:"-",phi:"-"},{density:"2.60",ucsNatural:"49.3",ucsSaturated:"33.9",softening:"0.69",c:"-",phi:"-"},{density:"2.60",ucsNatural:"52.1",ucsSaturated:"35.4",softening:"0.68",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["3","6","6","6","",""]},{label:"最大值",values:["2.60","53.00","37.90","0.73","",""]},{label:"最小值",values:["2.59","49.30","33.90","0.65","",""]},{label:"平均值",values:["2.60","51.50","35.75","0.69","",""]},{label:"标准差",values:["","1.244","1.454","","",""]},{label:"变异系数",values:["","0.024","0.041","","",""]},{label:"统计修正系数",values:["","0.980","0.966","","",""]},{label:"标准值",values:["","50.47","34.55","","",""]}],remark:""},Be={id:"1-1-6",tableNo:"4.1.2-6",title:"中风化灰岩物理力学性质统计表（P3l）",schema:"rockProperties",samples:[{sampleId:"BYSCK7-4",rows:[{density:"2.62",ucsNatural:"54.5",ucsSaturated:"39.0",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.61",ucsNatural:"57.3",ucsSaturated:"36.5",softening:"0.64",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.63",ucsNatural:"56.9",ucsSaturated:"38.1",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"BYSCK7-6",rows:[{density:"",ucsNatural:"51.6",ucsSaturated:"36.6",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"57.0",ucsSaturated:"37.5",softening:"0.66",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"53.6",ucsSaturated:"38.8",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-5",shearRowspan:3,rows:[{density:"2.665",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.66",shearPhi:"47.7",shearC:"6.22",elasticModulus:"",poisson:""},{density:"2.674",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.68",elasticModulus:"",poisson:""},{density:"2.669",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.60",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-6",rows:[{density:"",ucsNatural:"52.2",ucsSaturated:"45.2",softening:"0.87",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"50.2",ucsSaturated:"44.1",softening:"0.88",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"54.1",ucsSaturated:"47.1",softening:"0.87",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-7",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"56295.5",poisson:"0.11"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"54891.3",poisson:"0.11"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"55511.1",poisson:"0.11"}]},{sampleId:"XSBYSZK03-3",shearRowspan:3,rows:[{density:"2.632",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.41",shearPhi:"47.2",shearC:"5.62",elasticModulus:"",poisson:""},{density:"2.624",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.36",elasticModulus:"",poisson:""},{density:"2.620",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.35",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-12",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"68256.4",poisson:"0.10"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"69842.1",poisson:"0.13"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"68368.4",poisson:"0.08"}]},{sampleId:"XSBYSZK01-13",rows:[{density:"",ucsNatural:"40.0",ucsSaturated:"33.2",softening:"0.83",tensile:"",shearPhi:"",shearC:"",elasticModulus:"68256.4",poisson:"0.10"},{density:"",ucsNatural:"41.1",ucsSaturated:"34.5",softening:"0.84",tensile:"",shearPhi:"",shearC:"",elasticModulus:"69842.1",poisson:"0.13"},{density:"",ucsNatural:"42.2",ucsSaturated:"35.5",softening:"0.84",tensile:"",shearPhi:"",shearC:"",elasticModulus:"68368.4",poisson:"0.08"}]}],stats:[{label:"统计件数",values:["9","12","12","12","6","2","2","9","9"]},{label:"平均值",values:["2.638","50.9","38.8","0.8","2.51","47.5","5.92","64403.5","0.11"]},{label:"最小值",values:["2.610","40.0","33.2","0.6","2.35","47.2","5.62","54891.3","0.08"]},{label:"最大值",values:["2.674","57.3","47.1","0.9","2.68","47.7","6.22","69842.1","0.13"]},{label:"标准差",values:["","6.31","4.38","0.09","","","","",""]},{label:"变异系数",values:["","0.12","0.11","0.12","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","47.6","36.5","0.7","","","","",""]}],remark:""},ze={id:"1-1-7",tableNo:"4.1.2-7",title:"中风化炭质页岩物理力学性质统计表（P3l）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK01-3",shearRowspan:3,rows:[{density:"2.532",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.18",shearPhi:"33.0",shearC:"0.40",elasticModulus:"",poisson:""},{density:"2.535",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.16",elasticModulus:"",poisson:""},{density:"2.529",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.16",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-4",rows:[{density:"",ucsNatural:"3.5",ucsSaturated:"1.9",softening:"0.53",tensile:"",shearPhi:"",shearC:"",elasticModulus:"845.3",poisson:"0.35"},{density:"",ucsNatural:"3.6",ucsSaturated:"1.9",softening:"0.54",tensile:"",shearPhi:"",shearC:"",elasticModulus:"917.7",poisson:"0.36"},{density:"",ucsNatural:"3.5",ucsSaturated:"1.8",softening:"0.51",tensile:"",shearPhi:"",shearC:"",elasticModulus:"953.0",poisson:"0.36"}]}],stats:[{label:"统计件数",values:["3","3","3","3","3","1","1","3","3"]},{label:"平均值",values:["2.532","3.6","1.9","0.5","0.17","33.0","0.40","905.3","0.36"]},{label:"最小值",values:["2.529","3.5","1.8","0.5","0.16","33.0","0.40","845.3","0.35"]},{label:"最大值",values:["2.535","3.6","1.9","0.5","0.18","33.0","0.40","953.0","0.36"]},{label:"标准差",values:["","0.05","0.08","0.02","","","","",""]},{label:"变异系数",values:["","0.01","0.04","0.03","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","","","","","","","",""]}],remark:""},Oe={id:"1-1-8",tableNo:"4.1.2-8",title:"中风化铝土页岩物理力学性质统计表（P3l）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK01-10",rows:[{density:"",ucsNatural:"4.2",ucsSaturated:"2.3",softening:"0.55",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"3.7",ucsSaturated:"2.1",softening:"0.58",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"3.5",ucsSaturated:"2.0",softening:"0.57",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-6",rows:[{density:"",ucsNatural:"11.1",ucsSaturated:"7.3",softening:"0.66",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"13.3",ucsSaturated:"8.9",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"12.5",ucsSaturated:"8.3",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["","6","6","6","","","","",""]},{label:"平均值",values:["","8.0","5.2","0.6","","","","",""]},{label:"最小值",values:["","3.5","2.0","0.6","","","","",""]},{label:"最大值",values:["","13.3","8.9","0.7","","","","",""]},{label:"标准差",values:["","4.72","3.33","0.05","","","","",""]},{label:"变异系数",values:["","0.59","0.64","0.09","","","","",""]},{label:"小值平均值",values:["","3.8","2.2","","","","","",""]},{label:"标准值",values:["","4.2","2.4","0.6","","","","",""]}],remark:""},Fe={id:"1-1-9",tableNo:"4.1.2-9",title:"中风化页岩物理力学性质统计表（P3l 背斜西翼）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK01-11",rows:[{density:"",ucsNatural:"5.2",ucsSaturated:"3.4",softening:"0.64",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"6.6",ucsSaturated:"4.2",softening:"0.64",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"6.3",ucsSaturated:"4.1",softening:"0.65",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["","3","3","3","","","","",""]},{label:"平均值",values:["","6.1","3.9","0.6","","","","",""]},{label:"最小值",values:["","5.2","3.4","0.6","","","","",""]},{label:"最大值",values:["","6.6","4.2","0.7","","","","",""]},{label:"标准差",values:["","0.74","0.48","0.01","","","","",""]},{label:"变异系数",values:["","0.12","0.12","0.01","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","","","","","","","",""]}],remark:""},qe={id:"1-1-10",tableNo:"4.1.2-10",title:"中风化页岩物理力学性质统计表（P3l 背斜东翼）",samples:[{sampleId:"BYSCK7-7",rows:[{density:"2.64",ucsNatural:"24.2",ucsSaturated:"15.8",softening:"0.65",c:"-",phi:"-"},{density:"2.67",ucsNatural:"22.4",ucsSaturated:"16.9",softening:"0.75",c:"-",phi:"-"},{density:"2.65",ucsNatural:"22.8",ucsSaturated:"17.1",softening:"0.75",c:"-",phi:"-"}]},{sampleId:"BYSCK7-5",rows:[{density:"-",ucsNatural:"23.4",ucsSaturated:"13.9",softening:"0.59",c:"-",phi:"-"},{density:"-",ucsNatural:"26.0",ucsSaturated:"15.6",softening:"0.60",c:"-",phi:"-"},{density:"-",ucsNatural:"24.9",ucsSaturated:"15.5",softening:"0.62",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["3","6","6","6","",""]},{label:"最大值",values:["2.67","26.00","17.10","0.75","",""]},{label:"最小值",values:["2.64","22.40","13.90","0.59","",""]},{label:"平均值",values:["2.65","23.95","15.80","0.66","",""]},{label:"标准差",values:["","1.356","1.152","","",""]},{label:"变异系数",values:["","0.057","0.073","","",""]},{label:"统计修正系数",values:["","0.953","0.940","","",""]},{label:"标准值",values:["","22.83","14.85","","",""]}],remark:""},Ye={id:"1-1-11",tableNo:"4.1.2-11",title:"中风化灰岩物理力学性质统计表（P2m）",schema:"rockProperties",samples:[{sampleId:"BYSCK7-8",rows:[{density:"2.57",ucsNatural:"49.8",ucsSaturated:"31.8",softening:"0.64",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.56",ucsNatural:"47.9",ucsSaturated:"33.4",softening:"0.70",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.55",ucsNatural:"46.9",ucsSaturated:"32.8",softening:"0.70",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"BYSCK7-9",rows:[{density:"2.58",ucsNatural:"47.7",ucsSaturated:"34.4",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.59",ucsNatural:"46.9",ucsSaturated:"33.2",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.61",ucsNatural:"45.7",ucsSaturated:"32.5",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK01-2",rows:[{density:"",ucsNatural:"42.2",ucsSaturated:"34.6",softening:"0.82",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"40.1",ucsSaturated:"32.9",softening:"0.82",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"44.1",ucsSaturated:"36.2",softening:"0.82",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-7",rows:[{density:"",ucsNatural:"50.2",ucsSaturated:"45.1",softening:"0.90",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"50.2",ucsSaturated:"43.3",softening:"0.86",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"46.6",ucsSaturated:"41.1",softening:"0.88",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-8",shearRowspan:3,rows:[{density:"2.638",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.75",shearPhi:"38.0",shearC:"1.65",elasticModulus:"",poisson:""},{density:"2.624",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.62",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.614",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.65",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["9","12","12","12","3","1","1","",""]},{label:"平均值",values:["2.593","46.5","35.9","0.8","0.67","38.0","1.65","",""]},{label:"最小值",values:["2.550","40.1","31.8","0.6","0.62","38.0","1.65","",""]},{label:"最大值",values:["2.638","50.2","45.1","0.9","0.75","38.0","1.65","",""]},{label:"标准差",values:["","3.13","4.58","0.09","","","","",""]},{label:"变异系数",values:["","0.07","0.13","0.11","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","44.9","33.5","0.7","","","","",""]}],remark:""},Ve={id:"1-1-12",tableNo:"4.1.2-12",title:"中风化灰岩夹页岩物理力学性质统计表（P2m）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK03-9",rows:[{density:"",ucsNatural:"13.3",ucsSaturated:"9.4",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"15.2",ucsSaturated:"10.5",softening:"0.69",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"14.5",ucsSaturated:"10.1",softening:"0.70",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-11",rows:[{density:"",ucsNatural:"23.3",ucsSaturated:"18.5",softening:"0.79",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"22.2",ucsSaturated:"16.3",softening:"0.73",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"25.2",ucsSaturated:"18.2",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-12",rows:[{density:"",ucsNatural:"25.2",ucsSaturated:"18.0",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"24.2",ucsSaturated:"17.5",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"25.1",ucsSaturated:"18.8",softening:"0.75",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-13",rows:[{density:"",ucsNatural:"9.7",ucsSaturated:"7.1",softening:"0.74",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"10.2",ucsSaturated:"6.9",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"11.1",ucsSaturated:"8.2",softening:"0.74",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-14",rows:[{density:"",ucsNatural:"16.6",ucsSaturated:"12.5",softening:"0.75",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"16.8",ucsSaturated:"11.5",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"16.6",ucsSaturated:"11.1",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-15",rows:[{density:"",ucsNatural:"16.5",ucsSaturated:"12.0",softening:"0.73",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"20.2",ucsSaturated:"13.6",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"16.3",ucsSaturated:"11.5",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-10",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"46744.2",poisson:"0.14"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"44272.7",poisson:"0.16"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"44386.4",poisson:"0.14"}]}],stats:[{label:"统计件数",values:["","18","18","18","","","","3","3"]},{label:"平均值",values:["","17.9","12.9","0.7","","","","45134.4","0.14"]},{label:"最小值",values:["","9.7","6.9","0.7","","","","44272.7","0.14"]},{label:"最大值",values:["","25.2","18.8","0.8","","","","46744.2","0.16"]},{label:"标准差",values:["","5.28","4.05","","","","","",""]},{label:"变异系数",values:["","0.29","0.31","","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","15.7","11.2","","","","","",""]}],remark:""},He={id:"1-1-13",tableNo:"4.1.2-13",title:"中风化灰岩物理力学性质统计表（P2q）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK02-1",shearRowspan:3,rows:[{density:"2.594",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.48",shearPhi:"43.8",shearC:"3.47",elasticModulus:"",poisson:""},{density:"2.600",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.50",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.606",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.41",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-2",rows:[{density:"",ucsNatural:"45.2",ucsSaturated:"38.2",softening:"0.85",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"44.2",ucsSaturated:"36.3",softening:"0.82",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"42.6",ucsSaturated:"34.1",softening:"0.80",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-3",rows:[{density:"",ucsNatural:"38.5",ucsSaturated:"31.0",softening:"0.81",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"35.2",ucsSaturated:"27.5",softening:"0.78",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"37.8",ucsSaturated:"30.0",softening:"0.79",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-4",shearRowspan:3,rows:[{density:"2.654",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.52",shearPhi:"44.4",shearC:"3.68",elasticModulus:"",poisson:""},{density:"2.642",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.51",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.636",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.62",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-5",rows:[{density:"",ucsNatural:"31.3",ucsSaturated:"25.2",softening:"0.81",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"30.2",ucsSaturated:"22.0",softening:"0.73",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"34.1",ucsSaturated:"27.1",softening:"0.79",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-6",rows:[{density:"",ucsNatural:"36.3",ucsSaturated:"29.1",softening:"0.80",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"35.2",ucsSaturated:"28.1",softening:"0.80",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"36.9",ucsSaturated:"29.6",softening:"0.80",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-7",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"64850.0",poisson:"0.10"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"65500.0",poisson:"0.13"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"63707.3",poisson:"0.10"}]},{sampleId:"XSBYSZK02-8",shearRowspan:3,rows:[{density:"2.639",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.05",shearPhi:"45.3",shearC:"4.76",elasticModulus:"",poisson:""},{density:"2.631",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.92",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.638",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"2.02",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK02-9",rows:[{density:"",ucsNatural:"31.8",ucsSaturated:"23.3",softening:"0.73",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"33.3",ucsSaturated:"25.6",softening:"0.77",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"30.2",ucsSaturated:"24.2",softening:"0.80",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-16",rows:[{density:"",ucsNatural:"42.0",ucsSaturated:"34.6",softening:"0.82",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"40.2",ucsSaturated:"33.5",softening:"0.83",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"38.1",ucsSaturated:"32.2",softening:"0.85",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-17",shearRowspan:3,rows:[{density:"2.614",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.02",shearPhi:"41.0",shearC:"2.45",elasticModulus:"",poisson:""},{density:"2.611",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.00",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.606",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"1.05",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["12","18","18","18","12","4","4","3","3"]},{label:"平均值",values:["2.623","36.8","29.5","0.8","1.51","43.6","3.59","64685.8","0.11"]},{label:"最小值",values:["2.594","30.2","22.0","0.7","1.00","41.0","2.45","63707.3","0.10"]},{label:"最大值",values:["2.654","45.2","38.2","0.8","2.05","45.3","4.76","65500.0","0.13"]},{label:"标准差",values:["","4.67","4.62","0.03","","","","",""]},{label:"变异系数",values:["","0.13","0.16","0.04","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","34.9","27.6","","","","","",""]}],remark:""},je={id:"1-1-14",tableNo:"4.1.2-14",title:"中风化页岩物理力学性质统计表（P1l）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK03-18",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"18440.0",poisson:"0.28"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"19104.2",poisson:"0.27"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"19352.9",poisson:"0.27"}]},{sampleId:"XSBYSZK03-19",shearRowspan:3,rows:[{density:"2.635",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.68",shearPhi:"39.4",shearC:"1.74",elasticModulus:"",poisson:""},{density:"2.641",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.77",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.628",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.75",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-20",rows:[{density:"",ucsNatural:"12.2",ucsSaturated:"8.3",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"11.1",ucsSaturated:"7.5",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"10.6",ucsSaturated:"7.2",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["3","3","3","3","3","1","1","3","3"]},{label:"平均值",values:["2.635","11.3","7.7","0.7","0.73","39.4","1.74","18965.7","0.28"]},{label:"最小值",values:["2.628","10.6","7.2","0.7","0.68","39.4","1.74","18440.0","0.27"]},{label:"最大值",values:["2.641","12.2","8.3","0.7","0.77","39.4","1.74","19352.9","0.28"]},{label:"标准差",values:["","0.82","0.60","0.00","","","","",""]},{label:"变异系数",values:["","0.07","0.08","0.01","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","","","","","","","",""]}],remark:""},Ue={id:"1-1-15",tableNo:"4.1.2-15",title:"中风化页岩物理力学性质统计表（S2h）",schema:"rockProperties",samples:[{sampleId:"BYSCK6-1",rows:[{density:"",ucsNatural:"26.9",ucsSaturated:"20",softening:"0.74",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"25.5",ucsSaturated:"18",softening:"0.71",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"27.1",ucsSaturated:"18.2",softening:"0.67",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"BYSCK6-2",rows:[{density:"2.660",ucsNatural:"27.8",ucsSaturated:"21.8",softening:"0.78",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.670",ucsNatural:"27.6",ucsSaturated:"19.8",softening:"0.72",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.640",ucsNatural:"33.2",ucsSaturated:"20.8",softening:"0.63",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"BYSCK6-3",rows:[{density:"",ucsNatural:"33.2",ucsSaturated:"25.5",softening:"0.77",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"32.7",ucsSaturated:"27.2",softening:"0.83",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"30.2",ucsSaturated:"27.6",softening:"0.91",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"BYSCK6-4",rows:[{density:"2.660",ucsNatural:"30.2",ucsSaturated:"22.4",softening:"0.74",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.670",ucsNatural:"26.8",ucsSaturated:"22.3",softening:"0.83",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.670",ucsNatural:"37.1",ucsSaturated:"21.7",softening:"0.58",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-21",rows:[{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"23204.5",poisson:"0.27"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"24523.8",poisson:"0.26"},{density:"",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"",shearPhi:"",shearC:"",elasticModulus:"25243.9",poisson:"0.27"}]},{sampleId:"XSBYSZK03-22",shearRowspan:3,rows:[{density:"2.629",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.78",shearPhi:"38.0",shearC:"1.78",elasticModulus:"",poisson:""},{density:"2.620",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.78",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"2.619",ucsNatural:"",ucsSaturated:"",softening:"",tensile:"0.79",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]},{sampleId:"XSBYSZK03-23",rows:[{density:"",ucsNatural:"9.9",ucsSaturated:"6.1",softening:"0.62",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"9.1",ucsSaturated:"6.3",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"9.6",ucsSaturated:"6.1",softening:"0.64",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["9","15","15","15","3","1","1","3","3"]},{label:"平均值",values:["2.649","25.8","18.9","0.7","0.78","38.0","1.78","24324.1","0.27"]},{label:"最小值",values:["2.619","9.1","6.1","0.6","0.78","38.0","1.78","23204.5","0.26"]},{label:"最大值",values:["2.670","37.1","27.6","0.9","0.79","38.0","1.78","25243.9","0.27"]},{label:"标准差",values:["","8.98","7.18","0.09","","","","",""]},{label:"变异系数",values:["","0.35","0.38","0.13","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","21.7","15.6","0.7","","","","",""]}],remark:""},Xe={id:"1-1-16",tableNo:"4.1.2-16",title:"中风化白云质灰岩物理力学性质统计表（T1j2）",samples:[{sampleId:"BYSCK9",rows:[{density:"2.74",ucsNatural:"30.1",ucsSaturated:"24.6",softening:"0.82",c:"-",phi:"-"},{density:"2.72",ucsNatural:"32.5",ucsSaturated:"22.7",softening:"0.70",c:"-",phi:"-"},{density:"2.69",ucsNatural:"31.2",ucsSaturated:"24.9",softening:"0.80",c:"-",phi:"-"}]},{sampleId:"BYSCK10-1",triaxialRowspan:3,rows:[{density:"-",ucsNatural:"-",ucsSaturated:"-",softening:"-",c:"2.72",phi:"33.6"},{density:"-",ucsNatural:"-",ucsSaturated:"-",softening:"-",c:"-",phi:"-"},{density:"-",ucsNatural:"-",ucsSaturated:"-",softening:"-",c:"-",phi:"-"}]},{sampleId:"BYSCK10-2",rows:[{density:"-",ucsNatural:"34.8",ucsSaturated:"27.1",softening:"0.78",c:"-",phi:"-"},{density:"-",ucsNatural:"37.3",ucsSaturated:"26.1",softening:"0.70",c:"-",phi:"-"},{density:"-",ucsNatural:"33.5",ucsSaturated:"26.5",softening:"0.79",c:"-",phi:"-"}]}],stats:[{label:"样本数",values:["3","6","6","6","1","1"]},{label:"最大值",values:["2.74","37.28","27.08","0.82","2.72","33.60"]},{label:"最小值",values:["2.69","30.13","22.73","0.70","2.72","33.60"]},{label:"平均值",values:["2.72","33.25","25.32","0.76","2.72","33.60"]},{label:"标准差",values:["","2.577","1.573","","",""]},{label:"变异系数",values:["","0.077","0.062","","",""]},{label:"统计修正系数",values:["","0.936","0.949","","",""]},{label:"标准值",values:["","31.12","24.02","","",""]}],remark:""},We={id:"1-1-17",tableNo:"4.2.1-16",title:"中风化页岩物理力学性质统计表（断层角砾岩）",schema:"rockProperties",samples:[{sampleId:"XSBYSZK01-8",rows:[{density:"",ucsNatural:"17.5",ucsSaturated:"12.1",softening:"0.69",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"16.6",ucsSaturated:"12.1",softening:"0.73",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""},{density:"",ucsNatural:"16.8",ucsSaturated:"11.5",softening:"0.68",tensile:"",shearPhi:"",shearC:"",elasticModulus:"",poisson:""}]}],stats:[{label:"统计件数",values:["","3","3","3","","","","",""]},{label:"平均值",values:["","17.0","11.9","0.7","","","","",""]},{label:"最小值",values:["","16.6","11.5","0.7","","","","",""]},{label:"最大值",values:["","17.5","12.1","0.7","","","","",""]},{label:"标准差",values:["","0.47","0.35","0.02","","","","",""]},{label:"变异系数",values:["","0.03","0.03","0.03","","","","",""]},{label:"小值平均值",values:["","","","","","","","",""]},{label:"标准值",values:["","","","","","","","",""]}],remark:""},Qe={id:"1-2-1",tableNo:"4.2.2-1",title:"进出洞口钻孔物探声波测井测试成果表",schema:"boreholeLog",headers:[{key:"holeId",label:"孔 号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpAvg",label:"Vp平均速度(m/s)"},{key:"blockVelocity",label:"岩块波速(m/s)"},{key:"kv",label:"岩体完整性系数Kv"},{key:"kvCommon",label:"岩体完整性系数常见值Kv"},{key:"integrity",label:"完整性程度"}],groups:[{holeId:"BYSCK2",rows:[{depthRange:"1.5～2.5",lithology:"灰岩",vpRange:"4667～4759",vpAvg:"4715",blockVelocity:"6141",kv:"0.58～0.60",kvCommon:"0.59",integrity:"较完整"},{depthRange:"2.5～26.0",lithology:"灰岩",vpRange:"4762～5421",vpAvg:"4989",blockVelocity:"6141",kv:"0.60～0.78",kvCommon:"0.66",integrity:"较完整"}]},{holeId:"BYSCK4",rows:[{depthRange:"6.0～60.0",lithology:"灰岩",vpRange:"4238～5039",vpAvg:"4622",blockVelocity:"5823",kv:"0.53～0.75",kvCommon:"0.63",integrity:"较完整"},{depthRange:"60.0～88.0",lithology:"泥质灰岩",vpRange:"2462～4038",vpAvg:"3043",blockVelocity:"5379",kv:"0.21～0.56",kvCommon:"0.32",integrity:"破碎"},{depthRange:"88.0～118.0",lithology:"泥岩",vpRange:"2926～3748",vpAvg:"3509",blockVelocity:"4386",kv:"0.45～0.73",kvCommon:"0.64",integrity:"较完整"},{depthRange:"118.0～124.0",lithology:"灰岩",vpRange:"4143～4656",vpAvg:"4457",blockVelocity:"5660",kv:"0.54～0.68",kvCommon:"0.62",integrity:"较完整"}]},{holeId:"BYSCK10",rows:[{depthRange:"2.0～3.5",lithology:"白云质灰岩",vpRange:"3542～3720",vpAvg:"3654",blockVelocity:"5416",kv:"0.43～0.47",kvCommon:"0.46",integrity:"较破碎"},{depthRange:"3.5～38.0",lithology:"白云质灰岩",vpRange:"4141～4598",vpAvg:"4400",blockVelocity:"5416",kv:"0.58～0.72",kvCommon:"0.66",integrity:"较完整"}]}],remark:""},Ge={id:"1-2-2",tableNo:"4.2.2-2",title:"洞身段钻孔物探声波测井测试成果表",schema:"boreholeLog",headers:[{key:"holeId",label:"孔 号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpCommon",label:"Vp常见值(m/s)"},{key:"kv",label:"岩体完整性系数Kv"},{key:"kvRange",label:"岩体完整性系数Kv范围值"},{key:"blockVelocity",label:"岩块波速(m/s)"},{key:"weathering",label:"岩体风化程度"}],groups:[{holeId:"BYSCK6",rows:[{depthRange:"74.5～90.3",lithology:"页岩",vpRange:"3080～3313",vpCommon:"3196",kv:"0.59",kvRange:"0.56-0.66",blockVelocity:"4160",weathering:"较完整"},{depthRange:"90.3～110.5",lithology:"页岩",vpRange:"3131～3445",vpCommon:"3288",kv:"0.61",kvRange:"0.57-0.68",blockVelocity:"4209",weathering:"较完整"},{depthRange:"110.5～129.1",lithology:"页岩",vpRange:"3280～3562",vpCommon:"3421",kv:"0.62",kvRange:"0.59-0.67",blockVelocity:"4344",weathering:"较完整"},{depthRange:"129.1～145.4",lithology:"页岩",vpRange:"3190～3553",vpCommon:"3371",kv:"0.63",kvRange:"0.58-0.69",blockVelocity:"4247",weathering:"较完整"},{depthRange:"145.4～160.0",lithology:"页岩",vpRange:"3270～3583",vpCommon:"3426",kv:"0.64",kvRange:"0.59-0.68",blockVelocity:"4282",weathering:"较完整"},{depthRange:"160.0～180.5",lithology:"页岩",vpRange:"3118～3640",vpCommon:"3379",kv:"0.62",kvRange:"0.57-0.69",blockVelocity:"4291",weathering:"较完整"},{depthRange:"180.5～200.2",lithology:"页岩",vpRange:"3221～3604",vpCommon:"3412",kv:"0.64",kvRange:"0.57-0.68",blockVelocity:"4265",weathering:"较完整"},{depthRange:"200.2～220.4",lithology:"页岩",vpRange:"3220～3583",vpCommon:"3401",kv:"0.63",kvRange:"0.58-0.72",blockVelocity:"4284",weathering:"较完整"},{depthRange:"220.4～240.7",lithology:"页岩",vpRange:"3170～3621",vpCommon:"3395",kv:"0.65",kvRange:"0.61-0.74",blockVelocity:"4210",weathering:"较完整"},{depthRange:"240.7～258.1",lithology:"页岩",vpRange:"3244～3566",vpCommon:"3405",kv:"0.64",kvRange:"0.62-0.72",blockVelocity:"4256",weathering:"较完整"},{depthRange:"258.1～277.6",lithology:"页岩",vpRange:"3294～3623",vpCommon:"3458",kv:"0.66",kvRange:"0.59-0.73",blockVelocity:"4256",weathering:"较完整"},{depthRange:"277.6～298.3",lithology:"页岩",vpRange:"3234～3586",vpCommon:"3410",kv:"0.65",kvRange:"0.59-0.78",blockVelocity:"4229",weathering:"较完整"},{depthRange:"298.3～316.2",lithology:"页岩",vpRange:"3150～3650",vpCommon:"3400",kv:"0.64",kvRange:"0.58-0.79",blockVelocity:"4250",weathering:"较完整"},{depthRange:"316.2～335.5",lithology:"页岩",vpRange:"3180～3683",vpCommon:"3431",kv:"0.67",kvRange:"0.57-0.77",blockVelocity:"4191",weathering:"较完整"},{depthRange:"335.5～354.4",lithology:"页岩",vpRange:"3283～3632",vpCommon:"3457",kv:"0.65",kvRange:"0.58-0.76",blockVelocity:"4287",weathering:"较完整"},{depthRange:"354.4～372.6",lithology:"页岩",vpRange:"3281～3790",vpCommon:"3535",kv:"0.66",kvRange:"0.60-0.73",blockVelocity:"4351",weathering:"较完整"},{depthRange:"372.6～390.3",lithology:"页岩",vpRange:"3380～3695",vpCommon:"3537",kv:"0.67",kvRange:"0.58-0.71",blockVelocity:"4321",weathering:"较完整"},{depthRange:"390.3～413.5",lithology:"页岩",vpRange:"3280～3754",vpCommon:"3517",kv:"0.68",kvRange:"0.62-0.74",blockVelocity:"4264",weathering:"较完整"}]}],remark:""},Je={id:"1-2-3",tableNo:"4.2.2-3",title:"洞身段钻孔物探综合测井测试成果表",schema:"boreholeLog",headers:[{key:"holeId",label:"孔 号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpAvg",label:"Vp平均值(m/s)"},{key:"kv",label:"岩体完整性系数Kv值"},{key:"kvRange",label:"岩体完整性系数Kv范围值"},{key:"integrity",label:"岩体完整程度"}],groups:[{holeId:"BYSCK7",rows:[{depthRange:"64.50-85.00",lithology:"灰岩",vpRange:"4225-4842",vpAvg:"4480",kv:"0.64",kvRange:"0.54-0.78",integrity:"较完整"},{depthRange:"85.00-97.00",lithology:"灰岩",vpRange:"4250-4913",vpAvg:"4588",kv:"0.66",kvRange:"0.56-0.80",integrity:"较完整"},{depthRange:"97.00-99.30",lithology:"页岩",vpRange:"2850-3460",vpAvg:"3120",kv:"0.58",kvRange:"0.50-0.70",integrity:"较完整"},{depthRange:"99.30-145.20",lithology:"灰岩",vpRange:"4140-5350",vpAvg:"4520",kv:"0.64",kvRange:"0.56-0.86",integrity:"较完整"},{depthRange:"145.20-146.90",lithology:"页岩",vpRange:"2980-3252",vpAvg:"3104",kv:"0.58",kvRange:"0.55-0.63",integrity:"较完整"},{depthRange:"146.90-151.10",lithology:"灰岩",vpRange:"4302-4900",vpAvg:"4629",kv:"0.67",kvRange:"0.60-0.78",integrity:"较完整"},{depthRange:"151.10-154.40",lithology:"页岩",vpRange:"3026-3240",vpAvg:"3148",kv:"0.59",kvRange:"0.56-0.62",integrity:"较完整"},{depthRange:"154.40-157.80",lithology:"灰岩",vpRange:"4355-4802",vpAvg:"4590",kv:"0.67",kvRange:"0.62-0.73",integrity:"较完整"},{depthRange:"157.80-161.00",lithology:"页岩",vpRange:"3020-3408",vpAvg:"3182",kv:"0.60",kvRange:"0.56-0.71",integrity:"较完整"},{depthRange:"161.00-161.90",lithology:"灰岩",vpRange:"4241-4440",vpAvg:"4333",kv:"0.62",kvRange:"0.59-0.65",integrity:"较完整"},{depthRange:"161.90-162.70",lithology:"页岩",vpRange:"3026-3322",vpAvg:"3150",kv:"0.59",kvRange:"0.56-0.67",integrity:"较完整"},{depthRange:"162.70-169.30",lithology:"灰岩",vpRange:"4286-5106",vpAvg:"4730",kv:"0.70",kvRange:"0.59-0.82",integrity:"较完整"},{depthRange:"169.30-174.60",lithology:"页岩",vpRange:"2920-3508",vpAvg:"3173",kv:"0.60",kvRange:"0.53-0.73",integrity:"较完整"},{depthRange:"174.60-212.70",lithology:"灰岩",vpRange:"4341-4940",vpAvg:"4560",kv:"0.67",kvRange:"0.61-0.80",integrity:"较完整"},{depthRange:"212.70-222.20",lithology:"页岩",vpRange:"2926-3440",vpAvg:"3137",kv:"0.59",kvRange:"0.53-0.72",integrity:"较完整"},{depthRange:"222.20-234.70",lithology:"灰岩",vpRange:"4351-5140",vpAvg:"4760",kv:"0.71",kvRange:"0.59-0.82",integrity:"较完整"},{depthRange:"234.70-241.80",lithology:"页岩",vpRange:"2885-3305",vpAvg:"3140",kv:"0.59",kvRange:"0.52-0.66",integrity:"较完整"},{depthRange:"241.80-245.00",lithology:"粘土岩",vpRange:"2755-3102",vpAvg:"2938",kv:"0.57",kvRange:"0.53-0.63",integrity:"较完整"},{depthRange:"245.00-359.30",lithology:"灰岩",vpRange:"4020-5273",vpAvg:"4592",kv:"0.67",kvRange:"0.51-0.84",integrity:"较完整"}]}],remark:""},et={id:"1-2-4",tableNo:"4.2.2-5",title:"洞身段钻孔物探综合测井测试成果表（一）",schema:"boreholeLog",headers:[{key:"holeId",label:"孔号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpAvg",label:"Vp平均值(m/s)"},{key:"avgKv",label:"平均Kv值"},{key:"kvRange",label:"岩体完整性系数Kv范围值"},{key:"blockVelocity",label:"岩块波速(m/s)"},{key:"integrity",label:"岩体完整程度"}],groups:[{holeId:"XSBYSZK01",rows:[{depthRange:"78.8-102.0",lithology:"炭质页岩",vpRange:"2221～3241",vpAvg:"2897",avgKv:"0.57",kvRange:"0.34～0.72",blockVelocity:"3821",integrity:"较完整"},{depthRange:"102.0-125.7",lithology:"灰岩",vpRange:"2079～4287",vpAvg:"3886",avgKv:"0.65",kvRange:"0.18～0.79",blockVelocity:"4835",integrity:"较完整"},{depthRange:"125.7-138.3",lithology:"页岩",vpRange:"2118～3687",vpAvg:"3315",avgKv:"0.6",kvRange:"0.25～0.74",blockVelocity:"4278",integrity:"较完整"},{depthRange:"138.3-205.0",lithology:"灰岩",vpRange:"2077～4232",vpAvg:"3987",avgKv:"0.66",kvRange:"0.18～0.74",blockVelocity:"4914",integrity:"较完整"},{depthRange:"205.0-213.4",lithology:"角砾岩",vpRange:"2022～3965",vpAvg:"3389",avgKv:"0.56",kvRange:"0.2～0.77",blockVelocity:"4525",integrity:"较完整"},{depthRange:"213.4-216.5",lithology:"铝土岩",vpRange:"1810～3156",vpAvg:"2874",avgKv:"0.57",kvRange:"0.22～0.68",blockVelocity:"3816",integrity:"较完整"},{depthRange:"216.5-228.3",lithology:"页岩",vpRange:"2004～3334",vpAvg:"3359",avgKv:"0.62",kvRange:"0.22～0.61",blockVelocity:"4252",integrity:"较完整"},{depthRange:"228.3-250.47",lithology:"灰岩",vpRange:"2913～3512",vpAvg:"4038",avgKv:"0.65",kvRange:"0.34～0.49",blockVelocity:"4998",integrity:"较完整"},{depthRange:"250.47-255.17",lithology:"采空区",vpRange:"898～1012",vpAvg:"976",avgKv:"0.04",kvRange:"0.03～0.04",blockVelocity:"4935",integrity:"破碎"},{depthRange:"255.17-270.37",lithology:"灰岩",vpRange:"2286～4568",vpAvg:"3857",avgKv:"0.61",kvRange:"0.21～0.86",blockVelocity:"4935",integrity:"较完整"}]}],remark:""},tt={id:"1-2-5",tableNo:"4.2.2-5",title:"洞身段钻孔物探综合测井测试成果表（二）",schema:"boreholeLog",headers:[{key:"holeId",label:"孔号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpAvg",label:"Vp平均值(m/s)"},{key:"avgKv",label:"平均Kv值"},{key:"kvRange",label:"岩体完整性系数Kv范围值"},{key:"blockVelocity",label:"岩块波速(m/s)"},{key:"integrity",label:"岩体完整程度"}],groups:[{holeId:"XSBYSZK02",rows:[{depthRange:"224.6-375.0",lithology:"灰岩",vpRange:"3276～4863",vpAvg:"4126",avgKv:"0.63",kvRange:"0.52～0.66",blockVelocity:"5198",integrity:"较完整"}]}],remark:""},st={id:"1-2-6",tableNo:"4.2.2-6",title:"洞身段钻孔物探综合测井测试成果表",schema:"boreholeLog",headers:[{key:"holeId",label:"孔号"},{key:"depthRange",label:"测试范围(m)"},{key:"lithology",label:"岩性"},{key:"vpRange",label:"Vp速度范围(m/s)"},{key:"vpAvg",label:"Vp平均值(m/s)"},{key:"avgKv",label:"平均Kv值"},{key:"kvRange",label:"岩体完整性系数Kv范围值"},{key:"blockVelocity",label:"岩块波速(m/s)"},{key:"integrity",label:"岩体完整程度"}],groups:[{holeId:"XSBYSZK03",rows:[{depthRange:"110.0-376.8",lithology:"灰岩",vpRange:"1710～4512",vpAvg:"4376",avgKv:"0.68",kvRange:"0.1～0.72",blockVelocity:"5320",integrity:"较完整"},{depthRange:"376.8-561.4",lithology:"灰岩",vpRange:"1110～4412",vpAvg:"3960",avgKv:"0.65",kvRange:"0.05～0.8",blockVelocity:"4918",integrity:"较完整"},{depthRange:"561.4-582.4",lithology:"页岩",vpRange:"1525～3745",vpAvg:"3376",avgKv:"0.62",kvRange:"0.13～0.77",blockVelocity:"4280",integrity:"较完整"},{depthRange:"582.4-583.3",lithology:"煤层",vpRange:"1079～2887",vpAvg:"2582",avgKv:"0.41",kvRange:"0.07～0.52",blockVelocity:"4021",integrity:"较破碎"},{depthRange:"583.3-605.0",lithology:"页岩",vpRange:"1996～3700",vpAvg:"3388",avgKv:"0.63",kvRange:"0.22～0.75",blockVelocity:"4278",integrity:"较完整"},{depthRange:"605.0-622.8",lithology:"页岩",vpRange:"2077～3632",vpAvg:"3257",avgKv:"0.6",kvRange:"0.24～0.74",blockVelocity:"4214",integrity:"较完整"}]}],remark:""},at={id:"1-3-1",tableNo:"1.3",title:"隧道设计参数建议值一览表",schema:"matrixTable",headerRows:[[{t:"岩土名称",rs:2},{t:"结构类型",rs:2},{t:"天然度(g/cm3)",rs:2},{t:"抗压强度(MPa)",cs:2},{t:"抗拉强度MPa",rs:2},{t:"抗剪强度",cs:2},{t:"弹性模量(104MPa)",rs:2},{t:"泊松比",rs:2},{t:"弹性抗力系数（MPa/m）",rs:2},{t:"容许承载力(kPa)",cs:2},{t:"基底摩擦系数",rs:2}],[{t:"天然"},{t:"饱和"},{t:"C(kPa)"},{t:"φ(°)"},{t:"［σ0］"},{t:"［C］"}]],rows:[["T1j2白云质灰岩","中厚层状","2.72","31.1","24.0","","409","28.6","","0.30","300","1300","0.55"],["T1j1灰岩","中厚层状","2.57","45.8","31.4","","408","26.6","","0.28","500","1800","0.60"],["T1f4泥岩","中厚层状","2.65","20.2","11.2","","","","","0.35","200","1000","0.50"],["T1f3灰岩","中厚层状","2.59","42.4","31.1","","","","","0.28","500","1800","0.60"],["T1f2泥岩","中厚层状","2.60*","21*","13*","","","","","0.35","200","1000","0.50"],["T1f2泥质灰岩","中厚层状","2.65*","31.0*","22*","","","","","0.30","300","1300","0.55"],["T1f1泥灰岩","中厚层状","2.57","22.8","17.8","","","","","0.30","300","1100","0.55"],["P3c灰岩","块状","2.60","50.4","34.6","","","","","0.25","600","2000","0.60"],["P3l灰岩","块状","2.64","47.6","36.5","0.377","888","40.4","4.50","0.25","600","2000","0.60"],["P3l铝土岩","中厚层状","2.65*","3.8","2.2","","","","","0.45","100","300","0.40"],["P3l页岩（西翼）","薄层状结构","2.65*","6.1","3.9","","","","","0.45","100","350","0.40"],["P3l页岩（东翼）","薄层状结构","2.65","22.8","14.8","","","","","0.35","200","1000","0.50"],["P3l炭质页岩","薄层状结构","2.65*","3.6","1.9","","","","","0.45","100","300","0.40"],["P2m灰岩","块状","2.59","44.9","33.5","0.1","247","32.3","","0.28","500","1800","0.60"],["P2m灰岩夹页岩","中厚层状","2.60*","15.7","11.2","","","","3.16","0.35","200","1000","0.50"],["P1q灰岩","块状","2.62","34.9","27.6","0.22","538","37","4.52","0.28","500","1500","0.55"],["P1l页岩","薄层","2.64","11.3","7.7","0.11","261","33.5","1.33","0.35","200","900","0.50"],["S2h页岩","薄-中层厚层状","2.65","21.7","15.6","0.117","267","32.3","1.70","0.30","300","1100","0.55"],["F3断层角砾岩","碎裂状结构","2.65","17.0","11.9","","","","","0.35","200","1000","0.50"]],remark:"注：表中围岩抗拉强度按岩石试验值的0.15折减，弹性模量按岩石实验值的0.7折减，粘聚力C按岩石试验值的0.15折减，Ф按岩石试验值的0.85折减而得。带“*”为根据临近工点或相邻岩性取经验值。"},nt={id:"2-1-1",tableNo:"—",title:"围岩岩体完整程度定性划分表",schema:"matrixTable",headerRows:[[{t:"里程（m）",rs:2},{t:"围岩岩性",rs:2},{t:"结构面发育程度",cs:2},{t:"主要结构面的结合程度",rs:2},{t:"主要结构面类型",rs:2},{t:"完整程度",rs:2},{t:"相应结构类型",rs:2}],[{t:"组数"},{t:"平均间距（m）"}]],rows:[["ZK81+693-ZK81+770","T1j1灰岩","＞3","0.20～0.60","差","层面、裂隙、节理","较破碎","裂隙块状"],["ZK81+770-ZK81+865","T1j1灰岩","3","0.4～1.2","一般","层面、裂隙","较完整","厚层状"],["ZK81+865-ZK81+930","T1f4泥岩","3","0.2～0.60","一般","层面、裂隙、节理","较破碎","中厚层状"],["ZK81+930-ZK82+065","T1f3灰岩","3","0.4～1.50","一般","层面、裂隙、节理","较完整","厚层状"],["ZK82+065-ZK82+125","T1f2泥岩","3","0.4～0.60","一般","层面、裂隙、节理","较完整","中厚层状结构"],["ZK82+125-ZK82+387","T1f2泥质灰岩","3","0.4～0.80","一般","层面、裂隙、节理","较完整","中厚层状结构"],["ZK82+387-ZK82+532","T1f1泥灰岩","3","0.2～0.70","一般","层面、裂隙、节理","较完整","中厚层状结构"],["ZK82+532-ZK82+632","P3c灰岩","3","0.5～1.5","一般","层面、裂隙、节理","较完整","块状结构"],["ZK82+632-ZK82+697","P3l灰岩","3","0.6～0.90","一般","层面、裂隙、节理","较完整","块状结构"],["ZK82+697-ZK82+742","P3l页岩","3","0.2～1.0","一般","层面、裂隙、节理","较完整","中厚层状"],["ZK82+742-ZK82+802","P3l灰岩","3","0.5～1.50","一般","层面、裂隙","较完整","块状结构"],["ZK82+997-ZK83+110","P2m灰岩","2","0.6～1.20","一般","层面、裂隙、节理","较完整","块状结构"],["ZK83+110-ZK83+145","P2m灰岩夹页岩","3","0.4～0.90","差","层面、裂隙","较完整","中厚层状结构"],["ZK83+145-ZK83+200","P2q灰岩","3","0.4～1.0","一般","层面、裂隙","较完整","块状结构"],["ZK83+200-ZK83+230","P2q灰岩夹页岩","","0.40~0.70","一般","层面、裂隙","较完整","中厚层状结构"],["ZK83+230-ZK83+290","P2q灰岩","3","0.5～1.5","一般","层面、裂隙、节理","较完整","块状结构"],["ZK83+290-ZK83+320","P1l页岩","3","0.40~0.60","一般","层面、裂隙","较完整","中厚层状结构"],["ZK83+320-ZK83+810","S2h页岩","3","0.40~1.20","一般","层面、裂隙","较完整","中厚层状结构"],["ZK83+810-ZK84+560","S2h页岩（背斜核部段）","＞3","0.10~0.50","差","层面、裂隙","较破碎","裂隙块状"],["ZK84+560-ZK85+720","S2h页岩","3","0.40~1.20","一般","层面、裂隙","较完整","中厚层状结构"],["ZK85+720-ZK85+840","P1l页岩","3","0.40~1.10","一般","层面、裂隙","较完整","中厚层状结构"],["ZK85+840-ZK86+000","P2q灰岩","3","0.50~1.30","一般","层面、裂隙","较完整","块状结构"],["ZK86+000-ZK86+370","P2m灰岩夹页岩","3","0.40~0.70","一般","层面、裂隙","较完整","中厚层状结构"],["ZK86+370-ZK86+545","P2m灰岩","3","0.60~1.20","一般","层面、裂隙","较完整","块状结构"],["ZK86+545-ZK86+648","P3l页岩","3","0.40~0.60","一般","层面、裂隙","较完整","中厚层状结构"],["ZK86+648-ZK86+698","P3l灰岩","3","0.90~1.40","一般","层面、裂隙","较完整","块状结构"],["ZK86+698-ZK86+783","P3l页岩","3","0.40~0.80","一般","层面、裂隙","较完整","中厚层状结构"],["ZK86+783-ZK86+903","P3l灰岩","3","0.50~1.50","一般","层面、裂隙","较完整","块状结构"],["ZK86+903-ZK86+993","P3c灰岩","3","0.90~1.60","一般","层面、裂隙","较完整","块状结构"],["ZK86+993-ZK87+193","T1f1泥灰岩","3","0.40~1.20","一般","层面、裂隙","较完整","中厚层状结构"],["ZK87+193-ZK87+303","T1f2泥质灰岩","3","0.50~1.10","一般","层面、裂隙","较完整","中厚层状结构"],["ZK87+303-ZK87+393","T1f2泥岩","3","0.40~1.20","一般","层面、裂隙","较完整","中厚层状结构"],["ZK87+393-ZK87+553","T1f3灰岩","3","0.60~1.20","一般","层面、裂隙","较完整","厚层状"],["ZK87+553-ZK87+633","T1f4泥岩","3","0.20~0.60","差","层面、裂隙","较破碎","中厚层状结构"],["ZK87+633-ZK88+069","T1j1灰岩","3","0.50~1.50","一般","层面、裂隙","较完整","厚层状"],["ZK88+069-ZK88+135","T1j2白云质灰岩","3","0.20~0.60","差","层面、裂隙","较破碎","裂隙块状结构"]],remark:""},it={id:"2-1-2",tableNo:"5.2.2-2",title:"岩体完整度综合确定表",schema:"matrixTable",headerRows:[[{t:"里程（m）"},{t:"围岩岩性"},{t:"定性划分成果"},{t:"Jv统计成果划分"},{t:"物探Kv值"},{t:"综合判定完整程度"},{t:"综合Kv值的选取"}]],rows:[["ZK81+693-ZK81+770","T1j1灰岩","较破碎","15","","较破碎","0.50"],["ZK81+770-ZK81+865","T1j1灰岩","较完整","3","0.60~0.78","较完整","0.75"],["ZK81+865-ZK81+930","T1f4泥岩","较破碎","10","0.40~0.65","较破碎","0.55"],["ZK81+930-ZK82+065","T1f3灰岩","较完整","3","0.40~0.76","较完整","0.75"],["ZK82+065-ZK82+125","T1f2泥岩","较完整","6","","较完整","0.65"],["ZK82+125-ZK82+387","T1f2泥质灰岩","较完整","6","","较完整","0.65"],["ZK82+387-ZK82+532","T1f1泥灰岩","较完整","7","","较完整","0.65"],["ZK82+532-ZK82+632","P3c灰岩","较完整","3","","较完整","0.75"],["ZK82+632-ZK82+697","P3l灰岩","较完整","","0.50~0.78","较完整","0.75"],["ZK82+697-ZK82+742","P3l页岩","较完整","","0.40~0.70","较完整","0.68"],["ZK82+742-ZK82+802","P3l灰岩","较完整","","0.50~0.78","较完整","0.75"],["ZK82+802-ZK82+877","P3l页岩（采空区段）","破碎","","0.04","破碎","0.04"],["ZK82+877-ZK82+997","断层","较破碎","","0.30~0.55","较破碎","0.50"],["ZK82+997-ZK83+110","P2m灰岩","较完整","3","","较完整","0.76"],["ZK83+110-ZK83+145","P2m灰岩夹页岩","较完整","","","较完整","0.70"],["ZK83+145-ZK83+200","P2q灰岩","较完整","3","0.55~0.80","较完整","0.75"],["ZK83+200-ZK83+230","P2q灰岩夹页岩","较完整","","0.55~0.80","较完整","0.70"],["ZK83+230-ZK83+290","P2q灰岩","较完整","","0.55~0.80","较完整","0.75"],["ZK83+290-ZK83+320","P1l页岩","较完整","出露有限","","较完整","0.65"],["ZK83+320-ZK83+810","S2h页岩","较完整","","0.40~0.75","较完整","0.70"],["ZK83+810-ZK84+560","S2h页岩（背斜核部段）","较破碎","13","","较破碎","0.55"],["ZK84+560-ZK85+720","S2h页岩","较完整","7","0.40~0.75","较完整","0.65"],["ZK85+720-ZK85+840","P1l页岩","较完整","","0.40~0.70","较完整","0.65"],["ZK85+840-ZK86+000","P2q灰岩","较完整","","0.30~0.70","较完整","0.65"],["ZK86+000-ZK86+370","P2m灰岩夹页岩","较完整","","0.40~0.78","较完整","0.70"],["ZK86+370-ZK86+545","P2m灰岩","较完整","","0.40~0.78","较完整","0.76"],["ZK86+545-ZK86+648","P3l页岩","较完整","","0.55","较完整","0.55"],["ZK86+648-ZK86+698","P3l灰岩","较完整","","0.50~0.80","较完整","0.75"],["ZK86+698-ZK86+783","P3l页岩","较完整","","0.60","较完整","0.60"],["ZK86+783-ZK86+903","P3l灰岩","较完整","","0.50~0.80","较完整","0.73"],["ZK86+903-ZK86+993","P3c灰岩","较完整","","0.50~0.80","较完整","0.75"],["ZK86+993-ZK87+193","T1f1泥灰岩","较完整","7","","较完整","0.65"],["ZK87+193-ZK87+303","T1f2泥质灰岩","较完整","7","","较完整","0.65"],["ZK87+303-ZK87+393","T1f2泥岩","较完整","5","","较完整","0.73"],["ZK87+393-ZK87+553","T1f3灰岩","较完整","3","","较完整","0.75"],["ZK87+553-ZK87+633","T1f4泥岩","较破碎","12","","较破碎","0.55"],["ZK87+633-ZK88+069","T1j1灰岩","较完整","3","","较完整","0.75"],["ZK88+069-ZK88+135","T1j2白云质灰岩","较破碎","15","","较破碎","0.50"]],remark:""},lt={id:"2-1-3",tableNo:"5.2.3-3",title:"隧道各级围岩分布情况表",schema:"matrixTable",headerRows:[[{t:"左洞",cs:3},{t:"右洞",cs:3}],[{t:"围岩级别"},{t:"长度（m）"},{t:"占隧道总长度百分比（%）"},{t:"围岩级别"},{t:"长度（m）"},{t:"占隧道总长度百分比（%）"}]],rows:[["Ⅲ","2384","37.01","Ⅲ","2211","34.53"],["IV","2875","44.63","IV","3011","47.02"],["V","1183","18.36","V","1182","18.46"],["合计","6442","100","合计","6404","100"]],remark:""},ot={id:"2-2-1",tableNo:"—",title:"竖井工程地质评价",schema:"matrixTable",headerRows:[[{t:"白云山隧道竖井",rs:2},{t:"长度"},{t:"围岩体岩性",rs:2},{t:"Rc"},{t:"K1",rs:2},{t:"K2",rs:2},{t:"K3",rs:2},{t:"岩体完整系数（Kv）",rs:2},{t:"BQ",rs:2},{t:"［BQ］",rs:2},{t:"围岩定量分级",rs:2}],[{t:"(米)"},{t:"(Mpa)"}]],rows:[["","50","S2h页岩","15.6","0.2","0.2","0","0.52","277","237","Ⅴ"],["","300.969","S2h页岩","15.6","0.2","0.2","0","0.65","309","269","Ⅳ"],["","176.8","S2h页岩","15.6","0.2","0.2","0","0.70","322","282","Ⅳ"]],remark:""},rt={id:"3-1-1",tableNo:"3.1-1",title:"白云山隧道大气降雨入渗系数法计算成果",schema:"matrixTable",headerRows:[[{t:"序号"},{t:"部位"},{t:"地貌形态"},{t:"地层岩性"},{t:"面积(Km2"},{t:"降雨量(mm)"},{t:"入渗系数"},{t:"涌水量m3/d"},{t:"最大涌水量m3/d"}]],rows:[["1","隧道进口","斜坡","P2+3+T1f","9","1078.7","0.5","13300","39900"],["2","洞身段志留系","构造侵蚀剥蚀斜坡","S2h","4.2","1078.7","0.05","621","1863"],["3","隧道洞身段","溶丘洼地","P2","8.4","1078.7","0.7","17379","52137"],["4","隧道洞身P3+T1f1+2","溶蚀斜坡","P3+T1f1+2","7.2","1078.7","0.4","8512","25536"],["5","隧道出口T1f3+4","斜坡","T1j、T1f3+4","4.8","1078.7","0.3","4256","12768"],[{t:"合计",cs:7},"44068","132204"]],remark:""},ct={id:"3-2-1",tableNo:"3.2-1",title:"地下径流模数法涌水量计算表",schema:"matrixTable",headerRows:[[{t:"序号"},{t:"部位"},{t:"地貌形态"},{t:"地层岩性"},{t:"面积（Km2）"},{t:"平均径流模数"},{t:"涌水量m3/d"},{t:"最大涌水量m3/d"}]],rows:[["1","隧道进口","斜坡","P2+3+T1f","9","15.7","12208","36624"],["2","洞身段志留系","构造侵蚀剥蚀坡","S2h","4.2","2","726","2178"],["3","隧道洞身段","溶丘洼地","P2","8.4","24.9","18071","54213"],["4","隧道洞身P3+T1f1+2","溶蚀斜坡","P3+T1f1+2","7.2","12.6","7838","23514"],["5","隧道出口T1f3+4","斜坡","T1j、T1f3+4","4.8","9.6","3981","11943"],[{t:"合计",cs:6},"42824","128472"]],remark:""},ut={id:"3-3-1",tableNo:"3.3-1",title:"白云山隧道单洞涌水量分段预测表",schema:"matrixTable",headerRows:[[{t:"序号"},{t:"段落"},{t:"地层时代"},{t:"平水期涌水量（m3/d）"},{t:"最大期涌水量（m3/d）"}]],rows:[["1","ZK81+693-ZK81+865","T1j1","51.00","153.00"],["2","ZK81+865-ZK81+930","T1f4","15.00","45.00"],["3","ZK81+930-ZK82+065","T1f3","648.00","1944.00"],["4","ZK82+065-ZK82+387","T1f2","94.00","282.00"],["5","ZK82+387-ZK82+532","T1f1","67.00","201.00"],["6","ZK82+532-ZK82+632","P3c","324.00","972.00"],["7","ZK82+632-ZK82+997","P3l","2097.00","6291.00"],["8","ZK82+997-ZK83+145","P2m","2881.00","8643.00"],["9","ZK83+145-ZK83+290","P2q","1093.00","3279.00"],["10","ZK83+290-ZK85+840","S2h+P1l","777.00","2331.00"],["11","ZK85+840-ZK86+000","P2q","1838.00","5514.00"],["12","ZK86+000-ZK86+545","P2m","5266.00","15798.00"],["13","ZK86+545-ZK86+903","P3l","3160.00","9480.00"],["14","ZK86+903-ZK86+993","P3c","454.00","1362.00"],["15","ZK86+993-ZK87+193","T1f1","886.00","2658.00"],["16","ZK87+193-ZK87+393","T1f2","864.00","2592.00"],["17","ZK87+393-ZK87+553","T1f3","713.00","2139.00"],["18","ZK87+553-ZK87+633","T1f4","24.00","72.00"],["19","ZK87+633-ZK88+069","T1j1","139.00","417.00"],["20","ZK88+069-ZK88+135","T1j2","21.00","63.00"],[{t:"合计",cs:3},"22034","66102"]],remark:`由于本隧道为双线隧道，在进行防排水设计时，应注意以下几点：
（1）上表是常规隧道施工方法(钻爆法)情况下双洞同时开挖单洞涌水量的预测。
（2）隧道涌水量计算是基于含水岩层假设是均质体，但实际上含水岩层极不均一，对于岩溶发育、裂隙分布极不均匀的碳酸盐岩更是如此，而且采用了封堵措施后地下水径流将趋复杂化，并且雨后涌水量要大增的事实必须重视。因此，在施工中遇到突发涌水、大涌水等特别情况时其设计封堵措施不受上述计算的限制。
（4）根据水文地质调查及参考《1：20 万区域水文地质报告（南川幅）》，丰水期水量取枯水期的3 倍。
（5）汇水面积考虑采用垂直补给带面积，降雨量采用单日雨后最大降雨量进行计算。经计算，雨后可能产生瞬时的大的涌水。区内最大暴雨强度为 340mm/d，因此暴雨时隧道涌水量呈几何倍数增长`},dt={id:"4-1-1",tableNo:"—",title:"白云山隧道突水突泥段落预测表",schema:"matrixTable",headerRows:[[{t:"里程桩号"},{t:"突水类型"}]],rows:[[{t:"K81+838～K81+918；ZK81+882～ZK81+962"},{t:"本段为飞仙关组四段泥岩与飞仙关组、嘉陵江组灰岩接触带，泥岩为钙质胶结，是岩溶发育的有利部位，结合钻孔揭露情况分析，本区发育溶洞可能性较大，但发生突水风险不高。",className:"survey-table__text"}],[{t:"K82+048～K82+128；ZK82+079～ZK82+159"},{t:"本段为飞仙关组二段泥岩与飞仙关组三段、飞仙关组二段泥质灰岩接触带，是岩溶发育的有利部位，加之泥岩具有隔水性质，隧道可能为涌流状出水。",className:"survey-table__text"}],[{t:"K82+655～K82+710; ZK82+695～ZK82+750"},{t:"本段为二叠系上统龙潭组灰岩和页岩接触带，是岩溶发育的有利部位，加之泥岩具有隔水性质，隧道可能为涌流状出水。",className:"survey-table__text"}],[{t:"K82+790～K82+890；ZK82+750～ZK82+850"},{t:"本段为二叠系上统龙潭组灰岩和页岩接触带，同时隧道穿越采空区，会发生老窑突水，预计水头10m左右，应加强超前预报工作，揭露该层地下水时宜先泄水，待水量稳定后再进行下一步工作。",className:"survey-table__text"}],[{t:"K82+890～K82+990；ZK82+850～ZK82+950"},{t:"本段为F3断层破碎带附近，裂隙发育，可能揭露溶洞及溶洞水，发生突水风险较高，因加强超前预报，加强溶洞发育探测。",className:"survey-table__text"}],[{t:"K83+218～K83+278；ZK83+255～ZK83+325"},{t:"本段为二叠系中统栖霞组与二叠系下统梁山组、志留系页岩接触带附近，是岩溶发育的有利地段，发生突水风险较高。发育，可能揭露溶洞及溶洞水，发生突水风险较高，因加强超前预报，加强溶洞发育探测。",className:"survey-table__text"}],[{t:"K85+782～K85+852；ZK85+797～ZK85+867"},{t:"本段为二叠系中统栖霞组与二叠系下统梁山组、志留系页岩接触带附近，是岩溶发育的有利地段，发生突水风险较高。可能揭露溶洞及溶洞水，因加强超前预报，加强溶洞发育探测。",className:"survey-table__text"}],[{t:"K85+852～K86+495；ZK85+867～ZK86+505"},{t:"本段穿越青龙洞暗河，位于隧道上方270m，暗河下部地层之间无有效隔水层，一是隧道施工可能会造成暗河通过裂隙下渗涌入隧道；二是暗河与青龙煤矿采空区联通，通过青龙煤矿主平洞和排水平洞排泄或涌入隧道。",className:"survey-table__text"}],[{t:"K86+495～K86+595；ZK86+505～ZK86+605"},{t:"本段为二叠系上统龙潭组灰岩和页岩接触带，上部为采空区，应加强超前预报与控制爆破，预防老窑积水顺走向涌入隧道。",className:"survey-table__text"}],[{t:"K86+595～K86+735；ZK86+605～ZK86+645"},{t:"本段为二叠系上统龙潭组灰岩和页岩接触带，是岩溶发育的有利地段，发生突水风险较高。可能揭露溶洞及溶洞水，因加强超前预报，加强溶洞发育探测。",className:"survey-table__text"}],[{t:"K86+832～K86+932；ZK86+840～ZK86+940"},{t:"本段为物探异常区YC3，推测岩溶发育，发生突水风险高，应加强超前预报工作。",className:"survey-table__text"}],[{t:"K87+300～K87+410；ZK87+286～ZK87+396"},{t:"本段为飞仙关组二段泥岩与飞仙关组三段、飞仙关组二段泥质灰岩接触带，是岩溶发育的有利部位，加之泥岩具有隔水性质，隧道发生突水风险较高。",className:"survey-table__text"}],[{t:"K87+545～K87+645；ZK87+530～ZK87+630"},{t:"本段为飞仙关组四段泥岩与飞仙关组、嘉陵江组灰岩接触带，泥岩为钙质胶结，是岩溶发育的有利部位，结合钻孔揭露情况分析，本区发育溶洞可能性较大，但发生突水风险不高。",className:"survey-table__text"}]],remark:""},us={[xe.id]:xe,[Ze.id]:Ze,[$e.id]:$e,[Ae.id]:Ae,[De.id]:De,[Be.id]:Be,[ze.id]:ze,[Oe.id]:Oe,[Fe.id]:Fe,[qe.id]:qe,[Ye.id]:Ye,[Ve.id]:Ve,[He.id]:He,[je.id]:je,[Ue.id]:Ue,[Xe.id]:Xe,[We.id]:We,[Qe.id]:Qe,[Ge.id]:Ge,[Je.id]:Je,[et.id]:et,[tt.id]:tt,[st.id]:st,[at.id]:at,[nt.id]:nt,[it.id]:it,[lt.id]:lt,[ot.id]:ot,[rt.id]:rt,[ct.id]:ct,[ut.id]:ut,[dt.id]:dt};function ds(e){return us[e]??null}const pt=xe.id;function ps(e){return e.replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_")}function Tt(e,t){if(!e)return;const s=`${ps(t)}.xls`,a=`<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:x="urn:schemas-microsoft-com:office:excel"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="UTF-8" />
  <!--[if gte mso 9]>
  <xml>
    <x:ExcelWorkbook>
      <x:ExcelWorksheets>
        <x:ExcelWorksheet>
          <x:Name>Sheet1</x:Name>
          <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
        </x:ExcelWorksheet>
      </x:ExcelWorksheets>
    </x:ExcelWorkbook>
  </xml>
  <![endif]-->
  <style>
    table { border-collapse: collapse; table-layout: fixed; width: 100%; }
    th, td {
      border: 1px solid #000;
      text-align: center;
      vertical-align: middle;
      padding: 4px 3px;
      font-size: 11pt;
      font-family: "SimSun", "Microsoft YaHei", sans-serif;
    }
    th { font-weight: bold; background: #f0f0f0; }
  </style>
</head>
<body>
  <table>${e.innerHTML}</table>
</body>
</html>`,n=new Blob(["\uFEFF",a],{type:"application/vnd.ms-excel;charset=utf-8"}),i=URL.createObjectURL(n),l=document.createElement("a");l.href=i,l.download=s,l.click(),URL.revokeObjectURL(i)}function hs(e){return`<td>${e===""||e==null?"":e}</td>`}function ms(e){return`
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      ${Array.from({length:e-1},()=>'<col class="survey-table__col survey-table__col--num" />').join("")}
    </colgroup>
  `}function gs(e){return`<thead><tr>${e.map(s=>`<th>${s.label.replace(/\n/g,"<br />")}</th>`).join("")}</tr></thead>`}function fs(e,t){const s=t.slice(1).map(n=>n.key);let a="";for(const n of e){const i=n.rows.length;n.rows.forEach((l,o)=>{a+="<tr>",o===0&&(a+=`<td class="survey-table__sample" rowspan="${i}">${n.holeId}</td>`);for(const r of s)a+=hs(l[r]);a+="</tr>"})}return a}function ys(e){const t=e.headers,s=t.length;return`
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--borehole">
        ${ms(s)}
        ${gs(t)}
        <tbody>
          ${fs(e.groups,t)}
        </tbody>
        ${e.remark?`<tfoot>
                <tr class="survey-table__remark">
                  <td class="survey-table__stat-label">备注</td>
                  <td colspan="${s-1}">${e.remark}</td>
                </tr>
              </tfoot>`:""}
      </table>
    </div>
  `}function we(e){return e==null?{text:"",colspan:1,rowspan:1,className:""}:typeof e=="string"||typeof e=="number"?{text:String(e),colspan:1,rowspan:1,className:""}:{text:e.t??e.text??"",colspan:e.cs??e.colspan??1,rowspan:e.rs??e.rowspan??1,className:e.className??""}}function xt(e,t){const s=we(t),a=[];s.colspan>1&&a.push(`colspan="${s.colspan}"`),s.rowspan>1&&a.push(`rowspan="${s.rowspan}"`),s.className&&a.push(`class="${s.className}"`);const n=a.length?` ${a.join(" ")}`:"";return`<${e}${n}>${s.text}</${e}>`}function bs(e){return e.map(t=>`<tr>${t.map(s=>xt("th",s)).join("")}</tr>`).join("")}function vs(e){return e.map(t=>`<tr>${t.map(s=>xt("td",s)).join("")}</tr>`).join("")}function Cs(e,t){const s=e.reduce((n,i)=>Math.max(n,i.reduce((l,o)=>l+we(o).colspan,0)),0),a=t.reduce((n,i)=>Math.max(n,i.reduce((l,o)=>l+we(o).colspan,0)),0);return Math.max(s,a,1)}function _s(e){const t=Cs(e.headerRows,e.rows);return`
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--matrix">
        <colgroup>
          ${Array.from({length:t},()=>'<col class="survey-table__col survey-table__col--num" />').join("")}
        </colgroup>
        <thead>
          ${bs(e.headerRows)}
        </thead>
        <tbody>
          ${vs(e.rows)}
        </tbody>
        ${e.remark?`<tfoot>
                <tr class="survey-table__remark">
                  <td class="survey-table__note" colspan="${t}">${e.remark}</td>
                </tr>
              </tfoot>`:""}
      </table>
    </div>
  `}const Ss=10,ks=["density","ucsNatural","ucsSaturated","softening","tensile","shearPhi","shearC","elasticModulus","poisson"];function E(e){return`<td>${e===""||e==null?"":e}</td>`}function Ts(){return`
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      ${ks.map(()=>'<col class="survey-table__col survey-table__col--num" />').join("")}
    </colgroup>
  `}function xs(){return`
    <thead>
      <tr>
        <th rowspan="2">岩样编号</th>
        <th rowspan="2">天然密度<br /><span class="survey-table__unit">(g/cm³)</span></th>
        <th colspan="2">岩石单轴抗压强度</th>
        <th rowspan="2">软化系数</th>
        <th rowspan="2">抗拉强度<br /><span class="survey-table__unit">(MPa)</span></th>
        <th colspan="2">抗剪强度(图解法)</th>
        <th colspan="2">变形强度</th>
      </tr>
      <tr>
        <th>天然<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>饱和<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>φ<br /><span class="survey-table__unit">(°)</span></th>
        <th>C<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>弹性模量<br /><span class="survey-table__unit">(MPa)</span></th>
        <th>泊桑比</th>
      </tr>
    </thead>
  `}function ws(e){let t="";for(const s of e){const a=s.rows.length,n=s.shearRowspan??0;s.rows.forEach((i,l)=>{t+="<tr>",l===0&&(t+=`<td class="survey-table__sample" rowspan="${a}">${s.sampleId}</td>`),t+=E(i.density),t+=E(i.ucsNatural),t+=E(i.ucsSaturated),t+=E(i.softening),t+=E(i.tensile),n>1?l===0&&(t+=`<td rowspan="${n}">${i.shearPhi??""}</td>`,t+=`<td rowspan="${n}">${i.shearC??""}</td>`):(t+=E(i.shearPhi),t+=E(i.shearC)),t+=E(i.elasticModulus),t+=E(i.poisson),t+="</tr>"})}return t}function Ns(e){return e.map(t=>`
        <tr class="survey-table__stat">
          <td class="survey-table__stat-label">${t.label}</td>
          ${t.values.map(s=>E(s)).join("")}
        </tr>
      `).join("")}function Ps(e){return`
    <div class="survey-table-wrap">
      <table class="survey-table survey-table--extended">
        ${Ts()}
        ${xs()}
        <tbody>
          ${ws(e.samples)}
        </tbody>
        <tfoot>
          ${Ns(e.stats)}
          <tr class="survey-table__remark">
            <td class="survey-table__stat-label">备注</td>
            <td colspan="${Ss-1}">${e.remark||""}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `}const Ks=7;function Es(){return`
    <colgroup>
      <col class="survey-table__col survey-table__col--sample" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
      <col class="survey-table__col survey-table__col--num" />
    </colgroup>
  `}function Rs(){return`
    <thead>
      <tr>
        <th rowspan="3">样品编号</th>
        <th rowspan="2">天然密度</th>
        <th colspan="2">单轴抗压强度</th>
        <th rowspan="3">软化系数</th>
        <th colspan="2">天然三轴抗剪</th>
      </tr>
      <tr>
        <th>天然</th>
        <th>饱和</th>
        <th>c</th>
        <th>φ</th>
      </tr>
      <tr>
        <th><span class="survey-table__unit">(g/cm³)</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">MPa</span></th>
        <th><span class="survey-table__unit">°</span></th>
      </tr>
    </thead>
  `}function B(e){return`<td>${e===""||e==null?"":e}</td>`}function Ms(e){let t="";for(const s of e){const a=s.rows.length,n=s.triaxialRowspan??0;s.rows.forEach((i,l)=>{t+="<tr>",l===0&&(t+=`<td class="survey-table__sample" rowspan="${a}">${s.sampleId}</td>`),t+=B(i.density),t+=B(i.ucsNatural),t+=B(i.ucsSaturated),t+=B(i.softening),n>1?l===0&&(t+=`<td rowspan="${n}">${i.c??"-"}</td>`,t+=`<td rowspan="${n}">${i.phi??"-"}</td>`):(t+=B(i.c),t+=B(i.phi)),t+="</tr>"})}return t}function Ls(e){return e.map(t=>`
        <tr class="survey-table__stat">
          <td class="survey-table__stat-label">${t.label}</td>
          ${t.values.map(s=>B(s)).join("")}
        </tr>
      `).join("")}function Is(e){return`
    <div class="survey-table-wrap">
      <table class="survey-table">
        ${Es()}
        ${Rs()}
        <tbody>
          ${Ms(e.samples)}
        </tbody>
        <tfoot>
          ${Ls(e.stats)}
          <tr class="survey-table__remark">
            <td class="survey-table__stat-label">备注</td>
            <td colspan="${Ks-1}">${e.remark||""}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `}function Zs(e){return e.schema==="rockProperties"?Ps(e):e.schema==="boreholeLog"?ys(e):e.schema==="matrixTable"?_s(e):Is(e)}function $s(e){return`
    <div class="survey-table-empty">
      <p class="survey-table-empty__title">${e}</p>
      <p class="survey-table-empty__hint">该表格数据待接入</p>
    </div>
  `}function As(e){e.innerHTML=`
    <div class="cyber-panel cyber-panel--nav cyber-panel--table">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title" id="surveyTableTitle"></span>
        <button
          type="button"
          class="survey-table-panel__download"
          id="surveyTableDownload"
          title="下载当前表格"
          hidden
        >
          下载
        </button>
      </div>
      <div class="cyber-panel__body" id="surveyTableBody"></div>
    </div>
  `;const t=e.querySelector("#surveyTableTitle"),s=e.querySelector("#surveyTableBody"),a=e.querySelector("#surveyTableDownload");let n="";a.addEventListener("click",()=>{const l=s.querySelector(".survey-table");l&&n&&Tt(l,n)});function i(l){if(!l)return;const o=ds(l.id),r=l.label;n=r,t.textContent=r,o?(s.innerHTML=Zs(o),a.hidden=!1):(s.innerHTML=$s(r),a.hidden=!0)}return{showTable:i}}const Ds={out2:{id:"XSBYSZK01",mileageStake:"ZK82+876.5左54米",elevation:859.36,coordX:324263547e-2,coordY:504439.91,depth:270.37,stableWaterLevel:254,finalDiameter:91,layers:[{sequence:1,stratumCode:"Qel+dl（Q4）",lithology:"红黏土",from:0,to:6.2,thickness:6.2,color:"#C05030",description:"黄褐色，可塑状，底部含灰岩块石，块径约20～30 cm。"},{sequence:2,stratumCode:"T1j2",lithology:"灰岩",from:6.2,to:34,thickness:27.8,color:"#D9D9D9",description:"灰色、微晶质结构，中厚层状构造，矿物成分主要为方解石，裂隙较发育，倾角以70°～80°为主，闭合，被方解石充填，岩芯多呈柱状、短柱状，部分长柱状、碎块状。"},{sequence:3,mergeStratumCode:"T1j2",stratumCodeBreak:!0,lithology:"溶洞",from:34,to:37.1,thickness:3.1,color:"#4A90E2",description:"溶洞：有掉钻现象，溶洞内有碎石土充填，碎石直径1～5 mm，次棱角状。为灰岩及页岩碎石，含量约40%。"},{sequence:4,mergeStratumCode:"T1j2",lithology:"灰岩",from:37.1,to:74.8,thickness:37.7,color:"#D9D9D9",description:"灰色、灰黑色，微晶质结构，中厚层状构造，矿物主要成分为方解石，细方解石脉发育，部分含沥青质，呈灰黑色岩芯呈长柱状、柱状，部分碎块状。"},{sequence:5,mergeStratumCode:"T1j2",lithology:"煤层",from:74.8,to:78.8,thickness:4,color:"#000000",description:"煤，黑色；74.8～75.1 m丝绢光泽、污手；75.1～76.3 m为采空区，掉钻，推测为采空区；78.1～78.4 m为煤层，黑色，丝绢光泽，质轻。"},{sequence:6,mergeStratumCode:"T1j2",lithology:"炭质页岩",from:78.8,to:102,thickness:23.2,color:"#6B6B6B",description:"炭质页岩，灰黑色，泥质结构，厚层状构造，101.2～101.3 m夹薄层煤。岩芯呈长柱状、柱状，易风化裂解。"},{sequence:7,mergeStratumCode:"T1j2",lithology:"灰岩",from:102,to:125.7,thickness:23.7,color:"#D9D9D9",description:"灰岩，灰色、灰黑色，微晶质结构，中厚层状构造，局部方解石脉发育，缝合线构造发育，岩体较完整，岩芯多呈长柱状、柱状，少量碎块状、短柱状。"},{sequence:8,mergeStratumCode:"T1j2",lithology:"页岩",from:125.7,to:138.3,thickness:12.6,color:"#808080",description:"灰黑色，泥质结构，厚层状构造，页理发育，局部含碳质较重。133.7－135.0m 夹灰黑色灰岩。岩体完整呈长柱状，页岩岩质软，易风化裂解。"},{sequence:9,mergeStratumCode:"T1j2",lithology:"灰岩",from:138.3,to:205,thickness:66.7,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈短柱状～柱状、碎块状，最大节长 40cm，岩质较硬，为中风化带。RQD=64.8%。162－164.0m 段为灰黑色灰岩夹页岩。181－189.3m 段为灰色和灰黑色灰岩夹页岩。199－200.5m 段为灰黑色灰岩夹页岩。"},{sequence:10,mergeStratumCode:"T1j2",lithology:"角砾岩",from:205,to:213.4,thickness:8.4,color:"#C49A6C",description:"角砾岩，灰黑色、灰色，角砾状构造，角砾母岩为灰岩，粒径2～20 cm，胶结一般，可击碎。岩芯呈碎块状、柱状，最大节长20 cm，RQD=33%。"},{sequence:11,mergeStratumCode:"T1j2",lithology:"铝土岩",from:213.4,to:216.5,thickness:3.1,color:"#A74E1F",description:"铝土岩，灰白色，泥质结构，薄层状构造，以粘土矿物为主，泥质胶结，岩芯呈短柱状，岩质软，易风化、易击碎，为中风化带。"},{sequence:12,mergeStratumCode:"T1j2",lithology:"页岩",from:216.5,to:228.3,thickness:11.8,color:"#808080",description:"页岩，灰黑色，泥质结构，薄层状构造，以黏土矿物组成，岩芯较完整。"},{sequence:13,mergeStratumCode:"T1j2",lithology:"灰岩",from:228.3,to:250.47,thickness:22.17,color:"#D9D9D9",description:"灰岩，灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈短柱状-柱状，碎块状，最大节长40cm，岩质较硬，为中风化带。"},{sequence:14,mergeStratumCode:"T1j2",lithology:"采空区",from:250.47,to:255.17,thickness:4.7,color:"#C0C0C0",description:"采空区：无充填，掉钻。"},{sequence:15,mergeStratumCode:"T1j2",lithology:"灰岩",from:255.17,to:270.37,thickness:15.2,color:"#D9D9D9",description:"灰岩，灰～灰白色，微晶质结构，中厚层状构造，主要由碳酸盐类矿物组成，岩芯较完整，节长5～30 cm。"}]},out3:{id:"XSBYSZK02",mileageStake:"ZK83+211.6左68.8米",elevation:939.2,coordX:324258867e-2,coordY:504772.02,depth:380.65,stableWaterLevel:220,finalDiameter:91,layers:[{sequence:1,stratumCode:"Q4el+dl",lithology:"红黏土",from:0,to:1.2,thickness:1.2,color:"#C05030",description:"黄色，可塑状，稍有光泽，无摇振反应，干强度及韧性中等。"},{sequence:2,stratumCode:"T1j2",lithology:"灰岩",from:1.2,to:4.7,thickness:3.5,color:"#D9D9D9",description:"灰色，岩芯呈柱状，溶蚀发育。"},{sequence:3,mergeStratumCode:"T1j2",stratumCodeBreak:!0,lithology:"溶洞",from:4.7,to:6.3,thickness:1.6,color:"#4A90E2",description:"充填细砂。"},{sequence:4,mergeStratumCode:"T1j2",lithology:"灰岩",from:6.3,to:12.3,thickness:6,color:"#D9D9D9",description:"灰色，岩芯呈柱状、短柱状，溶蚀凹槽、孔洞发育。"},{sequence:5,mergeStratumCode:"T1j2",lithology:"溶洞",from:12.3,to:14.9,thickness:2.6,color:"#4A90E2",description:"溶洞内充填少量砂土。"},{sequence:6,mergeStratumCode:"T1j2",lithology:"灰岩",from:14.9,to:18,thickness:3.1,color:"#D9D9D9",description:"灰色，岩芯呈柱状、短柱状，溶蚀凹槽、孔洞发育。"},{sequence:7,mergeStratumCode:"T1j2",lithology:"溶洞",from:18,to:20.7,thickness:2.7,color:"#4A90E2",description:"溶洞充填细砂。"},{sequence:8,mergeStratumCode:"T1j2",lithology:"灰岩",from:20.7,to:78.5,thickness:57.8,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状，节长约8～55cm，岩质较硬，属中风化带,RQD约82%。"},{sequence:9,mergeStratumCode:"T1j2",lithology:"溶洞",from:78.5,to:79.05,thickness:.55,color:"#4A90E2",description:"溶洞。"},{sequence:10,mergeStratumCode:"T1j2",lithology:"灰岩",from:79.05,to:81.5,thickness:2.45,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状,岩质较硬,为中分化带，RQD约23%"},{sequence:11,mergeStratumCode:"T1j2",lithology:"溶洞",from:81.5,to:82.35,thickness:.85,color:"#4A90E2",description:"溶洞。"},{sequence:12,mergeStratumCode:"T1j2",lithology:"灰岩",from:82.35,to:83.15,thickness:.8,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状,岩质较硬,为中分化带，RQD约23%"},{sequence:13,mergeStratumCode:"T1j2",lithology:"溶洞",from:83.15,to:86.15,thickness:3,color:"#4A90E2",description:"溶洞。"},{sequence:14,mergeStratumCode:"T1j2",lithology:"灰岩",from:86.15,to:87.2,thickness:1.05,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状,岩质较硬,为中分化带，RQD约23%"},{sequence:15,mergeStratumCode:"T1j2",lithology:"溶洞",from:87.2,to:89.85,thickness:2.65,color:"#4A90E2",description:"溶洞。"},{sequence:16,mergeStratumCode:"T1j2",lithology:"灰岩",from:89.85,to:93,thickness:3.15,color:"#D9D9D9",description:"灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状,岩质较硬,为中分化带，RQD约23%。"},{sequence:17,mergeStratumCode:"T1j2",lithology:"灰岩",from:93,to:140,thickness:47,color:"#D9D9D9",description:"灰岩(夹煤线):灰黑色,微晶质结构,中厚层状构造,以碳酸盐类矿物为主,岩芯呈碎块状、短柱状、柱状,节长6-40cm,岩质较硬,为中风化带。该段岩芯有臭味。RQD=40%。98.8-99.30m、99.8-100.0m、102.8-103.0m、107.3-107.5m、114.3-114.5m、119.8m-121.0m、127.5-127.6m、129.0-132.4m、137.6-138.0m、139.6-139.9m段为灰岩夹薄层煤线。105-105.6m段为溶洞,111-113m段为溶隙,充填粘土。"},{sequence:18,mergeStratumCode:"T1j2",lithology:"灰岩",from:140,to:380.65,thickness:240.65,color:"#D9D9D9",description:"灰黑色夹灰色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯较完整，呈柱状，节长8-50cm，岩质较硬，为微风化带。RQD=92-95%。168.8-169.2m、172.3-172.7m、180.2-181.10m段夹薄层页岩。204-208m段为灰色夹灰白色，夹方解石脉。218-223m段夹灰白色方解石脉。283-315m段夹灰白色方解石条纹。346.9-347.5m段夹薄层炭质页岩。348-380.65m段夹灰白色方解石条纹。"}]},out4:{id:"XSBYSZK03",mileageStake:"ZK85+733.7右68.8米",elevation:1252.18,coordX:324204011e-2,coordY:507235.37,depth:625.4,stableWaterLevel:160.4,finalDiameter:91,layers:[{sequence:1,stratumCode:"P3c",lithology:"砂质页岩",from:0,to:17,thickness:17,color:"#B7B29A",description:"砂质页岩：灰黄色，泥质结构，细粒结构，薄层状构造，以粘土矿物为主，泥质胶结。岩芯破碎，呈碎块状、土状，风化裂隙发育，岩质软，为强风化带。局部见薄层状泥灰岩、灰岩。"},{sequence:2,mergeStratumCode:"P3c",stratumCodeBreak:!0,lithology:"灰岩",from:17,to:41,thickness:24,color:"#D9D9D9",description:"灰岩：灰黑色，微晶质结构，以碳酸盐类矿物为主。岩芯呈短柱状、柱状，节长4-60cm，少许碎块状，RQD=88%，岩质较硬，为中风化带。底部31-41m段为角砾状灰岩，角砾粒径4-12cm，棱角状，胶结较好。"},{sequence:3,mergeStratumCode:"P3c",lithology:"白云岩",from:41,to:47.9,thickness:6.9,color:"#CFE2F3",description:"白云岩：浅灰色，白云质结构，微晶质结构，中厚层状构造，以白云石和碳酸盐类矿物为主。岩芯呈柱状、少许短柱状，节长15-68cm，岩质较硬，为中等风化带。RQD=94%。"},{sequence:4,mergeStratumCode:"P3c",lithology:"灰岩",from:47.9,to:71.9,thickness:24,color:"#D9D9D9",description:"灰岩：灰黑色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主。岩芯呈柱状，少许短柱状，为中等风化带。RQD=94%，65-71.9m段为灰色。"},{sequence:5,mergeStratumCode:"P3c",lithology:"砂质页岩",from:71.9,to:78.3,thickness:6.4,color:"#B7B29A",description:"砂质页岩：灰黑色，泥质结构，粉粒结构，薄层状构造，以粘土矿物、长石为主，泥钙质胶结。岩芯呈短柱状、柱状，节长4-21cm，RQD=60%，岩质较软，易击碎，属于中风化带，局部夹钙质结核。77.3-77.8m为采空区。"},{sequence:6,mergeStratumCode:"P3c",lithology:"铝土岩",from:78.3,to:81.6,thickness:3.3,color:"#A74E1F",description:"铝土岩：灰白色、白色，泥质结构，薄层状构造，以粘土矿物为主，岩芯呈短柱状-柱状，节长4-41cm，80.4-81.6m等多呈碎块状，少许短柱状，岩质较软，易开裂，为中风化带。RQD=40%，底部见铜矿，层中夹铜矿结核。"},{sequence:7,mergeStratumCode:"P3c",lithology:"灰岩",from:81.6,to:376.8,thickness:295.2,color:"#D9D9D9",description:"灰岩：灰黑色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主，岩芯呈柱状，少许短柱状，节长8—100cm。岩质较硬，为中等风化带。RQD=97%。100.5—118.0m段呈灰黑色，局部见灰白色方解石条纹。118—155.5m呈灰色，155.5—168m呈灰黑色；168—235m段主要呈灰色，局部夹灰黑色，局部为角砾状灰岩，角砾粒径1—8cm，呈棱角状，胶结较好。235—318m段主要呈灰黑色，局部段落呈灰色；318—324m段呈灰色，324—376.8m段呈灰黑色夹灰色。全段岩芯较完整，呈柱状，少许短柱状，节长8—100cm，RQD=95—98%。"},{sequence:8,mergeStratumCode:"P3c",lithology:"灰岩",from:376.8,to:561.4,thickness:184.6,color:"#D9D9D9",description:"灰岩：灰黑色，微晶质结构，中厚层状构造，以碳酸盐类矿物为主。岩芯较完整，呈柱状，少许短柱状，节长7—62cm，岩质较硬，为中等风化带。RQD=96%。377—377.6m、378.3—378.7m、384.8—385.9m、402.2—402.4m、404.9—405.5m、406.7—407.3m、407.6—408.4m、410—410.4m、421.7—422.3m、424.0—424.4m、427.7—427.9m段呈灰黑色，薄层状，为薄层灰岩夹薄层煤线，岩质软，易击碎，层面指甲可刻划，层面光滑。442—561.4m段呈灰色—灰白色。462.7m处见一倾角约70°的裂隙，面粗糙，无充填。469.8—471.0m含碳质较重。"},{sequence:9,mergeStratumCode:"P3c",lithology:"页岩",from:561.4,to:582.4,thickness:21,color:"#808080",description:"页岩：灰色-灰黑色，泥质结构，薄-中厚层状构造，主要由粘土矿物组成，岩芯完整，多呈长柱状，节长5-100cm，局部夹薄层灰岩。"},{sequence:10,mergeStratumCode:"P3c",lithology:"煤",from:582.4,to:583.3,thickness:.9,color:"#000000",description:"煤层：黑色，丝绢光泽，质轻。"},{sequence:11,mergeStratumCode:"P3c",lithology:"页岩",from:583.3,to:605,thickness:21.7,color:"#808080",description:"页岩：灰色、灰白色，泥质结构，薄-中厚层状构造，主要由粘土矿物组成，岩芯完整，多呈长柱状，节长3-100cm，局部夹薄层灰岩。"},{sequence:12,mergeStratumCode:"P3c",lithology:"页岩",from:605,to:625.4,thickness:20.4,color:"#808080",description:"页岩：紫红色，泥质结构，中厚层状构造，主要由粘土矿物组成，岩芯完整，多呈长柱状，节长5-100cm。"}]}};function Bs(e){return Ds[e]??null}const zs=2,Os=12,Fs=[0,50,100,150,200,250];function x(e){return Number(e).toFixed(2)}function wt(e,t){return`${x(e)} ~ ${x(t)}`}function qs(e,t){return`${x(e)}～${x(t)}`}function I(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Nt(e,t){const s=e.thickness??e.to-e.from;return{...e,sequence:e.sequence??t+1,stratumCode:e.stratumCode??e.mergeStratumCode??"/",thickness:s}}function Pt(e){return e.layers.map(Nt)}function Kt(e){const t=new Array(e.length).fill(0);let s=0;for(;s<e.length;){const a=e[s].stratumCode;let n=s+1;for(;n<e.length&&e[n].stratumCode===a&&!e[n].stratumCodeBreak;)n+=1;t[s]=n-s,s=n}return t}function Ke(e){return e.stableWaterLevel??e.groundwater}function Ys(e){return Math.max(e.thickness*zs,Os)}function Vs(e){return`
    <div class="drill-info-column__axis" aria-hidden="true">
      <span class="drill-info-column__axis-label">深度(m)</span>
      ${[...Fs.filter(s=>s<e),e].map((s,a,n)=>a===0?`<span class="drill-info-column__tick drill-info-column__tick--start">${x(s)}</span>`:a===n.length-1?`<span class="drill-info-column__tick drill-info-column__tick--end">${x(s)}</span>`:`<span class="drill-info-column__tick" style="top: ${s/e*100}%">${x(s)}</span>`).join("")}
    </div>
  `}function Hs(e){const t=Ke(e),s=t/e.depth*100;return`
    <div class="drill-info-column__chart">
      <div class="drill-info-column__bar">${e.layers.map(n=>`<div class="drill-info-column__segment" style="height: ${(n.to-n.from)/e.depth*100}%; background-color: ${n.color};"></div>`).join("")}</div>
      <div
        class="drill-info-column__waterline"
        style="top: ${s}%;"
        title="稳定水位 ${x(t)} m"
      ></div>
    </div>
  `}function Et(e,t,s){return s!==0?"":`
    <td class="drill-info-table__axis-cell" rowspan="${t}">
      ${Vs(e.depth)}
    </td>
    <td class="drill-info-table__chart-cell" rowspan="${t}">
      ${Hs(e)}
    </td>
  `}function Rt(e,t,s){return s[t]<=0?"":`<td class="drill-info-table__code-cell" rowspan="${s[t]}">${I(e.stratumCode)}</td>`}function Mt(e){const t=Ke(e);return`
    <table class="drill-info-table drill-info-table--basic">
      <tbody>
        <tr>
          <th scope="row">孔号</th>
          <td colspan="2">${I(e.id)}</td>
        </tr>
        <tr>
          <th scope="row">里程桩号</th>
          <td colspan="2">${I(e.mileageStake||"/")}</td>
        </tr>
        <tr>
          <th scope="row">孔口高程</th>
          <td colspan="2">${x(e.elevation)} m</td>
        </tr>
        <tr>
          <th scope="row">钻孔深度</th>
          <td colspan="2">${x(e.depth)} m</td>
        </tr>
        <tr>
          <th scope="row">孔口坐标</th>
          <td>X=${x(e.coordX)}</td>
          <td>Y=${x(e.coordY)}</td>
        </tr>
        <tr>
          <th scope="row">稳定水位</th>
          <td colspan="2">${x(t)} m</td>
        </tr>
        <tr>
          <th scope="row">终孔直径</th>
          <td colspan="2">${e.finalDiameter!=null?`${e.finalDiameter} mm`:"/"}</td>
        </tr>
      </tbody>
    </table>
  `}function js(e){const t=Pt(e),s=t.length,a=Kt(t);return`
    <div class="drill-info-lithology-wrap">
      <table class="drill-info-table drill-info-table--lithology">
        <thead>
          <tr>
            <th scope="col" class="drill-info-table__col--axis">深度(m)</th>
            <th scope="col" class="drill-info-table__col--chart">柱状</th>
            <th scope="col" class="drill-info-table__col--seq">层序</th>
            <th scope="col" class="drill-info-table__col--code">地层代号</th>
            <th scope="col" class="drill-info-table__col--lithology">岩性</th>
            <th scope="col" class="drill-info-table__col--range">深度范围(m)</th>
            <th scope="col" class="drill-info-table__col--thickness">厚度(m)</th>
          </tr>
        </thead>
        <tbody>
          ${t.map((n,i)=>`
                <tr style="height: ${Ys(n)}px">
                  ${Et(e,s,i)}
                  <td>${n.sequence}</td>
                  ${Rt(n,i,a)}
                  <td>${I(n.lithology)}</td>
                  <td>${wt(n.from,n.to)}</td>
                  <td>${x(n.thickness)}</td>
                </tr>
              `).join("")}
        </tbody>
      </table>
    </div>
  `}function Us(e){const t=Pt(e),s=t.length,a=Kt(t);return`
    <div class="drill-info-lithology-wrap drill-info-lithology-wrap--full">
      <table class="drill-info-table drill-info-table--lithology drill-info-table--full">
        <thead>
          <tr>
            <th scope="col" class="drill-info-table__col--axis">深度(m)</th>
            <th scope="col" class="drill-info-table__col--chart">柱状</th>
            <th scope="col" class="drill-info-table__col--seq">层序</th>
            <th scope="col" class="drill-info-table__col--code">地层代号</th>
            <th scope="col" class="drill-info-table__col--range">深度范围(m)</th>
            <th scope="col" class="drill-info-table__col--thickness">厚度(m)</th>
            <th scope="col" class="drill-info-table__col--lithology">岩性</th>
            <th scope="col" class="drill-info-table__col--desc">岩土描述</th>
          </tr>
        </thead>
        <tbody>
          ${t.map((n,i)=>`
                <tr>
                  ${Et(e,s,i)}
                  <td>${n.sequence}</td>
                  ${Rt(n,i,a)}
                  <td>${wt(n.from,n.to)}</td>
                  <td>${x(n.thickness)}</td>
                  <td>${I(n.lithology)}</td>
                  <td class="drill-info-table__desc-cell">${I(n.description||"/")}</td>
                </tr>
              `).join("")}
        </tbody>
      </table>
    </div>
  `}function Lt(e){return`
    <div class="drill-info-water-legend">
      <span class="drill-info-water-legend__line" aria-hidden="true"></span>
      <span>稳定水位：${x(Ke(e))} m</span>
    </div>
  `}function Xs(e){const t=document.createElement("table");return t.innerHTML=`
    <thead>
      <tr>
        <th>层序</th>
        <th>地层代号</th>
        <th>深度范围（m）</th>
        <th>厚度（m）</th>
        <th>岩性</th>
        <th>岩土描述</th>
      </tr>
    </thead>
    <tbody>
      ${e.layers.map((s,a)=>{const n=Nt(s,a),i=s.stratumCode??"";return`
            <tr>
              <td>${n.sequence}</td>
              <td>${I(i)}</td>
              <td>${qs(s.from,s.to)}</td>
              <td>${x(n.thickness)}</td>
              <td>${I(s.lithology)}</td>
              <td style="text-align:left;white-space:normal;">${I(s.description??"")}</td>
            </tr>
          `}).join("")}
    </tbody>
  `,t}function It(e){var s;if(!((s=e==null?void 0:e.layers)!=null&&s.length))return;const t=Xs(e);Tt(t,`${e.id}_钻孔柱状图`)}function Ws(){const e=document.createElement("div");e.className="drill-full-log-modal",e.hidden=!0,e.innerHTML=`
    <div class="drill-full-log-modal__backdrop" data-action="close"></div>
    <div class="drill-full-log-modal__dialog" role="dialog" aria-modal="true">
      <div class="drill-full-log-modal__header">
        <h2 class="drill-full-log-modal__title" id="drillFullLogTitle"></h2>
        <button
          type="button"
          class="drill-full-log-modal__close"
          data-action="close"
          aria-label="关闭"
        >
          ×
        </button>
      </div>
      <div class="drill-full-log-modal__body" id="drillFullLogBody"></div>
      <div class="drill-full-log-modal__footer">
        <button type="button" class="drill-info-actions__btn" data-action="export-xls">
          导出
        </button>
        <button type="button" class="drill-info-actions__btn drill-info-actions__btn--muted" data-action="close">
          关闭
        </button>
      </div>
    </div>
  `,document.body.appendChild(e);const t=e.querySelector("#drillFullLogTitle"),s=e.querySelector("#drillFullLogBody");let a=null;function n(){e.hidden=!0,a=null}function i(l){l&&(a=l,t.textContent=`完整柱状图 — ${l.id}`,s.innerHTML=`
      <section class="drill-info-section">
        <h3 class="drill-info-section__title">基本信息</h3>
        ${Mt(l)}
      </section>
      <section class="drill-info-section">
        <h3 class="drill-info-section__title">钻孔柱状图</h3>
        ${Us(l)}
        ${Lt(l)}
      </section>
    `,e.hidden=!1)}return e.addEventListener("click",l=>{var r;const o=(r=l.target.closest("[data-action]"))==null?void 0:r.dataset.action;if(o){if(o==="close"){n();return}a&&o==="export-xls"&&It(a)}}),{show:i,hide:n}}function Qs(e){return`
    <div class="drill-info-panel__id">${e.id}</div>

    <section class="drill-info-section">
      <h3 class="drill-info-section__title">基本信息</h3>
      ${Mt(e)}
    </section>

    <section class="drill-info-section">
      <h3 class="drill-info-section__title">钻孔柱状图（简化）</h3>
      ${js(e)}
      ${Lt(e)}
      <div class="drill-info-actions">
        <button type="button" class="drill-info-actions__btn" data-action="full-log">
          查看完整柱状图
        </button>
        <button type="button" class="drill-info-actions__btn" data-action="export">
          导出
        </button>
      </div>
    </section>
  `}function Gs(e,{onClose:t}={}){const s=Ws();e.innerHTML=`
    <div class="cyber-panel cyber-panel--nav cyber-panel--table cyber-panel--drill-info">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title">钻孔信息</span>
        <button
          type="button"
          class="drill-info-panel__close"
          id="drillInfoClose"
          title="关闭"
          aria-label="关闭钻孔信息"
        >
          ×
        </button>
      </div>
      <div class="cyber-panel__body drill-info-panel__body" id="drillInfoBody"></div>
    </div>
  `;const a=e.querySelector("#drillInfoBody"),n=e.querySelector("#drillInfoClose");let i=null;n.addEventListener("click",()=>{t==null||t()}),a.addEventListener("click",o=>{var d;const r=(d=o.target.closest("[data-action]"))==null?void 0:d.dataset.action;if(!(!r||!i)){if(r==="full-log"){s.show(i);return}r==="export"&&It(i)}});function l(o){const r=Bs(o);if(i=r,!r){a.innerHTML=`
        <div class="survey-table-empty">
          <p class="survey-table-empty__title">暂无钻孔数据</p>
          <p class="survey-table-empty__hint">该钻孔信息待接入</p>
        </div>
      `;return}a.innerHTML=Qs(r)}return{showDrill:l}}function Js(e){return`
    <div class="cyber-panel cyber-panel--nav cyber-panel--table cyber-panel--function">
      <div class="cyber-panel__header">
        <span class="cyber-panel__icon"></span>
        <span class="survey-table-panel__title">${e}</span>
      </div>
      <div class="cyber-panel__body function-panel__body"></div>
    </div>
  `}function ea(e){const t=document.createElement("div");t.className="right-panel__table",e.appendChild(t);const s=document.createElement("div");s.className="right-panel__function",s.hidden=!0,e.appendChild(s);const a=document.createElement("div");a.className="right-panel__drill-info",a.hidden=!0,e.appendChild(a);const n=As(t);let i="table",l=null,o=null;const r=new Map,d=Gs(a,{onClose(){h(o)}});function p(b,f,v){const g=document.createElement("div");g.className="function-panel",g.dataset.id=b,g.hidden=!0,g.innerHTML=Js(f);const _=g.querySelector(".function-panel__body"),k=v(_);s.appendChild(g),r.set(b,{wrapper:g,api:k})}function c(){t.hidden=!0,s.hidden=!0,a.hidden=!0}function h(b){i="table",l=null,c(),t.hidden=!1,r.forEach(({wrapper:f,api:v})=>{var g;f.hidden=!0,(g=v.deactivate)==null||g.call(v)}),b&&(o=b,n.showTable(b))}function u(b){i="drillInfo",l=null,c(),a.hidden=!1,r.forEach(({wrapper:f,api:v})=>{var g;f.hidden=!0,(g=v.deactivate)==null||g.call(v)}),d.showDrill(b)}function m(b){r.has(b)&&(i="function",l=b,c(),s.hidden=!1,r.forEach(({wrapper:f,api:v},g)=>{var k,M;const _=g===b;f.hidden=!_,_?(k=v.activate)==null||k.call(v):(M=v.deactivate)==null||M.call(v)}))}function C(){h(o)}return{showTable:h,showDrillInfo:u,showFunction:m,deactivateFunctions:C,registerFunctionPanel:p,getMode:()=>i,getActiveFunctionId:()=>l}}const ta=[{id:"measure",label:"数据测量"},{id:"home",label:"首页"},{id:"model",label:"模型调节"},{id:"roam",label:"摄像机漫游"}];function sa(e,{onSelect:t,defaultId:s="home"}={}){const a=document.createElement("nav");a.className="bottom-toolbar",a.setAttribute("aria-label","功能导航"),a.innerHTML=ta.map(l=>`
    <button
      type="button"
      class="bottom-toolbar__btn"
      data-id="${l.id}"
      aria-pressed="false"
    >${l.label}</button>
  `).join(""),e.appendChild(a);let n=s;function i(l){n=l,a.querySelectorAll(".bottom-toolbar__btn").forEach(o=>{const r=o.dataset.id===l;o.classList.toggle("bottom-toolbar__btn--active",r),o.setAttribute("aria-pressed",r?"true":"false")})}return a.addEventListener("click",l=>{const o=l.target.closest(".bottom-toolbar__btn");!o||o.dataset.id===n||(i(o.dataset.id),t==null||t(o.dataset.id))}),i(s),{setActive:i,getActive:()=>n}}function aa(e){const t=Cesium.Cartographic.fromCartesian(e);return{lon:Cesium.Math.toDegrees(t.longitude),lat:Cesium.Math.toDegrees(t.latitude),height:t.height}}function Ne(e,t){const s=Cesium.Cartesian3.subtract(t,e.camera.positionWC,new Cesium.Cartesian3);return Cesium.Cartesian3.dot(s,e.camera.directionWC)>0}function fe(e,t,s=null){const a=Cesium.Cartographic.fromCartesian(e);return{cartesian:Cesium.Cartesian3.clone(e),cartographic:a,lonLatHeight:aa(e),source:t,picked:s}}function Zt(e,t){const s=e.scene,a=s.pickPosition(t);if(Cesium.defined(a)&&Ne(e,a))return fe(a,"depth");const n=s.pick(t);if(Cesium.defined(n)){const l=s.pickPosition(t);if(Cesium.defined(l)&&Ne(e,l))return fe(l,"depth",n)}const i=e.camera.getPickRay(t);if(i){const l=s.globe.pick(i,s);if(Cesium.defined(l))return fe(l,"globe",n??null)}return null}function na(e,t){const s=e.scene,a=s.pickPosition(t);if(Cesium.defined(a)&&Ne(e,a))return a;const n=e.camera.getPickRay(t);if(n){const i=s.globe.pick(n,s);if(Cesium.defined(i))return i}return null}function ia({lon:e,lat:t,height:s},a=6){return{lon:e.toFixed(a),lat:t.toFixed(a),height:s.toFixed(2)}}const z={point:Cesium.Color.CYAN,line:Cesium.Color.YELLOW,polygon:Cesium.Color.fromCssColorString("#00d4ff").withAlpha(.35),outline:Cesium.Color.fromCssColorString("#00d4ff")},la=z.line.withAlpha(.7),oa=z.polygon.withAlpha(.25),ra=z.outline.withAlpha(.7);function ht(e){let t=0;for(let s=1;s<e.length;s+=1){const a=new Cesium.EllipsoidGeodesic(e[s-1],e[s]);t+=a.surfaceDistance}return t}function ca(e){if(e.length<3)return 0;const s=Cesium.EllipsoidTangentPlane.fromPoints(e).projectPointsOntoPlane(e);return Cesium.PolygonPipeline.computeArea2D(s)}function ua(e){const t=new Cesium.ScreenSpaceEventHandler(e.scene.canvas),s=e.cesiumWidget.screenSpaceEventHandler,a=e.entities,n=[];let i=!1,l=null,o=[],r=[],d=null,p=null,c=null,h=null,u=0,m=null;const C=new Cesium.Cartesian2,b=[new Cesium.Cartesian3,new Cesium.Cartesian3],f=[],v=250;function g(y){return n.push(y),y}function _(y){return r.push(y),g(y)}function k(y){a.remove(y);const T=n.indexOf(y);T>=0&&n.splice(T,1)}function M(){c=null,p=null,d&&(a.remove(d),d=null),u&&(cancelAnimationFrame(u),u=0)}function N(){return l==="distance"||l==="height"?"line":l==="area"?o.length>=3?"polygon":"line":null}function Z(){return!c||o.length===0?[]:(l==="height"&&o.length>=2?(Cesium.Cartesian3.clone(o[0],b[0]),Cesium.Cartesian3.clone(o[1],b[1])):(Cesium.Cartesian3.clone(o[o.length-1],b[0]),Cesium.Cartesian3.clone(c,b[1])),b)}function D(){if(!c||o.length<3)return new Cesium.PolygonHierarchy([]);f.length=0;for(let y=0;y<o.length;y+=1)f.push(o[y]);return f.push(c),new Cesium.PolygonHierarchy(f)}function ee(){const y=N();y&&(d&&p!==y&&(a.remove(d),d=null,p=null),!d&&(p=y,y==="line"?d=a.add({polyline:{positions:new Cesium.CallbackProperty(()=>Z(),!1),width:2,material:la}}):d=a.add({polygon:{hierarchy:new Cesium.CallbackProperty(()=>D(),!1),material:oa,outline:!0,outlineColor:ra}})))}function Ut(){if(u=0,!i||!l||o.length===0)return;const y=na(e,C);y&&(c||(c=new Cesium.Cartesian3),Cesium.Cartesian3.clone(y,c),ee())}function Xt(){o=[],r.forEach(y=>k(y)),r=[],M()}function U(){Xt(),l=null}function he(){r=[],o=[],M(),l=null}function Wt(y,T){return _(a.add({position:y,point:{pixelSize:10,color:z.point,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:void 0}))}function Qt(y,T){return _(a.add({polyline:{positions:[y,T],width:3,material:z.line,clampToGround:!0}}))}function me(y,T){o.push(y),Wt(y),o.length>=2&&Qt(o[o.length-2],y)}function Gt(){if(o.length<2)return;const y=o.map(K=>Cesium.Cartographic.fromCartesian(K)),T=ht(y);m==null||m({type:"distance",value:T,unit:"m"}),he()}function Jt(){if(o.length<3)return;const y=ca(o);r.filter(T=>T.polyline).forEach(T=>{k(T);const K=r.indexOf(T);K>=0&&r.splice(K,1)}),g(a.add({polygon:{hierarchy:new Cesium.PolygonHierarchy(o),material:z.polygon,outline:!0,outlineColor:z.outline,outlineWidth:2}})),m==null||m({type:"area",value:y,unit:"m²"}),he()}function Me(){if(o.length<2)return;const y=Cesium.Cartographic.fromCartesian(o[0]),T=Cesium.Cartographic.fromCartesian(o[1]),K=T.height-y.height,ge=ht([y,T]),O=r.filter(ss=>ss.point),Le={font:"13px sans-serif",fillColor:Cesium.Color.WHITE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-14),disableDepthTestDistance:Number.POSITIVE_INFINITY};O[0]&&(O[0].label={...Le,text:"起点"}),O[1]&&(O[1].label={...Le,text:"终点"}),m==null||m({type:"height",heightDiff:K,horizontal:ge,unit:"m"}),he()}function es(){l==="distance"?Gt():l==="area"?Jt():l==="height"&&Me()}function ts(y){if(!i||!l)return;const T=Zt(e,y.position);if(T){if(l==="height"){o.length===0?me(T.cartesian):o.length===1&&(me(T.cartesian),Me());return}me(T.cartesian),l==="area"&&o.length===3&&(a.remove(d),d=null,p=null)}}return t.setInputAction(y=>{window.clearTimeout(h),h=window.setTimeout(()=>{h=null,ts(y)},v)},Cesium.ScreenSpaceEventType.LEFT_CLICK),t.setInputAction(y=>{!i||!l||o.length===0||(C.x=y.endPosition.x,C.y=y.endPosition.y,u||(u=requestAnimationFrame(Ut)))},Cesium.ScreenSpaceEventType.MOUSE_MOVE),t.setInputAction(()=>{window.clearTimeout(h),h=null,!(!i||!l||l==="height")&&es()},Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),{setResultCallback(y){m=y},activate(){i=!0,s.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)},deactivate(){i=!1,window.clearTimeout(h),h=null,u&&(cancelAnimationFrame(u),u=0),U(),s.setInputAction(y=>{const T=e.camera.pickEllipsoid(y.position,e.scene.globe.ellipsoid);if(!T)return;const K=Cesium.Cartographic.fromCartesian(T),ge=e.scene.globe.getHeight(K)??0,O=e.camera.positionCartographic.height;e.camera.flyTo({destination:Cesium.Cartesian3.fromRadians(K.longitude,K.latitude,ge+O*.5),duration:1})},Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)},startDistance(){U(),l="distance"},startArea(){U(),l="area"},startHeight(){U(),l="height"},clearAll(){U(),n.forEach(y=>a.remove(y)),n.length=0},destroy(){t.destroy()}}}function da(e){return e.type==="distance"?`距离：${e.value.toFixed(2)} ${e.unit}`:e.type==="area"?`面积：${e.value.toFixed(2)} ${e.unit}`:e.type==="height"?`高差：${e.heightDiff.toFixed(2)} m，水平距离：${e.horizontal.toFixed(2)} m`:""}function pa(e,t){e.innerHTML=`
    <div class="function-panel__section">
      <p class="function-panel__hint">左键点击添加测量点与连线，双击左键结束测量。高度测量选取两个点后自动完成。</p>
      <div class="function-panel__actions">
        <button type="button" class="function-panel__btn" data-mode="distance">距离测量</button>
        <button type="button" class="function-panel__btn" data-mode="area">面积测量</button>
        <button type="button" class="function-panel__btn" data-mode="height">高度测量</button>
        <button type="button" class="function-panel__btn function-panel__btn--muted" data-mode="clear">清除全部</button>
      </div>
    </div>
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">测量结果</h3>
      <ul class="function-panel__results" id="measureResults"></ul>
    </div>
  `;const s=e.querySelector("#measureResults"),a=ua(t);return a.setResultCallback(n=>{const i=document.createElement("li");i.className="function-panel__result-item",i.textContent=da(n),s.prepend(i)}),e.addEventListener("click",n=>{const i=n.target.closest("[data-mode]");if(!i)return;const l=i.dataset.mode;l==="distance"?a.startDistance():l==="area"?a.startArea():l==="height"?a.startHeight():l==="clear"&&(a.clearAll(),s.innerHTML="")}),{activate(){a.activate()},deactivate(){a.deactivate()}}}const ha=new Set(["w","a","s","d","q","e"]),ma=new Set(["arrowup","arrowdown","arrowleft","arrowright"]),F=30,te=.004;function ga(e){let t=!1;const s=new Set;let a=null;function n(d){if(!t)return;const p=d.key.toLowerCase();(ha.has(p)||ma.has(p))&&(s.add(p),d.preventDefault())}function i(d){const p=d.key.toLowerCase();s.delete(p)}function l(){if(!t||s.size===0)return;const d=e.camera,p=1/60;s.has("w")&&d.moveForward(F*p),s.has("s")&&d.moveBackward(F*p),s.has("a")&&d.moveLeft(F*p),s.has("d")&&d.moveRight(F*p),s.has("q")&&d.moveDown(F*p),s.has("e")&&d.moveUp(F*p),s.has("arrowleft")&&d.lookLeft(te),s.has("arrowright")&&d.lookRight(te),s.has("arrowup")&&d.lookUp(te),s.has("arrowdown")&&d.lookDown(te)}function o(){t||(t=!0,document.addEventListener("keydown",n),document.addEventListener("keyup",i),a=e.clock.onTick.addEventListener(l))}function r(){t&&(t=!1,s.clear(),document.removeEventListener("keydown",n),document.removeEventListener("keyup",i),a&&(e.clock.onTick.removeEventListener(l),a=null))}return{activate:o,deactivate:r}}function q(e){return Number(e.toFixed(3))}function mt(e,t){const s=Cesium.Transforms.eastNorthUpToFixedFrame(e),a=Cesium.Matrix4.inverse(s,new Cesium.Matrix4),n=Cesium.Matrix4.multiplyByPoint(a,t,new Cesium.Cartesian3);return{x:n.x/1e3,y:n.y/1e3,z:n.z/1e3}}function $(e,t){const s=new Cesium.Cartesian3(t.x*1e3,t.y*1e3,t.z*1e3),a=Cesium.Transforms.eastNorthUpToFixedFrame(e);return Cesium.Matrix4.multiplyByPoint(a,s,new Cesium.Cartesian3)}function fa(e){const t=e.scene,s=t.canvas,a=new Cesium.Cartesian2(s.clientWidth/2,s.clientHeight/2);let n=t.pickPosition(a);if(!Cesium.defined(n)){const i=e.camera.getPickRay(a);n=t.globe.pick(i,t)}return Cesium.defined(n)||(n=Cesium.Cartesian3.add(e.camera.positionWC,Cesium.Cartesian3.multiplyByScalar(e.camera.directionWC,500,new Cesium.Cartesian3),new Cesium.Cartesian3)),n}function ya(e,t){const s=mt(t,e.camera.positionWC),a=mt(t,fa(e));return{position:s,target:a}}function ba(e){const{position:t,target:s}=e;return["INITIAL_CAMERA 预设（可复制到代码）:","const INITIAL_CAMERA = {",`  position: { x: ${q(t.x)}, y: ${q(t.y)}, z: ${q(t.z)} },`,`  target: { x: ${q(s.x)}, y: ${q(s.y)}, z: ${q(s.z)} },`,"};"].join(`
`)}function va(e,t,s){const a=$(t,s.position),n=$(t,s.target),i=Cesium.Cartesian3.subtract(n,a,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(i,i);const l=Cesium.Transforms.eastNorthUpToFixedFrame(a),o=Cesium.Matrix4.getColumn(l,2,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o),e.camera.setView({destination:a,orientation:{direction:i,up:o}})}function gt(e,t,s,{duration:a=1.5}={}){const n=$(t,s.position),i=$(t,s.target),l=Cesium.Cartesian3.subtract(i,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(l,l);const o=Cesium.Transforms.eastNorthUpToFixedFrame(n),r=Cesium.Matrix4.getColumn(o,2,new Cesium.Cartesian3);return Cesium.Cartesian3.normalize(r,r),e.camera.flyTo({destination:n,orientation:{direction:l,up:r},duration:a})}const ne={left:{label:"左线隧道",waypoints:[{position:{x:-.005,y:-.012,z:-.037},target:{x:.203,y:.048,z:-.032}},{position:{x:.062,y:.009,z:-.038},target:{x:.181,y:.036,z:-.034}},{position:{x:.127,y:.026,z:-.037},target:{x:.245,y:.056,z:-.039}},{position:{x:.189,y:.045,z:-.036},target:{x:.325,y:.073,z:-.039}},{position:{x:.257,y:.059,z:-.036},target:{x:.305,y:.069,z:-.039}},{position:{x:.319,y:.072,z:-.037},target:{x:.498,y:.089,z:-.032}},{position:{x:.384,y:.08,z:-.037},target:{x:.601,y:.09,z:-.036}},{position:{x:.448,y:.085,z:-.036},target:{x:.773,y:.074,z:-.036}},{position:{x:.638,y:.082,z:-.035},target:{x:.899,y:.051,z:-.035}},{position:{x:.7,y:.077,z:-.034},target:{x:.832,y:.05,z:-.037}},{position:{x:.764,y:.068,z:-.035},target:{x:.905,y:.039,z:-.031}},{position:{x:5.924,y:-.883,z:-.014},target:{x:6.066,y:-.921,z:-.013}},{position:{x:5.971,y:-.896,z:-.014},target:{x:6.05,y:-.923,z:-.017}},{position:{x:6.039,y:-.918,z:-.014},target:{x:6.103,y:-.944,z:-.017}},{position:{x:6.11,y:-.945,z:-.014},target:{x:6.171,y:-.972,z:-.016}},{position:{x:6.185,y:-.982,z:-.014},target:{x:6.213,y:-.995,z:-.016}},{position:{x:6.28,y:-1.025,z:-.013},target:{x:6.737,y:-1.228,z:-.008}},{position:{x:6.331,y:-1.045,z:-.014},target:{x:6.802,y:-1.213,z:-.008}}]},right:{label:"右线隧道",waypoints:[{position:{x:.004,y:-.038,z:-.036},target:{x:.055,y:-.024,z:-.04}},{position:{x:.072,y:-.021,z:-.038},target:{x:.177,y:.003,z:-.039}},{position:{x:.322,y:.033,z:-.037},target:{x:.552,y:.048,z:-.037}},{position:{x:.383,y:.04,z:-.036},target:{x:.504,y:.048,z:-.038}},{position:{x:.449,y:.044,z:-.036},target:{x:.694,y:.034,z:-.037}},{position:{x:.513,y:.044,z:-.036},target:{x:.812,y:.015,z:-.035}},{position:{x:.575,y:.04,z:-.036},target:{x:.768,y:.023,z:-.035}},{position:{x:.639,y:.034,z:-.036},target:{x:.852,y:.007,z:-.035}},{position:{x:.703,y:.027,z:-.035},target:{x:.983,y:-.017,z:-.034}},{position:{x:.764,y:.017,z:-.035},target:{x:1.496,y:-.125,z:-.032}},{position:{x:5.906,y:-.933,z:-.016},target:{x:6.059,y:-.977,z:-.016}},{position:{x:5.962,y:-.949,z:-.015},target:{x:6.13,y:-1.008,z:-.012}},{position:{x:6.025,y:-.971,z:-.015},target:{x:6.118,y:-1.003,z:-.011}},{position:{x:6.096,y:-.999,z:-.015},target:{x:6.192,y:-1.037,z:-.012}},{position:{x:6.256,y:-1.076,z:-.013},target:{x:6.722,y:-1.259,z:-.026}},{position:{x:6.306,y:-1.094,z:-.014},target:{x:6.779,y:-1.256,z:-.015}}]}},Ca=20;function _a(e,t){return{position:$(e,t.position),target:$(e,t.target)}}function ye(e,t,s){const a=Cesium.Cartesian3.subtract(s,t,new Cesium.Cartesian3);if(Cesium.Cartesian3.magnitudeSquared(a)<1e-12)return;Cesium.Cartesian3.normalize(a,a);const n=Cesium.Transforms.eastNorthUpToFixedFrame(t),i=Cesium.Matrix4.getColumn(n,2,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(i,i),e.camera.cancelFlight(),e.camera.setView({destination:t,orientation:{direction:a,up:i}})}function ft(e,t){const s=t.map(i=>_a(e,i)),a=[];let n=0;for(let i=0;i<s.length-1;i+=1){const l=Cesium.Cartesian3.distance(s[i].position,s[i+1].position);a.push(l),n+=l}return{waypoints:s,segmentLengths:a,totalDistance:n}}function Sa(e,t){const{waypoints:s,segmentLengths:a,totalDistance:n}=e;if(s.length===0)return null;if(s.length===1||n<=0)return s[0];let l=Cesium.Math.clamp(t,0,n);for(let o=0;o<a.length;o+=1){const r=a[o];if(l>r&&o<a.length-1){l-=r;continue}const d=r>0?l/r:0,p=s[o],c=s[o+1];return{position:Cesium.Cartesian3.lerp(p.position,c.position,d,new Cesium.Cartesian3),target:Cesium.Cartesian3.lerp(p.target,c.target,d,new Cesium.Cartesian3)}}return s[s.length-1]}function ka(e,t,{onStateChange:s}={}){const a={left:ft(t,ne.left.waypoints),right:ft(t,ne.right.waypoints)};let n=null,i=null,l=0,o=1,r=!1,d=!1,p=!1,c=null;function h(){s==null||s({running:d,paused:r,completed:p,activeRoute:n,speedMultiplier:o,progress:i!=null&&i.totalDistance?l/i.totalDistance:0})}function u(N){if(!d||r||!i)return;const Z=Math.min((N==null?void 0:N.deltaTime)??1/60,.1);if(l+=Ca*o*Z,l>=i.totalDistance){l=i.totalDistance;const ee=i.waypoints[i.waypoints.length-1];ye(e,ee.position,ee.target),d=!1,r=!0,p=!0,C(),h();return}const D=Sa(i,l);D&&ye(e,D.position,D.target)}function m(){c||(c=e.clock.onTick.addEventListener(u))}function C(){c&&(e.clock.onTick.removeEventListener(u),c=null)}function b(N){if(!a[N])return;i=a[N],n=N,l=0,r=!1,d=!0,p=!1,e.camera.cancelFlight();const Z=i.waypoints[0];ye(e,Z.position,Z.target),m(),h()}function f(){d&&(r=!0,h())}function v(){!d||!r||l>=((i==null?void 0:i.totalDistance)??0)||(r=!1,h())}function g(){d&&(r?v():f())}function _(){d=!1,r=!1,p=!1,n=null,i=null,l=0,C(),h()}function k(N){o=Cesium.Math.clamp(N,.25,4),h()}function M(){_()}return{start:b,pause:f,resume:v,togglePause:g,stop:_,setSpeedMultiplier:k,getSpeedMultiplier:()=>o,isRunning:()=>d,isPaused:()=>r,getActiveRoute:()=>n,destroy:M}}function Ta(e,t,s){e.innerHTML=`
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">隧道漫游</h3>
      <p class="function-panel__hint">选择线路后自动沿隧道内部从入口漫游至出口，可暂停、继续并调节速度。</p>
      <div class="function-panel__actions function-panel__actions--tunnel">
        <button type="button" class="function-panel__btn" data-route="left">${ne.left.label}</button>
        <button type="button" class="function-panel__btn" data-route="right">${ne.right.label}</button>
      </div>
      <div class="function-panel__actions">
        <button type="button" class="function-panel__btn function-panel__btn--muted" data-action="toggle-pause" disabled>暂停</button>
        <button type="button" class="function-panel__btn function-panel__btn--muted" data-action="stop" disabled>停止</button>
      </div>
      <div class="function-panel__speed-control">
        <label class="function-panel__speed-label" for="tunnelRoamSpeed">漫游速度</label>
        <input
          id="tunnelRoamSpeed"
          class="function-panel__speed-slider"
          type="range"
          min="0.25"
          max="4"
          step="0.25"
          value="1"
        />
        <span class="function-panel__speed-value" data-speed-value>1.0×</span>
      </div>
    </div>
    <div class="function-panel__section">
      <h3 class="function-panel__subtitle">手动漫游</h3>
      <p class="function-panel__hint">
        激活后使用键盘慢速漫游场景。漫游时建议将焦点保持在三维视窗内。
      </p>
      <ul class="function-panel__key-list">
        <li><kbd>W</kbd> 前进</li>
        <li><kbd>S</kbd> 后退</li>
        <li><kbd>A</kbd> 左移</li>
        <li><kbd>D</kbd> 右移</li>
        <li><kbd>Q</kbd> 下降</li>
        <li><kbd>E</kbd> 上升</li>
        <li><kbd>↑</kbd> 上看</li>
        <li><kbd>↓</kbd> 下看</li>
        <li><kbd>←</kbd> 左转</li>
        <li><kbd>→</kbd> 右转</li>
      </ul>
      <div class="function-panel__status" id="roamStatus">手动漫游已启用</div>
    </div>
  `;const a=ga(t),n=e.querySelectorAll("[data-route]"),i=e.querySelector("[data-action='toggle-pause']"),l=e.querySelector("[data-action='stop']"),o=e.querySelector("#tunnelRoamSpeed"),r=e.querySelector("[data-speed-value]");function d(c){n.forEach(h=>{const u=h.dataset.route===c.activeRoute&&(c.running||c.completed);h.classList.toggle("function-panel__btn--active",u)}),i.disabled=!c.running,l.disabled=!c.running&&!c.completed,i.textContent=c.running&&c.paused?"继续":"暂停",r.textContent=`${c.speedMultiplier.toFixed(1)}×`}const p=ka(t,s,{onStateChange:d});return e.addEventListener("click",c=>{const h=c.target.closest("[data-route]");if(h){p.start(h.dataset.route),a.deactivate();return}const u=c.target.closest("[data-action]");u&&(u.dataset.action==="toggle-pause"?p.togglePause():u.dataset.action==="stop"&&(p.stop(),a.activate()))}),o.addEventListener("input",()=>{const c=Number(o.value);p.setSpeedMultiplier(c),r.textContent=`${c.toFixed(1)}×`}),{activate(){p.isRunning()||a.activate()},deactivate(){a.deactivate(),p.stop()}}}const X=`
  <svg class="function-panel__locate-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <path fill="none" stroke="currentColor" stroke-width="1.8" d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
  </svg>
`,xa=[{id:"imagery",label:"地形影像图"},{id:"tunnel",label:"隧道模型"},{id:"drill",label:"钻孔模型"}];function wa(e){const t=e.locate?`
      <button
        type="button"
        class="function-panel__locate-btn"
        data-locate="${e.locate}"
        title="${e.locateTitle}"
        aria-label="${e.locateTitle}"
      >${X}</button>
    `:"",s=e.id==="imagery"?`
        <li class="function-panel__imagery-alpha">
          <div class="function-panel__speed-control">
            <span class="function-panel__speed-label">地形影像透明度</span>
            <input
              type="range"
              class="function-panel__speed-slider"
              data-globe-alpha
              min="0"
              max="1"
              step="0.01"
              value="1"
            />
            <span class="function-panel__speed-value" data-globe-alpha-value>1.00</span>
          </div>
        </li>
      `:"";return`
    <li class="function-panel__layer-row">
      <label class="function-panel__toggle">
        <input type="checkbox" data-layer="${e.id}" checked />
        <span class="function-panel__toggle-box"></span>
        <span class="function-panel__toggle-label">${e.label}</span>
      </label>
      ${t}
    </li>
    ${s}
  `}function Na(e,t,s){e.innerHTML=`
    <div class="function-panel__section">
      <p class="function-panel__hint">勾选显示对应图层，取消勾选则隐藏。点击定位按钮可飞到预设视角。</p>
      <ul class="function-panel__layer-toggles">
        <li class="function-panel__camera-locate">
          <button
            type="button"
            class="function-panel__locate-btn function-panel__locate-btn--labeled"
            data-locate="initial"
            title="回到初始视角"
            aria-label="回到初始视角"
          >
            ${X}
            <span>初始视角</span>
          </button>
        </li>
        ${xa.map(wa).join("")}
        <li class="function-panel__drill-locates" data-drill-locates hidden>
          <div class="function-panel__drill-locate-list">
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out2" title="定位到钻孔1" aria-label="定位到钻孔1">
              ${X}
              <span>钻孔1</span>
            </button>
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out3" title="定位到钻孔2" aria-label="定位到钻孔2">
              ${X}
              <span>钻孔2</span>
            </button>
            <button type="button" class="function-panel__locate-btn function-panel__locate-btn--labeled" data-drill="out4" title="定位到钻孔3" aria-label="定位到钻孔3">
              ${X}
              <span>钻孔3</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  `;const a=e.querySelectorAll("[data-layer]"),n=e.querySelector("[data-drill-locates]"),i=e.querySelector('[data-layer="drill"]'),l=e.querySelector("[data-globe-alpha]"),o=e.querySelector("[data-globe-alpha-value]");function r(){const c=t.getGlobeAlpha();l.value=String(c),o.textContent=c.toFixed(2),l.disabled=!t.isImageryVisible()}function d(){const c=t.isDrillLayerVisible();n.hidden=!c}function p(){a.forEach(c=>{const h=c.dataset.layer;h==="imagery"?c.checked=t.isImageryVisible():h==="tunnel"?c.checked=t.isTunnelVisible():h==="drill"&&(c.checked=t.isDrillLayerVisible())}),d(),r()}return l.addEventListener("input",()=>{const c=Number(l.value);t.setGlobeAlpha(c),o.textContent=c.toFixed(2)}),e.addEventListener("change",c=>{var C;const h=c.target.closest("[data-layer]");if(!h)return;const u=h.checked,m=h.dataset.layer;m==="imagery"?(t.setImageryVisible(u),r()):m==="tunnel"?t.setTunnelVisible(u):m==="drill"&&(t.setDrillLayerVisible(u),u||(C=s==null?void 0:s.current)==null||C.hideDrillPresentation(),d())}),e.addEventListener("click",c=>{var m,C;if(c.target.closest("[data-locate='initial']")){(m=s==null?void 0:s.current)==null||m.flyToInitial();return}const u=c.target.closest("[data-drill]");if(u){if(!i.checked)return;(C=s==null?void 0:s.current)==null||C.locateDrill(u.dataset.drill)}}),p(),{activate(){p()},deactivate(){}}}const yt=Cesium.Color.fromCssColorString("#ffd700");function L(e){const t=document.getElementById(e);t&&t.remove()}function Pa(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ka(e,t){const s=new Cesium.ScreenSpaceEventHandler(e.scene.canvas),a=e.entities;let n=0;const i=[];e.scene.canvas.addEventListener("contextmenu",p=>{p.preventDefault()});function l(p,c,h){L("locationMarkCoordsPopup");const u=document.createElement("div");u.id="locationMarkCoordsPopup",u.className="location-mark-coords-popup",u.innerHTML=`
      <div class="location-mark-coords-popup__header">
        <span>坐标信息</span>
        <button type="button" class="location-mark-coords-popup__close" aria-label="关闭">×</button>
      </div>
      <dl class="location-mark-coords-popup__grid">
        <dt>经度</dt><dd>${c.lon}°</dd>
        <dt>纬度</dt><dd>${c.lat}°</dd>
        <dt>高程</dt><dd>${c.height} m</dd>
        <dt>X</dt><dd>${h.x.toFixed(2)}</dd>
        <dt>Y</dt><dd>${h.y.toFixed(2)}</dd>
        <dt>Z</dt><dd>${h.z.toFixed(2)}</dd>
      </dl>
    `,u.style.left=`${Math.min(p.x+12,window.innerWidth-280)}px`,u.style.top=`${Math.min(p.y+12,window.innerHeight-220)}px`,document.body.appendChild(u);const m=()=>{u.remove(),document.removeEventListener("click",C)},C=b=>{u.contains(b.target)||m()};u.querySelector(".location-mark-coords-popup__close").addEventListener("click",m),setTimeout(()=>document.addEventListener("click",C),0)}function o(p){L("locationMarkCoordsPopup"),L("locationMarkCameraPopup");const c=ya(e,t),h=ba(c);console.info(h);const u=document.createElement("div");u.id="locationMarkCameraPopup",u.className="location-mark-coords-popup location-mark-camera-popup",u.innerHTML=`
      <div class="location-mark-coords-popup__header">
        <span>相机坐标</span>
        <button type="button" class="location-mark-coords-popup__close" aria-label="关闭">×</button>
      </div>
      <pre class="location-mark-camera-popup__code">${Pa(h)}</pre>
      <div class="location-mark-camera-popup__actions">
        <button type="button" class="location-mark-camera-popup__copy">复制</button>
      </div>
    `,u.style.left=`${Math.min(p.x+12,window.innerWidth-360)}px`,u.style.top=`${Math.min(p.y+12,window.innerHeight-260)}px`,document.body.appendChild(u);const m=()=>{u.remove(),document.removeEventListener("click",C)},C=b=>{u.contains(b.target)||m()};u.querySelector(".location-mark-coords-popup__close").addEventListener("click",m),u.querySelector(".location-mark-camera-popup__copy").addEventListener("click",async()=>{const b=u.querySelector(".location-mark-camera-popup__copy");try{await navigator.clipboard.writeText(h),b.textContent="已复制",setTimeout(()=>{b.textContent="复制"},1500)}catch(f){console.error("复制失败:",f)}}),setTimeout(()=>document.addEventListener("click",C),0)}function r(p,c){L("locationMarkContextMenu"),L("locationMarkCoordsPopup"),L("locationMarkCameraPopup");const h=ia(c.lonLatHeight),u=c.cartesian,m=document.createElement("div");m.id="locationMarkContextMenu",m.className="location-mark-menu",m.innerHTML=`
      <button type="button" class="location-mark-menu__btn" data-action="coords">
        查看坐标
      </button>
      <button type="button" class="location-mark-menu__btn" data-action="mark">
        添加标记
      </button>
      <button type="button" class="location-mark-menu__btn" data-action="camera">
        打印相机坐标
      </button>
      ${i.length>0?`
        <button type="button" class="location-mark-menu__btn location-mark-menu__btn--muted" data-action="clear">
          清除全部标记
        </button>
      `:""}
    `,m.style.left=`${p.x}px`,m.style.top=`${p.y}px`,document.body.appendChild(m);const C=()=>{m.remove(),document.removeEventListener("click",b)},b=f=>{m.contains(f.target)||C()};setTimeout(()=>document.addEventListener("click",b),0),m.addEventListener("click",f=>{const v=f.target.closest("[data-action]");if(!v)return;const g=v.dataset.action;if(g==="coords")l(p,h,u);else if(g==="camera")o(p);else if(g==="mark"){n+=1;const _=`标记 ${n}`,k=a.add({position:u,point:{pixelSize:12,color:yt,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:_,font:"13px sans-serif",fillColor:yt,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-16),disableDepthTestDistance:Number.POSITIVE_INFINITY}});i.push({id:n,label:_,lon:h.lon,lat:h.lat,height:h.height,entity:k})}else g==="clear"&&d();C()})}function d(){i.forEach(p=>a.remove(p.entity)),i.length=0,n=0}return s.setInputAction(p=>{const c=Zt(e,p.position);c&&r(p.position,c)},Cesium.ScreenSpaceEventType.RIGHT_CLICK),{getMarks(){return[...i]},clearMarks:d,destroy(){L("locationMarkContextMenu"),L("locationMarkCoordsPopup"),L("locationMarkCameraPopup"),s.destroy()}}}function $t(e,t,s,a){const n=Cesium.Cartesian3.subtract(t,e,new Cesium.Cartesian3),i=Cesium.Cartesian3.magnitude(n);Cesium.Cartesian3.normalize(n,n);const l=Cesium.Cartesian3.UNIT_Z;let o=Cesium.Cartesian3.cross(n,l,new Cesium.Cartesian3);Cesium.Cartesian3.magnitudeSquared(o)<1e-12?o=Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_Y):Cesium.Cartesian3.normalize(o,o);const r=Cesium.Cartesian3.cross(o,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(r,r);const d=Cesium.Cartesian3.subtract(a,s,new Cesium.Cartesian3),c=Cesium.Cartesian3.magnitude(d)/i,h=Cesium.Transforms.eastNorthUpToFixedFrame(s),u=Cesium.Matrix4.inverse(h,new Cesium.Matrix4),m=Cesium.Matrix4.multiplyByPointAsVector(u,d,new Cesium.Cartesian3);Cesium.Cartesian3.magnitudeSquared(m)<1e-12&&(m.x=0,m.y=1,m.z=0),Cesium.Cartesian3.normalize(m,m);const C=Cesium.Cartesian3.UNIT_Z;let b=Cesium.Cartesian3.cross(m,C,new Cesium.Cartesian3);Cesium.Cartesian3.magnitudeSquared(b)<1e-12?b=Cesium.Cartesian3.clone(Cesium.Cartesian3.UNIT_X):Cesium.Cartesian3.normalize(b,b);const f=Cesium.Cartesian3.cross(b,m,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(f,f);const v=bt(n,o,r),g=Cesium.Matrix3.transpose(v,new Cesium.Matrix3),_=bt(m,b,f),k=Cesium.Matrix3.multiply(_,g,new Cesium.Matrix3),M=Cesium.Matrix4.fromTranslation(Cesium.Cartesian3.negate(e,new Cesium.Cartesian3),new Cesium.Matrix4),N=Cesium.Matrix4.fromRotation(k,new Cesium.Matrix4),Z=Cesium.Matrix4.multiplyByScale(N,new Cesium.Cartesian3(c,c,c),new Cesium.Matrix4);let D=Cesium.Matrix4.multiply(Z,M,new Cesium.Matrix4);return Cesium.Matrix4.multiply(h,D,new Cesium.Matrix4)}function bt(e,t,s){return Cesium.Matrix3.fromColumnMajorArray([e.x,e.y,e.z,t.x,t.y,t.z,s.x,s.y,s.z])}function R(e){return new Cesium.Cartesian3(e.x,e.y,e.z)}function se(e,t){return Cesium.Matrix4.multiplyByPoint(e,t,new Cesium.Cartesian3)}function Ea(e,t){const s=ke.left,a=Cesium.Cartesian3.fromDegrees(V.lon,V.lat,V.height),n=Cesium.Cartesian3.subtract(t,e,new Cesium.Cartesian3),i=Cesium.Cartesian3.add(a,n,new Cesium.Cartesian3);return $t(R(s.entrance),R(s.exit),a,i)}function Ra(){return Cesium.Cartesian3.fromDegrees(V.lon,V.lat,V.height)}async function Ma(e){await e.readyPromise;const t=e.root;t!=null&&t.transform&&!Cesium.Matrix4.equalsEpsilon(t.transform,Cesium.Matrix4.IDENTITY,Cesium.Math.EPSILON10)&&(t.transform=Cesium.Matrix4.IDENTITY.clone())}function La(e,t,s,a){const n=ke.left,i=ke.right,l=[{modelEntrance:R(n.entrance),modelExit:R(n.exit)},{modelEntrance:R(n.exit),modelExit:R(n.entrance)}];let o=null,r=Number.POSITIVE_INFINITY,d=null;for(const p of l){const c=$t(p.modelEntrance,p.modelExit,e,t),h={leftEntrance:Cesium.Cartesian3.distance(se(c,R(n.entrance)),e),leftExit:Cesium.Cartesian3.distance(se(c,R(n.exit)),t),rightEntrance:Cesium.Cartesian3.distance(se(c,R(i.entrance)),s),rightExit:Cesium.Cartesian3.distance(se(c,R(i.exit)),a)},u=h.rightEntrance+h.rightExit;u<r&&(r=u,o=c,d=h)}return{matrix:o,errors:d}}function Ia(e,t=0){return Cesium.Cartesian3.fromDegrees(e.lon,e.lat,t)}function H(e){return Ia(e,e.elevation)}function Za(e,t){Object.entries(t).forEach(([,s])=>{const a=H(s.entrance),n=H(s.exit);e.entities.add({name:`${s.name}进口`,position:a,point:{pixelSize:12,color:Cesium.Color.LIME,outlineWidth:2,outlineColor:Cesium.Color.BLACK},label:{text:`${s.name}进口
H=${s.entrance.elevation.toFixed(3)}m`,font:"14px sans-serif",fillColor:Cesium.Color.WHITE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-14)}}),e.entities.add({name:`${s.name}出口`,position:n,point:{pixelSize:12,color:Cesium.Color.ORANGE,outlineWidth:2,outlineColor:Cesium.Color.BLACK},label:{text:`${s.name}出口
H=${s.exit.elevation.toFixed(3)}m`,font:"14px sans-serif",fillColor:Cesium.Color.WHITE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-14)}})})}const Y={tx:0,ty:-529,tz:322,rx:0,ry:0,rz:9.4},$a={tx:10.27,ty:-528.74,tz:283.71,rx:0,ry:0,rz:9.4,scale:.992},W={tx:0,ty:0,tz:0,rx:0,ry:0,rz:0,scale:1};function Aa(e,t,s){const a=Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(e),new Cesium.Matrix3),n=Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(t),new Cesium.Matrix3),i=Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(s),new Cesium.Matrix3);let l=Cesium.Matrix3.multiply(n,a,new Cesium.Matrix3);return l=Cesium.Matrix3.multiply(i,l,l),l}function Da(e=W,t=!0){return t?{tx:Y.tx+e.tx,ty:Y.ty+e.ty,tz:Y.tz+e.tz,rx:Y.rx+e.rx,ry:Y.ry+e.ry,rz:Y.rz+e.rz,scale:e.scale??1}:{tx:e.tx,ty:e.ty,tz:e.tz,rx:e.rx,ry:e.ry,rz:e.rz,scale:e.scale??1}}function At(e,t){const s=Cesium.Transforms.eastNorthUpToFixedFrame(e),a=Cesium.Matrix4.inverse(s,new Cesium.Matrix4),n=Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(t.tx,t.ty,t.tz),new Cesium.Matrix4),i=Cesium.Matrix4.fromRotation(Aa(t.rx,t.ry,t.rz),new Cesium.Matrix4),l=Cesium.Matrix4.fromScale(new Cesium.Cartesian3(t.scale,t.scale,t.scale),new Cesium.Matrix4);let o=Cesium.Matrix4.multiply(n,i,new Cesium.Matrix4);return o=Cesium.Matrix4.multiply(o,l,o),Cesium.Matrix4.multiply(s,Cesium.Matrix4.multiply(o,a,new Cesium.Matrix4),new Cesium.Matrix4)}function Ba(e,t){const s=At(e,$a);return Cesium.Matrix4.multiply(s,t,new Cesium.Matrix4)}function za(e,t,s=W,{applyRegistration:a=!0,initialPlacementMatrix:n=null}={}){const i=Da(s,a),l=At(t,i);if(!a){const o=n??Cesium.Matrix4.IDENTITY;return Cesium.Matrix4.multiply(l,o,new Cesium.Matrix4)}return Cesium.Matrix4.multiply(l,e,new Cesium.Matrix4)}const Dt={position:{x:-.064,y:-.059,z:.028},target:{x:.02,y:-.03,z:-.04}},Q=1;function ie(e,t){if(t>=1){e.scene.globe.translucency.enabled=!1,e.scene.globe.translucency.frontFaceAlpha=1;return}e.scene.globe.translucency.enabled=!0,e.scene.globe.translucency.frontFaceAlpha=t}function Oa(e){const t=e.imageryLayers;for(let a=0;a<t.length;a+=1)t.get(a).show=!1;const s=e.scene.globe;s.show=!1,s.translucency.enabled=!1,s.translucency.frontFaceAlpha=1}function Fa(e,t=Q){const s=e.imageryLayers;for(let n=0;n<s.length;n+=1){const i=s.get(n);i.show=!0,i.alpha=1}const a=e.scene.globe;a.show=!0,ie(e,t)}function qa(e,t=document.body){ie(e,Q);const s=document.createElement("div");s.className="control-panel translucency-panel",s.innerHTML=`
    <div class="translucency-panel__title">影像透明度</div>
    <div class="translucency-panel__control">
      <input
        id="globeAlphaSlider"
        class="translucency-panel__slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value="${Q}"
      />
      <span id="globeAlphaValue" class="translucency-panel__value">${Q.toFixed(2)}</span>
    </div>
  `,t.appendChild(s);const a=s.querySelector("#globeAlphaSlider"),n=s.querySelector("#globeAlphaValue");function i(l){a.value=String(l),n.textContent=l.toFixed(2)}return a.addEventListener("input",()=>{const l=Number(a.value);ie(e,l),n.textContent=l.toFixed(2)}),{setAlpha:i}}const be={min:-1e3,max:1e3,step:1,decimals:1},ve={min:-90,max:90,step:.1,decimals:1},Ya={min:.5,max:2,step:.001,decimals:3},vt=[{key:"tx",label:"东向 E (m)",group:"粗调平移",...be},{key:"ty",label:"北向 N (m)",group:"粗调平移",...be},{key:"tz",label:"天向 U (m)",group:"粗调平移",...be},{key:"rx",label:"绕 X 轴 (东) °",group:"粗调旋转",...ve},{key:"ry",label:"绕 Y 轴 (北) °",group:"粗调旋转",...ve},{key:"rz",label:"绕 Z 轴 (天) °",group:"粗调旋转",...ve},{key:"scale",label:"缩放倍率",group:"粗调缩放",...Ya}];function Bt(e,t){return String(Number(e.toFixed(t)))}function Va(e,t){return`
    <div class="control-panel__row">
      <label class="control-panel__label" for="tileset-${e.key}">${e.label}</label>
      <input
        id="tileset-${e.key}"
        class="control-panel__slider"
        type="range"
        min="${e.min}"
        max="${e.max}"
        step="${e.step}"
        value="${t}"
        data-key="${e.key}"
      />
      <input
        class="control-panel__number"
        type="number"
        min="${e.min}"
        max="${e.max}"
        step="${e.step}"
        value="${Bt(t,e.decimals)}"
        data-key="${e.key}"
      />
    </div>
  `}function Ha({tileset:e,baseMatrix:t,anchor:s,initialPlacementMatrix:a=null,applyRegistration:n=!0,container:i=document.body}){let l=[],o=n;const r={...W},d=document.createElement("div");d.className="control-panel tileset-panel";const p=["粗调平移","粗调旋转","粗调缩放"];d.innerHTML=`
    <div class="control-panel__title">模型粗调</div>
    ${p.map(u=>{const m=vt.filter(C=>C.group===u);return`
          <div class="control-panel__section">
            <div class="control-panel__section-title">${u}</div>
            ${m.map(C=>Va(C,r[C.key])).join("")}
          </div>
        `}).join("")}
    <button type="button" class="control-panel__reset">重置粗调</button>
  `,i.appendChild(d);function c(){if(l.length===0)return;const u=za(t,s,r,{applyRegistration:o,initialPlacementMatrix:a});for(const m of l)m.modelMatrix=u}function h(u,m){const C=vt.find(g=>g.key===u),b=Cesium.Math.clamp(m,C.min,C.max);r[u]=b;const f=d.querySelector(`input[type="range"][data-key="${u}"]`),v=d.querySelector(`input[type="number"][data-key="${u}"]`);f.value=String(b),v.value=Bt(b,C.decimals),c()}return d.querySelectorAll("input[type='range']").forEach(u=>{u.addEventListener("input",()=>{h(u.dataset.key,Number(u.value))})}),d.querySelectorAll("input[type='number']").forEach(u=>{u.addEventListener("change",()=>{h(u.dataset.key,Number(u.value))})}),d.querySelector(".control-panel__reset").addEventListener("click",()=>{Object.keys(W).forEach(u=>{h(u,W[u])})}),c(),{panel:d,getAdjust:()=>({...r}),setAdjust:u=>{Object.entries(u).forEach(([m,C])=>{m in r&&h(m,C)})},setTileset:u=>{l=u?[u]:[],c()},setTilesets:u=>{l=u??[],c()},setApplyRegistration:u=>{o=u,c()},getApplyRegistration:()=>o,reapplyMatrix:c}}const ja={width:5.6,height:3.2},Ct={out2:{label:"钻孔1",camera:{position:{x:1.151,y:.184,z:.214},target:{x:1.158,y:.18,z:.212}},popupEnu:{x:1.409,y:.002,z:.128},popupSize:{width:140,height:80}},out3:{label:"钻孔2",camera:{position:{x:2.178,y:-.108,z:.479},target:{x:1.633,y:-.061,z:.117}},popupEnu:{x:1.726,y:-.052,z:.211},popupSize:{width:168,height:96}},out4:{label:"钻孔3",camera:{position:{x:3.535,y:-1.084,z:.376},target:{x:11.503,y:7.684,z:-.636}},popupEnu:{x:4.054,y:-.57,z:.265},popupSize:{width:224,height:128}}};function Ua(e,t){var s;return e.popupEnu?$(t,e.popupEnu):(s=e.camera)!=null&&s.target?$(t,e.camera.target):null}const Xa="out1",ue=["out1","out"],G=["out2","out3","out4"],zt={skipLevelOfDetail:!0,baseScreenSpaceError:1024,skipScreenSpaceErrorFactor:16,cullWithChildrenBounds:!0,dynamicScreenSpaceError:!0,dynamicScreenSpaceErrorDensity:.002,foveatedScreenSpaceError:!0,foveatedConeSize:.1},Wa={...zt,maximumScreenSpaceError:20},Qa={...zt,maximumScreenSpaceError:48};function Ga(e){return ue.includes(e)?Wa:Qa}const Ot=[{label:"钻孔1",folder:"out2"},{label:"钻孔2",folder:"out3"},{label:"钻孔3",folder:"out4"}];async function Ja(e,t){await t.readyPromise;const s=t.boundingSphere.radius;await e.flyTo(t,{duration:1.5,offset:new Cesium.HeadingPitchRange(0,Cesium.Math.toRadians(-35),Math.max(s*2.5,30))})}function en(e,t){if(!Cesium.defined(e))return null;let s=e.tileset;if(!s&&e.content&&(s=e.content.tileset),!s&&e.primitive instanceof Cesium.Cesium3DTileset&&(s=e.primitive),!s)return null;for(const a of G)if(t.get(a)===s)return a;return null}function tn({viewer:e,tilesetByFolder:t,tilesetVisibility:s,anchor:a,popupManager:n,legendPanel:i,initialCamera:l}){let o="initial",r=null,d=null;function p(){r==null||r(o)}function c(){n==null||n.hide(),i==null||i.hide()}async function h(g){if(!(s!=null&&s.isDrillLayerVisible()))return!1;try{return await s.showDrillTileset(g),!0}catch(_){return console.error("显示钻孔模型失败:",_),!1}}async function u(g){const _=Ct[g];if(_!=null&&_.camera){await gt(e,a,_.camera);return}const k=t.get(g);if(!k){console.warn(`未找到模型: ${g}`);return}await Ja(e,k)}async function m(g){const _=Ct[g];if(!_){n==null||n.hide();return}const k=Ua(_,a);await(n==null?void 0:n.show({worldPosition:k,title:_.label,size:_.popupSize}))}async function C({moveCamera:g=!0}={}){if(o="initial",c(),s!=null&&s.isDrillLayerVisible()&&await s.showDrillTilesets(),p(),!!g)try{await gt(e,a,l)}catch(_){console.error("回到初始视角失败:",_)}}async function b(g){if(g==="initial"){await C();return}if(c(),!!await h(g)){o=g,p();try{await u(g)}catch(k){console.error("飞行定位失败:",k)}}}async function f(g){if(!(!(s!=null&&s.isDrillLayerVisible())||(o!==g&&(n==null||n.hide()),!await h(g)))){o=g,i==null||i.show(),p(),d==null||d(g);try{await m(g)}catch(k){console.error("显示钻孔弹窗失败:",k)}}}function v(){const g=new Cesium.ScreenSpaceEventHandler(e.scene.canvas);return g.setInputAction(_=>{const k=en(e.scene.pick(_.position),t);k&&f(k)},Cesium.ScreenSpaceEventType.LEFT_CLICK),()=>g.destroy()}return{DRILL_HOLES:Ot,locateDrill:b,pickDrill:f,flyToInitial:C,hideLegend:()=>i==null?void 0:i.hide(),hideDrillPresentation:c,getActiveFolder:()=>o,setOnActiveChange:g=>{r=g},setOnDrillPick:g=>{d=g},bindSceneClick:v}}function sn({viewer:e,tilesetByFolder:t,tilesetVisibility:s,anchor:a,popupManager:n,legendPanel:i,initialCamera:l,container:o=document.body}){const r=tn({viewer:e,tilesetByFolder:t,tilesetVisibility:s,anchor:a,popupManager:n,legendPanel:i,initialCamera:l}),d=document.createElement("div");d.className="control-panel drill-hole-panel",d.innerHTML=`
    <div class="control-panel__title">钻孔定位</div>
    <div class="control-panel__row drill-hole-panel__row">
      <label class="control-panel__label" for="drillHoleSelect">选择钻孔</label>
      <select id="drillHoleSelect" class="drill-hole-panel__select">
        <option value="initial" selected>初始视角</option>
        ${Ot.map(h=>`<option value="${h.folder}">${h.label}</option>`).join("")}
      </select>
    </div>
  `,o.appendChild(d);const p=d.querySelector("#drillHoleSelect");r.setOnActiveChange(h=>{p.value=h}),p.addEventListener("change",()=>{const h=p.value;if(h==="initial"){r.flyToInitial();return}r.locateDrill(h)});const c=r.bindSceneClick();return{panel:d,...r,flyTo:h=>r.locateDrill(h),destroy(){c()}}}const an=[{name:"红黏土",color:"#C05030"},{name:"灰岩",color:"#D9D9D9"},{name:"白云岩",color:"#CFE2F3"},{name:"溶洞",color:"#4A90E2"},{name:"煤",color:"#000000"},{name:"炭质页岩",color:"#6B6B6B"},{name:"页岩",color:"#808080"},{name:"砂质页岩",color:"#B7B29A"},{name:"角砾岩",color:"#C49A6C"},{name:"铝土岩",color:"#A74E1F"},{name:"采空区",color:"#C0C0C0"},{name:"红黏土(可塑)",color:"#D55E3A"},{name:"地下水位线",type:"line",lineStyle:"dashed",color:"#1E88E5"},{name:"岩界线",type:"line",lineStyle:"solid",color:"#000000"}],nn="图 例(柱状图填充样式)";function ln({name:e,color:t,type:s="fill",lineStyle:a="dashed",image:n}){return s==="line"?`
      <li class="lithology-legend__item">
        <span
          class="${a==="solid"?"lithology-legend__swatch lithology-legend__swatch--line lithology-legend__swatch--line-solid":"lithology-legend__swatch lithology-legend__swatch--line"}"
          style="--legend-line-color: ${t};"
          aria-hidden="true"
        ></span>
        <span class="lithology-legend__label">${e}</span>
      </li>
    `:`
    <li class="lithology-legend__item">
      <span
        class="lithology-legend__swatch"
        style="${n?`background-image: url(${n});`:`background-color: ${t};`}"
        aria-hidden="true"
      ></span>
      <span class="lithology-legend__label">${e}</span>
    </li>
  `}function on(e=document.body){const t=document.createElement("div");return t.className="lithology-legend-panel",t.hidden=!0,t.innerHTML=`
    <div class="lithology-legend">
      <div class="lithology-legend__title">${nn}</div>
      <ul class="lithology-legend__list">
        ${an.map(ln).join("")}
      </ul>
    </div>
  `,e.appendChild(t),{panel:t,show(){t.hidden=!1},hide(){t.hidden=!0},isVisible:()=>!t.hidden}}const rn="/suidao/img/popup_panel.png",Ce=1120,_e=640,cn=2,un=4;function dn(e){return new Promise((t,s)=>{const a=new Image;a.onload=()=>t(a),a.onerror=s,a.src=e})}function pn(e,t){const s=Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(e,new Cesium.Cartesian3);return Cesium.Cartesian3.add(e,Cesium.Cartesian3.multiplyByScalar(s,t,new Cesium.Cartesian3),new Cesium.Cartesian3)}function hn(e,t,s){const a=Cesium.Cartesian3.subtract(e.camera.positionWC,t,new Cesium.Cartesian3);return Cesium.Cartesian3.magnitudeSquared(a)<1e-6?t:(Cesium.Cartesian3.normalize(a,a),Cesium.Cartesian3.add(t,Cesium.Cartesian3.multiplyByScalar(a,s,new Cesium.Cartesian3),new Cesium.Cartesian3))}function mn(e,t){let s=Cesium.Cartesian3.clone(t);return s=pn(s,cn),s=hn(e,s,un),s}async function gn(e){const t=await dn(rn),s=document.createElement("canvas");s.width=Ce,s.height=_e;const a=s.getContext("2d");return a.drawImage(t,0,0,Ce,_e),a.font='600 72px "Segoe UI", "Microsoft YaHei", sans-serif',a.fillStyle="#67e8f9",a.textAlign="center",a.textBaseline="middle",a.shadowColor="rgba(34, 211, 238, 0.6)",a.shadowBlur=16,a.fillText(e,Ce/2,_e*.42),s}function fn(e){let t=null,s=0;function a(){s+=1,t&&(e.entities.remove(t),t=null)}async function n({worldPosition:i,title:l,size:o=ja}){const r=++s;t&&(e.entities.remove(t),t=null);const d=await gn(l);r===s&&(t=e.entities.add({position:mn(e,i),billboard:{image:d,sizeInMeters:!0,width:o.width,height:o.height,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,horizontalOrigin:Cesium.HorizontalOrigin.CENTER,disableDepthTestDistance:Number.POSITIVE_INFINITY}}))}return{show:n,hide:a,getCurrent:()=>t}}function yn(e,t,{loadTileset:s,onGlobeAlphaChange:a}={}){let n=!0,i=!0,l=!0,o=Q;function r(f){o=f,n&&ie(e,f),a==null||a(f)}function d(f){if(n=f,f){Fa(e,o),a==null||a(o);return}Oa(e),a==null||a(0)}function p(f){i=f;for(const v of ue){const g=t.get(v);g&&(g.show=f)}}function c(){for(const f of G){const v=t.get(f);v&&(v.show=!1)}}async function h(){for(const f of G){let v=t.get(f);!v&&s&&(v=await s(f)),v&&(await v.readyPromise,e.scene.primitives.contains(v)||e.scene.primitives.add(v),v.show=!0)}}async function u(){if(!l){c();return}await h()}async function m(f){G.includes(f)&&await u()}function C(){c()}function b(f){if(l=f,!f){c();return}u()}return{setImageryVisible:d,setTunnelVisible:p,setDrillLayerVisible:b,setGlobeAlpha:r,isImageryVisible:()=>n,isTunnelVisible:()=>i,isDrillLayerVisible:()=>l,getGlobeAlpha:()=>o,hideDrillTilesets:C,showDrillTileset:m,showDrillTilesets:u}}const Ft={west:107.331067,south:29.27766,east:107.399732,north:29.308473};function qt(e=Ft){return Cesium.Rectangle.fromDegrees(e.west,e.south,e.east,e.north)}function bn(e,t=Ft){e.scene.globe.cartographicLimitRectangle=qt(t)}window.CESIUM_BASE_URL="/suidao/cesium/";const{layerTreeRoot:vn,chartPanelRoot:Cn,bottomToolbarRoot:_n,cesiumContainer:Sn,showRightSidebar:de,hideLeftSidebar:kn}=is(),le={current:null},A=ea(Cn),_t=cs(vn,as,{onSelect(e){A.getMode()==="table"&&(A.showTable(e),de())}});function Yt({resetScene:e=!1}={}){var s;e&&((s=le.current)==null||s.flyToInitial({moveCamera:!1}));const t=_t.getNodeById(pt);_t.setActive(pt),A.showTable(t),de()}Yt();const J=document.createElement("div");J.className="dev-tools";J.hidden=!0;document.body.appendChild(J);Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNDUxZjAzYi1mZDIwLTQ3ZTQtYTNkYi05NzljZDVmM2Y0N2IiLCJpZCI6MzU5MTc2LCJpYXQiOjE3NjI4NDA2NDN9.NJ8S_lNZjtgvTdf7i2DyMIofYthpzdvb2OJaI1nfyS0";const Tn="9e2778516442f77735a580e624742cb2",xn=qt();function Vt(e){return new Cesium.UrlTemplateImageryProvider({url:`https://t{s}.tianditu.gov.cn/DataServer?T=${e}_w&x={x}&y={y}&l={z}&tk=${Tn}`,subdomains:["0","1","2","3","4","5","6","7"],maximumLevel:18,rectangle:xn})}const w=new Cesium.Viewer(Sn,{terrain:Cesium.Terrain.fromWorldTerrain(),animation:!1,timeline:!1,baseLayerPicker:!1,geocoder:!0,homeButton:!0,sceneModePicker:!0,navigationHelpButton:!0,fullscreenButton:!0,selectionIndicator:!1,baseLayer:new Cesium.ImageryLayer(Vt("img"))});w.imageryLayers.addImageryProvider(Vt("cia"));bn(w);w.scene.globe.depthTestAgainstTerrain=!1;w.scene.pickTranslucentDepth=!0;A.registerFunctionPanel("measure","数据测量",e=>pa(e,w));sa(_n,{onSelect(e){if(e==="home"){Yt({resetScene:!0});return}A.showFunction(e),de()}});const pe=document.createElement("div");pe.className="control-panel-stack control-panel-stack--right";J.appendChild(pe);const wn=qa(w,pe),Nn=fn(w),Pn=on(document.getElementById("app")),j=Ra();Ka(w,j);va(w,j,Dt);A.registerFunctionPanel("roam","摄像机漫游",e=>Ta(e,w,j));const oe=Pe.left,re=Pe.right,Ht=H(oe.entrance),jt=H(oe.exit),Kn=H(re.entrance),En=H(re.exit);Za(w,Pe);const{matrix:Rn,errors:ae}=La(Ht,jt,Kn,En),Mn=Ba(j,Ea(Ht,jt));console.info("隧道配准误差（米）:",{左线进口:ae.leftEntrance.toFixed(2),左线出口:ae.leftExit.toFixed(2),右线进口:ae.rightEntrance.toFixed(2),右线出口:ae.rightExit.toFixed(2)});console.info("隧道设计路面高程（米）:",{左线进口:oe.entrance.elevation,左线出口:oe.exit.elevation,右线进口:re.entrance.elevation,右线出口:re.exit.elevation});const St=[],ce=new Map,Se=new Map,Ln=Ha({tileset:null,baseMatrix:Rn,anchor:j,initialPlacementMatrix:Mn,applyRegistration:!1,container:J});function In(e){return`/suidao/model/${e}/tileset.json`}async function Zn(e){try{const t=await fetch(e,{method:"HEAD"});return t.ok?(t.headers.get("content-type")||"").includes("json"):!1}catch{return!1}}async function Ee(e){const t=ce.get(e);if(t)return t;const s=Se.get(e);if(s)return s;const a=(async()=>{const n=In(e);if(!await Zn(n)){const l=`模型未找到: public/model/${e}/tileset.json`;if(ue.includes(e))throw new Error(l);return console.warn(l),null}const i=await Cesium.Cesium3DTileset.fromUrl(n,Ga(e));return await Ma(i),ce.set(e,i),St.push(i),Ln.setTilesets(St),i})();Se.set(e,a);try{return await a}finally{Se.delete(e)}}const Re=yn(w,ce,{loadTileset:Ee,onGlobeAlphaChange:e=>wn.setAlpha(e)});A.registerFunctionPanel("model","模型调节",e=>Na(e,Re,le));const $n=Re;function An(){const e=async()=>{await Promise.all(G.map(t=>Ee(t))),await Re.showDrillTilesets()};typeof requestIdleCallback=="function"?requestIdleCallback(()=>{e()}):setTimeout(e,2e3)}Promise.all(ue.map(e=>Ee(e))).then(async e=>{if(!e[0])throw new Error(`主隧道模型未找到: public/model/${Xa}/tileset.json`);for(const s of e)s&&w.scene.primitives.add(s);An(),le.current=sn({viewer:w,tilesetByFolder:ce,tilesetVisibility:$n,anchor:j,popupManager:Nn,legendPanel:Pn,initialCamera:Dt,container:pe}),le.current.setOnDrillPick(s=>{kn(),A.showDrillInfo(s),de()})}).catch(e=>{console.error("加载隧道模型失败:",e)});
