const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-gyq1vq3sn5ovau4s.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-foacsr09jnvllsoc.js","assets/2340486e-dyt4epctwx2pn2sj.js","assets/conversation-small-o5wcosqe6l2nxwqn.js","assets/30901919-dyjvqq730xrokij5.js","assets/c470f5ab-eoso7tvrjfmxyrhb.js","assets/0e5afe53-etnejaw7l1pa01zc.js","assets/conversation-small-e5s9lb23.css","assets/8b34dbc2-m0fsxtucnpa41i3z.js","assets/82782bc9-ks2klkbtvzkww627.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$4 as r,A9 as i,AF as a,AX as o,Cb as s,DN as c,Dm as l,EN as u,GJ as d,KJ as f,MF as p,MN as m,MT as h,O9 as g,OF as _,ON as v,TN as y,UB as b,WB as x,b9 as S,bH as C,cet as w,det as T,e3 as E,fc as ee,fet as D,g3 as O,h3 as k,h9 as A,hY as te,jT as j,kN as M,mY as N,rc as ne,wb as P,wm as F,x9 as I,yH as re,zX as ie}from"./4813494d-foacsr09jnvllsoc.js";import{Fn as ae,In as L,Ln as R,Rn as oe,Sn as se,hn as ce,jn as z,mn as le,zn as ue}from"./2340486e-dyt4epctwx2pn2sj.js";import{$5 as de,Aw as fe,Cn as pe,G5 as me,J5 as B,K5 as he,MS as ge,NS as _e,Q5 as ve,XO as V,Y5 as H,_Pn as ye,a7 as be,dd as U,e7 as xe,hPn as W,hjn as Se,hkt as Ce,i7 as we,jw as Te,mNn as Ee,mjn as De,mkt as Oe,pNn as ke,pkt as Ae,q5 as je,qO as Me,r7 as Ne,ud as G,wn as Pe}from"./conversation-small-o5wcosqe6l2nxwqn.js";import{_E as Fe,ew as Ie,ix as Le,rx as Re,tw as K,vE as ze}from"./30901919-dyjvqq730xrokij5.js";import{a as Be,d as Ve,o as He,r as Ue,t as We,u as Ge}from"./8d846022-meglr123wki13zk0.js";import{i as Ke,n as qe,r as Je}from"./91969468-bzkh69khanamm904.js";import{n as q,t as Ye}from"./4d271a7b-dvyo2359yrx96hjm.js";import{n as Xe,r as Ze}from"./58bafdef-if1r9p6ffob8bmfx.js";import{a as Qe,i as $e}from"./e01e2324-fi5dqzsk1qtrkrz7.js";import{i as et,t as tt}from"./5dc32f04-hvutxkds0o6hfhb8.js";import{c as nt,i as rt,o as it,r as at,s as ot,t as st}from"./56dee4d8-wturyb7cstzjzwdu.js";import{n as ct,t as lt}from"./72bb039a-o0e59qmyqva25y3n.js";import{i as ut,n as dt,r as ft,t as pt}from"./9eb56efa-c8xzwns9t421r7sv.js";import{i as mt,n as ht,r as J,t as gt}from"./cc79834b-ovkeevma4c7z2uxg.js";function _t(){return A(`2779568043`)}function Y(){return A(`3864712762`)}function vt(){return S(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var yt=e((()=>{I()}));function bt({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function xt(){return typeof performance<`u`?performance.now():Date.now()}function St(e){return new TextEncoder().encode(e).byteLength/1024}function Ct(e){return e instanceof Error?e.name:`unknown`}function wt(e,t,n=1){D.count(w.APP_BLOCKS,e,bt(t),n)}function Tt(e,t,n){D.hist(w.APP_BLOCKS,e,bt(n),t)}function Et({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Dt.useRef)(xt()),i=(0,Dt.useRef)(null),a=(0,Dt.useRef)(!1),o=(0,Dt.useRef)(!1),s=v(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=v((n=e)=>{o.current||(o.current=!0,Tt(At,St(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:v((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=xt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),wt(Nt,t);let _=(e,n)=>{f||(f=!0,wt(Mt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=xt();Tt(jt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Tt(Ot,s-r.current,t),n!=null&&Tt(Ft,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=xt(),g=n,Tt(Pt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),wt(kt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It=e((()=>{T(),c(),Dt=n(ue()),Ot=`app_block.first_render_time_ms`,kt=`app_block.load.failure`,At=`app_block.payload_size_kb`,jt=`app_block.ready_to_first_paint_ms`,Mt=`app_block.render.outcome`,Nt=`app_block.render.start`,Pt=`app_block.sandbox_eval_to_ready_ms`,Ft=`app_block.widget_ref_to_first_paint_ms`})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var X=e((()=>{}));function Jt(e){return String.raw(an||=qt([`<script>
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
<\/script>`]),e===`open`)}function Yt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Xt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Zt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Qt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function $t(e){try{return new URL(e).origin}catch{return null}}function en(e){return un.has(e)?e:`default`}function tn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function nn(e=[]){let t=Qt(Gt),n=Qt(Bt),r=[$t(sn),$t(cn),$t(t),$t(n),...ln,...e.map($t)];return Array.from(new Set(r.filter(e=>e!=null)))}function rn(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Jt(l):``;if(!s&&Yt(u))return{html:c?Xt(u,d):u,expectReadySignal:!1};let f=Zt(n),p=l===`open`?Lt:Ht,m=Qt(l===`open`?Bt:Gt),h=en(r),g=tn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${sn}" defer><\/script>
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
    ${s?dn:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?fn:``}
  </body>
</html>`}}var an,on,sn,cn,ln,un,dn,fn,pn=e((()=>{Rt(),Vt(),Ut(),Kt(),X(),sn=`https://cdn.tailwindcss.com`,cn=`https://images.openai.com`,ln=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],un=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),dn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,fn=String.raw(on||=qt([`<script>
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
<\/script>`]))}));function mn(){"use forget";let e=(0,hn.useContext)(gn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var hn,gn,_n=e((()=>{hn=n(ue()),gn=(0,hn.createContext)(null)})),vn,yn=e((()=>{f(),ce(),vn=d(()=>le(()=>import(`./7aa2b76f-gyq1vq3sn5ovau4s.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function bn(e){"use forget";let t=(0,Cn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,d=`app-block:${c.appBlockId}:${(0,wn.useId)()}`,f=(0,wn.useRef)(null),[p,m]=(0,wn.useState)(null),h=c.appBlockId,g=c.libraryFileId,_=c.messageId,v=c.refIndex,y=o??null,b;t[0]!==y||t[1]!==h?(b={appBlockId:h,conversationId:y},t[0]=y,t[1]=h,t[2]=b):b=t[2];let x=b,S=E(me),C;t[3]!==S||t[4]!==x?(C=H(S,x),t[3]=S,t[4]=x,t[5]=C):C=t[5];let w=C,T=S?.appBlockId===h&&S.conversationId===y&&(S.isOriginalVersion===!0||S.versionNumber!=null),ee=w||T,D;t[6]!==S||t[7]!==d||t[8]!==x?(D=ve(S,x,d),t[6]=S,t[7]=d,t[8]=x,t[9]=D):D=t[9];let O=D,k;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>{f.current?.focus()},t[10]=k):k=t[10];let A=k,te=p?.supportsAtomicMove?p:void 0,j;t[11]!==h||t[12]!==g||t[13]!==_||t[14]!==v?(j={appBlockId:h,libraryFileId:g,messageId:_,refIndex:v},t[11]=h,t[12]=g,t[13]=_,t[14]=v,t[15]=j):j=t[15];let M;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==te||t[22]!==j||t[23]!==u?(M={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:A,headerAction:s,sharedPreview:te,source:j,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=te,t[22]=j,t[23]=u,t[24]=M):M=t[24];let N=M,ne,P;t[25]!==N||t[26]!==w||t[27]!==x?(ne=()=>{w&&de(x,N)},P=[N,w,x],t[25]=N,t[26]=w,t[27]=x,t[28]=ne,t[29]=P):(ne=t[28],P=t[29]),(0,wn.useEffect)(ne,P);let F;t[30]!==N||t[31]!==O||t[32]!==x?(F=()=>{he(x,O,N)},t[30]=N,t[31]=O,t[32]=x,t[33]=F):F=t[33];let I=F,re;t[34]!==ee||t[35]!==T||t[36]!==I||t[37]!==p?(re={isExpanded:ee,isViewingHistoricalVersion:T,openExpandedView:I,setSharedPreview:m,sharedPreview:p,triggerRef:f},t[34]=ee,t[35]=T,t[36]=I,t[37]=p,t[38]=re):re=t[38];let ie=re,ae;return t[39]!==i||t[40]!==ie?(ae=(0,Tn.jsx)(gn.Provider,{value:ie,children:i}),t[39]=i,t[40]=ie,t[41]=ae):ae=t[41],ae}function xn(e){"use forget";let t=(0,Cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=J(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:G(i).height$()??0,t[0]=i,t[1]=l);let u=E(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,Tn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,Tn.jsxs)(gt.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,Tn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,Tn.jsx)(gt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,Tn.jsxs)(Tn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function Sn(e){"use forget";let t=(0,Cn.c)(5),{conversation:n,paneId:r}=e,i=mt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,Tn.jsx)(vn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Cn,wn,Tn,En=e((()=>{Cn=se(),U(),ht(),r(),wn=n(ue()),_n(),B(),yn(),Tn=oe()}));function Dn(){"use forget";let e=(0,On.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,kn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,kn.jsx)(z,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var On,kn,An=e((()=>{On=se(),L(),kn=oe()}));function jn(e,t,n){"use forget";let r=(0,Nn.c)(11),i=t===void 0||t,a=R(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(Z.generatingApp,{title:e}):a.formatMessage(Z.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(Z.sketchingInterface),a.formatMessage(Z.shapingLayout),a.formatMessage(Z.arrangingPieces),a.formatMessage(Z.polishingVisuals),a.formatMessage(Z.tuningInputs),a.formatMessage(Z.addingInteractivity),a.formatMessage(Z.wiringControls),a.formatMessage(Z.composingInteractions),a.formatMessage(Z.calibratingPreview),a.formatMessage(Z.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Pn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},In);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Pn.useEffect)(f,p),l[u]??l[0]??``}function Mn(e){"use forget";let t=(0,Nn.c)(2),{loadingLabels:n,title:r}=e,i=jn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Fn.jsx)(tt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Nn,Pn,Fn,In,Z,Ln,Rn=e((()=>{Nn=se(),et(),O(),Pn=n(ue()),L(),Fn=oe(),In=2800,Z=ae({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Ln=e=>{"use forget";let t=(0,Nn.c)(11),{isVisible:n,title:r}=e,i=jn(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=k(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=k(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Fn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Fn.jsx)(`div`,{className:`pb-3`,children:(0,Fn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Fn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function zn({appBlockId:e,conversation:t}){return t==null?null:st(t).get(e)??null}function Bn(e){return e?.serverId$()??void 0}function Vn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Oe(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Hn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Ae({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:l(e)?`missing`:`failed`})}),()=>{a.abort()}}function Un({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Gn=e((()=>{F(),Ce(),at()})),Kn=t({AppBlock:()=>Yn,AppBlockPreviewLoadingState:()=>mr,AppBlockSandboxPreview:()=>dr});function qn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Jn(e){let t=qn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Yn(e){"use forget";let t=(0,gr.c)(153),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,editingEnabled:d,expandedHeaderAction:f,expandedViewEnabled:m,id:h,captureConsoleMessages:g,clientThreadId:v,iconSvg:y,inlineHeight:b,isStreaming:x,isTurnStreaming:S,libraryFileId:C,libraryFileVersionNumber:w,loadingLabels:T,messageId:D,onConsoleMessagesChange:O,onReadyChange:k,previewLoadingLabel:A,progressiveStreaming:te,ref:j,refIndex:M,styleMode:N,title:ne,variant:P,wasStreamingWhenFirstSeen:F,widgetName:I,widgetRefSeenAtMs:re}=e,ae=c===void 0||c,L=g!==void 0&&g,R=x!==void 0&&x,oe=S!==void 0&&S,se=te!==void 0&&te,ce=P===void 0?`inline`:P,z=p(),le=(0,Q.useContext)(lt),ue;t[0]===z?ue=t[1]:(ue=()=>z!=null&&Se(z),t[0]=z,t[1]=ue);let de=E(ue),fe;t[2]!==v||t[3]!==z?(fe=v==null?z:_(v),t[2]=v,t[3]=z,t[4]=fe):fe=t[4];let pe=fe,me=D!=null&&M!=null?ot({messageId:D,refIndex:M}):void 0,B=r??me??ot({messageId:D??h,refIndex:M??0}),_e=E(()=>Me({conversation:z??null,instanceId:B,messageId:D,refIndex:M}))??u,ve=E(()=>a!=null||_e!=null?null:zn({appBlockId:B,conversation:z??null})),V=a??ve,H;t[5]===z?H=t[6]:(H=()=>Bn(z??null),t[5]=z,t[6]=H);let ye=E(H),be=ie(z?.id),U=ye??be,xe;t[7]!==l||t[8]!==C||t[9]!==w||t[10]!==U||t[11]!==V?(xe=Vn({currentContentFileId:l,libraryFileId:C,libraryFileVersionNumber:w,serverThreadId:U,source:V}),t[7]=l,t[8]=C,t[9]=w,t[10]=U,t[11]=V,t[12]=xe):xe=t[12];let W=xe,[Ce,we]=(0,Q.useState)(null),[Te,Ee]=(0,Q.useState)(0),De;t[13]!==Te||t[14]!==W.libraryContentKey?(De=[W.libraryContentKey,Te],t[13]=Te,t[14]=W.libraryContentKey,t[15]=De):De=t[15];let Oe=De.join(`\0`),ke,Ne;t[16]!==i||t[17]!==Oe||t[18]!==W.contentFileId||t[19]!==W.libraryFileId||t[20]!==_e||t[21]!==U?(ke=()=>{if(!(i!=null||_e===`collapsed`))return Hn({contentFileId:W.contentFileId,libraryContentKey:Oe,libraryFileId:W.libraryFileId,onContentStateChange:we,serverThreadId:U})},Ne=[i,W.contentFileId,W.libraryFileId,Oe,_e,U],t[16]=i,t[17]=Oe,t[18]=W.contentFileId,t[19]=W.libraryFileId,t[20]=_e,t[21]=U,t[22]=ke,t[23]=Ne):(ke=t[22],Ne=t[23]),(0,Q.useEffect)(ke,Ne);let G=Un({appBlockId:B,contentFileId:W.contentFileId,currentContentFileId:l,libraryContent:Ce,libraryContentKey:Oe,libraryFileId:C,libraryFileVersionNumber:w,source:V}),Pe=Ce?.key===Oe?Ce:null,Fe;t[24]!==G?.libraryFileId||t[25]!==C?(Fe=()=>je(G?.libraryFileId??C),t[24]=G?.libraryFileId,t[25]=C,t[26]=Fe):Fe=t[26];let Ie=E(Fe),Le=G?.libraryFileVersionNumber??w,Re=Ie!=null&&(Le==null||Ie.versionNumber>=Le)?Ie.code:void 0,K=Re??i??G?.content??s??null,ze=G?.iconSvg??y??null,Be=G?.libraryFileId??C,Ve=Be==null&&i==null&&Re==null&&l==null&&V?.currentContentFileId==null&&V?.latestPatchMessageId==null,He=F===!1&&ce===`inline`&&Ve,Ue;t[27]!==s||t[28]!==Ve||t[29]!==D||t[30]!==K||t[31]!==M||t[32]!==V?(Ue=Ve?V==null?D!=null&&M!=null&&s!=null&&K===s?{messageId:D,refIndex:M}:null:V.messageId.length>0&&V.content!=null&&K===V.content?{messageId:V.messageId,refIndex:V.refIndex}:null:null,t[27]=s,t[28]=Ve,t[29]=D,t[30]=K,t[31]=M,t[32]=V,t[33]=Ue):Ue=t[33];let We=Ue,Ge=ce===`artifact`,Ke=G?.styleMode??N??(Ge&&se?`open`:void 0),qe;t[34]!==Be||t[35]!==Ke?(qe=it({explicitStyleMode:Ke,libraryFileId:Be}),t[34]=Be,t[35]=Ke,t[36]=qe):qe=t[36];let Je=qe,q=G?.title??ne,Ye;t[37]===z?Ye=t[38]:(Ye=()=>z!=null&&ee(z)?`work`:`chat`,t[37]=z,t[38]=Ye);let Xe=E(Ye),Ze;t[39]===d?Ze=t[40]:(Ze=d??vt(),t[39]=d,t[40]=Ze);let Qe=Ze,$e=m??Qe,et=se,tt=Ge&&Je===`open`,nt=_e===`collapsed`||_e==null&&ae&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==D,rt=s!=null||l!=null,at;t[41]!==Qe||t[42]!==v||t[43]!==s||t[44]!==z?.id||t[45]!==l||t[46]!==B||t[47]!==f||t[48]!==w||t[49]!==D||t[50]!==Be||t[51]!==Je||t[52]!==q||t[53]!==M||t[54]!==U||t[55]!==V?.messageId?(at=async e=>{let t=s;if(t==null&&l!=null)try{t=await Ae({abortSignal:new AbortController().signal,fileId:l,serverThreadId:U})}catch{return}t!=null&&he({appBlockId:B,conversationId:z?.id??v??null,isOriginalVersion:!0,versionNumber:w??void 0},`app-block:${B}:original`,{canSubmitTurn:Qe,code:t,headerAction:f,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:B,libraryFileId:Be,messageId:V?.messageId??D,refIndex:M},styleMode:Je,title:q})},t[41]=Qe,t[42]=v,t[43]=s,t[44]=z?.id,t[45]=l,t[46]=B,t[47]=f,t[48]=w,t[49]=D,t[50]=Be,t[51]=Je,t[52]=q,t[53]=M,t[54]=U,t[55]=V?.messageId,t[56]=at):at=t[56],z?.id,V?.messageId;let st=at;if(R&&!et){let e;return t[57]!==T||t[58]!==q?(e=(0,$.jsx)(Mn,{loadingLabels:T,title:q}),t[57]=T,t[58]=q,t[59]=e):e=t[59],e}let ct=de&&s!=null;if(Pe?.status===`missing`&&!ct)return null;if(nt){let e=rt?st:void 0,n;return t[60]!==q||t[61]!==e?(n=(0,$.jsx)(lr,{onView:e,title:q}),t[60]=q,t[61]=e,t[62]=n):n=t[62],n}let ut=K??(et&&R?``:null);if(ut==null){if(G?.latestPatchMessageId!=null){let e=z?.id??v,n=Pe?.status===`failed`,r;t[63]===Ee?r=t[64]:(r=()=>Ee(Xn),t[63]=Ee,t[64]=r);let i;return t[65]!==B||t[66]!==Ge||t[67]!==ze||t[68]!==A||t[69]!==q||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(er,{appBlockId:B,conversationId:e,hasFailed:n,iconSvg:ze,onRetry:r,previewLoadingLabel:A,showHeader:Ge,title:q}),t[65]=B,t[66]=Ge,t[67]=ze,t[68]=A,t[69]=q,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==T||t[75]!==q?(e=(0,$.jsx)(Mn,{loadingLabels:T,title:q}),t[74]=T,t[75]=q,t[76]=e):e=t[76],e}let dt;t[77]!==v||t[78]!==Xe||t[79]!==R||t[80]!==oe||t[81]!==D||t[82]!==M?(dt=!R&&!oe&&v!=null&&D!=null&&M!=null&&_t()?{reference:{clientThreadId:v,messageId:D,referenceIndex:M},target:{kind:`app_block`,metadata:{tab:Xe}}}:void 0,t[77]=v,t[78]=Xe,t[79]=R,t[80]=oe,t[81]=D,t[82]=M,t[83]=dt):dt=t[83];let ft=dt;if(le){let e=z?.id??v,r;t[84]!==n||t[85]!==o||t[86]!==L||t[87]!==B||t[88]!==h||t[89]!==b||t[90]!==R||t[91]!==O||t[92]!==k||t[93]!==A||t[94]!==Je||t[95]!==q||t[96]!==j||t[97]!==ut||t[98]!==et||t[99]!==e||t[100]!==ce||t[101]!==re?(r=(0,$.jsx)(dr,{additionalResourceDomains:n,appBlockId:B,bind:o,captureConsoleMessages:L,clientThreadId:e,code:ut,id:h,inlineHeight:b,isStreaming:R,onConsoleMessagesChange:O,onReadyChange:k,previewLoadingLabel:A,progressiveStreaming:et,ref:j,styleMode:Je,title:q,variant:ce,widgetRefSeenAtMs:re}),t[84]=n,t[85]=o,t[86]=L,t[87]=B,t[88]=h,t[89]=b,t[90]=R,t[91]=O,t[92]=k,t[93]=A,t[94]=Je,t[95]=q,t[96]=j,t[97]=ut,t[98]=et,t[99]=e,t[100]=ce,t[101]=re,t[102]=r):r=t[102];let i;return t[103]!==R||t[104]!==ze||t[105]!==q||t[106]!==tt||t[107]!==r?(i=(0,$.jsx)($n,{canOpen:!1,iconSvg:ze,isShareReady:!1,isStreaming:R,showArtifactCard:tt,title:q,children:r}),t[103]=R,t[104]=ze,t[105]=q,t[106]=tt,t[107]=r,t[108]=i):i=t[108],i}let pt=z?.id??v,mt=V?.messageId??D,ht;t[109]!==B||t[110]!==Be||t[111]!==M||t[112]!==mt?(ht={appBlockId:B,libraryFileId:Be,messageId:mt,refIndex:M},t[109]=B,t[110]=Be,t[111]=M,t[112]=mt,t[113]=ht):ht=t[113];let J=tt&&$e&&!R,gt=z?.id??v,Y;t[114]!==We||t[115]!==I?(Y=We==null?void 0:{contentReferenceIndex:We.refIndex,messageId:We.messageId,widgetName:I??ge.AppBlock,widgetType:ge.AppBlock},t[114]=We,t[115]=I,t[116]=Y):Y=t[116];let yt;t[117]!==n||t[118]!==o||t[119]!==L||t[120]!==B||t[121]!==ft||t[122]!==h||t[123]!==b||t[124]!==He||t[125]!==R||t[126]!==O||t[127]!==k||t[128]!==ze||t[129]!==A||t[130]!==Je||t[131]!==q||t[132]!==j||t[133]!==ut||t[134]!==pe||t[135]!==et||t[136]!==tt||t[137]!==J||t[138]!==gt||t[139]!==Y||t[140]!==ce||t[141]!==re?(yt=(0,$.jsx)(Zn,{additionalResourceDomains:n,appBlockId:B,bind:o,canOpen:J,captureConsoleMessages:L,clientThreadId:gt,code:ut,feedback:ft,iconSvg:ze,id:h,inlineHeight:b,isStreaming:R,onConsoleMessagesChange:O,onReadyChange:k,previewLoadingLabel:A,progressiveStreaming:et,isSavedInlineLoad:He,ref:j,showArtifactCard:tt,shareConversation:pe,shareTarget:Y,styleMode:Je,title:q,variant:ce,widgetRefSeenAtMs:re}),t[117]=n,t[118]=o,t[119]=L,t[120]=B,t[121]=ft,t[122]=h,t[123]=b,t[124]=He,t[125]=R,t[126]=O,t[127]=k,t[128]=ze,t[129]=A,t[130]=Je,t[131]=q,t[132]=j,t[133]=ut,t[134]=pe,t[135]=et,t[136]=tt,t[137]=J,t[138]=gt,t[139]=Y,t[140]=ce,t[141]=re,t[142]=yt):yt=t[142];let bt;return t[143]!==n||t[144]!==Qe||t[145]!==f||t[146]!==Je||t[147]!==q||t[148]!==ut||t[149]!==pt||t[150]!==ht||t[151]!==yt?(bt=(0,$.jsx)(bn,{additionalResourceDomains:n,canSubmitTurn:Qe,code:ut,conversationId:pt,headerAction:f,styleMode:Je,source:ht,title:q,children:yt}),t[143]=n,t[144]=Qe,t[145]=f,t[146]=Je,t[147]=q,t[148]=ut,t[149]=pt,t[150]=ht,t[151]=yt,t[152]=bt):bt=t[152],bt}function Xn(e){return e+1}function Zn(e){"use forget";let t=(0,gr.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:d,id:f,inlineHeight:p,isStreaming:m,onConsoleMessagesChange:h,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:b,ref:x,shareConversation:S,shareTarget:C,showArtifactCard:w,styleMode:T,title:E,variant:ee,widgetRefSeenAtMs:D}=e,{isExpanded:O,isViewingHistoricalVersion:k,openExpandedView:A,setSharedPreview:te,sharedPreview:j,triggerRef:M}=mn(),N=(0,Q.useContext)(pe),ne;t[0]===n?ne=t[1]:(ne=n??[],t[0]=n,t[1]=ne);let P;t[2]!==c||t[3]!==f||t[4]!==T||t[5]!==ne?(P=[f,T,c,...ne],t[2]=c,t[3]=f,t[4]=T,t[5]=ne,t[6]=P):P=t[6];let F=P.join(`\0`),[I,re]=(0,Q.useState)(null),ie=!m&&I===F,ae;t[7]===A?ae=t[8]:(ae=()=>{ke(),A()},t[7]=A,t[8]=ae);let L=ae,R;t[9]!==g||t[10]!==F?(R=(e,t)=>{re(e?F:null),g?.(e,t)},t[9]=g,t[10]=F,t[11]=R):R=t[11];let oe=R,se;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==oe||t[19]!==f||t[20]!==p||t[21]!==b||t[22]!==m||t[23]!==h||t[24]!==_||t[25]!==y||t[26]!==x||t[27]!==T||t[28]!==E||t[29]!==ee||t[30]!==D?(se=(0,$.jsx)(dr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:f,inlineHeight:p,isStreaming:m,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:h,onReadyChange:oe,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:b,ref:x,styleMode:T,title:E,variant:ee,widgetRefSeenAtMs:D}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=oe,t[19]=f,t[20]=p,t[21]=b,t[22]=m,t[23]=h,t[24]=_,t[25]=y,t[26]=x,t[27]=T,t[28]=E,t[29]=ee,t[30]=D,t[31]=se):se=t[31];let ce;t[32]!==N||t[33]!==se?(ce={element:se,sandboxPolicy:N},t[32]=N,t[33]=se,t[34]=ce):ce=t[34];let z=ce,le;t[35]===z?le=t[36]:(le=()=>z,t[35]=z,t[36]=le);let ue=v(le),de;t[37]!==r||t[38]!==s||t[39]!==ue||t[40]!==te?(de=e=>{if(e==null)return;let{preview:t,sourceToken:n}=xe({appBlockId:r,content:ue(),conversationId:s??null,inlineContainer:e});return te(t),()=>{let e=me();we(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=s,t[39]=ue,t[40]=te,t[41]=de):de=t[41];let fe=de,B,he;t[42]!==z||t[43]!==j?(he=()=>{j!=null&&be(j,z)},B=[z,j],t[42]=z,t[43]=j,t[44]=B,t[45]=he):(B=t[44],he=t[45]),u(he,B);let ge=k?L:void 0,_e;t[46]!==d||t[47]!==ge||t[48]!==E||t[49]!==M?(_e=(0,$.jsx)(rr,{iconSvg:d,onOpen:ge,openButtonRef:M,title:E}),t[46]=d,t[47]=ge,t[48]=E,t[49]=M,t[50]=_e):_e=t[50];let ve=O?_e:null,V;t[51]===fe?V=t[52]:(V=(0,$.jsx)(`div`,{ref:fe,className:`w-full`}),t[51]=fe,t[52]=V);let H;t[53]!==a||t[54]!==l||t[55]!==L||t[56]!==d||t[57]!==ie||t[58]!==m||t[59]!==S||t[60]!==C||t[61]!==w||t[62]!==V||t[63]!==E||t[64]!==M?(H=(0,$.jsx)($n,{canOpen:a,expandButtonRef:M,feedback:l,iconSvg:d,isShareReady:ie,shareConversation:S,shareTarget:C,isStreaming:m,showArtifactCard:w,title:E,onOpen:L,children:V}),t[53]=a,t[54]=l,t[55]=L,t[56]=d,t[57]=ie,t[58]=m,t[59]=S,t[60]=C,t[61]=w,t[62]=V,t[63]=E,t[64]=M,t[65]=H):H=t[65];let ye;t[66]!==O||t[67]!==H?(ye=(0,$.jsx)(`div`,{hidden:O,children:H}),t[66]=O,t[67]=H,t[68]=ye):ye=t[68];let U;return t[69]!==ve||t[70]!==ye?(U=(0,$.jsxs)($.Fragment,{children:[ve,ye]}),t[69]=ve,t[70]=ye,t[71]=U):U=t[71],U}function Qn(e){"use forget";let t=(0,gr.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=k(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=k(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function $n(e){"use forget";let t=(0,gr.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=R(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:k(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Qn,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(b,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(ar,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(tr,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function er(e){"use forget";let t=(0,gr.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=E(me),d=R(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(H(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(rr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(Qn,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(ar,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:_r},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o||t[13]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(hr,{onRetry:o}):(0,$.jsx)(mr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=g):g=t[14];let _;return t[15]!==m||t[16]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[15]=m,t[16]=g,t[17]=_):_=t[17],_}function tr(e){"use forget";let t=(0,gr.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(E(nr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(fe,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function nr(){return Ze()}function rr(e){"use forget";let t=(0,gr.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=R(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Qn,l=r==null?void 0:(0,$.jsx)(j,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(ir,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function ir(e){"use forget";let t=(0,gr.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(ar,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function ar(e){"use forget";let t=(0,gr.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=or(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Ie,{"aria-hidden":`true`,className:k(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:k(`icon-md shrink-0`,i),children:(0,$.jsx)(W,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function or(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!sr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function sr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!cr(e,n))return!1}return!0}function cr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function lr(e){"use forget";let t=(0,gr.c)(9),{onView:n,title:r}=e,i=R(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function ur(e){"use forget";let t=(0,gr.c)(12),{className:n,onClick:r,ref:i}=e,a=R(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let c=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(j,{ref:i,type:`button`,icon:Re,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(s,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function dr(e){"use forget";let t=(0,gr.c)(190),{appBlockId:n,additionalResourceDomains:r,bind:a,clientThreadId:o,code:s,id:c,captureConsoleMessages:l,inlineHeight:d,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:h,presentationSurface:g,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:b,ref:x,styleMode:S,surface:C,title:w,variant:T,widgetRefSeenAtMs:ee}=e,D=f!==void 0&&f,O=y!==void 0&&y,A=b!==void 0&&b,j=S===void 0?`default`:S,M=C===void 0?`inline`:C,N=T===void 0?`inline`:T,ne=R(),P=(0,Q.useRef)(null),F=(0,Q.useRef)(null),I=Be(a),[ie,ae]=(0,Q.useState)(I.values),L=te(ie,I.values)?ie:I.values;L!==ie&&ae(L);let oe=[...I.callbacks.keys()],[se,ce]=(0,Q.useState)(oe),le=te(se,oe)?se:oe;le!==se&&ce(le);let ue=(0,Q.useRef)(L),de=(0,Q.useRef)(le),fe=(0,Q.useRef)(I.callbacks),me=a!=null,B=(0,Q.useRef)(!1),he=(0,Q.useRef)(!1),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),V=(0,Q.useRef)(null),H=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),U=(0,Q.useRef)(null),xe=(0,Q.useRef)(0),W=(0,Q.useRef)(null),Se=(0,Q.useRef)(null),Ce;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(Ce=[],t[0]=Ce):Ce=t[0];let we=(0,Q.useRef)(Ce),Te=m(),Ee=E(re),{isInternalPreview:De,networkPolicy:Oe}=(0,Q.useContext)(pe),ke=Oe===void 0?`none`:Oe,Ae=Je()||De,je=Ke(o)&&!De,Me=je||De&&ke===`deps-only`,Ne=Te?`dark`:`light`,G=ne.locale,Pe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Pe={status:`streaming`},t[1]=Pe):Pe=t[1];let[Fe,Ie]=(0,Q.useState)(Pe),Le=Fe.status===`finalized`&&Fe.html!==s,Re=O&&!D&&(N===`artifact`||Fe.status===`failed`),K=O&&M===`inline`&&Fe.status!==`static`&&!Re&&!Le,ze=K&&D&&N===`artifact`&&!Jn(s),We=ze?0:vr,qe=d??`intrinsic-height`,Ye=Ae?`execution-enabled`:`execution-disabled`,Xe=Me?`network-enabled`:`network-disabled`,Ze=De?`internal-preview`:`workspace-preview`,Qe=me?`bindings-enabled`:`bindings-disabled`,$e=K?`progressive-app-block-stream`:s,et;t[2]===r?et=t[3]:(et=r??[],t[2]=r,t[3]=et);let tt;t[4]!==Ee||t[5]!==G||t[6]!==j||t[7]!==M||t[8]!==qe||t[9]!==Ye||t[10]!==Xe||t[11]!==Ze||t[12]!==Qe||t[13]!==$e||t[14]!==et||t[15]!==Ne?(tt=[Ne,Ee,M,qe,j,G,Ye,Xe,Ze,Qe,$e,...et],t[4]=Ee,t[5]=G,t[6]=j,t[7]=M,t[8]=qe,t[9]=Ye,t[10]=Xe,t[11]=Ze,t[12]=Qe,t[13]=$e,t[14]=et,t[15]=Ne,t[16]=tt):tt=t[16];let nt=tt.join(`\0`),rt;t[17]===r?rt=t[18]:(rt=nn(r),t[17]=r,t[18]=rt);let it=rt,at=A?`saved_inline`:void 0,ot=Me?`deps_only`:`disabled`,st=M===`inline`?N:void 0,ct=K?`progressive`:`static`,lt;t[19]!==M||t[20]!==at||t[21]!==ot||t[22]!==st||t[23]!==ct?(lt={loadSource:at,networkPolicy:ot,surface:M,variant:st,renderMode:ct},t[19]=M,t[20]=at,t[21]=ot,t[22]=st,t[23]=ct,t[24]=lt):lt=t[24];let ut=lt,[dt,ft]=(0,Q.useState)(0),[pt,mt]=(0,Q.useState)(null),ht=pt?.signature===nt?pt.status:null,J=ht===`ready`,gt=J||ht===`failed_after_ready`,_t=K&&ht===`failed`,Y=!D&&!K&&ht===`failed`,vt=g??M,yt=vt===`stage`||d!=null,bt=d==null?M:`stage`,St=O&&vt===`inline`&&N===`inline`,wt=K&&vt===`inline`&&D&&!Y,Tt;t[25]!==s||t[26]!==ut||t[27]!==ee?(Tt={content:s,metricTags:ut,widgetRefSeenAtMs:ee},t[25]=s,t[26]=ut,t[27]=ee,t[28]=Tt):Tt=t[28];let{cancelFirstPaintFrame:Dt,startRunMetrics:Ot}=Et(Tt),kt,At;t[29]===J?(kt=t[30],At=t[31]):(kt=()=>{J&&ye.current?.markFirstPaint()},At=[J],t[29]=J,t[30]=kt,t[31]=At),u(kt,At);let jt,Mt;t[32]!==J||t[33]!==h?(jt=()=>{h?.(J)},Mt=[J,h],t[32]=J,t[33]=h,t[34]=jt,t[35]=Mt):(jt=t[34],Mt=t[35]),(0,Q.useEffect)(jt,Mt);let Nt,Pt;t[36]!==le||t[37]!==L||t[38]!==I.callbacks?(Nt=()=>{ue.current=L,de.current=le,fe.current=I.callbacks},Pt=[le,L,I.callbacks],t[36]=le,t[37]=L,t[38]=I.callbacks,t[39]=Nt,t[40]=Pt):(Nt=t[39],Pt=t[40]),u(Nt,Pt);let Ft;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(Ft=e=>{F.current===e&&P.current?.updateAppBlockMessenger?.(Ue(e,ue.current,de.current))},t[41]=Ft):Ft=t[41];let It=v(Ft),Lt;t[42]===It?Lt=t[43]:(Lt=e=>{let t=F.current;if(t==null)return;let n=He(e,t),r=n&&fe.current.get(n.name);if(n!=null&&r){let e=()=>{i.postTask(()=>It(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=It,t[43]=Lt);let Rt=v(Lt),zt;t[44]!==me||t[45]!==J||t[46]!==It?(zt=()=>{let e=F.current;!J||!me||e==null||It(e)},t[44]=me,t[45]=J,t[46]=It,t[47]=zt):zt=t[47];let Bt;t[48]!==le||t[49]!==L||t[50]!==me||t[51]!==J||t[52]!==It?(Bt=[le,L,me,J,It],t[48]=le,t[49]=L,t[50]=me,t[51]=J,t[52]=It,t[53]=Bt):Bt=t[53],(0,Q.useEffect)(zt,Bt);let Vt,Ht;t[54]!==d||t[55]!==J||t[56]!==g?(Vt=()=>{!J||g==null||P.current?.updateAppBlockSurface?.(d==null?g:`stage`)},Ht=[d,J,g],t[54]=d,t[55]=J,t[56]=g,t[57]=Vt,t[58]=Ht):(Vt=t[57],Ht=t[58]),(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Ut=()=>({clearCapturedConsoleMessages:()=>{we.current=[]},captureScreenshotDataUrl:async()=>(await P.current?.screenshot())?.imageBase64??null,focus:()=>{P.current?.focus()}}),Wt=[],t[59]=Ut,t[60]=Wt):(Ut=t[59],Wt=t[60]),(0,Q.useImperativeHandle)(x,Ut,Wt);let Gt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Gt=()=>{W.current!=null&&(window.clearTimeout(W.current),W.current=null)},t[61]=Gt):Gt=t[61];let Kt=v(Gt),qt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(qt=()=>{Se.current!=null&&(window.clearTimeout(Se.current),Se.current=null)},t[62]=qt):qt=t[62];let X=v(qt),Jt;t[63]!==J||t[64]!==K?(Jt=()=>{if(!K||!J||H.current==null)return;let e=V.current,t=P.current;if(e==null||t?.updateAppBlockStream==null||he.current)return;let n=xe.current;V.current=null,_e.current=xt(),ve.current=e.html,e.isFinal&&(he.current=!0);let r=()=>xe.current!==n||H.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=U.current,a=i==null?r():i.then(r);U.current=a,a.then(()=>{U.current===a&&(U.current=null);let t=H.current;xe.current!==n||t==null||(Jn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Ie({status:`finalized`,html:e.html})))},e=>{U.current===a&&(U.current=null),xe.current===n&&(e instanceof DOMException&&e.name===`AbortError`||be.current?.(`stream_update`,Ct(e)))})},t[63]=J,t[64]=K,t[65]=Jt):Jt=t[65];let Yt=v(Jt),Xt;t[66]!==Ee||t[67]!==Me||t[68]!==l||t[69]!==Kt||t[70]!==X||t[71]!==s||t[72]!==bt||t[73]!==me||t[74]!==Ae||t[75]!==Le||t[76]!==A||t[77]!==D||t[78]!==G||t[79]!==p||t[80]!==h||t[81]!==g||t[82]!==nt||t[83]!==Fe.status||t[84]!==Re||t[85]!==K||t[86]!==Ot||t[87]!==j||t[88]!==Ne?(Xt=()=>{if(!Ae)return;if(Fe.status===`failed`){if(D)return;Ie({status:`static`}),ft(pr);return}(Le||Re&&Fe.status!==`static`)&&Ie({status:`static`});let e=K&&P.current?.updateAppBlockStream!=null;if(K&&!e){D||Ie({status:`static`});return}B.current=!0,he.current=!1,ge.current=null,_e.current=null,ve.current=null,V.current=null,H.current=null,ye.current=null,be.current=null,U.current=null,X(),xe.current+=1;let t=xe.current;Kt(),mt(null),F.current=me?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:a}=rn(s,Ne,G,Ee,bt,{loadTailwind:Me,progressiveStreaming:e,syncPresentationSurface:g!=null,styleMode:j}),o=!1,c=!1,u=!1,d=!1,f=!1,m=()=>xe.current===t,_=()=>e&&c,v=Ot(m,{deferFirstPaint:e||A,deferPayloadSize:e});A&&(ye.current=v),e&&(H.current=v);let y=e=>{!l||p==null||!m()||(we.current=e,!d&&(d=!0,i.postTask(()=>{d=!1,m()&&p(we.current)},{priority:`background`})))},b=e=>{if(!(!m()||o||u)){if(o=!0,Kt(),v.markReady(e),A){c=!0,mt({signature:nt,status:`ready`});return}f||(f=!0,i.postTask(()=>{f=!1,!(!m()||u)&&(c=!0,mt({signature:nt,status:`ready`}))},{priority:`background`}))}},x=(t,n)=>{!m()||u||(u=!0,Kt(),X(),V.current=null,H.current=null,e&&Ie({status:`failed`}),mt({signature:nt,status:_()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),v.reportFailure(t,n),i.postTask(()=>{m()&&(e?h?.(!1):h?.(!1,`failure`))},{priority:`background`}))};be.current=x,we.current=[],y([]),W.current=window.setTimeout(()=>{x(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=P.current?.evalAsync({code:r,...F.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ue(F.current,ue.current,de.current)}},expectReadySignal:n,language:`html`,frameColorScheme:a,shouldPreservePreviewOnFatalError:()=>m()&&_()});if(e==null){x(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){m()&&!o&&x(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(y([...we.current,t.value]),t.value.type===Ve.ENVIRONMENT_STATUS&&t.value.status===Ge.RUNNING_CODE&&b(`running_code`),t.value.type===Ve.RUN_COMPLETE&&(t.value.wasFatalError?x(`runtime`,`fatal_runtime_error`):(b(`run_complete`),v.reportSuccess(`run_complete`))),await i.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||x(`sandbox_eval`,Ct(e)))})},t[66]=Ee,t[67]=Me,t[68]=l,t[69]=Kt,t[70]=X,t[71]=s,t[72]=bt,t[73]=me,t[74]=Ae,t[75]=Le,t[76]=A,t[77]=D,t[78]=G,t[79]=p,t[80]=h,t[81]=g,t[82]=nt,t[83]=Fe.status,t[84]=Re,t[85]=K,t[86]=Ot,t[87]=j,t[88]=Ne,t[89]=Xt):Xt=t[89];let Zt=v(Xt),Qt;t[90]!==Kt||t[91]!==X?(Qt=()=>{xe.current+=1,B.current=!1,he.current=!1,ge.current=null,ve.current=null,V.current=null,H.current=null,be.current=null,U.current=null,Kt(),X(),mt(null),ft(fr)},t[90]=Kt,t[91]=X,t[92]=Qt):Qt=t[92];let $t=v(Qt),en;t[93]!==yt||t[94]!==vt?(en=vt===`inline`&&!yt?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[93]=yt,t[94]=vt,t[95]=en):en=t[95];let tn=en,an;t[96]!==Dt||t[97]!==Kt||t[98]!==X||t[99]!==Zt?(an=()=>{Zt();let e=P.current;return()=>{xe.current+=1,F.current=null,H.current=null,ye.current=null,be.current=null,U.current=null,Kt(),X(),Dt(),e?.stop()}},t[96]=Dt,t[97]=Kt,t[98]=X,t[99]=Zt,t[100]=an):an=t[100];let on;t[101]!==Dt||t[102]!==Kt||t[103]!==X||t[104]!==Ae||t[105]!==nt||t[106]!==Zt||t[107]!==dt?(on=[Dt,Kt,X,Ae,nt,Zt,dt],t[101]=Dt,t[102]=Kt,t[103]=X,t[104]=Ae,t[105]=nt,t[106]=Zt,t[107]=dt,t[108]=on):on=t[108],(0,Q.useEffect)(an,on);let sn,cn;t[109]!==D||t[110]!==Zt||t[111]!==K?(sn=()=>{!K||D||B.current||P.current?.updateAppBlockStream!=null||Zt()},cn=[D,Zt,K],t[109]=D,t[110]=Zt,t[111]=K,t[112]=sn,t[113]=cn):(sn=t[112],cn=t[113]),(0,Q.useEffect)(sn,cn);let ln,un;if(t[114]!==X||t[115]!==s||t[116]!==Yt||t[117]!==Y||t[118]!==J||t[119]!==D||t[120]!==K||t[121]!==N?(ln=()=>{if(!K||!J||Y||he.current||P.current?.updateAppBlockStream==null)return;let e=D?qn(s):s;if(D&&(V.current?.html??ve.current)===e)return;if(V.current={html:e,isFinal:!D},!D){X(),Yt();return}let t=_e.current;if(t==null&&N===`artifact`&&(ge.current??=xt(),t=ge.current),t==null){Yt();return}let n=N===`artifact`?Sr:xr,r=xt()-t;if(r>=n){Yt();return}return Se.current=window.setTimeout(()=>{Se.current=null,Yt()},n-r),X},un=[X,s,Yt,Y,J,D,K,N],t[114]=X,t[115]=s,t[116]=Yt,t[117]=Y,t[118]=J,t[119]=D,t[120]=K,t[121]=N,t[122]=ln,t[123]=un):(ln=t[122],un=t[123]),(0,Q.useEffect)(ln,un),!Ae){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Dn,{}),t[124]=e):e=t[124],e}let dn=St&&`flex-col`,fn=vt===`inline`&&(ze?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),pn=vt===`stage`&&`h-full min-h-0`,mn;t[125]!==dn||t[126]!==fn||t[127]!==pn?(mn=k(`flex w-full`,dn,fn,pn),t[125]=dn,t[126]=fn,t[127]=pn,t[128]=mn):mn=t[128];let hn;t[129]!==St||t[130]!==wt||t[131]!==w?(hn=St?(0,$.jsx)(Ln,{isVisible:wt,title:w}):null,t[129]=St,t[130]=wt,t[131]=w,t[132]=hn):hn=t[132];let gn=!D&&!K&&(ht===`failed`||ht===`failed_after_ready`)&&pt?.readyTimedOut||void 0,_n=vt===`inline`&&!yt?`flex-none`:`w-full`,vn=wt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,yn;t[133]!==_n||t[134]!==vn?(yn=k(`relative min-w-0`,_n,vn),t[133]=_n,t[134]=vn,t[135]=yn):yn=t[135];let bn;t[136]!==d||t[137]!==tn||t[138]!==vt?(bn=vt===`inline`&&d!=null?{height:d}:tn,t[136]=d,t[137]=tn,t[138]=vt,t[139]=bn):bn=t[139];let xn=`${dt}:${Me?`network-enabled`:`network-disabled`}:${De?`internal-preview`:`workspace-preview`}`,Sn;t[140]!==n||t[141]!==o||t[142]!==c?(Sn=JSON.stringify([o??null,n??c]),t[140]=n,t[141]=o,t[142]=c,t[143]=Sn):Sn=t[143];let Cn;t[144]===ne?Cn=t[145]:(Cn=ne.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=ne,t[145]=Cn);let wn=Me?`deps-only`:`none`,Tn=je?Cr:wr,En=gt?0:-1,On=me?Rt:void 0,kn=vt===`inline`&&!yt&&j===`open`,An=!yt,jn=K?We:_r,Mn;t[146]!==c||t[147]!==De||t[148]!==Zt||t[149]!==it||t[150]!==xn||t[151]!==Sn||t[152]!==Cn||t[153]!==wn||t[154]!==Tn||t[155]!==En||t[156]!==On||t[157]!==kn||t[158]!==An||t[159]!==jn?(Mn=(0,$.jsx)(q,{id:c,sandboxOriginId:Sn,title:Cn,visuallyHidden:!1,networkPolicy:wn,disableExternalNavigation:De,additionalResourceDomains:it,sandboxPermissions:Tn,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:En,onRetryCodeRun:Zt,onAppBlockMessage:On,transparentBackground:kn,useIntrinsicHeight:An,intrinsicHeightFallback:jn,ref:P},xn),t[146]=c,t[147]=De,t[148]=Zt,t[149]=it,t[150]=xn,t[151]=Sn,t[152]=Cn,t[153]=wn,t[154]=Tn,t[155]=En,t[156]=On,t[157]=kn,t[158]=An,t[159]=jn,t[160]=Mn):Mn=t[160];let Nn;t[161]===wt?Nn=t[162]:(Nn=wt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=wt,t[162]=Nn);let Pn;t[163]!==_t||t[164]!==Y||t[165]!==gt||t[166]!==_||t[167]!==K?(Pn=!gt&&!Y&&(!K||_t)?(0,$.jsx)(mr,{label:_}):null,t[163]=_t,t[164]=Y,t[165]=gt,t[166]=_,t[167]=K,t[168]=Pn):Pn=t[168];let Fn;t[169]!==Y||t[170]!==$t?(Fn=Y?(0,$.jsx)(hr,{onRetry:$t}):null,t[169]=Y,t[170]=$t,t[171]=Fn):Fn=t[171];let In;t[172]!==wt||t[173]!==gn||t[174]!==yn||t[175]!==bn||t[176]!==Mn||t[177]!==Nn||t[178]!==Pn||t[179]!==Fn?(In=(0,$.jsxs)(`div`,{"aria-busy":wt,"data-app-block-ready-timeout":gn,className:yn,style:bn,children:[Mn,Nn,Pn,Fn]}),t[172]=wt,t[173]=gn,t[174]=yn,t[175]=bn,t[176]=Mn,t[177]=Nn,t[178]=Pn,t[179]=Fn,t[180]=In):In=t[180];let Z;t[181]!==_||t[182]!==wt||t[183]!==N?(Z=wt&&N===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:_??(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=_,t[182]=wt,t[183]=N,t[184]=Z):Z=t[184];let Rn;return t[185]!==mn||t[186]!==hn||t[187]!==In||t[188]!==Z?(Rn=(0,$.jsxs)(`div`,{className:mn,children:[hn,In,Z]}),t[185]=mn,t[186]=hn,t[187]=In,t[188]=Z,t[189]=Rn):Rn=t[189],Rn}function fr(e){return e+1}function pr(e){return e+1}function mr(e){"use forget";let t=(0,gr.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(b,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function hr(e){"use forget";let t=(0,gr.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(z,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(j,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var gr,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{gr=se(),h(),Xe(),Pe(),Te(),x(),C(),Ye(),P(),K(),Le(),Fe(),Ee(),qe(),a(),De(),ut(),ct(),_e(),g(),r(),o(),ye(),ne(),M(),y(),c(),Qe(),dt(),Ce(),We(),O(),N(),Q=n(ue()),L(),pn(),It(),yt(),En(),B(),An(),_n(),Rn(),nt(),Ne(),V(),rt(),Gn(),$=oe(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,gr.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:c}=e,l;t[0]!==n||t[1]!==i||t[2]!==o?(l=n&&o!=null?(0,$.jsx)(ur,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===c?d=t[5]:(d=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=d);let f=d,p=a&&c!=null,m;t[6]===u?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(s,{label:n,children:(0,$.jsx)(j,{type:`button`,icon:ze,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(ft,{category:ge.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},Pr=e=>{"use forget";let t=(0,gr.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(pt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(ft,{category:ge.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{Fr as a,xn as c,xt as d,It as f,Y as h,Kn as i,Sn as l,vt as m,mr as n,zn as o,yt as p,dr as r,Gn as s,Yn as t,En as u};
//# sourceMappingURL=e3b746a6-hqwocii4jfpcgj8s.js.map