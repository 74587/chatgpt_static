import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{F4 as n,J1 as r,MW as i,RW as a,SW as o,TK as s,WR as c,_W as l,aD as u,iD as d,jW as f,q1 as p,qR as m,wK as h,zW as ee}from"./4813494d-c216xditc3cxljzg.js";import{Bt as te,Cn as g,Dt as ne,Sn as re,Vt as _,Z as ie,_n as v,bn as ae,jt as oe,tn as y,wn as b,xn as x,zt as se}from"./2340486e-abcdn4jh3ig19emg.js";import{Emt as ce,Ff as S,Nf as le,Tmt as ue,_It as C,_n as de,gIt as fe,kf as pe,ln as me,vn as w}from"./conversation-small-c9q40y4q9a149g18.js";import{_y as T,gy as he}from"./30901919-bts6zvm6oxv9zaai.js";import{n as ge,t as _e}from"./6105d6cc-lfpibzsp3mswfqr3.js";import{n as ve,t as E}from"./9bfdcf20-iuxfm6sxzpf6pjdk.js";import{a as ye,l as D,n as be,o as xe,r as O,t as k,u as Se}from"./d4df9516-oll5aaws4tprqkpe.js";import{n as A,t as j}from"./759cd6d0-p01fr7tlbmhf2hl4.js";function M(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function N(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function P(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,le),e}function Ce(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},R)}function we(e){"use forget";let t=(0,F.c)(20),{verificationUrl:n,verificationId:r,onSuccess:i}=e,a=re(),o=s(),c=(0,I.useRef)(null),[l]=(0,I.useState)(Ee),u;if(t[0]!==l||t[1]!==o||t[2]!==r||t[3]!==n){bb0:{if(!o||l==null){u=null;break bb0}let e=N(n,r);if(e==null){u=null;break bb0}e.searchParams.set(`verificationIframeUid`,l),e.searchParams.set(`installPageUrl`,P().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),u=e.toString()}t[0]=l,t[1]=o,t[2]=r,t[3]=n,t[4]=u}else u=t[4];let d=u,f,p;if(t[5]!==l||t[6]!==d||t[7]!==i||t[8]!==r?(f=()=>{if(l==null||d==null)return;let e=e=>{let t=c.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!M(e.data)||e.data.verificationIframeUid!==l)return;let n=e.data.action;if(M(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(z,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}!M(n)||n.type!==`hook`||!M(n.hook)||n.hook.name!==`ON_VERIFICATION_SUCCESS`||!M(n.hook.data)||n.hook.data.verificationId!==r||n.hook.data.currentStep!==`success`||i()};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},p=[l,d,i,r],t[5]=l,t[6]=d,t[7]=i,t[8]=r,t[9]=f,t[10]=p):(f=t[9],p=t[10]),(0,I.useEffect)(f,p),d==null){let e;t[11]===a?e=t[12]:(e=a.formatMessage(U.loadingLabel),t[11]=a,t[12]=e);let n;return t[13]===e?n=t[14]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[13]=e,t[14]=n),n}let m;t[15]===a?m=t[16]:(m=a.formatMessage(U.verificationTitle),t[15]=a,t[16]=m);let h;return t[17]!==d||t[18]!==m?(h=(0,L.jsx)(`iframe`,{ref:c,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:Te,referrerPolicy:`no-referrer`,src:d,title:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19],h}function Te(e){Ce(e.currentTarget)}function Ee(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,z,B,V,H,U,De=e((()=>{F=y(),S(),h(),I=t(b()),x(),L=g(),R=`https://services.sheerid.com`,z=100,B=2e3,V=`
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
`,U=ae({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Oe(e){"use forget";let t=(0,ke.c)(8),{sheerIdProgramId:n}=e,r=i(),a=r?.id??null,o=(0,q.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(k.clearModalError(),k.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),u(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,q.useEffect)(W,l);let d=r?.id??`no-account`,f;return t[4]!==r||t[5]!==n||t[6]!==d?(f=(0,J.jsx)(K,{currentAccount:r,sheerIdProgramId:n},d),t[4]=r,t[5]=n,t[6]=d,t[7]=f):f=t[7],f}function W(){let e=G;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function G(e){e.persisted&&window.location.reload()}function K(e){"use forget";let t=(0,ke.c)(89),{currentAccount:i,sheerIdProgramId:a}=e,o=re(),s=oe(),c=f(),u=m(),[d]=se(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=r(),t[0]=p):p=t[0];let h=p,te=(0,q.useRef)(!1),g=(0,q.useRef)(!1),ne=(0,q.useRef)(!0),_;t[1]===d?_=t[2]:(_=d.get(je),t[1]=d,t[2]=_);let ie=_,ae=`/students/2026#trigger_students-2026-faq-verification`,y;t[3]===ie?y=t[4]:(y=new URLSearchParams({campaign:le}).toString(),t[3]=ie,t[4]=y);let b=`/students/claim?${y}`,x;t[5]===u?.email?x=t[6]:(x=h&&(u?.email?.trim()||n()?.user?.email?.trim())||null,t[5]=u?.email,t[6]=x);let ce=x,S;t[7]!==b||t[8]!==a?(S={...pe,landingPath:b,sheerIdProgramId:a},t[7]=b,t[8]=a,t[9]=S):S=t[9];let C=S,w;t[10]!==i||t[11]!==C?(w=i!=null&&(!i.isPersonalAccount()||C.blocksMobileStoreSubscribers&&fe(i)),t[10]=i,t[11]=C,t[12]=w):w=t[12];let T=w,ge=h&&i!=null&&!T,ve;t[13]===ge?ve=t[14]:(ve={enabled:ge,reportRefreshErrors:!0},t[13]=ge,t[14]=ve);let E=Se(C,ve),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,k=xe(D,O,C),A,j;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(j=()=>(ne.current=!0,()=>{ne.current=!1}),A=[],t[15]=A,t[16]=j):(A=t[15],j=t[16]),(0,q.useEffect)(j,A);let M,N;t[17]===b?(M=t[18],N=t[19]):(M=()=>{h||te.current||(te.current=!0,ee({callbackUrl:b,fallbackScreenHint:`login`}))},N=[b,h],t[17]=b,t[18]=M,t[19]=N),(0,q.useEffect)(M,N);let P;t[20]!==c.isError||t[21]!==c.isFetching||t[22]!==c.isSuccess||t[23]!==b||t[24]!==i||t[25]!==E.name||t[26]!==T||t[27]!==s?(P=()=>{if(!h)return;let e=i==null&&!c.isFetching&&(c.isError||c.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&s(b,{replace:!0})},t[20]=c.isError,t[21]=c.isFetching,t[22]=c.isSuccess,t[23]=b,t[24]=i,t[25]=E.name,t[26]=T,t[27]=s,t[28]=P):P=t[28];let Ce;t[29]!==c.isError||t[30]!==c.isFetching||t[31]!==c.isSuccess||t[32]!==b||t[33]!==i||t[34]!==E||t[35]!==T||t[36]!==s?(Ce=[c.isError,c.isFetching,c.isSuccess,b,i,E,T,h,s],t[29]=c.isError,t[30]=c.isFetching,t[31]=c.isSuccess,t[32]=b,t[33]=i,t[34]=E,t[35]=T,t[36]=s,t[37]=Ce):Ce=t[37],(0,q.useEffect)(P,Ce);let Te,Ee;t[38]!==O||t[39]!==b||t[40]!==i||t[41]!==E.name||t[42]!==T||t[43]!==s||t[44]!==D||t[45]!==k?(Te=()=>{!h||i==null||T||E.name!==`needs-verification`||D!=null&&O!=null||g.current||(g.current=!0,k().then(()=>{!ne.current||l()?.id!==i.id||ye.getState().modalErrorMessage==null||s(b,{replace:!0,state:{students2026VerificationError:!0}})}))},Ee=[O,b,i,E.name,T,h,s,D,k],t[38]=O,t[39]=b,t[40]=i,t[41]=E.name,t[42]=T,t[43]=s,t[44]=D,t[45]=k,t[46]=Te,t[47]=Ee):(Te=t[46],Ee=t[47]),(0,q.useEffect)(Te,Ee);let F;t[48]!==b||t[49]!==s?(F=()=>{s(de(b,me),{replace:!0})},t[48]=b,t[49]=s,t[50]=F):F=t[50];let I=F,L;t[51]!==O||t[52]!==b||t[53]!==i||t[54]!==T||t[55]!==a||t[56]!==D?(L=h&&i!=null&&D&&O&&!T?be(a,`${window.location.origin}${de(b,me)}`,D,O):null,t[51]=O,t[52]=b,t[53]=i,t[54]=T,t[55]=a,t[56]=D,t[57]=L):L=t[57];let R=L,z;t[58]===o?z=t[59]:(z=o.formatMessage(Y.artworkAlt),t[58]=o,t[59]=z);let B;t[60]===z?B=t[61]:(B=(0,J.jsx)(_e,{altText:z,assetUrl:Ae,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[60]=z,t[61]=B);let V;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(v,{...Y.title})}),t[62]=V):V=t[62];let H;t[63]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,J.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[V,(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(v,{...Y.desktopTitle})})]}),t[63]=H):H=t[63];let U;t[64]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,J.jsx)(`span`,{className:`lg:hidden`,children:(0,J.jsx)(v,{...Y.description})}),t[64]=U):U=t[64];let De;t[65]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,J.jsx)(`span`,{className:`hidden lg:inline`,children:(0,J.jsx)(v,{...Y.desktopDescription})}),t[65]=De):De=t[65];let Oe;t[66]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=(0,J.jsx)(v,{...Y.verificationHelp}),t[66]=Oe):Oe=t[66];let W;t[67]===ae?W=t[68]:(W=(0,J.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[H,(0,J.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[U,De,(0,J.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:ae,rel:`noopener noreferrer`,target:`_blank`,children:Oe})]})]}),t[67]=ae,t[68]=W);let G;t[69]!==B||t[70]!==W?(G=(0,J.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[B,W]}),t[69]=B,t[70]=W,t[71]=G):G=t[71];let K;t[72]===o?K=t[73]:(K=o.formatMessage(Y.verificationFormLabel),t[72]=o,t[73]=K);let X;t[74]!==ce||t[75]!==o?(X=ce?(0,J.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,J.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,J.jsx)(v,{...Y.accountLabel}),(0,J.jsx)(ue,{content:o.formatMessage(Y.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,J.jsx)(`button`,{...e,"aria-label":o.formatMessage(Y.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,J.jsx)(he,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,J.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:ce})]}):null,t[74]=ce,t[75]=o,t[76]=X):X=t[76];let Z;t[77]!==I||t[78]!==o||t[79]!==D||t[80]!==R?(Z=R&&D?(0,J.jsx)(we,{onSuccess:I,verificationId:D,verificationUrl:R}):(0,J.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(Y.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[77]=I,t[78]=o,t[79]=D,t[80]=R,t[81]=Z):Z=t[81];let Q;t[82]!==K||t[83]!==X||t[84]!==Z?(Q=(0,J.jsxs)(`section`,{"aria-label":K,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[82]=K,t[83]=X,t[84]=Z,t[85]=Q):Q=t[85];let $;return t[86]!==G||t[87]!==Q?($=(0,J.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,J.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[G,Q]})}),t[86]=G,t[87]=Q,t[88]=$):$=t[88],$}var ke,q,J,Ae,je,Y,X=e((()=>{ke=y(),T(),ce(),ge(),De(),S(),D(),O(),w(),o(),a(),c(),p(),C(),d(),q=t(b()),x(),ie(),J=g(),Ae=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,je=`students_2026_preview`,Y=ae({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),Z,Q,$,Me,Ne,Pe,Fe=e((()=>{ie(),Z=y(),A(),X(),ve(),Q=g(),$={hasRouteMeta:!0},Me=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Ne=te(function(){"use forget";let e=(0,Z.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Q.jsx)(Oe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Q.jsx)(j,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),Pe=_(E)}));e((()=>{Fe()}))();export{Pe as ErrorBoundary,Ne as default,$ as handle,Me as meta};
//# sourceMappingURL=students_.verify-gjflu674.js.map