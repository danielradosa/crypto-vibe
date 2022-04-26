var O=Object.defineProperty,H=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var $=(t,e,a)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,T=(t,e)=>{for(var a in e||(e={}))K.call(e,a)&&$(t,a,e[a]);if(I)for(var a of I(e))U.call(e,a)&&$(t,a,e[a]);return t},F=(t,e)=>H(t,G(e));import{j as k,r as o,A as L,H as V,B as Y,a as X,R as Z,b as z,p as J,W as Q,C as f0,S as e0,c as t0,d as a0}from"./vendor.8be99a1b.js";const s0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}};s0();const f=k.exports.jsx,s=k.exports.jsxs,n0=k.exports.Fragment,r0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"})});var B="/assets/logo.9e5884bd.png";const c0=({title:t,classProps:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:t}),i0=()=>{const[t,e]=o.exports.useState(!1);return s("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[1] flex-initial justify-center items-center my-6",children:f("img",{src:B,alt:"logo",className:"w-32 cursor-pointer"})}),s("div",{className:"flex relative",children:[t?f(L,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!1)}):f(V,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>e(!0)}),t&&s("ul",{className:"z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none\r flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(L,{onClick:()=>e(!1)})}),["Market","Exchange","Tutorials","Wallets"].map((a,i)=>f(c0,{title:a,classProps:"my-2 text-lg"},a+i))]})]})]})},l0=()=>s("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[f("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:B,alt:"logo",className:"w-32"})})}),s("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Come join us and hear for the unexpected miracle"}),f("p",{className:"text-white text-sm text-center font-medium mt-2",children:"info@cryptovibe.com"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 "}),s("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-left text-xs",children:"@cryptovibe2022"}),f("p",{className:"text-white text-right text-xs",children:"All lefts reversed"})]})]}),C=({color:t,title:e,icon:a,subtitle:i})=>s("div",{className:"flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:a}),s("div",{className:"ml-5 flex flex-col flex-1",children:[f("h3",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-1 text-white text-sm md:w-9/12",children:i})]})]}),o0=()=>f("div",{className:"flex w-full justify-center items-center gradient-bg-services",children:s("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[s("div",{className:"flex-1 flex flex-col justify-start items-start",children:[s("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient ",children:["Services that we",f("br",{}),"continue to improve"]}),f("p",{className:"text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base",children:"The best choice for buying and selling your crypto assets, with the various super friendly services we offer"})]}),s("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(C,{color:"bg-[#2952E3]",title:"Security gurantee",icon:f(Y,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"}),f(C,{color:"bg-[#8945F8]",title:"Best exchange rates",icon:f(X,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"}),f(C,{color:"bg-[#F84550]",title:"Fastest transactions",icon:f(Z,{fontSize:21,className:"text-white"}),subtitle:"Security is guranteed. We always maintain privacy and maintain the quality of our products"})]})]})}),b0="hh-sol-artifact-1",d0="Transactions",m0="contracts/Transactions.sol",u0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],h0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b1410476f2ec2fe7fc6e4e25b8f6ea5f1c88f221752e856a4808fac80100d42264736f6c63430008000033",p0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108b9565b60405180910390f35b61006c6102e1565b60405161007991906108db565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102d857838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101ab90610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610ad9565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505081526020016004820154815260200160058201805461024790610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027390610ad9565b80156102c05780601f10610295576101008083540402835291602001916102c0565b820191906000526020600020905b8154815290600101906020018083116102a357829003601f168201915b505050505081525050815260200190600101906100c2565b50505050905090565b60008054905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa33858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea2646970667358221220b1410476f2ec2fe7fc6e4e25b8f6ea5f1c88f221752e856a4808fac80100d42264736f6c63430008000033",x0={},y0={};var w0={_format:b0,contractName:d0,sourceName:m0,abi:u0,bytecode:h0,deployedBytecode:p0,linkReferences:x0,deployedLinkReferences:y0};const g0=w0.abi,N0="0x5FbDB2315678afecb367f032d93F642f64180aa3",A=z.createContext(),{ethereum:b}=window,j=()=>{const e=new Q(b).getSigner();return new f0(N0,g0,e)},v0=({children:t})=>{const[e,a]=o.exports.useState(""),[i,n]=o.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),[r,l]=o.exports.useState(!1),[d,y]=o.exports.useState(localStorage.getItem("transactionCount")),[w,g]=o.exports.useState([]),N=(c,u)=>{n(h=>F(T({},h),{[u]:c.target.value}))},P=async()=>{try{if(b){const h=(await j().getAllTransactions()).map(m=>({addressTo:m.receiver,addressFrom:m.sender,timestamp:new Date(m.timestamp.toNumber()*1e3).toLocaleString(),message:m.message,keyword:m.keyword,amount:parseInt(m.amount._hex)/10**18}));console.log(h),g(h)}else console.log("Ethereum is not present")}catch(c){console.log(c)}},R=async()=>{try{if(!b)return alert("Please install MetaMask.");const c=await b.request({method:"eth_accounts"});c.length?(a(c[0]),P()):console.log("No accounts found")}catch(c){console.log(c)}},W=async()=>{try{if(b){const u=await j().getTransactionCount();window.localStorage.setItem("transactionCount",u)}}catch(c){throw console.log(c),new Error("No ethereum object")}},_=async()=>{try{if(!b)return alert("Please install MetaMask.");const c=await b.request({method:"eth_requestAccounts"});a(c[0]),window.location.reload()}catch(c){throw console.log(c),new Error("No ethereum object")}},q=async()=>{try{if(b){const{addressTo:c,amount:u,keyword:h,message:m}=i,E=j(),M=J(u);await b.request({method:"eth_sendTransaction",params:[{from:e,to:c,gas:"0x5208",value:M._hex}]});const v=await E.addToBlockchain(c,M,m,h);l(!0),console.log(`Loading - ${v.hash}`),await v.wait(),console.log(`Success - ${v.hash}`),l(!1);const D=await E.getTransactionCount();y(D.toNumber()),window.location.reload()}else console.log("No ethereum object")}catch(c){throw console.log(c),new Error("No ethereum object")}};return o.exports.useEffect(()=>{R(),W()},[d]),f(A.Provider,{value:{transactionCount:d,connectWallet:_,transactions:w,currentAccount:e,isLoading:r,sendTransaction:q,handleChange:N,formData:i},children:t})},T0="xPA95e3P3kzzCCZsXtzgIRM6MjaCthFm",C0=({keyword:t})=>{const[e,a]=o.exports.useState(""),i=async()=>{var n,r;try{const l=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${T0}&q=${t.split(" ").join("")}&limit=1`),{data:d}=await l.json();a((r=(n=d[0])==null?void 0:n.images)==null?void 0:r.downsized_medium.url)}catch{a("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")}};return o.exports.useEffect(()=>{t&&i()},[t]),e},S=t=>`${t.slice(0,5)}...${t.slice(t.length-9)}`,j0=({addressTo:t,addressFrom:e,timestamp:a,message:i,keyword:n,amount:r,url:l})=>{const d=C0({keyword:n});return f("div",{className:"bg-[#181918] m-4 flex flex-1\r 2xl:min-w-[450px]\r 2xl:max-w-[500px]\r sm:min-w-[270px]\r sm:max-w-[300px]\r min-w-full\r flex-col p-3 rounded-md hover:shadow-2xl",children:s("div",{className:"flex flex-col items-center w-full mt-3",children:[s("div",{className:"display-flex justify-start w-full mb-6 p-2",children:[f("a",{href:`https://etherscan.io/address/${e}`,target:"_blank",rel:"noreferrer",children:s("p",{className:"text-white text-base",children:["From: ",S(e)]})}),f("a",{href:`https://etherscan.io/address/${t}`,target:"_blank",rel:"noreferrer",children:s("p",{className:"text-white text-base",children:["To: ",S(t)]})}),s("p",{className:"text-white text-base",children:["Amount: ",r," ETH"]}),i&&s(n0,{children:[f("br",{}),s("p",{className:"text-white text-base",children:["Message: ",i]})]})]}),f("img",{src:d||l,alt:"nature",className:"w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold",children:a})})]})})},S0=()=>{const{transactions:t,currentAccount:e}=o.exports.useContext(A);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:s("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[e?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Connect your account to see the latest transactions"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:[...t].reverse().map((a,i)=>f(j0,T({},a),i))})]})})},p="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-white text-white",x=({placeholder:t,name:e,type:a,value:i,handleChange:n})=>f("input",{placeholder:t,type:a,step:"0.0001",value:i,onChange:r=>n(r,e),className:"my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"}),k0=()=>{const{connectWallet:t,currentAccount:e,formData:a,sendTransaction:i,handleChange:n,isLoading:r}=o.exports.useContext(A),l=d=>{const{addressTo:y,amount:w,keyword:g,message:N}=a;d.preventDefault(),!(!y||!w||!g||!N)&&i()};return f("div",{className:"flex w-full justify-center items-center",children:s("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[s("div",{className:"flex flex-1 justify-start flex-col mf:mr-10",children:[s("h1",{className:"text-3xl sm:text-5xl text-gradient py-1",children:["Send Crypto ",f("br",{})," and Vibe"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore the world of crypto. Buy and sell crypto online easily on CRYPTOVIBE."}),!e&&f("button",{type:"button",onClick:t,className:"flex flex-row justify-center items-center my-5 bg-[#ffffff] \r p-3 rounded-full cursor-pointer hover:bg-[#ffdd94] font-semibold",children:"Connect Wallet"}),s("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${p}`,children:"Reliability"}),f("div",{className:`${p}`,children:"Security"}),f("div",{className:`rounded-tr-2xl ${p}`,children:"Vibes"}),f("div",{className:`rounded-bl-2xl ${p}`,children:"Web 3.0"}),f("div",{className:`${p}`,children:"Functionality"}),f("div",{className:`rounded-br-2xl ${p}`,children:"Low fees"})]})]}),s("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism",children:s("div",{className:"flex justify-between flex-col w-full h-full",children:[s("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(e0,{fontSize:21,color:"#fff"})}),f(t0,{fontSize:"17",color:"#fff"})]}),s("div",{children:[f("p",{className:"text-white font-light text-sm",children:S(e)}),f("p",{className:"text-white semi-bold text-lg mt-1",children:"Ethereum"})]})]})}),s("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(x,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:n}),f(x,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:n}),f(x,{placeholder:"Keyword (GIF)",name:"keyword",type:"text",handleChange:n}),f(x,{placeholder:"Enter Message",name:"message",type:"text",handleChange:n}),f("div",{className:"h-[1px] w-full bg-gray-500 my-2"}),r?f(r0,{}):f("button",{type:"button",onClick:l,className:"text-white w-full mt-2 border-[1px] p-2 border-[#777] rounded-full cursor-pointer",children:"Send Now"})]})]})]})})},A0=()=>s("div",{className:"min-h-screen",children:[s("div",{className:"gradient-bg-welcome",children:[f(i0,{}),f(k0,{})]}),f(o0,{}),f(S0,{}),f(l0,{})]});a0.render(f(v0,{children:f(z.StrictMode,{children:f(A0,{})})}),document.getElementById("root"));
