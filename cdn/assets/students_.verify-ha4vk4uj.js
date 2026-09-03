import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{A8 as n,AK as r,DJ as i,EJ as a,I4 as o,L4 as s,LK as c,NB as l,RK as u,av as d,gK as f,jB as p,jK as m,ov as h,xK as g}from"./4813494d-czr0yidjr2nfbyu4.js";import{An as _,Bt as v,Dt as y,Fn as b,In as ee,Ln as te,Pn as ne,Rn as re,Vt as ie,Z as ae,jt as oe,xn as x,zt as se}from"./2340486e-hpg4hay6kru8ymfa.js";import{HWt as S,Tn as C,Txt as w,VWt as ce,ap as le,dp as T,gn as ue,lp as de,wn as fe,wxt as pe}from"./conversation-small-c431vewu39vgorgf.js";import{_y as me,gy as he}from"./30901919-nqr4tfpuxopg4v7g.js";import{Bd as ge,Ld as _e,Rd as E,zd as ve}from"./c2675c8c-fadvrz1hh2avnevn.js";import{n as ye,t as be}from"./6105d6cc-iwz493f47b1jxulh.js";import{n as D,t as xe}from"./9bfdcf20-kl1twrcf1acc3aml.js";import{a as Se,d as O,f as Ce,l as k,n as we,o as Te,r as A,t as j,u as Ee}from"./d4df9516-lsmz5pcrb53jamzk.js";import{n as M,t as N}from"./759cd6d0-dyiysx0743mwzfu6.js";function P(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function F(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function De(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,de),e}function Oe(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function ke(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:a,onSuccess:o}=e,s=ee(),c=i(),l=(0,L.useRef)(null),u=(0,L.useRef)(null),[d]=(0,L.useState)(je),f;if(t[0]!==d||t[1]!==c||t[2]!==r||t[3]!==n){bb0:{if(!c||d==null){f=null;break bb0}let e=F(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,De().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,m,h;if(t[5]!==d||t[6]!==p||t[7]!==a||t[8]!==o||t[9]!==r?(m=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!P(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(P(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!P(n)||n.type!==`hook`||!P(n.hook)||!P(n.hook.data)||n.hook.data.verificationId!==r)return;let i=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof i==`string`&&i!==`collectStudentPersonalInfo`&&i!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&i===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},h=[d,p,a,o,r],t[5]=d,t[6]=p,t[7]=a,t[8]=o,t[9]=r,t[10]=m,t[11]=h):(m=t[10],h=t[11]),(0,L.useEffect)(m,h),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let g;t[16]===s?g=t[17]:(g=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=g);let _;return t[18]!==p||t[19]!==g?(_=(0,R.jsx)(`iframe`,{ref:l,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ae,referrerPolicy:`no-referrer`,src:p,title:g}),t[18]=p,t[19]=g,t[20]=_):_=t[20],_}function Ae(e){Oe(e.currentTarget)}function je(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=x(),T(),a(),L=t(re()),b(),R=te(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=ne({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=m(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(j.clearModalError(),j.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),h(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,W.useEffect)(Fe,c);let l=r?.id??`no-account`,u;return t[4]!==r||t[5]!==n||t[6]!==l?(u=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=u):u=t[7],u}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:i,sheerIdProgramId:a}=e,o=ee(),c=oe(),d=r(),p=l(),[m]=se(),g;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(g=s(),t[0]=g):g=t[0];let v=g,y;t[1]===m?y=t[2]:(y=()=>{ve(m)},t[1]=m,t[2]=y);let b;t[3]!==i||t[4]!==m?(b=[m,i,v],t[3]=i,t[4]=m,t[5]=b):b=t[5],h(y,b);let te=(0,W.useRef)(!1),ne=(0,W.useRef)(!1),re=(0,W.useRef)(!0),ie;t[6]===m?ie=t[7]:(ie=m.get(Be),t[6]=m,t[7]=ie);let ae=ie,x=`/students/2026#trigger_students-2026-faq-verification`,S;t[8]===ae?S=t[9]:(S=new URLSearchParams({campaign:de}).toString(),t[8]=ae,t[9]=S);let C=`/students/claim?${S}`,w;t[10]===p?.email?w=t[11]:(w=v&&(p?.email?.trim()||n()?.user?.email?.trim())||null,t[10]=p?.email,t[11]=w);let T=w,me;t[12]!==C||t[13]!==a?(me={...le,landingPath:C,sheerIdProgramId:a},t[12]=C,t[13]=a,t[14]=me):me=t[14];let E=me,ye;t[15]!==i||t[16]!==E?(ye=i!=null&&(Ee(i)||!i.isPersonalAccount()||E.blocksMobileStoreSubscribers&&ce(i)),t[15]=i,t[16]=E,t[17]=ye):ye=t[17];let D=ye,xe=v&&i!=null&&!D,O;t[18]===xe?O=t[19]:(O={enabled:xe,reportRefreshErrors:!0},t[18]=xe,t[19]=O);let k=Ce(E,O),A=k.name===`needs-verification`?k.verificationId??null:null,j=k.name===`needs-verification`?k.accountVerificationId??null:null,M=Te(A,j,E),N,P;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(N=()=>(re.current=!0,()=>{re.current=!1}),P=[],t[20]=N,t[21]=P):(N=t[20],P=t[21]),(0,W.useEffect)(N,P);let F,De;t[22]===C?(F=t[23],De=t[24]):(F=()=>{v||te.current||(te.current=!0,u({callbackUrl:_e(C),fallbackScreenHint:`login`}))},De=[C,v],t[22]=C,t[23]=F,t[24]=De),(0,W.useEffect)(F,De);let Oe;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==C||t[29]!==i||t[30]!==k.name||t[31]!==D||t[32]!==c?(Oe=()=>{if(!v)return;let e=i==null&&!d.isFetching&&(d.isError||d.isSuccess),t=k.name===`coming-soon`||k.name===`error`||k.name===`verified`||k.name===`enrolled`;(e||D||t)&&c(C,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=C,t[29]=i,t[30]=k.name,t[31]=D,t[32]=c,t[33]=Oe):Oe=t[33];let Ae;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==C||t[38]!==i||t[39]!==k||t[40]!==D||t[41]!==c?(Ae=[d.isError,d.isFetching,d.isSuccess,C,i,k,D,v,c],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=C,t[38]=i,t[39]=k,t[40]=D,t[41]=c,t[42]=Ae):Ae=t[42],(0,W.useEffect)(Oe,Ae);let je,I;t[43]!==j||t[44]!==C||t[45]!==i||t[46]!==k.name||t[47]!==D||t[48]!==c||t[49]!==A||t[50]!==M?(je=()=>{!v||i==null||D||k.name!==`needs-verification`||A!=null&&j!=null||ne.current||(ne.current=!0,M().then(()=>{!re.current||f()?.id!==i.id||Se.getState().modalErrorMessage==null||c(C,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[j,C,i,k.name,D,v,c,A,M],t[43]=j,t[44]=C,t[45]=i,t[46]=k.name,t[47]=D,t[48]=c,t[49]=A,t[50]=M,t[51]=je,t[52]=I):(je=t[51],I=t[52]),(0,W.useEffect)(je,I);let L;t[53]===i?L=t[54]:(L=()=>{let e=i?.normalizedAccountUserId;i==null||typeof e!=`string`||ge(`verification_submitted`,{identity:{accountId:i.id,accountUserId:e}})},t[53]=i,t[54]=L);let R=L,z;t[55]!==C||t[56]!==c?(z=()=>{c(fe(C,ue),{replace:!0})},t[55]=C,t[56]=c,t[57]=z):z=t[57];let Me=z,B;t[58]!==j||t[59]!==C||t[60]!==i||t[61]!==D||t[62]!==a||t[63]!==A?(B=v&&i!=null&&A&&j&&!D?we(a,`${window.location.origin}${fe(C,ue)}`,A,j):null,t[58]=j,t[59]=C,t[60]=i,t[61]=D,t[62]=a,t[63]=A,t[64]=B):B=t[64];let V=B,H;t[65]===o?H=t[66]:(H=o.formatMessage(K.artworkAlt),t[65]=o,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(be,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(_,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(_,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(_,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===x?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:x,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=x,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===o?Y=t[80]:(Y=o.formatMessage(K.verificationFormLabel),t[79]=o,t[80]=Y);let X;t[81]!==T||t[82]!==o?(X=T?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(_,{...K.accountLabel}),(0,G.jsx)(pe,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:T})]}):null,t[81]=T,t[82]=o,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==o||t[87]!==A||t[88]!==V?(Z=V&&A?(0,G.jsx)(ke,{onSubmitted:R,onSuccess:Me,verificationId:A,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=o,t[87]=A,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=x(),me(),w(),ye(),Ne(),T(),k(),O(),E(),A(),C(),g(),c(),p(),o(),S(),d(),W=t(re()),b(),ae(),G=te(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=ne({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{ae(),J=x(),M(),q(),D(),Y=te(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=v(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=y(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(N,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ie(xe)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-ha4vk4uj.js.map