import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{HP as n,Hk as r,JW as i,RK as a,U7 as o,Uk as s,W7 as c,WP as l,_tt as u,bG as d,eG as f,fG as p,pG as m,yG as h,zK as ee}from"./4813494d-oyru480whcw6vje0.js";import{At as g,Bn as _,Ht as te,Ln as v,Nn as y,Pt as ne,Q as re,Rn as ie,Ut as ae,Vn as b,Wt as oe,wn as x,zn as se}from"./2340486e-b3t78qt0psmq9d8c.js";import{Jkt as ce,On as le,T1t as S,bn as ue,kn as de,qkt as fe,w1t as pe}from"./conversation-small-jkad2z0lbny7lfwf.js";import{gy as C,hy as me}from"./30901919-lrz687ksiq34igvw.js";import{Am as he,Im as ge,Mm as _e,Om as ve,Rm as w,jm as ye,km as T}from"./c2675c8c-j6tps9kmso2gnw3y.js";import{n as E,t as be}from"./6105d6cc-fb08szt05nt75kxh.js";import{n as D,t as xe}from"./9bfdcf20-mwv3fftbrv9wh9qb.js";import{a as Se,d as O,f as Ce,l as k,n as we,o as Te,r as A,t as j,u as Ee}from"./d4df9516-hsha8alaz5lw6exg.js";import{n as De,t as Oe}from"./759cd6d0-hbdcegi432q8rz0m.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function ke(e,t){try{let n=new URL(e);return n.origin!==L||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Ae(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ge),e}function je(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${B}${V}`}},L)}function Me(e){"use forget";let t=(0,P.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=ee(),c=(0,F.useRef)(null),l=(0,F.useRef)(null),[u]=(0,F.useState)(N),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=ke(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Ae().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==L||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(R,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!M(n)||n.type!==`hook`||!M(n.hook)||!M(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,F.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(H.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,I.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(H.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==f||t[19]!==h?(g=(0,I.jsx)(`iframe`,{ref:c,allow:`camera ${L}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ne,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=g):g=t[20],g}function Ne(e){je(e.currentTarget)}function N(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var P,F,I,L,R,z,B,V,H,Pe=e((()=>{P=x(),w(),a(),F=t(b()),ie(),I=_(),L=`https://services.sheerid.com`,R=100,z=2e3,B=`
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
`,V=`
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
`,H=v({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Fe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=m(),i=r?.id??null,a=(0,W.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(j.clearModalError(),j.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),s(o,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Ie,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(U,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Ie(){let e=Le;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Le(e){e.persisted&&window.location.reload()}function U(e){"use forget";let t=(0,Re.c)(97),{currentAccount:n,sheerIdProgramId:r}=e,a=se(),o=ne(),f=p(),m=l(),[h]=te(),ee;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ee=c(),t[0]=ee):ee=t[0];let g=ee,_;t[1]===h?_=t[2]:(_=()=>{he(h)},t[1]=h,t[2]=_);let v;t[3]!==n||t[4]!==h?(v=[h,n,g],t[3]=n,t[4]=h,t[5]=v):v=t[5],s(_,v);let re=(0,W.useRef)(!1),ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!0),b;t[6]===h?b=t[7]:(b=h.get(Be),t[6]=h,t[7]=b);let oe=b,x=`/students/2026#trigger_students-2026-faq-verification`,ce;t[8]===oe?ce=t[9]:(ce=new URLSearchParams({campaign:ge}).toString(),t[8]=oe,t[9]=ce);let S=`/students/claim?${ce}`,de;t[10]===m?.email?de=t[11]:(de=g&&(m?.email?.trim()||u()?.user?.email?.trim())||null,t[10]=m?.email,t[11]=de);let C=de,w;t[12]!==S||t[13]!==r?(w={..._e,landingPath:S,sheerIdProgramId:r},t[12]=S,t[13]=r,t[14]=w):w=t[14];let T=w,E;t[15]!==n||t[16]!==T?(E=n!=null&&(Ee(n)||!n.isPersonalAccount()||T.blocksMobileStoreSubscribers&&pe(n)),t[15]=n,t[16]=T,t[17]=E):E=t[17];let D=E,xe=g&&n!=null&&!D,O;t[18]===xe?O=t[19]:(O={enabled:xe,reportRefreshErrors:!0},t[18]=xe,t[19]=O);let k=Ce(T,O),A=k.name===`needs-verification`?k.verificationId??null:null,j=k.name===`needs-verification`?k.accountVerificationId??null:null,De=Te(A,j,T),Oe,M;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=()=>(ae.current=!0,()=>{ae.current=!1}),M=[],t[20]=Oe,t[21]=M):(Oe=t[20],M=t[21]),(0,W.useEffect)(Oe,M);let ke,Ae;t[22]===S?(ke=t[23],Ae=t[24]):(ke=()=>{g||re.current||(re.current=!0,d({callbackUrl:ve(S),fallbackScreenHint:`login`}))},Ae=[S,g],t[22]=S,t[23]=ke,t[24]=Ae),(0,W.useEffect)(ke,Ae);let je;t[25]!==f.isError||t[26]!==f.isFetching||t[27]!==f.isSuccess||t[28]!==S||t[29]!==n||t[30]!==k.name||t[31]!==D||t[32]!==o?(je=()=>{if(!g)return;let e=n==null&&!f.isFetching&&(f.isError||f.isSuccess),t=k.name===`coming-soon`||k.name===`error`||k.name===`verified`||k.name===`enrolled`;(e||D||t)&&o(S,{replace:!0})},t[25]=f.isError,t[26]=f.isFetching,t[27]=f.isSuccess,t[28]=S,t[29]=n,t[30]=k.name,t[31]=D,t[32]=o,t[33]=je):je=t[33];let Ne;t[34]!==f.isError||t[35]!==f.isFetching||t[36]!==f.isSuccess||t[37]!==S||t[38]!==n||t[39]!==k||t[40]!==D||t[41]!==o?(Ne=[f.isError,f.isFetching,f.isSuccess,S,n,k,D,g,o],t[34]=f.isError,t[35]=f.isFetching,t[36]=f.isSuccess,t[37]=S,t[38]=n,t[39]=k,t[40]=D,t[41]=o,t[42]=Ne):Ne=t[42],(0,W.useEffect)(je,Ne);let N,P;t[43]!==j||t[44]!==S||t[45]!==n||t[46]!==k.name||t[47]!==D||t[48]!==o||t[49]!==A||t[50]!==De?(N=()=>{!g||n==null||D||k.name!==`needs-verification`||A!=null&&j!=null||ie.current||(ie.current=!0,De().then(()=>{!ae.current||i()?.id!==n.id||Se.getState().modalErrorMessage==null||o(S,{replace:!0,state:{students2026VerificationError:!0}})}))},P=[j,S,n,k.name,D,g,o,A,De],t[43]=j,t[44]=S,t[45]=n,t[46]=k.name,t[47]=D,t[48]=o,t[49]=A,t[50]=De,t[51]=N,t[52]=P):(N=t[51],P=t[52]),(0,W.useEffect)(N,P);let F;t[53]===n?F=t[54]:(F=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||ye(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[53]=n,t[54]=F);let I=F,L;t[55]!==S||t[56]!==o?(L=()=>{o(le(S,ue),{replace:!0})},t[55]=S,t[56]=o,t[57]=L):L=t[57];let R=L,z;t[58]!==j||t[59]!==S||t[60]!==n||t[61]!==D||t[62]!==r||t[63]!==A?(z=g&&n!=null&&A&&j&&!D?we(r,`${window.location.origin}${le(S,ue)}`,A,j):null,t[58]=j,t[59]=S,t[60]=n,t[61]=D,t[62]=r,t[63]=A,t[64]=z):z=t[64];let B=z,V;t[65]===a?V=t[66]:(V=a.formatMessage(K.artworkAlt),t[65]=a,t[66]=V);let H;t[67]===V?H=t[68]:(H=(0,G.jsx)(be,{altText:V,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=V,t[68]=H);let Pe;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[69]=Pe):Pe=t[69];let Fe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Pe,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[70]=Fe):Fe=t[70];let Ie;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[71]=Ie):Ie=t[71];let Le;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[72]=Le):Le=t[72];let U;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,G.jsx)(y,{...K.verificationHelp}),t[73]=U):U=t[73];let q;t[74]===x?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Fe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Ie,Le,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:x,rel:`noopener noreferrer`,target:`_blank`,children:U})]})]}),t[74]=x,t[75]=q);let J;t[76]!==H||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[H,q]}),t[76]=H,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===a?Y=t[80]:(Y=a.formatMessage(K.verificationFormLabel),t[79]=a,t[80]=Y);let X;t[81]!==C||t[82]!==a?(X=C?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(fe,{content:a.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":a.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:C})]}):null,t[81]=C,t[82]=a,t[83]=X):X=t[83];let Z;t[84]!==I||t[85]!==R||t[86]!==a||t[87]!==A||t[88]!==B?(Z=B&&A?(0,G.jsx)(Me,{onSubmitted:I,onSuccess:R,verificationId:A,verificationUrl:B}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=I,t[85]=R,t[86]=a,t[87]=A,t[88]=B,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=x(),C(),ce(),E(),Pe(),w(),k(),O(),T(),A(),de(),f(),h(),n(),o(),S(),r(),W=t(b()),ie(),re(),G=_(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=v({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{re(),J=x(),De(),q(),D(),Y=_(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ae(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=g(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Fe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(Oe,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=oe(xe)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-hqqqj6ze.js.map