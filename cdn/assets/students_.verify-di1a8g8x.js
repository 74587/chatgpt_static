import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{ZR as n,cw as r,dz as i,eU as a,fz as o,h2 as s,lw as c,m2 as l,nz as u,tU as d,vz as f,yz as ee}from"./4813494d-l3iadyutom9ijssn.js";import{At as p,Bt as m,Cn as te,Et as ne,Rt as re,Sn as h,Z as ie,bn as g,en as _,gn as ae,xn as oe,yn as v,zt as y}from"./2340486e-i20axdnmh5jcl165.js";import{dMt as b,gn as se,hn as ce,sn as le,uMt as ue}from"./conversation-small-k3kcucfbrrlc8z48.js";import{Gl as de,Hl as fe,ql as x}from"./c2675c8c-ext73zh20ozvx8iy.js";import{n as pe,t as S}from"./c553d4b9-ngy16nigjsgz3xlq.js";import{n as C,t as w}from"./9bfdcf20-c1sfp3b4gxb0urxm.js";import{a as me,l as T,n as he,o as ge,r as _e,t as E,u as ve}from"./d4df9516-fimmjowvhem0mnvm.js";function D(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function O(e,t){try{let n=new URL(e);return n.origin!==F||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function k(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,de),e}function ye(e){"use forget";let t=(0,M.c)(20),{verificationUrl:n,verificationId:r,onSuccess:i}=e,a=oe(),o=d(),s=(0,N.useRef)(null),[c]=(0,N.useState)(j),l;if(t[0]!==c||t[1]!==o||t[2]!==r||t[3]!==n){bb0:{if(!o||c==null){l=null;break bb0}let e=O(n,r);if(e==null){l=null;break bb0}e.searchParams.set(`verificationIframeUid`,c),e.searchParams.set(`installPageUrl`,k().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),l=e.toString()}t[0]=c,t[1]=o,t[2]=r,t[3]=n,t[4]=l}else l=t[4];let u=l,f,ee;if(t[5]!==c||t[6]!==u||t[7]!==i||t[8]!==r?(f=()=>{if(c==null||u==null)return;let e=e=>{let t=s.current;if(t==null||e.origin!==F||e.source!==t.contentWindow||!D(e.data)||e.data.verificationIframeUid!==c)return;let n=e.data.action;if(D(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(L,Math.max(I,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>L?`auto`:`no`;return}!D(n)||n.type!==`hook`||!D(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!D(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||i()};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},ee=[c,u,i,r],t[5]=c,t[6]=u,t[7]=i,t[8]=r,t[9]=f,t[10]=ee):(f=t[9],ee=t[10]),(0,N.useEffect)(f,ee),u==null){let e;t[11]===a?e=t[12]:(e=a.formatMessage(z.loadingLabel),t[11]=a,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,P.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let p;t[15]===a?p=t[16]:(p=a.formatMessage(z.verificationTitle),t[15]=a,t[16]=p);let m;return t[17]!==u||t[18]!==p?(m=(0,P.jsx)(`iframe`,{ref:s,allow:`camera ${F}`,className:`block min-h-[100px] w-full border-0`,onLoad:A,referrerPolicy:`no-referrer`,src:u,title:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19],m}function A(e){e.currentTarget.contentWindow?.postMessage({action:`setOptions`,options:{customCss:R}},F)}function j(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var M,N,P,F,I,L,R,z,B=e((()=>{M=_(),x(),a(),N=t(te()),g(),P=h(),F=`https://services.sheerid.com`,I=100,L=2e3,R=`
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
`,z=v({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function V(e){"use forget";let t=(0,be.c)(8),{sheerIdProgramId:n}=e,r=o(),i=r?.id??null,a=(0,G.useRef)(i),s,l;t[0]===i?(s=t[1],l=t[2]):(s=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},l=[i],t[0]=i,t[1]=s,t[2]=l),c(s,l);let u;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(u=[],t[3]=u):u=t[3],(0,G.useEffect)(H,u);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,K.jsx)(W,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function H(){let e=U;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function U(e){e.persisted&&window.location.reload()}function W(e){"use forget";let t=(0,be.c)(83),{currentAccount:r,sheerIdProgramId:a}=e,o=oe(),c=p(),l=i(),[u]=re(),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=s(),t[0]=d):d=t[0];let f=d,m=(0,G.useRef)(!1),te=(0,G.useRef)(!1),ne=(0,G.useRef)(!0),h;t[1]===u?h=t[2]:(h=u.get(Se),t[1]=u,t[2]=h);let ie=h,g=`/students/2026#trigger_students-2026-faq-verification`,_;t[3]===ie?_=t[4]:(_=new URLSearchParams({campaign:de}).toString(),t[3]=ie,t[4]=_);let v=`/students/claim?${_}`,y;t[5]!==v||t[6]!==a?(y={...fe,landingPath:v,sheerIdProgramId:a},t[5]=v,t[6]=a,t[7]=y):y=t[7];let b=y,se;t[8]!==r||t[9]!==b?(se=r!=null&&(!r.isPersonalAccount()||b.blocksMobileStoreSubscribers&&ue(r)),t[8]=r,t[9]=b,t[10]=se):se=t[10];let x=se,pe=f&&r!=null&&!x,S;t[11]===pe?S=t[12]:(S={enabled:pe,reportRefreshErrors:!0},t[11]=pe,t[12]=S);let C=ve(b,S),w=C.name===`needs-verification`?C.verificationId??null:null,T=C.name===`needs-verification`?C.accountVerificationId??null:null,_e=ge(w,T,b),E,D;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>(ne.current=!0,()=>{ne.current=!1}),D=[],t[13]=E,t[14]=D):(E=t[13],D=t[14]),(0,G.useEffect)(E,D);let O,k;t[15]===v?(O=t[16],k=t[17]):(O=()=>{f||m.current||(m.current=!0,ee({callbackUrl:v,fallbackScreenHint:`login`}))},k=[v,f],t[15]=v,t[16]=O,t[17]=k),(0,G.useEffect)(O,k);let A;t[18]!==l.isError||t[19]!==l.isFetching||t[20]!==l.isSuccess||t[21]!==v||t[22]!==r||t[23]!==C.name||t[24]!==x||t[25]!==c?(A=()=>{if(!f)return;let e=r==null&&!l.isFetching&&(l.isError||l.isSuccess),t=C.name===`coming-soon`||C.name===`error`||C.name===`verified`||C.name===`enrolled`;(e||x||t)&&c(v,{replace:!0})},t[18]=l.isError,t[19]=l.isFetching,t[20]=l.isSuccess,t[21]=v,t[22]=r,t[23]=C.name,t[24]=x,t[25]=c,t[26]=A):A=t[26];let j;t[27]!==l.isError||t[28]!==l.isFetching||t[29]!==l.isSuccess||t[30]!==v||t[31]!==r||t[32]!==C||t[33]!==x||t[34]!==c?(j=[l.isError,l.isFetching,l.isSuccess,v,r,C,x,f,c],t[27]=l.isError,t[28]=l.isFetching,t[29]=l.isSuccess,t[30]=v,t[31]=r,t[32]=C,t[33]=x,t[34]=c,t[35]=j):j=t[35],(0,G.useEffect)(A,j);let M,N;t[36]!==T||t[37]!==v||t[38]!==r||t[39]!==C.name||t[40]!==x||t[41]!==c||t[42]!==w||t[43]!==_e?(M=()=>{!f||r==null||x||C.name!==`needs-verification`||w!=null&&T!=null||te.current||(te.current=!0,_e().then(()=>{!ne.current||n()?.id!==r.id||me.getState().modalErrorMessage==null||c(v,{replace:!0,state:{students2026VerificationError:!0}})}))},N=[T,v,r,C.name,x,f,c,w,_e],t[36]=T,t[37]=v,t[38]=r,t[39]=C.name,t[40]=x,t[41]=c,t[42]=w,t[43]=_e,t[44]=M,t[45]=N):(M=t[44],N=t[45]),(0,G.useEffect)(M,N);let P;t[46]!==v||t[47]!==c?(P=()=>{c(ce(v,le),{replace:!0})},t[46]=v,t[47]=c,t[48]=P):P=t[48];let F=P,I;t[49]!==T||t[50]!==v||t[51]!==r||t[52]!==x||t[53]!==a||t[54]!==w?(I=f&&r!=null&&w&&T&&!x?he(a,`${window.location.origin}${ce(v,le)}`,w,T):null,t[49]=T,t[50]=v,t[51]=r,t[52]=x,t[53]=a,t[54]=w,t[55]=I):I=t[55];let L=I,R;t[56]===o?R=t[57]:(R=o.formatMessage(q.artworkAlt),t[56]=o,t[57]=R);let z;t[58]===R?z=t[59]:(z=(0,K.jsx)(`img`,{alt:R,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:960,src:xe,width:1920}),t[58]=R,t[59]=z);let B;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,K.jsx)(`span`,{className:`lg:hidden`,children:(0,K.jsx)(ae,{...q.title})}),t[60]=B):B=t[60];let V;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,K.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[B,(0,K.jsx)(`span`,{className:`hidden lg:inline`,children:(0,K.jsx)(ae,{...q.desktopTitle})})]}),t[61]=V):V=t[61];let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,K.jsx)(`span`,{className:`lg:hidden`,children:(0,K.jsx)(ae,{...q.description})}),t[62]=H):H=t[62];let U;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,K.jsx)(`span`,{className:`hidden lg:inline`,children:(0,K.jsx)(ae,{...q.desktopDescription})}),t[63]=U):U=t[63];let W;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,K.jsx)(ae,{...q.verificationHelp}),t[64]=W):W=t[64];let J;t[65]===g?J=t[66]:(J=(0,K.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[V,(0,K.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[H,U,(0,K.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:g,rel:`noopener noreferrer`,target:`_blank`,children:W})]})]}),t[65]=g,t[66]=J);let Y;t[67]!==z||t[68]!==J?(Y=(0,K.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[z,J]}),t[67]=z,t[68]=J,t[69]=Y):Y=t[69];let X;t[70]===o?X=t[71]:(X=o.formatMessage(q.verificationFormLabel),t[70]=o,t[71]=X);let Z;t[72]!==F||t[73]!==o||t[74]!==w||t[75]!==L?(Z=L&&w?(0,K.jsx)(ye,{onSuccess:F,verificationId:w,verificationUrl:L}):(0,K.jsx)(`span`,{"aria-label":o.formatMessage(q.loadingLabel),className:`bg-token-text-primary inline-block size-6 animate-pulse rounded-full motion-reduce:animate-none`,role:`status`}),t[72]=F,t[73]=o,t[74]=w,t[75]=L,t[76]=Z):Z=t[76];let Q;t[77]!==X||t[78]!==Z?(Q=(0,K.jsx)(`section`,{"aria-label":X,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:Z}),t[77]=X,t[78]=Z,t[79]=Q):Q=t[79];let $;return t[80]!==Y||t[81]!==Q?($=(0,K.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,K.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[Y,Q]})}),t[80]=Y,t[81]=Q,t[82]=$):$=t[82],$}var be,G,K,xe,Se,q,J=e((()=>{be=_(),B(),x(),T(),_e(),se(),u(),f(),l(),b(),r(),G=t(te()),g(),ie(),K=h(),xe=`https://assets-resources.sheerid.com/simple/67d1dd27d7732a41eb64d141/images/prgrm-rsrc-1786648174547.jpg`,Se=`students_2026_preview`,q=v({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title`,defaultMessage:`Get 4 months of ChatGPT Plus free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Plus on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college_and_grad`,defaultMessage:`An $80 value for eligible U.S. college and graduate students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college_and_grad`,defaultMessage:`An $80 value for eligible U.S. college and graduate students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt`,defaultMessage:`Students collaborating on a project in a garage`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Y,X,Z,Q,$,Ce,we=e((()=>{ie(),Y=_(),pe(),J(),C(),X=h(),Z={hasRouteMeta:!0},Q=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],$=y(function(){"use forget";let e=(0,Y.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,X.jsx)(V,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,X.jsx)(`div`,{className:`light bg-token-bg-primary text-token-text-primary`,children:(0,X.jsx)(S,{headerNav:t,locale:n,slug:`students/verify`,children:i})}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Ce=m(w)}));e((()=>{we()}))();export{Ce as ErrorBoundary,$ as default,Z as handle,Q as meta};
//# sourceMappingURL=students_.verify-di1a8g8x.js.map