"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[6014],{2630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(4848),o=t(8453);const a={},i="Servers on a private network without public access. Do we need a Bastion host?",r={id:"SystemManager/Servers on a private network without public access",title:"Servers on a private network without public access. Do we need a Bastion host?",description:"No. The Session Manager help us. We can connect to the instancje if we connecting service with our VPC.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/SystemManager/04-Servers on a private network without public access.md",sourceDirName:"SystemManager",slug:"/SystemManager/Servers on a private network without public access",permalink:"/en/docs/SystemManager/Servers on a private network without public access",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SystemManager/04-Servers on a private network without public access.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to connect via Session Manager?",permalink:"/en/docs/SystemManager/How to connect via Session Manager"},next:{title:"Conclusion",permalink:"/en/docs/SystemManager/conclusion"}},c={},l=[{value:"Ways of connecting in a private network",id:"ways-of-connecting-in-a-private-network",level:2},{value:"VPC endpoint",id:"vpc-endpoint",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"servers-on-a-private-network-without-public-access-do-we-need-a-bastion-host",children:"Servers on a private network without public access. Do we need a Bastion host?"})}),"\n",(0,s.jsx)(n.p,{children:"No. The Session Manager help us. We can connect to the instancje if we connecting service with our VPC."}),"\n",(0,s.jsx)(n.h2,{id:"ways-of-connecting-in-a-private-network",children:"Ways of connecting in a private network"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"If the instance have access to the internet, we can installed earile some agent wich set up connection."}),"\n",(0,s.jsx)(n.li,{children:"If the instance don't have access to the internet, we can use some other Bastion Host which have access."}),"\n",(0,s.jsx)(n.li,{children:"We have VPN connection to this network."}),"\n",(0,s.jsx)(n.li,{children:"If we don't have access to the ineternet from this server, other servers, bastion host, vpn-a we can use Session Manager"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"vpc-endpoint",children:"VPC endpoint"}),"\n",(0,s.jsx)(n.p,{children:"We need to set upd connection service with vpc.\nIf you have more than one subnet in the same Availability Zone, you don't need to create VPC endpoints for the extra subnets. Any other subnets within the same Availability Zone can access and use the interface. One endpoint on the VPC should be enough if you have the ability to connect from another subnet to a subnet with endpoints."}),"\n",(0,s.jsx)(n.p,{children:"List of endpoints:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.ssm (Interface)"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.ec2messages (Interface)"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.ec2 (Interface) - without the EC2 endpoint defined, a call to enumerate attached Amazon EBS volumes fails"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.ssmmessages (Interface)"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.kms (Interface)"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.logs (Interface)"}),"\n",(0,s.jsx)(n.li,{children:"com.amazonaws.region.s3 (Gateway)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"VPC endpoint policies in AWS allow you to control access to AWS services from within your VPC. The policies are essentially a set of permissions that define which resources in your VPC are allowed to access which AWS services.\nIt is important to use VPC endpoint policies to ensure that your resources are only accessing the AWS services that are required for their function and to ensure that access to these services is secure and controlled. This helps prevent unauthorized access to your resources and also helps to reduce the attack surface of your VPC."}),"\n",(0,s.jsx)(n.p,{children:"Read more:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["VPC Endpoints: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-create-vpc.html",children:"https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-create-vpc.html"})]}),"\n",(0,s.jsxs)(n.li,{children:["CloudFormation AWS::EC2::VPCEndpoint: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html",children:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpoint.html"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);