"use strict";(globalThis.webpackChunk_mention_me_frontend=globalThis.webpackChunk_mention_me_frontend||[]).push([["4196"],{"../node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js":function(e,t,r){r.d(t,{a:function(){return o}});var l=r("../node_modules/dagre-d3-es/src/dagre-js/util.js");function o(e,t){var r=e.append("foreignObject").attr("width","100000"),o=r.append("xhtml:div");o.attr("xmlns","http://www.w3.org/1999/xhtml");var a=t.label;switch(typeof a){case"function":o.insert(a);break;case"object":o.insert(function(){return a});break;default:o.html(a)}l.bg(o,t.labelStyle),o.style("display","inline-block"),o.style("white-space","nowrap");var n=o.node().getBoundingClientRect();return r.attr("width",n.width).attr("height",n.height),r}},"../node_modules/dagre-d3-es/src/dagre-js/util.js":function(e,t,r){r.d(t,{$p:function(){return c},O1:function(){return n},WR:function(){return u},bF:function(){return a},bg:function(){return d}});var l=r("../node_modules/lodash-es/isPlainObject.js"),o=r("../node_modules/lodash-es/isFunction.js");function a(e,t){return!!e.children(t).length}function n(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function d(e,t){t&&e.attr("style",t)}function c(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function u(e,t){var r=t.graph();if(l.Z(r)){var a=r.transition;if(o.Z(a))return a(e)}return e}},"../node_modules/khroma/dist/methods/channel.js":function(e,t,r){r.d(t,{Z:function(){return a}});var l=r("../node_modules/khroma/dist/utils/index.js"),o=r("../node_modules/khroma/dist/color/index.js");let a=(e,t)=>l.Z.lang.round(o.Z.parse(e)[t])},"../node_modules/mermaid/dist/flowDiagram-v2-a33b4996.js":function(e,t,r){r.d(t,{diagram:function(){return n}});var l=r("../node_modules/mermaid/dist/flowDb-0da60e67.js"),o=r("../node_modules/mermaid/dist/styles-422bd1c9.js"),a=r("../node_modules/mermaid/dist/mermaid-2490e8f2.js");r("../node_modules/d3/src/index.js"),r("../node_modules/dagre-d3-es/src/graphlib/index.js"),r("../node_modules/dagre-d3-es/src/dagre/index.js"),r("../node_modules/dagre-d3-es/src/graphlib/json.js"),r("../node_modules/dayjs/dayjs.min.js"),r("../node_modules/@braintree/sanitize-url/dist/index.js"),r("../node_modules/mermaid/node_modules/dompurify/dist/purify.js");let n={parser:l.p,db:l.f,renderer:o.f,styles:o.a,init:e=>{!e.flowchart&&(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,a.p)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),o.f.setConf(e.flowchart),l.f.clear(),l.f.setGen("gen-2")}}},"../node_modules/mermaid/dist/styles-422bd1c9.js":function(e,t,r){r.d(t,{a:function(){return g},f:function(){return f}});var l=r("../node_modules/dagre-d3-es/src/graphlib/index.js"),o=r("../node_modules/d3/src/index.js"),a=r("../node_modules/mermaid/dist/mermaid-2490e8f2.js"),n=r("../node_modules/mermaid/dist/index-9620d214.js"),s=r("../node_modules/dagre-d3-es/src/dagre-js/label/add-html-label.js"),i=r("../node_modules/khroma/dist/methods/channel.js"),d=r("../node_modules/khroma/dist/methods/rgba.js");let c={},u=async function(e,t,r,l,o,n){let i=l.select(`[id="${r}"]`);for(let r of Object.keys(e)){let l;let d=e[r],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let u=(0,a.k)(d.styles),p=void 0!==d.text?d.text:d.id;if(a.l.info("vertex",d,d.labelType),"markdown"===d.labelType)a.l.info("vertex",d,d.labelType);else if((0,a.m)((0,a.c)().flowchart.htmlLabels)){let e={label:p};(l=(0,s.a)(i,e).node()).parentNode.removeChild(l)}else{let e=o.createElementNS("http://www.w3.org/2000/svg","text");for(let t of(e.setAttribute("style",u.labelStyle.replace("color:","fill:")),p.split(a.e.lineBreakRegex))){let r=o.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=t,e.appendChild(r)}l=e}let b=0,f="";switch(d.type){case"round":b=5,f="rect";break;case"square":case"group":default:f="rect";break;case"diamond":f="question";break;case"hexagon":f="hexagon";break;case"odd":case"odd_right":f="rect_left_inv_arrow";break;case"lean_right":f="lean_right";break;case"lean_left":f="lean_left";break;case"trapezoid":f="trapezoid";break;case"inv_trapezoid":f="inv_trapezoid";break;case"circle":f="circle";break;case"ellipse":f="ellipse";break;case"stadium":f="stadium";break;case"subroutine":f="subroutine";break;case"cylinder":f="cylinder";break;case"doublecircle":f="doublecircle"}let h=await (0,a.r)(p,(0,a.c)());t.setNode(d.id,{labelStyle:u.labelStyle,shape:f,labelText:h,labelType:d.labelType,rx:b,ry:b,class:c,style:u.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:n.db.getTooltip(d.id)||"",domId:n.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,a.c)().flowchart.padding}),a.l.info("setNode",{labelStyle:u.labelStyle,labelType:d.labelType,shape:f,labelText:h,rx:b,ry:b,class:c,style:u.style,id:d.id,domId:n.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,a.c)().flowchart.padding})}},p=async function(e,t,r){let l,n;a.l.info("abc78 edges = ",e);let s=0,i={};if(void 0!==e.defaultStyle){let t=(0,a.k)(e.defaultStyle);l=t.style,n=t.labelStyle}for(let r of e){s++;let d="L-"+r.start+"-"+r.end;void 0===i[d]?i[d]=0:i[d]++,a.l.info("abc78 new entry",d,i[d]);let u=d+"-"+i[d];a.l.info("abc78 new link id to be used is",d,u,i[d]);let p="LS-"+r.start,b="LE-"+r.end,f={style:"",labelStyle:""};switch(f.minlen=r.length||1,"arrow_open"===r.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let h="",g="";switch(r.stroke){case"normal":h="fill:none;",void 0!==l&&(h=l),void 0!==n&&(g=n),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;";break;case"invisible":f.thickness="invisible",f.pattern="solid",f.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let e=(0,a.k)(r.style);h=e.style,g=e.labelStyle}f.style=f.style+=h,f.labelStyle=f.labelStyle+=g,void 0!==r.interpolate?f.curve=(0,a.n)(r.interpolate,o.c_6):void 0!==e.defaultInterpolate?f.curve=(0,a.n)(e.defaultInterpolate,o.c_6):f.curve=(0,a.n)(c.curve,o.c_6),void 0===r.text?void 0!==r.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType=r.labelType,f.label=await (0,a.r)(r.text.replace(a.e.lineBreakRegex,"\n"),(0,a.c)()),void 0===r.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=u,f.classes="flowchart-link "+p+" "+b,t.setEdge(r.start,r.end,f,s)}},b=async function(e,t,r,s){let i,d;a.l.info("Drawing flowchart");let c=s.db.getDirection();void 0===c&&(c="TD");let{securityLevel:b,flowchart:f}=(0,a.c)(),h=f.nodeSpacing||50,g=f.rankSpacing||50;"sandbox"===b&&(i=(0,o.Ys)("#i"+t));let w="sandbox"===b?(0,o.Ys)(i.nodes()[0].contentDocument.body):(0,o.Ys)("body"),m="sandbox"===b?i.nodes()[0].contentDocument:document,y=new l.k({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:h,ranksep:g,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),k=s.db.getSubGraphs();a.l.info("Subgraphs - ",k);for(let e=k.length-1;e>=0;e--)d=k[e],a.l.info("Subgraph - ",d),s.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let x=s.db.getVertices(),_=s.db.getEdges();a.l.info("Edges",_);let v=0;for(v=k.length-1;v>=0;v--){d=k[v],(0,o.td_)("cluster").append("text");for(let e=0;e<d.nodes.length;e++)a.l.info("Setting up subgraphs",d.nodes[e],d.id),y.setParent(d.nodes[e],d.id)}await u(x,y,t,w,m,s),await p(_,y);let j=w.select(`[id="${t}"]`),S=w.select("#"+t+" g");if(await (0,n.r)(S,y,["point","circle","cross"],"flowchart",t),a.u.insertTitle(j,"flowchartTitleText",f.titleTopMargin,s.db.getDiagramTitle()),(0,a.o)(y,j,f.diagramPadding,f.useMaxWidth),s.db.indexNodes("subGraph"+v),!f.htmlLabels)for(let e of m.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=e.getBBox(),r=m.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",t.width),r.setAttribute("height",t.height),e.insertBefore(r,e.firstChild)}Object.keys(x).forEach(function(e){let r=x[e];if(r.link){let l=(0,o.Ys)("#"+t+' [id="'+e+'"]');if(l){let e=m.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===b?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let t=l.insert(function(){return e},":first-child"),o=l.select(".label-container");o&&t.append(function(){return o.node()});let a=l.select(".label");a&&t.append(function(){return a.node()})}}})},f={setConf:function(e){for(let t of Object.keys(e))c[t]=e[t]},addVertices:u,addEdges:p,getClasses:function(e,t){return t.db.getClasses()},draw:b},h=(e,t)=>{let r=i.Z,l=r(e,"r"),o=r(e,"g"),a=r(e,"b");return d.Z(l,o,a,t)},g=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${h(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`}}]);
//# sourceMappingURL=4196.d92e8fda.iframe.bundle.js.map