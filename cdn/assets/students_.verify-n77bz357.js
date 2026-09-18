import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$7 as n,GK as r,NK as i,OK as a,Q7 as o,QK as s,Qj as ee,SR as c,WK as l,ZK as u,Zj as d,_J as f,gJ as p,wR as m,wtt as h}from"./4813494d-6g1x4bksaxrbt11n.js";import{At as g,Bn as _,Ht as te,Ln as v,Nn as y,Pt as ne,Q as re,Rn as ie,Ut as ae,Vn as b,Wt as oe,wn as x,zn as se}from"./2340486e-b3t78qt0psmq9d8c.js";import{Dn as ce,En as le,T$t as S,hkt as ue,mkt as de,vn as fe,w$t as pe}from"./conversation-small-gdkrlvw4wkgzwlmp.js";import{dy as me,fy as he}from"./30901919-ndfal3cy0qrbbe1a.js";import{am as ge,fm as C,im as _e,nm as ve,om as ye,rm as w,um as be}from"./c2675c8c-n1j98iedxe3b4rnr.js";import{n as xe,t as Se}from"./6105d6cc-dbdh57ble802i3im.js";import{n as T,t as Ce}from"./9bfdcf20-l4f5bwjr6702xcvz.js";import{a as we,d as E,f as Te,l as D,n as Ee,o as De,r as O,t as k,u as Oe}from"./d4df9516-o8aaadlhu3yq0m9w.js";import{n as A,t as j}from"./759cd6d0-jjr9lwm2sztx3tim.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function N(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function P(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,be),e}function ke(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function Ae(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=f(),ee=(0,L.useRef)(null),c=(0,L.useRef)(null),[l]=(0,L.useState)(je),u;if(t[0]!==l||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||l==null){u=null;break bb0}let e=N(n,r);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,P().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=r,t[3]=n,t[4]=u}else u=t[4];let d=u,p,m;if(t[5]!==l||t[6]!==d||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(l==null||d==null)return;let e=e=>{let t=ee.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!M(n)||n.type!==`hook`||!M(n.hook)||!M(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,u=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!u)){if(c.current!==r){c.current=r;try{i?.()}catch{}}u&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[l,d,i,a,r],t[5]=l,t[6]=d,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,L.useEffect)(p,m),d==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==d||t[19]!==h?(g=(0,R.jsx)(`iframe`,{ref:ee,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:F,referrerPolicy:`no-referrer`,src:d,title:h}),t[18]=d,t[19]=h,t[20]=g):g=t[20],g}function F(e){ke(e.currentTarget)}function je(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=x(),C(),p(),L=t(b()),ie(),R=_(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=v({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,i=r(),a=i?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(k.clearModalError(),k.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),ee(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(Le,{currentAccount:i,sheerIdProgramId:n},u),t[4]=i,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:i}=e,o=se(),c=ne(),u=l(),d=m(),[f]=te(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=n(),t[0]=p):p=t[0];let g=p,_;t[1]===f?_=t[2]:(_=()=>{_e(f)},t[1]=f,t[2]=_);let v;t[3]!==r||t[4]!==f?(v=[f,r,g],t[3]=r,t[4]=f,t[5]=v):v=t[5],ee(_,v);let re=(0,W.useRef)(!1),ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!0),b;t[6]===f?b=t[7]:(b=f.get(Be),t[6]=f,t[7]=b);let oe=b,x=`/students/2026#trigger_students-2026-faq-verification`,ce;t[8]===oe?ce=t[9]:(ce=new URLSearchParams({campaign:be}).toString(),t[8]=oe,t[9]=ce);let S=`/students/claim?${ce}`,ue;t[10]===d?.email?ue=t[11]:(ue=g&&(d?.email?.trim()||h()?.user?.email?.trim())||null,t[10]=d?.email,t[11]=ue);let he=ue,C;t[12]!==S||t[13]!==i?(C={...ye,landingPath:S,sheerIdProgramId:i},t[12]=S,t[13]=i,t[14]=C):C=t[14];let w=C,xe;t[15]!==r||t[16]!==w?(xe=r!=null&&(Oe(r)||!r.isPersonalAccount()||w.blocksMobileStoreSubscribers&&pe(r)),t[15]=r,t[16]=w,t[17]=xe):xe=t[17];let T=xe,Ce=g&&r!=null&&!T,E;t[18]===Ce?E=t[19]:(E={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=E);let D=Te(w,E),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=De(O,k,w),j,M;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(j=()=>(ae.current=!0,()=>{ae.current=!1}),M=[],t[20]=j,t[21]=M):(j=t[20],M=t[21]),(0,W.useEffect)(j,M);let N,P;t[22]===S?(N=t[23],P=t[24]):(N=()=>{g||re.current||(re.current=!0,s({callbackUrl:ve(S),fallbackScreenHint:`login`}))},P=[S,g],t[22]=S,t[23]=N,t[24]=P),(0,W.useEffect)(N,P);let ke;t[25]!==u.isError||t[26]!==u.isFetching||t[27]!==u.isSuccess||t[28]!==S||t[29]!==r||t[30]!==D.name||t[31]!==T||t[32]!==c?(ke=()=>{if(!g)return;let e=r==null&&!u.isFetching&&(u.isError||u.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||T||t)&&c(S,{replace:!0})},t[25]=u.isError,t[26]=u.isFetching,t[27]=u.isSuccess,t[28]=S,t[29]=r,t[30]=D.name,t[31]=T,t[32]=c,t[33]=ke):ke=t[33];let F;t[34]!==u.isError||t[35]!==u.isFetching||t[36]!==u.isSuccess||t[37]!==S||t[38]!==r||t[39]!==D||t[40]!==T||t[41]!==c?(F=[u.isError,u.isFetching,u.isSuccess,S,r,D,T,g,c],t[34]=u.isError,t[35]=u.isFetching,t[36]=u.isSuccess,t[37]=S,t[38]=r,t[39]=D,t[40]=T,t[41]=c,t[42]=F):F=t[42],(0,W.useEffect)(ke,F);let je,I;t[43]!==k||t[44]!==S||t[45]!==r||t[46]!==D.name||t[47]!==T||t[48]!==c||t[49]!==O||t[50]!==A?(je=()=>{!g||r==null||T||D.name!==`needs-verification`||O!=null&&k!=null||ie.current||(ie.current=!0,A().then(()=>{!ae.current||a()?.id!==r.id||we.getState().modalErrorMessage==null||c(S,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[k,S,r,D.name,T,g,c,O,A],t[43]=k,t[44]=S,t[45]=r,t[46]=D.name,t[47]=T,t[48]=c,t[49]=O,t[50]=A,t[51]=je,t[52]=I):(je=t[51],I=t[52]),(0,W.useEffect)(je,I);let L;t[53]===r?L=t[54]:(L=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||ge(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=L);let R=L,z;t[55]!==S||t[56]!==c?(z=()=>{c(le(S,fe),{replace:!0})},t[55]=S,t[56]=c,t[57]=z):z=t[57];let Me=z,B;t[58]!==k||t[59]!==S||t[60]!==r||t[61]!==T||t[62]!==i||t[63]!==O?(B=g&&r!=null&&O&&k&&!T?Ee(i,`${window.location.origin}${le(S,fe)}`,O,k):null,t[58]=k,t[59]=S,t[60]=r,t[61]=T,t[62]=i,t[63]=O,t[64]=B):B=t[64];let V=B,H;t[65]===o?H=t[66]:(H=o.formatMessage(K.artworkAlt),t[65]=o,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(y,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===x?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:x,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=x,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===o?Y=t[80]:(Y=o.formatMessage(K.verificationFormLabel),t[79]=o,t[80]=Y);let X;t[81]!==he||t[82]!==o?(X=he?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(de,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:he})]}):null,t[81]=he,t[82]=o,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==o||t[87]!==O||t[88]!==V?(Z=V&&O?(0,G.jsx)(Ae,{onSubmitted:R,onSuccess:Me,verificationId:O,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=o,t[87]=O,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=x(),he(),ue(),xe(),Ne(),C(),D(),E(),w(),O(),ce(),i(),u(),c(),o(),S(),d(),W=t(b()),ie(),re(),G=_(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=v({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{re(),J=x(),A(),q(),T(),Y=_(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ae(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=g(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(j,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=oe(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-n77bz357.js.map