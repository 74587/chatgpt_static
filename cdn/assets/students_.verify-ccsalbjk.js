import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$M as n,BJ as r,K7 as i,QK as a,bq as o,eN as s,iz as c,mq as l,nz as u,pq as d,q7 as f,rq as p,xq as m,ytt as h,zJ as g}from"./4813494d-npmn21nlnk5b1x5g.js";import{An as _,Bt as v,Dt as y,Fn as b,In as ee,Ln as x,Pn as te,Q as ne,Rn as S,Vt as re,jt as ie,xn as C,zt as ae}from"./2340486e-lo737pyjfygyimqo.js";import{D5t as oe,E5t as se,Lp as ce,Np as le,cEt as ue,hXt as w,lEt as de,mXt as fe,v5t as pe,zp as T}from"./conversation-small-newrvr7nrx5tnmp4.js";import{Ey as me,Ty as he}from"./30901919-h5lau69lrn3ylyiy.js";import{Af as ge,Mf as _e,Nf as ve,jf as E}from"./c2675c8c-hyq5rrycw8ynuek2.js";import{n as ye,t as be}from"./6105d6cc-i27xze1nhmjuuu1n.js";import{n as D,t as xe}from"./9bfdcf20-hdd37vbzug8ev0xz.js";import{a as Se,d as O,f as Ce,l as k,n as we,o as Te,r as A,t as j,u as Ee}from"./d4df9516-ol5bii64zwj4a2s7.js";import{n as M,t as N}from"./759cd6d0-dxd8eb039mudz3ni.js";function P(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function De(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Oe(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ce),e}function ke(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function Ae(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:i,onSubmitted:a,onSuccess:o}=e,s=ee(),c=r(),l=(0,L.useRef)(null),u=(0,L.useRef)(null),[d]=(0,L.useState)(F),f;if(t[0]!==d||t[1]!==c||t[2]!==i||t[3]!==n){bb0:{if(!c||d==null){f=null;break bb0}let e=De(n,i);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,Oe().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=i,t[3]=n,t[4]=f}else f=t[4];let p=f,m,h;if(t[5]!==d||t[6]!==p||t[7]!==a||t[8]!==o||t[9]!==i?(m=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!P(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(P(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!P(n)||n.type!==`hook`||!P(n.hook)||!P(n.hook.data)||n.hook.data.verificationId!==i)return;let r=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof r==`string`&&r!==`collectStudentPersonalInfo`&&r!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&r===`success`;if(!(!s&&!c)){if(u.current!==i){u.current=i;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},h=[d,p,a,o,i],t[5]=d,t[6]=p,t[7]=a,t[8]=o,t[9]=i,t[10]=m,t[11]=h):(m=t[10],h=t[11]),(0,L.useEffect)(m,h),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let g;t[16]===s?g=t[17]:(g=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=g);let _;return t[18]!==p||t[19]!==g?(_=(0,R.jsx)(`iframe`,{ref:l,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:je,referrerPolicy:`no-referrer`,src:p,title:g}),t[18]=p,t[19]=g,t[20]=_):_=t[20],_}function je(e){ke(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=C(),T(),g(),L=t(S()),b(),R=x(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=te({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=l(),i=r?.id??null,a=(0,W.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(j.clearModalError(),j.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),s(o,c);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,W.useEffect)(Fe,u);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:n,sheerIdProgramId:r}=e,i=ee(),o=ie(),l=d(),u=c(),[p]=ae(),g;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(g=f(),t[0]=g):g=t[0];let v=g,y;t[1]===p?y=t[2]:(y=()=>{_e(p)},t[1]=p,t[2]=y);let b;t[3]!==n||t[4]!==p?(b=[p,n,v],t[3]=n,t[4]=p,t[5]=b):b=t[5],s(y,b);let x=(0,W.useRef)(!1),te=(0,W.useRef)(!1),ne=(0,W.useRef)(!0),S;t[6]===p?S=t[7]:(S=p.get(Be),t[6]=p,t[7]=S);let re=S,C=`/students/2026#trigger_students-2026-faq-verification`,oe;t[8]===re?oe=t[9]:(oe=new URLSearchParams({campaign:ce}).toString(),t[8]=re,t[9]=oe);let w=`/students/claim?${oe}`,de;t[10]===u?.email?de=t[11]:(de=v&&(u?.email?.trim()||h()?.user?.email?.trim())||null,t[10]=u?.email,t[11]=de);let T=de,me;t[12]!==w||t[13]!==r?(me={...le,landingPath:w,sheerIdProgramId:r},t[12]=w,t[13]=r,t[14]=me):me=t[14];let E=me,ye;t[15]!==n||t[16]!==E?(ye=n!=null&&(Ee(n)||!n.isPersonalAccount()||E.blocksMobileStoreSubscribers&&fe(n)),t[15]=n,t[16]=E,t[17]=ye):ye=t[17];let D=ye,xe=v&&n!=null&&!D,O;t[18]===xe?O=t[19]:(O={enabled:xe,reportRefreshErrors:!0},t[18]=xe,t[19]=O);let k=Ce(E,O),A=k.name===`needs-verification`?k.verificationId??null:null,j=k.name===`needs-verification`?k.accountVerificationId??null:null,M=Te(A,j,E),N,P;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(N=()=>(ne.current=!0,()=>{ne.current=!1}),P=[],t[20]=N,t[21]=P):(N=t[20],P=t[21]),(0,W.useEffect)(N,P);let De,Oe;t[22]===w?(De=t[23],Oe=t[24]):(De=()=>{v||x.current||(x.current=!0,m({callbackUrl:ge(w),fallbackScreenHint:`login`}))},Oe=[w,v],t[22]=w,t[23]=De,t[24]=Oe),(0,W.useEffect)(De,Oe);let ke;t[25]!==l.isError||t[26]!==l.isFetching||t[27]!==l.isSuccess||t[28]!==w||t[29]!==n||t[30]!==k.name||t[31]!==D||t[32]!==o?(ke=()=>{if(!v)return;let e=n==null&&!l.isFetching&&(l.isError||l.isSuccess),t=k.name===`coming-soon`||k.name===`error`||k.name===`verified`||k.name===`enrolled`;(e||D||t)&&o(w,{replace:!0})},t[25]=l.isError,t[26]=l.isFetching,t[27]=l.isSuccess,t[28]=w,t[29]=n,t[30]=k.name,t[31]=D,t[32]=o,t[33]=ke):ke=t[33];let je;t[34]!==l.isError||t[35]!==l.isFetching||t[36]!==l.isSuccess||t[37]!==w||t[38]!==n||t[39]!==k||t[40]!==D||t[41]!==o?(je=[l.isError,l.isFetching,l.isSuccess,w,n,k,D,v,o],t[34]=l.isError,t[35]=l.isFetching,t[36]=l.isSuccess,t[37]=w,t[38]=n,t[39]=k,t[40]=D,t[41]=o,t[42]=je):je=t[42],(0,W.useEffect)(ke,je);let F,I;t[43]!==j||t[44]!==w||t[45]!==n||t[46]!==k.name||t[47]!==D||t[48]!==o||t[49]!==A||t[50]!==M?(F=()=>{!v||n==null||D||k.name!==`needs-verification`||A!=null&&j!=null||te.current||(te.current=!0,M().then(()=>{!ne.current||a()?.id!==n.id||Se.getState().modalErrorMessage==null||o(w,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[j,w,n,k.name,D,v,o,A,M],t[43]=j,t[44]=w,t[45]=n,t[46]=k.name,t[47]=D,t[48]=o,t[49]=A,t[50]=M,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===n?L=t[54]:(L=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||ve(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[53]=n,t[54]=L);let R=L,z;t[55]!==w||t[56]!==o?(z=()=>{o(se(w,pe),{replace:!0})},t[55]=w,t[56]=o,t[57]=z):z=t[57];let Me=z,B;t[58]!==j||t[59]!==w||t[60]!==n||t[61]!==D||t[62]!==r||t[63]!==A?(B=v&&n!=null&&A&&j&&!D?we(r,`${window.location.origin}${se(w,pe)}`,A,j):null,t[58]=j,t[59]=w,t[60]=n,t[61]=D,t[62]=r,t[63]=A,t[64]=B):B=t[64];let V=B,H;t[65]===i?H=t[66]:(H=i.formatMessage(K.artworkAlt),t[65]=i,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(be,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(_,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===C?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:C,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=C,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===i?Y=t[80]:(Y=i.formatMessage(K.verificationFormLabel),t[79]=i,t[80]=Y);let X;t[81]!==T||t[82]!==i?(X=T?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(_,{...K.accountLabel}),(0,G.jsx)(ue,{content:i.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":i.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:T})]}):null,t[81]=T,t[82]=i,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==i||t[87]!==A||t[88]!==V?(Z=V&&A?(0,G.jsx)(Ae,{onSubmitted:R,onSuccess:Me,verificationId:A,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":i.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=i,t[87]=A,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=C(),me(),de(),ye(),Ne(),T(),k(),O(),E(),A(),oe(),p(),o(),u(),i(),w(),n(),W=t(S()),b(),ne(),G=x(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=te({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{ne(),J=C(),M(),q(),D(),Y=x(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=v(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=y(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(N,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=re(xe)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-ccsalbjk.js.map