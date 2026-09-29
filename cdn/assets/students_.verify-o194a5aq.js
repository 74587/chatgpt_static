import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$M as n,$tt as r,E$ as i,FL as a,G$ as o,M$ as s,NL as c,Q$ as l,W$ as u,Z$ as d,eN as f,ent as ee,hat as te,l2 as p,u2 as ne}from"./4813494d-ob668aqd7g43r9r2.js";import{$ as m,Bn as h,En as g,Fn as _,Gt as re,Hn as v,It as ie,Kt as ae,Mt as y,Un as oe,Vn as se,Wt as ce,zn as b}from"./2340486e-hoctnyuhtrgq7c13.js";import{Dn as le,Fn as x,Ljt as ue,Nn as de,O2t as fe,Pn as pe,Rjt as me,Tn as he,k2t as S}from"./conversation-small-mov650aiz6q2hyaz.js";import{by as C,yy as ge}from"./30901919-oq5075vsf0vwphhp.js";import{Dh as w,Th as _e,_h as T,bh as ve,gh as ye,vh as be,xh as xe}from"./c2675c8c-ikmenga0sl1oltv8.js";import{n as Se,t as Ce}from"./6105d6cc-cle8t763d89fd90w.js";import{n as E,t as we}from"./9bfdcf20-m22p7ltssocfn1xa.js";import{a as Te,d as D,f as Ee,l as De,n as Oe,o as ke,r as Ae,t as O,u as je}from"./d4df9516-kqc1ps8uatfjbgbi.js";import{n as k,t as A}from"./759cd6d0-u3fl6hx9k1yannj1.js";function j(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Me(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Ne(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,_e),e}function M(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${Ie}${B}`}},R)}function Pe(e){"use forget";let t=(0,F.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=se(),s=ne(),c=(0,I.useRef)(null),l=(0,I.useRef)(null),[u]=(0,I.useState)(P),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=Me(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Ne().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,ee,te;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!j(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(j(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(Fe,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!j(n)||n.type!==`hook`||!j(n.hook)||!j(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=te):(ee=t[10],te=t[11]),(0,I.useEffect)(ee,te),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(V.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let p;t[16]===o?p=t[17]:(p=o.formatMessage(V.verificationTitle),t[16]=o,t[17]=p);let m;return t[18]!==f||t[19]!==p?(m=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:N,referrerPolicy:`no-referrer`,src:f,title:p}),t[18]=f,t[19]=p,t[20]=m):m=t[20],m}function N(e){M(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,Fe,z,Ie,B,V,H=e((()=>{F=g(),w(),p(),I=t(oe()),h(),L=v(),R=`https://services.sheerid.com`,Fe=100,z=2e3,Ie=`
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
`,V=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function U(e){"use forget";let t=(0,Be.c)(8),{sheerIdProgramId:n}=e,r=o(),i=r?.id??null,a=(0,W.useRef)(i),s,c;t[0]===i?(s=t[1],c=t[2]):(s=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(O.clearModalError(),O.setIsLoading(!1))},c=[i],t[0]=i,t[1]=s,t[2]=c),f(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Le,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(ze,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Le(){let e=Re;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Re(e){e.persisted&&window.location.reload()}function ze(e){"use forget";let t=(0,Be.c)(100),{currentAccount:n,sheerIdProgramId:r}=e,o=se(),s=ie(),c=u(),d=a(),[p]=ce(),ne;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ne=ee(),t[0]=ne):ne=t[0];let m=ne,h;t[1]===p?h=t[2]:(h=()=>{be(p)},t[1]=p,t[2]=h);let g;t[3]!==n||t[4]!==p?(g=[p,n,m],t[3]=n,t[4]=p,t[5]=g):g=t[5],f(h,g);let re=(0,W.useRef)(!1),v=(0,W.useRef)(!1),ae=(0,W.useRef)(!0),y;t[6]===p?y=t[7]:(y=p.get(He),t[6]=p,t[7]=y);let oe=y,b;t[8]===p?b=t[9]:(b=pe(p),t[8]=p,t[9]=b);let x=b,me=`/students/2026#trigger_students-2026-faq-verification`,S;if(t[10]!==x||t[11]!==oe){let e=new URLSearchParams({campaign:_e});x!=null&&e.set(le,x),S=e.toString(),t[10]=x,t[11]=oe,t[12]=S}else S=t[12];let C=`/students/claim?${S}`,w;t[13]===d?.email?w=t[14]:(w=m&&(d?.email?.trim()||te()?.user?.email?.trim())||null,t[13]=d?.email,t[14]=w);let T=w,Se;t[15]!==C||t[16]!==r?(Se={...xe,landingPath:C,sheerIdProgramId:r},t[15]=C,t[16]=r,t[17]=Se):Se=t[17];let E=Se,we;t[18]!==n||t[19]!==E?(we=n!=null&&(je(n)||!n.isPersonalAccount()||E.blocksMobileStoreSubscribers&&fe(n)),t[18]=n,t[19]=E,t[20]=we):we=t[20];let D=we,De=m&&n!=null&&!D,Ae;t[21]===De?Ae=t[22]:(Ae={enabled:De,reportRefreshErrors:!0},t[21]=De,t[22]=Ae);let O=Ee(E,Ae),k=O.name===`needs-verification`?O.verificationId??null:null,A=O.name===`needs-verification`?O.accountVerificationId??null:null,j=ke(k,A,E,x),Me,Ne;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(Me=()=>(ae.current=!0,()=>{ae.current=!1}),Ne=[],t[23]=Me,t[24]=Ne):(Me=t[23],Ne=t[24]),(0,W.useEffect)(Me,Ne);let M,N;t[25]===C?(M=t[26],N=t[27]):(M=()=>{m||re.current||(re.current=!0,l({callbackUrl:ye(C),fallbackScreenHint:`login`}))},N=[C,m],t[25]=C,t[26]=M,t[27]=N),(0,W.useEffect)(M,N);let P;t[28]!==c.isError||t[29]!==c.isFetching||t[30]!==c.isSuccess||t[31]!==C||t[32]!==n||t[33]!==O.name||t[34]!==D||t[35]!==s?(P=()=>{if(!m)return;let e=n==null&&!c.isFetching&&(c.isError||c.isSuccess),t=O.name===`coming-soon`||O.name===`error`||O.name===`verified`||O.name===`enrolled`;(e||D||t)&&s(C,{replace:!0})},t[28]=c.isError,t[29]=c.isFetching,t[30]=c.isSuccess,t[31]=C,t[32]=n,t[33]=O.name,t[34]=D,t[35]=s,t[36]=P):P=t[36];let F;t[37]!==c.isError||t[38]!==c.isFetching||t[39]!==c.isSuccess||t[40]!==C||t[41]!==n||t[42]!==O||t[43]!==D||t[44]!==s?(F=[c.isError,c.isFetching,c.isSuccess,C,n,O,D,m,s],t[37]=c.isError,t[38]=c.isFetching,t[39]=c.isSuccess,t[40]=C,t[41]=n,t[42]=O,t[43]=D,t[44]=s,t[45]=F):F=t[45],(0,W.useEffect)(P,F);let I,L;t[46]!==A||t[47]!==C||t[48]!==n||t[49]!==O.name||t[50]!==D||t[51]!==s||t[52]!==k||t[53]!==j?(I=()=>{!m||n==null||D||O.name!==`needs-verification`||k!=null&&A!=null||v.current||(v.current=!0,j().then(()=>{!ae.current||i()?.id!==n.id||Te.getState().modalErrorMessage==null||s(C,{replace:!0,state:{students2026VerificationError:!0}})}))},L=[A,C,n,O.name,D,m,s,k,j],t[46]=A,t[47]=C,t[48]=n,t[49]=O.name,t[50]=D,t[51]=s,t[52]=k,t[53]=j,t[54]=I,t[55]=L):(I=t[54],L=t[55]),(0,W.useEffect)(I,L);let R;t[56]===n?R=t[57]:(R=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[56]=n,t[57]=R);let Fe=R,z;t[58]!==C||t[59]!==s?(z=()=>{s(de(C,he),{replace:!0})},t[58]=C,t[59]=s,t[60]=z):z=t[60];let Ie=z,B;t[61]!==A||t[62]!==C||t[63]!==n||t[64]!==D||t[65]!==r||t[66]!==k?(B=m&&n!=null&&k&&A&&!D?Oe(r,`${window.location.origin}${de(C,he)}`,k,A):null,t[61]=A,t[62]=C,t[63]=n,t[64]=D,t[65]=r,t[66]=k,t[67]=B):B=t[67];let V=B,H;t[68]===o?H=t[69]:(H=o.formatMessage(K.artworkAlt),t[68]=o,t[69]=H);let U;t[70]===H?U=t[71]:(U=(0,G.jsx)(Ce,{altText:H,assetUrl:Ve,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[70]=H,t[71]=U);let Le;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.title})}),t[72]=Le):Le=t[72];let Re;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Re=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Le,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopTitle})})]}),t[73]=Re):Re=t[73];let ze;t[74]===Symbol.for(`react.memo_cache_sentinel`)?(ze=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.description})}),t[74]=ze):ze=t[74];let Ue;t[75]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopDescription})}),t[75]=Ue):Ue=t[75];let q;t[76]===Symbol.for(`react.memo_cache_sentinel`)?(q=(0,G.jsx)(_,{...K.verificationHelp}),t[76]=q):q=t[76];let J;t[77]===me?J=t[78]:(J=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Re,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ze,Ue,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:me,rel:`noopener noreferrer`,target:`_blank`,children:q})]})]}),t[77]=me,t[78]=J);let Y;t[79]!==U||t[80]!==J?(Y=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,J]}),t[79]=U,t[80]=J,t[81]=Y):Y=t[81];let X;t[82]===o?X=t[83]:(X=o.formatMessage(K.verificationFormLabel),t[82]=o,t[83]=X);let Z;t[84]!==T||t[85]!==o?(Z=T?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(_,{...K.accountLabel}),(0,G.jsx)(ue,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ge,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:T})]}):null,t[84]=T,t[85]=o,t[86]=Z):Z=t[86];let Q;t[87]!==Fe||t[88]!==Ie||t[89]!==o||t[90]!==k||t[91]!==V?(Q=V&&k?(0,G.jsx)(Pe,{onSubmitted:Fe,onSuccess:Ie,verificationId:k,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[87]=Fe,t[88]=Ie,t[89]=o,t[90]=k,t[91]=V,t[92]=Q):Q=t[92];let $;t[93]!==X||t[94]!==Z||t[95]!==Q?($=(0,G.jsxs)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[93]=X,t[94]=Z,t[95]=Q,t[96]=$):$=t[96];let We;return t[97]!==Y||t[98]!==$?(We=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,$]})}),t[97]=Y,t[98]=$,t[99]=We):We=t[99],We}var Be,W,G,Ve,He,K,Ue=e((()=>{Be=g(),C(),me(),Se(),H(),w(),De(),D(),T(),Ae(),x(),s(),d(),c(),r(),S(),n(),W=t(oe()),h(),m(),G=v(),Ve=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,He=`students_2026_preview`,K=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),q,J,Y,X,Z,Q,$=e((()=>{m(),q=g(),k(),Ue(),E(),J=v(),Y={hasRouteMeta:!0},X=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Z=re(function(){"use forget";let e=(0,q.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=y(),i;e[0]===r?i=e[1]:(i=(0,J.jsx)(U,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,J.jsx)(A,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Q=ae(we)}));e((()=>{$()}))();export{Q as ErrorBoundary,Z as default,Y as handle,X as meta};
//# sourceMappingURL=students_.verify-o194a5aq.js.map