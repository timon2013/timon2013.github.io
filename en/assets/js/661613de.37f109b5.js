"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[8831],{3824:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var o=i(4848),r=i(8453);const s={},c="Typy Sieci w Dockerze",t={id:"Docker/network-types",title:"Typy Sieci w Dockerze",description:"Docker oferuje r\xf3\u017cne typy sieci, kt\xf3re umo\u017cliwiaj\u0105 kontenerom komunikacj\u0119 zar\xf3wno mi\u0119dzy sob\u0105, jak i z zewn\u0119trznymi sieciami. Poni\u017cej om\xf3wiono trzy g\u0142\xf3wne typy sieci: bridge, host i overlay.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Docker/04-network-types.md",sourceDirName:"Docker",slug:"/Docker/network-types",permalink:"/en/docs/Docker/network-types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/04-network-types.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architektura Dockera",permalink:"/en/docs/Docker/architecture"},next:{title:"Zastosowanie Dockera",permalink:"/en/docs/Docker/applications-of-docker"}},a={},d=[{value:"Bridge Network",id:"bridge-network",level:4},{value:"Host Network",id:"host-network",level:4},{value:"Overlay Network",id:"overlay-network",level:4},{value:"Podsumowanie",id:"podsumowanie",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"typy-sieci-w-dockerze",children:"Typy Sieci w Dockerze"}),"\n",(0,o.jsxs)(n.p,{children:["Docker oferuje r\xf3\u017cne typy sieci, kt\xf3re umo\u017cliwiaj\u0105 kontenerom komunikacj\u0119 zar\xf3wno mi\u0119dzy sob\u0105, jak i z zewn\u0119trznymi sieciami. Poni\u017cej om\xf3wiono trzy g\u0142\xf3wne typy sieci: ",(0,o.jsx)(n.code,{children:"bridge"}),", ",(0,o.jsx)(n.code,{children:"host"})," i ",(0,o.jsx)(n.code,{children:"overlay"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"bridge-network",children:"Bridge Network"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Bridge"})," to domy\u015blny typ sieci, kt\xf3ry Docker tworzy podczas instalacji. Umo\u017cliwia komunikacj\u0119 mi\u0119dzy kontenerami na tym samym ho\u015bcie, ale izoluje kontenery od zewn\u0119trznych sieci."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Zastosowanie"}),": Idealny do uruchamiania wielu kontener\xf3w na jednym ho\u015bcie, kt\xf3re musz\u0105 komunikowa\u0107 si\u0119 ze sob\u0105. Ka\u017cdy kontener pod\u0142\u0105czony do sieci ",(0,o.jsx)(n.code,{children:"bridge"})," otrzymuje prywatny adres IP."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Przyk\u0142ad u\u017cycia"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker network create my_bridge_network\ndocker run -d --name my_container --network my_bridge_network my_image\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Powy\u017csze polecenia tworz\u0105 sie\u0107 mostkow\u0105 ",(0,o.jsx)(n.code,{children:"my_bridge_network"})," i uruchamiaj\u0105 kontener ",(0,o.jsx)(n.code,{children:"my_container"})," pod\u0142\u0105czony do tej sieci."]}),"\n",(0,o.jsx)(n.h4,{id:"host-network",children:"Host Network"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Host"})," to typ sieci, w kt\xf3rym kontener dzieli sie\u0107 z hostem. Kontener u\u017cywa adresu IP hosta, co eliminuje warstw\u0119 wirtualizacji sieciowej."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Zastosowanie"}),": U\u017cywane, gdy wymagana jest maksymalna wydajno\u015b\u0107 sieciowa lub gdy kontener musi bezpo\u015brednio uzyska\u0107 dost\u0119p do sieci hosta. Mo\u017ce by\u0107 stosowane do aplikacji, kt\xf3re potrzebuj\u0105 bezpo\u015bredniego dost\u0119pu do interfejs\xf3w sieciowych hosta."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Przyk\u0142ad u\u017cycia"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d --name my_container --network host my_image\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Powy\u017csze polecenie uruchamia kontener ",(0,o.jsx)(n.code,{children:"my_container"}),", kt\xf3ry u\u017cywa sieci hosta."]}),"\n",(0,o.jsx)(n.h4,{id:"overlay-network",children:"Overlay Network"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Overlay"})," to typ sieci, kt\xf3ry umo\u017cliwia komunikacj\u0119 mi\u0119dzy kontenerami na r\xf3\u017cnych hostach. Jest cz\u0119sto u\u017cywany w klastrach Docker Swarm i Kubernetes."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Zastosowanie"}),": Idealny do tworzenia rozproszonych aplikacji, kt\xf3re musz\u0105 komunikowa\u0107 si\u0119 mi\u0119dzy wieloma hostami. U\u017cywa technologii tunelowania, aby po\u0142\u0105czy\u0107 r\xf3\u017cne hosty w jedn\u0105 logiczn\u0105 sie\u0107."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Przyk\u0142ad u\u017cycia"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker network create -d overlay my_overlay_network\ndocker service create --name my_service --network my_overlay_network my_image\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Powy\u017csze polecenia tworz\u0105 sie\u0107 nak\u0142adkow\u0105 ",(0,o.jsx)(n.code,{children:"my_overlay_network"})," i uruchamiaj\u0105 us\u0142ug\u0119 ",(0,o.jsx)(n.code,{children:"my_service"})," pod\u0142\u0105czon\u0105 do tej sieci."]}),"\n",(0,o.jsx)(n.h3,{id:"podsumowanie",children:"Podsumowanie"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bridge Network"}),": Umo\u017cliwia komunikacj\u0119 mi\u0119dzy kontenerami na jednym ho\u015bcie, zapewnia izolacj\u0119 od zewn\u0119trznych sieci."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Host Network"}),": U\u017cywa sieci hosta, zapewniaj\u0105c maksymaln\u0105 wydajno\u015b\u0107, ale bez izolacji."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Overlay Network"}),": Umo\u017cliwia komunikacj\u0119 mi\u0119dzy kontenerami na r\xf3\u017cnych hostach, idealny dla rozproszonych aplikacji."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Ka\u017cdy typ sieci ma swoje specyficzne zastosowania i korzy\u015bci, w zale\u017cno\u015bci od potrzeb aplikacji i architektury systemu."})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var o=i(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);