(globalThis.webpackChunkany_arts=globalThis.webpackChunkany_arts||[]).push([["src_bootstrap_app_tsx-src_static_images_magic-eden-logo_jpeg"],{45597:(e,t,s)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return l.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return a.default}});var n=o(s(27803)),r=o(s(85468)),i=o(s(83943)),l=o(s(69363)),a=o(s(83272));function o(e){return e&&e.__esModule?e:{default:e}}const c=[n.default,r.default,i.default];t.h0=c},1396:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Page:()=>Ge,__esModule:()=>Le.X$,logo:()=>Le.jY,panels:()=>Le.h0,readme:()=>Le.ng});var n=s(55754),r=s(56345),i=s(45055),l=s(94751),a=s(92950),o=s(69716),c=s(45263);const d=e=>{let{onMore:t=(()=>{}),loading:s=!1,disabled:n=!1}=e;return(0,c.jsx)(l.Button,{type:"text",size:"large",onClick:t,loading:s,disabled:n,icon:(0,c.jsx)(o.Z,{name:"caret-down-outline"}),children:"More"})};const u=s.p+"static/media/nft-default.e7d7d405622ec80c0c232699de2b2c8e.svg";var h=s(19289),p=s(42224),x=s(21995),g=s.n(x);const m=class{constructor(){this._offset=void 0,this.key=e=>{if(!e)throw new Error("The key cannot be empty.");return e+"-offset"},this.set=(e,t)=>{const s=this.key(e);this._offset[s]=t},this.get=e=>{const t=this.key(e);return this._offset[t]||0},this._offset={}}};var y=s(97429).Buffer;const j=class extends m{constructor(e){var t;super(),t=this,this.api="https://api-mainnet.magiceden.dev/v2",this.stat="https://stats-mainnet.magiceden.io/collection_stats",this.connection=void 0,this.service="https://cors.sentre.io/magic-eden",this.referralAddress="9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e",this.auctionHouseAddress="E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",this.getAPI=e=>{let{path:t,params:s,auth:n=!1}=e;if(s)for(const a in s)s[a]=s[a].toString();const r=this.api+t,i=s?`?${new URLSearchParams(s).toString()}`:"",l=encodeURIComponent(`${r}${i}`);return`${this.service}/forward/${l}?auth=${n}`},this.getStat=e=>{let{path:t,params:s}=e;if(s)for(const l in s)s[l]=s[l].toString();const n=this.stat+t,r=s?`?${new URLSearchParams(s).toString()}`:"",i=encodeURIComponent(`${n}${r}`);return`${this.service}/forward/${i}`},this.getMyNFTs=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";if(!r.util.isAddress(e))throw new Error("Invalid wallet address");const n=0,i=500,l=t.getAPI({path:`/wallets/${e}/tokens`,params:{offset:n,limit:i,listStatus:s}}),{data:a}=await g().get(l);if(!a)throw new Error("Invalid wallet address");return a},this.getCollection=async e=>{if(!e)throw new Error("Invalid symbol");const t=`${this.service}/collections/${e}`,{data:s}=await g().get(t);if(!s)throw new Error("Invalid symbol");return s},this.getCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;const n=`${t.service}/collections?offset=${e}&limit=${s}`,{data:r}=await g().get(n);return r||[]},this.getPopularCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1d",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12;const n=t.getStat({path:"/popular_collections/sol",params:{window:e,limit:s}}),{data:r}=await g().get(n);return r||[]},this.nextCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;const s=t.get("collections"),n=await t.getCollections(s,e);return t.set("collections",s+n.length),n},this.searchCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e||e.length<=3)return;const s=0,n=5,r=`${t.service}/collections?search=${e}&offset=${s}&limit=${n}`,{data:i}=await g().get(r);return i||[]},this.getListingNFTs=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;const r={offset:s,limit:n},i=t.getAPI({path:`/collections/${e}/listings`,params:r}),{data:l}=await g().get(i);return l||[]},this.nextListingNFTs=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const n=t.get(e),r=await t.getListingNFTs(e,n,s);return t.set(e,n+r.length),r},this.getNFTMetadata=async e=>{if(!r.util.isAddress(e))throw new Error("Invalid mint address");const t=this.getAPI({path:`/tokens/${e}`}),{data:s}=await g().get(t);if(!s)throw new Error("Invalid mint address");return s},this.buyNow=async e=>{let{buyerAddress:t,sellerAddress:s,auctionHouseAddress:n,mintAddress:i,price:l,sellerReferralAddress:a}=e;if(!r.util.isAddress(t))throw new Error("Invalid buyer address");if(!r.util.isAddress(s))throw new Error("Invalid seller address");if(!r.util.isAddress(i))throw new Error("Invalid mint address");const o={buyer:t,seller:s,auctionHouseAddress:n,tokenMint:i,tokenATA:await r.util.deriveAssociatedAddress(s,i),price:l,buyerReferral:this.referralAddress,sellerReferral:a,buyerExpiry:0,sellerExpiry:-1},c=this.getAPI({path:"/instructions/buy_now",params:o,auth:!0}),{data:d}=await g().get(c);return p.Transaction.from(y.from(d.txSigned))},this.sell=async e=>{let{sellerAddress:t,mintAddress:s,price:n}=e;if(!r.util.isAddress(t))throw new Error("Invalid seller address");if(!r.util.isAddress(s))throw new Error("Invalid mint address");const i=await r.util.deriveAssociatedAddress(t,s),l={seller:t,auctionHouseAddress:this.auctionHouseAddress,tokenMint:s,tokenAccount:i,price:n,sellerReferral:this.referralAddress,expiry:-1},a=this.getAPI({path:"/instructions/sell",params:l,auth:!0}),{data:o}=await g().get(a);return p.Transaction.from(y.from(o.txSigned))},this.cancel=async e=>{let{sellerAddress:t,mintAddress:s,price:n}=e;if(!r.util.isAddress(t))throw new Error("Invalid seller address");if(!r.util.isAddress(s))throw new Error("Invalid mint address");const i=await r.util.deriveAssociatedAddress(t,s),l={seller:t,auctionHouseAddress:this.auctionHouseAddress,tokenMint:s,tokenAccount:i,price:n,sellerReferral:this.referralAddress,expiry:-1},a=this.getAPI({path:"/instructions/sell_cancel",params:l,auth:!0}),{data:o}=await g().get(a);return p.Transaction.from(y.from(o.txSigned))},this.sendAndConfirm=async e=>{let t=[];for(const s of e){const e=await this.connection.sendRawTransaction(s.serialize(),{skipPreflight:!0,preflightCommitment:"confirmed"});await this.connection.confirmTransaction(e),t.push(e)}return t},this.connection=new p.Connection(e)}},f="collections",w=new j(r.rpc),C=(0,h.createAsyncThunk)(`${f}/nextCollections`,(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t=await w.nextCollections(e),s={};for(const n of t)s[n.symbol]=n;return s})),b=(0,h.createAsyncThunk)(`${f}/getCollection`,(async(e,t)=>{let{symbol:s,force:n=!1}=e,{getState:r}=t;const{collections:{[s]:i}}=r();if(i&&!n)return{[s]:i};return{[s]:await w.getCollection(s)}})),v=(0,h.createSlice)({name:f,initialState:{},reducers:{},extraReducers:e=>{e.addCase(C.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(b.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,A={categories:[],description:"",discord:"",image:u,name:"",symbol:"",twitter:"",website:""},S=e=>{const t=(0,n.useDispatch)(),s=(0,n.useSelector)((t=>t.collections[e]));return(0,a.useEffect)((()=>{s||t(b({symbol:e}))}),[t,s,e]),s?{loading:!1,collection:s}:{loading:!0,collection:A}},k=e=>{let{symbol:t}=e;const{collection:{website:s,twitter:n,discord:r}}=S(t),i=(e,t)=>(e.stopPropagation(),window.open(t,"_blank"));return(0,c.jsxs)(l.Space,{size:0,children:[(0,c.jsx)(l.Button,{type:"text",icon:(0,c.jsx)(o.Z,{name:"earth-outline"}),onClick:e=>i(e,s),disabled:!s}),(0,c.jsx)(l.Button,{type:"text",icon:(0,c.jsx)(o.Z,{name:"logo-twitter"}),onClick:e=>i(e,n),disabled:!n}),(0,c.jsx)(l.Button,{type:"text",icon:(0,c.jsx)(o.Z,{name:"logo-discord"}),onClick:e=>i(e,r),disabled:!r})]})},T=s.p+"static/media/magic-eden-logo.dc84d1f6359782b8773e.jpeg",R=e=>{let{symbol:t,closable:s=!1,onClose:n=(()=>{})}=e;const{loading:i,collection:{name:d,description:u,image:h}}=S(t),{to:p}=(0,r.useAppRoute)(),x=(0,a.useCallback)((()=>p(`/${t}`)),[p,t]),g=(0,a.useCallback)((e=>(e.stopPropagation(),window.open(`https://magiceden.io/marketplace/${t}`,"_blank"))),[t]),m=(0,a.useCallback)((e=>(e.stopPropagation(),n(t))),[t,n]);return(0,c.jsx)(l.Card,{cover:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{width:"100%",height:"100%",alt:t,src:h}),s&&(0,c.jsx)(l.Button,{shape:"circle",className:"close-button",icon:(0,c.jsx)(o.Z,{name:"close"}),onClick:m})]}),bodyStyle:{padding:16},bordered:!1,onClick:x,loading:i,hoverable:!0,children:(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Title,{level:5,ellipsis:!0,children:d})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Paragraph,{ellipsis:{rows:2},children:u})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[8,8],align:"middle",wrap:!1,children:[(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsx)("span",{onClick:g,children:(0,c.jsx)(l.Avatar,{src:T,size:24})})}),(0,c.jsx)(l.Col,{children:(0,c.jsx)(k,{symbol:t})})]})})]})})},E="category",I=(0,h.createAsyncThunk)("category/pushRecent",(async(e,t)=>{let{getState:s}=t;const{category:{recent:n}}=s(),r=[...n];for(const i of e)r.includes(i)||r.push(i);return{recent:r}})),P={window:"1d",limit:12},M=(0,h.createAsyncThunk)("category/loadHot",(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,{getState:t}=arguments.length>1?arguments[1]:void 0;const{window:s,limit:n}={...P,...e},{category:{hot:r}}=t(),i=await w.getPopularCollections(s,n),l=i.map((e=>{let{collectionSymbol:t}=e;return t})),a=[...r];for(const o of l)a.includes(o)||a.push(o);return{hot:a}})),N=(0,h.createSlice)({name:E,initialState:{recent:[],hot:[]},reducers:{},extraReducers:e=>{e.addCase(I.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(M.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,$=()=>{const[e,t]=(0,a.useState)(!1),s=(0,n.useSelector)((e=>e.category.recent)),r=(0,n.useDispatch)(),i=(0,a.useCallback)((async()=>{t(!0);try{const e=await r(C()).unwrap();await r(I(Object.keys(e)))}catch(e){return window.notify({type:"warning",description:e.message})}finally{return t(!1)}}),[r]);return(0,a.useEffect)((()=>{s.length||i()}),[s,i]),(0,c.jsxs)(l.Row,{gutter:[24,24],children:[s.map(((e,t)=>(0,c.jsx)(l.Col,{xs:12,sm:8,lg:6,children:(0,c.jsx)(R,{symbol:e})},t))),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(d,{onMore:i,loading:e})})})})]})},B=()=>{const[e,t]=(0,a.useState)(!1),s=(0,n.useDispatch)(),r=(0,n.useSelector)((e=>e.category.hot)),i=(0,a.useCallback)((async()=>{t(!0);try{await s(M())}catch(e){return window.notify({type:"warning",description:e.message})}finally{return t(!1)}}),[s]);return(0,a.useEffect)((()=>{i()}),[i]),(0,c.jsx)(l.Spin,{spinning:e,children:(0,c.jsx)(l.Row,{gutter:[24,24],children:r.map((e=>(0,c.jsx)(l.Col,{xs:12,sm:8,lg:6,children:(0,c.jsx)(R,{symbol:e})},e)))})})};let _;const F=e=>{let{loading:t,collections:s}=e;const{to:n}=(0,r.useAppRoute)(),i=(0,a.useCallback)((e=>{if(e)return n(`/${e}`)}),[n]);return t||!s?(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:t?(0,c.jsx)(l.Spin,{style:{margin:16}}):(0,c.jsx)(l.Empty,{image:l.Empty.PRESENTED_IMAGE_SIMPLE})})}):(0,c.jsx)(l.Row,{gutter:[24,24],children:s.map((e=>(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[24,24],align:"middle",wrap:!1,style:{cursor:"pointer"},onClick:()=>i(e.symbol),children:[(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Avatar,{shape:"square",size:56,src:e.image})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Row,{gutter:[4,4],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Title,{level:5,children:e.name})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Paragraph,{style:{margin:0},type:"secondary",ellipsis:!0,children:e.description})})]})})]})},e.symbol)))})},D=()=>{const[e,t]=(0,a.useState)(!1),[s,n]=(0,a.useState)(""),[r,i]=(0,a.useState)();return(0,a.useEffect)((()=>{t(!0),_&&clearTimeout(_),_=setTimeout((async()=>{try{if(!s||s.length<=3)return i(void 0);const e=await w.searchCollections(s);return i(e)}catch(e){return i(void 0)}finally{return t(!1)}}),1e3)}),[s]),(0,c.jsx)(l.Popover,{placement:"bottom",overlayStyle:{width:300},trigger:"focus",content:(0,c.jsx)(F,{loading:e,collections:r}),children:(0,c.jsx)(l.Input,{size:"large",suffix:(0,c.jsx)(o.Z,{name:"search-outline"}),value:s,onChange:e=>n(e.target.value||""),placeholder:"Search by Symbols"})})};const z={appId:"any_arts",url:"https://descartesnetwork.github.io/anyarts.so/index.js"},O={development:{limit:12},production:{limit:12}},W={devnet:{whitelist:{}},testnet:{whitelist:{}},mainnet:{whitelist:{usdc:{address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",symbol:"USDC",decimals:6,url:"https://www.circle.com/en/usdc"},uxd:{address:"7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT",symbol:"UXD",decimals:6,url:"https://uxd.fi/"},usdt:{address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",symbol:"USDT",decimals:6,url:"https://tether.to/"},usdh:{address:"USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX",symbol:"USDH",decimals:6,url:"https://hubbleprotocol.io/"}}}},H={manifest:{development:{...z},production:{...z}}[r.env],pagination:O[r.env],payment:W[r.net]},{manifest:{appId:U}}=H,Z="viewed",q=(0,h.createAsyncThunk)("viewed/getViewedSymbols",(async e=>{let{walletAddress:t}=e;if(!r.util.isAddress(t))throw new Error("Invalid wallet address");const s=(0,r.createPDB)(t,U);return await s.getItem("history")||[]})),L=(0,h.createAsyncThunk)("viewed/addViewedSymbol",(async(e,t)=>{let{walletAddress:s,symbol:n}=e,{getState:i}=t;if(!r.util.isAddress(s))throw new Error("Invalid wallet address");if(!n)throw new Error("Invalid symbol");const{viewed:l}=i(),a=[...l],o=a.findIndex((e=>e===n));o>=0&&a.splice(o,1),a.unshift(n);const c=(0,r.createPDB)(s,U);return await c.setItem("history",a),[...a]})),Y=(0,h.createAsyncThunk)("viewed/deleteViewedSymbol",(async(e,t)=>{let{walletAddress:s,symbol:n="",all:i=!1}=e,{getState:l}=t;if(!r.util.isAddress(s))throw new Error("Invalid wallet address");const{viewed:a}=l(),o=i?[]:a.filter((e=>e!==n)),c=(0,r.createPDB)(s,U);return await c.setItem("history",o),[...o]})),G=(0,h.createSlice)({name:Z,initialState:[],reducers:{},extraReducers:e=>{e.addCase(q.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(L.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(Y.fulfilled,((e,t)=>{let{payload:s}=t;return s}))}}).reducer,{pagination:{limit:V}}=H,X=()=>{const e=(0,n.useSelector)((e=>e.viewed)),t=(0,n.useDispatch)(),[s,i]=(0,a.useState)(V),u=(0,r.useWalletAddress)(),h=(0,a.useMemo)((()=>e.slice(0,s)),[e,s]),p=(0,a.useMemo)((()=>!e||!e.length),[e]),x=(0,a.useMemo)((()=>h.length===e.length),[h,e]),g=(0,a.useCallback)((async e=>{if(r.util.isAddress(u)&&e)return t(Y({walletAddress:u,symbol:e}))}),[t,u]),m=(0,a.useCallback)((()=>{if(r.util.isAddress(u))return t(Y({walletAddress:u,all:!0}))}),[t,u]),y=(0,a.useCallback)((async()=>i(Math.min(e.length,s+V))),[e,s]);return(0,a.useEffect)((()=>{r.util.isAddress(u)&&t(q({walletAddress:u}))}),[t,u]),(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[16,16],wrap:!1,children:[(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsx)(l.Divider,{orientation:"left",style:{margin:0},children:(0,c.jsx)(l.Typography.Title,{level:4,type:"secondary",children:"\ud83d\udd0d Viewed Collections"})})}),(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Button,{onClick:m,size:"small",icon:(0,c.jsx)(o.Z,{name:"trash-outline"}),children:"Clear All"})})]})}),p?(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Empty,{description:"No history found"})})})}):h.map(((e,t)=>(0,c.jsx)(l.Col,{xs:12,sm:8,lg:6,children:(0,c.jsx)(R,{symbol:e,onClose:g,closable:!0})},t))),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(d,{onMore:y,disabled:x})})})})]})},J="mine",K=(0,h.createAsyncThunk)("mine/getMyNFTs",(async(e,t)=>{let{getState:s}=t;const{mine:n}=s(),r=await w.getMyNFTs(e),i={};for(const l of r)i[l.mintAddress]=l;return{...n||{},...i}})),Q=(0,h.createSlice)({name:J,initialState:{},reducers:{},extraReducers:e=>{e.addCase(K.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer;const ee=s.p+"static/media/sol-logo.ebe4f9050babf4d7710f96abae751657.svg",te=e=>{let{mintAddress:t,onSell:s=(()=>{}),onCancel:i=(()=>{}),loading:d=!1}=e;const[u,h]=(0,a.useState)(""),{image:p,name:x,collection:g,listStatus:m,price:y}=(0,n.useSelector)((e=>e.mine[t])),{collection:{image:j}}=S(g),{to:f}=(0,r.useAppRoute)(),w=(0,r.useInfix)(),C=(0,a.useMemo)((()=>"listed"===m),[m]);return(0,c.jsx)(l.Card,{cover:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{width:"100%",height:"100%",alt:x,src:p}),C&&(0,c.jsx)(l.Button,{shape:"circle",className:"selling-button",icon:(0,c.jsx)(o.Z,{name:"cash-outline"})})]}),bodyStyle:{padding:16},bordered:!1,hoverable:!0,children:(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{span:24,children:x?(0,c.jsxs)(l.Space,{onClick:()=>f(`/${g}`),style:{cursor:"pointer"},children:[(0,c.jsx)(l.Avatar,{src:j}),(0,c.jsx)(l.Typography.Title,{level:5,ellipsis:!0,children:x})]}):(0,c.jsx)(l.Skeleton,{paragraph:{rows:1},title:!1,avatar:!0,round:!0,active:!0,loading:!0})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[16,16],wrap:w<r.Infix.md,children:[(0,c.jsx)(l.Col,{...w<r.Infix.md?{xs:24}:{flex:"auto"},children:(0,c.jsx)(l.InputNumber,{addonAfter:(0,c.jsx)(l.Avatar,{shape:"square",src:ee,size:18,style:{padding:3}}),placeholder:"Price in SOL",value:C?String(y):u,onChange:e=>h(e),readOnly:C,controls:!1})}),(0,c.jsx)(l.Col,{...w<r.Infix.md?{xs:24}:{},children:(0,c.jsx)(l.Button,{type:C?"default":"primary",onClick:()=>C?i(t,String(y)):s(t,u),loading:d,block:!0,children:C?"Cancel":"Sell"})})]})})]})})},se=()=>{const[e,t]=(0,a.useState)(""),s=(0,n.useDispatch)(),i=(0,r.useWalletAddress)(),o=(0,n.useSelector)((e=>e.mine)),d=(0,a.useCallback)((async(e,s)=>{try{t(e);const{wallet:n}=window.sentre,l=await w.sell({sellerAddress:i,mintAddress:e,price:Number(s)}),a=await n.signTransaction(l),[o]=await w.sendAndConfirm([a]);return window.notify({type:"success",description:"Successfully list the NFT. Click to view details.",onClick:()=>window.open(r.util.explorer(o),"_blank")})}catch(a){var n,l;return window.notify({type:"error",description:(null===(n=a.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message)||a.message})}finally{return t("")}}),[i]),u=(0,a.useCallback)((async(e,s)=>{try{t(e);const{wallet:n}=window.sentre,l=await w.cancel({sellerAddress:i,mintAddress:e,price:Number(s)}),a=await n.signTransaction(l),[o]=await w.sendAndConfirm([a]);return window.notify({type:"success",description:"Successfully cancel the NFT. Click to view details.",onClick:()=>window.open(r.util.explorer(o),"_blank")})}catch(a){var n,l;return window.notify({type:"error",description:(null===(n=a.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message)||a.message})}finally{return t("")}}),[i]);return(0,a.useEffect)((()=>{r.util.isAddress(i)&&s(K(i))}),[i,s]),(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsxs)(l.Col,{span:24,children:[(0,c.jsx)(l.Row,{gutter:[24,24],children:Object.keys(o).map((t=>(0,c.jsx)(l.Col,{xs:12,sm:8,lg:6,children:(0,c.jsx)(te,{mintAddress:t,onSell:d,onCancel:u,loading:t===e})},t)))}),(0,c.jsx)(l.Col,{span:24})]}),(0,c.jsx)(l.Col,{span:24}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(X,{})})]})},ne=["recent","hot","my-nfts"],re=e=>{let{type:t="recent"}=e;return"recent"===t?(0,c.jsx)($,{}):"hot"===t?(0,c.jsx)(B,{}):"my-nfts"===t?(0,c.jsx)(se,{}):(0,c.jsx)($,{})},ie=()=>{const{to:e}=(0,r.useAppRoute)(),{search:t}=(0,i.useLocation)(),s=(0,a.useMemo)((()=>{const e=new URLSearchParams(t).get("tab");return ne.includes(e)?e:"recent"}),[t]),n=(0,a.useCallback)((t=>e(`?tab=${t}`)),[e]);return(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsx)(l.Segmented,{size:"large",options:[{label:"\ud83d\udc8e Newest",value:"recent"},{label:"\ud83d\udd25 Hot (24h)",value:"hot"},{label:"\ud83d\udc40 My NFTs",value:"my-nfts"}],value:s,onChange:e=>n(e)})}),(0,c.jsx)(l.Col,{children:(0,c.jsx)(D,{})})]})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(re,{type:s})})]})},le={moonrank:"https://moonrank.app/static/favicon.ico",howrare:"https://howrare.com/img/logo.png"},ae=e=>{let{name:t,rank:s}=e;const n=(0,r.useInfix)(),i=(0,a.useMemo)((()=>n<r.Infix.md),[n]);return(0,c.jsx)(l.Tooltip,{title:t,children:(0,c.jsx)(l.Card,{bodyStyle:{padding:i?4:8,cursor:"pointer"},style:{minWidth:60,maxWidth:96},children:(0,c.jsxs)(l.Space,{children:[(0,c.jsx)(l.Avatar,{shape:"circle",size:i?16:24,src:le[t]}),(0,c.jsx)(l.Space,{children:(0,c.jsx)(l.Typography.Text,{children:s})})]})})})};var oe=s(65447);const ce=()=>(0,c.jsxs)(l.Row,{gutter:[16,16],align:"middle",children:[(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Avatar,{src:T})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Space,{size:0,direction:"vertical",children:[(0,c.jsx)(l.Typography.Text,{children:"You are watching NFTs on"}),(0,c.jsx)(l.Typography.Text,{type:"secondary",className:"caption",children:"magiceden.io"})]})})]}),de=e=>{let{src:t=u,size:s}=e;return(0,c.jsx)(l.Avatar,{shape:"square",src:t,size:s})},ue="metadata",he=(0,h.createAsyncThunk)("metadata/getNFTMetadata",(async(e,t)=>{let{mintAddress:s,force:n=!1}=e,{getState:r}=t;const{metadata:{[s]:i}}=r();if(i&&!n)return{[s]:i};return{[s]:await w.getNFTMetadata(s)}})),pe=(0,h.createSlice)({name:ue,initialState:{},reducers:{},extraReducers:e=>{e.addCase(he.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,xe=e=>{const t=(0,n.useDispatch)(),s=(0,n.useSelector)((t=>t.metadata[e]));return(0,a.useEffect)((()=>{s||t(he({mintAddress:e}))}),[t,s,e]),s||{}},ge=e=>{let{symbol:t,mintAddress:s}=e;const{price:r,extra:{img:i}}=(0,n.useSelector)((e=>e.listing[t][s])),{loading:a,collection:{name:o}}=S(t),{name:d,image:u}=xe(s);return(0,c.jsx)(l.Spin,{spinning:a,children:(0,c.jsxs)(l.Row,{gutter:[16,16],wrap:!1,children:[(0,c.jsx)(l.Col,{children:(0,c.jsx)(de,{src:i||u,size:87})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Row,{gutter:[4,4],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[4,4],align:"middle",wrap:!1,children:[(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsx)(l.Typography.Text,{className:"caption",type:"secondary",children:o})}),(0,c.jsx)(l.Col,{children:(0,c.jsx)(k,{symbol:t})})]})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Space,{direction:"vertical",size:0,children:[(0,c.jsx)(l.Typography.Title,{level:5,children:d}),(0,c.jsxs)(l.Space,{size:4,children:[(0,c.jsx)(l.Avatar,{shape:"square",src:ee,size:24,style:{padding:3}}),(0,c.jsx)(l.Typography.Title,{level:3,children:r})]})]})})]})})]})})},{payment:{whitelist:me}}=H,ye=e=>{let{value:t="sol",onChange:s=(()=>{})}=e;return(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Typography.Text,{children:"Payment by"})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[8,8],children:["sol",...Object.keys(me)].map((e=>(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Button,{onClick:()=>s(e),className:e===t?"token-selected":void 0,children:e.toUpperCase()})},e)))})})]})};var je=s(95418);const fe=(e,t,s)=>r.util.isAddress(e)&&void 0!==t&&void 0!==s?{mintAddress:e,amount:t,decimals:s,balance:Number(je.utils.undecimalize(t,s))}:{amount:BigInt(0),decimals:0,balance:0},we=e=>{const t=(0,r.useWalletAddress)(),s=(0,r.useWalletBalance)(),n=(0,r.useAccounts)(),{amount:i,mint:l}=n[e]||{},a=(0,r.useMintDecimals)({mintAddress:l})||0;return r.util.isAddress(t)&&r.util.isAddress(e)?e===t?fe(je.DEFAULT_EMPTY_ADDRESS,s,9):fe(l,i,a):fe()},Ce=(e,t)=>{const s=(0,r.useWalletAddress)(),[n,i]=(0,a.useState)(0),[l,o]=(0,a.useState)(""),{balance:c}=we(l),d=(0,a.useMemo)((()=>!(c<n)),[c,n]),u=(0,a.useCallback)((async()=>{if("sol"===t)return o(s),i(e);const{splt:n}=window.sentre,{estimatePrice:r,tokenInfo:l}=await(async e=>{let{tokenSymbol:t,nftPrice:s}=e;const n=s,{data:r}=await(await fetch(`https://price.jup.ag/v1/price?id=SOL&vsToken=${t}`)).json();return{estimatePrice:n*r.price,solPrice:n,tokenInfo:r}})({tokenSymbol:t,nftPrice:e}),a=await n.deriveAssociatedAddress(s,null===l||void 0===l?void 0:l.vsToken);return o(a),i(r)}),[e,t,s]);return(0,a.useEffect)((()=>{u()}),[u]),{estPrice:n,validBuy:d}},be=new oe.OTC,ve=e=>{let{symbol:t,mintAddress:s}=e;const[i,d]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),[p,x]=(0,a.useState)("sol"),{seller:g,sellerReferral:m,price:y,tokenMint:j,auctionHouse:f}=(0,n.useSelector)((e=>e.listing[t][s])),C=(0,r.useWalletAddress)(),b=(0,r.useInfix)(),v=(0,a.useMemo)((()=>b<r.Infix.md),[b]),A=(0,a.useMemo)((()=>p.toUpperCase()),[p]),S=y+1e-5+.004050720000000001,{estPrice:k,validBuy:T}=Ce(S,p),R=(0,a.useCallback)((async()=>{try{d(!0);const{wallet:e}=window.sentre;let t=[];if("sol"!==p){const e=await be.exchange({walletAddress:C,tokenSymbol:p,solAmount:S});t.push(e)}const s=await w.buyNow({buyerAddress:C,sellerAddress:g,auctionHouseAddress:f,sellerReferralAddress:m,mintAddress:j,price:y});t.push(s);const n=await e.signAllTransactions(t),i=await w.sendAndConfirm(n);return h(!1),window.notify({type:"success",description:"Successfully buy the NFT. Click to view details.",onClick:()=>window.open(r.util.explorer(i[i.length-1]),"_blank")})}catch(s){var e,t;return window.notify({type:"error",description:(null===(e=s.response)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||s.message})}finally{return d(!1)}}),[S,p,C,g,m,f,j,y]);return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(l.Button,{onClick:()=>h(!0),type:"primary",icon:v?void 0:(0,c.jsx)(o.Z,{name:"card-outline"}),children:"Buy"}),(0,c.jsx)(l.Modal,{className:"modal-nft-plugin",visible:u,footer:!1,onCancel:()=>h(!1),width:368,closeIcon:(0,c.jsx)(o.Z,{name:"close-outline"}),bodyStyle:{padding:16},children:(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(ce,{})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(ge,{symbol:t,mintAddress:s})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(ye,{value:p,onChange:x})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Alert,{message:`Estimated payment is ${r.util.numeric(k).format("0,0.[0000]")} ${A}.`,type:"info",showIcon:!0})}),!T&&(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Alert,{message:`Not enough ${A} in your balance. Please add more ${A}, or select another token!`,type:"warning",showIcon:!0})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Button,{type:"primary",onClick:R,loading:i,block:!0,disabled:!T,children:"Buy Now"})})]})})]})},Ae=e=>{let{symbol:t,mintAddress:s}=e;const{price:i,rarity:a,extra:{img:o}}=(0,n.useSelector)((e=>e.listing[t][s])),{name:d,image:u}=xe(s);return(0,c.jsx)(l.Card,{cover:(0,c.jsx)("img",{alt:d,src:o||u}),bodyStyle:{padding:16},bordered:!1,hoverable:!0,children:(0,c.jsxs)(l.Row,{gutter:[16,16],children:[(0,c.jsx)(l.Col,{span:24,children:d?(0,c.jsx)(l.Typography.Title,{level:5,ellipsis:!0,children:d}):(0,c.jsx)(l.Skeleton,{paragraph:{rows:1},title:!1,round:!0,active:!0,loading:!0})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Space,{children:[(null===a||void 0===a?void 0:a.moonrank)&&(0,c.jsx)(ae,{name:"moonrank",rank:null===a||void 0===a?void 0:a.moonrank.rank}),(null===a||void 0===a?void 0:a.howrare)&&(0,c.jsx)(ae,{name:"howrare",rank:null===a||void 0===a?void 0:a.howrare.rank})]})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[8,8],align:"middle",wrap:!1,children:[(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Space,{size:4,children:[(0,c.jsx)(l.Avatar,{shape:"square",src:ee,size:24,style:{padding:3}}),(0,c.jsx)(l.Typography.Title,{level:5,children:r.util.numeric(i).format("0,0.[0000]")})]})}),(0,c.jsx)(l.Col,{children:(0,c.jsx)(ve,{symbol:t,mintAddress:s})})]})})]})})},Se="listing",ke=(0,h.createAsyncThunk)("listing/nextListingNFTs",(async(e,t)=>{let{symbol:s,limit:n=12}=e,{getState:r}=t;const{listing:{[s]:i}}=r(),l=await w.nextListingNFTs(s,n),a={};for(const o of l)a[o.tokenMint]=o;return{[s]:{...i||{},...a}}})),Te=(0,h.createSlice)({name:Se,initialState:{},reducers:{},extraReducers:e=>{e.addCase(ke.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,Re=()=>{const[e,t]=(0,a.useState)(!1),s=(0,n.useDispatch)(),{symbol:u}=(0,i.useParams)(),h=(0,n.useSelector)((e=>e.listing[u])),p=(0,r.useWalletAddress)(),{back:x}=(0,r.useAppRoute)(),g=(0,a.useMemo)((()=>!h||!Object.keys(h).length),[h]),m=(0,a.useCallback)((async()=>{try{t(!0),await s(ke({symbol:u}))}catch(e){return window.notify({type:"warning",description:e.message})}finally{return t(!1)}}),[s,u]);return(0,a.useEffect)((()=>{(async()=>{r.util.isAddress(p)&&u&&await s(L({symbol:u,walletAddress:p}))})()}),[s,u,p]),(0,a.useEffect)((()=>{h||m()}),[m,h]),(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Button,{size:"large",icon:(0,c.jsx)(o.Z,{name:"arrow-back-outline"}),onClick:()=>x("/"),children:"Back"})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],children:g?(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Empty,{description:"No listing NFT"})})})}):Object.values(h||{}).map(((e,t)=>{let{tokenMint:s}=e;return(0,c.jsx)(l.Col,{xs:12,sm:8,lg:6,children:(0,c.jsx)(Ae,{symbol:u,mintAddress:s})},t)}))})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(d,{onMore:m,loading:e})})})})]})},Ee=()=>(0,c.jsx)(l.Row,{gutter:[24,24],children:(0,c.jsx)(l.Col,{span:24,style:{textAlign:"center"},children:(0,c.jsxs)(l.Space,{direction:"vertical",children:[(0,c.jsx)(l.Typography.Title,{level:2,children:"\u26a0\ufe0f Only supported on Solana mainnet."}),(0,c.jsx)(l.Typography.Text,{children:"You can open the Control Center, switch to mainnet, and experience the application."})]})})});var Ie=s(9122);const{payment:{whitelist:Pe}}=H,Me=()=>(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsxs)(l.Typography.Text,{style:{fontSize:64,fontWeight:900},children:["Buy NFTs by"," ",(0,c.jsx)(Ie.Z,{children:Object.values(Pe).map((e=>{let{address:t,url:s,symbol:n}=e;return(0,c.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"gradient-text",children:n},t)}))}),"."]})})}),Ne=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return 1===e?"#FEE101":2===e?"#D7D7D7":3===e?"#A77044":"#0074FD"},$e=e=>{let{symbol:t}=e;const{image:s,name:i,rank:d,totalVol:u}=(0,n.useSelector)((e=>e.popularCollections[t]))||{},{to:h}=(0,r.useAppRoute)(),p=(0,a.useCallback)((()=>h(`/${t}`)),[h,t]);return(0,c.jsx)(l.Card,{bodyStyle:{padding:16},onClick:p,hoverable:!0,children:(0,c.jsxs)(l.Row,{gutter:[16,16],wrap:!1,align:"middle",children:[(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Avatar,{src:s,size:64,shape:"square"})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsxs)(l.Row,{gutter:[8,8],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Row,{gutter:[8,8],wrap:!1,align:"middle",children:[(0,c.jsx)(l.Col,{children:(0,c.jsxs)(l.Space,{children:[(0,c.jsxs)(l.Typography.Title,{level:4,children:["#",d]}),(0,c.jsx)(o.Z,{name:"ribbon",style:{fontSize:18,color:Ne(d)}})]})}),(0,c.jsx)(l.Col,{flex:"auto",children:(0,c.jsx)(l.Typography.Title,{level:5,ellipsis:!0,children:i})})]})}),(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(l.Space,{children:[(0,c.jsx)(l.Typography.Text,{type:"secondary",children:"Volume:"}),(0,c.jsx)(l.Typography.Text,{children:r.util.numeric(u).format("0,0.[00]")}),(0,c.jsx)(l.Avatar,{shape:"square",src:ee,size:18,style:{padding:3}})]})})]})})]})})},Be="popularCollection",_e={window:"30d",limit:6},Fe=(0,h.createAsyncThunk)("popularCollection/getPopularCollections",(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;const{window:t,limit:s}={..._e,...e},n=await w.getPopularCollections(t,s),r={};for(const i of n)r[i.collectionSymbol]=i;return r})),De=(0,h.createSlice)({name:Be,initialState:{},reducers:{},extraReducers:e=>{e.addCase(Fe.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,ze=()=>{const e=(0,n.useSelector)((e=>e.popularCollections)),t=(0,n.useDispatch)(),s=(0,r.useInfix)(),i=(0,a.useMemo)((()=>s<r.Infix.sm?3:6),[s]);return(0,a.useEffect)((()=>{t(Fe())}),[t]),(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(l.Row,{gutter:[24,24],justify:"center",children:(0,c.jsx)(l.Col,{children:(0,c.jsx)(l.Typography.Title,{level:3,children:"\ud83d\udc51 Collections of the Month"})})})}),Object.keys(e).slice(0,i).map((e=>(0,c.jsx)(l.Col,{xs:24,sm:12,lg:8,children:(0,c.jsx)($e,{symbol:e})},e)))]})},Oe=()=>{const{extend:e}=(0,r.useAppRoute)();return(0,c.jsxs)(l.Row,{gutter:[24,24],justify:"center",children:[(0,c.jsx)(l.Col,{span:24,style:{maxWidth:1200},children:(0,c.jsxs)(l.Row,{gutter:[24,24],children:[(0,c.jsx)(l.Col,{span:24,style:{marginTop:64,marginBottom:64},children:(0,c.jsx)(Me,{})}),(0,c.jsx)(l.Col,{span:24,style:{marginBottom:32},children:(0,c.jsx)(ze,{})}),"mainnet"===r.net?(0,c.jsx)(l.Col,{span:24,children:(0,c.jsxs)(i.Switch,{children:[(0,c.jsx)(i.Route,{exact:!0,path:e("/"),component:ie}),(0,c.jsx)(i.Route,{exact:!0,path:e("/:symbol"),component:Re})]})}):(0,c.jsx)(l.Col,{span:24,children:(0,c.jsx)(Ee,{})})]})}),(0,c.jsx)(l.Col,{span:24})]})};var We=s(48744),He=s.n(We),Ue=s(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const Ze={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof p.PublicKey||e instanceof He()||Ue.isBuffer(e)}},qe=(0,h.configureStore)({middleware:e=>e(Ze),devTools:!1,reducer:{collections:v,popularCollections:De,category:N,mine:Q,viewed:G,listing:Te,metadata:pe}});var Le=s(45597);const{manifest:{appId:Ye}}=H,Ge=()=>(0,c.jsx)(r.AntdProvider,{appId:Ye,prefixCls:Ye,children:(0,c.jsx)(n.Provider,{store:qe,children:(0,c.jsx)(Oe,{})})})},83272:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/README.cd6958385873fd0100cf.md"},69363:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/logo.a4611ad00bff275b0581.png"},27803:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel1.aad2abab184f5971a1c7.png"},85468:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel2.e8f24e9a0428ae1a5ebc.png"},83943:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel3.84826e08746e9aa74c82.png"},46601:()=>{},89214:()=>{},85568:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx-src_static_images_magic-eden-logo_jpeg.9cbf31a8.chunk.js.map