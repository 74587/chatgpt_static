import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{AW as n,CK as r,G1 as i,GR as a,HR as o,IW as s,K1 as c,LW as l,N4 as u,SK as d,bW as f,hW as p,kW as m,nD as h,rD as g}from"./4813494d-lk6642tn8sy3nbdu.js";import{At as ee,Bt as te,Cn as ne,Et as re,Rt as ie,Sn as _,Z as ae,bn as oe,en as v,gn as y,xn as se,yn as b,zt as x}from"./2340486e-i20axdnmh5jcl165.js";import{Ff as S,Nf as ce,Smt as C,_n as le,fIt as ue,kf as de,ln as fe,pIt as w,vn as pe,xmt as me}from"./conversation-small-g3hjll9gpfcaj643.js";import{_y as T,gy as he}from"./30901919-ehcbutypmugbti4j.js";import{n as ge,t as _e}from"./6105d6cc-deb3qgyryagzi2wj.js";import{n as E,t as D}from"./9bfdcf20-d4f9bkzengg2daty.js";import{a as ve,l as O,n as ye,o as be,r as k,t as A,u as xe}from"./d4df9516-fymwlw28zwybvwan.js";import{n as j,t as Se}from"./759cd6d0-ndp88xeuwsr575k1.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function N(e,t){try{let n=new URL(e);return n.origin!==L||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function Ce(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ce),e}function we(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${B}${V}`}},L)}function Te(e){"use forget";let t=(0,P.c)(20),{verificationUrl:n,verificationId:i,onSuccess:a}=e,o=se(),s=r(),c=(0,F.useRef)(null),[l]=(0,F.useState)(De),u;if(t[0]!==l||t[1]!==s||t[2]!==i||t[3]!==n){bb0:{if(!s||l==null){u=null;break bb0}let e=N(n,i);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,Ce().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=s,t[2]=i,t[3]=n,t[4]=u}else u=t[4];let d=u,f,p;if(t[5]!==l||t[6]!==d||t[7]!==a||t[8]!==i?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==L||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(R,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}!M(n)||n.type!==`hook`||!M(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!M(n.hook.data)||n.hook.data.verificationId!==i||n.hook.data.currentStep!==`success`||a()};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[l,d,a,i],t[5]=l,t[6]=d,t[7]=a,t[8]=i,t[9]=f,t[10]=p):(f=t[9],p=t[10]),(0,F.useEffect)(f,p),d==null){let e;t[11]===o?e=t[12]:(e=o.formatMessage(H.loadingLabel),t[11]=o,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,I.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===o?m=t[16]:(m=o.formatMessage(H.verificationTitle),t[15]=o,t[16]=m);let h;return t[17]!==d||t[18]!==m?(h=(0,I.jsx)(`iframe`,{ref:c,allow:`camera ${L}`,className:`block min-h-[100px] w-full border-0`,onLoad:Ee,referrerPolicy:`no-referrer`,src:d,title:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19],h}function Ee(e){we(e.currentTarget)}function De(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var P,F,I,L,R,z,B,V,H,U=e((()=>{P=v(),S(),d(),F=t(ne()),oe(),I=_(),L=`https://services.sheerid.com`,R=100,z=2e3,B=`
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
`,H=b({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Oe(e){"use forget";let t=(0,ke.c)(8),{sheerIdProgramId:r}=e,i=n(),a=i?.id??null,o=(0,q.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(A.clearModalError(),A.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),g(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,q.useEffect)(W,l);let u=i?.id??`no-account`,d;return t[4]!==i||t[5]!==r||t[6]!==u?(d=(0,J.jsx)(K,{currentAccount:i,sheerIdProgramId:r},u),t[4]=i,t[5]=r,t[6]=u,t[7]=d):d=t[7],d}function W(){let e=G;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function G(e){e.persisted&&window.location.reload()}function K(e){"use forget";let t=(0,ke.c)(89),{currentAccount:n,sheerIdProgramId:r}=e,i=se(),o=ee(),s=m(),d=a(),[f]=ie(),h;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(h=c(),t[0]=h):h=t[0];let g=h,te=(0,q.useRef)(!1),ne=(0,q.useRef)(!1),re=(0,q.useRef)(!0),_;t[1]===f?_=t[2]:(_=f.get(je),t[1]=f,t[2]=_);let ae=_,oe=`/students/2026#trigger_students-2026-faq-verification`,v;t[3]===ae?v=t[4]:(v=new URLSearchParams({campaign:ce}).toString(),t[3]=ae,t[4]=v);let b=`/students/claim?${v}`,x;t[5]===d?.email?x=t[6]:(x=g&&(d?.email?.trim()||u()?.user?.email?.trim())||null,t[5]=d?.email,t[6]=x);let S=x,C;t[7]!==b||t[8]!==r?(C={...de,landingPath:b,sheerIdProgramId:r},t[7]=b,t[8]=r,t[9]=C):C=t[9];let w=C,pe;t[10]!==n||t[11]!==w?(pe=n!=null&&(!n.isPersonalAccount()||w.blocksMobileStoreSubscribers&&ue(n)),t[10]=n,t[11]=w,t[12]=pe):pe=t[12];let T=pe,ge=g&&n!=null&&!T,E;t[13]===ge?E=t[14]:(E={enabled:ge,reportRefreshErrors:!0},t[13]=ge,t[14]=E);let D=xe(w,E),O=D.name===`needs-verification`?D.verificationId??null:null,k=D.name===`needs-verification`?D.accountVerificationId??null:null,A=be(O,k,w),j,Se;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(Se=()=>(re.current=!0,()=>{re.current=!1}),j=[],t[15]=j,t[16]=Se):(j=t[15],Se=t[16]),(0,q.useEffect)(Se,j);let M,N;t[17]===b?(M=t[18],N=t[19]):(M=()=>{g||te.current||(te.current=!0,l({callbackUrl:b,fallbackScreenHint:`login`}))},N=[b,g],t[17]=b,t[18]=M,t[19]=N),(0,q.useEffect)(M,N);let Ce;t[20]!==s.isError||t[21]!==s.isFetching||t[22]!==s.isSuccess||t[23]!==b||t[24]!==n||t[25]!==D.name||t[26]!==T||t[27]!==o?(Ce=()=>{if(!g)return;let e=n==null&&!s.isFetching&&(s.isError||s.isSuccess),t=D.name===`coming-soon`||D.name===`error`||D.name===`verified`||D.name===`enrolled`;(e||T||t)&&o(b,{replace:!0})},t[20]=s.isError,t[21]=s.isFetching,t[22]=s.isSuccess,t[23]=b,t[24]=n,t[25]=D.name,t[26]=T,t[27]=o,t[28]=Ce):Ce=t[28];let we;t[29]!==s.isError||t[30]!==s.isFetching||t[31]!==s.isSuccess||t[32]!==b||t[33]!==n||t[34]!==D||t[35]!==T||t[36]!==o?(we=[s.isError,s.isFetching,s.isSuccess,b,n,D,T,g,o],t[29]=s.isError,t[30]=s.isFetching,t[31]=s.isSuccess,t[32]=b,t[33]=n,t[34]=D,t[35]=T,t[36]=o,t[37]=we):we=t[37],(0,q.useEffect)(Ce,we);let Ee,De;t[38]!==k||t[39]!==b||t[40]!==n||t[41]!==D.name||t[42]!==T||t[43]!==o||t[44]!==O||t[45]!==A?(Ee=()=>{!g||n==null||T||D.name!==`needs-verification`||O!=null&&k!=null||ne.current||(ne.current=!0,A().then(()=>{!re.current||p()?.id!==n.id||ve.getState().modalErrorMessage==null||o(b,{replace:!0,state:{students2026VerificationError:!0}})}))},De=[k,b,n,D.name,T,g,o,O,A],t[38]=k,t[39]=b,t[40]=n,t[41]=D.name,t[42]=T,t[43]=o,t[44]=O,t[45]=A,t[46]=Ee,t[47]=De):(Ee=t[46],De=t[47]),(0,q.useEffect)(Ee,De);let P;t[48]!==b||t[49]!==o?(P=()=>{o(le(b,fe),{replace:!0})},t[48]=b,t[49]=o,t[50]=P):P=t[50];let F=P,I;t[51]!==k||t[52]!==b||t[53]!==n||t[54]!==T||t[55]!==r||t[56]!==O?(I=g&&n!=null&&O&&k&&!T?ye(r,`${window.location.origin}${le(b,fe)}`,O,k):null,t[51]=k,t[52]=b,t[53]=n,t[54]=T,t[55]=r,t[56]=O,t[57]=I):I=t[57];let L=I,R;t[58]===i?R=t[59]:(R=i.formatMessage(Y.artworkAlt),t[58]=i,t[59]=R);let z;t[60]===R?z=t[61]:(z=(0,J.jsx)(_e,{altText:R,assetUrl:Ae,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[60]=R,t[61]=z);let B;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(y,{...Y.title})}),t[62]=B):B=t[62];let V;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,J.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[B,(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(y,{...Y.desktopTitle})})]}),t[63]=V):V=t[63];let H;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(y,{...Y.description})}),t[64]=H):H=t[64];let U;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(y,{...Y.desktopDescription})}),t[65]=U):U=t[65];let Oe;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,J.jsx)(y,{...Y.verificationHelp}),t[66]=Oe):Oe=t[66];let W;t[67]===oe?W=t[68]:(W=(0,J.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[V,(0,J.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[H,U,(0,J.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:oe,rel:`noopener noreferrer`,target:`_blank`,children:Oe})]})]}),t[67]=oe,t[68]=W);let G;t[69]!==z||t[70]!==W?(G=(0,J.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[z,W]}),t[69]=z,t[70]=W,t[71]=G):G=t[71];let K;t[72]===i?K=t[73]:(K=i.formatMessage(Y.verificationFormLabel),t[72]=i,t[73]=K);let X;t[74]!==S||t[75]!==i?(X=S?(0,J.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,J.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,J.jsx)(y,{...Y.accountLabel}),(0,J.jsx)(me,{content:i.formatMessage(Y.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,J.jsx)(`button`,{...e,"aria-label":i.formatMessage(Y.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,J.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,J.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:S})]}):null,t[74]=S,t[75]=i,t[76]=X):X=t[76];let Z;t[77]!==F||t[78]!==i||t[79]!==O||t[80]!==L?(Z=L&&O?(0,J.jsx)(Te,{onSuccess:F,verificationId:O,verificationUrl:L}):(0,J.jsx)(`div`,{"aria-busy":`true`,"aria-label":i.formatMessage(Y.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=F,t[78]=i,t[79]=O,t[80]=L,t[81]=Z):Z=t[81];let Q;t[82]!==K||t[83]!==X||t[84]!==Z?(Q=(0,J.jsxs)(`section`,{"aria-label":K,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=K,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==G||t[87]!==Q?($=(0,J.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,J.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[86]=G,t[87]=Q,t[88]=$):$=t[88],$}var ke,q,J,Ae,je,Y,X=e((()=>{ke=v(),T(),C(),ge(),U(),S(),O(),k(),pe(),f(),s(),o(),i(),w(),h(),q=t(ne()),oe(),ae(),J=_(),Ae=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,je=`students_2026_preview`,Y=b({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Z,Q,$,Me,Ne,Pe,Fe=e((()=>{ae(),Z=v(),j(),X(),E(),Q=_(),$={hasRouteMeta:!0},Me=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Ne=x(function(){"use forget";let e=(0,Z.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=re(),i;e[0]===r?i=e[1]:(i=(0,Q.jsx)(Oe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Q.jsx)(Se,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Pe=te(D)}));e((()=>{Fe()}))();export{Pe as ErrorBoundary,Ne as default,$ as handle,Me as meta};
//# sourceMappingURL=students_.verify-d1248om6.js.map