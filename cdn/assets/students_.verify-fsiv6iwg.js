import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{Cz as n,DG as r,F_ as i,OG as a,P_ as o,_2 as s,_q as c,bG as l,bz as u,dG as d,g2 as f,gq as p,l6 as ee,oG as te,xG as m}from"./4813494d-d6xmo1ee0mn6y0hn.js";import{Bt as h,Dt as ne,Fn as re,In as g,Ln as ie,Nn as ae,Pn as oe,Vt as _,Z as se,jt as ce,kn as v,xn as y,zt as le}from"./2340486e-bcoev3jbtc75b03s.js";import{$f as ue,Yf as de,_n as fe,aHt as pe,dyt as me,fyt as b,iHt as he,ln as ge,tp as x,vn as _e}from"./conversation-small-d0jzp2n4quwzwhli.js";import{Cy as S,Sy as ve}from"./30901919-b0eqo9r1l542u4su.js";import{Ad as ye,Od as be,jd as xe,kd as C}from"./c2675c8c-gkzwufjhc5bxrzio.js";import{n as w,t as Se}from"./6105d6cc-m126moxqyysucku4.js";import{n as T,t as Ce}from"./9bfdcf20-d7ecv3sqabcumkeq.js";import{a as we,d as Te,f as Ee,l as E,n as De,o as Oe,r as D,t as O,u as ke}from"./d4df9516-bw80vlkmeqyxrbql.js";import{n as Ae,t as k}from"./759cd6d0-dnl7vj8stvsqtg49.js";function A(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function j(e,t){try{let n=new URL(e);return n.origin!==z||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function M(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,ue),e}function N(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${V}${H}`}},z)}function je(e){"use forget";let t=(0,I.c)(21),{verificationUrl:n,verificationId:r,onSubmitted:i,onSuccess:a}=e,o=re(),s=c(),l=(0,L.useRef)(null),u=(0,L.useRef)(null),[d]=(0,L.useState)(F),f;if(t[0]!==d||t[1]!==s||t[2]!==r||t[3]!==n){bb0:{if(!s||d==null){f=null;break bb0}let e=j(n,r);if(e==null){f=null;break bb0}e.searchParams.set(`verificationIframeUid`,d),e.searchParams.set(`installPageUrl`,M().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),f=e.toString()}t[0]=d,t[1]=s,t[2]=r,t[3]=n,t[4]=f}else f=t[4];let p=f,ee,te;if(t[5]!==d||t[6]!==p||t[7]!==i||t[8]!==a||t[9]!==r?(ee=()=>{if(d==null||p==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==z||e.source!==t.contentWindow||!A(e.data)||e.data.verificationIframeUid!==d)return;let n=e.data.action;if(A(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(B,Math.max(Me,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>B?`auto`:`no`;return}if(!A(n)||n.type!==`hook`||!A(n.hook)||!A(n.hook.data)||n.hook.data.verificationId!==r)return;let o=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof o==`string`&&o!==`collectStudentPersonalInfo`&&o!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&o===`success`;if(!(!s&&!c)){if(u.current!==r){u.current=r;try{i?.()}catch{}}c&&a()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},te=[d,p,i,a,r],t[5]=d,t[6]=p,t[7]=i,t[8]=a,t[9]=r,t[10]=ee,t[11]=te):(ee=t[10],te=t[11]),(0,L.useEffect)(ee,te),p==null){let e;t[12]===o?e=t[13]:(e=o.formatMessage(U.loadingLabel),t[12]=o,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,R.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let m;t[16]===o?m=t[17]:(m=o.formatMessage(U.verificationTitle),t[16]=o,t[17]=m);let h;return t[18]!==p||t[19]!==m?(h=(0,R.jsx)(`iframe`,{ref:l,allow:`camera ${z}`,className:`block min-h-[100px] w-full border-0`,onLoad:P,referrerPolicy:`no-referrer`,src:p,title:m}),t[18]=p,t[19]=m,t[20]=h):h=t[20],h}function P(e){N(e.currentTarget)}function F(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var I,L,R,z,Me,B,V,H,U,Ne=e((()=>{I=y(),x(),p(),L=t(ie()),oe(),R=g(),z=`https://services.sheerid.com`,Me=100,B=2e3,V=`
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
`,U=ae({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Pe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=m(),a=r?.id??null,o=(0,W.useRef)(a),s,c;t[0]===a?(s=t[1],c=t[2]):(s=()=>{if(a==null)return;let e=o.current;o.current=a,e!=null&&e!==a&&(O.clearModalError(),O.setIsLoading(!1))},c=[a],t[0]=a,t[1]=s,t[2]=c),i(s,c);let l;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=[],t[3]=l):l=t[3],(0,W.useEffect)(Fe,l);let u=r?.id??`no-account`,d;return t[4]!==r||t[5]!==n||t[6]!==u?(d=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},u),t[4]=r,t[5]=n,t[6]=u,t[7]=d):d=t[7],d}function Fe(){let e=Ie;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function Ie(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:o}=e,c=re(),u=ce(),d=l(),f=n(),[p]=le(),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=s(),t[0]=m):m=t[0];let h=m,ne;t[1]===p?ne=t[2]:(ne=()=>{ye(p)},t[1]=p,t[2]=ne);let g;t[3]!==r||t[4]!==p?(g=[p,r,h],t[3]=r,t[4]=p,t[5]=g):g=t[5],i(ne,g);let ie=(0,W.useRef)(!1),ae=(0,W.useRef)(!1),oe=(0,W.useRef)(!0),_;t[6]===p?_=t[7]:(_=p.get(Be),t[6]=p,t[7]=_);let se=_,y=`/students/2026#trigger_students-2026-faq-verification`,pe;t[8]===se?pe=t[9]:(pe=new URLSearchParams({campaign:ue}).toString(),t[8]=se,t[9]=pe);let b=`/students/claim?${pe}`,x;t[10]===f?.email?x=t[11]:(x=h&&(f?.email?.trim()||ee()?.user?.email?.trim())||null,t[10]=f?.email,t[11]=x);let _e=x,S;t[12]!==b||t[13]!==o?(S={...de,landingPath:b,sheerIdProgramId:o},t[12]=b,t[13]=o,t[14]=S):S=t[14];let C=S,w;t[15]!==r||t[16]!==C?(w=r!=null&&(ke(r)||!r.isPersonalAccount()||C.blocksMobileStoreSubscribers&&he(r)),t[15]=r,t[16]=C,t[17]=w):w=t[17];let T=w,Ce=h&&r!=null&&!T,Te;t[18]===Ce?Te=t[19]:(Te={enabled:Ce,reportRefreshErrors:!0},t[18]=Ce,t[19]=Te);let E=Ee(C,Te),D=E.name===`needs-verification`?E.verificationId??null:null,O=E.name===`needs-verification`?E.accountVerificationId??null:null,Ae=Oe(D,O,C),k,A;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>(oe.current=!0,()=>{oe.current=!1}),A=[],t[20]=k,t[21]=A):(k=t[20],A=t[21]),(0,W.useEffect)(k,A);let j,M;t[22]===b?(j=t[23],M=t[24]):(j=()=>{h||ie.current||(ie.current=!0,a({callbackUrl:be(b),fallbackScreenHint:`login`}))},M=[b,h],t[22]=b,t[23]=j,t[24]=M),(0,W.useEffect)(j,M);let N;t[25]!==d.isError||t[26]!==d.isFetching||t[27]!==d.isSuccess||t[28]!==b||t[29]!==r||t[30]!==E.name||t[31]!==T||t[32]!==u?(N=()=>{if(!h)return;let e=r==null&&!d.isFetching&&(d.isError||d.isSuccess),t=E.name===`coming-soon`||E.name===`error`||E.name===`verified`||E.name===`enrolled`;(e||T||t)&&u(b,{replace:!0})},t[25]=d.isError,t[26]=d.isFetching,t[27]=d.isSuccess,t[28]=b,t[29]=r,t[30]=E.name,t[31]=T,t[32]=u,t[33]=N):N=t[33];let P;t[34]!==d.isError||t[35]!==d.isFetching||t[36]!==d.isSuccess||t[37]!==b||t[38]!==r||t[39]!==E||t[40]!==T||t[41]!==u?(P=[d.isError,d.isFetching,d.isSuccess,b,r,E,T,h,u],t[34]=d.isError,t[35]=d.isFetching,t[36]=d.isSuccess,t[37]=b,t[38]=r,t[39]=E,t[40]=T,t[41]=u,t[42]=P):P=t[42],(0,W.useEffect)(N,P);let F,I;t[43]!==O||t[44]!==b||t[45]!==r||t[46]!==E.name||t[47]!==T||t[48]!==u||t[49]!==D||t[50]!==Ae?(F=()=>{!h||r==null||T||E.name!==`needs-verification`||D!=null&&O!=null||ae.current||(ae.current=!0,Ae().then(()=>{!oe.current||te()?.id!==r.id||we.getState().modalErrorMessage==null||u(b,{replace:!0,state:{students2026VerificationError:!0}})}))},I=[O,b,r,E.name,T,h,u,D,Ae],t[43]=O,t[44]=b,t[45]=r,t[46]=E.name,t[47]=T,t[48]=u,t[49]=D,t[50]=Ae,t[51]=F,t[52]=I):(F=t[51],I=t[52]),(0,W.useEffect)(F,I);let L;t[53]===r?L=t[54]:(L=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||xe(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=L);let R=L,z;t[55]!==b||t[56]!==u?(z=()=>{u(fe(b,ge),{replace:!0})},t[55]=b,t[56]=u,t[57]=z):z=t[57];let Me=z,B;t[58]!==O||t[59]!==b||t[60]!==r||t[61]!==T||t[62]!==o||t[63]!==D?(B=h&&r!=null&&D&&O&&!T?De(o,`${window.location.origin}${fe(b,ge)}`,D,O):null,t[58]=O,t[59]=b,t[60]=r,t[61]=T,t[62]=o,t[63]=D,t[64]=B):B=t[64];let V=B,H;t[65]===c?H=t[66]:(H=c.formatMessage(K.artworkAlt),t[65]=c,t[66]=H);let U;t[67]===H?U=t[68]:(U=(0,G.jsx)(Se,{altText:H,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=H,t[68]=U);let Ne;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.title})}),t[69]=Ne):Ne=t[69];let Pe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Ne,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopTitle})})]}),t[70]=Pe):Pe=t[70];let Fe;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(v,{...K.description})}),t[71]=Fe):Fe=t[71];let Ie;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(v,{...K.desktopDescription})}),t[72]=Ie):Ie=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(v,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===y?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Pe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Fe,Ie,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:y,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=y,t[75]=q);let J;t[76]!==U||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[U,q]}),t[76]=U,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===c?Y=t[80]:(Y=c.formatMessage(K.verificationFormLabel),t[79]=c,t[80]=Y);let X;t[81]!==_e||t[82]!==c?(X=_e?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(v,{...K.accountLabel}),(0,G.jsx)(me,{content:c.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":c.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ve,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:_e})]}):null,t[81]=_e,t[82]=c,t[83]=X):X=t[83];let Z;t[84]!==R||t[85]!==Me||t[86]!==c||t[87]!==D||t[88]!==V?(Z=V&&D?(0,G.jsx)(je,{onSubmitted:R,onSuccess:Me,verificationId:D,verificationUrl:V}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":c.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=R,t[85]=Me,t[86]=c,t[87]=D,t[88]=V,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=y(),S(),b(),w(),Ne(),x(),E(),Te(),C(),D(),_e(),d(),r(),u(),f(),pe(),o(),W=t(ie()),oe(),se(),G=g(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=ae({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{se(),J=y(),Ae(),q(),T(),Y=g(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=h(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=ne(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Pe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(k,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=_(Ce)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-fsiv6iwg.js.map