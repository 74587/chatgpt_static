import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{GH as n,JR as r,KH as i,UR as a,a2 as o,cw as s,dz as c,iz as l,o2 as u,rz as d,sw as f,uz as p}from"./4813494d-meow6085i2spqgdd.js";import{At as m,Bt as h,Cn as ee,Et as te,Rt as ne,Sn as g,Z as re,bn as ie,en as _,gn as v,xn as ae,yn as y,zt as b}from"./2340486e-i20axdnmh5jcl165.js";import{an as oe,mn as x,pn as se,vjt as ce,yjt as le}from"./conversation-small-orr54pxfpgyodchr.js";import{Gl as ue,Hl as de,ql as S}from"./c2675c8c-o7rhg52ntccomng0.js";import{n as fe,t as C}from"./c553d4b9-bqlhfehuuwjk129d.js";import{n as w,t as T}from"./9bfdcf20-mjey578ap7w0ft21.js";import{a as pe,l as E,n as me,o as he,r as ge,t as D,u as _e}from"./d4df9516-b7i2qvzsea8bfa2u.js";function O(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function k(e,t){try{let n=new URL(e);return n.origin!==I||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function A(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ue),e}function ve(e){"use forget";let t=(0,N.c)(20),{verificationUrl:n,verificationId:r,onSuccess:a}=e,o=ae(),s=i(),c=(0,P.useRef)(null),[l]=(0,P.useState)(M),u;if(t[0]!==l||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||l==null){u=null;break bb0}let e=k(n,r);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,A().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=r,t[3]=n,t[4]=u}else u=t[4];let d=u,f,p;if(t[5]!==l||t[6]!==d||t[7]!==a||t[8]!==r?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==I||e.source!==t.contentWindow||!O(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(O(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(R,Math.max(L,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>R?`auto`:`no`;return}!O(n)||n.type!==`hook`||!O(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!O(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||a()};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},p=[l,d,a,r],t[5]=l,t[6]=d,t[7]=a,t[8]=r,t[9]=f,t[10]=p):(f=t[9],p=t[10]),(0,P.useEffect)(f,p),d==null){let e;t[11]===o?e=t[12]:(e=o.formatMessage(B.loadingLabel),t[11]=o,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,F.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===o?m=t[16]:(m=o.formatMessage(B.verificationTitle),t[15]=o,t[16]=m);let h;return t[17]!==d||t[18]!==m?(h=(0,F.jsx)(`iframe`,{ref:c,allow:`camera ${I}`,className:`block min-h-[100px] w-full border-0`,onLoad:j,referrerPolicy:`no-referrer`,src:d,title:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19],h}function j(e){e.currentTarget.contentWindow?.postMessage({action:`setOptions`,options:{customCss:z}},I)}function M(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var N,P,F,I,L,R,z,B,V=e((()=>{N=_(),S(),n(),P=t(ee()),ie(),F=g(),I=`https://services.sheerid.com`,L=100,R=2e3,z=`
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
`,B=y({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function H(e){"use forget";let t=(0,be.c)(8),{sheerIdProgramId:n}=e,r=l(),i=r?.id??null,a=(0,G.useRef)(i),o,c;t[0]===i?(o=t[1],c=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(D.clearModalError(),D.setIsLoading(!1))},c=[i],t[0]=i,t[1]=o,t[2]=c),s(o,c);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,G.useEffect)(U,u);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,K.jsx)(ye,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function U(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function ye(e){"use forget";let t=(0,be.c)(83),{currentAccount:n,sheerIdProgramId:r}=e,i=ae(),o=m(),s=d(),[l]=ne(),f;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(f=u(),t[0]=f):f=t[0];let p=f,h=(0,G.useRef)(!1),ee=(0,G.useRef)(!1),te=(0,G.useRef)(!0),g;t[1]===l?g=t[2]:(g=l.get(Se),t[1]=l,t[2]=g);let re=g,ie=`/students/2026#trigger_students-2026-faq-verification`,_;t[3]===re?_=t[4]:(_=new URLSearchParams({campaign:ue}).toString(),t[3]=re,t[4]=_);let y=`/students/claim?${_}`,b;t[5]!==y||t[6]!==r?(b={...de,landingPath:y,sheerIdProgramId:r},t[5]=y,t[6]=r,t[7]=b):b=t[7];let x=b,le;t[8]!==n||t[9]!==x?(le=n!=null&&(!n.isPersonalAccount()||x.blocksMobileStoreSubscribers&&ce(n)),t[8]=n,t[9]=x,t[10]=le):le=t[10];let S=le,fe=p&&n!=null&&!S,C;t[11]===fe?C=t[12]:(C={enabled:fe,reportRefreshErrors:!0},t[11]=fe,t[12]=C);let w=_e(x,C),T=w.name===`needs-verification`?w.verificationId??null:null,E=w.name===`needs-verification`?w.accountVerificationId??null:null,ge=he(T,E,x),D,O;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>(te.current=!0,()=>{te.current=!1}),O=[],t[13]=D,t[14]=O):(D=t[13],O=t[14]),(0,G.useEffect)(D,O);let k,A;t[15]===y?(k=t[16],A=t[17]):(k=()=>{p||h.current||(h.current=!0,c({callbackUrl:y,fallbackScreenHint:`login`}))},A=[y,p],t[15]=y,t[16]=k,t[17]=A),(0,G.useEffect)(k,A);let j;t[18]!==s.isError||t[19]!==s.isFetching||t[20]!==s.isSuccess||t[21]!==y||t[22]!==n||t[23]!==w.name||t[24]!==S||t[25]!==o?(j=()=>{if(!p)return;let e=n==null&&!s.isFetching&&(s.isError||s.isSuccess),t=w.name===`coming-soon`||w.name===`error`||w.name===`verified`||w.name===`enrolled`;(e||S||t)&&o(y,{replace:!0})},t[18]=s.isError,t[19]=s.isFetching,t[20]=s.isSuccess,t[21]=y,t[22]=n,t[23]=w.name,t[24]=S,t[25]=o,t[26]=j):j=t[26];let M;t[27]!==s.isError||t[28]!==s.isFetching||t[29]!==s.isSuccess||t[30]!==y||t[31]!==n||t[32]!==w||t[33]!==S||t[34]!==o?(M=[s.isError,s.isFetching,s.isSuccess,y,n,w,S,p,o],t[27]=s.isError,t[28]=s.isFetching,t[29]=s.isSuccess,t[30]=y,t[31]=n,t[32]=w,t[33]=S,t[34]=o,t[35]=M):M=t[35],(0,G.useEffect)(j,M);let N,P;t[36]!==E||t[37]!==y||t[38]!==n||t[39]!==w.name||t[40]!==S||t[41]!==o||t[42]!==T||t[43]!==ge?(N=()=>{!p||n==null||S||w.name!==`needs-verification`||T!=null&&E!=null||ee.current||(ee.current=!0,ge().then(()=>{!te.current||a()?.id!==n.id||pe.getState().modalErrorMessage==null||o(y,{replace:!0,state:{students2026VerificationError:!0}})}))},P=[E,y,n,w.name,S,p,o,T,ge],t[36]=E,t[37]=y,t[38]=n,t[39]=w.name,t[40]=S,t[41]=o,t[42]=T,t[43]=ge,t[44]=N,t[45]=P):(N=t[44],P=t[45]),(0,G.useEffect)(N,P);let F;t[46]!==y||t[47]!==o?(F=()=>{o(se(y,oe),{replace:!0})},t[46]=y,t[47]=o,t[48]=F):F=t[48];let I=F,L;t[49]!==E||t[50]!==y||t[51]!==n||t[52]!==S||t[53]!==r||t[54]!==T?(L=p&&n!=null&&T&&E&&!S?me(r,`${window.location.origin}${se(y,oe)}`,T,E):null,t[49]=E,t[50]=y,t[51]=n,t[52]=S,t[53]=r,t[54]=T,t[55]=L):L=t[55];let R=L,z;t[56]===i?z=t[57]:(z=i.formatMessage(q.artworkAlt),t[56]=i,t[57]=z);let B;t[58]===z?B=t[59]:(B=(0,K.jsx)(`img`,{alt:z,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:960,src:xe,width:1920}),t[58]=z,t[59]=B);let V;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,K.jsx)(`span`,{className:`lg:hidden`,children:(0,K.jsx)(v,{...q.title})}),t[60]=V):V=t[60];let H;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,K.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,K.jsx)(`span`,{className:`hidden lg:inline`,children:(0,K.jsx)(v,{...q.desktopTitle})})]}),t[61]=H):H=t[61];let U;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,K.jsx)(`span`,{className:`lg:hidden`,children:(0,K.jsx)(v,{...q.description})}),t[62]=U):U=t[62];let W;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,K.jsx)(`span`,{className:`hidden lg:inline`,children:(0,K.jsx)(v,{...q.desktopDescription})}),t[63]=W):W=t[63];let ye;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(ye=(0,K.jsx)(v,{...q.verificationHelp}),t[64]=ye):ye=t[64];let J;t[65]===ie?J=t[66]:(J=(0,K.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,K.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,W,(0,K.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ie,rel:`noopener noreferrer`,target:`_blank`,children:ye})]})]}),t[65]=ie,t[66]=J);let Y;t[67]!==B||t[68]!==J?(Y=(0,K.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,J]}),t[67]=B,t[68]=J,t[69]=Y):Y=t[69];let X;t[70]===i?X=t[71]:(X=i.formatMessage(q.verificationFormLabel),t[70]=i,t[71]=X);let Z;t[72]!==I||t[73]!==i||t[74]!==T||t[75]!==R?(Z=R&&T?(0,K.jsx)(ve,{onSuccess:I,verificationId:T,verificationUrl:R}):(0,K.jsx)(`span`,{"aria-label":i.formatMessage(q.loadingLabel),className:`bg-token-text-primary inline-block size-6 animate-pulse rounded-full motion-reduce:animate-none`,role:`status`}),t[72]=I,t[73]=i,t[74]=T,t[75]=R,t[76]=Z):Z=t[76];let Q;t[77]!==X||t[78]!==Z?(Q=(0,K.jsx)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:Z}),t[77]=X,t[78]=Z,t[79]=Q):Q=t[79];let $;return t[80]!==Y||t[81]!==Q?($=(0,K.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,K.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,Q]})}),t[80]=Y,t[81]=Q,t[82]=$):$=t[82],$}var be,G,K,xe,Se,q,J=e((()=>{be=_(),V(),S(),E(),ge(),x(),r(),p(),o(),le(),f(),G=t(ee()),ie(),re(),K=g(),xe=`https://assets-resources.sheerid.com/simple/67d1dd27d7732a41eb64d141/images/prgrm-rsrc-1786648174547.jpg`,Se=`students_2026_preview`,q=y({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title`,defaultMessage:`Get 4 months of ChatGPT Plus free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Plus on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college_and_grad`,defaultMessage:`An $80 value for eligible U.S. college and graduate students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college_and_grad`,defaultMessage:`An $80 value for eligible U.S. college and graduate students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt`,defaultMessage:`Students collaborating on a project in a garage`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Y,X,Z,Q,$,Ce,we=e((()=>{re(),Y=_(),fe(),J(),w(),X=g(),Z={hasRouteMeta:!0},Q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],$=b(function(){"use forget";let e=(0,Y.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=te(),i;e[0]===r?i=e[1]:(i=(0,X.jsx)(H,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,X.jsx)(`div`,{className:`light bg-token-bg-primary text-token-text-primary`,children:(0,X.jsx)(C,{headerNav:t,locale:n,slug:`students/verify`,children:i})}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ce=h(T)}));e((()=>{we()}))();export{Ce as ErrorBoundary,$ as default,Z as handle,Q as meta};
//# sourceMappingURL=students_.verify-cbwcmfr5.js.map