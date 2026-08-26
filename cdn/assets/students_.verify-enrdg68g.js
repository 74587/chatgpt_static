import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$R as n,AK as r,CW as i,GW as a,LW as o,OW as s,RW as c,WW as l,a0 as u,cD as d,jK as f,nz as p,o0 as m,q4 as ee,sD as h}from"./4813494d-oluzrfddkhmcg6nw.js";import{Bt as te,Cn as ne,Dt as re,Sn as ie,Vt as g,Z as ae,_n as _,bn as oe,jt as se,tn as v,wn as y,xn as b,zt as ce}from"./2340486e-abcdn4jh3ig19emg.js";import{Eht as le,Ff as ue,GLt as de,KLt as fe,Lf as x,Tht as pe,gn as me,hn as he,jf as ge,sn as _e}from"./conversation-small-fl0cedghg7bk7lph.js";import{Oy as ve,ky as S}from"./30901919-m1qqgtkp9wf3a4lc.js";import{n as ye,t as be}from"./6105d6cc-ouwko8donxk2xj28.js";import{n as xe,t as C}from"./9bfdcf20-dzuqjr4q205hu2tt.js";import{a as Se,l as w,n as Ce,o as we,r as T,t as E,u as Te}from"./d4df9516-jrhnb1ksf5vvzk2x.js";import{n as D,t as O}from"./759cd6d0-mwn4w7yrk3c28qiz.js";function k(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function A(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function j(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ue),e}function M(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function Ee(e){"use forget";let t=(0,F.c)(20),{verificationUrl:n,verificationId:r,onSuccess:i}=e,a=ie(),o=f(),s=(0,I.useRef)(null),[c]=(0,I.useState)(P),l;if(t[0]!==c||t[1]!==o||t[2]!==r||t[3]!==n){bb0:{if(!o||c==null){l=null;break bb0}let e=A(n,r);if(e==null){l=null;break bb0}e.searchParams.set(`verificationIframeUid`,c),e.searchParams.set(`installPageUrl`,j().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),l=e.toString()}t[0]=c,t[1]=o,t[2]=r,t[3]=n,t[4]=l}else l=t[4];let u=l,d,p;if(t[5]!==c||t[6]!==u||t[7]!==i||t[8]!==r?(d=()=>{if(c==null||u==null)return;let e=e=>{let t=s.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!k(e.data)||e.data.verificationIframeUid!==c)return;let n=e.data.action;if(k(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}!k(n)||n.type!==`hook`||!k(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!k(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||i()};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[c,u,i,r],t[5]=c,t[6]=u,t[7]=i,t[8]=r,t[9]=d,t[10]=p):(d=t[9],p=t[10]),(0,I.useEffect)(d,p),u==null){let e;t[11]===a?e=t[12]:(e=a.formatMessage(U.loadingLabel),t[11]=a,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===a?m=t[16]:(m=a.formatMessage(U.verificationTitle),t[15]=a,t[16]=m);let ee;return t[17]!==u||t[18]!==m?(ee=(0,L.jsx)(`iframe`,{ref:s,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:N,referrerPolicy:`no-referrer`,src:u,title:m}),t[17]=u,t[18]=m,t[19]=ee):ee=t[19],ee}function N(e){M(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,De=e((()=>{F=v(),x(),r(),I=t(y()),b(),L=ne(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=oe({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Oe(e){"use forget";let t=(0,ke.c)(8),{sheerIdProgramId:n}=e,r=c(),i=r?.id??null,a=(0,q.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),d(o,s);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,q.useEffect)(W,l);let u=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==u?(f=(0,J.jsx)(K,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=f):f=t[7],f}function W(){let e=G;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function G(e){e.persisted&&window.location.reload()}function K(e){"use forget";let t=(0,ke.c)(89),{currentAccount:n,sheerIdProgramId:r}=e,s=ie(),c=se(),l=o(),u=p(),[d]=ce(),f;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(f=m(),t[0]=f):f=t[0];let h=f,te=(0,q.useRef)(!1),ne=(0,q.useRef)(!1),re=(0,q.useRef)(!0),g;t[1]===d?g=t[2]:(g=d.get(je),t[1]=d,t[2]=g);let ae=g,oe=`/students/2026#trigger_students-2026-faq-verification`,v;t[3]===ae?v=t[4]:(v=new URLSearchParams({campaign:ue}).toString(),t[3]=ae,t[4]=v);let y=`/students/claim?${v}`,b;t[5]===u?.email?b=t[6]:(b=h&&(u?.email?.trim()||ee()?.user?.email?.trim())||null,t[5]=u?.email,t[6]=b);let le=b,fe;t[7]!==y||t[8]!==r?(fe={...ge,landingPath:y,sheerIdProgramId:r},t[7]=y,t[8]=r,t[9]=fe):fe=t[9];let x=fe,me;t[10]!==n||t[11]!==x?(me=n!=null&&(!n.isPersonalAccount()||x.blocksMobileStoreSubscribers&&de(n)),t[10]=n,t[11]=x,t[12]=me):me=t[12];let S=me,ye=h&&n!=null&&!S,xe;t[13]===ye?xe=t[14]:(xe={enabled:ye,reportRefreshErrors:!0},t[13]=ye,t[14]=xe);let C=Te(x,xe),w=C.name===`needs-verification`?C.verificationId??null:null,T=C.name===`needs-verification`?C.accountVerificationId??null:null,E=we(w,T,x),D,O;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(O=()=>(re.current=!0,()=>{re.current=!1}),D=[],t[15]=D,t[16]=O):(D=t[15],O=t[16]),(0,q.useEffect)(O,D);let k,A;t[17]===y?(k=t[18],A=t[19]):(k=()=>{h||te.current||(te.current=!0,a({callbackUrl:y,fallbackScreenHint:`login`}))},A=[y,h],t[17]=y,t[18]=k,t[19]=A),(0,q.useEffect)(k,A);let j;t[20]!==l.isError||t[21]!==l.isFetching||t[22]!==l.isSuccess||t[23]!==y||t[24]!==n||t[25]!==C.name||t[26]!==S||t[27]!==c?(j=()=>{if(!h)return;let e=n==null&&!l.isFetching&&(l.isError||l.isSuccess),t=C.name===`coming-soon`||C.name===`error`||C.name===`verified`||C.name===`enrolled`;(e||S||t)&&c(y,{replace:!0})},t[20]=l.isError,t[21]=l.isFetching,t[22]=l.isSuccess,t[23]=y,t[24]=n,t[25]=C.name,t[26]=S,t[27]=c,t[28]=j):j=t[28];let M;t[29]!==l.isError||t[30]!==l.isFetching||t[31]!==l.isSuccess||t[32]!==y||t[33]!==n||t[34]!==C||t[35]!==S||t[36]!==c?(M=[l.isError,l.isFetching,l.isSuccess,y,n,C,S,h,c],t[29]=l.isError,t[30]=l.isFetching,t[31]=l.isSuccess,t[32]=y,t[33]=n,t[34]=C,t[35]=S,t[36]=c,t[37]=M):M=t[37],(0,q.useEffect)(j,M);let N,P;t[38]!==T||t[39]!==y||t[40]!==n||t[41]!==C.name||t[42]!==S||t[43]!==c||t[44]!==w||t[45]!==E?(N=()=>{!h||n==null||S||C.name!==`needs-verification`||w!=null&&T!=null||ne.current||(ne.current=!0,E().then(()=>{!re.current||i()?.id!==n.id||Se.getState().modalErrorMessage==null||c(y,{replace:!0,state:{students2026VerificationError:!0}})}))},P=[T,y,n,C.name,S,h,c,w,E],t[38]=T,t[39]=y,t[40]=n,t[41]=C.name,t[42]=S,t[43]=c,t[44]=w,t[45]=E,t[46]=N,t[47]=P):(N=t[46],P=t[47]),(0,q.useEffect)(N,P);let F;t[48]!==y||t[49]!==c?(F=()=>{c(he(y,_e),{replace:!0})},t[48]=y,t[49]=c,t[50]=F):F=t[50];let I=F,L;t[51]!==T||t[52]!==y||t[53]!==n||t[54]!==S||t[55]!==r||t[56]!==w?(L=h&&n!=null&&w&&T&&!S?Ce(r,`${window.location.origin}${he(y,_e)}`,w,T):null,t[51]=T,t[52]=y,t[53]=n,t[54]=S,t[55]=r,t[56]=w,t[57]=L):L=t[57];let R=L,z;t[58]===s?z=t[59]:(z=s.formatMessage(Y.artworkAlt),t[58]=s,t[59]=z);let B;t[60]===z?B=t[61]:(B=(0,J.jsx)(be,{altText:z,assetUrl:Ae,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[60]=z,t[61]=B);let V;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(_,{...Y.title})}),t[62]=V):V=t[62];let H;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(_,{...Y.desktopTitle})})]}),t[63]=H):H=t[63];let U;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(_,{...Y.description})}),t[64]=U):U=t[64];let De;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(_,{...Y.desktopDescription})}),t[65]=De):De=t[65];let Oe;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,J.jsx)(_,{...Y.verificationHelp}),t[66]=Oe):Oe=t[66];let W;t[67]===oe?W=t[68]:(W=(0,J.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,J.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,De,(0,J.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:oe,rel:`noopener noreferrer`,target:`_blank`,children:Oe})]})]}),t[67]=oe,t[68]=W);let G;t[69]!==B||t[70]!==W?(G=(0,J.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,W]}),t[69]=B,t[70]=W,t[71]=G):G=t[71];let K;t[72]===s?K=t[73]:(K=s.formatMessage(Y.verificationFormLabel),t[72]=s,t[73]=K);let X;t[74]!==le||t[75]!==s?(X=le?(0,J.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,J.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,J.jsx)(_,{...Y.accountLabel}),(0,J.jsx)(pe,{content:s.formatMessage(Y.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,J.jsx)(`button`,{...e,"aria-label":s.formatMessage(Y.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,J.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,J.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:le})]}):null,t[74]=le,t[75]=s,t[76]=X):X=t[76];let Z;t[77]!==I||t[78]!==s||t[79]!==w||t[80]!==R?(Z=R&&w?(0,J.jsx)(Ee,{onSuccess:I,verificationId:w,verificationUrl:R}):(0,J.jsx)(`div`,{"aria-busy":`true`,"aria-label":s.formatMessage(Y.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=I,t[78]=s,t[79]=w,t[80]=R,t[81]=Z):Z=t[81];let Q;t[82]!==K||t[83]!==X||t[84]!==Z?(Q=(0,J.jsxs)(`section`,{"aria-label":K,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=K,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==G||t[87]!==Q?($=(0,J.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,J.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[86]=G,t[87]=Q,t[88]=$):$=t[88],$}var ke,q,J,Ae,je,Y,X=e((()=>{ke=v(),S(),le(),ye(),De(),x(),w(),T(),me(),s(),l(),n(),u(),fe(),h(),q=t(y()),b(),ae(),J=ne(),Ae=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,je=`students_2026_preview`,Y=oe({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Z,Q,$,Me,Ne,Pe,Fe=e((()=>{ae(),Z=v(),D(),X(),xe(),Q=ne(),$={hasRouteMeta:!0},Me=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Ne=te(function(){"use forget";let e=(0,Z.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=re(),i;e[0]===r?i=e[1]:(i=(0,Q.jsx)(Oe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Q.jsx)(O,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Pe=g(C)}));e((()=>{Fe()}))();export{Pe as ErrorBoundary,Ne as default,$ as handle,Me as meta};
//# sourceMappingURL=students_.verify-enrdg68g.js.map