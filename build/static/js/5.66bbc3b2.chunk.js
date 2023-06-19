(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{417:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return T})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return x}));var a=n(0),s=n(9),r=n(533),i=n.n(r),p=n(178),u=n(476),l=n(450),o=n(176),y=n(179),d=n(29),c=n(115),m=n(107),b=function(e,t){return w(t,l,e)},f=function(e,t){return w(t,o,e)},T=function(e){var t=d.l[e];return w(e,p,t)},v=function(e){var t=null===d.e||void 0===d.e?void 0:d.e[e];return w(e,u,t)},h=function(e){var t=null===d.f||void 0===d.f?void 0:d.f[e];return w(e,y,t)},w=function(e,t,n){var a,s;Object(c.p)()?a=new i.a(window.ethereum):(console.log("connection test ",{rpc:null===m.a||void 0===m.a?void 0:m.a[e]}),a=new i.a(new i.a.providers.HttpProvider(null===m.a||void 0===m.a||null===(s=m.a[e])||void 0===s?void 0:s[0])));return new a.eth.Contract(t,n)},x=function(){var e=Object(s.a)(Object(a.a)().mark((function e(t,n,s){var r,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=v(s),e.next=4,r.methods.getPair(t,n).call();case 4:if((i=e.sent)!==d.B){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),console.log("getPairAddress",e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}()},419:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return v}));var a=n(27),s=n(16),r=n(0),i=n(9),p=(n(28),n(29)),u=n(417),l=n(115),o=n(24),y=n(477),d=function(e,t,n,a){return function(){var n=Object(i.a)(Object(r.a)().mark((function n(i){var p,y,d,c,m,b;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p=Object(u.c)(e,a),n.next=4,Promise.all([p.methods.token0().call(),p.methods.getReserves().call()]);case 4:y=n.sent,d=Object(s.a)(y,2),c=d[0],m=d[1],b="0",b=t.address===c?m._reserve0:m._reserve1,i({type:o.l,payload:Object(l.i)(t.input,b)}),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),console.log("getPoolShare:  ",n.t0),i({type:o.g,payload:"Failed to get token price"});case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()},c={280:y},m=function(e){return function(){var t=Object(i.a)(Object(r.a)().mark((function t(n){var s,i,p;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:o.H}),s=null===c||void 0===c?void 0:c[e||280],i=Object(l.e)(),p=i.length>0?[].concat(Object(a.a)(i),Object(a.a)(s)):Object(a.a)(s),n({type:o.t,payload:p})}catch(r){console.log("loadTokens ",r)}n({type:o.q});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(i.a)(Object(r.a)().mark((function n(a){var i,y,d,c,m,b,f,T;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:o.F}),i=Object(u.e)(e,t),n.next=5,Promise.all([Object(l.b)(e,t),i.methods.decimals().call()]);case 5:y=n.sent,d=Object(s.a)(y,2),c=d[0],m=d[1],"0"===c.status?"testnet"===p.t&&(b={tokenName:"Test erc20 token",symbol:e&&e.slice(0,6),address:e,decimals:parseInt(m)},Object(l.a)(b),a({type:o.r,payload:{listData:b}})):(f=c.result[0],T={name:f.tokenName,symbol:f.symbol,address:e,decimals:parseInt(m)},Object(l.a)(T),a({type:o.r,payload:{listData:T}})),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("importToken ",n.t0);case 15:a({type:o.o});case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e,t,n,a){return function(){var a=Object(i.a)(Object(r.a)().mark((function a(s){var i;return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{s({type:o.F}),(i={})["".concat(e,"_").concat(t)]=n,s({type:o.z,payload:i})}catch(r){console.log("loadPairAddress ",r),s({type:o.g,payload:"Pair not founds"})}s({type:o.o});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},T=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,n,a,i){var p,u,l,o,y,d,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([a.methods.balanceOf(i).call(),a.methods.token0().call(),a.methods.getReserves().call(),a.methods.totalSupply().call()]);case 3:return p=e.sent,u=Object(s.a)(p,4),l=u[0],o=u[1],y=u[2],d=u[3],c={},t.address.toLowerCase()===o.toLowerCase()?(c[t.symbol]=y._reserve0,c[n.symbol]=y._reserve1):(c[t.symbol]=y._reserve1,c[n.symbol]=y._reserve0),e.abrupt("return",{reserve:c,lpBalance:l,totalSupply:d});case 14:return e.prev=14,e.t0=e.catch(0),console.log("fetchPairData exeption ",e.t0),e.abrupt("return",{reserve:"0",lpBalance:"0",totalSupply:"0"});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n,a,s){return e.apply(this,arguments)}}(),v=function(e,t,n,a,s){return function(){var p=Object(i.a)(Object(r.a)().mark((function i(p){var y,d,c,m,b,f,v;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,y=Object(u.c)(n,s),p({type:o.F}),r.next=5,T(e,t,y,a);case 5:d=r.sent,c=d.reserve,m=d.totalSupply,b=d.lpBalance,p({type:o.A,payload:c}),f=b,v=m,p({type:o.l,payload:Object(l.i)(f,v)}),p({type:o.y,payload:{pair:"".concat(e.symbol,"_").concat(t.symbol),amount:f}}),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(0),console.log("lpBalance ",r.t0),p({type:o.g,payload:"Failed to fetch lpBalance"});case 20:p({type:o.o});case 21:case"end":return r.stop()}}),i,null,[[0,16]])})));return function(e){return p.apply(this,arguments)}}()}},450:function(e){e.exports=JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},476:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')},477:function(e){e.exports=JSON.parse('[{"name":"USDC","symbol":"USDC","address":"0x0faF6df7054946141266420b43783387A78d82A9","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"},{"name":"DAI","symbol":"DAI","address":"0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b","decimals":18,"chainId":280,"logoURI":"https://ethereum.org/static/aeb9ad1df22beac0096e2d2ababc267a/67d4a/dai-large.png"},{"name":"Zksync Era","symbol":"WETH","address":"0x20b28B1e4665FFf290650586ad76E977EAb90c5D","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"},{"name":"Ether","symbol":"ETH","address":"0x0000000000000000000000000000000000000000","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"},{"name":"CONE","symbol":"CONE","address":"0x55354D379f67177B42d5511EBaCBD12325b86209","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"},{"name":"wBTC","symbol":"wBTC","address":"0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"},{"name":"LINK","symbol":"LINK","address":"0x40609141Db628BeEE3BfAB8034Fc2D8278D0Cc78","decimals":18,"chainId":280,"logoURI":"https://i.ibb.co/rGJ8WyX/eth-logo.png"}]')}}]);