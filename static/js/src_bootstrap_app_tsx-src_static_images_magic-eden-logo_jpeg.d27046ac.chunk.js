(globalThis.webpackChunkany_arts=globalThis.webpackChunkany_arts||[]).push([["src_bootstrap_app_tsx-src_static_images_magic-eden-logo_jpeg"],{45597:(e,t,s)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return a.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return o.default}});var n=l(s(27803)),i=l(s(85468)),r=l(s(83943)),a=l(s(69363)),o=l(s(83272));function l(e){return e&&e.__esModule?e:{default:e}}const c=[n.default,i.default,r.default];t.h0=c},19784:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Page:()=>Ue,__esModule:()=>Fe.X$,logo:()=>Fe.jY,panels:()=>Fe.h0,readme:()=>Fe.ng});var n=s(55754),i=s(6302),r=s(45055),a=s(94751),o=s(9122),l=s(92950),c=s(69716),d=s(45263);const u=e=>{let{onMore:t=(()=>{}),loading:s=!1,disabled:n=!1}=e;return(0,d.jsx)(a.Button,{type:"text",size:"large",onClick:t,loading:s,disabled:n,icon:(0,d.jsx)(c.Z,{name:"caret-down-outline"}),children:"More"})};const h=s.p+"static/media/nft-default.e7d7d405622ec80c0c232699de2b2c8e.svg";var p=s(19289),g=s(97042),m=s(33804),y=s(95418),x=s(21995),j=s.n(x);const f=class{constructor(){this._offset=void 0,this.key=e=>{if(!e)throw new Error("The key cannot be empty.");return e+"-offset"},this.set=(e,t)=>{const s=this.key(e);this._offset[s]=t},this.get=e=>{const t=this.key(e);return this._offset[t]||0},this._offset={}}};var w=s(97429).Buffer;class b extends f{constructor(e){var t;let{network:s,rpc:n,service:i="https://cors.sentre.io/magic-eden"}=e;super(),t=this,this.network=void 0,this.endpoint=void 0,this.connection=void 0,this.service=void 0,this.getURL=e=>{let{path:t,params:s,auth:n=!1}=e;if(s)for(const o in s)s[o]=s[o].toString();const i=this.endpoint+t,r=s?new URLSearchParams(s).toString():"",a=encodeURIComponent(`${i}?${r}`);return`${this.service}/${a}?auth=${n}`},this.getCollection=async e=>{if(!e)throw new Error("Invalid symbol");const t=this.getURL({path:`/collections/${e}`}),{data:s}=await j().get(t);if(!s)throw new Error("Invalid symbol");return s},this.getCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;const n={offset:e,limit:s},i=t.getURL({path:"/collections",params:n}),{data:r}=await j().get(i);return r||[]},this.nextCollections=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;const s=t.get("collections"),n=await t.getCollections(s,e);return t.set("collections",s+n.length),n},this.getListingNFTs=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;const i={offset:s,limit:n},r=t.getURL({path:`/collections/${e}/listings`,params:i}),{data:a}=await j().get(r);return a||[]},this.nextListingNFTs=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const n=t.get(e),i=await t.getListingNFTs(e,n,s);return t.set(e,n+i.length),i},this.getNFTMetadata=async e=>{if(!y.account.isAddress(e))throw new Error("Invalid mint address");const t=this.getURL({path:`/tokens/${e}`}),{data:s}=await j().get(t);if(!s)throw new Error("Invalid mint address");return s},this.buyNow=async e=>{let{buyerAddress:t,sellerAddress:s,auctionHouseAddress:n="",mintAddress:i,price:r,buyerReferralAddress:a=b.DEFAULT_REFERRAL,sellerReferralAddress:o=b.DEFAULT_REFERRAL,buyerExpiry:l=0,sellerExpiry:c=-1}=e;if(!y.account.isAddress(t))throw new Error("Invalid buyer address");if(!y.account.isAddress(s))throw new Error("Invalid seller address");if(!y.account.isAddress(i))throw new Error("Invalid mint address");const d={buyer:t,seller:s,auctionHouseAddress:n,tokenMint:i,tokenATA:(await m.P6.token.associatedAddress({mint:new g.PublicKey(i),owner:new g.PublicKey(s)})).toBase58(),price:r,buyerReferral:a,sellerReferral:o,buyerExpiry:l,sellerExpiry:c},u=this.getURL({path:"/instructions/buy_now",params:d,auth:!0}),{data:h}=await j().get(u);return g.Transaction.from(w.from(h.txSigned))},this.sendAndConfirm=async e=>{let t=[];for(const s of e){const e=await this.connection.sendRawTransaction(s.serialize(),{skipPreflight:!0,preflightCommitment:"confirmed"});await this.connection.confirmTransaction(e),t.push(e)}return t},this.network=s,this.service=i,this.endpoint=b.ENDPOINTS[this.network],this.connection=new g.Connection(n)}}b.ENDPOINTS={devnet:"https://api-devnet.magiceden.dev/v2",testnet:"https://api-testnet.magiceden.dev/v2",mainnet:"https://api-mainnet.magiceden.dev/v2"},b.DEFAULT_REFERRAL="autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2";const C="collections",v=new b({network:i.net,rpc:i.rpc}),k=(0,p.createAsyncThunk)(`${C}/nextCollections`,(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t=await v.nextCollections(e),s={};for(const n of t)s[n.symbol]=n;return s})),S=(0,p.createAsyncThunk)(`${C}/getCollection`,(async e=>({[e]:await v.getCollection(e)}))),A=(0,p.createSlice)({name:C,initialState:{},reducers:{},extraReducers:e=>{e.addCase(k.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(S.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,T={categories:[],description:"",discord:"",image:h,name:"",symbol:"",twitter:"",website:""},R=e=>{let{symbol:t,force:s=!1}=e;const i=(0,n.useDispatch)(),r=(0,n.useSelector)((e=>e.collections)),{[t]:a}=r;return(0,l.useEffect)((()=>{!a&&t&&s&&i(S(t))}),[i,a,t,s]),a?{loading:!1,collection:a}:{loading:!0,collection:T}},E=e=>{let{symbol:t}=e;const{collection:{website:s,twitter:n,discord:i}}=R({symbol:t}),r=(e,t)=>(e.stopPropagation(),window.open(t,"_blank"));return(0,d.jsxs)(a.Space,{size:0,children:[(0,d.jsx)(a.Button,{type:"text",icon:(0,d.jsx)(c.Z,{name:"earth-outline"}),onClick:e=>r(e,s),disabled:!s}),(0,d.jsx)(a.Button,{type:"text",icon:(0,d.jsx)(c.Z,{name:"logo-twitter"}),onClick:e=>r(e,n),disabled:!n}),(0,d.jsx)(a.Button,{type:"text",icon:(0,d.jsx)(c.Z,{name:"logo-discord"}),onClick:e=>r(e,i),disabled:!i})]})};const M={appId:"any_arts",url:"https://descartesnetwork.github.io/anyarts.so/index.js"},_=["degods","okay_bears","degentown","primates","shadowy_super_coder_dao","trippin_ape_tribe","justape","yeah_tigers","solana_monkey_business","blocksmith_labs","bubblegoose_ballers","aurory","degenerate_ape_academy","communi3","solpunks","stepn"],P={development:{limit:12,hotList:_},production:{limit:12,hotList:_}},I={devnet:{whitelist:{}},testnet:{whitelist:{}},mainnet:{whitelist:{usdc:{address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",symbol:"USDC",decimals:6,url:"https://www.circle.com/en/usdc"},uxd:{address:"7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT",symbol:"UXD",decimals:6,url:"https://uxd.fi/"},usdt:{address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",symbol:"USDT",decimals:6,url:"https://tether.to/"},usdh:{address:"USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX",symbol:"USDH",decimals:6,url:"https://hubbleprotocol.io/"}}}},N={manifest:{development:{...M},production:{...M}}[i.env],pagination:P[i.env],payment:I[i.net]},B=s.p+"static/media/magic-eden-logo.dc84d1f6359782b8773e.jpeg",{manifest:{appId:D}}=N,F=e=>{let{symbol:t,closable:s=!1,onClose:n=(()=>{})}=e;const{loading:r,collection:{name:o,description:u,image:h}}=R({symbol:t,force:!0}),{to:p}=(0,i.useAppRoute)(D),g=(0,l.useCallback)((()=>p(`/${t}`)),[p,t]),m=(0,l.useCallback)((e=>(e.stopPropagation(),window.open(`https://magiceden.io/marketplace/${t}`,"_blank"))),[t]),y=(0,l.useCallback)((e=>(e.stopPropagation(),n(t))),[t,n]);return(0,d.jsx)(a.Card,{cover:(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:"100%",height:"100%",alt:t,src:h}),s&&(0,d.jsx)(a.Button,{shape:"circle",className:"close-button",icon:(0,d.jsx)(c.Z,{name:"close"}),onClick:y})]}),bodyStyle:{padding:16},bordered:!1,onClick:g,loading:r,hoverable:!0,children:(0,d.jsxs)(a.Row,{gutter:[16,16],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Typography.Title,{level:5,ellipsis:!0,children:o})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Typography.Paragraph,{ellipsis:{rows:2},children:u})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Row,{gutter:[8,8],align:"middle",wrap:!1,children:[(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsx)("span",{onClick:m,children:(0,d.jsx)(a.Avatar,{src:B,size:24})})}),(0,d.jsx)(a.Col,{children:(0,d.jsx)(E,{symbol:t})})]})})]})})},L="category",U=(0,p.createAsyncThunk)("category/pushRecent",(async(e,t)=>{let{getState:s}=t;const{category:{recent:n}}=s(),i=[...n];for(const r of e)i.includes(r)||i.push(r);return{recent:i}})),O=(0,p.createAsyncThunk)("category/pushHot",(async(e,t)=>{let{getState:s}=t;const{category:{hot:n}}=s(),i=[...n];for(const r of e)i.includes(r)||i.push(r);return{hot:i}})),z=(0,p.createAsyncThunk)("category/setViewed",(async e=>({viewed:e}))),$=(0,p.createSlice)({name:L,initialState:{recent:[],hot:[],viewed:[]},reducers:{},extraReducers:e=>{e.addCase(U.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(O.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(z.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,W=()=>{const[e,t]=(0,l.useState)(!1),s=(0,n.useSelector)((e=>e.category.recent)),i=(0,n.useDispatch)(),r=(0,l.useCallback)((async()=>{t(!0);try{const e=await i(k()).unwrap();await i(U(Object.keys(e)))}catch(e){return window.notify({type:"warning",description:e.message})}finally{return t(!1)}}),[i]);return(0,l.useEffect)((()=>{r()}),[r]),(0,d.jsxs)(a.Row,{gutter:[24,24],children:[s.map(((e,t)=>(0,d.jsx)(a.Col,{xs:12,sm:8,lg:6,children:(0,d.jsx)(F,{symbol:e})},t))),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(u,{onMore:r,loading:e})})})})]})},{pagination:{limit:Z,hotList:q}}=N,H=()=>{const[e,t]=(0,l.useState)(Z),s=(0,n.useDispatch)(),i=(0,n.useSelector)((e=>e.category.hot)),r=(0,l.useMemo)((()=>i.length===q.length),[i]),o=(0,l.useCallback)((async()=>t(Math.min(q.length,e+Z))),[e]);return(0,l.useEffect)((()=>{s(O(q.slice(0,e)))}),[s,e]),(0,d.jsxs)(a.Row,{gutter:[24,24],children:[i.map(((e,t)=>(0,d.jsx)(a.Col,{xs:12,sm:8,lg:6,children:(0,d.jsx)(F,{symbol:e})},t))),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(u,{onMore:o,disabled:r})})})})]})},{manifest:{appId:Y},pagination:{limit:G}}=N,J=()=>{const e=(0,n.useSelector)((e=>e.category.viewed)),t=(0,n.useDispatch)(),[s,r]=(0,l.useState)(G),o=(0,i.useWalletAddress)(),c=(0,l.useMemo)((()=>(0,i.createPDB)(o,Y)),[o]),h=(0,l.useMemo)((()=>e.slice(0,s)),[e,s]),p=(0,l.useMemo)((()=>!e||!e.length),[e]),g=(0,l.useMemo)((()=>h.length===e.length),[h,e]),m=(0,l.useCallback)((async e=>{const s=(await c.getItem("history")).filter((t=>t!==e));return await c.setItem("history",s),t(z(s))}),[t,c]),y=(0,l.useCallback)((async()=>r(Math.min(e.length,s+G))),[e,s]);return(0,l.useEffect)((()=>{(async()=>{const e=await c.getItem("history")||[];t(z(e))})()}),[t,c]),(0,d.jsxs)(a.Row,{gutter:[24,24],children:[p?(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(a.Empty,{description:"No history found"})})})}):h.map(((e,t)=>(0,d.jsx)(a.Col,{xs:12,sm:8,lg:6,children:(0,d.jsx)(F,{symbol:e,onClose:m,closable:!0})},t))),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(u,{onMore:y,disabled:g})})})})]})},{manifest:{appId:K}}=N;let V;const X=e=>{let{loading:t,data:s}=e;const{to:n}=(0,i.useAppRoute)(K),r=(0,l.useCallback)((()=>{if(null!==s&&void 0!==s&&s.symbol)return n(`/${s.symbol}`)}),[n,s]);return t||!s?(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:t?(0,d.jsx)(a.Spin,{style:{margin:16}}):(0,d.jsx)(a.Empty,{image:a.Empty.PRESENTED_IMAGE_SIMPLE})})}):(0,d.jsxs)(a.Row,{gutter:[24,24],align:"middle",wrap:!1,style:{cursor:"pointer"},onClick:r,children:[(0,d.jsx)(a.Col,{children:(0,d.jsx)(a.Avatar,{shape:"square",size:56,src:s.image})}),(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsxs)(a.Row,{gutter:[4,4],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Typography.Title,{level:5,children:s.name})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Typography.Paragraph,{style:{margin:0},type:"secondary",ellipsis:!0,children:s.description})})]})})]})},Q=()=>{const[e,t]=(0,l.useState)(!1),[s,n]=(0,l.useState)(""),[i,r]=(0,l.useState)();return(0,l.useEffect)((()=>{t(!0),V&&clearTimeout(V),V=setTimeout((async()=>{try{if(!s||s.length<=3)return r(void 0);const e=await v.getCollection(s.toLowerCase());return r(e)}catch(e){return r(void 0)}finally{return t(!1)}}),1e3)}),[s]),(0,d.jsx)(a.Popover,{placement:"bottom",overlayStyle:{width:300},trigger:"focus",content:(0,d.jsx)(X,{loading:e,data:i}),children:(0,d.jsx)(a.Input,{size:"large",suffix:(0,d.jsx)(c.Z,{name:"search-outline"}),value:s,onChange:e=>n(e.target.value||""),placeholder:"Search by Symbols"})})},{manifest:{appId:ee}}=N,te=["recent","hot","viewed"],se=e=>{let{type:t="recent"}=e;return"recent"===t?(0,d.jsx)(W,{}):"hot"===t?(0,d.jsx)(H,{}):"viewed"===t?(0,d.jsx)(J,{}):(0,d.jsx)(W,{})},ne=()=>{const{to:e}=(0,i.useAppRoute)(ee),{search:t}=(0,r.useLocation)(),s=(0,l.useMemo)((()=>{const e=new URLSearchParams(t).get("tab");return te.includes(e)?e:"recent"}),[t]),n=(0,l.useCallback)((t=>e(`?tab=${t}`)),[e]);return(0,d.jsxs)(a.Row,{gutter:[24,24],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Row,{gutter:[16,16],children:[(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsx)(a.Segmented,{size:"large",options:[{label:"\ud83d\udc8e Recent",value:"recent"},{label:"\ud83d\udd25 Hot",value:"hot"},{label:"\ud83d\udc40 Viewed",value:"viewed"}],value:s,onChange:e=>n(e)})}),(0,d.jsx)(a.Col,{children:(0,d.jsx)(Q,{})})]})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(se,{type:s})})]})},ie={moonrank:"https://moonrank.app/static/favicon.ico",howrare:"https://howrare.com/img/logo.png"},re=e=>{let{name:t,rank:s}=e;const{ui:{width:n}}=(0,i.useUI)(),r=(0,l.useMemo)((()=>n<768),[n]);return(0,d.jsx)(a.Tooltip,{title:t,children:(0,d.jsx)(a.Card,{bodyStyle:{padding:r?4:8,cursor:"pointer"},style:{minWidth:60,maxWidth:96},children:(0,d.jsxs)(a.Space,{children:[(0,d.jsx)(a.Avatar,{shape:"circle",size:r?16:24,src:ie[t]}),(0,d.jsx)(a.Space,{children:(0,d.jsx)(a.Typography.Text,{children:s})})]})})})};var ae=s(65447);const oe=()=>(0,d.jsxs)(a.Row,{gutter:[16,16],align:"middle",children:[(0,d.jsx)(a.Col,{children:(0,d.jsx)(a.Avatar,{src:B})}),(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsxs)(a.Space,{size:0,direction:"vertical",children:[(0,d.jsx)(a.Typography.Text,{children:"You are watching NFT on"}),(0,d.jsx)(a.Typography.Text,{type:"secondary",className:"caption",children:"magiceden.io"})]})})]}),le=e=>{let{src:t=h,size:s}=e;return(0,d.jsx)(a.Avatar,{shape:"square",src:t,size:s})},ce="metadata",de=(0,p.createAsyncThunk)("metadata/getNFTMetadata",(async(e,t)=>{let{mintAddress:s,force:n=!1}=e,{getState:i}=t;const{metadata:{[s]:r}}=i();if(r&&!n)return{[s]:r};return{[s]:await v.getNFTMetadata(s)}})),ue=(0,p.createSlice)({name:ce,initialState:{},reducers:{},extraReducers:e=>{e.addCase(de.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,he=e=>{let{mintAddress:t,force:s=!1}=e;const i=(0,n.useDispatch)(),{metadata:{[t]:r}}=(0,n.useSelector)((e=>e));return(0,l.useEffect)((()=>{!r&&s&&y.account.isAddress(t)&&i(de({mintAddress:t}))}),[i,s,r,t]),r||{}};const pe=s.p+"static/media/sol-logo.ebe4f9050babf4d7710f96abae751657.svg",ge=e=>{let{symbol:t,mintAddress:s}=e;const{listing:{[t]:{[s]:{price:i,extra:{img:r}}}}}=(0,n.useSelector)((e=>e)),{loading:o,collection:{name:l}}=R({symbol:t,force:!0}),{name:c,image:u}=he({mintAddress:s});return(0,d.jsx)(a.Spin,{spinning:o,children:(0,d.jsxs)(a.Row,{gutter:[16,16],wrap:!1,children:[(0,d.jsx)(a.Col,{children:(0,d.jsx)(le,{src:r||u,size:87})}),(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsxs)(a.Row,{gutter:[4,4],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Row,{gutter:[4,4],align:"middle",wrap:!1,children:[(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsx)(a.Typography.Text,{className:"caption",type:"secondary",children:l})}),(0,d.jsx)(a.Col,{children:(0,d.jsx)(E,{symbol:t})})]})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Space,{direction:"vertical",size:0,children:[(0,d.jsx)(a.Typography.Title,{level:5,children:c}),(0,d.jsxs)(a.Space,{size:4,children:[(0,d.jsx)(a.Avatar,{shape:"square",src:pe,size:24,style:{padding:3}}),(0,d.jsx)(a.Typography.Title,{level:3,children:i})]})]})})]})})]})})},{payment:{whitelist:me}}=N,ye=e=>{let{value:t="sol",onChange:s=(()=>{})}=e;return(0,d.jsxs)(a.Row,{gutter:[16,16],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Typography.Text,{children:"Payment by"})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[8,8],children:["sol",...Object.keys(me)].map((e=>(0,d.jsx)(a.Col,{children:(0,d.jsx)(a.Button,{onClick:()=>s(e),className:e===t?"token-selected":void 0,children:e.toUpperCase()})},e)))})})]})},xe=(e,t,s)=>y.account.isAddress(e)&&void 0!==t&&void 0!==s?{mintAddress:e,amount:t,decimals:s,balance:Number(y.utils.undecimalize(t,s))}:{amount:BigInt(0),decimals:0,balance:0},je=e=>{const t=(0,i.useWalletAddress)(),s=(0,i.useWalletBalance)(),n=(0,i.useAccounts)(),{amount:r,mint:a}=n[e]||{},o=(0,i.useMintDecimals)({mintAddress:a})||0;return y.account.isAddress(t)&&y.account.isAddress(e)?e===t?xe(y.DEFAULT_EMPTY_ADDRESS,s,9):xe(a,r,o):xe()},fe=je,we=(e,t)=>{const s=(0,i.useWalletAddress)(),[n,r]=(0,l.useState)(0),[a,o]=(0,l.useState)(""),{balance:c}=fe(a),d=(0,l.useMemo)((()=>!(c<n)),[c,n]),u=(0,l.useCallback)((async()=>{if("sol"===t)return o(s),r(e);const{splt:n}=window.sentre,{estimatePrice:i,tokenInfo:a}=await(async e=>{let{tokenSymbol:t,nftPrice:s}=e;const n=s,{data:i}=await(await fetch(`https://price.jup.ag/v1/price?id=SOL&vsToken=${t}`)).json();return{estimatePrice:n*i.price,solPrice:n,tokenInfo:i}})({tokenSymbol:t,nftPrice:e}),l=await n.deriveAssociatedAddress(s,null===a||void 0===a?void 0:a.vsToken);return o(l),r(i)}),[e,t,s]);return(0,l.useEffect)((()=>{u()}),[u]),{estPrice:n,validBuy:d}},be=new ae.OTC,Ce=e=>{let{symbol:t,mintAddress:s}=e;const[r,o]=(0,l.useState)(!1),[u,h]=(0,l.useState)(!1),[p,g]=(0,l.useState)("sol"),{listing:{[t]:{[s]:{seller:m,price:y,tokenMint:x,auctionHouse:j}}}}=(0,n.useSelector)((e=>e)),f=(0,i.useWalletAddress)(),{ui:{width:w}}=(0,i.useUI)(),b=(0,l.useMemo)((()=>w<768),[w]),C=(0,l.useMemo)((()=>p.toUpperCase()),[p]),k=y+1e-5+.004050720000000001,{estPrice:S,validBuy:A}=we(k,p),T=(0,l.useCallback)((async()=>{try{o(!0);const{wallet:e}=window.sentre;let t=[];if("sol"!==p){const e=await be.exchange({walletAddress:f,tokenSymbol:p,solAmount:k});t.push(e)}const s=await v.buyNow({buyerAddress:f,sellerAddress:m,auctionHouseAddress:j,mintAddress:x,price:y});t.push(s);const n=await e.signAllTransactions(t),r=await v.sendAndConfirm(n);return h(!1),window.notify({type:"success",description:"Successfully buy the NFT. Click to view details.",onClick:()=>window.open(i.util.explorer(r[1]),"_blank")})}catch(t){var e;return window.notify({type:"error",description:(null===(e=t.response)||void 0===e?void 0:e.data)||t.message})}finally{return o(!1)}}),[k,p,f,m,j,x,y]);return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(a.Button,{onClick:()=>h(!0),type:"primary",icon:b?void 0:(0,d.jsx)(c.Z,{name:"card-outline"}),children:"Buy"}),(0,d.jsx)(a.Modal,{className:"modal-nft-plugin",visible:u,footer:!1,onCancel:()=>h(!1),width:368,closeIcon:(0,d.jsx)(c.Z,{name:"close-outline"}),bodyStyle:{padding:16},children:(0,d.jsxs)(a.Row,{gutter:[16,16],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(oe,{})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(ge,{symbol:t,mintAddress:s})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(ye,{value:p,onChange:g})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Alert,{message:`Estimated payment is ${i.util.numeric(S).format("0,0.[0000]")} ${C}.`,type:"info",showIcon:!0})}),!A&&(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Alert,{message:`Not enough ${C} in your balance. Please add more ${C}, or select another token!`,type:"warning",showIcon:!0})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Button,{type:"primary",onClick:T,loading:r,block:!0,disabled:!A,children:"Buy Now"})})]})})]})},ve=e=>{let{symbol:t,mintAddress:s}=e;const{listing:{[t]:{[s]:{price:i,rarity:r,extra:{img:o}}}}}=(0,n.useSelector)((e=>e)),{name:l,image:c}=he({mintAddress:s,force:!0});return(0,d.jsx)(a.Card,{cover:(0,d.jsx)("img",{alt:l,src:o||c}),bodyStyle:{padding:16},bordered:!1,hoverable:!0,children:(0,d.jsxs)(a.Row,{gutter:[16,16],children:[(0,d.jsx)(a.Col,{span:24,children:l?(0,d.jsx)(a.Typography.Title,{level:5,ellipsis:!0,children:l}):(0,d.jsx)(a.Skeleton,{paragraph:{rows:1},title:!1,round:!0,active:!0,loading:!0})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Space,{children:[(null===r||void 0===r?void 0:r.moonrank)&&(0,d.jsx)(re,{name:"moonrank",rank:null===r||void 0===r?void 0:r.moonrank.rank}),(null===r||void 0===r?void 0:r.howrare)&&(0,d.jsx)(re,{name:"howrare",rank:null===r||void 0===r?void 0:r.howrare.rank})]})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(a.Row,{gutter:[8,8],align:"middle",wrap:!1,children:[(0,d.jsx)(a.Col,{flex:"auto",children:(0,d.jsxs)(a.Space,{size:4,children:[(0,d.jsx)(a.Avatar,{shape:"square",src:pe,size:24,style:{padding:3}}),(0,d.jsx)(a.Typography.Title,{level:5,children:i})]})}),(0,d.jsx)(a.Col,{children:(0,d.jsx)(Ce,{symbol:t,mintAddress:s})})]})})]})})},ke="listing",Se=(0,p.createAsyncThunk)("listing/nextListingNFTs",(async(e,t)=>{let{symbol:s,limit:n=12}=e,{getState:i}=t;const{listing:{[s]:r}}=i(),a=await v.nextListingNFTs(s,n),o={};for(const l of a)o[l.tokenMint]=l;return{[s]:{...r||{},...o}}})),Ae=(0,p.createSlice)({name:ke,initialState:{},reducers:{},extraReducers:e=>{e.addCase(Se.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer,{manifest:{appId:Te}}=N,Re=()=>{const[e,t]=(0,l.useState)(!1),s=(0,n.useDispatch)(),{symbol:o}=(0,r.useParams)(),{[o]:h}=(0,n.useSelector)((e=>e.listing)),{back:p}=(0,i.useAppRoute)(Te),g=(0,i.useWalletAddress)(),m=(0,l.useMemo)((()=>(0,i.createPDB)(g,Te)),[g]),y=(0,l.useMemo)((()=>!h||!Object.keys(h).length),[h]),x=(0,l.useCallback)((async()=>{try{t(!0),await s(Se({symbol:o}))}catch(e){return window.notify({type:"warning",description:e.message})}finally{return t(!1)}}),[s,o]);return(0,l.useEffect)((()=>{(async()=>{if(!o)return;const e=await m.getItem("history")||[],t=e.findIndex((e=>e===o));t>=0&&e.splice(t,1),e.unshift(o),await m.setItem("history",e),await s(z(e))})()}),[s,o,m]),(0,l.useEffect)((()=>{h||x()}),[x,h]),(0,d.jsxs)(a.Row,{gutter:[24,24],children:[(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Button,{size:"large",icon:(0,d.jsx)(c.Z,{name:"arrow-back-outline"}),onClick:()=>p("/"),children:"Back"})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],children:y?(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(a.Empty,{description:"No listing NFT"})})})}):Object.values(h||{}).map(((e,t)=>{let{tokenMint:s}=e;return(0,d.jsx)(a.Col,{xs:12,sm:8,lg:6,children:(0,d.jsx)(ve,{symbol:o,mintAddress:s})},t)}))})}),(0,d.jsx)(a.Col,{span:24,children:(0,d.jsx)(a.Row,{gutter:[24,24],justify:"center",children:(0,d.jsx)(a.Col,{children:(0,d.jsx)(u,{onMore:x,loading:e})})})})]})},{payment:{whitelist:Ee},manifest:{appId:Me}}=N,_e=()=>{const{extend:e}=(0,i.useAppRoute)(Me);return(0,d.jsxs)(a.Row,{gutter:[24,24],justify:"center",children:[(0,d.jsx)(a.Col,{span:24,style:{maxWidth:1200},children:(0,d.jsxs)(a.Row,{gutter:[24,24],justify:"center",children:[(0,d.jsx)(a.Col,{style:{marginTop:64,marginBottom:64},children:(0,d.jsxs)(a.Typography.Text,{style:{fontSize:64,fontWeight:900},children:["Buy NFTs by"," ",(0,d.jsx)(o.Z,{children:Object.values(Ee).map((e=>{let{address:t,url:s,symbol:n}=e;return(0,d.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",className:"gradient-text",children:n},t)}))}),"."]})}),"mainnet"===i.net?(0,d.jsx)(a.Col,{span:24,children:(0,d.jsxs)(r.Switch,{children:[(0,d.jsx)(r.Route,{exact:!0,path:e("/"),component:ne}),(0,d.jsx)(r.Route,{exact:!0,path:e("/:symbol"),component:Re})]})}):(0,d.jsx)(a.Col,{span:24,style:{textAlign:"center"},children:(0,d.jsxs)(a.Space,{direction:"vertical",children:[(0,d.jsx)(a.Typography.Title,{level:2,children:"\u26a0\ufe0f Only supported on Solana mainnet."}),(0,d.jsx)(a.Typography.Text,{children:"You can open the Control Center, switch to mainnet, and experience the application."})]})})]})}),(0,d.jsx)(a.Col,{span:24})]})};var Pe=s(48744),Ie=s.n(Pe),Ne=s(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const Be={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof g.PublicKey||e instanceof Ie()||Ne.isBuffer(e)}},De=(0,p.configureStore)({middleware:e=>e(Be),devTools:!1,reducer:{collections:A,category:$,listing:Ae,metadata:ue}});var Fe=s(45597);const{manifest:{appId:Le}}=N,Ue=()=>(0,d.jsx)(i.UIProvider,{appId:Le,antd:{prefixCls:Le},children:(0,d.jsx)(n.Provider,{store:De,children:(0,d.jsx)(_e,{})})})},83272:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/README.cd6958385873fd0100cf.md"},69363:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/logo.a4611ad00bff275b0581.png"},27803:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel1.aad2abab184f5971a1c7.png"},85468:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel2.e8f24e9a0428ae1a5ebc.png"},83943:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel3.84826e08746e9aa74c82.png"},46601:()=>{},89214:()=>{},85568:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_bootstrap_app_tsx-src_static_images_magic-eden-logo_jpeg.d27046ac.chunk.js.map