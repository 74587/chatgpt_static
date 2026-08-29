import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{B0 as n,M_ as r,QW as i,Sz as a,Tz as o,V0 as s,bG as c,cq as l,fG as u,j3 as d,j_ as f,lq as ee,pG as p,rG as m,yG as h}from"./4813494d-fgngepol4qp0a9cb.js";import{Bt as g,Cn as te,Dt as ne,Sn as _,Tn as v,Vt as re,Z as ie,_n as y,jt as ae,tn as b,wn as x,xn as S,zt as oe}from"./2340486e-m6nxarr6ck977yif.js";import{Sp as se,UBt as ce,WBt as C,an as le,hvt as ue,mn as w,mvt as de,pn as fe,vp as pe,wp as T}from"./conversation-small-njixldza2ggshtnq.js";import{by as me,xy as E}from"./30901919-mokobba84wx8eedp.js";import{n as he,t as ge}from"./6105d6cc-ovyhzzrj8birdb58.js";import{n as _e,t as D}from"./9bfdcf20-eb74fgl9v17venaj.js";import{a as ve,l as O,n as ye,o as be,r as k,t as A,u as xe}from"./d4df9516-ipw8ycurasrmrw9u.js";import{a as Se,i as j}from"./1dd38b87-gmw7t9a3251y70l1.js";import{n as M,t as N}from"./759cd6d0-pbg188a4buf7etv6.js";function P(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function F(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Ce(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,se),e}function we(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function Te(e){"use forget";let t=(0,Oe.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=te(),s=ee(),c=(0,I.useRef)(null),l=(0,I.useRef)(null),[u]=(0,I.useState)(De),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=F(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Ce().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!P(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(P(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!P(n)||n.type!==`hook`||!P(n.hook)||!P(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,I.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==f||t[19]!==h?(g=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ee,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=g):g=t[20],g}function Ee(e){we(e.currentTarget)}function De(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var Oe,I,L,R,z,B,V,H,U,ke=e((()=>{Oe=b(),T(),l(),I=t(v()),_(),L=x(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=S({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ae(e){"use forget";let t=(0,Me.c)(8),{sheerIdProgramId:n}=e,i=p(),a=i?.id??null,o=(0,K.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(A.clearModalError(),A.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),r(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,K.useEffect)(je,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==n||t[6]!==u?(d=(0,q.jsx)(G,{currentAccount:i,sheerIdProgramId:n},u),t[4]=i,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function je(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function G(e){"use forget";let t=(0,Me.c)(92),{currentAccount:n,sheerIdProgramId:r}=e,a=te(),l=ae(),f=u(),ee=o(),[p]=oe(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=s(),t[0]=m):m=t[0];let h=m,g=(0,K.useRef)(!1),ne=(0,K.useRef)(!1),_=(0,K.useRef)(!0),v;t[1]===p?v=t[2]:(v=p.get(Pe),t[1]=p,t[2]=v);let re=v,ie=`/students/2026#trigger_students-2026-faq-verification`,b;t[3]===re?b=t[4]:(b=new URLSearchParams({campaign:se}).toString(),t[3]=re,t[4]=b);let x=`/students/claim?${b}`,S;t[5]===ee?.email?S=t[6]:(S=h&&(ee?.email?.trim()||d()?.user?.email?.trim())||null,t[5]=ee?.email,t[6]=S);let C=S,ue;t[7]!==x||t[8]!==r?(ue={...pe,landingPath:x,sheerIdProgramId:r},t[7]=x,t[8]=r,t[9]=ue):ue=t[9];let w=ue,T;t[10]!==n||t[11]!==w?(T=n!=null&&(!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ce(n)),t[10]=n,t[11]=w,t[12]=T):T=t[12];let E=T,he=h&&n!=null&&!E,_e;t[13]===he?_e=t[14]:(_e={enabled:he,reportRefreshErrors:!0},t[13]=he,t[14]=_e);let D=xe(w,_e),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=be(O,k,w),j,M;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(M=()=>(_.current=!0,()=>{_.current=!1}),j=[],t[15]=j,t[16]=M):(j=t[15],M=t[16]),(0,K.useEffect)(M,j);let N,P;t[17]===x?(N=t[18],P=t[19]):(N=()=>{h||g.current||(g.current=!0,c({callbackUrl:x,fallbackScreenHint:`login`}))},P=[x,h],t[17]=x,t[18]=N,t[19]=P),(0,K.useEffect)(N,P);let F;t[20]!==f.isError||t[21]!==f.isFetching||t[22]!==f.isSuccess||t[23]!==x||t[24]!==n||t[25]!==D.name||t[26]!==E||t[27]!==l?(F=()=>{if(!h)return;let e=n==null&&!f.isFetching&&(f.isError||f.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||E||t)&&l(x,{replace:!0})},t[20]=f.isError,t[21]=f.isFetching,t[22]=f.isSuccess,t[23]=x,t[24]=n,t[25]=D.name,t[26]=E,t[27]=l,t[28]=F):F=t[28];let Ce;t[29]!==f.isError||t[30]!==f.isFetching||t[31]!==f.isSuccess||t[32]!==x||t[33]!==n||t[34]!==D||t[35]!==E||t[36]!==l?(Ce=[f.isError,f.isFetching,f.isSuccess,x,n,D,E,h,l],t[29]=f.isError,t[30]=f.isFetching,t[31]=f.isSuccess,t[32]=x,t[33]=n,t[34]=D,t[35]=E,t[36]=l,t[37]=Ce):Ce=t[37],(0,K.useEffect)(F,Ce);let we,Ee;t[38]!==k||t[39]!==x||t[40]!==n||t[41]!==D.name||t[42]!==E||t[43]!==l||t[44]!==O||t[45]!==A?(we=()=>{!h||n==null||E||D.name!==`needs-verification`||O!=null&&k!=null||ne.current||(ne.current=!0,A().then(()=>{!_.current||i()?.id!==n.id||ve.getState().modalErrorMessage==null||l(x,{replace:!0,state:{students2026VerificationError:!0}})}))},Ee=[k,x,n,D.name,E,h,l,O,A],t[38]=k,t[39]=x,t[40]=n,t[41]=D.name,t[42]=E,t[43]=l,t[44]=O,t[45]=A,t[46]=we,t[47]=Ee):(we=t[46],Ee=t[47]),(0,K.useEffect)(we,Ee);let De;t[48]===n?De=t[49]:(De=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||Se(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[48]=n,t[49]=De);let Oe=De,I;t[50]!==x||t[51]!==l?(I=()=>{l(fe(x,le),{replace:!0})},t[50]=x,t[51]=l,t[52]=I):I=t[52];let L=I,R;t[53]!==k||t[54]!==x||t[55]!==n||t[56]!==E||t[57]!==r||t[58]!==O?(R=h&&n!=null&&O&&k&&!E?ye(r,`${window.location.origin}${fe(x,le)}`,O,k):null,t[53]=k,t[54]=x,t[55]=n,t[56]=E,t[57]=r,t[58]=O,t[59]=R):R=t[59];let z=R,B;t[60]===a?B=t[61]:(B=a.formatMessage(J.artworkAlt),t[60]=a,t[61]=B);let V;t[62]===B?V=t[63]:(V=(0,q.jsx)(ge,{altText:B,assetUrl:Ne,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[62]=B,t[63]=V);let H;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.title})}),t[64]=H):H=t[64];let U;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,q.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[H,(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopTitle})})]}),t[65]=U):U=t[65];let ke;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.description})}),t[66]=ke):ke=t[66];let Ae;t[67]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopDescription})}),t[67]=Ae):Ae=t[67];let je;t[68]===Symbol.for(`react.memo_cache_sentinel`)?(je=(0,q.jsx)(y,{...J.verificationHelp}),t[68]=je):je=t[68];let W;t[69]===ie?W=t[70]:(W=(0,q.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[U,(0,q.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ke,Ae,(0,q.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ie,rel:`noopener noreferrer`,target:`_blank`,children:je})]})]}),t[69]=ie,t[70]=W);let G;t[71]!==V||t[72]!==W?(G=(0,q.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[V,W]}),t[71]=V,t[72]=W,t[73]=G):G=t[73];let Y;t[74]===a?Y=t[75]:(Y=a.formatMessage(J.verificationFormLabel),t[74]=a,t[75]=Y);let X;t[76]!==C||t[77]!==a?(X=C?(0,q.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,q.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,q.jsx)(y,{...J.accountLabel}),(0,q.jsx)(de,{content:a.formatMessage(J.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,q.jsx)(`button`,{...e,"aria-label":a.formatMessage(J.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,q.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,q.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:C})]}):null,t[76]=C,t[77]=a,t[78]=X):X=t[78];let Z;t[79]!==Oe||t[80]!==L||t[81]!==a||t[82]!==O||t[83]!==z?(Z=z&&O?(0,q.jsx)(Te,{onSubmitted:Oe,onSuccess:L,verificationId:O,verificationUrl:z}):(0,q.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(J.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[79]=Oe,t[80]=L,t[81]=a,t[82]=O,t[83]=z,t[84]=Z):Z=t[84];let Q;t[85]!==Y||t[86]!==X||t[87]!==Z?(Q=(0,q.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[85]=Y,t[86]=X,t[87]=Z,t[88]=Q):Q=t[88];let $;return t[89]!==G||t[90]!==Q?($=(0,q.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,q.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[89]=G,t[90]=Q,t[91]=$):$=t[91],$}var Me,K,q,Ne,Pe,J,Y=e((()=>{Me=b(),E(),ue(),he(),ke(),T(),O(),j(),k(),w(),m(),h(),a(),n(),C(),f(),K=t(v()),_(),ie(),q=x(),Ne=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Pe=`students_2026_preview`,J=S({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),X,Z,Q,$,Fe,Ie,Le=e((()=>{ie(),X=b(),M(),Y(),_e(),Z=x(),Q={hasRouteMeta:!0},$=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Fe=g(function(){"use forget";let e=(0,X.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Z.jsx)(Ae,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Z.jsx)(N,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ie=re(D)}));e((()=>{Le()}))();export{Ie as ErrorBoundary,Fe as default,Q as handle,$ as meta};
//# sourceMappingURL=students_.verify-cht02qe3.js.map