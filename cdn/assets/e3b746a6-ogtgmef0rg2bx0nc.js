const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-k6a5otqoa4erlxjw.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-mt10h505tja3mgsz.js","assets/2340486e-m6nxarr6ck977yif.js","assets/conversation-small-n11xtqlp8fqz6rnt.js","assets/30901919-gomybc5q3ytjqdoq.js","assets/c470f5ab-k70j54jnagrqzyrq.js","assets/0e5afe53-op57k20jevk1ue84.js","assets/conversation-small-g1d4ccik.css","assets/8b34dbc2-fy68nrwgrft623sl.js","assets/82782bc9-dfu1z3ndpg5s3p2l.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$Y as r,Bs as i,CZ as a,DB as o,Ea as s,F4 as c,Fu as l,Hs as u,JY as d,MD as f,NG as p,Nu as m,OB as h,P4 as g,PG as _,Pa as v,QE as y,SZ as b,Tg as x,U1 as S,VD as C,WE as w,XE as ee,_4 as T,_M as te,a4 as ne,aF as re,ax as E,cH as ie,d4 as D,dD as O,eD as ae,fD as k,iF as oe,j4 as A,lF as se,lH as j,oF as ce,oZ as le,ox as ue,sZ as de,u4 as M,wg as fe,y4 as N,z1 as P}from"./4813494d-mt10h505tja3mgsz.js";import{Cn as pe,Dn as F,En as I,Sn as me,Tn as L,_n as R,tn as z,wn as B,xn as V}from"./2340486e-m6nxarr6ck977yif.js";import{$4 as he,Dhn as ge,Ivt as _e,Jl as H,Lb as ve,Lvt as ye,Q4 as be,Rb as xe,Rvt as Se,Un as Ce,Wn as U,a3 as we,afn as Te,bmn as Ee,d3 as De,e3 as Oe,f3 as ke,gE as Ae,ifn as je,khn as Me,n3 as W,o3 as Ne,oE as Pe,pE as Fe,ql as Ie,s3 as G,t3 as Le,u3 as Re,ymn as K}from"./conversation-small-n11xtqlp8fqz6rnt.js";import{KE as q,Ux as ze,Wx as J,ew as Be,qE as Ve,tw as He}from"./30901919-gomybc5q3ytjqdoq.js";import{i as Ue,n as We,t as Ge}from"./8d846022-habmttvqwy4a5siq.js";import{i as Ke,n as qe,r as Je}from"./91969468-h5w4fnbo5i9ezuip.js";import{n as Ye,t as Xe}from"./4d271a7b-il7w7bq6u3fj43pp.js";import{n as Ze,r as Qe}from"./58bafdef-laexeyzxet6jz9x3.js";import{a as $e,i as et}from"./e01e2324-pbe347ypypaev11w.js";import{i as Y,t as tt}from"./5dc32f04-b75slxtxxwzz4hg6.js";import{n as X,t as nt}from"./066a83b9-oujd4n7d3gyoc5u9.js";import{i as rt,n as it,r as at,t as ot}from"./9eb56efa-k6caq338rexynbsb.js";import{i as st,n as ct,r as lt,t as ut}from"./cc79834b-n7zd0f0tw7ub10bl.js";function dt(){return ne(`2779568043`)}function ft(){return ne(`3864712762`)}function pt(){return M(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var mt=e((()=>{D()}));function ht({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var gt=e((()=>{}));function _t({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function vt(){return typeof performance<`u`?performance.now():Date.now()}function yt(e){return new TextEncoder().encode(e).byteLength/1024}function bt(e){return e instanceof Error?e.name:`unknown`}function xt(e,t,n=1){c.count(A.APP_BLOCKS,e,_t(t),n)}function St(e,t,n){c.hist(A.APP_BLOCKS,e,_t(n),t)}function Ct({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,wt.useRef)(vt()),i=(0,wt.useRef)(null),a=(0,wt.useRef)(!1),o=(0,wt.useRef)(!1),s=re(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=re((n=e)=>{o.current||(o.current=!0,St(Dt,yt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:re((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=vt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),xt(At,t);let _=(e,n)=>{f||(f=!0,xt(kt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=vt();St(Ot,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,St(Tt,s-r.current,t),n!=null&&St(Mt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=vt(),g=n,St(jt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),xt(Et,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{g(),oe(),wt=n(L()),Tt=`app_block.first_render_time_ms`,Et=`app_block.load.failure`,Dt=`app_block.payload_size_kb`,Ot=`app_block.ready_to_first_paint_ms`,kt=`app_block.render.outcome`,At=`app_block.render.start`,jt=`app_block.sandbox_eval_to_ready_ms`,Mt=`app_block.widget_ref_to_first_paint_ms`}));function Pt(e){return e==="default"||e===`open`?e:null}function Ft({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var It=e((()=>{})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Jt=e((()=>{}));function Yt(e){return String.raw(on||=qt([`<script>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(L()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{_(),F(),yn=p(()=>I(()=>import(`./7aa2b76f-k6a5otqoa4erlxjw.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function xn(e){"use forget";let t=(0,wn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,Tn.useId)()}`,u=(0,Tn.useRef)(null),[d,f]=(0,Tn.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=de(be),x;t[3]!==b||t[4]!==y?(x=W(b,y),t[3]=b,t[4]=y,t[5]=x):x=t[5];let S=x,C=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),w=S||C,ee;t[6]!==b||t[7]!==l||t[8]!==y?(ee=we(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=ee):ee=t[9];let T=ee,te;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(te=()=>{u.current?.focus()},t[10]=te):te=t[10];let ne=te,re=d?.supportsAtomicMove?d:void 0,E;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(E={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=E):E=t[15];let ie;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==re||t[20]!==E||t[21]!==c?(ie={additionalResourceDomains:n,code:i,focusOnClose:ne,sharedPreview:re,source:E,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=re,t[20]=E,t[21]=c,t[22]=ie):ie=t[22];let D=ie,O,ae;t[23]!==D||t[24]!==S||t[25]!==y?(O=()=>{S&&Ne(y,D)},ae=[D,S,y],t[23]=D,t[24]=S,t[25]=y,t[26]=O,t[27]=ae):(O=t[26],ae=t[27]),(0,Tn.useEffect)(O,ae);let k;t[28]!==D||t[29]!==T||t[30]!==y?(k=()=>{he(y,T,D)},t[28]=D,t[29]=T,t[30]=y,t[31]=k):k=t[31];let oe=k,A;t[32]!==w||t[33]!==C||t[34]!==oe||t[35]!==d?(A={isExpanded:w,isViewingHistoricalVersion:C,openExpandedView:oe,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=w,t[33]=C,t[34]=oe,t[35]=d,t[36]=A):A=t[36];let se=A,j;return t[37]!==r||t[38]!==se?(j=(0,En.jsx)(_n.Provider,{value:se,children:r}),t[37]=r,t[38]=se,t[39]=j):j=t[39],j}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=lt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Ie(i).height$()??0,t[0]=i,t[1]=l);let u=de(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,En.jsxs)(ut.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,En.jsx)(ut.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,En.jsxs)(En.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=st(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=z(),H(),ct(),le(),Tn=n(L()),vn(),Le(),bn(),En=B()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(R,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=z(),me(),An=B()}));function Mn(e,t){"use forget";let n=(0,Pn.c)(39),r=t===void 0||t,i=pe(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Rn.generatingApp,{title:e}):i.formatMessage(Rn.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Rn.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Rn.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Rn.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Rn.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Rn.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Rn.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Rn.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Rn.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Rn.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Rn.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Fn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Ln);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Fn.useEffect)(x,S),v[y]??v[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{title:n}=e,r=Mn(n),i;return t[0]===r?i=t[1]:(i=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(tt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Pn,Fn,In,Ln,Rn,zn,Bn=e((()=>{Pn=z(),Y(),a(),Fn=n(L()),me(),In=B(),Ln=2800,Rn=V({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),zn=e=>{"use forget";let t=(0,Pn.c)(11),{isVisible:n,title:r}=e,i=Mn(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=b(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=b(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,In.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,In.jsx)(`div`,{className:`pb-3`,children:(0,In.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Vn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Un({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===P.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=Hn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===er?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=te(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Zn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function Hn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==er||e.library_file_id==null?null:{appBlockId:ht({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Un({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==tr||e.category!==er||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Wn(r,`content`),a=Wn(r,`entrypoint`)??`index.html`,o=Yn(r,a),s=Kn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Wn(r,`app_block_id`)??ht({messageId:t,refIndex:n}),bundleVersion:Gn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Kn(o,`current_content_file_id`),entrypoint:a,iconSvg:Wn(r,`icon_svg`),language:Xn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Kn(o,`library_file_name`),libraryFileVersionNumber:Jn(qn(o,`library_file_version_number`)),mimeType:Kn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Pt(Wn(r,`style_mode`)),title:Wn(r,`display_name`)??Wn(r,`title`)}}function Wn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Gn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Kn(e,t){return typeof e!=`object`||!e?null:Wn(e,t)}function qn(e,t){return typeof e!=`object`||!e?null:Gn(e,t)}function Jn(...e){for(let t of e)if(t!=null)return t;return null}function Yn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Wn(r,`library_file_id`)!=null&&(n??=r,Wn(r,`path`)===t))return r;return n}function Xn(){return`html`}function Zn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Qn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function $n(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Qn(r,e))return!1}return!0}var er,tr,nr,rr=e((()=>{S(),y(),u(),Pe(),d(),gt(),It(),er=`app_block`,tr=`client_defined_widget`,nr=w(e=>r(()=>Vn(i(e).flatMap(e=>e.messages)),{equals:$n}))}));function ir({appBlockId:e,conversation:t}){return t==null?null:nr(t).get(e)??null}function ar(e){return e?.serverId$()??void 0}function or({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:ye(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function sr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return _e({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:l(e)?`missing`:`failed`})}),()=>{a.abort()}}function cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??lr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function lr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var ur=e((()=>{m(),Se(),rr()})),dr=t({AppBlock:()=>mr,AppBlockPreviewLoadingState:()=>Nr,AppBlockSandboxPreview:()=>Ar});function fr(e){let t=e.search(Jr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function pr(e){let t=fr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Yr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Xr)!=null}function mr(e){"use forget";let t=(0,Z.c)(117),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:s,currentContentFileId:c,displayMode:l,id:u,captureConsoleMessages:d,clientThreadId:f,iconSvg:p,isStreaming:m,isTurnStreaming:h,libraryFileId:g,libraryFileVersionNumber:_,messageId:y,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:S,ref:w,refIndex:T,styleMode:te,title:ne,variant:re,widgetName:E,widgetRefSeenAtMs:ie}=e,D=s===void 0||s,O=d!==void 0&&d,k=m!==void 0&&m,oe=h!==void 0&&h,A=S!==void 0&&S,se=re===void 0?`inline`:re,j=ae(),ce;t[0]===j?ce=t[1]:(ce=()=>j!=null&&Te(j),t[0]=j,t[1]=ce);let le=de(ce),ue;t[2]!==f||t[3]!==j?(ue=f==null?j:ee(f),t[2]=f,t[3]=j,t[4]=ue):ue=t[4];let M=ue,fe=y!=null&&T!=null?ht({messageId:y,refIndex:T}):void 0,N=r??fe??ht({messageId:y??u,refIndex:T??0}),P=de(()=>Fe({conversation:j??null,instanceId:N,messageId:y,refIndex:T}))??l,pe=de(()=>a!=null||P!=null?null:ir({appBlockId:N,conversation:j??null})),F=a??pe,I;t[5]===j?I=t[6]:(I=()=>ar(j??null),t[5]=j,t[6]=I);let me=de(I),L=C(j?.id),R=me??L,z;t[7]!==c||t[8]!==g||t[9]!==_||t[10]!==R||t[11]!==F?(z=or({currentContentFileId:c,libraryFileId:g,libraryFileVersionNumber:_,serverThreadId:R,source:F}),t[7]=c,t[8]=g,t[9]=_,t[10]=R,t[11]=F,t[12]=z):z=t[12];let B=z,[V,ge]=(0,Q.useState)(null),[H,ye]=(0,Q.useState)(0),be;t[13]!==H||t[14]!==B.libraryContentKey?(be=[B.libraryContentKey,H],t[13]=H,t[14]=B.libraryContentKey,t[15]=be):be=t[15];let xe=be.join(`\0`),Se,Ce;t[16]!==i||t[17]!==xe||t[18]!==B.contentFileId||t[19]!==B.libraryFileId||t[20]!==P||t[21]!==R?(Se=()=>{if(!(i!=null||P===`collapsed`))return sr({contentFileId:B.contentFileId,libraryContentKey:xe,libraryFileId:B.libraryFileId,onContentStateChange:ge,serverThreadId:R})},Ce=[i,B.contentFileId,B.libraryFileId,xe,P,R],t[16]=i,t[17]=xe,t[18]=B.contentFileId,t[19]=B.libraryFileId,t[20]=P,t[21]=R,t[22]=Se,t[23]=Ce):(Se=t[22],Ce=t[23]),(0,Q.useEffect)(Se,Ce);let U=cr({appBlockId:N,contentFileId:B.contentFileId,currentContentFileId:c,libraryContent:V,libraryContentKey:xe,libraryFileId:g,libraryFileVersionNumber:_,source:F}),we=V?.key===xe?V:null,Ee;t[24]!==U?.libraryFileId||t[25]!==g?(Ee=()=>Oe(U?.libraryFileId??g),t[24]=U?.libraryFileId,t[25]=g,t[26]=Ee):Ee=t[26];let De=de(Ee),ke=U?.libraryFileVersionNumber??_,Ae=De!=null&&(ke==null||De.versionNumber>=ke)?De.code:void 0,je=Ae??i??U?.content??o??null,Me=U?.iconSvg??p??null,W=U?.libraryFileId??g,Ne=W==null&&i==null&&Ae==null&&c==null&&F?.currentContentFileId==null&&F?.latestPatchMessageId==null,Pe;t[27]!==Ne||t[28]!==o||t[29]!==y||t[30]!==je||t[31]!==T||t[32]!==F?(Pe=Ne?F==null?y!=null&&T!=null&&o!=null&&je===o?{messageId:y,refIndex:T}:null:F.messageId.length>0&&F.content!=null&&je===F.content?{messageId:F.messageId,refIndex:F.refIndex}:null:null,t[27]=Ne,t[28]=o,t[29]=y,t[30]=je,t[31]=T,t[32]=F,t[33]=Pe):Pe=t[33];let Ie=Pe,G=se===`artifact`,Le=U?.styleMode??te??(G&&A?`open`:void 0),Re;t[34]!==W||t[35]!==Le?(Re=Ft({explicitStyleMode:Le,libraryFileId:W}),t[34]=W,t[35]=Le,t[36]=Re):Re=t[36];let K=Re,q=U?.title??ne,ze;t[37]===j?ze=t[38]:(ze=()=>j!=null&&v(j)?`work`:`chat`,t[37]=j,t[38]=ze);let J=de(ze),Be;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Be=pt(),t[39]=Be):Be=t[39];let Ve=Be,He=A,Ue=G&&K===`open`,We=P===`collapsed`||P==null&&D&&U?.latestPatchMessageId!=null&&U.latestPatchMessageId!==y,Ge=o!=null||c!=null,Ke;t[40]!==f||t[41]!==o||t[42]!==j?.id||t[43]!==c||t[44]!==N||t[45]!==_||t[46]!==y||t[47]!==W||t[48]!==K||t[49]!==q||t[50]!==T||t[51]!==R||t[52]!==F?.messageId?(Ke=async e=>{let t=o;if(t==null&&c!=null)try{t=await _e({abortSignal:new AbortController().signal,fileId:c,serverThreadId:R})}catch{return}t!=null&&he({appBlockId:N,conversationId:j?.id??f??null,isOriginalVersion:!0,versionNumber:_??void 0},`app-block:${N}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:N,libraryFileId:W,messageId:F?.messageId??y,refIndex:T},styleMode:K,title:q})},t[40]=f,t[41]=o,t[42]=j?.id,t[43]=c,t[44]=N,t[45]=_,t[46]=y,t[47]=W,t[48]=K,t[49]=q,t[50]=T,t[51]=R,t[52]=F?.messageId,t[53]=Ke):Ke=t[53],j?.id,F?.messageId;let qe=Ke;if(k&&!He){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(Nn,{title:q}),t[54]=q,t[55]=e),e}let Je=le&&o!=null;if(we?.status===`missing`&&!Je)return null;if(We){let e=Ge?qe:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Or,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ye=je??(He&&k?``:null);if(Ye==null){if(U?.latestPatchMessageId!=null){let e=j?.id??f,n=we?.status===`failed`,r;t[59]===ye?r=t[60]:(r=()=>ye(hr),t[59]=ye,t[60]=r);let i;return t[61]!==N||t[62]!==G||t[63]!==Me||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(yr,{appBlockId:N,conversationId:e,hasFailed:n,iconSvg:Me,onRetry:r,showHeader:G,title:q}),t[61]=N,t[62]=G,t[63]=Me,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(Nn,{title:q}),t[69]=q,t[70]=e),e}let Xe;t[71]!==f||t[72]!==J||t[73]!==k||t[74]!==oe||t[75]!==y||t[76]!==q||t[77]!==T?(Xe=!k&&!oe&&f!=null&&y!=null&&T!=null&&dt()?{reference:{clientThreadId:f,messageId:y,referenceIndex:T},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:J}}}:void 0,t[71]=f,t[72]=J,t[73]=k,t[74]=oe,t[75]=y,t[76]=q,t[77]=T,t[78]=Xe):Xe=t[78];let Ze=Xe,Qe=j?.id??f,$e=F?.messageId??y,et;t[79]!==N||t[80]!==W||t[81]!==T||t[82]!==$e?(et={appBlockId:N,libraryFileId:W,messageId:$e,refIndex:T},t[79]=N,t[80]=W,t[81]=T,t[82]=$e,t[83]=et):et=t[83];let Y=Ue&&Ve&&!k,tt=j?.id??f,X;t[84]!==Ie||t[85]!==E?(X=Ie==null?void 0:{contentReferenceIndex:Ie.refIndex,messageId:Ie.messageId,widgetName:E??ve.AppBlock,widgetType:ve.AppBlock},t[84]=Ie,t[85]=E,t[86]=X):X=t[86];let nt;t[87]!==n||t[88]!==O||t[89]!==N||t[90]!==Ze||t[91]!==u||t[92]!==k||t[93]!==b||t[94]!==x||t[95]!==Me||t[96]!==K||t[97]!==q||t[98]!==w||t[99]!==Ye||t[100]!==M||t[101]!==He||t[102]!==Ue||t[103]!==Y||t[104]!==tt||t[105]!==X||t[106]!==se||t[107]!==ie?(nt=(0,$.jsx)(gr,{additionalResourceDomains:n,appBlockId:N,canOpen:Y,captureConsoleMessages:O,clientThreadId:tt,code:Ye,feedback:Ze,iconSvg:Me,id:u,isStreaming:k,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:He,ref:w,showArtifactCard:Ue,shareConversation:M,shareTarget:X,styleMode:K,title:q,variant:se,widgetRefSeenAtMs:ie}),t[87]=n,t[88]=O,t[89]=N,t[90]=Ze,t[91]=u,t[92]=k,t[93]=b,t[94]=x,t[95]=Me,t[96]=K,t[97]=q,t[98]=w,t[99]=Ye,t[100]=M,t[101]=He,t[102]=Ue,t[103]=Y,t[104]=tt,t[105]=X,t[106]=se,t[107]=ie,t[108]=nt):nt=t[108];let rt;return t[109]!==n||t[110]!==K||t[111]!==q||t[112]!==Ye||t[113]!==Qe||t[114]!==et||t[115]!==nt?(rt=(0,$.jsx)(xn,{additionalResourceDomains:n,code:Ye,conversationId:Qe,styleMode:K,source:et,title:q,children:nt}),t[109]=n,t[110]=K,t[111]=q,t[112]=Ye,t[113]=Qe,t[114]=et,t[115]=nt,t[116]=rt):rt=t[116],rt}function hr(e){return e+1}function gr(e){"use forget";let t=(0,Z.c)(68),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:v,styleMode:y,title:b,variant:x,widgetRefSeenAtMs:S}=e,{isExpanded:C,isViewingHistoricalVersion:w,openExpandedView:ee,setSharedPreview:T,sharedPreview:te,triggerRef:ne}=hn(),E=(0,Q.useContext)(Ce),ie;t[0]===n?ie=t[1]:(ie=n??[],t[0]=n,t[1]=ie);let D;t[2]!==s||t[3]!==u||t[4]!==y||t[5]!==ie?(D=[u,y,s,...ie],t[2]=s,t[3]=u,t[4]=y,t[5]=ie,t[6]=D):D=t[6];let O=D.join(`\0`),[ae,oe]=(0,Q.useState)(null),A=!d&&ae===O,se;t[7]===ee?se=t[8]:(se=()=>{K(),ee()},t[7]=ee,t[8]=se);let j=se,ce;t[9]!==p||t[10]!==O?(ce=(e,t)=>{oe(e?O:null),p?.(e,t)},t[9]=p,t[10]=O,t[11]=ce):ce=t[11];let le=ce,ue;t[12]!==n||t[13]!==r||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==le||t[18]!==u||t[19]!==d||t[20]!==f||t[21]!==m||t[22]!==h||t[23]!==y||t[24]!==b||t[25]!==x||t[26]!==S?(ue=(0,$.jsx)(Ar,{appBlockId:r,additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:le,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:y,title:b,variant:x,widgetRefSeenAtMs:S}),t[12]=n,t[13]=r,t[14]=a,t[15]=o,t[16]=s,t[17]=le,t[18]=u,t[19]=d,t[20]=f,t[21]=m,t[22]=h,t[23]=y,t[24]=b,t[25]=x,t[26]=S,t[27]=ue):ue=t[27];let de;t[28]!==E||t[29]!==ue?(de={element:ue,sandboxPolicy:E},t[28]=E,t[29]=ue,t[30]=de):de=t[30];let M=de,fe;t[31]===M?fe=t[32]:(fe=()=>M,t[31]=M,t[32]=fe);let N=re(fe),P;t[33]!==r||t[34]!==o||t[35]!==N||t[36]!==T?(P=e=>{if(e==null)return;let{preview:t,sourceToken:n}=G({appBlockId:r,content:N(),conversationId:o??null,inlineContainer:e});return T(t),()=>{let e=be();De(t,n,e?.sharedPreview===t)}},t[33]=r,t[34]=o,t[35]=N,t[36]=T,t[37]=P):P=t[37];let pe=P,F,I;t[38]!==M||t[39]!==te?(I=()=>{te!=null&&ke(te,M)},F=[M,te],t[38]=M,t[39]=te,t[40]=F,t[41]=I):(F=t[40],I=t[41]),k(I,F);let me=w?j:void 0,L;t[42]!==l||t[43]!==me||t[44]!==b||t[45]!==ne?(L=(0,$.jsx)(Sr,{iconSvg:l,onOpen:me,openButtonRef:ne,title:b}),t[42]=l,t[43]=me,t[44]=b,t[45]=ne,t[46]=L):L=t[46];let R=C?L:null,z;t[47]===pe?z=t[48]:(z=(0,$.jsx)(`div`,{ref:pe,className:`w-full`}),t[47]=pe,t[48]=z);let B;t[49]!==i||t[50]!==c||t[51]!==j||t[52]!==l||t[53]!==A||t[54]!==d||t[55]!==g||t[56]!==_||t[57]!==v||t[58]!==z||t[59]!==b||t[60]!==ne?(B=(0,$.jsx)(vr,{canOpen:i,expandButtonRef:ne,feedback:c,iconSvg:l,isShareReady:A,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:v,title:b,onOpen:j,children:z}),t[49]=i,t[50]=c,t[51]=j,t[52]=l,t[53]=A,t[54]=d,t[55]=g,t[56]=_,t[57]=v,t[58]=z,t[59]=b,t[60]=ne,t[61]=B):B=t[61];let V;t[62]!==C||t[63]!==B?(V=(0,$.jsx)(`div`,{hidden:C,children:B}),t[62]=C,t[63]=B,t[64]=V):V=t[64];let he;return t[65]!==R||t[66]!==V?(he=(0,$.jsxs)($.Fragment,{children:[R,V]}),t[65]=R,t[66]=V,t[67]=he):he=t[67],he}function _r(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=b(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=b(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function vr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=pe(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:b(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(_r,{action:(0,$.jsx)(Zr,{canOpen:n,conversation:d,expandButtonRef:i,isReady:c,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:l?(0,$.jsx)(o,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(wr,{iconSvg:s}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Qr,{conversation:d,isReady:c,target:f,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(br,{...a}),t[15]=a,t[16]=y);let x;return t[17]!==v||t[18]!==y?(x=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=x):x=t[19],x}function yr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=de(be),u=pe(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(W(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Sr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(_r,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(wr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Fr},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(Pr,{onRetry:o}):(0,$.jsx)(Nr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function br(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(de(xr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(nt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(et,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function xr(){return Qe()}function Sr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=pe(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=_r,l=r==null?void 0:(0,$.jsx)(E,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Cr,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Cr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(wr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function wr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Tr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Be,{"aria-hidden":`true`,className:b(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:b(`icon-md shrink-0`,i),children:(0,$.jsx)(ge,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Tr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Ur||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Wr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Kr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Er(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Er(e){let t=e.replace(Gr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Gr)){let e=t[1],n=t[2];if(!qr.has(e)||!Dr(e,n))return!1}return!0}function Dr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Or(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=pe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function kr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=pe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(E,{ref:i,type:`button`,icon:ze,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(fe,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Ar(e){"use forget";let t=(0,Z.c)(152),{appBlockId:n,additionalResourceDomains:r,clientThreadId:i,code:a,id:o,captureConsoleMessages:s,isStreaming:c,onConsoleMessagesChange:l,onReadyChange:u,presentationSurface:d,progressiveStreaming:f,ref:p,styleMode:m,surface:h,title:g,variant:_,widgetRefSeenAtMs:v}=e,y=c!==void 0&&c,x=f!==void 0&&f,S=m===void 0?`default`:m,C=h===void 0?`inline`:h,w=_===void 0?`inline`:_,ee=pe(),T=(0,Q.useRef)(null),te=(0,Q.useRef)(!1),ne=(0,Q.useRef)(!1),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),k=(0,Q.useRef)(null),oe=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(0),ce=(0,Q.useRef)(null),le=(0,Q.useRef)(null),ue;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ue=[],t[0]=ue):ue=t[0];let M=(0,Q.useRef)(ue),fe=se(),P=de(ie),{allowDependencyNetworkRequestsWithoutCanvasAccess:F}=(0,Q.useContext)(Ce),I=Je()||F,me=Ke(i)&&!F,L=fe?`dark`:`light`,z=ee.locale,B;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(B={status:`streaming`},t[1]=B):B=t[1];let[V,he]=(0,Q.useState)(B),ge=V.status===`finalized`&&V.html!==a,_e=x&&!y&&(w===`artifact`||V.status===`failed`),H=x&&C===`inline`&&V.status!==`static`&&!_e&&!ge,ve=H&&y&&w===`artifact`&&!pr(a),ye=ve?0:Ir,be=I?`execution-enabled`:`execution-disabled`,xe=me?`network-enabled`:`network-disabled`,Se=H?`progressive-app-block-stream`:a,U;t[2]===r?U=t[3]:(U=r??[],t[2]=r,t[3]=U);let we;t[4]!==P||t[5]!==z||t[6]!==S||t[7]!==C||t[8]!==Se||t[9]!==U||t[10]!==be||t[11]!==xe||t[12]!==L?(we=[L,P,C,S,z,be,xe,Se,...U],t[4]=P,t[5]=z,t[6]=S,t[7]=C,t[8]=Se,t[9]=U,t[10]=be,t[11]=xe,t[12]=L,t[13]=we):we=t[13];let Te=we.join(`\0`),Ee;t[14]===r?Ee=t[15]:(Ee=rn(r),t[14]=r,t[15]=Ee);let De=Ee,Oe=me?`deps_only`:`disabled`,ke=C===`inline`?w:void 0,Ae=H?`progressive`:`static`,je;t[16]!==C||t[17]!==Oe||t[18]!==ke||t[19]!==Ae?(je={networkPolicy:Oe,surface:C,variant:ke,renderMode:Ae},t[16]=C,t[17]=Oe,t[18]=ke,t[19]=Ae,t[20]=je):je=t[20];let Me=je,[W,Ne]=(0,Q.useState)(0),[Pe,Fe]=(0,Q.useState)(null),Ie=Pe?.signature===Te?Pe.status:null,G=Ie===`ready`,Le=G||Ie===`failed_after_ready`,Re=H&&Ie===`failed`,K=!y&&!H&&Ie===`failed`,q=d??C,ze=x&&q===`inline`&&w===`inline`,J=H&&q===`inline`&&y&&!K,Be;t[21]!==a||t[22]!==Me||t[23]!==v?(Be={content:a,metricTags:Me,widgetRefSeenAtMs:v},t[21]=a,t[22]=Me,t[23]=v,t[24]=Be):Be=t[24];let{cancelFirstPaintFrame:Ve,startRunMetrics:He}=Ct(Be),Ue,qe;t[25]!==G||t[26]!==u?(Ue=()=>{u?.(G)},qe=[G,u],t[25]=G,t[26]=u,t[27]=Ue,t[28]=qe):(Ue=t[27],qe=t[28]),(0,Q.useEffect)(Ue,qe);let Xe,Ze;t[29]!==G||t[30]!==d?(Xe=()=>{!G||d==null||T.current?.updateAppBlockSurface?.(d)},Ze=[G,d],t[29]=G,t[30]=d,t[31]=Xe,t[32]=Ze):(Xe=t[31],Ze=t[32]),(0,Q.useEffect)(Xe,Ze);let Qe,$e;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Qe=()=>({clearCapturedConsoleMessages:()=>{M.current=[]},captureScreenshotDataUrl:async()=>(await T.current?.screenshot())?.imageBase64??null,focus:()=>{T.current?.focus()}}),$e=[],t[33]=Qe,t[34]=$e):(Qe=t[33],$e=t[34]),(0,Q.useImperativeHandle)(p,Qe,$e);let et;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(et=()=>{ce.current!=null&&(window.clearTimeout(ce.current),ce.current=null)},t[35]=et):et=t[35];let Y=re(et),tt;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(tt=()=>{le.current!=null&&(window.clearTimeout(le.current),le.current=null)},t[36]=tt):tt=t[36];let X=re(tt),nt;t[37]!==G||t[38]!==H?(nt=()=>{if(!H||!G||k.current==null)return;let e=ae.current,t=T.current;if(e==null||t?.updateAppBlockStream==null||ne.current)return;let n=j.current;ae.current=null,D.current=vt(),O.current=e.html,e.isFinal&&(ne.current=!0);let r=()=>j.current!==n||k.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=A.current,a=i==null?r():i.then(r);A.current=a,a.then(()=>{A.current===a&&(A.current=null);let t=k.current;j.current!==n||t==null||(pr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),he({status:`finalized`,html:e.html})))},e=>{A.current===a&&(A.current=null),j.current===n&&(e instanceof DOMException&&e.name===`AbortError`||oe.current?.(`stream_update`,bt(e)))})},t[37]=G,t[38]=H,t[39]=nt):nt=t[39];let rt=re(nt),it;t[40]!==P||t[41]!==s||t[42]!==Y||t[43]!==X||t[44]!==a||t[45]!==I||t[46]!==me||t[47]!==ge||t[48]!==y||t[49]!==z||t[50]!==l||t[51]!==u||t[52]!==d||t[53]!==Te||t[54]!==V.status||t[55]!==_e||t[56]!==H||t[57]!==He||t[58]!==S||t[59]!==C||t[60]!==L?(it=()=>{if(!I)return;if(V.status===`failed`){if(y)return;he({status:`static`}),Ne(Mr);return}(ge||_e&&V.status!==`static`)&&he({status:`static`});let e=H&&T.current?.updateAppBlockStream!=null;if(H&&!e){y||he({status:`static`});return}te.current=!0,ne.current=!1,E.current=null,D.current=null,O.current=null,ae.current=null,k.current=null,oe.current=null,A.current=null,X(),j.current+=1;let t=j.current;Y(),Fe(null);let{expectReadySignal:n,html:r}=an(a,L,z,P,C,{loadTailwind:me,progressiveStreaming:e,syncPresentationSurface:d!=null,styleMode:S}),i=!1,o=!1,c=!1,f=!1,p=!1,m=()=>j.current===t,h=He(m,{deferFirstPaint:e,deferPayloadSize:e});e&&(k.current=h);let g=e=>{!s||l==null||!m()||(M.current=e,!f&&(f=!0,N.postTask(()=>{f=!1,m()&&l(M.current)},{priority:`background`})))},_=e=>{!m()||i||c||(i=!0,Y(),h.markReady(e),!p&&(p=!0,N.postTask(()=>{p=!1,!(!m()||c)&&(o=!0,Fe({signature:Te,status:`ready`}))},{priority:`background`})))},v=(t,n)=>{!m()||c||(c=!0,Y(),X(),ae.current=null,k.current=null,e&&he({status:`failed`}),Fe({signature:Te,status:o?`failed_after_ready`:`failed`}),h.reportFailure(t,n),N.postTask(()=>{m()&&(e?u?.(!1):u?.(!1,`failure`))},{priority:`background`}))};oe.current=v,M.current=[],g([]),ce.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Rr),(async()=>{let t=T.current?.evalAsync({code:r,expectReadySignal:n,language:`html`,shouldPreservePreviewOnFatalError:()=>m()&&e&&o});if(t==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){m()&&!i&&v(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(g([...M.current,e.value]),e.value.type===We.ENVIRONMENT_STATUS&&e.value.status===Ge.RUNNING_CODE&&_(`running_code`),e.value.type===We.RUN_COMPLETE&&(e.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await N.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,bt(e)))})},t[40]=P,t[41]=s,t[42]=Y,t[43]=X,t[44]=a,t[45]=I,t[46]=me,t[47]=ge,t[48]=y,t[49]=z,t[50]=l,t[51]=u,t[52]=d,t[53]=Te,t[54]=V.status,t[55]=_e,t[56]=H,t[57]=He,t[58]=S,t[59]=C,t[60]=L,t[61]=it):it=t[61];let at=re(it),ot;t[62]!==Y||t[63]!==X?(ot=()=>{j.current+=1,te.current=!1,ne.current=!1,E.current=null,O.current=null,ae.current=null,k.current=null,oe.current=null,A.current=null,Y(),X(),Fe(null),Ne(jr)},t[62]=Y,t[63]=X,t[64]=ot):ot=t[64];let st=re(ot),ct;t[65]===q?ct=t[66]:(ct=q===`inline`?{margin:-4,width:`calc(100% + ${Lr*2}px)`}:void 0,t[65]=q,t[66]=ct);let lt=ct,ut;t[67]!==Ve||t[68]!==Y||t[69]!==X||t[70]!==at?(ut=()=>{at();let e=T.current;return()=>{j.current+=1,k.current=null,oe.current=null,A.current=null,Y(),X(),Ve(),e?.stop()}},t[67]=Ve,t[68]=Y,t[69]=X,t[70]=at,t[71]=ut):ut=t[71];let dt;t[72]!==Ve||t[73]!==Y||t[74]!==X||t[75]!==I||t[76]!==Te||t[77]!==at||t[78]!==W?(dt=[Ve,Y,X,I,Te,at,W],t[72]=Ve,t[73]=Y,t[74]=X,t[75]=I,t[76]=Te,t[77]=at,t[78]=W,t[79]=dt):dt=t[79],(0,Q.useEffect)(ut,dt);let ft,pt;t[80]!==y||t[81]!==at||t[82]!==H?(ft=()=>{!H||y||te.current||T.current?.updateAppBlockStream!=null||at()},pt=[y,at,H],t[80]=y,t[81]=at,t[82]=H,t[83]=ft,t[84]=pt):(ft=t[83],pt=t[84]),(0,Q.useEffect)(ft,pt);let mt,ht;if(t[85]!==X||t[86]!==a||t[87]!==rt||t[88]!==K||t[89]!==G||t[90]!==y||t[91]!==H||t[92]!==w?(mt=()=>{if(!H||!G||K||ne.current||T.current?.updateAppBlockStream==null)return;let e=y?fr(a):a;if(y&&(ae.current?.html??O.current)===e)return;if(ae.current={html:e,isFinal:!y},!y){X(),rt();return}let t=D.current;if(t==null&&w===`artifact`&&(E.current??=vt(),t=E.current),t==null){rt();return}let n=w===`artifact`?Br:zr,r=vt()-t;if(r>=n){rt();return}return le.current=window.setTimeout(()=>{le.current=null,rt()},n-r),X},ht=[X,a,rt,K,G,y,H,w],t[85]=X,t[86]=a,t[87]=rt,t[88]=K,t[89]=G,t[90]=y,t[91]=H,t[92]=w,t[93]=mt,t[94]=ht):(mt=t[93],ht=t[94]),(0,Q.useEffect)(mt,ht),!I){let e;return t[95]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[95]=e):e=t[95],e}let gt=ze&&`flex-col`,_t=q===`inline`&&(ve?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),yt=q===`stage`&&`h-full min-h-0`,xt;t[96]!==gt||t[97]!==_t||t[98]!==yt?(xt=b(`flex w-full`,gt,_t,yt),t[96]=gt,t[97]=_t,t[98]=yt,t[99]=xt):xt=t[99];let St;t[100]!==ze||t[101]!==J||t[102]!==g?(St=ze?(0,$.jsx)(zn,{isVisible:J,title:g}):null,t[100]=ze,t[101]=J,t[102]=g,t[103]=St):St=t[103];let wt=q===`inline`?`flex-none`:`w-full`,Tt=J&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,Et;t[104]!==wt||t[105]!==Tt?(Et=b(`relative min-w-0`,wt,Tt),t[104]=wt,t[105]=Tt,t[106]=Et):Et=t[106];let Dt=`${W}:${me?`network-enabled`:`network-disabled`}`,Ot;t[107]!==n||t[108]!==i||t[109]!==o?(Ot=JSON.stringify([i??null,n??o]),t[107]=n,t[108]=i,t[109]=o,t[110]=Ot):Ot=t[110];let kt;t[111]===ee?kt=t[112]:(kt=ee.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[111]=ee,t[112]=kt);let At=me?`deps-only`:`none`,jt=me?Vr:Hr,Mt=Le?0:-1,Nt=q===`inline`&&S===`open`,Pt=q!==`stage`,Ft=H?ye:Fr,It;t[113]!==o||t[114]!==at||t[115]!==De||t[116]!==Dt||t[117]!==Ot||t[118]!==kt||t[119]!==At||t[120]!==jt||t[121]!==Mt||t[122]!==Nt||t[123]!==Pt||t[124]!==Ft?(It=(0,$.jsx)(Ye,{id:o,sandboxOriginId:Ot,title:kt,visuallyHidden:!1,networkPolicy:At,additionalResourceDomains:De,sandboxPermissions:jt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Mt,onRetryCodeRun:at,transparentBackground:Nt,useIntrinsicHeight:Pt,intrinsicHeightFallback:Ft,ref:T},Dt),t[113]=o,t[114]=at,t[115]=De,t[116]=Dt,t[117]=Ot,t[118]=kt,t[119]=At,t[120]=jt,t[121]=Mt,t[122]=Nt,t[123]=Pt,t[124]=Ft,t[125]=It):It=t[125];let Lt;t[126]===J?Lt=t[127]:(Lt=J?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[126]=J,t[127]=Lt);let Rt;t[128]!==Re||t[129]!==K||t[130]!==Le||t[131]!==H?(Rt=!Le&&!K&&(!H||Re)?(0,$.jsx)(Nr,{}):null,t[128]=Re,t[129]=K,t[130]=Le,t[131]=H,t[132]=Rt):Rt=t[132];let zt;t[133]!==K||t[134]!==st?(zt=K?(0,$.jsx)(Pr,{onRetry:st}):null,t[133]=K,t[134]=st,t[135]=zt):zt=t[135];let Bt;t[136]!==lt||t[137]!==J||t[138]!==Et||t[139]!==It||t[140]!==Lt||t[141]!==Rt||t[142]!==zt?(Bt=(0,$.jsxs)(`div`,{"aria-busy":J,className:Et,style:lt,children:[It,Lt,Rt,zt]}),t[136]=lt,t[137]=J,t[138]=Et,t[139]=It,t[140]=Lt,t[141]=Rt,t[142]=zt,t[143]=Bt):Bt=t[143];let Vt;t[144]!==J||t[145]!==w?(Vt=J&&w===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[144]=J,t[145]=w,t[146]=Vt):Vt=t[146];let Ht;return t[147]!==xt||t[148]!==St||t[149]!==Bt||t[150]!==Vt?(Ht=(0,$.jsxs)(`div`,{className:xt,children:[St,Bt,Vt]}),t[147]=xt,t[148]=St,t[149]=Bt,t[150]=Vt,t[151]=Ht):Ht=t[151],Ht}function jr(e){return e+1}function Mr(e){return e+1}function Nr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(o,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Pr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(R,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(E,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r=e((()=>{Z=z(),ue(),Ze(),U(),X(),h(),j(),Xe(),x(),He(),J(),q(),Ee(),qe(),y(),je(),rt(),xe(),T(),le(),f(),Me(),s(),ce(),O(),oe(),$e(),it(),Se(),Ue(),a(),Q=n(L()),me(),mn(),Nt(),mt(),Dn(),Le(),jn(),vn(),Bn(),gt(),Re(),Ae(),It(),ur(),$=B(),Fr=432,Ir=120,Lr=4,Rr=15e3,zr=100,Br=350,Vr=`allow-scripts allow-same-origin allow-forms`,Hr=`allow-scripts allow-same-origin`,Ur=12e3,Wr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Gr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Kr=new Set([`svg`,`path`]),qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Jr=/<script(?:\s|>)/i,Yr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Xr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Zr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(kr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(fe,{label:n,children:(0,$.jsx)(E,{type:`button`,icon:Ve,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(at,{category:ve.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Qr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ot,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(at,{category:ve.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{ft as S,Nt as _,$r as a,mt as b,nr as c,Cn as d,Dn as f,vt as g,Ft as h,dr as i,rr as l,Pt as m,Nr as n,ir as o,It as p,Ar as r,ur as s,mr as t,Sn as u,ht as v,pt as x,gt as y};
//# sourceMappingURL=e3b746a6-ogtgmef0rg2bx0nc.js.map