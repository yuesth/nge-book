(this.webpackJsonpngebook=this.webpackJsonpngebook||[]).push([[2],{135:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),a=n(45),o=n(65),s=n(0),l=n(43),i=n.n(l),u=(n(74),n(75),n(44)),b=n(1),d=n(31),h=n(2),p=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,324))})),j=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,327))})),O=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,331))}));var g=function(e){e.path,e.element;var t=Object(d.b)().currentUser,n=Object(b.g)();return t?Object(h.jsx)(b.b,{}):Object(h.jsx)(b.a,{to:"/login",state:{from:n}})},f=function(e){var t=e.contract,n=e.currentUser,r={contract:t,nearConfig:e.nearConfig,currentUser:n,wallet:e.wallet};return Object(h.jsx)(d.a,{value:r,children:Object(h.jsx)(u.a,{children:Object(h.jsx)(s.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsxs)(b.e,{children:[Object(h.jsx)(b.c,{path:"/login",element:Object(h.jsx)(p,{})}),Object(h.jsx)(b.c,{path:"/library",element:Object(h.jsx)(g,{}),children:Object(h.jsx)(b.c,{path:"/library",element:Object(h.jsx)(O,{})})}),Object(h.jsx)(b.c,{path:"/",element:Object(h.jsx)(g,{}),children:Object(h.jsx)(b.c,{path:"/",element:Object(h.jsx)(j,{})})})]})})})})},m=n(23),w=n(66),_=n.n(w);function x(){return(x=Object(o.a)(c.a.mark((function e(){var t,n,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_()("development"),e.next=3,m.connect(Object(a.a)({deps:{keyStore:new m.keyStores.BrowserLocalStorageKeyStore}},t));case 3:if(n=e.sent,!(r=new m.WalletConnection(n)).getAccountId()){e.next=11;break}return e.t0=r.getAccountId(),e.next=9,r.account().state();case 9:e.t1=e.sent.amount,o={accountId:e.t0,balance:e.t1};case 11:return e.next=13,new m.Contract(r.account(),t.contractName,{viewMethods:["get_book","get_books"],changeMethods:["add_book","update_book","delete_book"],sender:r.account()});case 13:return s=e.sent,e.abrupt("return",{contract:s,currentUser:o,nearConfig:t,walletConnection:r});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return x.apply(this,arguments)}().then((function(e){var t=e.contract,n=e.currentUser,r=e.nearConfig,c=e.walletConnection;i.a.render(Object(h.jsx)(f,{contract:t,currentUser:n,nearConfig:r,wallet:c}),document.getElementById("root"))}))},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(0),c=n(2),a=Object(r.createContext)();function o(){return Object(r.useContext)(a)}function s(e){var t=e.children,n=e.value;return Object(c.jsx)(a.Provider,{value:n,children:t})}},66:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/nge-book",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NYT_KEY:"SbTbZ6EQbYAnXInQb0tJbxPXCZTApz2t"}).CONTRACT_NAME||"yueshafiyan.testnet";e.exports=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"production":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/nge-book",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NYT_KEY:"SbTbZ6EQbYAnXInQb0tJbxPXCZTApz2t"}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},74:function(e,t,n){},82:function(e,t){},91:function(e,t){}},[[135,3,4]]]);
//# sourceMappingURL=main.fc82f62c.chunk.js.map