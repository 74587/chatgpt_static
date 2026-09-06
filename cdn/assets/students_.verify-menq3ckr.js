import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{CY as n,DV as r,Dq as i,Eq as a,F5 as o,H3 as s,Kv as c,Nq as l,Pq as u,SY as d,TV as f,V3 as p,_q as m,fq as h,qv as g}from"./4813494d-hrplraurzfyvxb10.js";import{Bt as ee,Fn as _,Ht as te,In as v,Ln as ne,Mt as re,Ot as ie,Q as ae,Rn as y,Sn as b,Vt as oe,jn as x,zn as S}from"./2340486e-dyt4epctwx2pn2sj.js";import{AKt as se,Cn as ce,GSt as le,Jf as ue,KSt as C,Qf as de,ep as w,hn as fe,jKt as T,wn as pe}from"./conversation-small-hiw4wce20lu6te81.js";import{vy as me,yy as he}from"./30901919-e6xiy7p0t3hzp9e4.js";import{Gd as ge,Jd as _e,Kd as E,qd as ve}from"./c2675c8c-f6cd0ubcb7y7eluj.js";import{n as D,t as ye}from"./6105d6cc-cfubpp0rcaqd3q3r.js";import{n as O,t as be}from"./9bfdcf20-f0y3asjhwxyq6d1h.js";import{a as xe,d as k,f as Se,l as A,n as Ce,o as we,r as j,t as M,u as Te}from"./d4df9516-izarjtt849f6enfy.js";import{n as Ee,t as De}from"./759cd6d0-osl166f72nuqm5kr.js";function N(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Oe(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function ke(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,de),e}function Ae(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function je(e){"use forget";let t=(0,F.c)(21),{verificationUrl:r,verificationId:i,onSubmitted:a,onSuccess:o}=e,s=ne(),c=n(),l=(0,I.useRef)(null),u=(0,I.useRef)(null),[d]=(0,I.useState)(P),f;if(t[0]!==d||t[1]!==c||t[2]!==i||t[3]!==r){bb0:{if(!c||d==null){f=null;break bb0}let e=Oe(r,i);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,ke().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=i,t[3]=r,t[4]=f}else f=t[4];let p=f,m,h;if(t[5]!==d||t[6]!==p||t[7]!==a||t[8]!==o||t[9]!==i?(m=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!N(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(N(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!N(n)||n.type!==`hook`||!N(n.hook)||!N(n.hook.data)||n.hook.data.verificationId!==i)return;let r=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof r==`string`&&r!==`collectStudentPersonalInfo`&&r!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&r===`success`;if(!(!s&&!c)){if(u.current!==i){u.current=i;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},h=[d,p,a,o,i],t[5]=d,t[6]=p,t[7]=a,t[8]=o,t[9]=i,t[10]=m,t[11]=h):(m=t[10],h=t[11]),(0,I.useEffect)(m,h),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(U.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let g;t[16]===s?g=t[17]:(g=s.formatMessage(U.verificationTitle),t[16]=s,t[17]=g);let ee;return t[18]!==p||t[19]!==g?(ee=(0,L.jsx)(`iframe`,{ref:l,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Me,referrerPolicy:`no-referrer`,src:p,title:g}),t[18]=p,t[19]=g,t[20]=ee):ee=t[20],ee}function Me(e){Ae(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,Ne=e((()=>{F=b(),w(),d(),I=t(S()),v(),L=y(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=_({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=i(),a=r?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(M.clearModalError(),M.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),g(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:n,sheerIdProgramId:i}=e,c=ne(),l=re(),d=a(),f=r(),[p]=ee(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=s(),t[0]=m):m=t[0];let _=m,te;t[1]===p?te=t[2]:(te=()=>{ve(p)},t[1]=p,t[2]=te);let v;t[3]!==n||t[4]!==p?(v=[p,n,_],t[3]=n,t[4]=p,t[5]=v):v=t[5],g(te,v);let ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!1),y=(0,W.useRef)(!0),b;t[6]===p?b=t[7]:(b=p.get(Be),t[6]=p,t[7]=b);let oe=b,S=`/students/2026#trigger_students-2026-faq-verification`,C;t[8]===oe?C=t[9]:(C=new URLSearchParams({campaign:de}).toString(),t[8]=oe,t[9]=C);let w=`/students/claim?${C}`,T;t[10]===f?.email?T=t[11]:(T=_&&(f?.email?.trim()||o()?.user?.email?.trim())||null,t[10]=f?.email,t[11]=T);let pe=T,he;t[12]!==w||t[13]!==i?(he={...ue,landingPath:w,sheerIdProgramId:i},t[12]=w,t[13]=i,t[14]=he):he=t[14];let E=he,D;t[15]!==n||t[16]!==E?(D=n!=null&&(Te(n)||!n.isPersonalAccount()||E.blocksMobileStoreSubscribers&&se(n)),t[15]=n,t[16]=E,t[17]=D):D=t[17];let O=D,be=_&&n!=null&&!O,k;t[18]===be?k=t[19]:(k={enabled:be,reportRefreshErrors:!0},t[18]=be,t[19]=k);let A=Se(E,k),j=A.name===`needs-verification`?A.verificationId??null:null,M=A.name===`needs-verification`?A.accountVerificationId??null:null,Ee=we(j,M,E),De,N;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(De=()=>(y.current=!0,()=>{y.current=!1}),N=[],t[20]=De,t[21]=N):(De=t[20],N=t[21]),(0,W.useEffect)(De,N);let Oe,ke;t[22]===w?(Oe=t[23],ke=t[24]):(Oe=()=>{_||ie.current||(ie.current=!0,u({callbackUrl:ge(w),fallbackScreenHint:`login`}))},ke=[w,_],t[22]=w,t[23]=Oe,t[24]=ke),(0,W.useEffect)(Oe,ke);let Ae;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==w||t[29]!==n||t[30]!==A.name||t[31]!==O||t[32]!==l?(Ae=()=>{if(!_)return;let e=n==null&&!d.isFetching&&(d.isError||d.isSuccess),t=A.name===`coming-soon`||A.name===`error`||A.name===`verified`||A.name===`enrolled`;(e||O||t)&&l(w,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=w,t[29]=n,t[30]=A.name,t[31]=O,t[32]=l,t[33]=Ae):Ae=t[33];let Me;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==w||t[38]!==n||t[39]!==A||t[40]!==O||t[41]!==l?(Me=[d.isError,d.isFetching,d.isSuccess,w,n,A,O,_,l],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=w,t[38]=n,t[39]=A,t[40]=O,t[41]=l,t[42]=Me):Me=t[42],(0,W.useEffect)(Ae,Me);let P,F;t[43]!==M||t[44]!==w||t[45]!==n||t[46]!==A.name||t[47]!==O||t[48]!==l||t[49]!==j||t[50]!==Ee?(P=()=>{!_||n==null||O||A.name!==`needs-verification`||j!=null&&M!=null||ae.current||(ae.current=!0,Ee().then(()=>{!y.current||h()?.id!==n.id||xe.getState().modalErrorMessage==null||l(w,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[M,w,n,A.name,O,_,l,j,Ee],t[43]=M,t[44]=w,t[45]=n,t[46]=A.name,t[47]=O,t[48]=l,t[49]=j,t[50]=Ee,t[51]=P,t[52]=F):(P=t[51],F=t[52]),(0,W.useEffect)(P,F);let I;t[53]===n?I=t[54]:(I=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||_e(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[53]=n,t[54]=I);let L=I,R;t[55]!==w||t[56]!==l?(R=()=>{l(ce(w,fe),{replace:!0})},t[55]=w,t[56]=l,t[57]=R):R=t[57];let z=R,B;t[58]!==M||t[59]!==w||t[60]!==n||t[61]!==O||t[62]!==i||t[63]!==j?(B=_&&n!=null&&j&&M&&!O?Ce(i,`${window.location.origin}${ce(w,fe)}`,j,M):null,t[58]=M,t[59]=w,t[60]=n,t[61]=O,t[62]=i,t[63]=j,t[64]=B):B=t[64];let V=B,H;t[65]===c?H=t[66]:(H=c.formatMessage(K.artworkAlt),t[65]=c,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(ye,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(x,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(x,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(x,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(x,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(x,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===S?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:S,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=S,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===c?Y=t[80]:(Y=c.formatMessage(K.verificationFormLabel),t[79]=c,t[80]=Y);let X;t[81]!==pe||t[82]!==c?(X=pe?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(x,{...K.accountLabel}),(0,G.jsx)(le,{content:c.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":c.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(me,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:pe})]}):null,t[81]=pe,t[82]=c,t[83]=X):X=t[83];let Z;t[84]!==L||t[85]!==z||t[86]!==c||t[87]!==j||t[88]!==V?(Z=V&&j?(0,G.jsx)(je,{onSubmitted:L,onSuccess:z,verificationId:j,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=L,t[85]=z,t[86]=c,t[87]=j,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=b(),he(),C(),D(),Ne(),w(),A(),k(),E(),j(),pe(),m(),l(),f(),p(),T(),c(),W=t(S()),v(),ae(),G=y(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=_({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{ae(),J=b(),Ee(),q(),O(),Y=y(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=oe(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ie(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(De,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=te(be)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-menq3ckr.js.map