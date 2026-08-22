import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{$E as n,$U as r,D1 as i,ER as a,O1 as o,QE as s,bW as c,h4 as l,iW as u,kR as d,mW as f,oK as p,pW as m,sK as h,xW as ee}from"./4813494d-ooe5tlmm6fei1flm.js";import{At as te,Bt as ne,Cn as re,Et as ie,Rt as ae,Sn as g,Z as oe,bn as se,en as _,gn as v,xn as ce,yn as y,zt as le}from"./2340486e-i20axdnmh5jcl165.js";import{Bpt as ue,DFt as de,EFt as fe,bn as b,dn as pe,yn as me,zpt as he}from"./conversation-small-goht2qgmxaizoyhe.js";import{_y as x,gy as ge}from"./30901919-nq0qklre9gczbk4n.js";import{Zl as _e,ru as S,tu as ve}from"./c2675c8c-n3r7npsb7zo9uvfx.js";import{n as ye,t as C}from"./c553d4b9-o77dix8w2152yv2c.js";import{n as w,t as T}from"./9bfdcf20-al2jsvn5lbr7eukc.js";import{a as be,l as E,n as xe,o as Se,r as D,t as O,u as Ce}from"./d4df9516-iqgsb1ewwmn5cbp0.js";function k(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function A(e,t){try{let n=new URL(e);return n.origin!==L||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function j(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ve),e}function we(e){"use forget";let t=(0,P.c)(20),{verificationUrl:n,verificationId:r,onSuccess:i}=e,a=ce(),o=h(),s=(0,F.useRef)(null),[c]=(0,F.useState)(N),l;if(t[0]!==c||t[1]!==o||t[2]!==r||t[3]!==n){bb0:{if(!o||c==null){l=null;break bb0}let e=A(n,r);if(e==null){l=null;break bb0}e.searchParams.set(`verificationIframeUid`,c),e.searchParams.set(`installPageUrl`,j().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),l=e.toString()}t[0]=c,t[1]=o,t[2]=r,t[3]=n,t[4]=l}else l=t[4];let u=l,d,f;if(t[5]!==c||t[6]!==u||t[7]!==i||t[8]!==r?(d=()=>{if(c==null||u==null)return;let e=e=>{let t=s.current;if(t==null||e.origin!==L||e.source!==t.contentWindow||!k(e.data)||e.data.verificationIframeUid!==c)return;let n=e.data.action;if(k(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(R,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}!k(n)||n.type!==`hook`||!k(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!k(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||i()};return window.addEventListener(`message`,e),()=>window.removeEventListener(`message`,e)},f=[c,u,i,r],t[5]=c,t[6]=u,t[7]=i,t[8]=r,t[9]=d,t[10]=f):(d=t[9],f=t[10]),(0,F.useEffect)(d,f),u==null){let e;t[11]===a?e=t[12]:(e=a.formatMessage(V.loadingLabel),t[11]=a,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,I.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let p;t[15]===a?p=t[16]:(p=a.formatMessage(V.verificationTitle),t[15]=a,t[16]=p);let m;return t[17]!==u||t[18]!==p?(m=(0,I.jsx)(`iframe`,{ref:s,allow:`camera ${L}`,className:`block min-h-[100px] w-full border-0`,onLoad:M,referrerPolicy:`no-referrer`,src:u,title:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19],m}function M(e){e.currentTarget.contentWindow?.postMessage({action:`setOptions`,options:{customCss:B}},L)}function N(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var P,F,I,L,R,z,B,V,H=e((()=>{P=_(),S(),p(),F=t(re()),se(),I=g(),L=`https://services.sheerid.com`,R=100,z=2e3,B=`
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
`,V=y({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function U(e){"use forget";let t=(0,Oe.c)(8),{sheerIdProgramId:r}=e,i=f(),a=i?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(O.clearModalError(),O.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),n(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Te,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==r||t[6]!==u?(d=(0,G.jsx)(De,{currentAccount:i,sheerIdProgramId:r},u),t[4]=i,t[5]=r,t[6]=u,t[7]=d):d=t[7],d}function Te(){let e=Ee;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ee(e){e.persisted&&window.location.reload()}function De(e){"use forget";let t=(0,Oe.c)(89),{currentAccount:n,sheerIdProgramId:i}=e,a=ce(),s=te(),c=m(),u=d(),[f]=ae(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=o(),t[0]=p):p=t[0];let h=p,ne=(0,W.useRef)(!1),re=(0,W.useRef)(!1),ie=(0,W.useRef)(!0),g;t[1]===f?g=t[2]:(g=f.get(Ae),t[1]=f,t[2]=g);let oe=g,se=`/students/2026#trigger_students-2026-faq-verification`,_;t[3]===oe?_=t[4]:(_=new URLSearchParams({campaign:ve}).toString(),t[3]=oe,t[4]=_);let y=`/students/claim?${_}`,le;t[5]===u?.email?le=t[6]:(le=h&&(u?.email?.trim()||l()?.user?.email?.trim())||null,t[5]=u?.email,t[6]=le);let ue=le,de;t[7]!==y||t[8]!==i?(de={..._e,landingPath:y,sheerIdProgramId:i},t[7]=y,t[8]=i,t[9]=de):de=t[9];let b=de,x;t[10]!==n||t[11]!==b?(x=n!=null&&(!n.isPersonalAccount()||b.blocksMobileStoreSubscribers&&fe(n)),t[10]=n,t[11]=b,t[12]=x):x=t[12];let S=x,ye=h&&n!=null&&!S,C;t[13]===ye?C=t[14]:(C={enabled:ye,reportRefreshErrors:!0},t[13]=ye,t[14]=C);let w=Ce(b,C),T=w.name===`needs-verification`?w.verificationId??null:null,E=w.name===`needs-verification`?w.accountVerificationId??null:null,D=Se(T,E,b),O,k;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(ie.current=!0,()=>{ie.current=!1}),O=[],t[15]=O,t[16]=k):(O=t[15],k=t[16]),(0,W.useEffect)(k,O);let A,j;t[17]===y?(A=t[18],j=t[19]):(A=()=>{h||ne.current||(ne.current=!0,ee({callbackUrl:y,fallbackScreenHint:`login`}))},j=[y,h],t[17]=y,t[18]=A,t[19]=j),(0,W.useEffect)(A,j);let M;t[20]!==c.isError||t[21]!==c.isFetching||t[22]!==c.isSuccess||t[23]!==y||t[24]!==n||t[25]!==w.name||t[26]!==S||t[27]!==s?(M=()=>{if(!h)return;let e=n==null&&!c.isFetching&&(c.isError||c.isSuccess),t=w.name===`coming-soon`||w.name===`error`||w.name===`verified`||w.name===`enrolled`;(e||S||t)&&s(y,{replace:!0})},t[20]=c.isError,t[21]=c.isFetching,t[22]=c.isSuccess,t[23]=y,t[24]=n,t[25]=w.name,t[26]=S,t[27]=s,t[28]=M):M=t[28];let N;t[29]!==c.isError||t[30]!==c.isFetching||t[31]!==c.isSuccess||t[32]!==y||t[33]!==n||t[34]!==w||t[35]!==S||t[36]!==s?(N=[c.isError,c.isFetching,c.isSuccess,y,n,w,S,h,s],t[29]=c.isError,t[30]=c.isFetching,t[31]=c.isSuccess,t[32]=y,t[33]=n,t[34]=w,t[35]=S,t[36]=s,t[37]=N):N=t[37],(0,W.useEffect)(M,N);let P,F;t[38]!==E||t[39]!==y||t[40]!==n||t[41]!==w.name||t[42]!==S||t[43]!==s||t[44]!==T||t[45]!==D?(P=()=>{!h||n==null||S||w.name!==`needs-verification`||T!=null&&E!=null||re.current||(re.current=!0,D().then(()=>{!ie.current||r()?.id!==n.id||be.getState().modalErrorMessage==null||s(y,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[E,y,n,w.name,S,h,s,T,D],t[38]=E,t[39]=y,t[40]=n,t[41]=w.name,t[42]=S,t[43]=s,t[44]=T,t[45]=D,t[46]=P,t[47]=F):(P=t[46],F=t[47]),(0,W.useEffect)(P,F);let I;t[48]!==y||t[49]!==s?(I=()=>{s(me(y,pe),{replace:!0})},t[48]=y,t[49]=s,t[50]=I):I=t[50];let L=I,R;t[51]!==E||t[52]!==y||t[53]!==n||t[54]!==S||t[55]!==i||t[56]!==T?(R=h&&n!=null&&T&&E&&!S?xe(i,`${window.location.origin}${me(y,pe)}`,T,E):null,t[51]=E,t[52]=y,t[53]=n,t[54]=S,t[55]=i,t[56]=T,t[57]=R):R=t[57];let z=R,B;t[58]===a?B=t[59]:(B=a.formatMessage(K.artworkAlt),t[58]=a,t[59]=B);let V;t[60]===B?V=t[61]:(V=(0,G.jsx)(`img`,{alt:B,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:523,src:ke,width:967}),t[60]=B,t[61]=V);let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.title})}),t[62]=H):H=t[62];let U;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[H,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopTitle})})]}),t[63]=U):U=t[63];let Te;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(Te=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.description})}),t[64]=Te):Te=t[64];let Ee;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopDescription})}),t[65]=Ee):Ee=t[65];let De;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,G.jsx)(v,{...K.verificationHelp}),t[66]=De):De=t[66];let q;t[67]===se?q=t[68]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[U,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Te,Ee,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:se,rel:`noopener noreferrer`,target:`_blank`,children:De})]})]}),t[67]=se,t[68]=q);let J;t[69]!==V||t[70]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[V,q]}),t[69]=V,t[70]=q,t[71]=J):J=t[71];let Y;t[72]===a?Y=t[73]:(Y=a.formatMessage(K.verificationFormLabel),t[72]=a,t[73]=Y);let X;t[74]!==ue||t[75]!==a?(X=ue?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(v,{...K.accountLabel}),(0,G.jsx)(he,{content:a.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":a.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm`,type:`button`,children:(0,G.jsx)(ge,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:ue})]}):null,t[74]=ue,t[75]=a,t[76]=X):X=t[76];let Z;t[77]!==L||t[78]!==a||t[79]!==T||t[80]!==z?(Z=z&&T?(0,G.jsx)(we,{onSuccess:L,verificationId:T,verificationUrl:z}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":a.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=L,t[78]=a,t[79]=T,t[80]=z,t[81]=Z):Z=t[81];let Q;t[82]!==Y||t[83]!==X||t[84]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=Y,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==J||t[87]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[86]=J,t[87]=Q,t[88]=$):$=t[88],$}var Oe,W,G,ke,Ae,K,q=e((()=>{Oe=_(),x(),ue(),H(),S(),E(),D(),b(),u(),c(),a(),i(),de(),s(),W=t(re()),se(),oe(),G=g(),ke=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-ce48fbf63eff.jpg`,Ae=`students_2026_preview`,K=y({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,je=e((()=>{oe(),J=_(),ye(),q(),w(),Y=g(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=le(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ie(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(U,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(`div`,{className:`light bg-token-bg-primary text-token-text-primary`,children:(0,Y.jsx)(C,{headerNav:t,locale:n,slug:`students/verify`,children:i})}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ne(T)}));e((()=>{je()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-o6zho4ww.js.map