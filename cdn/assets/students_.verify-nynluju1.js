import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{B1 as n,EW as r,MW as i,NW as a,O4 as o,RR as s,TW as c,V1 as l,VR as u,dW as d,eD as f,gW as p,tD as m,vK as h,yK as g}from"./4813494d-pyll4vlwvn4vnzw6.js";import{At as ee,Bt as te,Cn as ne,Et as re,Rt as ie,Sn as _,Z as ae,bn as oe,en as v,gn as y,xn as se,yn as b,zt as ce}from"./2340486e-i20axdnmh5jcl165.js";import{CFt as le,Lpt as ue,Rpt as de,bn as x,dn as fe,wFt as S,yn as pe}from"./conversation-small-noz53f0j88o5kz9s.js";import{_y as me,gy as he}from"./30901919-qptj5lcm03b4zlvn.js";import{Ql as ge,iu as C,nu as _e}from"./c2675c8c-oixwq7zci2kb7tgc.js";import{n as ve,t as ye}from"./9bfdcf20-fnil8h602qmrspin.js";import{a as be,l as w,n as xe,o as Se,r as T,t as E,u as Ce}from"./d4df9516-o5w3f26i91tiuh2c.js";import{n as D,t as O}from"./759cd6d0-lu3pdxca1y1o5vpl.js";function k(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function A(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function j(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,_e),e}function M(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function we(e){"use forget";let t=(0,F.c)(20),{verificationUrl:n,verificationId:r,onSuccess:i}=e,a=se(),o=g(),s=(0,I.useRef)(null),[c]=(0,I.useState)(P),l;if(t[0]!==c||t[1]!==o||t[2]!==r||t[3]!==n){bb0:{if(!o||c==null){l=null;break bb0}let e=A(n,r);if(e==null){l=null;break bb0}e.searchParams.set(`verificationIframeUid`,c),e.searchParams.set(`installPageUrl`,j().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),l=e.toString()}t[0]=c,t[1]=o,t[2]=r,t[3]=n,t[4]=l}else l=t[4];let u=l,d,f;if(t[5]!==c||t[6]!==u||t[7]!==i||t[8]!==r?(d=()=>{if(c==null||u==null)return;let e=e=>{let t=s.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!k(e.data)||e.data.verificationIframeUid!==c)return;let n=e.data.action;if(k(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}!k(n)||n.type!==`hook`||!k(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!k(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||i()};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},f=[c,u,i,r],t[5]=c,t[6]=u,t[7]=i,t[8]=r,t[9]=d,t[10]=f):(d=t[9],f=t[10]),(0,I.useEffect)(d,f),u==null){let e;t[11]===a?e=t[12]:(e=a.formatMessage(U.loadingLabel),t[11]=a,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let p;t[15]===a?p=t[16]:(p=a.formatMessage(U.verificationTitle),t[15]=a,t[16]=p);let m;return t[17]!==u||t[18]!==p?(m=(0,L.jsx)(`iframe`,{ref:s,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:N,referrerPolicy:`no-referrer`,src:u,title:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19],m}function N(e){M(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,Te=e((()=>{F=v(),C(),h(),I=t(ne()),oe(),L=_(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Ee(e){"use forget";let t=(0,Oe.c)(8),{sheerIdProgramId:n}=e,i=r(),a=i?.id??null,o=(0,K.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(E.clearModalError(),E.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),m(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,K.useEffect)(De,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==n||t[6]!==u?(d=(0,q.jsx)(G,{currentAccount:i,sheerIdProgramId:n},u),t[4]=i,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function De(){let e=W;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function W(e){e.persisted&&window.location.reload()}function G(e){"use forget";let t=(0,Oe.c)(89),{currentAccount:n,sheerIdProgramId:r}=e,i=se(),s=ee(),f=c(),p=u(),[m]=ie(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=l(),t[0]=h):h=t[0];let g=h,te=(0,K.useRef)(!1),ne=(0,K.useRef)(!1),re=(0,K.useRef)(!0),_;t[1]===m?_=t[2]:(_=m.get(Ae),t[1]=m,t[2]=_);let ae=_,oe=`/students/2026#trigger_students-2026-faq-verification`,v;t[3]===ae?v=t[4]:(v=new URLSearchParams({campaign:_e}).toString(),t[3]=ae,t[4]=v);let b=`/students/claim?${v}`,ce;t[5]===p?.email?ce=t[6]:(ce=g&&(p?.email?.trim()||o()?.user?.email?.trim())||null,t[5]=p?.email,t[6]=ce);let de=ce,x;t[7]!==b||t[8]!==r?(x={...ge,landingPath:b,sheerIdProgramId:r},t[7]=b,t[8]=r,t[9]=x):x=t[9];let S=x,me;t[10]!==n||t[11]!==S?(me=n!=null&&(!n.isPersonalAccount()||S.blocksMobileStoreSubscribers&&le(n)),t[10]=n,t[11]=S,t[12]=me):me=t[12];let C=me,ve=g&&n!=null&&!C,ye;t[13]===ve?ye=t[14]:(ye={enabled:ve,reportRefreshErrors:!0},t[13]=ve,t[14]=ye);let w=Ce(S,ye),T=w.name===`needs-verification`?w.verificationId??null:null,E=w.name===`needs-verification`?w.accountVerificationId??null:null,D=Se(T,E,S),O,k;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(re.current=!0,()=>{re.current=!1}),O=[],t[15]=O,t[16]=k):(O=t[15],k=t[16]),(0,K.useEffect)(k,O);let A,j;t[17]===b?(A=t[18],j=t[19]):(A=()=>{g||te.current||(te.current=!0,a({callbackUrl:b,fallbackScreenHint:`login`}))},j=[b,g],t[17]=b,t[18]=A,t[19]=j),(0,K.useEffect)(A,j);let M;t[20]!==f.isError||t[21]!==f.isFetching||t[22]!==f.isSuccess||t[23]!==b||t[24]!==n||t[25]!==w.name||t[26]!==C||t[27]!==s?(M=()=>{if(!g)return;let e=n==null&&!f.isFetching&&(f.isError||f.isSuccess),t=w.name===`coming-soon`||w.name===`error`||w.name===`verified`||w.name===`enrolled`;(e||C||t)&&s(b,{replace:!0})},t[20]=f.isError,t[21]=f.isFetching,t[22]=f.isSuccess,t[23]=b,t[24]=n,t[25]=w.name,t[26]=C,t[27]=s,t[28]=M):M=t[28];let N;t[29]!==f.isError||t[30]!==f.isFetching||t[31]!==f.isSuccess||t[32]!==b||t[33]!==n||t[34]!==w||t[35]!==C||t[36]!==s?(N=[f.isError,f.isFetching,f.isSuccess,b,n,w,C,g,s],t[29]=f.isError,t[30]=f.isFetching,t[31]=f.isSuccess,t[32]=b,t[33]=n,t[34]=w,t[35]=C,t[36]=s,t[37]=N):N=t[37],(0,K.useEffect)(M,N);let P,F;t[38]!==E||t[39]!==b||t[40]!==n||t[41]!==w.name||t[42]!==C||t[43]!==s||t[44]!==T||t[45]!==D?(P=()=>{!g||n==null||C||w.name!==`needs-verification`||T!=null&&E!=null||ne.current||(ne.current=!0,D().then(()=>{!re.current||d()?.id!==n.id||be.getState().modalErrorMessage==null||s(b,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[E,b,n,w.name,C,g,s,T,D],t[38]=E,t[39]=b,t[40]=n,t[41]=w.name,t[42]=C,t[43]=s,t[44]=T,t[45]=D,t[46]=P,t[47]=F):(P=t[46],F=t[47]),(0,K.useEffect)(P,F);let I;t[48]!==b||t[49]!==s?(I=()=>{s(pe(b,fe),{replace:!0})},t[48]=b,t[49]=s,t[50]=I):I=t[50];let L=I,R;t[51]!==E||t[52]!==b||t[53]!==n||t[54]!==C||t[55]!==r||t[56]!==T?(R=g&&n!=null&&T&&E&&!C?xe(r,`${window.location.origin}${pe(b,fe)}`,T,E):null,t[51]=E,t[52]=b,t[53]=n,t[54]=C,t[55]=r,t[56]=T,t[57]=R):R=t[57];let z=R,B;t[58]===i?B=t[59]:(B=i.formatMessage(J.artworkAlt),t[58]=i,t[59]=B);let V;t[60]===B?V=t[61]:(V=(0,q.jsx)(`img`,{alt:B,className:`order-first h-[228px] w-full object-cover lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`,height:523,src:ke,width:967}),t[60]=B,t[61]=V);let H;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.title})}),t[62]=H):H=t[62];let U;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,q.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[H,(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopTitle})})]}),t[63]=U):U=t[63];let Te;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(Te=(0,q.jsx)(`span`,{className:`lg:hidden`,children:(0,q.jsx)(y,{...J.description})}),t[64]=Te):Te=t[64];let Ee;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(Ee=(0,q.jsx)(`span`,{className:`hidden lg:inline`,children:(0,q.jsx)(y,{...J.desktopDescription})}),t[65]=Ee):Ee=t[65];let De;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,q.jsx)(y,{...J.verificationHelp}),t[66]=De):De=t[66];let W;t[67]===oe?W=t[68]:(W=(0,q.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[U,(0,q.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Te,Ee,(0,q.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:oe,rel:`noopener noreferrer`,target:`_blank`,children:De})]})]}),t[67]=oe,t[68]=W);let G;t[69]!==V||t[70]!==W?(G=(0,q.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[V,W]}),t[69]=V,t[70]=W,t[71]=G):G=t[71];let Y;t[72]===i?Y=t[73]:(Y=i.formatMessage(J.verificationFormLabel),t[72]=i,t[73]=Y);let X;t[74]!==de||t[75]!==i?(X=de?(0,q.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,q.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,q.jsx)(y,{...J.accountLabel}),(0,q.jsx)(ue,{content:i.formatMessage(J.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,q.jsx)(`button`,{...e,"aria-label":i.formatMessage(J.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,q.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,q.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:de})]}):null,t[74]=de,t[75]=i,t[76]=X):X=t[76];let Z;t[77]!==L||t[78]!==i||t[79]!==T||t[80]!==z?(Z=z&&T?(0,q.jsx)(we,{onSuccess:L,verificationId:T,verificationUrl:z}):(0,q.jsx)(`div`,{"aria-busy":`true`,"aria-label":i.formatMessage(J.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=L,t[78]=i,t[79]=T,t[80]=z,t[81]=Z):Z=t[81];let Q;t[82]!==Y||t[83]!==X||t[84]!==Z?(Q=(0,q.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=Y,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==G||t[87]!==Q?($=(0,q.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,q.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[86]=G,t[87]=Q,t[88]=$):$=t[88],$}var Oe,K,q,ke,Ae,J,Y=e((()=>{Oe=v(),me(),de(),Te(),C(),w(),T(),x(),p(),i(),s(),n(),S(),f(),K=t(ne()),oe(),ae(),q=_(),ke=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-ce48fbf63eff.jpg`,Ae=`students_2026_preview`,J=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),X,Z,Q,$,je,Me,Ne=e((()=>{ae(),X=v(),D(),Y(),ve(),Z=_(),Q={hasRouteMeta:!0},$=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],je=ce(function(){"use forget";let e=(0,X.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=re(),i;e[0]===r?i=e[1]:(i=(0,Z.jsx)(Ee,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Z.jsx)(O,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Me=te(ye)}));e((()=>{Ne()}))();export{Me as ErrorBoundary,je as default,Q as handle,$ as meta};
//# sourceMappingURL=students_.verify-nynluju1.js.map