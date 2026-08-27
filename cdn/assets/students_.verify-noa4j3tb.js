import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{A_ as n,BW as r,FW as i,GK as a,WK as o,XW as s,YW as c,b0 as l,fz as u,k_ as d,lz as f,nG as p,rG as ee,s3 as te,y0 as m}from"./4813494d-3uapsrnqf5gilfog.js";import{Bt as h,Cn as ne,Dt as re,Sn as ie,Tn as g,Vt as ae,Z as oe,_n as _,jt as se,tn as v,wn as y,xn as b,zt as ce}from"./2340486e-m6nxarr6ck977yif.js";import{Ff as le,Lf as x,Mzt as ue,Nzt as de,c_t as S,jf as fe,ln as pe,s_t as me,tn as he,un as ge}from"./conversation-small-b1z0b1pt3j1edgca.js";import{by as _e,xy as C}from"./30901919-bc7e62fjit8f36fd.js";import{n as ve,t as ye}from"./6105d6cc-hhmm9skzyqi65c72.js";import{n as be,t as w}from"./9bfdcf20-4fyk4jdzvmhuccaz.js";import{a as xe,l as T,n as Se,o as Ce,r as E,t as D,u as we}from"./d4df9516-6t4nfy854o998ahg.js";import{a as Te,i as O}from"./1dd38b87-mppivs8pbtfqb5z6.js";import{n as k,t as A}from"./759cd6d0-o6e3qshhe33z4upn.js";function j(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function M(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function N(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,le),e}function P(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function Ee(e){"use forget";let t=(0,Oe.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:o}=e,s=ne(),c=a(),l=(0,I.useRef)(null),u=(0,I.useRef)(null),[d]=(0,I.useState)(De),f;if(t[0]!==d||t[1]!==c||t[2]!==r||t[3]!==n){bb0:{if(!c||d==null){f=null;break bb0}let e=M(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,N().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,ee,te;if(t[5]!==d||t[6]!==p||t[7]!==i||t[8]!==o||t[9]!==r?(ee=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!j(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(j(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!j(n)||n.type!==`hook`||!j(n.hook)||!j(n.hook.data)||n.hook.data.verificationId!==r)return;let a=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof a==`string`&&a!==`collectStudentPersonalInfo`&&a!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&a===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{i?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[d,p,i,o,r],t[5]=d,t[6]=p,t[7]=i,t[8]=o,t[9]=r,t[10]=ee,t[11]=te):(ee=t[10],te=t[11]),(0,I.useEffect)(ee,te),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===s?m=t[17]:(m=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=m);let h;return t[18]!==p||t[19]!==m?(h=(0,L.jsx)(`iframe`,{ref:l,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:F,referrerPolicy:`no-referrer`,src:p,title:m}),t[18]=p,t[19]=m,t[20]=h):h=t[20],h}function F(e){P(e.currentTarget)}function De(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var Oe,I,L,R,z,B,V,H,U,ke=e((()=>{Oe=v(),x(),o(),I=t(g()),ie(),L=y(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ae(e){"use forget";let t=(0,Me.c)(8),{sheerIdProgramId:r}=e,i=s(),a=i?.id??null,o=(0,K.useRef)(a),c,l;t[0]===a?(c=t[1],l=t[2]):(c=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(D.clearModalError(),D.setIsLoading(!1))},l=[a],t[0]=a,t[1]=c,t[2]=l),n(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,K.useEffect)(je,u);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==r||t[6]!==d?(f=(0,q.jsx)(G,{currentAccount:i,sheerIdProgramId:r},d),t[4]=i,t[5]=r,t[6]=d,t[7]=f):f=t[7],f}function je(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function G(e){"use forget";let t=(0,Me.c)(92),{currentAccount:n,sheerIdProgramId:r}=e,a=ne(),o=se(),s=c(),d=u(),[f]=ce(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=l(),t[0]=p):p=t[0];let m=p,h=(0,K.useRef)(!1),re=(0,K.useRef)(!1),ie=(0,K.useRef)(!0),g;t[1]===f?g=t[2]:(g=f.get(Pe),t[1]=f,t[2]=g);let ae=g,oe=`/students/2026#trigger_students-2026-faq-verification`,v;t[3]===ae?v=t[4]:(v=new URLSearchParams({campaign:le}).toString(),t[3]=ae,t[4]=v);let y=`/students/claim?${v}`,b;t[5]===d?.email?b=t[6]:(b=m&&(d?.email?.trim()||te()?.user?.email?.trim())||null,t[5]=d?.email,t[6]=b);let x=b,de;t[7]!==y||t[8]!==r?(de={...fe,landingPath:y,sheerIdProgramId:r},t[7]=y,t[8]=r,t[9]=de):de=t[9];let S=de,ge;t[10]!==n||t[11]!==S?(ge=n!=null&&(!n.isPersonalAccount()||S.blocksMobileStoreSubscribers&&ue(n)),t[10]=n,t[11]=S,t[12]=ge):ge=t[12];let C=ge,ve=m&&n!=null&&!C,be;t[13]===ve?be=t[14]:(be={enabled:ve,reportRefreshErrors:!0},t[13]=ve,t[14]=be);let w=we(S,be),T=w.name===`needs-verification`?w.verificationId??null:null,E=w.name===`needs-verification`?w.accountVerificationId??null:null,D=Ce(T,E,S),O,k;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(ie.current=!0,()=>{ie.current=!1}),O=[],t[15]=O,t[16]=k):(O=t[15],k=t[16]),(0,K.useEffect)(k,O);let A,j;t[17]===y?(A=t[18],j=t[19]):(A=()=>{m||h.current||(h.current=!0,ee({callbackUrl:y,fallbackScreenHint:`login`}))},j=[y,m],t[17]=y,t[18]=A,t[19]=j),(0,K.useEffect)(A,j);let M;t[20]!==s.isError||t[21]!==s.isFetching||t[22]!==s.isSuccess||t[23]!==y||t[24]!==n||t[25]!==w.name||t[26]!==C||t[27]!==o?(M=()=>{if(!m)return;let e=n==null&&!s.isFetching&&(s.isError||s.isSuccess),t=w.name===`coming-soon`||w.name===`error`||w.name===`verified`||w.name===`enrolled`;(e||C||t)&&o(y,{replace:!0})},t[20]=s.isError,t[21]=s.isFetching,t[22]=s.isSuccess,t[23]=y,t[24]=n,t[25]=w.name,t[26]=C,t[27]=o,t[28]=M):M=t[28];let N;t[29]!==s.isError||t[30]!==s.isFetching||t[31]!==s.isSuccess||t[32]!==y||t[33]!==n||t[34]!==w||t[35]!==C||t[36]!==o?(N=[s.isError,s.isFetching,s.isSuccess,y,n,w,C,m,o],t[29]=s.isError,t[30]=s.isFetching,t[31]=s.isSuccess,t[32]=y,t[33]=n,t[34]=w,t[35]=C,t[36]=o,t[37]=N):N=t[37],(0,K.useEffect)(M,N);let P,F;t[38]!==E||t[39]!==y||t[40]!==n||t[41]!==w.name||t[42]!==C||t[43]!==o||t[44]!==T||t[45]!==D?(P=()=>{!m||n==null||C||w.name!==`needs-verification`||T!=null&&E!=null||re.current||(re.current=!0,D().then(()=>{!ie.current||i()?.id!==n.id||xe.getState().modalErrorMessage==null||o(y,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[E,y,n,w.name,C,m,o,T,D],t[38]=E,t[39]=y,t[40]=n,t[41]=w.name,t[42]=C,t[43]=o,t[44]=T,t[45]=D,t[46]=P,t[47]=F):(P=t[46],F=t[47]),(0,K.useEffect)(P,F);let De;t[48]===n?De=t[49]:(De=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||Te(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[48]=n,t[49]=De);let Oe=De,I;t[50]!==y||t[51]!==o?(I=()=>{o(pe(y,he),{replace:!0})},t[50]=y,t[51]=o,t[52]=I):I=t[52];let L=I,R;t[53]!==E||t[54]!==y||t[55]!==n||t[56]!==C||t[57]!==r||t[58]!==T?(R=m&&n!=null&&T&&E&&!C?Se(r,`${window.location.origin}${pe(y,he)}`,T,E):null,t[53]=E,t[54]=y,t[55]=n,t[56]=C,t[57]=r,t[58]=T,t[59]=R):R=t[59];let z=R,B;t[60]===a?B=t[61]:(B=a.formatMessage(J.artworkAlt),t[60]=a,t[61]=B);let V;t[62]===B?V=t[63]:(V=(0,q.jsx)(ye,{altText:B,assetUrl:Ne,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[62]=B,t[63]=V);let H;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(_,{...J.title})}),t[64]=H):H=t[64];let U;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,q.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[H,(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(_,{...J.desktopTitle})})]}),t[65]=U):U=t[65];let ke;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(_,{...J.description})}),t[66]=ke):ke=t[66];let Ae;t[67]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(_,{...J.desktopDescription})}),t[67]=Ae):Ae=t[67];let je;t[68]===Symbol.for(`react.memo_cache_sentinel`)?(je=(0,q.jsx)(_,{...J.verificationHelp}),t[68]=je):je=t[68];let W;t[69]===oe?W=t[70]:(W=(0,q.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[U,(0,q.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ke,Ae,(0,q.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:oe,rel:`noopener noreferrer`,target:`_blank`,children:je})]})]}),t[69]=oe,t[70]=W);let G;t[71]!==V||t[72]!==W?(G=(0,q.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[V,W]}),t[71]=V,t[72]=W,t[73]=G):G=t[73];let Y;t[74]===a?Y=t[75]:(Y=a.formatMessage(J.verificationFormLabel),t[74]=a,t[75]=Y);let X;t[76]!==x||t[77]!==a?(X=x?(0,q.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,q.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,q.jsx)(_,{...J.accountLabel}),(0,q.jsx)(me,{content:a.formatMessage(J.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,q.jsx)(`button`,{...e,"aria-label":a.formatMessage(J.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,q.jsx)(_e,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,q.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:x})]}):null,t[76]=x,t[77]=a,t[78]=X):X=t[78];let Z;t[79]!==Oe||t[80]!==L||t[81]!==a||t[82]!==T||t[83]!==z?(Z=z&&T?(0,q.jsx)(Ee,{onSubmitted:Oe,onSuccess:L,verificationId:T,verificationUrl:z}):(0,q.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(J.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[79]=Oe,t[80]=L,t[81]=a,t[82]=T,t[83]=z,t[84]=Z):Z=t[84];let Q;t[85]!==Y||t[86]!==X||t[87]!==Z?(Q=(0,q.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[85]=Y,t[86]=X,t[87]=Z,t[88]=Q):Q=t[88];let $;return t[89]!==G||t[90]!==Q?($=(0,q.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,q.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[89]=G,t[90]=Q,t[91]=$):$=t[91],$}var Me,K,q,Ne,Pe,J,Y=e((()=>{Me=v(),C(),S(),ve(),ke(),x(),T(),O(),E(),ge(),r(),p(),f(),m(),de(),d(),K=t(g()),ie(),oe(),q=y(),Ne=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Pe=`students_2026_preview`,J=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),X,Z,Q,$,Fe,Ie,Le=e((()=>{oe(),X=v(),k(),Y(),be(),Z=y(),Q={hasRouteMeta:!0},$=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Fe=h(function(){"use forget";let e=(0,X.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=re(),i;e[0]===r?i=e[1]:(i=(0,Z.jsx)(Ae,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Z.jsx)(A,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ie=ae(w)}));e((()=>{Le()}))();export{Ie as ErrorBoundary,Fe as default,Q as handle,$ as meta};
//# sourceMappingURL=students_.verify-noa4j3tb.js.map