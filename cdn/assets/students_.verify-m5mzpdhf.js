import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{JH as n,WR as r,Y3 as i,YR as a,az as o,cw as s,dz as c,fz as l,iz as u,l2 as d,pN as f,qH as p,sw as m,u2 as ee,uN as h}from"./4813494d-gc8xrpfm69okc5zz.js";import{At as te,Bt as ne,Cn as re,Et as ie,Rt as ae,Sn as g,Z as oe,bn as _,en as v,gn as y,xn as se,yn as b,zt as ce}from"./2340486e-i20axdnmh5jcl165.js";import{CMt as x,SMt as le,cyt as S,gn as C,hn as ue,sn as de,syt as fe}from"./conversation-small-c3freb124eot432n.js";import{Uy as pe,Wy as w}from"./30901919-k22ugkopu4o81d64.js";import{Gl as me,Jl as he,Xl as T}from"./c2675c8c-esfqqxsqfcl28a0r.js";import{n as ge,t as _e}from"./c553d4b9-f68mxg1ds5zxfoa3.js";import{n as E,t as D}from"./9bfdcf20-k26jpxk5dwedk1bw.js";import{a as ve,l as O,n as ye,o as be,r as xe,t as k,u as Se}from"./d4df9516-nmuo97kw6hlulgcz.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Ce(e,t){try{let n=new URL(e);return n.origin!==I||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function we(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,he),e}function Te(e){"use forget";let t=(0,N.c)(20),{verificationUrl:r,verificationId:i,onSuccess:a}=e,o=se(),s=n(),c=(0,P.useRef)(null),[l]=(0,P.useState)(M),u;if(t[0]!==l||t[1]!==s||t[2]!==i||t[3]!==r){bb0:{if(!s||l==null){u=null;break bb0}let e=Ce(r,i);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,we().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=i,t[3]=r,t[4]=u}else u=t[4];let d=u,f,p;if(t[5]!==l||t[6]!==d||t[7]!==a||t[8]!==i?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==I||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(R,Math.max(L,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>R?`auto`:`no`;return}!A(n)||n.type!==`hook`||!A(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!A(n.hook.data)||n.hook.data.verificationId!==i||n.hook.data.currentStep!==`success`||a()};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},p=[l,d,a,i],t[5]=l,t[6]=d,t[7]=a,t[8]=i,t[9]=f,t[10]=p):(f=t[9],p=t[10]),(0,P.useEffect)(f,p),d==null){let e;t[11]===o?e=t[12]:(e=o.formatMessage(B.loadingLabel),t[11]=o,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,F.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===o?m=t[16]:(m=o.formatMessage(B.verificationTitle),t[15]=o,t[16]=m);let ee;return t[17]!==d||t[18]!==m?(ee=(0,F.jsx)(`iframe`,{ref:c,allow:`camera ${I}`,className:`block min-h-[100px] w-full border-0`,onLoad:j,referrerPolicy:`no-referrer`,src:d,title:m}),t[17]=d,t[18]=m,t[19]=ee):ee=t[19],ee}function j(e){e.currentTarget.contentWindow?.postMessage({action:`setOptions`,options:{customCss:z}},I)}function M(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var N,P,F,I,L,R,z,B,V=e((()=>{N=v(),T(),p(),P=t(re()),_(),F=g(),I=`https://services.sheerid.com`,L=100,R=2e3,z=`
[data-in-iframe="true"] .sid-personal-info-header .sid-logo-container,
[data-in-iframe="true"] .sid-personal-info-header .sid-header__title,
[data-in-iframe="true"] .sid-personal-info-header .sid-header__subtitle:not(.sid-header__subtitle--error),
[data-in-iframe="true"] .sid-personal-info-header .sid-header__how-verifying-works,
[data-in-iframe="true"] .sid-personal-info-header .sid-h-medium-text {
  display: none;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-form-wrapper,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-layout__form,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-layout__form-container {
  box-sizing: border-box;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  color: #0d0d0d;
  font-family: "OpenAI Sans", "Open Sans", ui-sans-serif, system-ui, sans-serif;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-personal-info-header {
  margin: 0;
  padding: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-l-container {
  max-width: none;
  padding-inline: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field {
  margin: 0 0 23px !important;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field > .sid-l-space-top-md {
  margin-top: 0;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label-name {
  color: #0d0d0d;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field__label-explanation,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-names-explanation,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-field-helper {
  color: #737373;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input {
  box-sizing: border-box;
  min-width: 0;
  height: 38px;
  min-height: 38px;
  padding: 8px 12px;
  border-radius: 8px;
  color: #0d0d0d;
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-organization-list .sid-text-input {
  padding-inline-end: 40px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input:not(.sid-text-input--error):not(.sid-text-input--warning),
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input:not(.sid-select-input--error) {
  border: 1px solid #e5e5e5;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input:not(.sid-text-input--error):not(.sid-text-input--warning):focus,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-input:not(.sid-select-input--error):focus {
  border-color: #0d0d0d;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-text-input__wrapper,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-select-display {
  min-width: 0;
  font-family: inherit;
  font-size: 14px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__inputs {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__month,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__day,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-date__year {
  width: auto;
  min-width: 0 !important;
  max-width: none !important;
  margin: 0 !important;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit__continue,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit button,
[data-in-iframe="true"]:has(.sid-personal-info-header) button[type="submit"],
[data-in-iframe="true"]:has(.sid-personal-info-header) input[type="submit"] {
  box-sizing: border-box;
  width: fit-content !important;
  min-width: 171px !important;
  max-inline-size: 100% !important;
  min-height: 42px !important;
  padding: 0 18px !important;
  border: 0 !important;
  border-radius: 9999px !important;
  background: #0d0d0d !important;
  color: #fff !important;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  white-space: normal;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn[aria-disabled="true"],
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-student-submit-btn[aria-disabled="true"],
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn--disabled-like,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit__continue:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-submit button:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) button[type="submit"]:disabled,
[data-in-iframe="true"]:has(.sid-personal-info-header) input[type="submit"]:disabled {
  background: #8f8f8f !important;
  color: #fff !important;
  cursor: not-allowed;
  opacity: 1;
}

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-footer__text {
  color: #737373;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
`,B=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function H(e){"use forget";let t=(0,Oe.c)(8),{sheerIdProgramId:n}=e,r=o(),i=r?.id??null,a=(0,W.useRef)(i),c,l;t[0]===i?(c=t[1],l=t[2]):(c=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(k.clearModalError(),k.setIsLoading(!1))},l=[i],t[0]=i,t[1]=c,t[2]=l),s(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,W.useEffect)(U,u);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,G.jsx)(De,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function U(){let e=Ee;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ee(e){e.persisted&&window.location.reload()}function De(e){"use forget";let t=(0,Oe.c)(89),{currentAccount:n,sheerIdProgramId:a}=e,o=se(),s=te(),c=u(),d=f(),[p]=ae(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=ee(),t[0]=m):m=t[0];let h=m,ne=(0,W.useRef)(!1),re=(0,W.useRef)(!1),ie=(0,W.useRef)(!0),g;t[1]===p?g=t[2]:(g=p.get(Ae),t[1]=p,t[2]=g);let oe=g,_=`/students/2026#trigger_students-2026-faq-verification`,v;t[3]===oe?v=t[4]:(v=new URLSearchParams({campaign:he}).toString(),t[3]=oe,t[4]=v);let b=`/students/claim?${v}`,ce;t[5]===d?.email?ce=t[6]:(ce=h&&(d?.email?.trim()||i()?.user?.email?.trim())||null,t[5]=d?.email,t[6]=ce);let x=ce,S;t[7]!==b||t[8]!==a?(S={...me,landingPath:b,sheerIdProgramId:a},t[7]=b,t[8]=a,t[9]=S):S=t[9];let C=S,w;t[10]!==n||t[11]!==C?(w=n!=null&&(!n.isPersonalAccount()||C.blocksMobileStoreSubscribers&&le(n)),t[10]=n,t[11]=C,t[12]=w):w=t[12];let T=w,ge=h&&n!=null&&!T,_e;t[13]===ge?_e=t[14]:(_e={enabled:ge,reportRefreshErrors:!0},t[13]=ge,t[14]=_e);let E=Se(C,_e),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,xe=be(D,O,C),k,A;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>(ie.current=!0,()=>{ie.current=!1}),k=[],t[15]=k,t[16]=A):(k=t[15],A=t[16]),(0,W.useEffect)(A,k);let Ce,we;t[17]===b?(Ce=t[18],we=t[19]):(Ce=()=>{h||ne.current||(ne.current=!0,l({callbackUrl:b,fallbackScreenHint:`login`}))},we=[b,h],t[17]=b,t[18]=Ce,t[19]=we),(0,W.useEffect)(Ce,we);let j;t[20]!==c.isError||t[21]!==c.isFetching||t[22]!==c.isSuccess||t[23]!==b||t[24]!==n||t[25]!==E.name||t[26]!==T||t[27]!==s?(j=()=>{if(!h)return;let e=n==null&&!c.isFetching&&(c.isError||c.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&s(b,{replace:!0})},t[20]=c.isError,t[21]=c.isFetching,t[22]=c.isSuccess,t[23]=b,t[24]=n,t[25]=E.name,t[26]=T,t[27]=s,t[28]=j):j=t[28];let M;t[29]!==c.isError||t[30]!==c.isFetching||t[31]!==c.isSuccess||t[32]!==b||t[33]!==n||t[34]!==E||t[35]!==T||t[36]!==s?(M=[c.isError,c.isFetching,c.isSuccess,b,n,E,T,h,s],t[29]=c.isError,t[30]=c.isFetching,t[31]=c.isSuccess,t[32]=b,t[33]=n,t[34]=E,t[35]=T,t[36]=s,t[37]=M):M=t[37],(0,W.useEffect)(j,M);let N,P;t[38]!==O||t[39]!==b||t[40]!==n||t[41]!==E.name||t[42]!==T||t[43]!==s||t[44]!==D||t[45]!==xe?(N=()=>{!h||n==null||T||E.name!==`needs-verification`||D!=null&&O!=null||re.current||(re.current=!0,xe().then(()=>{!ie.current||r()?.id!==n.id||ve.getState().modalErrorMessage==null||s(b,{replace:!0,state:{students2026VerificationError:!0}})}))},P=[O,b,n,E.name,T,h,s,D,xe],t[38]=O,t[39]=b,t[40]=n,t[41]=E.name,t[42]=T,t[43]=s,t[44]=D,t[45]=xe,t[46]=N,t[47]=P):(N=t[46],P=t[47]),(0,W.useEffect)(N,P);let F;t[48]!==b||t[49]!==s?(F=()=>{s(ue(b,de),{replace:!0})},t[48]=b,t[49]=s,t[50]=F):F=t[50];let I=F,L;t[51]!==O||t[52]!==b||t[53]!==n||t[54]!==T||t[55]!==a||t[56]!==D?(L=h&&n!=null&&D&&O&&!T?ye(a,`${window.location.origin}${ue(b,de)}`,D,O):null,t[51]=O,t[52]=b,t[53]=n,t[54]=T,t[55]=a,t[56]=D,t[57]=L):L=t[57];let R=L,z;t[58]===o?z=t[59]:(z=o.formatMessage(K.artworkAlt),t[58]=o,t[59]=z);let B;t[60]===z?B=t[61]:(B=(0,G.jsx)(`img`,{alt:z,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:960,src:ke,width:1920}),t[60]=z,t[61]=B);let V;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[62]=V):V=t[62];let H;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[63]=H):H=t[63];let U;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[64]=U):U=t[64];let Ee;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[65]=Ee):Ee=t[65];let De;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,G.jsx)(y,{...K.verificationHelp}),t[66]=De):De=t[66];let q;t[67]===_?q=t[68]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,Ee,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:_,rel:`noopener noreferrer`,target:`_blank`,children:De})]})]}),t[67]=_,t[68]=q);let J;t[69]!==B||t[70]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,q]}),t[69]=B,t[70]=q,t[71]=J):J=t[71];let Y;t[72]===o?Y=t[73]:(Y=o.formatMessage(K.verificationFormLabel),t[72]=o,t[73]=Y);let X;t[74]!==x||t[75]!==o?(X=x?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(fe,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm`,type:`button`,children:(0,G.jsx)(pe,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:x})]}):null,t[74]=x,t[75]=o,t[76]=X):X=t[76];let Z;t[77]!==I||t[78]!==o||t[79]!==D||t[80]!==R?(Z=R&&D?(0,G.jsx)(Te,{onSuccess:I,verificationId:D,verificationUrl:R}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=I,t[78]=o,t[79]=D,t[80]=R,t[81]=Z):Z=t[81];let Q;t[82]!==Y||t[83]!==X||t[84]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=Y,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==J||t[87]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[86]=J,t[87]=Q,t[88]=$):$=t[88],$}var Oe,W,G,ke,Ae,K,q=e((()=>{Oe=v(),w(),S(),V(),T(),O(),xe(),C(),a(),c(),h(),d(),x(),m(),W=t(re()),_(),oe(),G=g(),ke=`https://assets-resources.sheerid.com/simple/67d1dd27d7732a41eb64d141/images/prgrm-rsrc-1786648174547.jpg`,Ae=`students_2026_preview`,K=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt`,defaultMessage:`Students collaborating on a project in a garage`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,je=e((()=>{oe(),J=v(),ge(),q(),E(),Y=g(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ce(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ie(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(H,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(`div`,{className:`light bg-token-bg-primary text-token-text-primary`,children:(0,Y.jsx)(_e,{headerNav:t,locale:n,slug:`students/verify`,children:i})}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ne(D)}));e((()=>{je()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-m5mzpdhf.js.map