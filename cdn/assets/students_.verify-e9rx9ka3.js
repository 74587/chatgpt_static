import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{AL as n,B$ as r,D$ as i,DM as a,EM as o,K$ as s,Kit as c,OL as l,Xtt as u,Ytt as d,a2 as f,i2 as p,q$ as ee,x$ as te,z$ as m}from"./4813494d-nsss7fxurseygool.js";import{$ as h,Bn as g,En as _,Fn as v,Gt as ne,Hn as y,It as re,Kt as ie,Mt as b,Un as ae,Vn as oe,Wt as se,zn as x}from"./2340486e-kfapbrw5efyhrjct.js";import{Dn as ce,Fn as S,Mjt as le,Nn as ue,Pn as de,S2t as C,Tn as fe,jjt as pe,x2t as me}from"./conversation-small-il4f9f078deiaqsx.js";import{by as w,yy as he}from"./30901919-blfi4ig5w3um9y6d.js";import{Dh as T,Th as ge,_h as _e,bh as ve,gh as ye,vh as be,xh as xe}from"./c2675c8c-jwsxhbydo0b4kgag.js";import{n as E,t as Se}from"./6105d6cc-gxuz8d0y31dedsqx.js";import{n as D,t as Ce}from"./9bfdcf20-nzfesct0hx7pxyxx.js";import{a as we,d as O,f as Te,l as Ee,n as De,o as Oe,r as ke,t as k,u as Ae}from"./d4df9516-jr4orypdi93g1647.js";import{n as A,t as j}from"./759cd6d0-d1s7qt3fqq2jjr47.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function je(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Me(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ge),e}function Ne(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${Ie}${B}`}},R)}function Pe(e){"use forget";let t=(0,F.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=oe(),s=f(),c=(0,I.useRef)(null),l=(0,I.useRef)(null),[u]=(0,I.useState)(P),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=je(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Me().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let p=d,ee,te;if(t[5]!==u||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(u==null||p==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(Fe,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!M(n)||n.type!==`hook`||!M(n.hook)||!M(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[u,p,i,a,r],t[5]=u,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=te):(ee=t[10],te=t[11]),(0,I.useEffect)(ee,te),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(V.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===o?m=t[17]:(m=o.formatMessage(V.verificationTitle),t[16]=o,t[17]=m);let h;return t[18]!==p||t[19]!==m?(h=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:N,referrerPolicy:`no-referrer`,src:p,title:m}),t[18]=p,t[19]=m,t[20]=h):h=t[20],h}function N(e){Ne(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,Fe,z,Ie,B,V,H=e((()=>{F=_(),T(),p(),I=t(ae()),g(),L=y(),R=`https://services.sheerid.com`,Fe=100,z=2e3,Ie=`
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
`,B=`
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
`,V=x({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function U(e){"use forget";let t=(0,Be.c)(8),{sheerIdProgramId:n}=e,i=r(),o=i?.id??null,s=(0,W.useRef)(o),c,l;t[0]===o?(c=t[1],l=t[2]):(c=()=>{if(o==null)return;let e=s.current;s.current=o,e!=null&&e!==o&&(k.clearModalError(),k.setIsLoading(!1))},l=[o],t[0]=o,t[1]=c,t[2]=l),a(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,W.useEffect)(Le,u);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==n||t[6]!==d?(f=(0,G.jsx)(ze,{currentAccount:i,sheerIdProgramId:n},d),t[4]=i,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function Le(){let e=Re;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Re(e){e.persisted&&window.location.reload()}function ze(e){"use forget";let t=(0,Be.c)(100),{currentAccount:r,sheerIdProgramId:i}=e,o=oe(),s=re(),l=m(),d=n(),[f]=se(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=u(),t[0]=p):p=t[0];let h=p,g;t[1]===f?g=t[2]:(g=()=>{be(f)},t[1]=f,t[2]=g);let _;t[3]!==r||t[4]!==f?(_=[f,r,h],t[3]=r,t[4]=f,t[5]=_):_=t[5],a(g,_);let ne=(0,W.useRef)(!1),y=(0,W.useRef)(!1),ie=(0,W.useRef)(!0),b;t[6]===f?b=t[7]:(b=f.get(He),t[6]=f,t[7]=b);let ae=b,x;t[8]===f?x=t[9]:(x=de(f),t[8]=f,t[9]=x);let S=x,le=`/students/2026#trigger_students-2026-faq-verification`,C;if(t[10]!==S||t[11]!==ae){let e=new URLSearchParams({campaign:ge});S!=null&&e.set(ce,S),C=e.toString(),t[10]=S,t[11]=ae,t[12]=C}else C=t[12];let w=`/students/claim?${C}`,T;t[13]===d?.email?T=t[14]:(T=h&&(d?.email?.trim()||c()?.user?.email?.trim())||null,t[13]=d?.email,t[14]=T);let _e=T,E;t[15]!==w||t[16]!==i?(E={...xe,landingPath:w,sheerIdProgramId:i},t[15]=w,t[16]=i,t[17]=E):E=t[17];let D=E,Ce;t[18]!==r||t[19]!==D?(Ce=r!=null&&(Ae(r)||!r.isPersonalAccount()||D.blocksMobileStoreSubscribers&&me(r)),t[18]=r,t[19]=D,t[20]=Ce):Ce=t[20];let O=Ce,Ee=h&&r!=null&&!O,ke;t[21]===Ee?ke=t[22]:(ke={enabled:Ee,reportRefreshErrors:!0},t[21]=Ee,t[22]=ke);let k=Te(D,ke),A=k.name===`needs-verification`?k.verificationId??null:null,j=k.name===`needs-verification`?k.accountVerificationId??null:null,M=Oe(A,j,D,S),je,Me;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(je=()=>(ie.current=!0,()=>{ie.current=!1}),Me=[],t[23]=je,t[24]=Me):(je=t[23],Me=t[24]),(0,W.useEffect)(je,Me);let Ne,N;t[25]===w?(Ne=t[26],N=t[27]):(Ne=()=>{h||ne.current||(ne.current=!0,ee({callbackUrl:ye(w),fallbackScreenHint:`login`}))},N=[w,h],t[25]=w,t[26]=Ne,t[27]=N),(0,W.useEffect)(Ne,N);let P;t[28]!==l.isError||t[29]!==l.isFetching||t[30]!==l.isSuccess||t[31]!==w||t[32]!==r||t[33]!==k.name||t[34]!==O||t[35]!==s?(P=()=>{if(!h)return;let e=r==null&&!l.isFetching&&(l.isError||l.isSuccess),t=k.name===`coming-soon`||k.name===`error`||k.name===`verified`||k.name===`enrolled`;(e||O||t)&&s(w,{replace:!0})},t[28]=l.isError,t[29]=l.isFetching,t[30]=l.isSuccess,t[31]=w,t[32]=r,t[33]=k.name,t[34]=O,t[35]=s,t[36]=P):P=t[36];let F;t[37]!==l.isError||t[38]!==l.isFetching||t[39]!==l.isSuccess||t[40]!==w||t[41]!==r||t[42]!==k||t[43]!==O||t[44]!==s?(F=[l.isError,l.isFetching,l.isSuccess,w,r,k,O,h,s],t[37]=l.isError,t[38]=l.isFetching,t[39]=l.isSuccess,t[40]=w,t[41]=r,t[42]=k,t[43]=O,t[44]=s,t[45]=F):F=t[45],(0,W.useEffect)(P,F);let I,L;t[46]!==j||t[47]!==w||t[48]!==r||t[49]!==k.name||t[50]!==O||t[51]!==s||t[52]!==A||t[53]!==M?(I=()=>{!h||r==null||O||k.name!==`needs-verification`||A!=null&&j!=null||y.current||(y.current=!0,M().then(()=>{!ie.current||te()?.id!==r.id||we.getState().modalErrorMessage==null||s(w,{replace:!0,state:{students2026VerificationError:!0}})}))},L=[j,w,r,k.name,O,h,s,A,M],t[46]=j,t[47]=w,t[48]=r,t[49]=k.name,t[50]=O,t[51]=s,t[52]=A,t[53]=M,t[54]=I,t[55]=L):(I=t[54],L=t[55]),(0,W.useEffect)(I,L);let R;t[56]===r?R=t[57]:(R=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[56]=r,t[57]=R);let Fe=R,z;t[58]!==w||t[59]!==s?(z=()=>{s(ue(w,fe),{replace:!0})},t[58]=w,t[59]=s,t[60]=z):z=t[60];let Ie=z,B;t[61]!==j||t[62]!==w||t[63]!==r||t[64]!==O||t[65]!==i||t[66]!==A?(B=h&&r!=null&&A&&j&&!O?De(i,`${window.location.origin}${ue(w,fe)}`,A,j):null,t[61]=j,t[62]=w,t[63]=r,t[64]=O,t[65]=i,t[66]=A,t[67]=B):B=t[67];let V=B,H;t[68]===o?H=t[69]:(H=o.formatMessage(K.artworkAlt),t[68]=o,t[69]=H);let U;t[70]===H?U=t[71]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:Ve,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[70]=H,t[71]=U);let Le;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.title})}),t[72]=Le):Le=t[72];let Re;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Re=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Le,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopTitle})})]}),t[73]=Re):Re=t[73];let ze;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.description})}),t[74]=ze):ze=t[74];let Ue;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopDescription})}),t[75]=Ue):Ue=t[75];let q;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,G.jsx)(v,{...K.verificationHelp}),t[76]=q):q=t[76];let J;t[77]===le?J=t[78]:(J=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Re,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ze,Ue,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:le,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[77]=le,t[78]=J);let Y;t[79]!==U||t[80]!==J?(Y=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,J]}),t[79]=U,t[80]=J,t[81]=Y):Y=t[81];let X;t[82]===o?X=t[83]:(X=o.formatMessage(K.verificationFormLabel),t[82]=o,t[83]=X);let Z;t[84]!==_e||t[85]!==o?(Z=_e?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(v,{...K.accountLabel}),(0,G.jsx)(pe,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:_e})]}):null,t[84]=_e,t[85]=o,t[86]=Z):Z=t[86];let Q;t[87]!==Fe||t[88]!==Ie||t[89]!==o||t[90]!==A||t[91]!==V?(Q=V&&A?(0,G.jsx)(Pe,{onSubmitted:Fe,onSuccess:Ie,verificationId:A,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[87]=Fe,t[88]=Ie,t[89]=o,t[90]=A,t[91]=V,t[92]=Q):Q=t[92];let $;t[93]!==X||t[94]!==Z||t[95]!==Q?($=(0,G.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[93]=X,t[94]=Z,t[95]=Q,t[96]=$):$=t[96];let We;return t[97]!==Y||t[98]!==$?(We=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[97]=Y,t[98]=$,t[99]=We):We=t[99],We}var Be,W,G,Ve,He,K,Ue=e((()=>{Be=_(),w(),le(),E(),H(),T(),Ee(),O(),_e(),ke(),S(),i(),s(),l(),d(),C(),o(),W=t(ae()),g(),h(),G=y(),Ve=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,He=`students_2026_preview`,K=x({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),q,J,Y,X,Z,Q,$=e((()=>{h(),q=_(),A(),Ue(),D(),J=y(),Y={hasRouteMeta:!0},X=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Z=ne(function(){"use forget";let e=(0,q.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=b(),i;e[0]===r?i=e[1]:(i=(0,J.jsx)(U,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,J.jsx)(j,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Q=ie(Ce)}));e((()=>{$()}))();export{Q as ErrorBoundary,Z as default,Y as handle,X as meta};
//# sourceMappingURL=students_.verify-e9rx9ka3.js.map