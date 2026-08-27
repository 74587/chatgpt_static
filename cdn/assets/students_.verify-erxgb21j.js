import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$W as n,GK as r,KK as i,QW as a,RW as o,UW as s,aG as c,b0 as l,c3 as u,dD as d,fD as f,fz as p,hz as m,oG as ee,x0 as h}from"./4813494d-mt10h505tja3mgsz.js";import{Bt as g,Cn as te,Dt as ne,Sn as _,Tn as v,Vt as re,Z as ie,_n as y,jt as ae,tn as b,wn as x,xn as S,zt as oe}from"./2340486e-m6nxarr6ck977yif.js";import{Bgt as se,Df as C,Tf as ce,Vgt as le,czt as ue,ln as de,lzt as w,tn as fe,un as pe,xf as me}from"./conversation-small-n11xtqlp8fqz6rnt.js";import{vy as he,yy as T}from"./30901919-gomybc5q3ytjqdoq.js";import{n as ge,t as _e}from"./6105d6cc-kwkzufg3e0w2y8yw.js";import{n as E,t as D}from"./9bfdcf20-h2zq9lbu4nhgionu.js";import{a as ve,l as O,n as ye,o as be,r as k,t as A,u as xe}from"./d4df9516-8yxvd280obfw89tu.js";import{a as Se,i as Ce}from"./1dd38b87-fqz3w6ztokvn300z.js";import{n as we,t as Te}from"./759cd6d0-d7zrcjve6dkoywd6.js";function j(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Ee(e,t){try{let n=new URL(e);return n.origin!==L||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function De(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ce),e}function Oe(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${B}${V}`}},L)}function ke(e){"use forget";let t=(0,P.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:a,onSuccess:o}=e,s=te(),c=i(),l=(0,F.useRef)(null),u=(0,F.useRef)(null),[d]=(0,F.useState)(N),f;if(t[0]!==d||t[1]!==c||t[2]!==r||t[3]!==n){bb0:{if(!c||d==null){f=null;break bb0}let e=Ee(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,De().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=c,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,m,ee;if(t[5]!==d||t[6]!==p||t[7]!==a||t[8]!==o||t[9]!==r?(m=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==L||e.source!==t.contentWindow||!j(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(j(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(R,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!j(n)||n.type!==`hook`||!j(n.hook)||!j(n.hook.data)||n.hook.data.verificationId!==r)return;let i=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof i==`string`&&i!==`collectStudentPersonalInfo`&&i!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&i===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},ee=[d,p,a,o,r],t[5]=d,t[6]=p,t[7]=a,t[8]=o,t[9]=r,t[10]=m,t[11]=ee):(m=t[10],ee=t[11]),(0,F.useEffect)(m,ee),p==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(H.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,I.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let h;t[16]===s?h=t[17]:(h=s.formatMessage(H.verificationTitle),t[16]=s,t[17]=h);let g;return t[18]!==p||t[19]!==h?(g=(0,I.jsx)(`iframe`,{ref:l,allow:`camera ${L}`,className:`block min-h-[100px] w-full border-0`,onLoad:M,referrerPolicy:`no-referrer`,src:p,title:h}),t[18]=p,t[19]=h,t[20]=g):g=t[20],g}function M(e){Oe(e.currentTarget)}function N(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var P,F,I,L,R,z,B,V,H,U=e((()=>{P=b(),C(),r(),F=t(v()),_(),I=x(),L=`https://services.sheerid.com`,R=100,z=2e3,B=`
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
`,V=`
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
`,H=S({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ae(e){"use forget";let t=(0,Me.c)(8),{sheerIdProgramId:r}=e,i=n(),a=i?.id??null,o=(0,K.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(A.clearModalError(),A.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),f(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,K.useEffect)(je,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==r||t[6]!==u?(d=(0,q.jsx)(G,{currentAccount:i,sheerIdProgramId:r},u),t[4]=i,t[5]=r,t[6]=u,t[7]=d):d=t[7],d}function je(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function G(e){"use forget";let t=(0,Me.c)(92),{currentAccount:n,sheerIdProgramId:r}=e,i=te(),s=ae(),c=a(),l=m(),[d]=oe(),f;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(f=h(),t[0]=f):f=t[0];let p=f,g=(0,K.useRef)(!1),ne=(0,K.useRef)(!1),_=(0,K.useRef)(!0),v;t[1]===d?v=t[2]:(v=d.get(Pe),t[1]=d,t[2]=v);let re=v,ie=`/students/2026#trigger_students-2026-faq-verification`,b;t[3]===re?b=t[4]:(b=new URLSearchParams({campaign:ce}).toString(),t[3]=re,t[4]=b);let x=`/students/claim?${b}`,S;t[5]===l?.email?S=t[6]:(S=p&&(l?.email?.trim()||u()?.user?.email?.trim())||null,t[5]=l?.email,t[6]=S);let C=S,le;t[7]!==x||t[8]!==r?(le={...me,landingPath:x,sheerIdProgramId:r},t[7]=x,t[8]=r,t[9]=le):le=t[9];let w=le,pe;t[10]!==n||t[11]!==w?(pe=n!=null&&(!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ue(n)),t[10]=n,t[11]=w,t[12]=pe):pe=t[12];let T=pe,ge=p&&n!=null&&!T,E;t[13]===ge?E=t[14]:(E={enabled:ge,reportRefreshErrors:!0},t[13]=ge,t[14]=E);let D=xe(w,E),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=be(O,k,w),Ce,we;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(we=()=>(_.current=!0,()=>{_.current=!1}),Ce=[],t[15]=Ce,t[16]=we):(Ce=t[15],we=t[16]),(0,K.useEffect)(we,Ce);let Te,j;t[17]===x?(Te=t[18],j=t[19]):(Te=()=>{p||g.current||(g.current=!0,ee({callbackUrl:x,fallbackScreenHint:`login`}))},j=[x,p],t[17]=x,t[18]=Te,t[19]=j),(0,K.useEffect)(Te,j);let Ee;t[20]!==c.isError||t[21]!==c.isFetching||t[22]!==c.isSuccess||t[23]!==x||t[24]!==n||t[25]!==D.name||t[26]!==T||t[27]!==s?(Ee=()=>{if(!p)return;let e=n==null&&!c.isFetching&&(c.isError||c.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||T||t)&&s(x,{replace:!0})},t[20]=c.isError,t[21]=c.isFetching,t[22]=c.isSuccess,t[23]=x,t[24]=n,t[25]=D.name,t[26]=T,t[27]=s,t[28]=Ee):Ee=t[28];let De;t[29]!==c.isError||t[30]!==c.isFetching||t[31]!==c.isSuccess||t[32]!==x||t[33]!==n||t[34]!==D||t[35]!==T||t[36]!==s?(De=[c.isError,c.isFetching,c.isSuccess,x,n,D,T,p,s],t[29]=c.isError,t[30]=c.isFetching,t[31]=c.isSuccess,t[32]=x,t[33]=n,t[34]=D,t[35]=T,t[36]=s,t[37]=De):De=t[37],(0,K.useEffect)(Ee,De);let Oe,M;t[38]!==k||t[39]!==x||t[40]!==n||t[41]!==D.name||t[42]!==T||t[43]!==s||t[44]!==O||t[45]!==A?(Oe=()=>{!p||n==null||T||D.name!==`needs-verification`||O!=null&&k!=null||ne.current||(ne.current=!0,A().then(()=>{!_.current||o()?.id!==n.id||ve.getState().modalErrorMessage==null||s(x,{replace:!0,state:{students2026VerificationError:!0}})}))},M=[k,x,n,D.name,T,p,s,O,A],t[38]=k,t[39]=x,t[40]=n,t[41]=D.name,t[42]=T,t[43]=s,t[44]=O,t[45]=A,t[46]=Oe,t[47]=M):(Oe=t[46],M=t[47]),(0,K.useEffect)(Oe,M);let N;t[48]===n?N=t[49]:(N=()=>{let e=n?.normalizedAccountUserId;n==null||typeof e!=`string`||Se(`verification_submitted`,{identity:{accountId:n.id,accountUserId:e}})},t[48]=n,t[49]=N);let P=N,F;t[50]!==x||t[51]!==s?(F=()=>{s(de(x,fe),{replace:!0})},t[50]=x,t[51]=s,t[52]=F):F=t[52];let I=F,L;t[53]!==k||t[54]!==x||t[55]!==n||t[56]!==T||t[57]!==r||t[58]!==O?(L=p&&n!=null&&O&&k&&!T?ye(r,`${window.location.origin}${de(x,fe)}`,O,k):null,t[53]=k,t[54]=x,t[55]=n,t[56]=T,t[57]=r,t[58]=O,t[59]=L):L=t[59];let R=L,z;t[60]===i?z=t[61]:(z=i.formatMessage(J.artworkAlt),t[60]=i,t[61]=z);let B;t[62]===z?B=t[63]:(B=(0,q.jsx)(_e,{altText:z,assetUrl:Ne,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[62]=z,t[63]=B);let V;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.title})}),t[64]=V):V=t[64];let H;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,q.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopTitle})})]}),t[65]=H):H=t[65];let U;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.description})}),t[66]=U):U=t[66];let Ae;t[67]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopDescription})}),t[67]=Ae):Ae=t[67];let je;t[68]===Symbol.for(`react.memo_cache_sentinel`)?(je=(0,q.jsx)(y,{...J.verificationHelp}),t[68]=je):je=t[68];let W;t[69]===ie?W=t[70]:(W=(0,q.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,q.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,Ae,(0,q.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ie,rel:`noopener noreferrer`,target:`_blank`,children:je})]})]}),t[69]=ie,t[70]=W);let G;t[71]!==B||t[72]!==W?(G=(0,q.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,W]}),t[71]=B,t[72]=W,t[73]=G):G=t[73];let Y;t[74]===i?Y=t[75]:(Y=i.formatMessage(J.verificationFormLabel),t[74]=i,t[75]=Y);let X;t[76]!==C||t[77]!==i?(X=C?(0,q.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,q.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,q.jsx)(y,{...J.accountLabel}),(0,q.jsx)(se,{content:i.formatMessage(J.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,q.jsx)(`button`,{...e,"aria-label":i.formatMessage(J.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,q.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,q.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:C})]}):null,t[76]=C,t[77]=i,t[78]=X):X=t[78];let Z;t[79]!==P||t[80]!==I||t[81]!==i||t[82]!==O||t[83]!==R?(Z=R&&O?(0,q.jsx)(ke,{onSubmitted:P,onSuccess:I,verificationId:O,verificationUrl:R}):(0,q.jsx)(`div`,{"aria-busy":`true`,"aria-label":i.formatMessage(J.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[79]=P,t[80]=I,t[81]=i,t[82]=O,t[83]=R,t[84]=Z):Z=t[84];let Q;t[85]!==Y||t[86]!==X||t[87]!==Z?(Q=(0,q.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[85]=Y,t[86]=X,t[87]=Z,t[88]=Q):Q=t[88];let $;return t[89]!==G||t[90]!==Q?($=(0,q.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,q.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[89]=G,t[90]=Q,t[91]=$):$=t[91],$}var Me,K,q,Ne,Pe,J,Y=e((()=>{Me=b(),T(),le(),ge(),U(),C(),O(),Ce(),k(),pe(),s(),c(),p(),l(),w(),d(),K=t(v()),_(),ie(),q=x(),Ne=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Pe=`students_2026_preview`,J=S({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),X,Z,Q,$,Fe,Ie,Le=e((()=>{ie(),X=b(),we(),Y(),E(),Z=x(),Q={hasRouteMeta:!0},$=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Fe=g(function(){"use forget";let e=(0,X.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Z.jsx)(Ae,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Z.jsx)(Te,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ie=re(D)}));e((()=>{Le()}))();export{Ie as ErrorBoundary,Fe as default,Q as handle,$ as meta};
//# sourceMappingURL=students_.verify-erxgb21j.js.map