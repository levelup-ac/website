"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[737],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return t?a.createElement(g,r(r({ref:n},m),{},{components:t})):a.createElement(g,r({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const s={sidebar_label:"A: Basic Context",tags:["partial"]},r="Load Modules and SUM",i={unversionedId:"skill-based/golang/learn-the-basic/A-basic-context",id:"skill-based/golang/learn-the-basic/A-basic-context",title:"Load Modules and SUM",description:"",source:"@site/docs/skill-based/golang/01-learn-the-basic/A-basic-context.mdx",sourceDirName:"skill-based/golang/01-learn-the-basic",slug:"/skill-based/golang/learn-the-basic/A-basic-context",permalink:"/skill-based/golang/learn-the-basic/A-basic-context",draft:!1,tags:[{label:"partial",permalink:"/tags/partial"}],version:"current",frontMatter:{sidebar_label:"A: Basic Context",tags:["partial"]},sidebar:"tutorialSidebar",previous:{title:"Z: Hands On",permalink:"/skill-based/python/learn-the-basics/Z-hands-on"},next:{title:"0: MAX",permalink:"/tool-set/workstation/max"}},l={},c=[],m={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-modules-and-sum"},"Load Modules and SUM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n        "encoding/json"\n        "flag"\n        "fmt"\n        "io/ioutil"\n        "log"\n\n        v1 "k8s.io/api/core/v1"\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'main.go:10:5: cannot find package "k8s.io/api/core/v2" in any of:\n        ~/.asdf/installs/golang/1.18.4/go/src/k8s.io/api/core/v2 (from $GOROOT)\n        ~/gocode/src/k8s.io/api/core/v2 (from $GOPATH)\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'// initialize the module k8s.io/api/core\n// needed in main.go line v1 "k8s.io/..."\ngo mod init k8s.io/api/core\n\n// add missing and remove unused modules\ngo mod tidy\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#!/usr/bin/env python\xa0\n\nimport os, yaml, time\xa0\n\n#def my_input():\xa0\n\n#\xa0 raw_workload_objects = 'oc get po -A -o yaml >> ./raw-workload-objects.yaml'\xa0\n\n#\xa0 os.system(raw_workload_objects)\xa0\n\ndef my_output():\xa0\n\n\xa0 use_workload_objects = 'cat ./raw-workload-objects.csv | grep -E \"gsnetcloud|PodName|PodNamespace|ContainerName|ContainerImage\" > use-workload-objects.csv'\xa0\n\n\xa0 os.system(use_workload_objects)\xa0\n\ndef my_loop():\xa0\n\n\xa0 with open('raw-workload-objects.yaml') as f:\xa0\n\n\xa0 \xa0 \xa0 # pod_list = yaml.load(f,Loader=yaml.FullLoader)\xa0\n\n\xa0 \xa0 \xa0 pod_list = yaml.safe_load(f)\xa0\n\n\xa0 \xa0 \xa0 print(type(pod_list))\xa0\n\n#\xa0 for key in pod_list:\xa0\n\n#\xa0 \xa0 \xa0 print(key)\xa0\n\n\xa0 # file = open(\"./raw-workload-objects.csv\", \"w\")\xa0\n\n\xa0 with open('raw-workload-objects.csv', \"w\") as file:\xa0\n\n\xa0 \xa0 \xa0 file.write(\"PodName\\tPodNamespace\\tContainerName\\tContainerImage\\n\")\xa0\n\n\xa0 \xa0 \xa0 # for item in pod_list['items']:\xa0\n\n\xa0 \xa0 \xa0 #\xa0 \xa0 print(item.keys())\xa0\n\n\xa0 \xa0 \xa0 numline = 0\xa0\n\n\xa0 \xa0 \xa0 for item in pod_list['items']:\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 # time.sleep(0.1)\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 print(item.keys())\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 pod_name = item['metadata']['name']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 pod_namespace = item['metadata']['namespace']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 container_list = item['spec']['containers']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 status_list = None\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 if 'containerStatuses' in item['status']:\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 status_list = item['status']['containerStatuses']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 #print(pod_name)\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 #print(pod_namespace)\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 #print(container_list)\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 for container in container_list:\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 container_name = container['name']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 if status_list is not None:\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 for status in status_list:\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 container_image = status['image']\xa0\n\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 file.write(pod_name + '\\t' + pod_namespace + '\\t' + container_name + '\\t' + container_image + '\\n')\xa0\n\n# my_input()\xa0\n\nmy_loop()\xa0\n\nmy_output()\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  pod_name  '.items[].metadata.name'\n    cat samplePodList.json | jq '.items[].metadata.name'\n    jq -r '.items[].metadata.name' samplePodList.json\n\n  pod_namespace '.items[].metadata.namespace'\n    cat samplePodList.json | jq '.items[].metadata.namespace'\n    jq -r '.items[].metadata.namespace' samplePodList.json\n\n  container_name '.items[].spec.containers[].name'\n    cat samplePodList.json | jq '.items[].spec.containers[].name'\n    jq -r '.items[].spec.containers[].name' samplePodList.json\n\n  container_image '.items[].status.containerStatuses[].image'\n    cat samplePodList.json | jq '.items[].status.containerStatuses[].image'\n    jq -r '.items[].spec.containers[].name' samplePodList.json\n\n  pod_phase: .items[].status.phase \n    cat samplePodList.json | jq '.items[].status.phase'\n    jq -r '.items[].status.phase' samplePodList.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Segun hemos hablado, confirmarte que mi ultimo dia en el squad sera el viernes 4 de noviembre.\n\nDesde ya agradecerte la oprtunidad de avanzar profecionalmente en cada uno de los proyectos y tareas encomendadas.\n\nAnibal Aguila\n\n\n\nProduction - tools\ncloud - tools\nVictor\n\n")))}p.isMDXComponent=!0}}]);