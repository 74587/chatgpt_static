import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{F7 as n,KK as r,OJ as i,P7 as a,Ub as o,VK as s,Wb as ee,ez as c,kJ as l,lq as u,nq as d,nz as f,rq as p,stt as te,uq as m}from"./4813494d-i88ebrgl0r2g94a4.js";import{An as h,Bt as g,Dt as ne,Fn as _,In as re,Ln as ie,Pn as ae,Q as oe,Rn as v,Vt as se,jt as ce,xn as y,zt as le}from"./2340486e-lo737pyjfygyimqo.js";import{Lp as ue,Np as de,_5t as fe,aXt as pe,hEt as me,l5t as he,mEt as ge,oXt as b,v5t as _e,zp as x}from"./conversation-small-c89mq7wpr5yt4chy.js";import{My as S,jy as ve}from"./30901919-o01noa1h5wh6vmzc.js";import{Af as ye,Mf as be,Nf as xe,jf as C}from"./c2675c8c-b7tr2e0z4wqiq8hm.js";import{n as w,t as Se}from"./6105d6cc-bnzn5aqc3rcktlp2.js";import{n as T,t as Ce}from"./9bfdcf20-dvtwctl8gr5lxvu2.js";import{a as we,d as Te,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-hjluv5t0ifhh4a73.js";import{n as Ae,t as k}from"./759cd6d0-flrp1ly5rzl68p5r.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function j(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function M(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ue),e}function N(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function je(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=re(),s=l(),ee=(0,L.useRef)(null),c=(0,L.useRef)(null),[u]=(0,L.useState)(F),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=j(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,M().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,te;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=ee.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!A(n)||n.type!==`hook`||!A(n.hook)||!A(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,l=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!l)){if(c.current!==r){c.current=r;try{i?.()}catch{}}l&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=te):(p=t[10],te=t[11]),(0,L.useEffect)(p,te),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===o?m=t[17]:(m=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=m);let h;return t[18]!==f||t[19]!==m?(h=(0,R.jsx)(`iframe`,{ref:ee,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:P,referrerPolicy:`no-referrer`,src:f,title:m}),t[18]=f,t[19]=m,t[20]=h):h=t[20],h}function P(e){N(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=y(),x(),i(),L=t(v()),_(),R=ie(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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

[data-in-iframe="true"]:has(.sid-personal-info-header) .sid-search-overlay__close {
  margin-bottom: 0;
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
`,H=`
@media (max-width: 639px) {
  [data-in-iframe="true"]:has(.sid-personal-info-header) .sid-btn,
  [data-in-iframe="true"] button.sid-btn,
  [data-in-iframe="true"] a.sid-btn,
  [data-in-iframe="true"] [role="button"].sid-btn,
  [data-in-iframe="true"] .sid-submit__continue,
  [data-in-iframe="true"] .sid-student-submit-btn,
  [data-in-iframe="true"] .sid-submit button,
  [data-in-iframe="true"] button[type="submit"],
  [data-in-iframe="true"] input[type="submit"] {
    width: 100% !important;
    min-width: 0 !important;
    min-height: 48px !important;
  }
}
`,U=ae({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=p(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(O.clearModalError(),O.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),ee(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,W.useEffect)(Fe,c);let l=r?.id??`no-account`,u;return t[4]!==r||t[5]!==n||t[6]!==l?(u=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=u):u=t[7],u}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:i}=e,a=re(),o=ce(),c=d(),l=f(),[u]=le(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=n(),t[0]=p):p=t[0];let g=p,ne;t[1]===u?ne=t[2]:(ne=()=>{be(u)},t[1]=u,t[2]=ne);let _;t[3]!==r||t[4]!==u?(_=[u,r,g],t[3]=r,t[4]=u,t[5]=_):_=t[5],ee(ne,_);let ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!1),oe=(0,W.useRef)(!0),v;t[6]===u?v=t[7]:(v=u.get(Be),t[6]=u,t[7]=v);let se=v,y=`/students/2026#trigger_students-2026-faq-verification`,me;t[8]===se?me=t[9]:(me=new URLSearchParams({campaign:ue}).toString(),t[8]=se,t[9]=me);let b=`/students/claim?${me}`,_e;t[10]===l?.email?_e=t[11]:(_e=g&&(l?.email?.trim()||te()?.user?.email?.trim())||null,t[10]=l?.email,t[11]=_e);let x=_e,S;t[12]!==b||t[13]!==i?(S={...de,landingPath:b,sheerIdProgramId:i},t[12]=b,t[13]=i,t[14]=S):S=t[14];let C=S,w;t[15]!==r||t[16]!==C?(w=r!=null&&(ke(r)||!r.isPersonalAccount()||C.blocksMobileStoreSubscribers&&pe(r)),t[15]=r,t[16]=C,t[17]=w):w=t[17];let T=w,Ce=g&&r!=null&&!T,Te;t[18]===Ce?Te=t[19]:(Te={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=Te);let E=Ee(C,Te),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Ae=Oe(D,O,C),k,A;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(oe.current=!0,()=>{oe.current=!1}),A=[],t[20]=k,t[21]=A):(k=t[20],A=t[21]),(0,W.useEffect)(k,A);let j,M;t[22]===b?(j=t[23],M=t[24]):(j=()=>{g||ie.current||(ie.current=!0,m({callbackUrl:ye(b),fallbackScreenHint:`login`}))},M=[b,g],t[22]=b,t[23]=j,t[24]=M),(0,W.useEffect)(j,M);let N;t[25]!==c.isError||t[26]!==c.isFetching||t[27]!==c.isSuccess||t[28]!==b||t[29]!==r||t[30]!==E.name||t[31]!==T||t[32]!==o?(N=()=>{if(!g)return;let e=r==null&&!c.isFetching&&(c.isError||c.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&o(b,{replace:!0})},t[25]=c.isError,t[26]=c.isFetching,t[27]=c.isSuccess,t[28]=b,t[29]=r,t[30]=E.name,t[31]=T,t[32]=o,t[33]=N):N=t[33];let P;t[34]!==c.isError||t[35]!==c.isFetching||t[36]!==c.isSuccess||t[37]!==b||t[38]!==r||t[39]!==E||t[40]!==T||t[41]!==o?(P=[c.isError,c.isFetching,c.isSuccess,b,r,E,T,g,o],t[34]=c.isError,t[35]=c.isFetching,t[36]=c.isSuccess,t[37]=b,t[38]=r,t[39]=E,t[40]=T,t[41]=o,t[42]=P):P=t[42],(0,W.useEffect)(N,P);let F,I;t[43]!==O||t[44]!==b||t[45]!==r||t[46]!==E.name||t[47]!==T||t[48]!==o||t[49]!==D||t[50]!==Ae?(F=()=>{!g||r==null||T||E.name!==`needs-verification`||D!=null&&O!=null||ae.current||(ae.current=!0,Ae().then(()=>{!oe.current||s()?.id!==r.id||we.getState().modalErrorMessage==null||o(b,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[O,b,r,E.name,T,g,o,D,Ae],t[43]=O,t[44]=b,t[45]=r,t[46]=E.name,t[47]=T,t[48]=o,t[49]=D,t[50]=Ae,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===r?L=t[54]:(L=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||xe(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=L);let R=L,z;t[55]!==b||t[56]!==o?(z=()=>{o(fe(b,he),{replace:!0})},t[55]=b,t[56]=o,t[57]=z):z=t[57];let Me=z,B;t[58]!==O||t[59]!==b||t[60]!==r||t[61]!==T||t[62]!==i||t[63]!==D?(B=g&&r!=null&&D&&O&&!T?De(i,`${window.location.origin}${fe(b,he)}`,D,O):null,t[58]=O,t[59]=b,t[60]=r,t[61]=T,t[62]=i,t[63]=D,t[64]=B):B=t[64];let V=B,H;t[65]===a?H=t[66]:(H=a.formatMessage(K.artworkAlt),t[65]=a,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(h,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(h,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(h,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(h,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(h,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===y?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:y,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=y,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===a?Y=t[80]:(Y=a.formatMessage(K.verificationFormLabel),t[79]=a,t[80]=Y);let X;t[81]!==x||t[82]!==a?(X=x?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(h,{...K.accountLabel}),(0,G.jsx)(ge,{content:a.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":a.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:x})]}):null,t[81]=x,t[82]=a,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==a||t[87]!==D||t[88]!==V?(Z=V&&D?(0,G.jsx)(je,{onSubmitted:R,onSuccess:Me,verificationId:D,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=a,t[87]=D,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=y(),S(),me(),w(),Ne(),x(),E(),Te(),C(),D(),_e(),r(),u(),c(),a(),b(),o(),W=t(v()),_(),oe(),G=ie(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=ae({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{oe(),J=y(),Ae(),q(),T(),Y=ie(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=g(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(k,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=se(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-cekjatge.js.map