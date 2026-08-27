const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.BmTt88_r.js","_astro/chunk-Y2CYZVJY.DsF7k-Jl.js","_astro/src.JYMBGpMX.js","_astro/rolldown-runtime.Bh1tDfsg.js","_astro/chunk-WYO6CB5R.SKug71Mb.js","_astro/chunk-ICXQ74PX.BU0NOcyQ.js","_astro/dist.CxP-j5Kx.js","_astro/chunk-VAUOI2AC.9LyXrF_a.js","_astro/chunk-HOUHSVGY.D5oqKgmY.js","_astro/chunk-Q4XR5HBZ.BEWS4evQ.js","_astro/chunk-7BUUIJ7U.CAhmNhj7.js","_astro/chunk-OGEWGWER.EKFsZ_zV.js","_astro/chunk-C7G6YPKG.Yo4OCXpQ.js","_astro/chunk-ZGVPDNZ5.BhBkPML6.js","_astro/rough.esm.CSKSodPl.js","_astro/chunk-52WLFC77.0EvueeZz.js","_astro/line.DxDkERUc.js","_astro/path.BWPyau1x.js","_astro/array.BifhSqXX.js","_astro/chunk-FWX5IMBZ.libKNw8b.js","_astro/chunk-ZIRB5QZD.Dh20_f-h.js"])))=>i.map(i=>d[i]);
var e={},t=new Set,n=new WeakSet,r=!1,i=`hover`,a=!1;function o(e){a||(a=!0,r??=e?.prefetchAll??!1,i??=e?.defaultStrategy??`hover`,s(),c(),l(),d())}function s(){for(let e of[`touchstart`,`mousedown`])document.addEventListener(e,e=>{let t=e.target.closest(`a`);m(t,`tap`)&&f(t.href,{ignoreSlowConnection:!0})},{passive:!0})}function c(){let e;document.body.addEventListener(`focusin`,e=>{let n=e.target.closest(`a`);m(n,`hover`)&&t(n.href)},{passive:!0}),document.body.addEventListener(`focusout`,r,{passive:!0}),g(()=>{for(let e of document.getElementsByTagName(`a`))n.has(e)||m(e,`hover`)&&(n.add(e),e.addEventListener(`mouseenter`,e=>t(e.currentTarget.href),{passive:!0}),e.addEventListener(`mouseleave`,r,{passive:!0}))});function t(t){e&&clearTimeout(e),e=setTimeout(()=>{f(t)},80)}function r(){e&&=(clearTimeout(e),0)}}function l(){let e;g(()=>{for(let t of document.getElementsByTagName(`a`))n.has(t)||m(t,`viewport`)&&(n.add(t),e??=u(),e.observe(t))})}function u(){let e=new WeakMap;return new IntersectionObserver((t,n)=>{for(let r of t){let t=r.target,i=e.get(t);r.isIntersecting?(i&&clearTimeout(i),e.set(t,setTimeout(()=>{n.unobserve(t),e.delete(t),f(t.href)},300))):i&&(clearTimeout(i),e.delete(t))}})}function d(){g(()=>{for(let e of document.getElementsByTagName(`a`))m(e,`load`)&&f(e.href)})}function f(n,r){n=n.replace(/#.*/,``);let i=r?.ignoreSlowConnection??!1;if(p(n,i))if(t.add(n),document.createElement(`link`).relList?.supports?.(`prefetch`)){let e=document.createElement(`link`);e.rel=`prefetch`,e.setAttribute(`href`,n),document.head.append(e)}else{let t=new Headers;for(let[n,r]of Object.entries(e))t.set(n,r);fetch(n,{priority:`low`,headers:t}).catch(()=>{})}}function p(e,n){if(!navigator.onLine||!n&&h())return!1;try{let n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!t.has(e)}catch{}return!1}function m(e,t){if(e?.tagName!==`A`)return!1;let n=e.dataset.astroPrefetch;return n===`false`?!1:t===`tap`&&(n!=null||r)&&h()?!0:n==null&&r||n===``?t===i:n===t}function h(){if(`connection`in navigator){let e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function g(e){e();let t=!1;document.addEventListener(`astro:page-load`,()=>{if(!t){t=!0;return}e()}),new MutationObserver(t=>{for(let n of t)for(let t of n.addedNodes)if(t instanceof Element&&(t.tagName===`A`||t.querySelector?.(`a`))){e();return}}).observe(document.body,{childList:!0,subtree:!0})}var _=(function(){let e=typeof document<`u`&&document.createElement(`link`).relList;return e&&e.supports&&e.supports(`modulepreload`)?`modulepreload`:`preload`})(),v=function(e){return`/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=v(t,n),t=s(t),t in y)return;y[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=(...e)=>console.log(`[astro-mermaid]`,...e),S=(...e)=>console.error(`[astro-mermaid]`,...e),C=()=>document.querySelectorAll(`pre.mermaid`).length>0,w=null;async function T(){return w||(x(`Loading mermaid.js...`),w=b(async()=>{let{default:e}=await import(`./mermaid.core.BmTt88_r.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(async({default:e})=>{let t=[];if(t&&t.length>0){x(`Registering`,t.length,`icon packs`);let n=t.map(e=>e.icons?{name:e.name,icons:e.icons}:{name:e.name,loader:()=>fetch(e.url).then(e=>e.json())});await e.registerIconPacks(n)}return e}).catch(e=>{throw S(`Failed to load mermaid:`,e),w=null,e}),w)}var E={startOnLoad:!1,theme:`default`,flowchart:{curve:`basis`,padding:20},themeVariables:{fontFamily:`Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif`}},D={light:`default`,dark:`dark`};async function O(){x(`Initializing mermaid diagrams...`);let e=document.querySelectorAll(`pre.mermaid`);if(x(`Found`,e.length,`mermaid diagrams`),e.length===0)return;let t=await T(),n=E.theme;{let e=document.documentElement.getAttribute(`data-theme`),t=document.body.getAttribute(`data-theme`);n=D[e||t]||E.theme,x(`Using theme:`,n,`from`,e?`html`:`body`)}t.initialize({...E,theme:n,gitGraph:{mainBranchName:`main`,showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(let n of e){if(n.hasAttribute(`data-processed`))continue;n.hasAttribute(`data-diagram`)||n.setAttribute(`data-diagram`,n.textContent||``);let e=n.getAttribute(`data-diagram`)||``,r=`mermaid-`+Math.random().toString(36).slice(2,11);x(`Rendering diagram:`,r);try{let i=document.getElementById(r);i&&i.remove();let{svg:a}=await t.render(r,e);n.innerHTML=a,n.setAttribute(`data-processed`,`true`),x(`Successfully rendered diagram:`,r)}catch(e){S(`Mermaid rendering error for diagram:`,r,e);let t=document.createElement(`div`);t.style.cssText=`color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;`;let i=document.createElement(`strong`);i.textContent=`Error rendering diagram:`;let a=document.createElement(`span`);a.textContent=` `+(e.message||`Unknown error`),t.appendChild(i),t.appendChild(a),n.textContent=``,n.appendChild(t),n.setAttribute(`data-processed`,`true`)}}}C()?(x(`Mermaid diagrams detected on initial load`),O()):x(`No mermaid diagrams found on initial load`);{let e=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`data-theme`&&(document.querySelectorAll(`pre.mermaid[data-processed]`).forEach(e=>{e.removeAttribute(`data-processed`)}),O())});e.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),e.observe(document.body,{attributes:!0,attributeFilter:[`data-theme`]})}document.addEventListener(`astro:after-swap`,()=>{x(`View transition detected`),C()&&O()});var k=document.createElement(`style`);k.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `,document.head.appendChild(k),o();export{b as t};