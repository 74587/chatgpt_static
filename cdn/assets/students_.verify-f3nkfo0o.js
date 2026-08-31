import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{M_ as n,N_ as r,OG as i,SG as a,_q as o,d6 as s,fG as c,kG as l,sG as u,v2 as d,vq as f,wz as p,xG as ee,xz as m,y2 as h}from"./4813494d-xcfj9ah4drz87q60.js";import{Bt as g,Dt as te,Fn as ne,In as _,Ln as v,Nn as re,Pn as ie,Vt as y,Z as b,jt as ae,kn as x,xn as S,zt as oe}from"./2340486e-bcoev3jbtc75b03s.js";import{Ap as C,Ivt as se,Lvt as w,Op as ce,fVt as le,gn as T,hn as ue,pVt as de,sn as fe,wp as pe}from"./conversation-small-c6t71ctwl0fw0887.js";import{Dy as E,Ey as me}from"./30901919-c0yz7y651edvgwj9.js";import{n as he,t as ge}from"./6105d6cc-llje3ychnrcln0sx.js";import{n as _e,t as D}from"./9bfdcf20-om3fxfc79z306pa9.js";import{a as ve,l as O,n as ye,o as be,r as k,t as A,u as xe}from"./d4df9516-b6oqqoardebu5wzl.js";import{a as Se,i as j}from"./1dd38b87-k62z1pfobvly3gj2.js";import{n as M,t as N}from"./759cd6d0-ff1p5je43kjm5j8b.js";function P(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function F(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Ce(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ce),e}function we(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function Te(e){"use forget";let t=(0,Oe.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=ne(),s=f(),c=(0,I.useRef)(null),l=(0,I.useRef)(null),[u]=(0,I.useState)(De),d;if(t[0]!==u||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||u==null){d=null;break bb0}let e=F(n,r);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,Ce().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=s,t[2]=r,t[3]=n,t[4]=d}else d=t[4];let p=d,ee,m;if(t[5]!==u||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(u==null||p==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!P(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(P(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!P(n)||n.type!==`hook`||!P(n.hook)||!P(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,d=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!d)){if(l.current!==r){l.current=r;try{i?.()}catch{}}d&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},m=[u,p,i,a,r],t[5]=u,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=m):(ee=t[10],m=t[11]),(0,I.useEffect)(ee,m),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===o?h=t[17]:(h=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=h);let g;return t[18]!==p||t[19]!==h?(g=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ee,referrerPolicy:`no-referrer`,src:p,title:h}),t[18]=p,t[19]=h,t[20]=g):g=t[20],g}function Ee(e){we(e.currentTarget)}function De(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var Oe,I,L,R,z,B,V,H,U,ke=e((()=>{Oe=S(),C(),o(),I=t(v()),ie(),L=_(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=re({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ae(e){"use forget";let t=(0,Me.c)(8),{sheerIdProgramId:n}=e,i=a(),o=i?.id??null,s=(0,K.useRef)(o),c,l;t[0]===o?(c=t[1],l=t[2]):(c=()=>{if(o==null)return;let e=s.current;s.current=o,e!=null&&e!==o&&(A.clearModalError(),A.setIsLoading(!1))},l=[o],t[0]=o,t[1]=c,t[2]=l),r(c,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,K.useEffect)(je,u);let d=i?.id??`no-account`,f;return t[4]!==i||t[5]!==n||t[6]!==d?(f=(0,q.jsx)(G,{currentAccount:i,sheerIdProgramId:n},d),t[4]=i,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function je(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function G(e){"use forget";let t=(0,Me.c)(92),{currentAccount:n,sheerIdProgramId:r}=e,i=ne(),a=ae(),o=ee(),c=p(),[d]=oe(),f;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(f=h(),t[0]=f):f=t[0];let m=f,g=(0,K.useRef)(!1),te=(0,K.useRef)(!1),_=(0,K.useRef)(!0),v;t[1]===d?v=t[2]:(v=d.get(Pe),t[1]=d,t[2]=v);let re=v,ie=`/students/2026#trigger_students-2026-faq-verification`,y;t[3]===re?y=t[4]:(y=new URLSearchParams({campaign:ce}).toString(),t[3]=re,t[4]=y);let b=`/students/claim?${y}`,S;t[5]===c?.email?S=t[6]:(S=m&&(c?.email?.trim()||s()?.user?.email?.trim())||null,t[5]=c?.email,t[6]=S);let C=S,w;t[7]!==b||t[8]!==r?(w={...pe,landingPath:b,sheerIdProgramId:r},t[7]=b,t[8]=r,t[9]=w):w=t[9];let T=w,de;t[10]!==n||t[11]!==T?(de=n!=null&&(!n.isPersonalAccount()||T.blocksMobileStoreSubscribers&&le(n)),t[10]=n,t[11]=T,t[12]=de):de=t[12];let E=de,he=m&&n!=null&&!E,_e;t[13]===he?_e=t[14]:(_e={enabled:he,reportRefreshErrors:!0},t[13]=he,t[14]=_e);let D=xe(T,_e),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=be(O,k,T),j,M;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(M=()=>(_.current=!0,()=>{_.current=!1}),j=[],t[15]=j,t[16]=M):(j=t[15],M=t[16]),(0,K.useEffect)(M,j);let N,P;t[17]===b?(N=t[18],P=t[19]):(N=()=>{m||g.current||(g.current=!0,l({callbackUrl:b,fallbackScreenHint:`login`}))},P=[b,m],t[17]=b,t[18]=N,t[19]=P),(0,K.useEffect)(N,P);let F;t[20]!==o.isError||t[21]!==o.isFetching||t[22]!==o.isSuccess||t[23]!==b||t[24]!==n||t[25]!==D.name||t[26]!==E||t[27]!==a?(F=()=>{if(!m)return;let e=n==null&&!o.isFetching&&(o.isError||o.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||E||t)&&a(b,{replace:!0})},t[20]=o.isError,t[21]=o.isFetching,t[22]=o.isSuccess,t[23]=b,t[24]=n,t[25]=D.name,t[26]=E,t[27]=a,t[28]=F):F=t[28];let Ce;t[29]!==o.isError||t[30]!==o.isFetching||t[31]!==o.isSuccess||t[32]!==b||t[33]!==n||t[34]!==D||t[35]!==E||t[36]!==a?(Ce=[o.isError,o.isFetching,o.isSuccess,b,n,D,E,m,a],t[29]=o.isError,t[30]=o.isFetching,t[31]=o.isSuccess,t[32]=b,t[33]=n,t[34]=D,t[35]=E,t[36]=a,t[37]=Ce):Ce=t[37],(0,K.useEffect)(F,Ce);let we,Ee;t[38]!==k||t[39]!==b||t[40]!==n||t[41]!==D.name||t[42]!==E||t[43]!==a||t[44]!==O||t[45]!==A?(we=()=>{!m||n==null||E||D.name!==`needs-verification`||O!=null&&k!=null||te.current||(te.current=!0,A().then(()=>{!_.current||u()?.id!==n.id||ve.getState().modalErrorMessage==null||a(b,{replace:!0,state:{students2026VerificationError:!0}})}))},Ee=[k,b,n,D.name,E,m,a,O,A],t[38]=k,t[39]=b,t[40]=n,t[41]=D.name,t[42]=E,t[43]=a,t[44]=O,t[45]=A,t[46]=we,t[47]=Ee):(we=t[46],Ee=t[47]),(0,K.useEffect)(we,Ee);let De;t[48]===n?De=t[49]:(De=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||Se(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[48]=n,t[49]=De);let Oe=De,I;t[50]!==b||t[51]!==a?(I=()=>{a(ue(b,fe),{replace:!0})},t[50]=b,t[51]=a,t[52]=I):I=t[52];let L=I,R;t[53]!==k||t[54]!==b||t[55]!==n||t[56]!==E||t[57]!==r||t[58]!==O?(R=m&&n!=null&&O&&k&&!E?ye(r,`${window.location.origin}${ue(b,fe)}`,O,k):null,t[53]=k,t[54]=b,t[55]=n,t[56]=E,t[57]=r,t[58]=O,t[59]=R):R=t[59];let z=R,B;t[60]===i?B=t[61]:(B=i.formatMessage(J.artworkAlt),t[60]=i,t[61]=B);let V;t[62]===B?V=t[63]:(V=(0,q.jsx)(ge,{altText:B,assetUrl:Ne,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[62]=B,t[63]=V);let H;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(x,{...J.title})}),t[64]=H):H=t[64];let U;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,q.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[H,(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(x,{...J.desktopTitle})})]}),t[65]=U):U=t[65];let ke;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(ke=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(x,{...J.description})}),t[66]=ke):ke=t[66];let Ae;t[67]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(x,{...J.desktopDescription})}),t[67]=Ae):Ae=t[67];let je;t[68]===Symbol.for(`react.memo_cache_sentinel`)?(je=(0,q.jsx)(x,{...J.verificationHelp}),t[68]=je):je=t[68];let W;t[69]===ie?W=t[70]:(W=(0,q.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[U,(0,q.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[ke,Ae,(0,q.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ie,rel:`noopener noreferrer`,target:`_blank`,children:je})]})]}),t[69]=ie,t[70]=W);let G;t[71]!==V||t[72]!==W?(G=(0,q.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[V,W]}),t[71]=V,t[72]=W,t[73]=G):G=t[73];let Y;t[74]===i?Y=t[75]:(Y=i.formatMessage(J.verificationFormLabel),t[74]=i,t[75]=Y);let X;t[76]!==C||t[77]!==i?(X=C?(0,q.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,q.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,q.jsx)(x,{...J.accountLabel}),(0,q.jsx)(se,{content:i.formatMessage(J.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,q.jsx)(`button`,{...e,"aria-label":i.formatMessage(J.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,q.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,q.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:C})]}):null,t[76]=C,t[77]=i,t[78]=X):X=t[78];let Z;t[79]!==Oe||t[80]!==L||t[81]!==i||t[82]!==O||t[83]!==z?(Z=z&&O?(0,q.jsx)(Te,{onSubmitted:Oe,onSuccess:L,verificationId:O,verificationUrl:z}):(0,q.jsx)(`div`,{"aria-busy":`true`,"aria-label":i.formatMessage(J.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[79]=Oe,t[80]=L,t[81]=i,t[82]=O,t[83]=z,t[84]=Z):Z=t[84];let Q;t[85]!==Y||t[86]!==X||t[87]!==Z?(Q=(0,q.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[85]=Y,t[86]=X,t[87]=Z,t[88]=Q):Q=t[88];let $;return t[89]!==G||t[90]!==Q?($=(0,q.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,q.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[89]=G,t[90]=Q,t[91]=$):$=t[91],$}var Me,K,q,Ne,Pe,J,Y=e((()=>{Me=S(),E(),w(),he(),ke(),C(),O(),j(),k(),T(),c(),i(),m(),d(),de(),n(),K=t(v()),ie(),b(),q=_(),Ne=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Pe=`students_2026_preview`,J=re({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),X,Z,Q,$,Fe,Ie,Le=e((()=>{b(),X=S(),M(),Y(),_e(),Z=_(),Q={hasRouteMeta:!0},$=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Fe=g(function(){"use forget";let e=(0,X.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=te(),i;e[0]===r?i=e[1]:(i=(0,Z.jsx)(Ae,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Z.jsx)(N,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ie=y(D)}));e((()=>{Le()}))();export{Ie as ErrorBoundary,Fe as default,Q as handle,$ as meta};
//# sourceMappingURL=students_.verify-f3nkfo0o.js.map