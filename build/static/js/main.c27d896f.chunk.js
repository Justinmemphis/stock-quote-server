(this["webpackJsonpstock-quote-webpage"]=this["webpackJsonpstock-quote-webpage"]||[]).push([[0],{33:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(23),s=c.n(o),j=c(7),b=c(2),a=(c(33),c(1));var r=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{children:Object(a.jsx)("h1",{children:"Stock Quote"})}),Object(a.jsxs)("nav",{children:[Object(a.jsx)(j.b,{to:"/symbol_lookup",children:"Symbol Lookup"})," | "," ",Object(a.jsx)(j.b,{to:"/quote",children:"Quote"})]}),Object(a.jsx)(b.a,{})]})},l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),o(e),s(e),j(e)}))},i=c(3),u=c(24);function O(){var e=Object(u.a)().readRemoteFile,t=Object(n.useState)([]),c=Object(i.a)(t,2),o=c[0],s=c[1],j=Object(n.useState)(""),b=Object(i.a)(j,2),r=b[0],l=b[1],O=Object(n.useState)([]),h=Object(i.a)(O,2),d=h[0],m=h[1],x=Object(n.useState)(""),p=Object(i.a)(x,2),y=p[0],f=p[1],S="nasdaq_screener_1661027821778_082022.csv";Object(n.useEffect)((function(){e(S,{header:!0,complete:function(e){console.log("---------------"),console.log("Results:",e),console.log("---------------"),s(e.data)}})}),[S,e]),console.log("Complete",o.length,"records");return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Symbol Lookup"}),Object(a.jsx)("h3",{children:"Don't Know the Stock Symbol?  Input Stock Company Name Here"}),Object(a.jsxs)("form",{id:"symbol-lookup",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget).get("companyname");l(t);try{var c;(c=o.filter((function(e){return!!e.Name&&!!e.Name.toLowerCase().includes(t.toLowerCase())}))).length?(m(c),f("")):(m([]),f("No such company found!"))}catch(n){m([]),f("No such company found!")}},children:[Object(a.jsx)("input",{id:"companyname",type:"text",name:"companyname",placeholder:"Company Name"}),Object(a.jsx)("button",{type:"submit",children:"Submit"}),Object(a.jsx)("h4",{children:"Currently has the NASDAQ 8,308 companies and tickers as of 08/20/22"}),Object(a.jsx)("h4",{children:"US Companies (and ADRs) Only"})]})]}),Object(a.jsx)("section",{children:Object(a.jsxs)("h3",{id:"lookup-output",children:[Object(a.jsx)("em",{children:"Your Input:"})," ",r,Object(a.jsx)("br",{}),Object(a.jsx)("em",{children:"Results:"}),Object(a.jsx)("br",{}),"*******************************",Object(a.jsx)("br",{}),d.map((function(e,t){return Object(a.jsxs)("div",{children:["*******************************",Object(a.jsx)("br",{}),"Company Name: ",e.Name,Object(a.jsx)("br",{}),"Company Symbol: ",e.Symbol,Object(a.jsx)("br",{})]},t)})),Object(a.jsx)("span",{className:"output-styling",children:y})]})})]})}var h=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{}),Object(a.jsx)(b.a,{})]})},d=c(25),m=c.n(d);function x(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),j=Object(i.a)(s,2),b=j[0],r=j[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),O=u[0],h=u[1],d=Object(n.useState)(""),x=Object(i.a)(d,2),p=x[0],y=x[1],f=Object(n.useState)(""),S=Object(i.a)(f,2),g=S[0],k=S[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Stock Quote"}),Object(a.jsx)("h3",{children:"From Alpha Vantage"}),Object(a.jsxs)("form",{id:"stock-quote",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget).get("stocksymbol");o(t);var c={method:"GET",url:"http://localhost:3000/quote",params:{function:"TIME_SERIES_DAILY",symbol:t,output_size:"compact",datatype:"json"}};m.a.request(c).then((function(e){console.log(e.data),console.log(typeof e.data);var t=e.data,c=t["Meta Data"]["2. Symbol"];h(c);var n=[];Object.entries(t["Time Series (Daily)"]).forEach((function(e){n.push(e)})),console.log(n),console.log(n[0][0]),console.log(n[0][1]),console.log(n[0][1]["4. close"]),y(n[0][1]["4. close"]),k(n[0][0]),r("")})).catch((function(e){console.log(e),h(""),y(""),k(""),r("No such symbol found!")}))},children:[Object(a.jsx)("input",{id:"stocksymbol",type:"text",name:"stocksymbol",placeholder:"Stock Symbol"}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(a.jsx)("section",{children:Object(a.jsxs)("h3",{id:"lookup-output",children:[Object(a.jsx)("em",{children:"Your Input:"})," ",c,Object(a.jsx)("br",{}),Object(a.jsx)("em",{children:"Results:"}),Object(a.jsx)("br",{}),"*******************************",Object(a.jsx)("br",{}),"Stock Symbol: ",O.toUpperCase()," ",Object(a.jsx)("br",{}),"Last Close Date: ",g," ",Object(a.jsx)("br",{}),"Last Close: $",p," ",Object(a.jsx)("br",{}),Object(a.jsx)("span",{className:"output-styling",children:b})]})})]})}var p=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)(b.a,{})]})};s.a.createRoot(document.getElementById("root")).render(Object(a.jsx)(j.a,{children:Object(a.jsx)(b.d,{children:Object(a.jsxs)(b.b,{path:"/",element:Object(a.jsx)(r,{}),children:[Object(a.jsx)(b.b,{path:"symbol_lookup",element:Object(a.jsx)(h,{})}),Object(a.jsx)(b.b,{path:"quote",element:Object(a.jsx)(p,{})}),Object(a.jsx)(b.b,{index:!0,element:Object(a.jsx)("main",{children:Object(a.jsx)("section",{children:Object(a.jsx)("p",{children:"Here you can look at stock quotes"})})})}),Object(a.jsx)(b.b,{path:"*",element:Object(a.jsx)("section",{children:Object(a.jsx)("main",{children:Object(a.jsx)("p",{children:"There's nothing here!"})})})})]})})})),l()}},[[57,1,2]]]);
//# sourceMappingURL=main.c27d896f.chunk.js.map