import{n as e,s as t}from"./f025431a-ehagpvg3m4e1cduv.js";import{Eq as n,GJ as r,Q7 as i,Tq as a,WJ as o,Z7 as s,cq as c,cz as l,iN as ee,oz as u,rN as d,rq as f,vq as te,wtt as ne,yq as p}from"./4813494d-k4tqhmof689yx2je.js";import{An as m,Bt as h,Dt as re,Fn as g,In as ie,Ln as ae,Pn as oe,Q as se,Rn as _,Vt as ce,jt as le,xn as v,zt as ue}from"./2340486e-lo737pyjfygyimqo.js";import{Gp as de,LEt as fe,QXt as pe,REt as y,Vp as me,ZXt as he,l7t as ge,qp as b,t7t as _e,u7t as x}from"./conversation-small-cyhg2evird2sa17j.js";import{Ey as ve,Ty as ye}from"./30901919-hpnfhmyvw6xwsqrj.js";import{Ff as be,If as xe,Nf as Se,Pf as S}from"./c2675c8c-mjye7lox5s4egk99.js";import{n as Ce,t as we}from"./6105d6cc-j3kwazgkhjfem3rr.js";import{n as C,t as Te}from"./9bfdcf20-hxzo7ugpvzav9dz7.js";import{a as Ee,d as De,f as Oe,l as w,n as ke,o as Ae,r as T,t as E,u as je}from"./d4df9516-dzk2dvwv6d6637sn.js";import{n as D,t as O}from"./759cd6d0-cuw6sqlv3x3h78q5.js";function k(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function A(e,t){try{let n=new URL(e);return n.origin!==R||n.username!==``||n.password!==``||!/^\/verify\/[^/]+\/?$/.test(n.pathname)||n.searchParams.getAll(`verificationId`).length!==1||n.searchParams.get(`verificationId`)!==t?null:(n.hash=``,n)}catch{return null}}function j(){let e=new URL(window.location.origin);return e.pathname=window.location.pathname,e.searchParams.set(`campaign`,de),e}function M(e){e.contentWindow?.postMessage({action:`setOptions`,options:{customCss:`${B}${V}`}},R)}function Me(e){"use forget";let t=(0,F.c)(21),{verificationUrl:n,verificationId:i,onSubmitted:a,onSuccess:o}=e,s=ie(),c=r(),l=(0,I.useRef)(null),ee=(0,I.useRef)(null),[u]=(0,I.useState)(P),d;if(t[0]!==u||t[1]!==c||t[2]!==i||t[3]!==n){bb0:{if(!c||u==null){d=null;break bb0}let e=A(n,i);if(e==null){d=null;break bb0}e.searchParams.set(`verificationIframeUid`,u),e.searchParams.set(`installPageUrl`,j().toString()),e.searchParams.set(`installType`,`cdn_inline_iframe`),d=e.toString()}t[0]=u,t[1]=c,t[2]=i,t[3]=n,t[4]=d}else d=t[4];let f=d,te,ne;if(t[5]!==u||t[6]!==f||t[7]!==a||t[8]!==o||t[9]!==i?(te=()=>{if(u==null||f==null)return;let e=e=>{let t=l.current;if(t==null||e.origin!==R||e.source!==t.contentWindow||!k(e.data)||e.data.verificationIframeUid!==u)return;let n=e.data.action;if(k(n)&&n.type===`updateHeight`){if(typeof n.height!=`number`||!Number.isFinite(n.height))return;let e=Math.min(z,Math.max(Ne,Math.round(n.height)));t.style.height=`${e}px`,t.scrolling=n.height>z?`auto`:`no`;return}if(!k(n)||n.type!==`hook`||!k(n.hook)||!k(n.hook.data)||n.hook.data.verificationId!==i)return;let r=n.hook.data.currentStep,s=n.hook.name===`ON_VERIFICATION_STEP_CHANGE`&&typeof r==`string`&&r!==`collectStudentPersonalInfo`&&r!==`collectPersonalInfo`,c=n.hook.name===`ON_VERIFICATION_SUCCESS`&&r===`success`;if(!(!s&&!c)){if(ee.current!==i){ee.current=i;try{a?.()}catch{}}c&&o()}};return window.addEventListener(`message`,e),()=>{window.removeEventListener(`message`,e)}},ne=[u,f,a,o,i],t[5]=u,t[6]=f,t[7]=a,t[8]=o,t[9]=i,t[10]=te,t[11]=ne):(te=t[10],ne=t[11]),(0,I.useEffect)(te,ne),f==null){let e;t[12]===s?e=t[13]:(e=s.formatMessage(H.loadingLabel),t[12]=s,t[13]=e);let n;return t[14]===e?n=t[15]:(n=(0,L.jsx)(`div`,{"aria-busy":`true`,"aria-label":e,className:`min-h-[100px] w-full`,role:`status`}),t[14]=e,t[15]=n),n}let p;t[16]===s?p=t[17]:(p=s.formatMessage(H.verificationTitle),t[16]=s,t[17]=p);let m;return t[18]!==f||t[19]!==p?(m=(0,L.jsx)(`iframe`,{ref:l,allow:`camera ${R}`,className:`block min-h-[100px] w-full border-0`,onLoad:N,referrerPolicy:`no-referrer`,src:f,title:p}),t[18]=f,t[19]=p,t[20]=m):m=t[20],m}function N(e){M(e.currentTarget)}function P(){return typeof window>`u`?null:globalThis.crypto.randomUUID()}var F,I,L,R,Ne,z,B,V,H,Pe=e((()=>{F=v(),b(),o(),I=t(_()),g(),L=ae(),R=`https://services.sheerid.com`,Ne=100,z=2e3,B=`
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
`,H=oe({loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_form.loading`,defaultMessage:`Loading student verification`},verificationTitle:{id:`chatgpt.students.back_to_school_2026.embedded_form.title`,defaultMessage:`Student verification`}})}));function Fe(e){"use forget";let t=(0,Re.c)(8),{sheerIdProgramId:n}=e,r=p(),i=r?.id??null,a=(0,W.useRef)(i),o,s;t[0]===i?(o=t[1],s=t[2]):(o=()=>{if(i==null)return;let e=a.current;a.current=i,e!=null&&e!==i&&(E.clearModalError(),E.setIsLoading(!1))},s=[i],t[0]=i,t[1]=o,t[2]=s),ee(o,s);let c;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=[],t[3]=c):c=t[3],(0,W.useEffect)(Ie,c);let l=r?.id??`no-account`,u;return t[4]!==r||t[5]!==n||t[6]!==l?(u=(0,G.jsx)(Le,{currentAccount:r,sheerIdProgramId:n},l),t[4]=r,t[5]=n,t[6]=l,t[7]=u):u=t[7],u}function Ie(){let e=U;return window.addEventListener(`pageshow`,e),()=>window.removeEventListener(`pageshow`,e)}function U(e){e.persisted&&window.location.reload()}function Le(e){"use forget";let t=(0,Re.c)(97),{currentAccount:r,sheerIdProgramId:a}=e,o=ie(),s=le(),c=te(),u=l(),[d]=ue(),p;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(p=i(),t[0]=p):p=t[0];let h=p,re;t[1]===d?re=t[2]:(re=()=>{be(d)},t[1]=d,t[2]=re);let g;t[3]!==r||t[4]!==d?(g=[d,r,h],t[3]=r,t[4]=d,t[5]=g):g=t[5],ee(re,g);let ae=(0,W.useRef)(!1),oe=(0,W.useRef)(!1),se=(0,W.useRef)(!0),_;t[6]===d?_=t[7]:(_=d.get(Be),t[6]=d,t[7]=_);let ce=_,v=`/students/2026#trigger_students-2026-faq-verification`,pe;t[8]===ce?pe=t[9]:(pe=new URLSearchParams({campaign:de}).toString(),t[8]=ce,t[9]=pe);let y=`/students/claim?${pe}`,b;t[10]===u?.email?b=t[11]:(b=h&&(u?.email?.trim()||ne()?.user?.email?.trim())||null,t[10]=u?.email,t[11]=b);let x=b,ve;t[12]!==y||t[13]!==a?(ve={...me,landingPath:y,sheerIdProgramId:a},t[12]=y,t[13]=a,t[14]=ve):ve=t[14];let S=ve,Ce;t[15]!==r||t[16]!==S?(Ce=r!=null&&(je(r)||!r.isPersonalAccount()||S.blocksMobileStoreSubscribers&&he(r)),t[15]=r,t[16]=S,t[17]=Ce):Ce=t[17];let C=Ce,Te=h&&r!=null&&!C,De;t[18]===Te?De=t[19]:(De={enabled:Te,reportRefreshErrors:!0},t[18]=Te,t[19]=De);let w=Oe(S,De),T=w.name===`needs-verification`?w.verificationId??null:null,E=w.name===`needs-verification`?w.accountVerificationId??null:null,D=Ae(T,E,S),O,k;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(O=()=>(se.current=!0,()=>{se.current=!1}),k=[],t[20]=O,t[21]=k):(O=t[20],k=t[21]),(0,W.useEffect)(O,k);let A,j;t[22]===y?(A=t[23],j=t[24]):(A=()=>{h||ae.current||(ae.current=!0,n({callbackUrl:Se(y),fallbackScreenHint:`login`}))},j=[y,h],t[22]=y,t[23]=A,t[24]=j),(0,W.useEffect)(A,j);let M;t[25]!==c.isError||t[26]!==c.isFetching||t[27]!==c.isSuccess||t[28]!==y||t[29]!==r||t[30]!==w.name||t[31]!==C||t[32]!==s?(M=()=>{if(!h)return;let e=r==null&&!c.isFetching&&(c.isError||c.isSuccess),t=w.name===`coming-soon`||w.name===`error`||w.name===`verified`||w.name===`enrolled`;(e||C||t)&&s(y,{replace:!0})},t[25]=c.isError,t[26]=c.isFetching,t[27]=c.isSuccess,t[28]=y,t[29]=r,t[30]=w.name,t[31]=C,t[32]=s,t[33]=M):M=t[33];let N;t[34]!==c.isError||t[35]!==c.isFetching||t[36]!==c.isSuccess||t[37]!==y||t[38]!==r||t[39]!==w||t[40]!==C||t[41]!==s?(N=[c.isError,c.isFetching,c.isSuccess,y,r,w,C,h,s],t[34]=c.isError,t[35]=c.isFetching,t[36]=c.isSuccess,t[37]=y,t[38]=r,t[39]=w,t[40]=C,t[41]=s,t[42]=N):N=t[42],(0,W.useEffect)(M,N);let P,F;t[43]!==E||t[44]!==y||t[45]!==r||t[46]!==w.name||t[47]!==C||t[48]!==s||t[49]!==T||t[50]!==D?(P=()=>{!h||r==null||C||w.name!==`needs-verification`||T!=null&&E!=null||oe.current||(oe.current=!0,D().then(()=>{!se.current||f()?.id!==r.id||Ee.getState().modalErrorMessage==null||s(y,{replace:!0,state:{students2026VerificationError:!0}})}))},F=[E,y,r,w.name,C,h,s,T,D],t[43]=E,t[44]=y,t[45]=r,t[46]=w.name,t[47]=C,t[48]=s,t[49]=T,t[50]=D,t[51]=P,t[52]=F):(P=t[51],F=t[52]),(0,W.useEffect)(P,F);let I;t[53]===r?I=t[54]:(I=()=>{let e=r?.normalizedAccountUserId;r==null||typeof e!=`string`||xe(`verification_submitted`,{identity:{accountId:r.id,accountUserId:e}})},t[53]=r,t[54]=I);let L=I,R;t[55]!==y||t[56]!==s?(R=()=>{s(ge(y,_e),{replace:!0})},t[55]=y,t[56]=s,t[57]=R):R=t[57];let Ne=R,z;t[58]!==E||t[59]!==y||t[60]!==r||t[61]!==C||t[62]!==a||t[63]!==T?(z=h&&r!=null&&T&&E&&!C?ke(a,`${window.location.origin}${ge(y,_e)}`,T,E):null,t[58]=E,t[59]=y,t[60]=r,t[61]=C,t[62]=a,t[63]=T,t[64]=z):z=t[64];let B=z,V;t[65]===o?V=t[66]:(V=o.formatMessage(K.artworkAlt),t[65]=o,t[66]=V);let H;t[67]===V?H=t[68]:(H=(0,G.jsx)(we,{altText:V,assetUrl:ze,mediaClassName:`h-full w-full object-cover`,rounding:`none`,wrapperClassName:`order-first h-[228px] w-full lg:order-last lg:mt-14 lg:h-[456px] lg:rounded-[32px]`}),t[67]=V,t[68]=H);let Pe;t[69]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(m,{...K.title})}),t[69]=Pe):Pe=t[69];let Fe;t[70]===Symbol.for(`react.memo_cache_sentinel`)?(Fe=(0,G.jsxs)(`h1`,{className:`text-token-text-primary text-[32px] leading-[1.14] font-medium tracking-[-0.64px] lg:text-[64px] lg:leading-none lg:tracking-[-1.28px]`,children:[Pe,(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(m,{...K.desktopTitle})})]}),t[70]=Fe):Fe=t[70];let Ie;t[71]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=(0,G.jsx)(`span`,{className:`lg:hidden`,children:(0,G.jsx)(m,{...K.description})}),t[71]=Ie):Ie=t[71];let U;t[72]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,G.jsx)(`span`,{className:`hidden lg:inline`,children:(0,G.jsx)(m,{...K.desktopDescription})}),t[72]=U):U=t[72];let Le;t[73]===Symbol.for(`react.memo_cache_sentinel`)?(Le=(0,G.jsx)(m,{...K.verificationHelp}),t[73]=Le):Le=t[73];let q;t[74]===v?q=t[75]:(q=(0,G.jsxs)(`div`,{className:`px-8 pt-8 lg:px-0 lg:pt-0`,children:[Fe,(0,G.jsxs)(`p`,{className:`text-token-text-secondary mt-6 text-base leading-[26px]`,children:[Ie,U,(0,G.jsx)(`a`,{className:`text-token-text-secondary ms-1 underline underline-offset-2`,href:v,rel:`noopener noreferrer`,target:`_blank`,children:Le})]})]}),t[74]=v,t[75]=q);let J;t[76]!==H||t[77]!==q?(J=(0,G.jsxs)(`section`,{className:`flex min-w-0 flex-col`,children:[H,q]}),t[76]=H,t[77]=q,t[78]=J):J=t[78];let Y;t[79]===o?Y=t[80]:(Y=o.formatMessage(K.verificationFormLabel),t[79]=o,t[80]=Y);let X;t[81]!==x||t[82]!==o?(X=x?(0,G.jsxs)(`div`,{className:`mb-8 flex flex-col items-start gap-2`,children:[(0,G.jsxs)(`div`,{className:`text-token-text-primary flex items-center gap-1 text-base leading-[26px] font-semibold tracking-[-0.32px]`,children:[(0,G.jsx)(m,{...K.accountLabel}),(0,G.jsx)(fe,{content:o.formatMessage(K.accountTooltip),contentLayout:`multi-line`,showOnTouch:!0,side:`bottom-end`,children:e=>(0,G.jsx)(`button`,{...e,"aria-label":o.formatMessage(K.accountTooltip),className:`interactive-button text-token-text-secondary hover:text-token-text-primary flex size-5 shrink-0 items-center justify-center rounded-sm max-sm:-m-3.5 max-sm:size-12`,type:`button`,children:(0,G.jsx)(ye,{"aria-hidden":`true`,className:`icon-sm`})})})]}),(0,G.jsx)(`span`,{className:`bg-token-bg-tertiary text-token-text-tertiary max-w-full rounded-lg px-3 py-2 text-base leading-[21px] font-medium tracking-[-0.32px] break-all`,children:x})]}):null,t[81]=x,t[82]=o,t[83]=X):X=t[83];let Z;t[84]!==L||t[85]!==Ne||t[86]!==o||t[87]!==T||t[88]!==B?(Z=B&&T?(0,G.jsx)(Me,{onSubmitted:L,onSuccess:Ne,verificationId:T,verificationUrl:B}):(0,G.jsx)(`div`,{"aria-busy":`true`,"aria-label":o.formatMessage(K.loadingLabel),className:`min-h-[100px] w-full`,role:`status`}),t[84]=L,t[85]=Ne,t[86]=o,t[87]=T,t[88]=B,t[89]=Z):Z=t[89];let Q;t[90]!==Y||t[91]!==X||t[92]!==Z?(Q=(0,G.jsxs)(`section`,{"aria-label":Y,className:`min-w-0 px-8 pt-8 lg:px-0 lg:pt-0`,children:[X,Z]}),t[90]=Y,t[91]=X,t[92]=Z,t[93]=Q):Q=t[93];let $;return t[94]!==J||t[95]!==Q?($=(0,G.jsx)(`main`,{className:`mx-auto w-full max-w-[1440px] pb-16 lg:px-12 lg:pt-[78px]`,children:(0,G.jsxs)(`div`,{className:`mx-auto grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-[minmax(0,618px)_minmax(0,493px)] lg:gap-[89px]`,children:[J,Q]})}),t[94]=J,t[95]=Q,t[96]=$):$=t[96],$}var Re,W,G,ze,Be,K,q=e((()=>{Re=v(),ve(),y(),Ce(),Pe(),b(),w(),De(),S(),T(),x(),c(),a(),u(),s(),pe(),d(),W=t(_()),g(),se(),G=ae(),ze=`https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-campus-lawn-e5c8ee276936.webp`,Be=`students_2026_preview`,K=oe({title:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.work.four_month`,defaultMessage:`Get 4 months of ChatGPT Work free`},desktopTitle:{id:`chatgpt.students.back_to_school_2026.embedded_verification.title.desktop.work.four_month`,defaultMessage:`Study. Build. Launch. Get 4 months of ChatGPT Work on us.`},description:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},desktopDescription:{id:`chatgpt.students.back_to_school_2026.embedded_verification.description.desktop.college`,defaultMessage:`An $80 value for eligible U.S. college students. Verify your student status to claim.`},verificationHelp:{id:`chatgpt.students.back_to_school_2026.embedded_verification.help`,defaultMessage:`How does verifying work?`},verificationFormLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.form.label`,defaultMessage:`Student verification form`},accountLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.label`,defaultMessage:`This offer will be applied to your ChatGPT account`},accountTooltip:{id:`chatgpt.students.back_to_school_2026.embedded_verification.account.tooltip`,defaultMessage:`You’re currently logged in with this account. To switch accounts, log out first.`},artworkAlt:{id:`chatgpt.students.back_to_school_2026.embedded_verification.artwork.alt.campus_lawn`,defaultMessage:`Students sitting together on a college campus lawn`},loadingLabel:{id:`chatgpt.students.back_to_school_2026.embedded_verification.loading`,defaultMessage:`Loading student verification`}})})),J,Y,X,Z,Q,$,Ve=e((()=>{se(),J=v(),D(),q(),C(),Y=ae(),X={hasRouteMeta:!0},Z=()=>[{title:`Student verification | ChatGPT`},{name:`robots`,content:`noindex, nofollow`}],Q=h(function(){"use forget";let e=(0,J.c)(6),{headerNavData:t,locale:n,sheerIdProgramId:r}=re(),i;e[0]===r?i=e[1]:(i=(0,Y.jsx)(Fe,{sheerIdProgramId:r}),e[0]=r,e[1]=i);let a;return e[2]!==t||e[3]!==n||e[4]!==i?(a=(0,Y.jsx)(O,{headerNavData:t,locale:n,slug:`students/verify`,children:i}),e[2]=t,e[3]=n,e[4]=i,e[5]=a):a=e[5],a}),$=ce(Te)}));e((()=>{Ve()}))();export{$ as ErrorBoundary,Q as default,X as handle,Z as meta};
//# sourceMappingURL=students_.verify-fdyh0dh9.js.map