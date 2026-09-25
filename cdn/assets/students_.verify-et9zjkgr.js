import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{Grt as n,N0 as r,P0 as i,S$ as a,XQ as o,_tt as s,dM as c,fL as l,h$ as u,m$ as d,n$ as f,uL as p,uM as m,vtt as ee,x$ as h}from"./4813494d-l1z61h8lg15kuxos.js";import{Bn as te,Ft as ne,Gt as g,Hn as _,Pn as v,Q as y,Rn as re,Tn as ie,Ut as ae,Vn as b,Wt as oe,jt as se,zn as x}from"./2340486e-cvl0axudepa7gku6.js";import{On as ce,_kt as le,bn as ue,gkt as de,kn as S,n1t as fe,t1t as pe}from"./conversation-small-gu5rgnplrzeq8c0w.js";import{by as me,yy as he}from"./30901919-dxvwpmo87lasjfpc.js";import{$m as ge,Jm as _e,Qm as ve,Xm as ye,Ym as C,ah as w,rh as be}from"./c2675c8c-afzc8ge07hur395n.js";import{n as xe,t as Se}from"./6105d6cc-kpwk9kt762xsytqc.js";import{n as T,t as Ce}from"./9bfdcf20-ks0s4v1g3rvu57of.js";import{a as we,d as Te,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-nd9p2i200ulsskbt.js";import{n as Ae,t as k}from"./759cd6d0-cjcs9wuz142m6sbr.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function j(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function M(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,be),e}function N(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function je(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:a,onSuccess:o}=e,s=te(),c=i(),l=(0,L.useRef)(null),u=(0,L.useRef)(null),[d]=(0,L.useState)(F),f;if(t[0]!==d||t[1]!==c||t[2]!==r||t[3]!==n){bb0:{if(!c||d==null){f=null;break bb0}let e=j(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,M().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,m,ee;if(t[5]!==d||t[6]!==p||t[7]!==a||t[8]!==o||t[9]!==r?(m=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!A(n)||n.type!==`hook`||!A(n.hook)||!A(n.hook.data)||n.hook.data.verificationId!==r)return;let i=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof i==`string`&&i!==`collectStudentPersonalInfo`&&i!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&i===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},ee=[d,p,a,o,r],t[5]=d,t[6]=p,t[7]=a,t[8]=o,t[9]=r,t[10]=m,t[11]=ee):(m=t[10],ee=t[11]),(0,L.useEffect)(m,ee),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===s?h=t[17]:(h=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=h);let ne;return t[18]!==p||t[19]!==h?(ne=(0,R.jsx)(`iframe`,{ref:l,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:P,referrerPolicy:`no-referrer`,src:p,title:h}),t[18]=p,t[19]=h,t[20]=ne):ne=t[20],ne}function P(e){N(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=ie(),w(),r(),L=t(_()),x(),R=b(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=re({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=u(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(O.clearModalError(),O.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),c(o,s);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:i}=e,s=te(),u=ne(),f=d(),p=l(),[m]=ae(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=ee(),t[0]=h):h=t[0];let g=h,_;t[1]===m?_=t[2]:(_=()=>{ye(m)},t[1]=m,t[2]=_);let y;t[3]!==r||t[4]!==m?(y=[m,r,g],t[3]=r,t[4]=m,t[5]=y):y=t[5],c(_,y);let re=(0,W.useRef)(!1),ie=(0,W.useRef)(!1),b=(0,W.useRef)(!0),oe;t[6]===m?oe=t[7]:(oe=m.get(Be),t[6]=m,t[7]=oe);let se=oe,x=`/students/2026#trigger_students-2026-faq-verification`,le;t[8]===se?le=t[9]:(le=new URLSearchParams({campaign:be}).toString(),t[8]=se,t[9]=le);let S=`/students/claim?${le}`,fe;t[10]===p?.email?fe=t[11]:(fe=g&&(p?.email?.trim()||n()?.user?.email?.trim())||null,t[10]=p?.email,t[11]=fe);let me=fe,C;t[12]!==S||t[13]!==i?(C={...ge,landingPath:S,sheerIdProgramId:i},t[12]=S,t[13]=i,t[14]=C):C=t[14];let w=C,xe;t[15]!==r||t[16]!==w?(xe=r!=null&&(ke(r)||!r.isPersonalAccount()||w.blocksMobileStoreSubscribers&&pe(r)),t[15]=r,t[16]=w,t[17]=xe):xe=t[17];let T=xe,Ce=g&&r!=null&&!T,Te;t[18]===Ce?Te=t[19]:(Te={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=Te);let E=Ee(w,Te),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Ae=Oe(D,O,w),k,A;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(b.current=!0,()=>{b.current=!1}),A=[],t[20]=k,t[21]=A):(k=t[20],A=t[21]),(0,W.useEffect)(k,A);let j,M;t[22]===S?(j=t[23],M=t[24]):(j=()=>{g||re.current||(re.current=!0,a({callbackUrl:_e(S),fallbackScreenHint:`login`}))},M=[S,g],t[22]=S,t[23]=j,t[24]=M),(0,W.useEffect)(j,M);let N;t[25]!==f.isError||t[26]!==f.isFetching||t[27]!==f.isSuccess||t[28]!==S||t[29]!==r||t[30]!==E.name||t[31]!==T||t[32]!==u?(N=()=>{if(!g)return;let e=r==null&&!f.isFetching&&(f.isError||f.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&u(S,{replace:!0})},t[25]=f.isError,t[26]=f.isFetching,t[27]=f.isSuccess,t[28]=S,t[29]=r,t[30]=E.name,t[31]=T,t[32]=u,t[33]=N):N=t[33];let P;t[34]!==f.isError||t[35]!==f.isFetching||t[36]!==f.isSuccess||t[37]!==S||t[38]!==r||t[39]!==E||t[40]!==T||t[41]!==u?(P=[f.isError,f.isFetching,f.isSuccess,S,r,E,T,g,u],t[34]=f.isError,t[35]=f.isFetching,t[36]=f.isSuccess,t[37]=S,t[38]=r,t[39]=E,t[40]=T,t[41]=u,t[42]=P):P=t[42],(0,W.useEffect)(N,P);let F,I;t[43]!==O||t[44]!==S||t[45]!==r||t[46]!==E.name||t[47]!==T||t[48]!==u||t[49]!==D||t[50]!==Ae?(F=()=>{!g||r==null||T||E.name!==`needs-verification`||D!=null&&O!=null||ie.current||(ie.current=!0,Ae().then(()=>{!b.current||o()?.id!==r.id||we.getState().modalErrorMessage==null||u(S,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[O,S,r,E.name,T,g,u,D,Ae],t[43]=O,t[44]=S,t[45]=r,t[46]=E.name,t[47]=T,t[48]=u,t[49]=D,t[50]=Ae,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===r?L=t[54]:(L=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=L);let R=L,z;t[55]!==S||t[56]!==u?(z=()=>{u(ce(S,ue),{replace:!0})},t[55]=S,t[56]=u,t[57]=z):z=t[57];let Me=z,B;t[58]!==O||t[59]!==S||t[60]!==r||t[61]!==T||t[62]!==i||t[63]!==D?(B=g&&r!=null&&D&&O&&!T?De(i,`${window.location.origin}${ce(S,ue)}`,D,O):null,t[58]=O,t[59]=S,t[60]=r,t[61]=T,t[62]=i,t[63]=D,t[64]=B):B=t[64];let V=B,H;t[65]===s?H=t[66]:(H=s.formatMessage(K.artworkAlt),t[65]=s,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(v,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===x?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:x,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=x,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===s?Y=t[80]:(Y=s.formatMessage(K.verificationFormLabel),t[79]=s,t[80]=Y);let X;t[81]!==me||t[82]!==s?(X=me?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(v,{...K.accountLabel}),(0,G.jsx)(de,{content:s.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":s.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:me})]}):null,t[81]=me,t[82]=s,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==s||t[87]!==D||t[88]!==V?(Z=V&&D?(0,G.jsx)(je,{onSubmitted:R,onSuccess:Me,verificationId:D,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":s.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=s,t[87]=D,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=ie(),me(),le(),xe(),Ne(),w(),E(),Te(),C(),D(),S(),f(),h(),p(),s(),fe(),m(),W=t(_()),x(),y(),G=b(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=re({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{y(),J=ie(),Ae(),q(),T(),Y=b(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=oe(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=se(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(k,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=g(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-et9zjkgr.js.map