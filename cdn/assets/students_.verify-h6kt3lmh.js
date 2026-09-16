import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{AN as n,H9 as r,Jq as i,Mz as a,Nq as o,Pz as s,Rq as c,V9 as l,Yq as u,bY as d,kN as f,nJ as ee,pnt as te,tJ as p,xY as ne}from"./4813494d-iq2rfhyqu3c4bw81.js";import{Bt as re,Fn as m,Ht as h,In as g,Ln as ie,Mt as ae,Ot as oe,Q as se,Rn as _,Sn as v,Vt as ce,jn as y,zn as b}from"./2340486e-dyt4epctwx2pn2sj.js";import{K7t as le,Lp as ue,TZt as de,Up as x,Vp as fe,e9t as pe,fDt as me,pDt as he,t9t as S,wZt as ge}from"./conversation-small-gp6pwihpozdnmvpo.js";import{Sy as C,xy as _e}from"./30901919-b5sdumc5lk6y4sbn.js";import{Gf as ve,Hf as ye,Uf as w,Wf as be}from"./c2675c8c-fdi1xs1m0nyxdbiw.js";import{n as xe,t as Se}from"./6105d6cc-mw2r98apw0ideeiy.js";import{n as T,t as Ce}from"./9bfdcf20-dq6ln638z86aqxc0.js";import{a as we,d as Te,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-kuqc02zmkno0dfub.js";import{n as k,t as A}from"./759cd6d0-o7bojbwibbzivi2g.js";function j(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function M(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function N(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,fe),e}function P(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function Ae(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ie(),s=ne(),c=(0,L.useRef)(null),l=(0,L.useRef)(null),[u]=(0,L.useState)(je),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=M(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,N().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,ee,te;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!j(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(j(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!j(n)||n.type!==`hook`||!j(n.hook)||!j(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=te):(ee=t[10],te=t[11]),(0,L.useEffect)(ee,te),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let p;t[16]===o?p=t[17]:(p=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=p);let re;return t[18]!==f||t[19]!==p?(re=(0,R.jsx)(`iframe`,{ref:c,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:F,referrerPolicy:`no-referrer`,src:f,title:p}),t[18]=f,t[19]=p,t[20]=re):re=t[20],re}function F(e){P(e.currentTarget)}function je(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=v(),x(),d(),L=t(b()),g(),R=_(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=m({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:r}=e,i=u(),a=i?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(O.clearModalError(),O.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),n(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==r||t[6]!==d?(f=(0,G.jsx)(Le,{currentAccount:i,sheerIdProgramId:r},d),t[4]=i,t[5]=r,t[6]=d,t[7]=f):f=t[7],f}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:a,sheerIdProgramId:c}=e,l=ie(),u=ae(),d=i(),f=s(),[p]=re(),ne;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ne=r(),t[0]=ne):ne=t[0];let m=ne,h;t[1]===p?h=t[2]:(h=()=>{be(p)},t[1]=p,t[2]=h);let g;t[3]!==a||t[4]!==p?(g=[p,a,m],t[3]=a,t[4]=p,t[5]=g):g=t[5],n(h,g);let oe=(0,W.useRef)(!1),se=(0,W.useRef)(!1),_=(0,W.useRef)(!0),v;t[6]===p?v=t[7]:(v=p.get(Be),t[6]=p,t[7]=v);let ce=v,b=`/students/2026#trigger_students-2026-faq-verification`,de;t[8]===ce?de=t[9]:(de=new URLSearchParams({campaign:fe}).toString(),t[8]=ce,t[9]=de);let x=`/students/claim?${de}`,he;t[10]===f?.email?he=t[11]:(he=m&&(f?.email?.trim()||te()?.user?.email?.trim())||null,t[10]=f?.email,t[11]=he);let S=he,C;t[12]!==x||t[13]!==c?(C={...ue,landingPath:x,sheerIdProgramId:c},t[12]=x,t[13]=c,t[14]=C):C=t[14];let w=C,xe;t[15]!==a||t[16]!==w?(xe=a!=null&&(ke(a)||!a.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ge(a)),t[15]=a,t[16]=w,t[17]=xe):xe=t[17];let T=xe,Ce=m&&a!=null&&!T,Te;t[18]===Ce?Te=t[19]:(Te={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=Te);let E=Ee(w,Te),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,k=Oe(D,O,w),A,j;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>(_.current=!0,()=>{_.current=!1}),j=[],t[20]=A,t[21]=j):(A=t[20],j=t[21]),(0,W.useEffect)(A,j);let M,N;t[22]===x?(M=t[23],N=t[24]):(M=()=>{m||oe.current||(oe.current=!0,ee({callbackUrl:ye(x),fallbackScreenHint:`login`}))},N=[x,m],t[22]=x,t[23]=M,t[24]=N),(0,W.useEffect)(M,N);let P;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==x||t[29]!==a||t[30]!==E.name||t[31]!==T||t[32]!==u?(P=()=>{if(!m)return;let e=a==null&&!d.isFetching&&(d.isError||d.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&u(x,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=x,t[29]=a,t[30]=E.name,t[31]=T,t[32]=u,t[33]=P):P=t[33];let F;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==x||t[38]!==a||t[39]!==E||t[40]!==T||t[41]!==u?(F=[d.isError,d.isFetching,d.isSuccess,x,a,E,T,m,u],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=x,t[38]=a,t[39]=E,t[40]=T,t[41]=u,t[42]=F):F=t[42],(0,W.useEffect)(P,F);let je,I;t[43]!==O||t[44]!==x||t[45]!==a||t[46]!==E.name||t[47]!==T||t[48]!==u||t[49]!==D||t[50]!==k?(je=()=>{!m||a==null||T||E.name!==`needs-verification`||D!=null&&O!=null||se.current||(se.current=!0,k().then(()=>{!_.current||o()?.id!==a.id||we.getState().modalErrorMessage==null||u(x,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[O,x,a,E.name,T,m,u,D,k],t[43]=O,t[44]=x,t[45]=a,t[46]=E.name,t[47]=T,t[48]=u,t[49]=D,t[50]=k,t[51]=je,t[52]=I):(je=t[51],I=t[52]),(0,W.useEffect)(je,I);let L;t[53]===a?L=t[54]:(L=()=>{let e=a?.normalizedAccountUserId;a==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:a.id,accountUserId:e}})},t[53]=a,t[54]=L);let R=L,z;t[55]!==x||t[56]!==u?(z=()=>{u(pe(x,le),{replace:!0})},t[55]=x,t[56]=u,t[57]=z):z=t[57];let Me=z,B;t[58]!==O||t[59]!==x||t[60]!==a||t[61]!==T||t[62]!==c||t[63]!==D?(B=m&&a!=null&&D&&O&&!T?De(c,`${window.location.origin}${pe(x,le)}`,D,O):null,t[58]=O,t[59]=x,t[60]=a,t[61]=T,t[62]=c,t[63]=D,t[64]=B):B=t[64];let V=B,H;t[65]===l?H=t[66]:(H=l.formatMessage(K.artworkAlt),t[65]=l,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(y,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(y,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(y,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===b?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:b,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=b,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===l?Y=t[80]:(Y=l.formatMessage(K.verificationFormLabel),t[79]=l,t[80]=Y);let X;t[81]!==S||t[82]!==l?(X=S?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(y,{...K.accountLabel}),(0,G.jsx)(me,{content:l.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":l.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(_e,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:S})]}):null,t[81]=S,t[82]=l,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==l||t[87]!==D||t[88]!==V?(Z=V&&D?(0,G.jsx)(Ae,{onSubmitted:R,onSuccess:Me,verificationId:D,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":l.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=l,t[87]=D,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=v(),C(),he(),xe(),Ne(),x(),E(),Te(),w(),D(),S(),c(),p(),a(),l(),de(),f(),W=t(b()),g(),se(),G=_(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=m({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{se(),J=v(),k(),q(),T(),Y=_(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ce(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=oe(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(A,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=h(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-h6kt3lmh.js.map