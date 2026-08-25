const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-ihgu0t8jcpez4bf0.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-d9rkg8ps4cmosva3.js","assets/2340486e-abcdn4jh3ig19emg.js","assets/conversation-small-jijygaz4j5narktq.js","assets/30901919-j0mwd4jw514vnw0i.js","assets/c470f5ab-ei987cz1nzd4tq8k.js","assets/0e5afe53-kcebb0d2u8juigrx.js","assets/conversation-small-n2z5o5td.css","assets/8b34dbc2-ki8bp6ivq113cr2q.js","assets/82782bc9-fyedha4nxwvv15wz.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$X as r,B2 as i,Bs as a,Ca as o,DD as s,GE as c,HP as l,HV as u,ID as d,IX as f,J2 as p,K2 as m,LX as h,P2 as g,QX as _,Rs as v,UP as y,UV as b,WP as x,YE as ee,bg as S,cB as te,ja as ne,ju as C,kY as w,ku as T,l4 as E,m1 as re,mG as D,nM as O,nx as k,o4 as ie,oD as A,pG as j,qE as M,qP as ae,sB as N,sD as P,tx as oe,u4 as F,v1 as se,wY as ce,xg as I,z2 as L,zE as le}from"./4813494d-d9rkg8ps4cmosva3.js";import{Cn as R,En as z,Sn as ue,Tn as de,_n as B,bn as fe,tn as V,wn as H,xn as U}from"./2340486e-abcdn4jh3ig19emg.js";import{A4 as pe,Adn as me,C4 as W,D4 as he,E4 as ge,F4 as _e,G_t as G,Hb as ve,I4 as ye,L4 as be,M4 as xe,T4 as Se,U_t as Ce,Ub as we,W_t as Te,Xn as Ee,Yn as De,_E as K,c1t as Oe,gln as ke,hln as Ae,j4 as je,jdn as Me,mE as Ne,nu as q,o1t as Pe,sE as Fe,tu as J,w4 as Ie}from"./conversation-small-jijygaz4j5narktq.js";import{DE as Le,EE as Re,FC as ze,PC as Be,Sx as Ve,xx as He}from"./30901919-j0mwd4jw514vnw0i.js";import{i as Ue,n as We,t as Ge}from"./8d846022-habmttvqwy4a5siq.js";import{a as Ke,i as qe,o as Je}from"./91969468-nn0hzxf3dw3lo5s9.js";import{n as Ye,t as Xe}from"./4d271a7b-mi71hnt2kd1flkjs.js";import{n as Ze,r as Qe}from"./58bafdef-ghpp4axjy0s87qw1.js";import{a as Y,i as $e}from"./e01e2324-inmhrwgiynfefiuq.js";import{i as X,t as et}from"./5dc32f04-kwkveto176poossh.js";import{n as tt,t as nt}from"./066a83b9-idpt8d7j3j8rnlm7.js";import{i as rt,n as it,r as at,t as ot}from"./9eb56efa-i30cctjhz5ab79tn.js";import{i as st,n as ct,r as lt,t as ut}from"./cc79834b-fk5mejtm066rb7v6.js";function dt(){return g(`2779568043`)}function ft(){return g(`3864712762`)}function pt(){return L(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var mt=e((()=>{i()}));function ht({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var gt=e((()=>{}));function _t({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function vt(){return typeof performance<`u`?performance.now():Date.now()}function yt(e){return new TextEncoder().encode(e).byteLength/1024}function bt(e){return e instanceof Error?e.name:`unknown`}function xt(e,t,n=1){F.count(ie.APP_BLOCKS,e,_t(t),n)}function St(e,t,n){F.hist(ie.APP_BLOCKS,e,_t(n),t)}function Ct({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,wt.useRef)(vt()),i=(0,wt.useRef)(null),a=(0,wt.useRef)(!1),o=(0,wt.useRef)(!1),s=y(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=y((n=e)=>{o.current||(o.current=!0,St(Dt,yt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:y((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=vt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),xt(At,t);let _=(e,n)=>{f||(f=!0,xt(kt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=vt();St(Ot,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,St(Tt,s-r.current,t),n!=null&&St(Mt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=vt(),g=n,St(jt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),xt(Et,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{E(),l(),wt=n(H()),Tt=`app_block.first_render_time_ms`,Et=`app_block.load.failure`,Dt=`app_block.payload_size_kb`,Ot=`app_block.ready_to_first_paint_ms`,kt=`app_block.render.outcome`,At=`app_block.render.start`,jt=`app_block.sandbox_eval_to_ready_ms`,Mt=`app_block.widget_ref_to_first_paint_ms`}));function Pt(e){return e==="default"||e===`open`?e:null}function Ft({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var It=e((()=>{})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Jt=e((()=>{}));function Yt(e){return String.raw(on||=qt([`<script>
  (() => {
    const isOpenStyleMode = `,`;

    function updateSurface(surface) {
      if (surface !== "inline" && surface !== "stage") {
        return;
      }

      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");
      const surfaceBackgrounds = isDarkMode
        ? { inline: "#000000", stage: "#212121" }
        : { inline: "#fcfcfc", stage: "#ffffff" };
      root.setAttribute("data-app-block-surface", surface);
      root.style.backgroundColor =
        surface === "inline" && isOpenStyleMode
          ? "transparent"
          : "var(--main-surface-primary, " + surfaceBackgrounds[surface] + ")";
    }

    window.addEventListener("openai:set_globals", (event) => {
      const surface = event.detail?.globals?.__appBlockSurface;
      if (surface != null) {
        updateSurface(surface);
      }
    });

    const initialSurface =
      window.openai?.__appBlockSurface ??
      document.documentElement.getAttribute("data-app-block-surface") ??
      "inline";
    updateSurface(initialSurface);
  })();
<\/script>`]),e===`open`)}function Xt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Zt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Qt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function $t(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function en(e){try{return new URL(e).origin}catch{return null}}function tn(e){return dn.has(e)?e:`default`}function nn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function rn(e=[]){let t=$t(Gt),n=$t(Bt),r=[en(cn),en(ln),en(t),en(n),...un,...e.map(en)];return Array.from(new Set(r.filter(e=>e!=null)))}function an(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Yt(l):``;if(!s&&Xt(u))return{html:c?Zt(u,d):u,expectReadySignal:!1};let f=Qt(n),p=l===`open`?Lt:Ht,m=$t(l===`open`?Bt:Gt),h=tn(r),g=nn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${cn}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${m}" />`:`<style>${p}</style>`}
    ${s?fn:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?pn:``}
  </body>
</html>`}}var on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{Rt(),Vt(),Ut(),Kt(),Jt(),cn=`https://cdn.tailwindcss.com`,ln=`https://images.openai.com`,un=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],dn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),fn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,pn=String.raw(sn||=qt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`],[`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(H()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{D(),z(),yn=j(()=>de(()=>import(`./7aa2b76f-ihgu0t8jcpez4bf0.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function xn(e){"use forget";let t=(0,wn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,Tn.useId)()}`,u=(0,Tn.useRef)(null),[d,f]=(0,Tn.useState)(null),p=o.appBlockId,m=o.libraryFileId,g=o.messageId,_=o.refIndex,v=a??null,y;t[0]!==v||t[1]!==p?(y={appBlockId:p,conversationId:v},t[0]=v,t[1]=p,t[2]=y):y=t[2];let b=y,x=h(W),ee;t[3]!==x||t[4]!==b?(ee=he(x,b),t[3]=x,t[4]=b,t[5]=ee):ee=t[5];let S=ee,te=x?.appBlockId===p&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),ne=S||te,C;t[6]!==x||t[7]!==l||t[8]!==b?(C=pe(x,b,l),t[6]=x,t[7]=l,t[8]=b,t[9]=C):C=t[9];let w=C,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{u.current?.focus()},t[10]=T):T=t[10];let E=T,re=d?.supportsAtomicMove?d:void 0,D;t[11]!==p||t[12]!==m||t[13]!==g||t[14]!==_?(D={appBlockId:p,libraryFileId:m,messageId:g,refIndex:_},t[11]=p,t[12]=m,t[13]=g,t[14]=_,t[15]=D):D=t[15];let O;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==re||t[20]!==D||t[21]!==c?(O={additionalResourceDomains:n,code:i,focusOnClose:E,sharedPreview:re,source:D,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=re,t[20]=D,t[21]=c,t[22]=O):O=t[22];let k=O,ie,A;t[23]!==k||t[24]!==S||t[25]!==b?(ie=()=>{S&&je(b,k)},A=[k,S,b],t[23]=k,t[24]=S,t[25]=b,t[26]=ie,t[27]=A):(ie=t[26],A=t[27]),(0,Tn.useEffect)(ie,A);let j;t[28]!==k||t[29]!==w||t[30]!==b?(j=()=>{Ie(b,w,k)},t[28]=k,t[29]=w,t[30]=b,t[31]=j):j=t[31];let M=j,ae;t[32]!==ne||t[33]!==te||t[34]!==M||t[35]!==d?(ae={isExpanded:ne,isViewingHistoricalVersion:te,openExpandedView:M,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=ne,t[33]=te,t[34]=M,t[35]=d,t[36]=ae):ae=t[36];let N=ae,P;return t[37]!==r||t[38]!==N?(P=(0,En.jsx)(_n.Provider,{value:N,children:r}),t[37]=r,t[38]=N,t[39]=P):P=t[39],P}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=lt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:J(i).height$()??0,t[0]=i,t[1]=l);let u=h(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,En.jsxs)(ut.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let g;t[7]===d?g=t[8]:(g={paddingBottom:d},t[7]=d,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,En.jsx)(ut.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==m||t[15]!==v?(y=(0,En.jsxs)(En.Fragment,{children:[m,v]}),t[14]=m,t[15]=v,t[16]=y):y=t[16],y}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=st(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=V(),q(),ct(),f(),Tn=n(H()),vn(),ge(),bn(),En=R()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(B,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=V(),U(),An=R()}));function Mn(e){"use forget";let t=(0,Pn.c)(38),n=ue(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(Rn.generatingApp,{title:e}):n.formatMessage(Rn.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(Rn.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(Rn.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(Rn.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(Rn.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(Rn.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(Rn.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(Rn.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(Rn.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(Rn.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(Rn.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Fn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Ln);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Fn.useEffect)(y,b),g[_]??g[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{title:n}=e,r=Mn(n),i;return t[0]===r?i=t[1]:(i=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(et,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Pn,Fn,In,Ln,Rn,zn=e((()=>{Pn=V(),X(),Fn=n(H()),U(),In=R(),Ln=2800,Rn=fe({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Bn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Hn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===re.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=Vn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===$n?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=O(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Xn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function Vn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==$n||e.library_file_id==null?null:{appBlockId:ht({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Hn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==er||e.category!==$n||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Un(r,`content`),a=Un(r,`entrypoint`)??`index.html`,o=Jn(r,a),s=Gn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Un(r,`app_block_id`)??ht({messageId:t,refIndex:n}),bundleVersion:Wn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Gn(o,`current_content_file_id`),entrypoint:a,iconSvg:Un(r,`icon_svg`),language:Yn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Gn(o,`library_file_name`),libraryFileVersionNumber:qn(Kn(o,`library_file_version_number`)),mimeType:Gn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Pt(Un(r,`style_mode`)),title:Un(r,`display_name`)??Un(r,`title`)}}function Un(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Wn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Gn(e,t){return typeof e!=`object`||!e?null:Un(e,t)}function Kn(e,t){return typeof e!=`object`||!e?null:Wn(e,t)}function qn(...e){for(let t of e)if(t!=null)return t;return null}function Jn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Un(r,`library_file_id`)!=null&&(n??=r,Un(r,`path`)===t))return r;return n}function Yn(){return`html`}function Xn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Zn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Qn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Zn(r,e))return!1}return!0}var $n,er,tr,nr=e((()=>{se(),M(),a(),Fe(),ce(),gt(),It(),$n=`app_block`,er=`client_defined_widget`,tr=le(e=>w(()=>Bn(v(e).flatMap(e=>e.messages)),{equals:Qn}))}));function rr({appBlockId:e,conversation:t}){return t==null?null:tr(t).get(e)??null}function ir(e){return e?.serverId$()??void 0}function ar({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Te(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function or({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Ce({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:C(e)?`missing`:`failed`})}),()=>{a.abort()}}function sr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var lr=e((()=>{T(),G(),nr()})),ur=t({AppBlock:()=>pr,AppBlockPreviewLoadingState:()=>Mr,AppBlockSandboxPreview:()=>kr});function dr(e){let t=e.search(qr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function fr(e){let t=dr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Yr)!=null}function pr(e){"use forget";let t=(0,Z.c)(116),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:s,currentContentFileId:l,displayMode:u,id:f,captureConsoleMessages:p,clientThreadId:m,iconSvg:g,isStreaming:_,isTurnStreaming:v,libraryFileId:y,libraryFileVersionNumber:b,messageId:x,onConsoleMessagesChange:S,onReadyChange:te,progressiveStreaming:C,ref:w,refIndex:T,styleMode:E,title:re,variant:D,widgetRefSeenAtMs:O}=e,k=s===void 0||s,ie=p!==void 0&&p,A=_!==void 0&&_,j=v!==void 0&&v,M=C!==void 0&&C,ae=D===void 0?`inline`:D,N=ee(),P;t[0]===N?P=t[1]:(P=()=>N!=null&&ke(N),t[0]=N,t[1]=P);let oe=h(P),F;t[2]!==m||t[3]!==N?(F=m==null?N:c(m),t[2]=m,t[3]=N,t[4]=F):F=t[4];let se=F,ce=x!=null&&T!=null?ht({messageId:x,refIndex:T}):void 0,I=r??ce??ht({messageId:x??f,refIndex:T??0}),L=h(()=>Ne({conversation:N??null,instanceId:I,messageId:x,refIndex:T}))??u,le=h(()=>a!=null||L!=null?null:rr({appBlockId:I,conversation:N??null})),R=a??le,z;t[5]===N?z=t[6]:(z=()=>ir(N??null),t[5]=N,t[6]=z);let ue=h(z),de=d(N?.id),B=ue??de,fe;t[7]!==l||t[8]!==y||t[9]!==b||t[10]!==B||t[11]!==R?(fe=ar({currentContentFileId:l,libraryFileId:y,libraryFileVersionNumber:b,serverThreadId:B,source:R}),t[7]=l,t[8]=y,t[9]=b,t[10]=B,t[11]=R,t[12]=fe):fe=t[12];let V=fe,[H,U]=(0,Q.useState)(null),[pe,me]=(0,Q.useState)(0),W;t[13]!==pe||t[14]!==V.libraryContentKey?(W=[V.libraryContentKey,pe],t[13]=pe,t[14]=V.libraryContentKey,t[15]=W):W=t[15];let he=W.join(`\0`),ge,_e;t[16]!==i||t[17]!==he||t[18]!==V.contentFileId||t[19]!==V.libraryFileId||t[20]!==L||t[21]!==B?(ge=()=>{if(!(i!=null||L===`collapsed`))return or({contentFileId:V.contentFileId,libraryContentKey:he,libraryFileId:V.libraryFileId,onContentStateChange:U,serverThreadId:B})},_e=[i,V.contentFileId,V.libraryFileId,he,L,B],t[16]=i,t[17]=he,t[18]=V.contentFileId,t[19]=V.libraryFileId,t[20]=L,t[21]=B,t[22]=ge,t[23]=_e):(ge=t[22],_e=t[23]),(0,Q.useEffect)(ge,_e);let G=sr({appBlockId:I,contentFileId:V.contentFileId,currentContentFileId:l,libraryContent:H,libraryContentKey:he,libraryFileId:y,libraryFileVersionNumber:b,source:R}),ye=H?.key===he?H:null,be;t[24]!==G?.libraryFileId||t[25]!==y?(be=()=>Se(G?.libraryFileId??y),t[24]=G?.libraryFileId,t[25]=y,t[26]=be):be=t[26];let xe=h(be),we=G?.libraryFileVersionNumber??b,Te=xe!=null&&(we==null||xe.versionNumber>=we)?xe.code:void 0,Ee=Te??i??G?.content??o??null,De=G?.iconSvg??g??null,K=G?.libraryFileId??y,Oe=K==null&&i==null&&Te==null&&l==null&&R?.currentContentFileId==null&&R?.latestPatchMessageId==null,Ae;t[27]!==Oe||t[28]!==o||t[29]!==x||t[30]!==Ee||t[31]!==T||t[32]!==R?(Ae=Oe?R==null?x!=null&&T!=null&&o!=null&&Ee===o?{messageId:x,refIndex:T}:null:R.messageId.length>0&&R.content!=null&&Ee===R.content?{messageId:R.messageId,refIndex:R.refIndex}:null:null,t[27]=Oe,t[28]=o,t[29]=x,t[30]=Ee,t[31]=T,t[32]=R,t[33]=Ae):Ae=t[33];let je=Ae,Me=ae===`artifact`,q=G?.styleMode??E??(Me&&M?`open`:void 0),Pe;t[34]!==K||t[35]!==q?(Pe=Ft({explicitStyleMode:q,libraryFileId:K}),t[34]=K,t[35]=q,t[36]=Pe):Pe=t[36];let Fe=Pe,J=G?.title??re,Le;t[37]===N?Le=t[38]:(Le=()=>N!=null&&ne(N)?`work`:`chat`,t[37]=N,t[38]=Le);let Re=h(Le),ze;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(ze=pt(),t[39]=ze):ze=t[39];let Be=ze,Ve=M,He=Me&&Fe===`open`,Ue=L===`collapsed`||L==null&&k&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==x,We=o!=null||l!=null,Ge;t[40]!==m||t[41]!==o||t[42]!==N?.id||t[43]!==l||t[44]!==I||t[45]!==b||t[46]!==x||t[47]!==K||t[48]!==Fe||t[49]!==J||t[50]!==T||t[51]!==B||t[52]!==R?.messageId?(Ge=async e=>{let t=o;if(t==null&&l!=null)try{t=await Ce({abortSignal:new AbortController().signal,fileId:l,serverThreadId:B})}catch{return}t!=null&&Ie({appBlockId:I,conversationId:N?.id??m??null,isOriginalVersion:!0,versionNumber:b??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:K,messageId:R?.messageId??x,refIndex:T},styleMode:Fe,title:J})},t[40]=m,t[41]=o,t[42]=N?.id,t[43]=l,t[44]=I,t[45]=b,t[46]=x,t[47]=K,t[48]=Fe,t[49]=J,t[50]=T,t[51]=B,t[52]=R?.messageId,t[53]=Ge):Ge=t[53],N?.id,R?.messageId;let Ke=Ge;if(A&&!Ve){let e;return t[54]===J?e=t[55]:(e=(0,$.jsx)(Nn,{title:J}),t[54]=J,t[55]=e),e}let qe=oe&&o!=null;if(ye?.status===`missing`&&!qe)return null;if(Ue){let e=We?Ke:void 0,n;return t[56]!==J||t[57]!==e?(n=(0,$.jsx)(Dr,{onView:e,title:J}),t[56]=J,t[57]=e,t[58]=n):n=t[58],n}let Je=Ee??(Ve&&A?``:null);if(Je==null){if(G?.latestPatchMessageId!=null){let e=N?.id??m,n=ye?.status===`failed`,r;t[59]===me?r=t[60]:(r=()=>me(mr),t[59]=me,t[60]=r);let i;return t[61]!==I||t[62]!==Me||t[63]!==De||t[64]!==J||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(vr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:De,onRetry:r,showHeader:Me,title:J}),t[61]=I,t[62]=Me,t[63]=De,t[64]=J,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===J?e=t[70]:(e=(0,$.jsx)(Nn,{title:J}),t[69]=J,t[70]=e),e}let Ye;t[71]!==m||t[72]!==Re||t[73]!==A||t[74]!==j||t[75]!==x||t[76]!==J||t[77]!==T?(Ye=!A&&!j&&m!=null&&x!=null&&T!=null&&dt()?{reference:{clientThreadId:m,messageId:x,referenceIndex:T},target:{kind:`app_block`,metadata:{...J==null?{}:{title:J},tab:Re}}}:void 0,t[71]=m,t[72]=Re,t[73]=A,t[74]=j,t[75]=x,t[76]=J,t[77]=T,t[78]=Ye):Ye=t[78];let Xe=Ye,Ze=N?.id??m,Qe=R?.messageId??x,Y;t[79]!==I||t[80]!==K||t[81]!==T||t[82]!==Qe?(Y={appBlockId:I,libraryFileId:K,messageId:Qe,refIndex:T},t[79]=I,t[80]=K,t[81]=T,t[82]=Qe,t[83]=Y):Y=t[83];let $e=He&&Be&&!A,X=N?.id??m,et;t[84]===je?et=t[85]:(et=je==null?void 0:{contentReferenceIndex:je.refIndex,messageId:je.messageId,widgetName:ve.AppBlock},t[84]=je,t[85]=et);let tt;t[86]!==n||t[87]!==ie||t[88]!==I||t[89]!==Xe||t[90]!==f||t[91]!==A||t[92]!==S||t[93]!==te||t[94]!==De||t[95]!==Fe||t[96]!==J||t[97]!==w||t[98]!==Je||t[99]!==se||t[100]!==Ve||t[101]!==He||t[102]!==$e||t[103]!==X||t[104]!==et||t[105]!==ae||t[106]!==O?(tt=(0,$.jsx)(hr,{additionalResourceDomains:n,appBlockId:I,canOpen:$e,captureConsoleMessages:ie,clientThreadId:X,code:Je,feedback:Xe,iconSvg:De,id:f,isStreaming:A,onConsoleMessagesChange:S,onReadyChange:te,progressiveStreaming:Ve,ref:w,showArtifactCard:He,shareConversation:se,shareTarget:et,styleMode:Fe,title:J,variant:ae,widgetRefSeenAtMs:O}),t[86]=n,t[87]=ie,t[88]=I,t[89]=Xe,t[90]=f,t[91]=A,t[92]=S,t[93]=te,t[94]=De,t[95]=Fe,t[96]=J,t[97]=w,t[98]=Je,t[99]=se,t[100]=Ve,t[101]=He,t[102]=$e,t[103]=X,t[104]=et,t[105]=ae,t[106]=O,t[107]=tt):tt=t[107];let nt;return t[108]!==n||t[109]!==Fe||t[110]!==J||t[111]!==Je||t[112]!==Ze||t[113]!==Y||t[114]!==tt?(nt=(0,$.jsx)(xn,{additionalResourceDomains:n,code:Je,conversationId:Ze,styleMode:Fe,source:Y,title:J,children:tt}),t[108]=n,t[109]=Fe,t[110]=J,t[111]=Je,t[112]=Ze,t[113]=Y,t[114]=tt,t[115]=nt):nt=t[115],nt}function mr(e){return e+1}function hr(e){"use forget";let t=(0,Z.c)(67),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:v,styleMode:b,title:x,variant:ee,widgetRefSeenAtMs:S}=e,{isExpanded:te,isViewingHistoricalVersion:ne,openExpandedView:C,setSharedPreview:w,sharedPreview:T,triggerRef:E}=hn(),re=(0,Q.useContext)(De),D;t[0]===n?D=t[1]:(D=n??[],t[0]=n,t[1]=D);let O;t[2]!==s||t[3]!==u||t[4]!==b||t[5]!==D?(O=[u,b,s,...D],t[2]=s,t[3]=u,t[4]=b,t[5]=D,t[6]=O):O=t[6];let k=O.join(`\0`),[ie,A]=(0,Q.useState)(null),j=!d&&ie===k,M;t[7]===C?M=t[8]:(M=()=>{me(),C()},t[7]=C,t[8]=M);let ae=M,N;t[9]!==p||t[10]!==k?(N=(e,t)=>{A(e?k:null),p?.(e,t)},t[9]=p,t[10]=k,t[11]=N):N=t[11];let oe=N,F;t[12]!==n||t[13]!==r||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==oe||t[18]!==u||t[19]!==d||t[20]!==f||t[21]!==m||t[22]!==h||t[23]!==b||t[24]!==ee||t[25]!==S?(F=(0,$.jsx)(kr,{appBlockId:r,additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:oe,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:b,variant:ee,widgetRefSeenAtMs:S}),t[12]=n,t[13]=r,t[14]=a,t[15]=o,t[16]=s,t[17]=oe,t[18]=u,t[19]=d,t[20]=f,t[21]=m,t[22]=h,t[23]=b,t[24]=ee,t[25]=S,t[26]=F):F=t[26];let se;t[27]!==re||t[28]!==F?(se={element:F,sandboxPolicy:re},t[27]=re,t[28]=F,t[29]=se):se=t[29];let ce=se,I;t[30]===ce?I=t[31]:(I=()=>ce,t[30]=ce,t[31]=I);let L=y(I),le;t[32]!==r||t[33]!==o||t[34]!==L||t[35]!==w?(le=e=>{if(e==null)return;let{preview:t,sourceToken:n}=xe({appBlockId:r,content:L(),conversationId:o??null,inlineContainer:e});return w(t),()=>{let e=W();ye(t,n,e?.sharedPreview===t)}},t[32]=r,t[33]=o,t[34]=L,t[35]=w,t[36]=le):le=t[36];let R=le,z,ue;t[37]!==ce||t[38]!==T?(ue=()=>{T!=null&&be(T,ce)},z=[ce,T],t[37]=ce,t[38]=T,t[39]=z,t[40]=ue):(z=t[39],ue=t[40]),P(ue,z);let de=ne?ae:void 0,B;t[41]!==l||t[42]!==de||t[43]!==x||t[44]!==E?(B=(0,$.jsx)(xr,{iconSvg:l,onOpen:de,openButtonRef:E,title:x}),t[41]=l,t[42]=de,t[43]=x,t[44]=E,t[45]=B):B=t[45];let fe=te?B:null,V;t[46]===R?V=t[47]:(V=(0,$.jsx)(`div`,{ref:R,className:`w-full`}),t[46]=R,t[47]=V);let H;t[48]!==i||t[49]!==c||t[50]!==ae||t[51]!==l||t[52]!==j||t[53]!==d||t[54]!==g||t[55]!==_||t[56]!==v||t[57]!==V||t[58]!==x||t[59]!==E?(H=(0,$.jsx)(_r,{canOpen:i,expandButtonRef:E,feedback:c,iconSvg:l,isShareReady:j,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:v,title:x,onOpen:ae,children:V}),t[48]=i,t[49]=c,t[50]=ae,t[51]=l,t[52]=j,t[53]=d,t[54]=g,t[55]=_,t[56]=v,t[57]=V,t[58]=x,t[59]=E,t[60]=H):H=t[60];let U;t[61]!==te||t[62]!==H?(U=(0,$.jsx)(`div`,{hidden:te,children:H}),t[61]=te,t[62]=H,t[63]=U):U=t[63];let pe;return t[64]!==fe||t[65]!==U?(pe=(0,$.jsxs)($.Fragment,{children:[fe,U]}),t[64]=fe,t[65]=U,t[66]=pe):pe=t[66],pe}function gr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=_(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=_(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function _r(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=ue(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(v=f?(0,$.jsxs)(`div`,{className:_(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(gr,{action:(0,$.jsx)(Xr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(N,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(Cr,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Zr,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(yr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function vr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=h(W),u=ue(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(he(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(xr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(gr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(Cr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Pr},t[10]=m):m=t[10];let g;t[11]!==i||t[12]!==o?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(Nr,{onRetry:o}):(0,$.jsx)(Mr,{})}),t[11]=i,t[12]=o,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function yr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(h(br))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(nt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function br(){return Qe()}function xr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=ue(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=gr,l=r==null?void 0:(0,$.jsx)(oe,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Sr,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Sr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(Cr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function Cr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=wr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Be,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i),children:(0,$.jsx)(Pe,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function wr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Hr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Ur)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Gr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Tr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Tr(e){let t=e.replace(Wr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Wr)){let e=t[1],n=t[2];if(!Kr.has(e)||!Er(e,n))return!1}return!0}function Er(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Dr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=ue(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Or(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=ue(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(oe,{ref:i,type:`button`,icon:He,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(S,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function kr(e){"use forget";let t=(0,Z.c)(145),{appBlockId:n,additionalResourceDomains:r,clientThreadId:i,code:a,id:o,captureConsoleMessages:s,isStreaming:c,onConsoleMessagesChange:l,onReadyChange:d,presentationSurface:f,progressiveStreaming:m,ref:g,styleMode:v,surface:b,variant:x,widgetRefSeenAtMs:ee}=e,S=c!==void 0&&c,te=m!==void 0&&m,ne=v===void 0?`default`:v,C=b===void 0?`inline`:b,w=x===void 0?`inline`:x,T=ue(),E=(0,Q.useRef)(null),re=(0,Q.useRef)(!1),D=(0,Q.useRef)(!1),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),ie=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(null),M=(0,Q.useRef)(null),N=(0,Q.useRef)(null),P=(0,Q.useRef)(0),oe=(0,Q.useRef)(null),F=(0,Q.useRef)(null),se;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(se=[],t[0]=se):se=t[0];let ce=(0,Q.useRef)(se),I=ae(),L=h(u),{allowDependencyNetworkRequestsWithoutCanvasAccess:le}=(0,Q.useContext)(De),R=Ke()||le,z=Je(i)&&!le,de=I?`dark`:`light`,fe=T.locale,V;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(V={status:`streaming`},t[1]=V):V=t[1];let[H,U]=(0,Q.useState)(V),pe=H.status===`finalized`&&H.html!==a,me=te&&!S&&(w===`artifact`||H.status===`failed`),W=te&&C===`inline`&&H.status!==`static`&&!me&&!pe,he=W&&S&&w===`artifact`&&!fr(a),ge=he?0:Fr,_e=R?`execution-enabled`:`execution-disabled`,G=z?`network-enabled`:`network-disabled`,ve=W?`progressive-app-block-stream`:a,ye;t[2]===r?ye=t[3]:(ye=r??[],t[2]=r,t[3]=ye);let be;t[4]!==L||t[5]!==fe||t[6]!==ne||t[7]!==C||t[8]!==ve||t[9]!==ye||t[10]!==_e||t[11]!==G||t[12]!==de?(be=[de,L,C,ne,fe,_e,G,ve,...ye],t[4]=L,t[5]=fe,t[6]=ne,t[7]=C,t[8]=ve,t[9]=ye,t[10]=_e,t[11]=G,t[12]=de,t[13]=be):be=t[13];let xe=be.join(`\0`),Se;t[14]===r?Se=t[15]:(Se=rn(r),t[14]=r,t[15]=Se);let Ce=Se,we=z?`deps_only`:`disabled`,Te=C===`inline`?w:void 0,Ee=W?`progressive`:`static`,K;t[16]!==C||t[17]!==we||t[18]!==Te||t[19]!==Ee?(K={networkPolicy:we,surface:C,variant:Te,renderMode:Ee},t[16]=C,t[17]=we,t[18]=Te,t[19]=Ee,t[20]=K):K=t[20];let Oe=K,[ke,Ae]=(0,Q.useState)(0),[je,Me]=(0,Q.useState)(null),Ne=je?.signature===xe?je.status:null,q=Ne===`ready`,Pe=q||Ne===`failed_after_ready`,Fe=W&&Ne===`failed`,J=!S&&!W&&Ne===`failed`,Ie=f??C,Le=W&&Ie===`inline`&&S&&!J,Re;t[21]!==a||t[22]!==Oe||t[23]!==ee?(Re={content:a,metricTags:Oe,widgetRefSeenAtMs:ee},t[21]=a,t[22]=Oe,t[23]=ee,t[24]=Re):Re=t[24];let{cancelFirstPaintFrame:ze,startRunMetrics:Be}=Ct(Re),Ve,He;t[25]!==q||t[26]!==d?(Ve=()=>{d?.(q)},He=[q,d],t[25]=q,t[26]=d,t[27]=Ve,t[28]=He):(Ve=t[27],He=t[28]),(0,Q.useEffect)(Ve,He);let Ue,qe;t[29]!==q||t[30]!==f?(Ue=()=>{!q||f==null||E.current?.updateAppBlockSurface?.(f)},qe=[q,f],t[29]=q,t[30]=f,t[31]=Ue,t[32]=qe):(Ue=t[31],qe=t[32]),(0,Q.useEffect)(Ue,qe);let Xe,Ze;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Xe=()=>({clearCapturedConsoleMessages:()=>{ce.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),Ze=[],t[33]=Xe,t[34]=Ze):(Xe=t[33],Ze=t[34]),(0,Q.useImperativeHandle)(g,Xe,Ze);let Qe;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(Qe=()=>{oe.current!=null&&(window.clearTimeout(oe.current),oe.current=null)},t[35]=Qe):Qe=t[35];let Y=y(Qe),$e;t[36]===Symbol.for(`react.memo_cache_sentinel`)?($e=()=>{F.current!=null&&(window.clearTimeout(F.current),F.current=null)},t[36]=$e):$e=t[36];let X=y($e),et;t[37]!==q||t[38]!==W?(et=()=>{if(!W||!q||j.current==null)return;let e=A.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||D.current)return;let n=P.current;A.current=null,k.current=vt(),ie.current=e.html,e.isFinal&&(D.current=!0);let r=()=>P.current!==n||j.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=N.current,a=i==null?r():i.then(r);N.current=a,a.then(()=>{N.current===a&&(N.current=null);let t=j.current;P.current!==n||t==null||(fr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),U({status:`finalized`,html:e.html})))},e=>{N.current===a&&(N.current=null),P.current===n&&(e instanceof DOMException&&e.name===`AbortError`||M.current?.(`stream_update`,bt(e)))})},t[37]=q,t[38]=W,t[39]=et):et=t[39];let tt=y(et),nt;t[40]!==L||t[41]!==s||t[42]!==Y||t[43]!==X||t[44]!==a||t[45]!==R||t[46]!==z||t[47]!==pe||t[48]!==S||t[49]!==fe||t[50]!==l||t[51]!==d||t[52]!==f||t[53]!==xe||t[54]!==H.status||t[55]!==me||t[56]!==W||t[57]!==Be||t[58]!==ne||t[59]!==C||t[60]!==de?(nt=()=>{if(!R)return;if(H.status===`failed`){if(S)return;U({status:`static`}),Ae(jr);return}(pe||me&&H.status!==`static`)&&U({status:`static`});let e=W&&E.current?.updateAppBlockStream!=null;if(W&&!e){S||U({status:`static`});return}re.current=!0,D.current=!1,O.current=null,k.current=null,ie.current=null,A.current=null,j.current=null,M.current=null,N.current=null,X(),P.current+=1;let t=P.current;Y(),Me(null);let{expectReadySignal:n,html:r}=an(a,de,fe,L,C,{loadTailwind:z,progressiveStreaming:e,syncPresentationSurface:f!=null,styleMode:ne}),i=!1,o=!1,c=!1,u=!1,m=!1,h=()=>P.current===t,g=Be(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(j.current=g);let _=e=>{!s||l==null||!h()||(ce.current=e,!u&&(u=!0,p.postTask(()=>{u=!1,h()&&l(ce.current)},{priority:`background`})))},v=e=>{!h()||i||c||(i=!0,Y(),g.markReady(e),!m&&(m=!0,p.postTask(()=>{m=!1,!(!h()||c)&&(o=!0,Me({signature:xe,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!h()||c||(c=!0,Y(),X(),A.current=null,j.current=null,e&&U({status:`failed`}),Me({signature:xe,status:o?`failed_after_ready`:`failed`}),g.reportFailure(t,n),p.postTask(()=>{h()&&(e?d?.(!1):d?.(!1,`failure`))},{priority:`background`}))};M.current=y,ce.current=[],_([]),oe.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Lr),(async()=>{let t=E.current?.evalAsync({code:r,expectReadySignal:n,language:`html`,shouldPreservePreviewOnFatalError:()=>h()&&e&&o});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){h()&&!i&&y(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...ce.current,e.value]),e.value.type===We.ENVIRONMENT_STATUS&&e.value.status===Ge.RUNNING_CODE&&v(`running_code`),e.value.type===We.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await p.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,bt(e)))})},t[40]=L,t[41]=s,t[42]=Y,t[43]=X,t[44]=a,t[45]=R,t[46]=z,t[47]=pe,t[48]=S,t[49]=fe,t[50]=l,t[51]=d,t[52]=f,t[53]=xe,t[54]=H.status,t[55]=me,t[56]=W,t[57]=Be,t[58]=ne,t[59]=C,t[60]=de,t[61]=nt):nt=t[61];let rt=y(nt),it;t[62]!==Y||t[63]!==X?(it=()=>{P.current+=1,re.current=!1,D.current=!1,O.current=null,ie.current=null,A.current=null,j.current=null,M.current=null,N.current=null,Y(),X(),Me(null),Ae(Ar)},t[62]=Y,t[63]=X,t[64]=it):it=t[64];let at=y(it),ot;t[65]===Ie?ot=t[66]:(ot=Ie===`inline`?{margin:-4,width:`calc(100% + ${Ir*2}px)`}:void 0,t[65]=Ie,t[66]=ot);let st=ot,ct;t[67]!==ze||t[68]!==Y||t[69]!==X||t[70]!==rt?(ct=()=>{rt();let e=E.current;return()=>{P.current+=1,j.current=null,M.current=null,N.current=null,Y(),X(),ze(),e?.stop()}},t[67]=ze,t[68]=Y,t[69]=X,t[70]=rt,t[71]=ct):ct=t[71];let lt;t[72]!==ze||t[73]!==Y||t[74]!==X||t[75]!==R||t[76]!==xe||t[77]!==rt||t[78]!==ke?(lt=[ze,Y,X,R,xe,rt,ke],t[72]=ze,t[73]=Y,t[74]=X,t[75]=R,t[76]=xe,t[77]=rt,t[78]=ke,t[79]=lt):lt=t[79],(0,Q.useEffect)(ct,lt);let ut,dt;t[80]!==S||t[81]!==rt||t[82]!==W?(ut=()=>{!W||S||re.current||E.current?.updateAppBlockStream!=null||rt()},dt=[S,rt,W],t[80]=S,t[81]=rt,t[82]=W,t[83]=ut,t[84]=dt):(ut=t[83],dt=t[84]),(0,Q.useEffect)(ut,dt);let ft,pt;if(t[85]!==X||t[86]!==a||t[87]!==tt||t[88]!==J||t[89]!==q||t[90]!==S||t[91]!==W||t[92]!==w?(ft=()=>{if(!W||!q||J||D.current||E.current?.updateAppBlockStream==null)return;let e=S?dr(a):a;if(S&&(A.current?.html??ie.current)===e)return;if(A.current={html:e,isFinal:!S},!S){X(),tt();return}let t=k.current;if(t==null&&w===`artifact`&&(O.current??=vt(),t=O.current),t==null){tt();return}let n=w===`artifact`?zr:Rr,r=vt()-t;if(r>=n){tt();return}return F.current=window.setTimeout(()=>{F.current=null,tt()},n-r),X},pt=[X,a,tt,J,q,S,W,w],t[85]=X,t[86]=a,t[87]=tt,t[88]=J,t[89]=q,t[90]=S,t[91]=W,t[92]=w,t[93]=ft,t[94]=pt):(ft=t[93],pt=t[94]),(0,Q.useEffect)(ft,pt),!R){let e;return t[95]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[95]=e):e=t[95],e}let mt=Ie===`inline`&&(he?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ht=Ie===`stage`&&`h-full min-h-0`,gt;t[96]!==mt||t[97]!==ht?(gt=_(`flex w-full`,mt,ht),t[96]=mt,t[97]=ht,t[98]=gt):gt=t[98];let _t=Ie===`inline`?`flex-none`:`w-full`,yt=Le&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,xt;t[99]!==_t||t[100]!==yt?(xt=_(`relative min-w-0`,_t,yt),t[99]=_t,t[100]=yt,t[101]=xt):xt=t[101];let St=`${ke}:${z?`network-enabled`:`network-disabled`}`,wt;t[102]!==n||t[103]!==i||t[104]!==o?(wt=JSON.stringify([i??null,n??o]),t[102]=n,t[103]=i,t[104]=o,t[105]=wt):wt=t[105];let Tt;t[106]===T?Tt=t[107]:(Tt=T.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[106]=T,t[107]=Tt);let Et=z?`deps-only`:`none`,Dt=z?Br:Vr,Ot=Pe?0:-1,kt=Ie===`inline`&&ne===`open`,At=Ie!==`stage`,jt=W?ge:Pr,Mt;t[108]!==o||t[109]!==rt||t[110]!==Ce||t[111]!==St||t[112]!==wt||t[113]!==Tt||t[114]!==Et||t[115]!==Dt||t[116]!==Ot||t[117]!==kt||t[118]!==At||t[119]!==jt?(Mt=(0,$.jsx)(Ye,{id:o,sandboxOriginId:wt,title:Tt,visuallyHidden:!1,networkPolicy:Et,additionalResourceDomains:Ce,sandboxPermissions:Dt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Ot,onRetryCodeRun:rt,transparentBackground:kt,useIntrinsicHeight:At,intrinsicHeightFallback:jt,ref:E},St),t[108]=o,t[109]=rt,t[110]=Ce,t[111]=St,t[112]=wt,t[113]=Tt,t[114]=Et,t[115]=Dt,t[116]=Ot,t[117]=kt,t[118]=At,t[119]=jt,t[120]=Mt):Mt=t[120];let Nt;t[121]===Le?Nt=t[122]:(Nt=Le?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[121]=Le,t[122]=Nt);let Pt;t[123]!==Fe||t[124]!==J||t[125]!==Pe||t[126]!==W?(Pt=!Pe&&!J&&(!W||Fe)?(0,$.jsx)(Mr,{}):null,t[123]=Fe,t[124]=J,t[125]=Pe,t[126]=W,t[127]=Pt):Pt=t[127];let Ft;t[128]!==J||t[129]!==at?(Ft=J?(0,$.jsx)(Nr,{onRetry:at}):null,t[128]=J,t[129]=at,t[130]=Ft):Ft=t[130];let It;t[131]!==st||t[132]!==Le||t[133]!==xt||t[134]!==Mt||t[135]!==Nt||t[136]!==Pt||t[137]!==Ft?(It=(0,$.jsxs)(`div`,{"aria-busy":Le,className:xt,style:st,children:[Mt,Nt,Pt,Ft]}),t[131]=st,t[132]=Le,t[133]=xt,t[134]=Mt,t[135]=Nt,t[136]=Pt,t[137]=Ft,t[138]=It):It=t[138];let Lt;t[139]===Le?Lt=t[140]:(Lt=Le?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[139]=Le,t[140]=Lt);let Rt;return t[141]!==gt||t[142]!==It||t[143]!==Lt?(Rt=(0,$.jsxs)(`div`,{className:gt,children:[It,Lt]}),t[141]=gt,t[142]=It,t[143]=Lt,t[144]=Rt):Rt=t[144],Rt}function Ar(e){return e+1}function jr(e){return e+1}function Mr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(N,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Nr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(B,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(oe,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr=e((()=>{Z=V(),k(),Ze(),Ee(),tt(),te(),b(),Xe(),I(),ze(),Ve(),Re(),Me(),qe(),M(),Ae(),rt(),we(),m(),f(),s(),Oe(),o(),x(),A(),l(),Y(),it(),G(),Ue(),r(),Q=n(H()),U(),mn(),Nt(),mt(),Dn(),ge(),jn(),vn(),zn(),gt(),_e(),K(),It(),lr(),$=R(),Pr=432,Fr=120,Ir=4,Lr=15e3,Rr=100,zr=350,Br=`allow-scripts allow-same-origin allow-forms`,Vr=`allow-scripts allow-same-origin`,Hr=12e3,Ur=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Wr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Gr=new Set([`svg`,`path`]),Kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),qr=/<script(?:\s|>)/i,Jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Yr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Xr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Or,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(S,{label:n,children:(0,$.jsx)(oe,{type:`button`,icon:Le,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(at,{category:ve.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Zr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ot,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(at,{category:ve.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{ft as S,Nt as _,Qr as a,mt as b,tr as c,Cn as d,Dn as f,vt as g,Ft as h,ur as i,nr as l,Pt as m,Mr as n,rr as o,It as p,kr as r,lr as s,pr as t,Sn as u,ht as v,pt as x,gt as y};
//# sourceMappingURL=e3b746a6-hu15u3uqh6ngxrf1.js.map