import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{Cj as n,II as r,JK as i,LK as a,MK as o,Ott as s,PI as c,Sj as l,YK as u,bJ as d,n9 as f,nq as ee,t9 as p,tq as m,xJ as h}from"./4813494d-bnn7t6d9p8nkljc5.js";import{At as g,Bn as _,Ht as te,Ln as v,Nn as y,Pt as ne,Q as re,Rn as ie,Ut as ae,Vn as b,Wt as oe,wn as x,zn as se}from"./2340486e-b3t78qt0psmq9d8c.js";import{H$t as ce,On as le,V$t as ue,_kt as de,bn as fe,kn as S,vkt as pe}from"./conversation-small-pcinzl8m39dh4tz4.js";import{my as me,py as he}from"./30901919-mjaozq37to3bh28a.js";import{Cm as ge,Dm as _e,Sm as ve,bm as ye,km as C,xm as be,ym as xe}from"./c2675c8c-kpdta9zu09y4u84i.js";import{n as Se,t as Ce}from"./6105d6cc-l7beasfbuzc8yi4g.js";import{n as w,t as we}from"./9bfdcf20-hn86yqqr1mvfyd49.js";import{a as Te,d as T,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-fu75mpxc5xjyios2.js";import{n as k,t as A}from"./759cd6d0-hsv0mmaw9wesdfbi.js";function j(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function M(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function N(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,_e),e}function P(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function Ae(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=h(),c=(0,L.useRef)(null),l=(0,L.useRef)(null),[u]=(0,L.useState)(F),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=M(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,N().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,ee,p;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!j(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(j(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!j(n)||n.type!==`hook`||!j(n.hook)||!j(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=p):(ee=t[10],p=t[11]),(0,L.useEffect)(ee,p),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===o?m=t[17]:(m=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=m);let g;return t[18]!==f||t[19]!==m?(g=(0,R.jsx)(`iframe`,{ref:c,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:je,referrerPolicy:`no-referrer`,src:f,title:m}),t[18]=f,t[19]=m,t[20]=g):g=t[20],g}function je(e){P(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=x(),C(),d(),L=t(b()),ie(),R=_(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=v({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:r}=e,i=u(),a=i?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(O.clearModalError(),O.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),n(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==r||t[6]!==d?(f=(0,G.jsx)(Le,{currentAccount:i,sheerIdProgramId:r},d),t[4]=i,t[5]=r,t[6]=d,t[7]=f):f=t[7],f}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:a,sheerIdProgramId:c}=e,l=se(),u=ne(),d=i(),p=r(),[m]=te(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=f(),t[0]=h):h=t[0];let g=h,_;t[1]===m?_=t[2]:(_=()=>{be(m)},t[1]=m,t[2]=_);let v;t[3]!==a||t[4]!==m?(v=[m,a,g],t[3]=a,t[4]=m,t[5]=v):v=t[5],n(_,v);let re=(0,W.useRef)(!1),ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!0),b;t[6]===m?b=t[7]:(b=m.get(Be),t[6]=m,t[7]=b);let oe=b,x=`/students/2026#trigger_students-2026-faq-verification`,ce;t[8]===oe?ce=t[9]:(ce=new URLSearchParams({campaign:_e}).toString(),t[8]=oe,t[9]=ce);let S=`/students/claim?${ce}`,pe;t[10]===p?.email?pe=t[11]:(pe=g&&(p?.email?.trim()||s()?.user?.email?.trim())||null,t[10]=p?.email,t[11]=pe);let me=pe,ye;t[12]!==S||t[13]!==c?(ye={...ge,landingPath:S,sheerIdProgramId:c},t[12]=S,t[13]=c,t[14]=ye):ye=t[14];let C=ye,Se;t[15]!==a||t[16]!==C?(Se=a!=null&&(ke(a)||!a.isPersonalAccount()||C.blocksMobileStoreSubscribers&&ue(a)),t[15]=a,t[16]=C,t[17]=Se):Se=t[17];let w=Se,we=g&&a!=null&&!w,T;t[18]===we?T=t[19]:(T={enabled:we,reportRefreshErrors:!0},t[18]=we,t[19]=T);let E=Ee(C,T),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,k=Oe(D,O,C),A,j;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>(ae.current=!0,()=>{ae.current=!1}),j=[],t[20]=A,t[21]=j):(A=t[20],j=t[21]),(0,W.useEffect)(A,j);let M,N;t[22]===S?(M=t[23],N=t[24]):(M=()=>{g||re.current||(re.current=!0,ee({callbackUrl:xe(S),fallbackScreenHint:`login`}))},N=[S,g],t[22]=S,t[23]=M,t[24]=N),(0,W.useEffect)(M,N);let P;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==S||t[29]!==a||t[30]!==E.name||t[31]!==w||t[32]!==u?(P=()=>{if(!g)return;let e=a==null&&!d.isFetching&&(d.isError||d.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||w||t)&&u(S,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=S,t[29]=a,t[30]=E.name,t[31]=w,t[32]=u,t[33]=P):P=t[33];let je;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==S||t[38]!==a||t[39]!==E||t[40]!==w||t[41]!==u?(je=[d.isError,d.isFetching,d.isSuccess,S,a,E,w,g,u],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=S,t[38]=a,t[39]=E,t[40]=w,t[41]=u,t[42]=je):je=t[42],(0,W.useEffect)(P,je);let F,I;t[43]!==O||t[44]!==S||t[45]!==a||t[46]!==E.name||t[47]!==w||t[48]!==u||t[49]!==D||t[50]!==k?(F=()=>{!g||a==null||w||E.name!==`needs-verification`||D!=null&&O!=null||ie.current||(ie.current=!0,k().then(()=>{!ae.current||o()?.id!==a.id||Te.getState().modalErrorMessage==null||u(S,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[O,S,a,E.name,w,g,u,D,k],t[43]=O,t[44]=S,t[45]=a,t[46]=E.name,t[47]=w,t[48]=u,t[49]=D,t[50]=k,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===a?L=t[54]:(L=()=>{let e=a?.normalizedAccountUserId;a==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:a.id,accountUserId:e}})},t[53]=a,t[54]=L);let R=L,z;t[55]!==S||t[56]!==u?(z=()=>{u(le(S,fe),{replace:!0})},t[55]=S,t[56]=u,t[57]=z):z=t[57];let Me=z,B;t[58]!==O||t[59]!==S||t[60]!==a||t[61]!==w||t[62]!==c||t[63]!==D?(B=g&&a!=null&&D&&O&&!w?De(c,`${window.location.origin}${le(S,fe)}`,D,O):null,t[58]=O,t[59]=S,t[60]=a,t[61]=w,t[62]=c,t[63]=D,t[64]=B):B=t[64];let V=B,H;t[65]===l?H=t[66]:(H=l.formatMessage(K.artworkAlt),t[65]=l,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Ce,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(y,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===x?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:x,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=x,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===l?Y=t[80]:(Y=l.formatMessage(K.verificationFormLabel),t[79]=l,t[80]=Y);let X;t[81]!==me||t[82]!==l?(X=me?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(de,{content:l.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":l.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:me})]}):null,t[81]=me,t[82]=l,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==l||t[87]!==D||t[88]!==V?(Z=V&&D?(0,G.jsx)(Ae,{onSubmitted:R,onSuccess:Me,verificationId:D,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":l.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=l,t[87]=D,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=x(),me(),pe(),Se(),Ne(),C(),E(),T(),ye(),D(),S(),a(),m(),c(),p(),ce(),l(),W=t(b()),ie(),re(),G=_(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=v({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{re(),J=x(),k(),q(),w(),Y=_(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ae(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=g(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(A,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=oe(we)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-mc1qo4xd.js.map