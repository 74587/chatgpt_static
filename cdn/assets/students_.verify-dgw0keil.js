import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{GH as n,HR as r,J0 as i,WH as a,lz as o,nz as s,ow as c,q0 as l,qR as u,rz as d,sw as f,uz as ee}from"./4813494d-egdzkz0306qltp2w.js";import{At as p,Bt as m,Cn as te,Et as ne,Rt as re,Sn as h,Z as ie,bn as ae,en as g,gn as _,xn as oe,yn as v,zt as se}from"./2340486e-i20axdnmh5jcl165.js";import{$At as y,QAt as ce,an as le,mn as b,pn as ue}from"./conversation-small-ddq9asxm6z4ohvb1.js";import{Rl as de,Ul as x,Vl as fe}from"./c2675c8c-inrmtarm71x70n39.js";import{n as pe,t as me}from"./c553d4b9-ciiuhhewe2tk14b5.js";import{n as S,t as C}from"./9bfdcf20-gzigqso5g9z5y0ln.js";import{a as he,l as w,n as ge,o as _e,r as T,t as E,u as ve}from"./d4df9516-gxswih32ousbftv9.js";function D(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function O(e,t){try{let n=new URL(e);return n.origin!==F||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function k(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,fe),e}function ye(e){"use forget";let t=(0,M.c)(20),{verificationUrl:r,verificationId:i,onSuccess:a}=e,o=oe(),s=n(),c=(0,N.useRef)(null),[l]=(0,N.useState)(j),u;if(t[0]!==l||t[1]!==s||t[2]!==i||t[3]!==r){bb0:{if(!s||l==null){u=null;break bb0}let e=O(r,i);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,k().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=i,t[3]=r,t[4]=u}else u=t[4];let d=u,f,ee;if(t[5]!==l||t[6]!==d||t[7]!==a||t[8]!==i?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==F||e.source!==t.contentWindow||!D(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(D(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(L,Math.max(I,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>L?`auto`:`no`;return}!D(n)||n.type!==`hook`||!D(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!D(n.hook.data)||n.hook.data.verificationId!==i||n.hook.data.currentStep!==`success`||a()};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},ee=[l,d,a,i],t[5]=l,t[6]=d,t[7]=a,t[8]=i,t[9]=f,t[10]=ee):(f=t[9],ee=t[10]),(0,N.useEffect)(f,ee),d==null){let e;t[11]===o?e=t[12]:(e=o.formatMessage(z.loadingLabel),t[11]=o,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,P.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let p;t[15]===o?p=t[16]:(p=o.formatMessage(z.verificationTitle),t[15]=o,t[16]=p);let m;return t[17]!==d||t[18]!==p?(m=(0,P.jsx)(`iframe`,{ref:c,allow:`camera ${F}`,className:`block min-h-[100px] w-full border-0`,onLoad:A,referrerPolicy:`no-referrer`,src:d,title:p}),t[17]=d,t[18]=p,t[19]=m):m=t[19],m}function A(e){e.currentTarget.contentWindow?.postMessage({action:`setOptions`,options:{customCss:R}},F)}function j(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var M,N,P,F,I,L,R,z,B=e((()=>{M=g(),x(),a(),N=t(te()),ae(),P=h(),F=`https://services.sheerid.com`,I=100,L=2e3,R=`
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
`,z=v({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function V(e){"use forget";let t=(0,Se.c)(8),{sheerIdProgramId:n}=e,r=d(),i=r?.id??null,a=(0,U.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),f(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,U.useEffect)(H,c);let l=r?.id??`no-account`,u;return t[4]!==r||t[5]!==n||t[6]!==l?(u=(0,W.jsx)(xe,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=u):u=t[7],u}function H(){let e=be;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function be(e){e.persisted&&window.location.reload()}function xe(e){"use forget";let t=(0,Se.c)(89),{currentAccount:n,sheerIdProgramId:a}=e,o=oe(),c=p(),l=s(),[u]=re(),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=i(),t[0]=d):d=t[0];let f=d,m=(0,U.useRef)(!1),te=(0,U.useRef)(!1),ne=(0,U.useRef)(!0),h;t[1]===u?h=t[2]:(h=u.get(we),t[1]=u,t[2]=h);let ie=h,ae=`/students/2026#trigger_students-2026-faq-verification`,g;t[3]===ie?g=t[4]:(g=new URLSearchParams({campaign:fe}).toString(),t[3]=ie,t[4]=g);let v=`/students/claim?${g}`,se;t[5]!==v||t[6]!==a?(se={...de,landingPath:v,sheerIdProgramId:a},t[5]=v,t[6]=a,t[7]=se):se=t[7];let y=se,b;t[8]!==n||t[9]!==y?(b=n!=null&&(!n.isPersonalAccount()||y.blocksMobileStoreSubscribers&&ce(n)),t[8]=n,t[9]=y,t[10]=b):b=t[10];let x=b,pe=f&&n!=null&&!x,me;t[11]===pe?me=t[12]:(me={enabled:pe,reportRefreshErrors:!0},t[11]=pe,t[12]=me);let S=ve(y,me),C=S.name===`needs-verification`?S.verificationId??null:null,w=S.name===`needs-verification`?S.accountVerificationId??null:null,T=_e(C,w,y),E,D;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>(ne.current=!0,()=>{ne.current=!1}),D=[],t[13]=E,t[14]=D):(E=t[13],D=t[14]),(0,U.useEffect)(E,D);let O,k;t[15]===v?(O=t[16],k=t[17]):(O=()=>{f||m.current||(m.current=!0,ee({callbackUrl:v,fallbackScreenHint:`login`}))},k=[v,f],t[15]=v,t[16]=O,t[17]=k),(0,U.useEffect)(O,k);let A;t[18]!==l.isError||t[19]!==l.isFetching||t[20]!==l.isSuccess||t[21]!==v||t[22]!==n||t[23]!==S.name||t[24]!==x||t[25]!==c?(A=()=>{if(!f)return;let e=n==null&&!l.isFetching&&(l.isError||l.isSuccess),t=S.name===`coming-soon`||S.name===`error`||S.name===`verified`||S.name===`enrolled`;(e||x||t)&&c(v,{replace:!0})},t[18]=l.isError,t[19]=l.isFetching,t[20]=l.isSuccess,t[21]=v,t[22]=n,t[23]=S.name,t[24]=x,t[25]=c,t[26]=A):A=t[26];let j;t[27]!==l.isError||t[28]!==l.isFetching||t[29]!==l.isSuccess||t[30]!==v||t[31]!==n||t[32]!==S||t[33]!==x||t[34]!==c?(j=[l.isError,l.isFetching,l.isSuccess,v,n,S,x,f,c],t[27]=l.isError,t[28]=l.isFetching,t[29]=l.isSuccess,t[30]=v,t[31]=n,t[32]=S,t[33]=x,t[34]=c,t[35]=j):j=t[35],(0,U.useEffect)(A,j);let M,N;t[36]!==w||t[37]!==v||t[38]!==n||t[39]!==S.name||t[40]!==x||t[41]!==c||t[42]!==C||t[43]!==T?(M=()=>{!f||n==null||x||S.name!==`needs-verification`||C!=null&&w!=null||te.current||(te.current=!0,T().then(()=>{!ne.current||r()?.id!==n.id||he.getState().modalErrorMessage==null||c(v,{replace:!0,state:{students2026VerificationError:!0}})}))},N=[w,v,n,S.name,x,f,c,C,T],t[36]=w,t[37]=v,t[38]=n,t[39]=S.name,t[40]=x,t[41]=c,t[42]=C,t[43]=T,t[44]=M,t[45]=N):(M=t[44],N=t[45]),(0,U.useEffect)(M,N);let P;t[46]!==v||t[47]!==c?(P=()=>{c(ue(v,le),{replace:!0})},t[46]=v,t[47]=c,t[48]=P):P=t[48];let F=P,I;t[49]!==w||t[50]!==v||t[51]!==n||t[52]!==x||t[53]!==a||t[54]!==C?(I=f&&n!=null&&C&&w&&!x?ge(a,`${window.location.origin}${ue(v,le)}`,C,w):null,t[49]=w,t[50]=v,t[51]=n,t[52]=x,t[53]=a,t[54]=C,t[55]=I):I=t[55];let L=I,R;t[56]===o?R=t[57]:(R=o.formatMessage(G.artworkAlt),t[56]=o,t[57]=R);let z;t[58]===R?z=t[59]:(z=(0,W.jsx)(`img`,{alt:R,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:960,src:Ce,width:1920}),t[58]=R,t[59]=z);let B;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,W.jsx)(`span`,{className:`lg:hidden`,children:(0,W.jsx)(_,{...G.title})}),t[60]=B):B=t[60];let V;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,W.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[B,(0,W.jsx)(`span`,{className:`hidden lg:inline`,children:(0,W.jsx)(_,{...G.desktopTitle})})]}),t[61]=V):V=t[61];let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,W.jsx)(`span`,{className:`lg:hidden`,children:(0,W.jsx)(_,{...G.description})}),t[62]=H):H=t[62];let be;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(be=(0,W.jsx)(`span`,{className:`hidden lg:inline`,children:(0,W.jsx)(_,{...G.desktopDescription})}),t[63]=be):be=t[63];let xe;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(xe=(0,W.jsx)(_,{...G.verificationHelp}),t[64]=xe):xe=t[64];let K;t[65]===ae?K=t[66]:(K=(0,W.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[V,(0,W.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[H,be,(0,W.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ae,rel:`noopener noreferrer`,target:`_blank`,children:xe})]})]}),t[65]=ae,t[66]=K);let q;t[67]!==z||t[68]!==K?(q=(0,W.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[z,K]}),t[67]=z,t[68]=K,t[69]=q):q=t[69];let J;t[70]===o?J=t[71]:(J=o.formatMessage(G.verificationFormLabel),t[70]=o,t[71]=J);let Y;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Y=(0,W.jsx)(`label`,{className:`text-token-text-primary mb-2 block text-sm font-medium`,htmlFor:`students-2026-verification-country`,children:(0,W.jsx)(_,{...G.countryLabel})}),t[72]=Y):Y=t[72];let X;t[73]===o?X=t[74]:(X=o.formatMessage(G.countryValue),t[73]=o,t[74]=X);let Z;t[75]===X?Z=t[76]:(Z=(0,W.jsxs)(`div`,{className:`mb-6`,children:[Y,(0,W.jsx)(`input`,{className:`border-token-border-light bg-token-bg-primary text-token-text-primary h-[38px] w-full rounded-lg border px-3 text-sm`,id:`students-2026-verification-country`,readOnly:!0,value:X})]}),t[75]=X,t[76]=Z);let Q;t[77]!==F||t[78]!==o||t[79]!==C||t[80]!==L?(Q=L&&C?(0,W.jsx)(ye,{onSuccess:F,verificationId:C,verificationUrl:L}):(0,W.jsx)(`span`,{"aria-label":o.formatMessage(G.loadingLabel),className:`bg-token-text-primary inline-block size-6 animate-pulse rounded-full motion-reduce:animate-none`,role:`status`}),t[77]=F,t[78]=o,t[79]=C,t[80]=L,t[81]=Q):Q=t[81];let $;t[82]!==J||t[83]!==Z||t[84]!==Q?($=(0,W.jsxs)(`section`,{"aria-label":J,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[Z,Q]}),t[82]=J,t[83]=Z,t[84]=Q,t[85]=$):$=t[85];let Te;return t[86]!==q||t[87]!==$?(Te=(0,W.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,W.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[q,$]})}),t[86]=q,t[87]=$,t[88]=Te):Te=t[88],Te}var Se,U,W,Ce,we,G,K=e((()=>{Se=g(),B(),x(),w(),T(),b(),u(),o(),l(),y(),c(),U=t(te()),ae(),ie(),W=h(),Ce=`https://assets-resources.sheerid.com/simple/67d1dd27d7732a41eb64d141/images/prgrm-rsrc-1786648174547.jpg`,we=`students_2026_preview`,G=v({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title`,defaultMessage:`Get 4 months of ChatGPT Plus free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Plus on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description`,defaultMessage:`Verify that you're enrolled in an eligible accredited institution of higher education.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop`,defaultMessage:`Try 4 months free on us. Verify that you're enrolled in an eligible accredited higher education institution.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},countryLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.country.label`,defaultMessage:`Country`},countryValue:{id:`chatgpt.students.back_to_school_2026.embedded_verification.country.united_states`,defaultMessage:`United States`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt`,defaultMessage:`Students collaborating on a project in a garage`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),q,J,Y,X,Z,Q,$=e((()=>{ie(),q=g(),pe(),K(),S(),J=h(),Y={hasRouteMeta:!0},X=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Z=se(function(){"use forget";let e=(0,q.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,J.jsx)(V,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,J.jsx)(`div`,{className:`light bg-token-bg-primary text-token-text-primary`,children:(0,J.jsx)(me,{headerNav:t,locale:n,slug:`students/verify`,children:i})}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Q=m(C)}));e((()=>{$()}))();export{Q as ErrorBoundary,Z as default,Y as handle,X as meta};
//# sourceMappingURL=students_.verify-dgw0keil.js.map