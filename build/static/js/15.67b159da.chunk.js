(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{395:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s}));var o=n(29),a=(n(144),n(145)),r=function(e,t){return new Intl.NumberFormat([],{style:"currency",currency:"USD",minimumFractionDigits:t,maximumFractionDigits:t}).format(e)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e)return"0";var n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:t});return e?function(e,t){return Math.abs(Number(e))>=1e9?t.format((Math.abs(Number(e))/1e9).toFixed(2)).slice(1)+"B":Math.abs(Number(e))>=1e6?t.format((Math.abs(Number(e))/1e6).toFixed(2)).slice(1)+"M":Math.abs(Number(e))>=1e3?t.format((Math.abs(Number(e))/1e3).toFixed(2)).slice(1)+"K":t.format(Math.abs(Number(e))).slice(1)}(e,n):n.format(0).slice(1)};var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(isNaN(e)||""===e||void 0===e)return t?"$0":0;var n=parseFloat(e);return n>5e8?(t?"$":"")+function(e){return Object(a.Numeral)(e).format("0.[00]a")}(n.toFixed(0)):0===n?t?"$0":0:n<1e-4&&n>0?t?"< $0.0001":"< 0.0001":n>1e3?t?r(n,0):Number(parseFloat(n).toFixed(0)).toLocaleString():t?r(n,n<.1?4:2):Number(parseFloat(n).toFixed(4)).toString()}catch(o){return console.log("formatter crashed ",{error:o,number:e}),0}},l={showTransaction:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:280;return"".concat(o.a[t],"/tx/").concat(e,"/")},showAddress:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:280;return"".concat(o.a[t],"/address/").concat(e,"/")},showToken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:280;return"".concat(o.a[t],"/token/").concat(e,"/")},showBlock:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:280;return"".concat(o.a[t],"/block/").concat(e,"/")}};function s(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(0),a=n(9),r=n(1),c=n(38),i=n(57),l=n(23),s=n(24),u=n(66);n(115);function d(e){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.activate();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.log("wallet test web3-react eager connection error:",{error:e.t0}),e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u.a)(),n=t.chainId,b=t.isActive,p=t.account,m=t.connector,f=Object(c.c)(),h=Object(r.useCallback)(function(){var e=Object(a.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("connecting dex ",{connectorType:t,isActive:b}),e.prev=1,f({type:s.N,payload:i.a.CONNECTING_WALLET}),t!==i.b.injected){e.next=9;break}return e.next=6,d(i.d.connector);case 6:localStorage.connectorType=i.b.injected,e.next=21;break;case 9:if(t!==i.b.walletConnect){e.next=17;break}return e.next=12,d(i.e.connector);case 12:n=e.sent,console.log("wallet test ",n),localStorage.connectorType=i.b.walletConnect,e.next=21;break;case 17:return console.log("wallet test connecting injected "),e.next=20,d(i.d.connector);case 20:localStorage.connectorType=i.b.injected;case 21:localStorage.logged_out=void 0,e.next=30;break;case 24:e.prev=24,e.t0=e.catch(1),console.log("wallet test error ",e.t0),f({type:s.N,payload:i.a.NOT_STARTED}),f({type:s.d,payload:"Something went wrong while connecting with wallet"}),console.log("wallet connection error",{error:e.t0});case 30:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(t){return e.apply(this,arguments)}}(),[m,f,d,b]),g=Object(r.useCallback)(Object(a.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return");case 2:m.deactivate?m.deactivate():m.resetState(),f({type:s.N,payload:i.a.NOT_STARTED}),localStorage.logged_out="yes",localStorage.removeItem("connectorType"),localStorage.removeItem("active_account");case 7:case"end":return e.stop()}}),e)}))),[f,p,m,n]),j=Object(r.useMemo)((function(){return!!n&&!!l.a.includes(n)}),[n]),O=Object(r.useMemo)((function(){return!(!b||j)}),[b,j]);return Object(r.useEffect)((function(){e&&(b||localStorage.logged_out&&"undefined"!==localStorage.logged_out||!localStorage.active_account?(b&&p&&!O&&(f({type:s.N,payload:i.a.WALLET_CONNECTED}),localStorage.setItem("active_account",p)),b&&O&&f({type:s.N,payload:i.a.NETWORK_SWITCH_REQUEST})):h(localStorage.connectorType))}),[b,p,f,O]),Object(r.useEffect)((function(){var t;if(e){var o=parseInt(null!==(t=localStorage.userSelectedChain)&&void 0!==t?t:null);f(!o&&n?{type:s.E,payload:j?n:l.b}:{type:s.E,payload:o||l.b})}}),[n,e,j]),{connectWallet:h,logout:g}}},435:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g}));var o=n(66),a=n(118),r=n(1),c=n(38),i=n(48);function l(e){return-1!==["string","number"].indexOf(typeof e)}function s(e){return void 0===e||Array.isArray(e)&&e.every((function(e){return l(e)||Array.isArray(e)&&e.every(l)}))}var u={valid:!1,blockNumber:void 0,data:void 0};function d(e,t){var n=Object(o.a)().chainId,a=Object(c.d)((function(e){return e.multicall.callResults})),l=Object(c.c)(),s=Object(r.useMemo)((function(){var t,n,o;return JSON.stringify(null!==(t=null===e||void 0===e||null===(n=e.filter((function(e){return Boolean(e)})))||void 0===n||null===(o=n.map(i.f))||void 0===o?void 0:o.sort())&&void 0!==t?t:[])}),[e]);return Object(r.useEffect)((function(){var e=JSON.parse(s);if(n&&0!==e.length){var o=e.map((function(e){return Object(i.d)(e)}));return l(Object(i.a)({chainId:n,calls:o,options:t})),function(){l(Object(i.e)({chainId:n,calls:o,options:t}))}}}),[n,l,t,s]),Object(r.useMemo)((function(){return e.map((function(e){var t;if(!n||!e)return u;var o,r=null===(t=a[n])||void 0===t?void 0:t[Object(i.f)(e)];return null!==r&&void 0!==r&&r.data&&"0x"!==(null===r||void 0===r?void 0:r.data)&&(o=r.data),{valid:!0,data:o,blockNumber:null===r||void 0===r?void 0:r.blockNumber}}))}),[a,e,n])}var b={valid:!1,result:void 0,loading:!1,syncing:!1,error:!1},p={valid:!0,result:void 0,loading:!0,syncing:!0,error:!1};function m(e,t,n,o){if(!e)return b;var a=e.valid,r=e.data,c=e.blockNumber;if(!a)return b;if(a&&!c)return p;if(!t||!n||!o)return p;var i=r&&r.length>2,l=(null!==c&&void 0!==c?c:0)<o,s=void 0;if(i&&r)try{s=t.decodeFunctionResult(n,r)}catch(u){return console.debug("Result data parsing failed",n,r),{valid:!0,loading:!1,error:!0,syncing:l,result:s}}return{valid:!0,loading:!1,syncing:l,result:s,error:!i}}function f(e,t,n,o){var c=Object(r.useMemo)((function(){var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)}),[e,t]),i=d(Object(r.useMemo)((function(){return e&&c&&n&&n.length>0?n.map((function(t){return{address:e.address,callData:e.interface.encodeFunctionData(c,t)}})):[]}),[n,e,c]),o),l=Object(a.b)();return Object(r.useMemo)((function(){return i.map((function(t){return m(t,null===e||void 0===e?void 0:e.interface,c,l)}))}),[c,e,i,l])}function h(e,t,n,o,c){var i=Object(r.useMemo)((function(){return t.getFunction(n)}),[t,n]),l=Object(r.useMemo)((function(){return i&&s(o)?t.encodeFunctionData(i,o):void 0}),[o,t,i]),u=d(Object(r.useMemo)((function(){return i&&e&&e.length>0&&l?e.map((function(e){return e&&l?{address:e,callData:l}:void 0})):[]}),[e,l,i]),c),b=Object(a.b)();return Object(r.useMemo)((function(){return u.map((function(e){return m(e,t,i,b)}))}),[i,u,t,b])}function g(e,t,n,o){var c=Object(r.useMemo)((function(){var n;return null===e||void 0===e||null===(n=e.interface)||void 0===n?void 0:n.getFunction(t)}),[e,t]),i=d(Object(r.useMemo)((function(){return e&&c&&s(n)?[{address:e.address,callData:e.interface.encodeFunctionData(c,n)}]:[]}),[e,c,n]),o)[0],l=Object(a.b)();return Object(r.useMemo)((function(){return m(i,null===e||void 0===e?void 0:e.interface,c,l)}),[i,e,c,l])}},453:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return f}));var o=n(171),a=n(1),r=n(435),c=n(65),i=n(175),l=n(176),s=n(389),u=n(29),d=n(66),b=new s.b(l);function p(e){var t=Object(i.b)(),n=Object(a.useMemo)((function(){return e?e.map(c.b).filter((function(e){return!1!==e})).sort():[]}),[e]),l=Object(r.c)(t,"getEthBalance",n.map((function(e){return[e]})));return Object(a.useMemo)((function(){return n.reduce((function(e,t,n){var a,r,c=null===l||void 0===l||null===(a=l[n])||void 0===a||null===(r=a.result)||void 0===r?void 0:r[0];return c&&(e[t]=o.CurrencyAmount.ether(o.JSBI.BigInt(c.toString()))),e}),{})}),[n,l])}function m(e,t){return function(e,t){var n=Object(a.useMemo)((function(){var e;return null!==(e=null===t||void 0===t?void 0:t.filter((function(e){return!1!==Object(c.b)(null===e||void 0===e?void 0:e.address)})))&&void 0!==e?e:[]}),[t]),i=Object(a.useMemo)((function(){return n.map((function(e){return e.address}))}),[n]),l=Object(r.a)(i,b,"balanceOf",[e]),s=Object(a.useMemo)((function(){return l.some((function(e){return e.loading}))}),[l]);return[Object(a.useMemo)((function(){return e&&n.length>0?n.reduce((function(e,t,n){var a,r,c=null===l||void 0===l||null===(a=l[n])||void 0===a||null===(r=a.result)||void 0===r?void 0:r[0],i=c?o.JSBI.BigInt(c.toString()):void 0;return i&&(e[t.address]=new o.TokenAmount(t,i)),e}),{}):{}}),[e,n,l]),s]}(e,t)[0]}function f(e,t){var n=Object(d.a)().chainId,r=Object(a.useMemo)((function(){var e;return null!==(e=null===t||void 0===t?void 0:t.filter((function(e){return e instanceof o.Token})))&&void 0!==e?e:[]}),[t]),c=m(e,r),i=p(Object(a.useMemo)((function(){var e;return null!==(e=null===t||void 0===t?void 0:t.some((function(e){return n&&(null===e||void 0===e?void 0:e.symbol)===(null===u.i||void 0===u.i?void 0:u.i[n])})))&&void 0!==e&&e}),[t,n])?[e]:[]);return Object(a.useMemo)((function(){var a;return null!==(a=null===t||void 0===t?void 0:t.map((function(t){if(e&&t)return n&&(null===t||void 0===t?void 0:t.symbol)===(null===u.i||void 0===u.i?void 0:u.i[n])?i[e]:t instanceof o.Token?c[t.address]:void 0})))&&void 0!==a?a:[]}),[e,t,i,n,c])}},869:function(e,t,n){"use strict";n.r(t);var o,a,r=n(4),c=n(16),i=n(11),l=n(1),s=n.n(l),u=n(363),d=n(860),b=n(861),p=n(595),m=n(870),f=n(588),h=n(589),g=n(590),j=n(393),O=n(803),v=n.n(O),x=n(487),y=n.n(x),w=n(862),N=n(840),k=n(857),S=n(38),C=n(66),T=n(0),E=n(9),I=n(541),R=n(885),B=n(866),M=n(886),A=n(604),L=n(887),_=n(432),z=n(115),K=n(57),F=n(871),W=n(23),D=n(107),U=function(e){return e[e.MAINNET=1]="MAINNET",e[e.ROPSTEN=3]="ROPSTEN",e[e.RINKEBY=4]="RINKEBY",e[e.GOERLI=5]="GOERLI",e[e.KOVAN=42]="KOVAN",e[e.ZKERA=324]="ZKERA",e[e.TZKERA=280]="TZKERA",e[e.BSC=56]="BSC",e[e.BSC_TESTNET=97]="BSC_TESTNET",e[e.ARBITRUM_ONE=42161]="ARBITRUM_ONE",e[e.ARBITRUM_RINKEBY=421611]="ARBITRUM_RINKEBY",e[e.OPTIMISM=10]="OPTIMISM",e[e.OPTIMISTIC_KOVAN=69]="OPTIMISTIC_KOVAN",e[e.POLYGON=137]="POLYGON",e[e.POLYGON_MUMBAI=80001]="POLYGON_MUMBAI",e}({}),P=(o={},Object(i.a)(o,U.MAINNET,"mainnet"),Object(i.a)(o,U.ROPSTEN,"ropsten"),Object(i.a)(o,U.RINKEBY,"rinkeby"),Object(i.a)(o,U.GOERLI,"goerli"),Object(i.a)(o,U.KOVAN,"kovan"),Object(i.a)(o,U.BSC,"bsc"),Object(i.a)(o,U.BSC_TESTNET,"bsc_testnet"),Object(i.a)(o,U.ARBITRUM_ONE,"arbitrum_one"),Object(i.a)(o,U.ARBITRUM_RINKEBY,"arbitrum_rinkeby"),Object(i.a)(o,U.OPTIMISM,"optimism"),Object(i.a)(o,U.OPTIMISTIC_KOVAN,"optimistic_kovan"),Object(i.a)(o,U.POLYGON,"polygon"),Object(i.a)(o,U.POLYGON_MUMBAI,"polygon_mumbai"),Object(i.a)(o,U.ZKERA,"zksync_era"),Object(i.a)(o,U.TZKERA,"testnet_zksync_era"),o),G=(Object.values(U).filter((function(e){return"number"===typeof e})),["https://rpc.ankr.com/bsc_testnet_chapel"]),Z={MAINNET:{chainId:"0x".concat(U.MAINNET.toString(16)),chainName:P[U.MAINNET],chainRaw:U.MAINNET},ZKERA:{chainId:"0x".concat(U.ZKERA.toString(16)),chainName:P[U.ZKERA],chainRaw:U.ZKERA,nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:G,blockExplorerUrls:["https://explorer.zksync.io/"]},TZKERA:{chainId:"0x".concat(U.TZKERA.toString(16)),chainName:P[U.TZKERA],chainRaw:U.TZKERA,nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:G,blockExplorerUrls:["https://explorer.zksync.io/"]},POLYGON_MUMBAI:{chainId:"0x".concat(U.POLYGON_MUMBAI.toString(16)),chainName:P[U.POLYGON_MUMBAI],chainRaw:U.POLYGON_MUMBAI},RINKEBY:{chainId:"0x".concat(U.RINKEBY.toString(16)),chainName:P[U.RINKEBY],chainRaw:U.RINKEBY},GOERLI:{chainId:"0x".concat(U.GOERLI.toString(16)),chainName:P[U.GOERLI]},BSC_TESTNET:{chainId:"0x".concat(U.BSC_TESTNET.toString(16)),chainName:P[U.BSC_TESTNET],nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18},rpcUrls:G,blockExplorerUrls:["https://testnet.bscscan.com"]},BSC:{chainId:"0x".concat(U.BSC.toString(16)),chainName:P[U.BSC],nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/","https://bsc-dataseed1.defibit.io/","https://bsc-dataseed1.ninicoin.io/","https://bsc-dataseed2.defibit.io/"],blockExplorerUrls:["https://bscscan.com"]}},Y=function(e){return e[e.L1=0]="L1",e[e.L2=1]="L2",e}({});a={},Object(i.a)(a,U.MAINNET,{networkType:Y.L1,explorer:"https://etherscan.io/",label:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18}}),Object(i.a)(a,U.ZKERA,{networkType:Y.L1,explorer:"https://explorer.zksync.io/",label:"Zksync",nativeCurrency:{name:"ZkEther",symbol:"ETH",decimals:18}}),Object(i.a)(a,U.TZKERA,{networkType:Y.L1,explorer:"https://explorer.zksync.io/",label:"Zksync",nativeCurrency:{name:"ZkEther",symbol:"ETH",decimals:18}}),Object(i.a)(a,U.POLYGON_MUMBAI,{networkType:Y.L1,explorer:"https://etherscan.io/",label:"Mumbai",nativeCurrency:{name:"Mumbai",symbol:"WMATIC",decimals:18}}),Object(i.a)(a,U.GOERLI,{networkType:Y.L1,explorer:"https://goerli.etherscan.io/",label:"G\xf6rli",nativeCurrency:{name:"G\xf6rli Ether",symbol:"g\xf6rETH",decimals:18}}),Object(i.a)(a,U.BSC,{networkType:Y.L1,explorer:"`https://testnet.bscscan.com`",label:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18}}),Object(i.a)(a,U.BSC_TESTNET,{networkType:Y.L1,explorer:"`https://testnet.bscscan.com`",label:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18}});function H(e){switch(e){case W.d.ZKERA:case W.d.TZKERA:case W.d.MAINNET:case W.d.RINKEBY:case W.d.ROPSTEN:case W.d.BSC_TESTNET:case W.d.BSC:case W.d.GOERLI:}return D.a[e][0]}var J=function(){var e=Object(E.a)(Object(T.a)().mark((function e(t,n){var o,a,r,c,i;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("switch test ",{chainId:n}),Object(W.f)(n)){e.next=5;break}throw new Error("Chain ".concat(n," not supported for connector (").concat(typeof t,")"));case 5:if(t!==K.e.connector){e.next=10;break}return e.next=8,t.activate(n);case 8:case 16:case 27:e.next=32;break;case 10:return o=Object(W.e)(n),a={chainId:n,chainName:o.label,rpcUrls:[H(n)],nativeCurrency:o.nativeCurrency,blockExplorerUrls:[o.explorer]},e.prev=12,console.log("switch test activating chain ",a),e.next=16,t.activate(a);case 18:if(e.prev=18,e.t0=e.catch(12),console.log("switch test activation failed ",{error:e.t0}),r=280===n?Z.TZKERA:Z.BSC,console.log("switch test activation failed now adding ",r),console.log("switch test adding chain ",r),280!==n){e.next=29;break}return e.next=27,null===t||void 0===t||null===(c=t.provider)||void 0===c?void 0:c.request({method:"wallet_addEthereumChain",params:[r]});case 29:return e.next=31,null===t||void 0===t||null===(i=t.provider)||void 0===i?void 0:i.request({method:"wallet_switchEthereumChain",params:[{chainId:r.chainId}]});case 31:return e.abrupt("return");case 32:case"end":return e.stop()}}),e,null,[[12,18]])})));return function(t,n){return e.apply(this,arguments)}}(),V=n(17),$=Object(u.a)((function(e){var t;return{background:{position:"fixed",left:0,right:0,top:0,bottom:0,width:"100%",height:"100%",zIndex:10,display:"grid",placeItems:"center",background:"rgba(0,0,0,0.2)"},container:Object(i.a)({width:500,maxHeight:"100%",overflowY:"auto",maxWidth:788,position:"relative",background:"light"===e.palette.mode?"linear-gradient(180deg, #FFFFFF 0%, #D9E8FC 100%)":e.palette.background.primary,padding:8,borderRadius:4,zIndex:11},e.breakpoints.down("md"),{width:"100%",maxWidth:"95%"}),heading:(t={color:e.palette.text.primary,fontWeight:700,fontSize:22,paddingRight:20,letterSpacing:"0.01em",textAlign:"center",display:"flex",alignItems:"center",marginBottom:15},Object(i.a)(t,e.breakpoints.down("md"),{fontSize:22,paddingRight:10}),Object(i.a)(t,e.breakpoints.down("sm"),{fontSize:20,paddingRight:10}),t),card:Object(i.a)({padding:25,color:"light"===e.palette.mode?e.palette.text.primary:"#212121",border:"1px solid #919191",width:300,height:50,display:"flex",alignItems:"center",justifyContent:"flex-start",borderRadius:12,fontWeight:600,fontSize:18,marginBottom:20,cursor:"pointer"},e.breakpoints.down("sm"),{width:"80%",height:80,fontSize:14}),switchBtn:Object(i.a)({marginTop:30,backgroundColor:e.palette.primary.pbr,color:"white",width:"auto",height:45,textTransform:"none",fontSize:19,borderRadius:20,willChange:"transform",transition:"transform 450ms ease 0s",transform:"perspective(1px) translateZ(0px)",padding:"12px 50px 12px 50px","&:hover":{background:"rgba(61 90 254)"}},e.breakpoints.down("sm"),{fontSize:14})}})),q=function(e){var t=e.popupActive,n=e.resetPopup,o=Object(_.a)(!0).connectWallet,a=Object(C.a)(),r=a.isActive,c=a.chainId,i=a.connector,s=function(){n()},u=Object(S.d)((function(e){var t;return null===e||void 0===e||null===(t=e.account)||void 0===t?void 0:t.currentChain})),d=Object(S.d)((function(e){var t;return null===e||void 0===e||null===(t=e.account)||void 0===t?void 0:t.authenticationState})),b=Object(l.useMemo)((function(){return!!c&&!!W.a.includes(c)}),[c]),p=Object(l.useMemo)((function(){return!(!r||b)}),[r,b]),m=$(),f=Object(I.a)(),h=Object(R.a)(f.breakpoints.down("md")),g=Object(l.useCallback)((function(e){if("metamask"===e)return Object(z.p)()?void o(K.b.injected):void window.open("https://metamask.app.link/dapp","_blank","noopener,noreferrer");"trustWallet"!==e?"walletConnect"!==e||o(K.b.walletConnect):window.open("https://link.trustwallet.com","_blank","noopener,noreferrer")}),[o]),j=Object(l.useCallback)(Object(E.a)(Object(T.a)().mark((function e(){var t;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("switch test user selected chain ",u),e.next=4,J(i,u);case 4:t=e.sent,console.log("switch test activating  chain switch failed ",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("switch test activating  chain switch failed ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[u,i]),O=Object(l.useMemo)((function(){return d===K.a.CONNECTING_WALLET}),[d]);return Object(V.jsx)(B.a,{onClose:s,"aria-labelledby":"simple-dialog-title",open:t,children:Object(V.jsxs)(M.a,{border:"10px solid #D1FF1A",px:h?"5%":"2vw",py:h?"10%":"5vh",className:m.popup,children:[Object(V.jsx)(M.a,{style:{position:"absolute",right:"15px",top:"15px"},children:Object(V.jsx)(F.a,{style:{color:f.palette.text.primary,cursor:"pointer"},onClick:s})}),Object(V.jsx)("div",{className:m.background,children:Object(V.jsxs)("div",{className:m.container,children:[Object(V.jsx)("div",{className:"d-flex justify-content-end",children:Object(V.jsx)(F.a,{style:{color:f.palette.text.primary,fontSize:28},onClick:n})}),Object(V.jsx)("div",{className:"",style:{display:"flex",justifyContent:"center",alignItems:"baseline"},children:Object(V.jsxs)(M.a,{className:m.heading,children:[O&&!p&&"Connect Wallet",p&&"Switch Network"]})}),O&&Object(V.jsxs)(M.a,{mt:3,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(V.jsx)(A.a,{}),Object(V.jsx)(L.a,{fontSize:h?13:16,color:"#919191",fontWeight:h?400:500,mb:h?.5:1,children:"Waiting to connect"}),Object(V.jsx)(L.a,{fontSize:h?13:16,color:"#919191",fontWeight:600,mb:h?.5:1,children:"Confirm this connection in your wallet"}),Object(V.jsx)(L.a,{style:{backgroundColor:"#d1c4e9",padding:5,borderRadius:5,color:"light"===f.palette.mode?f.palette.text.primary:"#212121",textAlign:"center"},mt:3,children:"By connecting a wallet, you agree to Zycta-Finance Terms of Service and consent to its Privacy Policy."})]}),p&&Object(V.jsx)(M.a,{mt:3,mb:5,display:"flex",flexDirection:"column",alignItems:"center",children:Object(V.jsx)(N.a,{className:m.switchBtn,onClick:j,children:"Switch Network"})}),!O&&!p&&Object(V.jsxs)(M.a,{mt:3,display:"flex",flexDirection:"column",alignItems:"center",children:[Object(V.jsxs)(M.a,{className:m.card,style:{backgroundColor:"#d1c4e9"},onClick:function(){return g("metamask")},children:[Object(V.jsx)("img",{src:"img/metamask.png",height:"30px",alt:"metamask",style:{marginRight:10}}),"Metamask"]}),Object(V.jsxs)(M.a,{className:m.card,style:{backgroundColor:"#d1c4e9"},onClick:function(){return g("walletConnect")},children:[Object(V.jsx)("img",{src:"img/walletConnect.svg",alt:"walletConnect",height:"27px",style:{marginRight:10}})," ","Wallet Connect"]})]})]})})]})})},Q=n(591),X=n(596),ee=n(29),te=n(395),ne=n(453),oe=Object(u.a)((function(e){return{background:Object(i.a)({backgroundColor:e.palette.primary.bgCard,color:e.palette.textColors.heading,width:320,height:350,padding:10},e.breakpoints.down("md"),{width:280,height:"100%"}),heading:{fontSize:18,fontWeight:400,color:e.palette.textColors.headingWhite},subheading:Object(i.a)({fontSize:19,fontWeight:500,color:e.palette.textColors.subheadingWhite},e.breakpoints.down("md"),{fontSize:19}),buttons:{display:"flex",justifyContent:"center"},numbers:{color:e.palette.textColors.pbr,fontSize:20,marginLeft:15},icon:{marginRight:5,color:"#757575"},cancelButton:Object(i.a)({backgroundColor:e.palette.primary.iconBack,color:e.palette.primary.iconColorGold,borderColor:"#f6f6f6",width:130,height:40,textTransform:"none",fontSize:16,borderRadius:10,marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,"&:hover":{background:"rgba(255, 255, 255, 0.3)"}},e.breakpoints.down("sm"),{fontSize:12,padding:"5px 20px 5px 20px",width:"fit-content"}),signoutButton:Object(i.a)({backgroundColor:e.palette.primary.pbr,color:e.palette.primary.buttonText,borderColor:"#f6f6f6",width:130,height:40,textTransform:"none",fontSize:16,borderRadius:10,marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,"&:hover":{background:"rgba(255, 255, 255, 0.3)"}},e.breakpoints.down("sm"),{fontSize:12,padding:"5px 20px 5px 20px",width:"fit-content"}),accountCard:Object(i.a)({marginTop:20,width:"100%",height:"100%",minHeight:100,maxHeight:150,backgroundColor:e.palette.primary.bgCard,border:"0.5px solid rgba(224, 224, 224,0.6)",padding:15,borderRadius:15,paddingBottom:0,marginBottom:30},e.breakpoints.down("sm"),{padding:15,width:"95%",height:"100%"})}})),ae=function(e){var t,n=e.open,o=e.handleClose,a=e.handleLogout,r=oe(),c=Object(C.a)(),i=c.chainId,l=c.account,s=Object(ne.b)([l]);return Object(V.jsx)("div",{children:Object(V.jsx)(Q.a,{onClose:o,open:n,disableBackdropClick:!0,className:r.dialog,color:"transparent",PaperProps:{style:{borderRadius:15,backgroundColor:"#121827",color:"#f9f9f9"}},children:Object(V.jsxs)("div",{className:r.background,children:[Object(V.jsxs)("div",{className:"d-flex justify-content-between w-100 px-3 mt-3",children:[Object(V.jsx)("div",{children:Object(V.jsx)("h6",{className:r.heading,children:"Account"})}),Object(V.jsx)("div",{style:{cursor:"pointer"},children:Object(V.jsx)(X.a,{onClick:function(){return o()}})})]}),Object(V.jsxs)("div",{className:r.accountCard,children:[Object(V.jsx)("h6",{style:{fontWeight:600,fontSize:14,color:"#fff"},children:"Wallet connected with:"}),Object(V.jsxs)("a",{href:null===te.d||void 0===te.d?void 0:te.d.showAddress(l,i),target:"_blank",className:r.subheading,rel:"noreferrer",children:[l?Object(V.jsx)("span",{}):"...",null===l||void 0===l?void 0:l.slice(0,3),"...",null===l||void 0===l?void 0:l.slice((null===l||void 0===l?void 0:l.length)-4,null===l||void 0===l?void 0:l.length)]}),Object(V.jsx)("h6",{style:{fontWeight:600,fontSize:14,color:"#fff",marginTop:20},children:"Balance:"}),Object(V.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"start",paddingBottom:10},children:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(k.a,{fontSize:"small",className:r.icon,style:{color:"white"}}),Object(V.jsx)("span",{style:{color:"white"},className:r.icon,children:null===ee.i||void 0===ee.i?void 0:ee.i[i]}),Object(V.jsx)("span",{className:r.numbers,children:s?null===s||void 0===s||null===(t=s[l])||void 0===t?void 0:t.toExact(4):"0"})]})})]}),Object(V.jsxs)("div",{className:r.buttons,children:[Object(V.jsx)(N.a,{variant:"light",onClick:o,className:r.cancelButton,children:"Cancel"}),Object(V.jsx)(N.a,{onClick:function(){localStorage.setItem("logout".concat(l),l),a(),o()},className:r.signoutButton,children:"Sign out"})]})]})})})},re=Object(S.b)((function(e){return{account:e.account}}),{})(s.a.memo(ae)),ce=n(24),ie=Object(u.a)((function(e){return{root:Object(i.a)({display:"flex",justifyContent:"space-between",alignItems:"center",background:e.palette.primary.pbr,color:e.palette.primary.buttonText,borderRadius:15,padding:6,paddingLeft:15,paddingRight:15,cursor:"pointer","&:hover":{background:"rgba(224, 208, 217,1)"}},e.breakpoints.down("sm"),{paddingLeft:15,paddingRight:15}),smallBtn:Object(i.a)({backgroundColor:e.palette.primary.iconBack,color:e.palette.primary.iconColor,borderRadius:15,height:35,marginRight:40,padding:15,fontSize:12,textTransform:"none","&:hover":{background:"rgba(255, 255, 255, 0.7)"}},e.breakpoints.down("md"),{marginRight:0,width:"fit-content",backgroundColor:e.palette.primary.buttonColor,padding:6,paddingLeft:10,paddingRight:10}),numbers:{color:"#f9f9f9",fontSize:14}}})),le=function(){var e=ie(),t=Object(C.a)(),n=t.isActive,o=t.account,a=t.chainId,r=Object(l.useState)(!0),i=Object(c.a)(r,2),s=i[0],u=i[1],d=Object(l.useState)(!1),b=Object(c.a)(d,2),p=b[0],m=b[1],f=Object(_.a)().logout,h=Object(S.c)(),g=Object(S.d)((function(e){var t;return null===e||void 0===e||null===(t=e.account)||void 0===t?void 0:t.authenticationState}));Object(l.useEffect)((function(){g===K.a.CONNECTING_WALLET?u(!0):g===K.a.WALLET_CONNECTED&&u(!1)}),[g]);var j=Object(l.useMemo)((function(){return!!a&&!!W.a.includes(a)}),[a]),O=Object(l.useMemo)((function(){return!(!n||j)}),[n,j]),v=Object(l.useCallback)((function(){n&&!O?m(!0):u(!0),console.log("opening popup ",{isActive:n,isNetworkSwitchRequired:O})}),[m,n,u,O]),x=Object(l.useCallback)((function(){u(!1),h({type:ce.N,payload:K.a.NOT_STARTED})}),[u,h]);return Object(V.jsxs)("div",{children:[Object(V.jsx)(re,{open:p,handleLogout:function(){f()},handleClose:function(){return m(!1)}}),Object(V.jsx)(q,{popupActive:s,resetPopup:x}),(!n||O)&&Object(V.jsx)(N.a,{onClick:v,style:{color:"white"},className:e.smallBtn,children:O?"Switch network":"Connect wallet"}),n&&!O&&Object(V.jsxs)(N.a,{style:{color:"white"},onClick:v,className:e.root,children:[Object(V.jsx)(k.a,{style:{marginRight:5,fontSize:20},fontSize:"medium"}),Object(V.jsx)("strong",{className:e.numbers,children:Object(z.c)(o,3)})]})]})},se=Object(S.b)((function(e){return{account:e.account}}),{})(s.a.memo(le));Object(u.a)((function(e){return{circle:{color:"#3d5afe",fontSize:20}}})),n(859),n(858),n(868),Object(u.a)((function(e){return{root:{display:"flex",justifyContent:"space-around"},imgIcon:{marginLeft:10,height:23},buttonDrop:{display:"flex",justifyContent:"space-between",color:"black",backgroundColor:"white","&:hover":{backgroundColor:"grey",color:"#100525"}},main:{backgroundColor:"#f9f9f9",color:"#3d5afe",textTransform:"none","&:hover":{background:"rgba(255, 255, 255, 0.7)"},fontSize:12,fontWeight:700,border:"1px solid rgba(61 90 254)",borderRadius:60,paddingLeft:15,height:40,width:"full-width",marginRight:7,paddingTop:3}}}));var ue=n(419),de=n(597),be=Object(u.a)((function(e){return{grow:{flexGrow:1},spanLogoText:{fontWeight:700},appBarBackground:{boxShadow:"none",backgroundColor:"#3d5afe",display:"flex",alignItems:"center",justifyContent:"space-between !important",borderBottom:"0.5px solid #e5e5e5"},menuButton:{textTransform:"none"},title:{fontWeight:600,fontSize:22},iconText:{fontSize:15},icon:{},sectionDesktop:Object(i.a)({marginLeft:40,marginRight:40,width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("md"),{display:"none"}),sectionMobile:Object(i.a)({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},e.breakpoints.up("md"),{display:"none"}),fullList:{width:"auto"},menuTitleMobile:{paddingLeft:25,fontWeight:600,verticalAlign:"baseline",textAlign:"left",fontSize:16,color:e.palette.primary.iconColor},navbarItemsDesktop:{paddingRight:10,fontWeight:500,lineHeight:"24px",verticalAlign:"baseline",letterSpacing:"-1px",margin:0,padding:"9px 14px 0px",cursor:"pointer",fontSize:"1.05vw",color:e.palette.common.white},leftMargin:Object(i.a)({marginLeft:159},e.breakpoints.down("lg"),{marginLeft:100}),numbers:Object(i.a)({color:"#3d5afe",fontSize:26},e.breakpoints.down("sm"),{fontSize:16}),menuIcon:{color:e.palette.primary.iconColor},logo:Object(i.a)({height:44},e.breakpoints.down("sm"),{height:30,width:"auto"}),list:{paddingTop:20,width:"100%",borderTop:"5px solid #3d5afe",height:"100%",color:e.palette.primary.iconColor}}})),pe=function(e){var t=e.account.currentChain,n=be(),o=s.a.useState({right:!1}),a=Object(c.a)(o,2),u=a[0],O=a[1],x=function(e,t){return function(n){O(Object(r.a)(Object(r.a)({},u),{},Object(i.a)({},e,t)))}},N=function(e){return Object(V.jsx)("div",{className:Object(j.a)(n.list,Object(i.a)({},n.fullList,"bottom"===e||"bottom"===e)),role:"presentation",onClick:x(e,!1),onKeyDown:x(e,!1),children:Object(V.jsx)(f.a,{children:[{name:"Launchpad",link:"/launchpad",id:"characters",icon:Object(V.jsx)(v.a,{})},{name:"Swap",link:"/",id:"items",icon:Object(V.jsx)(y.a,{})}].map((function(t,o){return Object(V.jsxs)(h.a,{button:!0,onClick:x(e,!1),children:[Object(V.jsx)("a",{href:t.link,children:Object(V.jsx)(g.a,{primary:t.name,className:n.menuTitleMobile})}),Object(V.jsx)(de.a,{})]},t.name)}))})})},k=Object(C.a)(),T=k.account,E=k.chainId,I=Object(S.c)();return Object(l.useEffect)((function(){t&&I(Object(ue.e)(t))}),[I,t]),Object(l.useEffect)((function(){if(E){var e,t=localStorage.getItem("cachedChain");if(t&&(null===E||void 0===E?void 0:E.toString())!==t)localStorage.setItem("cachedChain",null===E||void 0===E?void 0:E.toString()),null===(e=window)||void 0===e||e.location.reload();else t||localStorage.setItem("cachedChain",null===E||void 0===E?void 0:E.toString())}}),[E,T]),Object(l.useEffect)((function(){if(T){var e,t=localStorage.getItem("cachedAccount");if(t&&(null===T||void 0===T?void 0:T.toString())!==t)localStorage.setItem("cachedAccount",null===T||void 0===T?void 0:T.toString()),null===(e=window)||void 0===e||e.location.reload();else t||localStorage.setItem("cachedAccount",null===T||void 0===T?void 0:T.toString())}}),[T]),Object(V.jsxs)("div",{className:n.grow,children:[Object(V.jsxs)(d.a,{color:"transparent",position:"fixed",className:n.appBarBackground,children:[Object(V.jsxs)(b.a,{className:n.sectionDesktop,children:[Object(V.jsxs)("a",{href:"/",style:{fontSize:"26px",backgroundColor:"#3d5afe",height:"100%",padding:"1rem"},children:[" ",Object(V.jsx)("img",{alt:"logo",src:"img/logo-white.png",className:n.logo}),Object(V.jsx)("span",{className:n.spanLogoText,children:"Zycta-"}),"Finance"]}),Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"/launchpad",className:n.navbarItemsDesktop,children:"Launchpad"})}),Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"/",className:n.navbarItemsDesktop,style:{color:"#fff"},children:"Swap"})}),Object(V.jsx)("div",{className:n.grow}),Object(V.jsx)(se,{})]}),Object(V.jsxs)(b.a,{className:n.sectionMobile,children:[Object(V.jsx)("div",{children:Object(V.jsx)("a",{href:"/",children:Object(V.jsx)("img",{alt:"logo",variant:"square",src:"img/logo-white.png",className:n.logo})})}),Object(V.jsxs)("div",{className:" d-flex  align-items-center",children:[Object(V.jsx)(se,{}),["bottom"].map((function(e){return Object(V.jsxs)(s.a.Fragment,{children:[Object(V.jsx)(p.a,{"aria-label":"More","aria-haspopup":"true",className:n.menuIcon,onClick:x(e,!0),children:Object(V.jsx)(w.a,{className:n.menuIcon})}),Object(V.jsx)(m.a,{anchor:e,disableSwipeToOpen:!1,open:u[e],onClose:x(e,!1),onOpen:x(e,!0),classes:{paper:n.appBarBackground},children:N(e)})]},e)}))]})]})]}),Object(V.jsx)(b.a,{})," "]})};t.default=Object(S.b)((function(e){return{account:e.account}}),{})(s.a.memo(pe))}}]);