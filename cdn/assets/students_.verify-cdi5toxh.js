import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{C0 as n,Mrt as r,VQ as i,a$ as a,att as o,f$ as s,iL as c,itt as l,nL as u,nM as d,o$ as f,p$ as p,qQ as m,rM as h,w0 as g}from"./4813494d-eq1tbw1z6vy0ze5j.js";import{Bn as ee,Ft as _,Gt as v,Hn as y,Pn as b,Q as x,Rn as te,Tn as ne,Ut as re,Vn as S,Wt as ie,jt as ae,zn as oe}from"./2340486e-cvl0axudepa7gku6.js";import{On as se,a1t as ce,bn as le,fkt as ue,i1t as de,kn as C,pkt as fe}from"./conversation-small-ls9gwd4ow4yvyg0c.js";import{by as pe,yy as me}from"./30901919-edsal1aogmkzxrgs.js";import{$m as he,Jm as ge,Qm as _e,Xm as ve,Ym as ye,ah as w,rh as be}from"./c2675c8c-ndmctygzeu2ijouf.js";import{n as T,t as xe}from"./6105d6cc-kj744l2tluywmawg.js";import{n as E,t as Se}from"./9bfdcf20-ijvpq6eo6lp95vs4.js";import{a as Ce,d as D,f as we,l as O,n as Te,o as Ee,r as k,t as A,u as De}from"./d4df9516-vj8urexv4zg51k24.js";import{n as j,t as M}from"./759cd6d0-k442vwej81in58a7.js";function N(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function P(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Oe(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,be),e}function F(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function ke(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ee(),s=g(),c=(0,L.useRef)(null),l=(0,L.useRef)(null),[u]=(0,L.useState)(je),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=P(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Oe().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let f=d,p,m;if(t[5]!==u||t[6]!==f||t[7]!==i||t[8]!==a||t[9]!==r?(p=()=>{if(u==null||f==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!N(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(N(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!N(n)||n.type!==`hook`||!N(n.hook)||!N(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,f,i,a,r],t[5]=u,t[6]=f,t[7]=i,t[8]=a,t[9]=r,t[10]=p,t[11]=m):(p=t[10],m=t[11]),(0,L.useEffect)(p,m),f==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=h);let _;return t[18]!==f||t[19]!==h?(_=(0,R.jsx)(`iframe`,{ref:c,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ae,referrerPolicy:`no-referrer`,src:f,title:h}),t[18]=f,t[19]=h,t[20]=_):_=t[20],_}function Ae(e){F(e.currentTarget)}function je(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=ne(),w(),n(),L=t(y()),oe(),R=S(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=te({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=f(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(A.clearModalError(),A.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),h(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,W.useEffect)(Fe,c);let l=r?.id??`no-account`,u;return t[4]!==r||t[5]!==n||t[6]!==l?(u=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=u):u=t[7],u}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:n,sheerIdProgramId:s}=e,l=ee(),u=_(),d=a(),f=c(),[m]=re(),g;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(g=o(),t[0]=g):g=t[0];let v=g,y;t[1]===m?y=t[2]:(y=()=>{ve(m)},t[1]=m,t[2]=y);let x;t[3]!==n||t[4]!==m?(x=[m,n,v],t[3]=n,t[4]=m,t[5]=x):x=t[5],h(y,x);let te=(0,W.useRef)(!1),ne=(0,W.useRef)(!1),S=(0,W.useRef)(!0),ie;t[6]===m?ie=t[7]:(ie=m.get(Be),t[6]=m,t[7]=ie);let ae=ie,oe=`/students/2026#trigger_students-2026-faq-verification`,ce;t[8]===ae?ce=t[9]:(ce=new URLSearchParams({campaign:be}).toString(),t[8]=ae,t[9]=ce);let C=`/students/claim?${ce}`,fe;t[10]===f?.email?fe=t[11]:(fe=v&&(f?.email?.trim()||r()?.user?.email?.trim())||null,t[10]=f?.email,t[11]=fe);let pe=fe,ye;t[12]!==C||t[13]!==s?(ye={...he,landingPath:C,sheerIdProgramId:s},t[12]=C,t[13]=s,t[14]=ye):ye=t[14];let w=ye,T;t[15]!==n||t[16]!==w?(T=n!=null&&(De(n)||!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&de(n)),t[15]=n,t[16]=w,t[17]=T):T=t[17];let E=T,Se=v&&n!=null&&!E,D;t[18]===Se?D=t[19]:(D={enabled:Se,reportRefreshErrors:!0},t[18]=Se,t[19]=D);let O=we(w,D),k=O.name===`needs-verification`?O.verificationId??null:null,A=O.name===`needs-verification`?O.accountVerificationId??null:null,j=Ee(k,A,w),M,N;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(M=()=>(S.current=!0,()=>{S.current=!1}),N=[],t[20]=M,t[21]=N):(M=t[20],N=t[21]),(0,W.useEffect)(M,N);let P,Oe;t[22]===C?(P=t[23],Oe=t[24]):(P=()=>{v||te.current||(te.current=!0,p({callbackUrl:ge(C),fallbackScreenHint:`login`}))},Oe=[C,v],t[22]=C,t[23]=P,t[24]=Oe),(0,W.useEffect)(P,Oe);let F;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==C||t[29]!==n||t[30]!==O.name||t[31]!==E||t[32]!==u?(F=()=>{if(!v)return;let e=n==null&&!d.isFetching&&(d.isError||d.isSuccess),t=O.name===`coming-soon`||O.name===`error`||O.name===`verified`||O.name===`enrolled`;(e||E||t)&&u(C,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=C,t[29]=n,t[30]=O.name,t[31]=E,t[32]=u,t[33]=F):F=t[33];let Ae;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==C||t[38]!==n||t[39]!==O||t[40]!==E||t[41]!==u?(Ae=[d.isError,d.isFetching,d.isSuccess,C,n,O,E,v,u],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=C,t[38]=n,t[39]=O,t[40]=E,t[41]=u,t[42]=Ae):Ae=t[42],(0,W.useEffect)(F,Ae);let je,I;t[43]!==A||t[44]!==C||t[45]!==n||t[46]!==O.name||t[47]!==E||t[48]!==u||t[49]!==k||t[50]!==j?(je=()=>{!v||n==null||E||O.name!==`needs-verification`||k!=null&&A!=null||ne.current||(ne.current=!0,j().then(()=>{!S.current||i()?.id!==n.id||Ce.getState().modalErrorMessage==null||u(C,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[A,C,n,O.name,E,v,u,k,j],t[43]=A,t[44]=C,t[45]=n,t[46]=O.name,t[47]=E,t[48]=u,t[49]=k,t[50]=j,t[51]=je,t[52]=I):(je=t[51],I=t[52]),(0,W.useEffect)(je,I);let L;t[53]===n?L=t[54]:(L=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||_e(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[53]=n,t[54]=L);let R=L,z;t[55]!==C||t[56]!==u?(z=()=>{u(se(C,le),{replace:!0})},t[55]=C,t[56]=u,t[57]=z):z=t[57];let Me=z,B;t[58]!==A||t[59]!==C||t[60]!==n||t[61]!==E||t[62]!==s||t[63]!==k?(B=v&&n!=null&&k&&A&&!E?Te(s,`${window.location.origin}${se(C,le)}`,k,A):null,t[58]=A,t[59]=C,t[60]=n,t[61]=E,t[62]=s,t[63]=k,t[64]=B):B=t[64];let V=B,H;t[65]===l?H=t[66]:(H=l.formatMessage(K.artworkAlt),t[65]=l,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(xe,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(b,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(b,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(b,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(b,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(b,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===oe?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:oe,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=oe,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===l?Y=t[80]:(Y=l.formatMessage(K.verificationFormLabel),t[79]=l,t[80]=Y);let X;t[81]!==pe||t[82]!==l?(X=pe?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(b,{...K.accountLabel}),(0,G.jsx)(ue,{content:l.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":l.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:pe})]}):null,t[81]=pe,t[82]=l,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==l||t[87]!==k||t[88]!==V?(Z=V&&k?(0,G.jsx)(ke,{onSubmitted:R,onSuccess:Me,verificationId:k,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":l.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=l,t[87]=k,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=ne(),pe(),fe(),T(),Ne(),w(),O(),D(),ye(),k(),C(),m(),s(),u(),l(),ce(),d(),W=t(y()),oe(),x(),G=S(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=te({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{x(),J=ne(),j(),q(),E(),Y=S(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=ie(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ae(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(M,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=v(Se)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-cdi5toxh.js.map