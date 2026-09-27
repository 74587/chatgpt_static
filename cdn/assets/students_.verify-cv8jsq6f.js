import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{DL as n,EM as r,G$ as i,Jtt as a,L$ as o,R$ as s,T$ as c,TM as l,W$ as u,Wit as d,kL as f,n2 as p,qtt as m,r2 as ee,y$ as h}from"./4813494d-c3na6wu9gewlo57v.js";import{$ as g,Bn as _,En as v,Fn as y,Gt as te,Hn as ne,It as re,Kt as ie,Mt as ae,Un as oe,Vn as se,Wt as ce,zn as b}from"./2340486e-kfapbrw5efyhrjct.js";import{Djt as x,Dn as le,Ejt as ue,Fn as de,Nn as fe,Pn as pe,Tn as me,_2t as S,g2t as he}from"./conversation-small-o4rcbm7lx6docgg4.js";import{by as C,yy as ge}from"./30901919-tucbkrcv5egfxfkd.js";import{Dh as w,Th as _e,_h as ve,bh as ye,gh as be,vh as xe,xh as Se}from"./c2675c8c-kvqb1wkq8arc6ki7.js";import{n as T,t as Ce}from"./6105d6cc-n8oqznzdukfmj2dp.js";import{n as E,t as D}from"./9bfdcf20-flvls9tmmv83gsu2.js";import{a as we,d as O,f as Te,l as Ee,n as De,o as Oe,r as ke,t as k,u as Ae}from"./d4df9516-oqqpx2qu9di6se86.js";import{n as A,t as j}from"./759cd6d0-esp9xdorucsar5uk.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function je(e,t){try{let n=new URL(e);return n.origin!==L||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Me(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,_e),e}function Ne(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${Ie}${B}`}},L)}function Pe(e){"use forget";let t=(0,P.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=ee(),c=(0,F.useRef)(null),l=(0,F.useRef)(null),[u]=(0,F.useState)(N),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=je(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Me().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==L||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(R,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!M(n)||n.type!==`hook`||!M(n.hook)||!M(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,F.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(V.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,I.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(V.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==f||t[19]!==h?(g=(0,I.jsx)(`iframe`,{ref:c,allow:`camera ${L}`,className:`block min-h-[100px] w-full border-0`,onLoad:Fe,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=g):g=t[20],g}function Fe(e){Ne(e.currentTarget)}function N(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var P,F,I,L,R,z,Ie,B,V,H=e((()=>{P=v(),w(),p(),F=t(oe()),_(),I=ne(),L=`https://services.sheerid.com`,R=100,z=2e3,Ie=`
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
`,V=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function U(e){"use forget";let t=(0,Be.c)(8),{sheerIdProgramId:n}=e,i=s(),a=i?.id??null,o=(0,W.useRef)(a),c,l;t[0]===a?(c=t[1],l=t[2]):(c=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(k.clearModalError(),k.setIsLoading(!1))},l=[a],t[0]=a,t[1]=c,t[2]=l),r(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,W.useEffect)(Le,u);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==n||t[6]!==d?(f=(0,G.jsx)(ze,{currentAccount:i,sheerIdProgramId:n},d),t[4]=i,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function Le(){let e=Re;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Re(e){e.persisted&&window.location.reload()}function ze(e){"use forget";let t=(0,Be.c)(100),{currentAccount:n,sheerIdProgramId:s}=e,c=se(),l=re(),u=o(),p=f(),[m]=ce(),ee;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ee=a(),t[0]=ee):ee=t[0];let g=ee,_;t[1]===m?_=t[2]:(_=()=>{xe(m)},t[1]=m,t[2]=_);let v;t[3]!==n||t[4]!==m?(v=[m,n,g],t[3]=n,t[4]=m,t[5]=v):v=t[5],r(_,v);let te=(0,W.useRef)(!1),ne=(0,W.useRef)(!1),ie=(0,W.useRef)(!0),ae;t[6]===m?ae=t[7]:(ae=m.get(He),t[6]=m,t[7]=ae);let oe=ae,b;t[8]===m?b=t[9]:(b=pe(m),t[8]=m,t[9]=b);let x=b,de=`/students/2026#trigger_students-2026-faq-verification`,S;if(t[10]!==x||t[11]!==oe){let e=new URLSearchParams({campaign:_e});x!=null&&e.set(le,x),S=e.toString(),t[10]=x,t[11]=oe,t[12]=S}else S=t[12];let C=`/students/claim?${S}`,w;t[13]===p?.email?w=t[14]:(w=g&&(p?.email?.trim()||d()?.user?.email?.trim())||null,t[13]=p?.email,t[14]=w);let ve=w,T;t[15]!==C||t[16]!==s?(T={...Se,landingPath:C,sheerIdProgramId:s},t[15]=C,t[16]=s,t[17]=T):T=t[17];let E=T,D;t[18]!==n||t[19]!==E?(D=n!=null&&(Ae(n)||!n.isPersonalAccount()||E.blocksMobileStoreSubscribers&&he(n)),t[18]=n,t[19]=E,t[20]=D):D=t[20];let O=D,Ee=g&&n!=null&&!O,ke;t[21]===Ee?ke=t[22]:(ke={enabled:Ee,reportRefreshErrors:!0},t[21]=Ee,t[22]=ke);let k=Te(E,ke),A=k.name===`needs-verification`?k.verificationId??null:null,j=k.name===`needs-verification`?k.accountVerificationId??null:null,M=Oe(A,j,E,x),je,Me;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(je=()=>(ie.current=!0,()=>{ie.current=!1}),Me=[],t[23]=je,t[24]=Me):(je=t[23],Me=t[24]),(0,W.useEffect)(je,Me);let Ne,Fe;t[25]===C?(Ne=t[26],Fe=t[27]):(Ne=()=>{g||te.current||(te.current=!0,i({callbackUrl:be(C),fallbackScreenHint:`login`}))},Fe=[C,g],t[25]=C,t[26]=Ne,t[27]=Fe),(0,W.useEffect)(Ne,Fe);let N;t[28]!==u.isError||t[29]!==u.isFetching||t[30]!==u.isSuccess||t[31]!==C||t[32]!==n||t[33]!==k.name||t[34]!==O||t[35]!==l?(N=()=>{if(!g)return;let e=n==null&&!u.isFetching&&(u.isError||u.isSuccess),t=k.name===`coming-soon`||k.name===`error`||k.name===`verified`||k.name===`enrolled`;(e||O||t)&&l(C,{replace:!0})},t[28]=u.isError,t[29]=u.isFetching,t[30]=u.isSuccess,t[31]=C,t[32]=n,t[33]=k.name,t[34]=O,t[35]=l,t[36]=N):N=t[36];let P;t[37]!==u.isError||t[38]!==u.isFetching||t[39]!==u.isSuccess||t[40]!==C||t[41]!==n||t[42]!==k||t[43]!==O||t[44]!==l?(P=[u.isError,u.isFetching,u.isSuccess,C,n,k,O,g,l],t[37]=u.isError,t[38]=u.isFetching,t[39]=u.isSuccess,t[40]=C,t[41]=n,t[42]=k,t[43]=O,t[44]=l,t[45]=P):P=t[45],(0,W.useEffect)(N,P);let F,I;t[46]!==j||t[47]!==C||t[48]!==n||t[49]!==k.name||t[50]!==O||t[51]!==l||t[52]!==A||t[53]!==M?(F=()=>{!g||n==null||O||k.name!==`needs-verification`||A!=null&&j!=null||ne.current||(ne.current=!0,M().then(()=>{!ie.current||h()?.id!==n.id||we.getState().modalErrorMessage==null||l(C,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[j,C,n,k.name,O,g,l,A,M],t[46]=j,t[47]=C,t[48]=n,t[49]=k.name,t[50]=O,t[51]=l,t[52]=A,t[53]=M,t[54]=F,t[55]=I):(F=t[54],I=t[55]),(0,W.useEffect)(F,I);let L;t[56]===n?L=t[57]:(L=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||ye(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[56]=n,t[57]=L);let R=L,z;t[58]!==C||t[59]!==l?(z=()=>{l(fe(C,me),{replace:!0})},t[58]=C,t[59]=l,t[60]=z):z=t[60];let Ie=z,B;t[61]!==j||t[62]!==C||t[63]!==n||t[64]!==O||t[65]!==s||t[66]!==A?(B=g&&n!=null&&A&&j&&!O?De(s,`${window.location.origin}${fe(C,me)}`,A,j):null,t[61]=j,t[62]=C,t[63]=n,t[64]=O,t[65]=s,t[66]=A,t[67]=B):B=t[67];let V=B,H;t[68]===c?H=t[69]:(H=c.formatMessage(K.artworkAlt),t[68]=c,t[69]=H);let U;t[70]===H?U=t[71]:(U=(0,G.jsx)(Ce,{altText:H,assetUrl:Ve,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[70]=H,t[71]=U);let Le;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[72]=Le):Le=t[72];let Re;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Re=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Le,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[73]=Re):Re=t[73];let ze;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[74]=ze):ze=t[74];let Ue;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[75]=Ue):Ue=t[75];let q;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,G.jsx)(y,{...K.verificationHelp}),t[76]=q):q=t[76];let J;t[77]===de?J=t[78]:(J=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Re,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ze,Ue,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:de,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[77]=de,t[78]=J);let Y;t[79]!==U||t[80]!==J?(Y=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,J]}),t[79]=U,t[80]=J,t[81]=Y):Y=t[81];let X;t[82]===c?X=t[83]:(X=c.formatMessage(K.verificationFormLabel),t[82]=c,t[83]=X);let Z;t[84]!==ve||t[85]!==c?(Z=ve?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(ue,{content:c.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":c.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ge,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:ve})]}):null,t[84]=ve,t[85]=c,t[86]=Z):Z=t[86];let Q;t[87]!==R||t[88]!==Ie||t[89]!==c||t[90]!==A||t[91]!==V?(Q=V&&A?(0,G.jsx)(Pe,{onSubmitted:R,onSuccess:Ie,verificationId:A,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[87]=R,t[88]=Ie,t[89]=c,t[90]=A,t[91]=V,t[92]=Q):Q=t[92];let $;t[93]!==X||t[94]!==Z||t[95]!==Q?($=(0,G.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[93]=X,t[94]=Z,t[95]=Q,t[96]=$):$=t[96];let We;return t[97]!==Y||t[98]!==$?(We=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[97]=Y,t[98]=$,t[99]=We):We=t[99],We}var Be,W,G,Ve,He,K,Ue=e((()=>{Be=v(),C(),x(),T(),H(),w(),Ee(),O(),ve(),ke(),de(),c(),u(),n(),m(),S(),l(),W=t(oe()),_(),g(),G=ne(),Ve=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,He=`students_2026_preview`,K=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),q,J,Y,X,Z,Q,$=e((()=>{g(),q=v(),A(),Ue(),E(),J=ne(),Y={hasRouteMeta:!0},X=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Z=te(function(){"use forget";let e=(0,q.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ae(),i;e[0]===r?i=e[1]:(i=(0,J.jsx)(U,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,J.jsx)(j,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Q=ie(D)}));e((()=>{$()}))();export{Q as ErrorBoundary,Z as default,Y as handle,X as meta};
//# sourceMappingURL=students_.verify-cv8jsq6f.js.map