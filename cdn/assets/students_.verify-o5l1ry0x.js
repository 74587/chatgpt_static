import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{FK as n,HW as r,IK as i,NW as a,OW as o,Q4 as s,UW as c,XW as l,YW as u,d0 as d,iD as f,iz as p,rD as m,sz as h,u0 as g}from"./4813494d-k0pbr7da5ypgp5oo.js";import{Bt as ee,Cn as te,Dt as ne,Sn as re,Vt as _,Z as ie,_n as v,bn as y,jt as ae,tn as b,wn as x,xn as S,zt as oe}from"./2340486e-abcdn4jh3ig19emg.js";import{Ff as se,Fht as ce,JLt as le,Lf as C,Pht as ue,YLt as w,gn as de,hn as fe,jf as pe,sn as me}from"./conversation-small-njr3llxjf58i1ezl.js";import{Oy as he,ky as T}from"./30901919-olrrp85dm5g9tovc.js";import{n as ge,t as _e}from"./6105d6cc-cdv4jd09kdmor5f9.js";import{n as E,t as D}from"./9bfdcf20-jwbfj4745utkl7ch.js";import{a as ve,l as O,n as ye,o as be,r as k,t as A,u as xe}from"./d4df9516-jpococqv4uq9s6ra.js";import{n as j,t as M}from"./759cd6d0-pcac0b0brg8jl7vm.js";function N(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function P(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Se(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,se),e}function Ce(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function we(e){"use forget";let t=(0,F.c)(20),{verificationUrl:n,verificationId:r,onSuccess:a}=e,o=re(),s=i(),c=(0,I.useRef)(null),[l]=(0,I.useState)(Ee),u;if(t[0]!==l||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||l==null){u=null;break bb0}let e=P(n,r);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,Se().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=r,t[3]=n,t[4]=u}else u=t[4];let d=u,f,p;if(t[5]!==l||t[6]!==d||t[7]!==a||t[8]!==r?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!N(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(N(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}!N(n)||n.type!==`hook`||!N(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!N(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||a()};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[l,d,a,r],t[5]=l,t[6]=d,t[7]=a,t[8]=r,t[9]=f,t[10]=p):(f=t[9],p=t[10]),(0,I.useEffect)(f,p),d==null){let e;t[11]===o?e=t[12]:(e=o.formatMessage(U.loadingLabel),t[11]=o,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===o?m=t[16]:(m=o.formatMessage(U.verificationTitle),t[15]=o,t[16]=m);let h;return t[17]!==d||t[18]!==m?(h=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Te,referrerPolicy:`no-referrer`,src:d,title:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19],h}function Te(e){Ce(e.currentTarget)}function Ee(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,De=e((()=>{F=b(),C(),n(),I=t(x()),S(),L=te(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=y({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Oe(e){"use forget";let t=(0,ke.c)(8),{sheerIdProgramId:n}=e,r=c(),i=r?.id??null,a=(0,q.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(A.clearModalError(),A.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),f(o,s);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,q.useEffect)(W,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,J.jsx)(K,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function W(){let e=G;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function G(e){e.persisted&&window.location.reload()}function K(e){"use forget";let t=(0,ke.c)(89),{currentAccount:n,sheerIdProgramId:i}=e,a=re(),c=ae(),u=r(),f=h(),[p]=oe(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=d(),t[0]=m):m=t[0];let g=m,ee=(0,q.useRef)(!1),te=(0,q.useRef)(!1),ne=(0,q.useRef)(!0),_;t[1]===p?_=t[2]:(_=p.get(je),t[1]=p,t[2]=_);let ie=_,y=`/students/2026#trigger_students-2026-faq-verification`,b;t[3]===ie?b=t[4]:(b=new URLSearchParams({campaign:se}).toString(),t[3]=ie,t[4]=b);let x=`/students/claim?${b}`,S;t[5]===f?.email?S=t[6]:(S=g&&(f?.email?.trim()||s()?.user?.email?.trim())||null,t[5]=f?.email,t[6]=S);let ce=S,C;t[7]!==x||t[8]!==i?(C={...pe,landingPath:x,sheerIdProgramId:i},t[7]=x,t[8]=i,t[9]=C):C=t[9];let w=C,de;t[10]!==n||t[11]!==w?(de=n!=null&&(!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&le(n)),t[10]=n,t[11]=w,t[12]=de):de=t[12];let T=de,ge=g&&n!=null&&!T,E;t[13]===ge?E=t[14]:(E={enabled:ge,reportRefreshErrors:!0},t[13]=ge,t[14]=E);let D=xe(w,E),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=be(O,k,w),j,M;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(M=()=>(ne.current=!0,()=>{ne.current=!1}),j=[],t[15]=j,t[16]=M):(j=t[15],M=t[16]),(0,q.useEffect)(M,j);let N,P;t[17]===x?(N=t[18],P=t[19]):(N=()=>{g||ee.current||(ee.current=!0,l({callbackUrl:x,fallbackScreenHint:`login`}))},P=[x,g],t[17]=x,t[18]=N,t[19]=P),(0,q.useEffect)(N,P);let Se;t[20]!==u.isError||t[21]!==u.isFetching||t[22]!==u.isSuccess||t[23]!==x||t[24]!==n||t[25]!==D.name||t[26]!==T||t[27]!==c?(Se=()=>{if(!g)return;let e=n==null&&!u.isFetching&&(u.isError||u.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||T||t)&&c(x,{replace:!0})},t[20]=u.isError,t[21]=u.isFetching,t[22]=u.isSuccess,t[23]=x,t[24]=n,t[25]=D.name,t[26]=T,t[27]=c,t[28]=Se):Se=t[28];let Ce;t[29]!==u.isError||t[30]!==u.isFetching||t[31]!==u.isSuccess||t[32]!==x||t[33]!==n||t[34]!==D||t[35]!==T||t[36]!==c?(Ce=[u.isError,u.isFetching,u.isSuccess,x,n,D,T,g,c],t[29]=u.isError,t[30]=u.isFetching,t[31]=u.isSuccess,t[32]=x,t[33]=n,t[34]=D,t[35]=T,t[36]=c,t[37]=Ce):Ce=t[37],(0,q.useEffect)(Se,Ce);let Te,Ee;t[38]!==k||t[39]!==x||t[40]!==n||t[41]!==D.name||t[42]!==T||t[43]!==c||t[44]!==O||t[45]!==A?(Te=()=>{!g||n==null||T||D.name!==`needs-verification`||O!=null&&k!=null||te.current||(te.current=!0,A().then(()=>{!ne.current||o()?.id!==n.id||ve.getState().modalErrorMessage==null||c(x,{replace:!0,state:{students2026VerificationError:!0}})}))},Ee=[k,x,n,D.name,T,g,c,O,A],t[38]=k,t[39]=x,t[40]=n,t[41]=D.name,t[42]=T,t[43]=c,t[44]=O,t[45]=A,t[46]=Te,t[47]=Ee):(Te=t[46],Ee=t[47]),(0,q.useEffect)(Te,Ee);let F;t[48]!==x||t[49]!==c?(F=()=>{c(fe(x,me),{replace:!0})},t[48]=x,t[49]=c,t[50]=F):F=t[50];let I=F,L;t[51]!==k||t[52]!==x||t[53]!==n||t[54]!==T||t[55]!==i||t[56]!==O?(L=g&&n!=null&&O&&k&&!T?ye(i,`${window.location.origin}${fe(x,me)}`,O,k):null,t[51]=k,t[52]=x,t[53]=n,t[54]=T,t[55]=i,t[56]=O,t[57]=L):L=t[57];let R=L,z;t[58]===a?z=t[59]:(z=a.formatMessage(Y.artworkAlt),t[58]=a,t[59]=z);let B;t[60]===z?B=t[61]:(B=(0,J.jsx)(_e,{altText:z,assetUrl:Ae,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[60]=z,t[61]=B);let V;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(v,{...Y.title})}),t[62]=V):V=t[62];let H;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(v,{...Y.desktopTitle})})]}),t[63]=H):H=t[63];let U;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(v,{...Y.description})}),t[64]=U):U=t[64];let De;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(v,{...Y.desktopDescription})}),t[65]=De):De=t[65];let Oe;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,J.jsx)(v,{...Y.verificationHelp}),t[66]=Oe):Oe=t[66];let W;t[67]===y?W=t[68]:(W=(0,J.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,J.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,De,(0,J.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:y,rel:`noopener noreferrer`,target:`_blank`,children:Oe})]})]}),t[67]=y,t[68]=W);let G;t[69]!==B||t[70]!==W?(G=(0,J.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,W]}),t[69]=B,t[70]=W,t[71]=G):G=t[71];let K;t[72]===a?K=t[73]:(K=a.formatMessage(Y.verificationFormLabel),t[72]=a,t[73]=K);let X;t[74]!==ce||t[75]!==a?(X=ce?(0,J.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,J.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,J.jsx)(v,{...Y.accountLabel}),(0,J.jsx)(ue,{content:a.formatMessage(Y.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,J.jsx)(`button`,{...e,"aria-label":a.formatMessage(Y.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,J.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,J.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:ce})]}):null,t[74]=ce,t[75]=a,t[76]=X):X=t[76];let Z;t[77]!==I||t[78]!==a||t[79]!==O||t[80]!==R?(Z=R&&O?(0,J.jsx)(we,{onSuccess:I,verificationId:O,verificationUrl:R}):(0,J.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(Y.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=I,t[78]=a,t[79]=O,t[80]=R,t[81]=Z):Z=t[81];let Q;t[82]!==K||t[83]!==X||t[84]!==Z?(Q=(0,J.jsxs)(`section`,{"aria-label":K,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=K,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==G||t[87]!==Q?($=(0,J.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,J.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[86]=G,t[87]=Q,t[88]=$):$=t[88],$}var ke,q,J,Ae,je,Y,X=e((()=>{ke=b(),T(),ce(),ge(),De(),C(),O(),k(),de(),a(),u(),p(),g(),w(),m(),q=t(x()),S(),ie(),J=te(),Ae=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,je=`students_2026_preview`,Y=y({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Z,Q,$,Me,Ne,Pe,Fe=e((()=>{ie(),Z=b(),j(),X(),E(),Q=te(),$={hasRouteMeta:!0},Me=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Ne=ee(function(){"use forget";let e=(0,Z.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Q.jsx)(Oe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Q.jsx)(M,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Pe=_(D)}));e((()=>{Fe()}))();export{Pe as ErrorBoundary,Ne as default,$ as handle,Me as meta};
//# sourceMappingURL=students_.verify-o5l1ry0x.js.map