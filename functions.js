!function(e){var t={};function n(r){if(t[r])return t[r].exports;var C=t[r]={i:r,l:!1,exports:{}};return e[r].call(C.exports,C,C.exports,n),C.l=!0,C.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var C in e)n.d(r,C,function(t){return e[t]}.bind(null,C));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=121)}({121:function(e,t){function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,C=!1,i=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){C=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(C)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C,o,a;fetch("/dist/load_dxmap.json").then((function(e){return e.json()})).then((function(e){C=e})).catch((function(e){})),fetch("/dist/load_hccmap.json").then((function(e){return e.json()})).then((function(e){o=e})).catch((function(e){})),fetch("/dist/load_hcccoefn.json").then((function(e){return e.json()})).then((function(e){a=e})).catch((function(e){}));var S={v22:P,v23:v,v24:w};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",C=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]&&arguments[6];for(i=0;i<e.length;i++)for(j=0;j<e[i].length;j++)e=e;var u=e.toString();o=o||0;var l=c(u=u.split(","),n=n=n||"v23",t=t,r=r,a=a),f=s(l,o=o),_=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});f.sort(_.compare);var h=(f=S[n](f,C,t)).toString();return h}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];for(B=0;B<e.length;B++)for(j=0;j<e[B].length;j++)e=e;var a=e.toString();a=a.split(","),i=i||!0;var S=C[t=t||"v23"],u=o[t],c={},s=l(a,t),f=!0,_=!1,H=void 0;try{for(var P,v=s[Symbol.iterator]();!(f=(P=v.next()).done);f=!0){(N=P.value)in S?c[N]=JSON.parse(JSON.stringify(S[N])):i&&(c[N]={desc:"",hccs:{}})}}catch(e){_=!0,H=e}finally{try{f||null==v.return||v.return()}finally{if(_)throw H}}n&&r&&h(c,n,r);var w=new Set;for(var E in c)if(c.hasOwnProperty(E))for(var d in c[E].hccs)c[E].hccs.hasOwnProperty(d)&&c[E].hccs[d]in u&&w.add(c[E].hccs[d]);var g={},p=!0,y=!1,R=void 0;try{for(var A,I=w[Symbol.iterator]();!(p=(A=I.next()).done);p=!0){d=A.value;var F=!0,m=!1,b=void 0;try{for(var D,L=u[d].children[Symbol.iterator]();!(F=(D=L.next()).done);F=!0){var U=D.value;g[U]=d}}catch(e){m=!0,b=e}finally{try{F||null==L.return||L.return()}finally{if(m)throw b}}}}catch(e){y=!0,R=e}finally{try{p||null==I.return||I.return()}finally{if(y)throw R}}for(var N in c)if(c.hasOwnProperty(N)){var O=c[N].hccs,T=[];for(var B in c[N].hccs)T.push({desc:u[c[N].hccs[B]].desc});var x=O.map((function(e,t){return[e,T[t]]})),V={};for(var E in x)x.hasOwnProperty(E)&&(V[x[E][0]]=x[E][1]);for(var K in c[N].hccs=V,g)g.hasOwnProperty(K)&&g[K]in c[N].hccs&&(c[N].hccs[g[K]]["trumped by"]=g[g[K]])}return c}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=t||0;var n=new Set;if(0==t){for(var C=0,i=Object.entries(e);C<i.length;C++){var o=r(i[C],2),a=o[0];o[1];if(e.hasOwnProperty(a))for(var S=0,u=Object.entries(e[a].hccs);S<u.length;S++){var c=r(u[S],2),s=c[0];c[1];e[a].hccs.hasOwnProperty(s)&&null==e[a].hccs[s]["trumped by"]&&n.add(s)}}n=Array.from(n);var l=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});n.sort(l.compare)}else{n=new Set;for(var f in e)if(e.hasOwnProperty(f))for(var _ in e[f].hccs)n.add(e[f].hccs[_]);n=Array.from(n);l=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});n.sort(l.compare)}return n}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(o=0;o<e.length;o++)for(j=0;j<e[o].length;j++)e=e;var n=e.toString();n=n.split(",");var r=C[t=t||"v23"],i=[];for(var o in n)""!=n[o]&&(i[o]=String(n[o]).replace(".","").toUpperCase());"string"==typeof i&&(i=i.split(/\s*,\s*|\s+|\s*;\s*|\s*:\s*/));var a=new Set,S=!0,u=!1,c=void 0;try{for(var s,l=i[Symbol.iterator]();!(S=(s=l.next()).done);S=!0){var f=s.value;r.hasOwnProperty(f)&&a.add(f)}}catch(e){u=!0,c=e}finally{try{S||null==l.return||l.return()}finally{if(u)throw c}}var _=Array.from(a);return _=_.toString()}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;for(i=0;i<e.length;i++)for(j=0;j<e[i].length;j++)e=e;var C=e.toString();C=C.split(","),r=r||0;var a=o[t=t||"v23"];if(hcc_list_temp=_(C,t=t),hcc_list_temp=hcc_list_temp.split(","),0==r){var S=new Set(hcc_list_temp),u=new Set,c=!0,s=!1,l=void 0;try{for(var f,h=S[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){var H=f.value;if(H in a){var P=!0,v=!1,w=void 0;try{for(var E,d=a[H].children[Symbol.iterator]();!(P=(E=d.next()).done);P=!0){var g=E.value;u.add(g)}}catch(e){v=!0,w=e}finally{try{P||null==d.return||d.return()}finally{if(v)throw w}}}}}catch(e){s=!0,l=e}finally{try{c||null==h.return||h.return()}finally{if(s)throw l}}S=new Set(n(S).filter((function(e){return!u.has(e)}))),e=Array.from(S)}var p=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});hcc_list_temp.sort(p.compare);var y=hcc_list_temp.toString();return y}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(i=0;i<e.length;i++)for(j=0;j<e[i].length;j++)e=e;var n=e.toString();n=n.split(",");var r=o[t=t||"v23"];"string"==typeof n?n=n.split(/\s*,\s*|\s+|\s*;\s*|\s*:\s*/):"number"==typeof n&&(n=[n]);var C=[],a=!0,S=!1,u=void 0;try{for(var c,s=n[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){var l=c.value;isNaN(l.toString().trim())?C.push(l.trim().toUpperCase()):C.push("HCC"+l.toString().trim())}}catch(e){S=!0,u=e}finally{try{a||null==s.return||s.return()}finally{if(S)throw u}}n=C;C=[];var f=!0,_=!1,h=void 0;try{for(var H,P=n[Symbol.iterator]();!(f=(H=P.next()).done);f=!0){var v=H.value;C.push(v.replace(/HCC0+/,"HCC"))}}catch(e){_=!0,h=e}finally{try{f||null==P.return||P.return()}finally{if(_)throw h}}n=C;var w=new Set,E=!0,d=!1,g=void 0;try{for(var p,y=n[Symbol.iterator]();!(E=(p=y.next()).done);E=!0){var R=p.value;r.hasOwnProperty(R)&&w.add(R)}}catch(e){d=!0,g=e}finally{try{E||null==y.return||y.return()}finally{if(d)throw g}}var A=Array.from(w);return A=A.toString()}function h(e,t,n){var r=["C9100","C9101","C9102","C9500","C9501","C9502","C7400","C7401","C7402","C7410","C7411","C7412","C7490","C7491","C7492"],C=["J410","J411","J418","J42","J440","J441"],i=["K55011","K55012","K55019","K55021","K55022","K55029","K55031","K55032","K55039","K55041","K55042","K55049","K55051","K55052","K55059","K55061","K55062","K55069","K5530","K5531","K5532","K5533"],o=["J430","J431","J432","J438","J439","J449","J982","J983"],a=["C50011","C50012","C50019","C50021","C50022","C50029","C50111","C50112","C50119","C50121","C50122","C50129","C50211","C50212","C50219","C50221","C50222","C50229","C50311","C50312","C50319","C50321","C50322","C50329","C50411","C50412","C50419","C50421","C50422","C50429","C50511","C50512","C50519","C50521","C50522","C50529","C50611","C50612","C50619","C50621","C50622","C50629","C50811","C50812","C50819","C50821","C50822","C50829","C50911","C50912","C50919","C50921","C50922","C50929"],S=["P0500","P0501","P0502","P0503","P0504","P0505","P0506","P0507","P0508","P0509","P0510","P0511","P0512","P0513","P0514","P0515","P0516","P0517","P0518","P0519","P052","P059","P0700","P0701","P0702","P0703","P0710","P0714","P0715","P0716","P0717","P0718","P0720","P0721","P0722","P0723","P0724","P0725","P0726","P0730","P0731","P0732","P0733","P0734","P0735","P0736","P0737","P0738","P0739","P080","P081","P0821","P0822"],u=["Q894"],c=["K551","K558","K559","P041","P0411","P0412","P0413","P0414","P0415","P0416","P0417","P0418","P0419","P041A","P042","P043","P0440","P0441","P0442","P0449","P045","P046","P048","P0481","P0489","P049","P930","P938","P961","P962","Q390","Q391","Q392","Q393","Q394","Q6410","Q6411","Q6412","Q6419","Q790","Q791","Q792","Q793","Q794","Q7951"],s=["P270","P271","P278","P279"],l=["F3481"],f=["D66","D67"];for(var _ in e)t<18&&r.includes(_)&&(e[_].hccs=["HCC9"]),t<18&&C.includes(_)&&(e[_].hccs=["HCC161"]),t<2&&i.includes(_)&&(e[_].hccs=["HCC42"]),t<50&&a.includes(_)&&(e[_].hccs=["HCC11"]),t<2&&o.includes(_)&&(e[_].hccs=["HCC-1"]),0!=t&&S.includes(_)&&(e[_].hccs=["HCC-1"]),t>=1&&u.includes(_)&&(e[_].hccs=["HCC97"]),t>=2&&c.includes(_)&&(e[_].hccs=["HCC-1"]),t>=2&&s.includes(_)&&(e[_].hccs=["HCC162"]),(t<6||t>18&&l.includes(_))&&(e[_].hccs=["HCC-1"]),female_sex=["2","F","Female"],female_sex.includes(n)&&f.includes(_)&&(e[_].hccs=["HCC75"]);for(_ in edit_dct={},e)e[_].hccs!=["HCC-1"]&&(edit_dct[_]=e[_]);return edit_dct}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",C=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;n=n.toLowerCase()||"v23",r=String(r).toUpperCase()||"CNA",i=i||868,C=C||!0;var o=a[n],S={},u={},c=0,s=0,l=!0,f=!1,_=void 0;try{for(var h,H=e[Symbol.iterator]();!(l=(h=H.next()).done);l=!0){var P=h.value;o.hasOwnProperty(P)&&(S[P]=o[P],c+=o[P])}}catch(e){f=!0,_=e}finally{try{l||null==H.return||H.return()}finally{if(f)throw _}}for(var v in t){var w=r+"_"+t[v];w in o?(u[w]=o[w],s+=o[w]):C&&(u[w]=0)}var E=(c+s).toFixed(4),d={score:E,premium:(E*i).toFixed(2),demo_score:c.toFixed(4),hcc_score:s.toFixed(4),demo_detail:S,hcc_detail:u};return d}function P(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",C=new Set(e),i={},o={CANCER:new Set(["HCC8","HCC9","HCC10","HCC11","HCC12"]),DIABETES:new Set(["HCC17","HCC18","HCC19"]),CARD_RESP_FAIL:new Set(["HCC82","HCC83","HCC84"]),CHF:new Set(["HCC85"]),gCopdCF:new Set(["HCC110","HCC111","HCC112"]),RENAL:new Set(["HCC134","HCC135","HCC136","HCC137"]),SEPSIS:new Set(["HCC2"]),gSubstanceAbuse:new Set(["HCC54","HCC55"]),gPsychiatric:new Set(["HCC57","HCC58"])},a={};for(var S in o)if(o.hasOwnProperty(S)){var u=new Set(o[S]),c=new Set(n(u).filter((function(e){return C.has(e)})));a[S]=c}i.HCC47_gCancer=a.CANCER&&new Set(n(new Set(["HCC47"])).filter((function(e){return C.has(e)}))),i.HCC85_gDiabetesMellit=a.DIABETES&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gCopdCF=a.gCopdCF&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gRenal_V23=a.RENAL&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.gRespDepandArre_gCopdCF=a.gCopdCF&&a.CARD_RESP_FAIL,i.HCC85_HCC96=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC96"])).filter((function(e){return C.has(e)}))),i.gSubstanceAbuse_gPsychiatric=a.gPsychiatric&&a.gSubstanceAbuse,i.PRESSURE_ULCER=new Set(n(new Set(["HCC157","HCC158"])).filter((function(e){return C.has(e)}))),i.CHF_gCopdCF=a.CHF&&a.gCopdCF,i.gCopdCF_CARD_RESP_FAIL=a.gCopdCF&&a.CARD_RESP_FAIL,i.SEPSIS_PRESSURE_ULCER=a.SEPSIS&&i.PRESSURE_ULCER,i.SEPSIS_ARTIF_OPENINGS=a.SEPSIS&&new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)}))),i.ART_OPENINGS_PRESSURE_ULCER=new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.DIABETES_CHF=a.DIABETES&&a.CHF,i.gCopdCF_ASP_SPEC_B_PNEUM=a.gCopdCF&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.ASP_SPEC_BACT_PNEUM_PRES_ULC=new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.SEPSIS_ASP_SPEC_BACT_PNEUM=a.SEPSIS&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.SCHIZOPHRENIA_gCopdCF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&a.gCopdCF,i.SCHIZOPHRENIA_CHF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&a.CHF,i.SCHIZOPHRENIA_SEIZURES=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC79"])).filter((function(e){return C.has(e)}))),void 0!==t&&(i.DISABLED_HCC85=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.DISABLED_PRESSURE_ULCER=i.PRESSURE_ULCER,i.DISABLED_HCC161=new Set(n(new Set(["HCC161"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC39=new Set(n(new Set(["HCC39"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC77=new Set(n(new Set(["HCC77"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC6=new Set(n(new Set(["HCC6"])).filter((function(e){return C.has(e)}))),void 0!==r&&r<65&&(i.disable_substAbuse_psych_V23=i.gSubstanceAbuse_gPsychiatric_V23));var s=[];for(var S in i)i.hasOwnProperty(S)&&0!==i[S].size&&s.push(S);return e.concat(s)}function v(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",C=new Set(e),i={},o={CANCER:new Set(["HCC8","HCC9","HCC10","HCC11","HCC12"]),DIABETES:new Set(["HCC17","HCC18","HCC19"]),CARD_RESP_FAIL:new Set(["HCC82","HCC83","HCC84"]),CHF:new Set(["HCC85"]),gCopdCF:new Set(["HCC110","HCC111","HCC112"]),RENAL_V23:new Set(["HCC134","HCC135","HCC136","HCC137","HCC138"]),SEPSIS:new Set(["HCC2"]),gSubstanceAbuse_V23:new Set(["HCC54","HCC55","HCC56"]),gPsychiatric_V23:new Set(["HCC57","HCC58","HCC59","HCC60"])},a={};for(var S in o)if(o.hasOwnProperty(S)){var u=new Set(o[S]),c=new Set(n(u).filter((function(e){return C.has(e)})));a[S]=c}i.HCC47_gCancer=a.CANCER&&new Set(n(new Set(["HCC47"])).filter((function(e){return C.has(e)}))),i.HCC85_gDiabetesMellit=a.DIABETES&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gCopdCF=a.gCopdCF&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gRenal_V23=a.RENAL_V23&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.gRespDepandArre_gCopdCF=a.gCopdCF&&a.CARD_RESP_FAIL,i.HCC85_HCC96=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC96"])).filter((function(e){return C.has(e)}))),i.gSubstanceAbuse_gPsychiatric_V23=a.gPsychiatric_V23&&a.gSubstanceAbuse_V23,i.PRESSURE_ULCER=new Set(n(new Set(["HCC157","HCC158"])).filter((function(e){return C.has(e)}))),i.CHF_gCopdCF=a.CHF&&a.gCopdCF,i.gCopdCF_CARD_RESP_FAIL=a.gCopdCF&&a.CARD_RESP_FAIL,i.SEPSIS_PRESSURE_ULCER=a.SEPSIS&&i.PRESSURE_ULCER,i.SEPSIS_ARTIF_OPENINGS=a.SEPSIS&&new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)}))),i.ART_OPENINGS_PRESSURE_ULCER=new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.DIABETES_CHF=a.DIABETES&&a.CHF,i.gCopdCF_ASP_SPEC_B_PNEUM=a.gCopdCF&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.ASP_SPEC_BACT_PNEUM_PRES_ULC=new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.SEPSIS_ASP_SPEC_BACT_PNEUM=a.SEPSIS&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.SCHIZOPHRENIA_gCopdCF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&a.gCopdCF,i.SCHIZOPHRENIA_CHF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&a.CHF,i.SCHIZOPHRENIA_SEIZURES=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC79"])).filter((function(e){return C.has(e)}))),void 0!==t&&(i.DISABLED_HCC85=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.DISABLED_PRESSURE_ULCER=i.PRESSURE_ULCER,i.DISABLED_HCC161=new Set(n(new Set(["HCC161"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC39=new Set(n(new Set(["HCC39"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC77=new Set(n(new Set(["HCC77"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC6=new Set(n(new Set(["HCC6"])).filter((function(e){return C.has(e)}))),void 0!==r&&r<65&&(i.disable_substAbuse_psych_V23=i.gSubstanceAbuse_gPsychiatric_V23));var s=[];for(var S in i)i.hasOwnProperty(S)&&0!==i[S].size&&s.push(S);return e.concat(s)}function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",C=new Set(e),i={},o=C.length;i.D10P=o>9;var a="D".concat(o);i[a]=o>3&&o<10;var S={CANCER:new Set(["HCC8","HCC9","HCC10","HCC11","HCC12"]),DIABETES:new Set(["HCC17","HCC18","HCC19"]),CARD_RESP_FAIL:new Set(["HCC82","HCC83","HCC84"]),CHF:new Set(["HCC85"]),gCopdCF:new Set(["HCC110","HCC111","HCC112"]),RENAL_V24:new Set(["HCC134","HCC135","HCC136","HCC137","HCC138"]),SEPSIS:new Set(["HCC2"]),gSubstanceAbuse_V24:new Set(["HCC54","HCC55","HCC56"]),gPsychiatric_V24:new Set(["HCC57","HCC58","HCC59","HCC60"])},u={};for(var c in S)if(S.hasOwnProperty(c)){var s=new Set(S[c]),l=new Set(n(s).filter((function(e){return C.has(e)})));u[c]=l}i.HCC47_gCancer=u.CANCER&&new Set(n(new Set(["HCC47"])).filter((function(e){return C.has(e)}))),i.HCC85_gDiabetesMellit=u.DIABETES&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gCopdCF=u.gCopdCF&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.HCC85_gRenal_V24=u.RENAL_V24&&new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.gRespDepandArre_gCopdCF=u.gCopdCF&&u.CARD_RESP_FAIL,i.HCC85_HCC96=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC96"])).filter((function(e){return C.has(e)}))),i.gSubstanceAbuse_gPsychiatric_V24=u.gPsychiatric_V24&&u.gSubstanceAbuse_V24,i.PRESSURE_ULCER=new Set(n(new Set(["HCC157","HCC158"])).filter((function(e){return C.has(e)}))),i.SEPSIS_PRESSURE_ULCER=u.SEPSIS&&i.PRESSURE_ULCER,i.SEPSIS_ARTIF_OPENINGS=u.SEPSIS&&new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)}))),i.ART_OPENINGS_PRESSURE_ULCER=new Set(n(new Set(["HCC188"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.gCopdCF_ASP_SPEC_B_PNEUM=u.gCopdCF&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.ASP_SPEC_BACT_PNEUM_PRES_ULC=new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)})))&&i.PRESSURE_ULCER,i.SEPSIS_ASP_SPEC_BACT_PNEUM=u.SEPSIS&&new Set(n(new Set(["HCC114"])).filter((function(e){return C.has(e)}))),i.SCHIZOPHRENIA_gCopdCF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&u.gCopdCF,i.SCHIZOPHRENIA_CHF=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&u.CHF,i.SCHIZOPHRENIA_SEIZURES=new Set(n(new Set(["HCC57"])).filter((function(e){return C.has(e)})))&&new Set(n(new Set(["HCC79"])).filter((function(e){return C.has(e)}))),void 0!==t&&(i.DISABLED_HCC85=new Set(n(new Set(["HCC85"])).filter((function(e){return C.has(e)}))),i.DISABLED_PRESSURE_ULCER=i.PRESSURE_ULCER,i.DISABLED_HCC161=new Set(n(new Set(["HCC161"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC39=new Set(n(new Set(["HCC39"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC77=new Set(n(new Set(["HCC77"])).filter((function(e){return C.has(e)}))),i.DISABLED_HCC6=new Set(n(new Set(["HCC6"])).filter((function(e){return C.has(e)}))),void 0!==r&&r<65&&(i.disable_substAbuse_psych_V23=i.gSubstanceAbuse_gPsychiatric_V23));var f=[];for(var c in i)i.hasOwnProperty(c)&&0!==i[c].size&&f.push(c);return e.concat(f)}CustomFunctions.associate("DX2HCC",u),CustomFunctions.associate("DX_HCCS",c),CustomFunctions.associate("DXDCT_HCCS",s),CustomFunctions.associate("CLEAN_DXLIST",l),CustomFunctions.associate("DX2RAF",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,S=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;n=n.toLowerCase()||"v23",r=String(r).toUpperCase()||"CNA",S=S||868;var c=u(e=e,t=t,n=n,C=C,i=i,o=o,a=a=a||0),s=H([],c,n=n,r=r,S=S);return s.hcc_score})),CustomFunctions.associate("PREP_HCCS",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],C=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;r=!1;var i=f(e,t=t=t||"v23",C=C=C||0);return i=i.split(","),temp_hccs=S[t](i,r,n),temp_hccs.toString()})),CustomFunctions.associate("TRUMP_HCCS",f),CustomFunctions.associate("CLEAN_HCCLIST",_),CustomFunctions.associate("GET_HCC_DX",(function(e,t,r){for(i=0;i<e.length;i++)for(j=0;j<e[i].length;j++)e=e;var o=e.toString();for(o=o.split(","),i=0;i<t.length;i++)for(j=0;j<t[i].length;j++)t=t;var a=t.toString();a=a.split(",");var S=C[r],u=new Set(o),c=new Set,s=!0,l=!1,f=void 0;try{for(var _,h=a[Symbol.iterator]();!(s=(_=h.next()).done);s=!0){var H=_.value,P=n(new Set(S[H].hccs)).filter((function(e){return u.has(e)}));S.hasOwnProperty(H)&&P&&c.add(H)}}catch(e){l=!0,f=e}finally{try{s||null==h.return||h.return()}finally{if(l)throw f}}return temp_mydx=Array.from(c),temp_mydx=temp_mydx.toString(),temp_mydx})),CustomFunctions.associate("CONDITION_RESOLVER",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;for(i=0;i<e.length;i++)for(j=0;j<e[i].length;j++)e=e;var C=e.toString();C=C.split(","),t=t||"v23",n=n||0;var o=[];o=C.filter((function(e){return Number.isInteger(e)||e.startsWith("HCC")}));var a=[],S=new Set;if(o.length>0||r){r=1,(a=l(C.filter((function(e){return o.includes(e)})),t)).split();var c=u(a,t=t,n=n);c.split();var s=o.concat(c);S={allhcc:r,condition:s}}else S={allhcc:r,condition:e};return S})),CustomFunctions.associate("AGESEX_EDITS",h),CustomFunctions.associate("GET_RAF",H),CustomFunctions.associate("AGESEX",(function(e,t,n,C){var i,o=["0_34","35_44","45_54","55_59","60_64","65_69","70_74","75_79","80_84","85_89","90_94","95_GT"],a=["0_34","35_44","45_54","55_59","60_64","65","66","67","68","69","70_74","75_79","80_84","85_89","90_94","95_GT"];e=Math.trunc(e),i=["M","MALE","1"].includes(t.toUpperCase())?"M":"F";var S,u="1"==n&&!(e<65&&"0"!=n);S=!!["CP","CF"].includes(C);var c=[];c=C.endsWith("NE")?a:o;var s=[],l=[];for(var f in c){var _=c[f].split("_");s.push(_[0]),l.push(_[1])}var h=!0,H=!1,P=void 0;try{for(var v,w=s.entries()[Symbol.iterator]();!(h=(v=w.next()).done);h=!0){var E=r(v.value,2),d=E[0],g=E[1];if(d==s[s.length]-1){i+=c[d];break}if(g>=e&&g<s[d+1]){i+=c[d];break}}}catch(e){H=!0,P=e}finally{try{h||null==w.return||w.return()}finally{if(H)throw P}}if(C.endsWith("NE")){if(S)var p="";else p="N";if(u)var y="";else y="N";i=p+"MCAID_"+y+"ORIGDIS_NE"+i}var R,A=[C+"_"+i];return["CNA","CFA","CPA"].includes(C)&&u&&(R=C+"_OriginallyDisabled_"+("M"===t?"Male":"Female"),A.push(R)),A.toString()})),CustomFunctions.associate("V22_INTERACTIONS",P),CustomFunctions.associate("V23_INTERACTIONS",v),CustomFunctions.associate("V24_INTERACTIONS",w)}});
//# sourceMappingURL=functions.js.map