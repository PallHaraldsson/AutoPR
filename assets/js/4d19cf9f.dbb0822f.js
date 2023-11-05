"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l.tabItem,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),o=n(7294),l=n(6010),r=n(2466),i=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),w=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var w=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},r,{className:(0,l.Z)("tabs__item",h.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,w.Z)();return o.createElement(g,(0,a.Z)({key:String(t)},e))}},6869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),l=n(4866),r=n(5162);const i={sidebar_position:2},s="\ud83c\udf0a Workflows",u={unversionedId:"reference/workflows",id:"reference/workflows",title:"\ud83c\udf0a Workflows",description:"A workflow is an orchestration of actions.",source:"@site/docs/reference/workflows.mdx",sourceDirName:"reference",slug:"/reference/workflows",permalink:"/reference/workflows",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/workflows.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udca7 Actions",permalink:"/reference/actions"},next:{title:"\ud83c\udfc1 Triggers",permalink:"/reference/triggers"}},p={},c=[{value:"\ud83c\udf31 The Hello World Example",id:"-the-hello-world-example",level:2},{value:"\ud83d\udddd\ufe0f Workflow Skeleton",id:"\ufe0f-workflow-skeleton",level:2},{value:"\ud83c\udfc3\u200d Steps",id:"-steps",level:2},{value:"<code>set_vars</code>",id:"set_vars",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>workflow</code>",id:"workflow",level:3},{value:"<code>if_lambda</code>",id:"if_lambda",level:3},{value:"<code>iterate</code>",id:"iterate",level:3},{value:"\ud83d\ude80 Let&#39;s go!",id:"-lets-go",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-workflows"},"\ud83c\udf0a Workflows"),(0,o.kt)("p",null,"A workflow is an orchestration of actions.\nIt can be triggered by an event, or it can be invoked by another workflow.\nIn this section, we'll walk you through all the building blocks of a workflow."),(0,o.kt)("p",null,"AutoPR comes with a few workflows, which you can find in ",(0,o.kt)("a",{parentName:"p",href:"../workflow-catalogue"},"the workflow catalogue"),"."),(0,o.kt)("p",null,"If you'd like to contribute a workflow, see ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/writing-a-workflow"},"the tutorial"),"."),(0,o.kt)("h2",{id:"-the-hello-world-example"},"\ud83c\udf31 The Hello World Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'hello:\n  outputs:\n    - name\n    - message\n  steps:\n    - set_vars:\n        message:\n          template: "Hello {{ name }}!"\n\nhello_world:\n  outputs:\n    - message\n  steps:\n    - workflow: hello\n      inputs:\n        name:\n          const: "world"\n      outputs:\n        message: message\n')),(0,o.kt)("h2",{id:"\ufe0f-workflow-skeleton"},"\ud83d\udddd\ufe0f Workflow Skeleton"),(0,o.kt)("p",null,"A workflow definition has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"workflow_name:\n  inputs:\n    - input1\n    - input2\n  outputs:\n    - output1\n    - output2\n  steps:\n    - action: action1\n    - workflow: workflow1\n    - action: action2\n    - ...\n")),(0,o.kt)("p",null,"This defines a workflow with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow_name"),",\nwhich has two inputs named ",(0,o.kt)("inlineCode",{parentName:"p"},"input1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"input2"),", and two outputs named ",(0,o.kt)("inlineCode",{parentName:"p"},"output1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"output2"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," section, we operate with inputs to produce the desired outputs."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," are optional."),(0,o.kt)("h2",{id:"-steps"},"\ud83c\udfc3\u200d Steps"),(0,o.kt)("p",null,"There are multiple different possible steps to use in a workflow.\nEach step has a different purpose and syntax."),(0,o.kt)("h3",{id:"set_vars"},(0,o.kt)("inlineCode",{parentName:"h3"},"set_vars")),(0,o.kt)("p",null,"Workflows use the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_vars")," step to declare and construct variables."),(0,o.kt)("p",null,"The same syntax can be used in action and workflow inputs, defaulting to ",(0,o.kt)("inlineCode",{parentName:"p"},"template"),"."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"constants",label:"Constants",mdxType:"TabItem"},(0,o.kt)("p",null,"In AutoPR workflows, you can define constants with the ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," keyword.\nThese hold various types (strings, integers, lists, dictionaries, etc.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'set_constant_workflow:\n  outputs:\n    - int_const\n    - str_const\n    - list_const\n    - dict_const\n  steps:\n    - set_vars:\n        int_const:\n          const: 1\n        str_const:\n          const: "Hello world!"\n        list_const:\n          const:\n            - 1\n            - 2\n            - 3\n        dict_const:\n          const:\n            key1: value1\n            key2: value2\n')),(0,o.kt)("p",null,"Here, we've defined a workflow named ",(0,o.kt)("inlineCode",{parentName:"p"},"set_constant_workflow")," that defines and outputs four constants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int_const")," with value ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"str_const")," with value ",(0,o.kt)("inlineCode",{parentName:"li"},'"Hello world!"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"list_const")," with value ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dict_const")," with value ",(0,o.kt)("inlineCode",{parentName:"li"},'{"key1": "value1", "key2": "value2"}'))),(0,o.kt)("p",null,"You'll notice a similar pattern in the other examples as well.")),(0,o.kt)(r.Z,{value:"templates",label:"Templates",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"template")," uses Jinja2 templating to generate the variable's value. They can be useful when you already have a variable\nthat you want to use as a template for another variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"set_template_workflow:\n  outputs:\n    - templated_var\n  steps:\n    - set_vars:\n        var_to_template:\n          const: \"World\"\n        templated_var:\n          template: 'Hello, {{ template }}!'\n"))),(0,o.kt)(r.Z,{value:"lambdas",label:"Lambdas",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lambda")," is a Python expression that computes the variable's value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'set_lambda_workflow:\n  outputs:\n    - lambda_var\n  steps:\n    - set_vars:\n        first_list:\n          const:\n            - 1\n            - 2\n            - 3\n        second_list:\n          const:\n            - "a"\n            - "b"\n            - "c"\n        lambda_var:\n          lambda: "dict(zip(first_list, second_list))"\n'))),(0,o.kt)(r.Z,{value:"params",label:"Params",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"param")," is an optional field that is assigned the value of the variable if it is not defined in the trigger declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"set_params_workflow:\n  outputs:\n    - param_var\n  steps:\n    - set_vars:\n        param_var:\n          param:\n            name: IGNORE_FILES\n            default: []\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"IGNORE_FILES")," is defined in the trigger, ",(0,o.kt)("inlineCode",{parentName:"p"},"param_var")," will be assigned its value.\nOtherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"param_var")," will be assigned an empty list."),(0,o.kt)("p",null,"In the triggers, such parameters are specified as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'triggers:\n  - name: trigger_name\n    workflow: set_params_workflow\n    params:\n      IGNORE_FILES:\n        - "file1"\n        - "file2"\n'))),(0,o.kt)(r.Z,{value:"vars",label:"Variables",mdxType:"TabItem"},(0,o.kt)("p",null,"If we've got already variable in scope and we want to assign its value to another variable, this is the way to do it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'set_variable_workflow:\n  outputs:\n    - second_variable\n  steps:\n    - set_vars:\n        first_variable:\n          const: "Hello world!"\n        second_variable:\n          var: first_variable\n')))),(0,o.kt)("h3",{id:"action"},(0,o.kt)("inlineCode",{parentName:"h3"},"action")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"action")," is a step that allows you to invoke an action from the ",(0,o.kt)("a",{parentName:"p",href:"../action-catalogue"},"action catalogue"),"."),(0,o.kt)("p",null,"An action is a predefined operation or task that has inputs and outputs."),(0,o.kt)("p",null,"One of the actions that comes with AutoPR is the ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," action, which allows you to execute arbitrary bash commands,\nso we'll use it as an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"bash_workflow:\n  inputs:\n    - message\n  outputs:\n    - stdout\n  steps:\n    - action: bash\n      inputs:\n        command:\n          template: |\n            'echo \"{{ message }}\"'\n      outputs:\n        stdout: stdout\n")),(0,o.kt)("p",null,"Note how the inputs use the same syntax as the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_vars")," step."),(0,o.kt)("p",null,"When this workflow is triggered, it will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," action with the given command and return its output in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," output."),(0,o.kt)("h3",{id:"workflow"},(0,o.kt)("inlineCode",{parentName:"h3"},"workflow")),(0,o.kt)("p",null,"If you build a workflow that performs a specific task, you can invoke it from another workflow with the ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," step.\nThis is particularly useful if you either want to reduce complexity of the workflows or\nreuse some of the workflows you've already defined."),(0,o.kt)("p",null,"The available workflows are listed in the ",(0,o.kt)("a",{parentName:"p",href:"../workflow-catalogue"},"workflow catalogue"),",\nor you can use one of your ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/writing-a-workflow"},"custom-defined workflows"),"."),(0,o.kt)("p",null,"Like invoking an action, invoking a workflow also has inputs and outputs."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"setvarsworkflowinvocation",label:"Vars example",mdxType:"TabItem"},(0,o.kt)("p",null,"Here's an example workflow that combines two variables using the ",(0,o.kt)("inlineCode",{parentName:"p"},"lambda")," keyword:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'set_vars_workflow:\n  inputs:\n    - var1\n    - var2\n  outputs:\n    - var3\n  steps:\n    - set_vars:\n        var3:\n          lambda: "var1 + var2"\n')),(0,o.kt)("p",null,"Now, we can define another workflow, which will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_vars_workflow")," we've just defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"usage_of_set_vars_workflow:\n  outputs:\n    - var3\n  steps:\n    - workflow: set_vars_workflow\n      inputs:\n        var1:\n          const: 1\n        var2:\n          const: 2\n      outputs:\n        var3: var3\n")),(0,o.kt)("p",null,"This workflow, when triggered, will return value ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," in its ",(0,o.kt)("inlineCode",{parentName:"p"},"var3")," output.")),(0,o.kt)(r.Z,{value:"inputs",label:"Bash example",mdxType:"TabItem"},(0,o.kt)("p",null,"We could also invoke the workflow defined above in the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'invocation_of_bash_workflow:\n  outputs:\n    - output\n  steps:\n    - workflow: bash_workflow\n      inputs:\n        message:\n          const: "Hello world!"\n      outputs:\n        stdout: output\n')))),(0,o.kt)("p",null,"Note how the inputs use the same syntax as the ",(0,o.kt)("inlineCode",{parentName:"p"},"set_vars")," step."),(0,o.kt)("h3",{id:"if_lambda"},(0,o.kt)("inlineCode",{parentName:"h3"},"if_lambda")),(0,o.kt)("p",null,"Conditionals are decision-making steps based on certain conditions, the first of which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"if_lambda")," step."),(0,o.kt)("p",null,"Assuming we've got workflows ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize_file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize_dir")," defined, we can use them in a conditional: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"summarize_entry:\n  inputs:\n    - path\n  outputs:\n    - summary\n  steps:\n    - if_lambda: not os.path.isdir(path)\n      then: summarize_file\n      else: summarize_dir\n")),(0,o.kt)("p",null,"This workflow has a very important assumption that the ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize_file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize_dir")," workflows have variable ",(0,o.kt)("inlineCode",{parentName:"p"},"path"),"\nas its only input and ",(0,o.kt)("inlineCode",{parentName:"p"},"summary")," as its only output. This is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"summarize_entry")," workflow uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," input\nand outputs."),(0,o.kt)("h3",{id:"iterate"},(0,o.kt)("inlineCode",{parentName:"h3"},"iterate")),(0,o.kt)("p",null,"If we have a variable that's a list, or we would like to iterate a number of times,\nwe can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"iterate")," step and perform some action or workflow multiple times."),(0,o.kt)("p",null,"Workflows can iterate over lists or ranges, and combine with the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"workflow")," keyword.\nMost notably, they add an ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," keyword to define the name of the variable that will be used in the iteration,\nand change the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," keyword to ",(0,o.kt)("inlineCode",{parentName:"p"},"list_outputs"),", to define the list of outputs that will be returned."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"action",label:"Action iteration over a list",mdxType:"TabItem"},(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"iterate"),"'s value is a variable of type ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", the workflow will use iteration over a list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"iter_var_action:\n  inputs:\n    - list_of_commands\n  outputs:\n    - outputs_list\n    - concatenated_outputs\n  steps:\n    - action: bash\n      iterate: list_of_commands\n      as: cmd\n      inputs:\n        command:\n          template: |\n            '{{ cmd }}'\n      list_outputs:\n        stdout: outputs_list\n    - action: bash\n      inputs:\n        command:\n          template: |\n            echo '{{ outputs_list | join(\"\") }}'\n      outputs:\n        stdout: concatenated_outputs\n")),(0,o.kt)("p",null,"This workflow will execute all the commands in the ",(0,o.kt)("inlineCode",{parentName:"p"},"list_of_commands")," input and return the list of outputs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs_list")," output.")),(0,o.kt)(r.Z,{value:"workflow",label:"Action iteration over a range",mdxType:"TabItem"},(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"iterate"),"'s value is an integer, it will iterate as many times as specified. Variable, listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," field will\nserve as an iterator variable, which will be incremented by one in each iteration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"iter_range_by_index_action:\n  inputs:\n    - list_of_commands\n  outputs:\n    - outputs_list\n    - concatenated_outputs\n  steps:\n    - action: bash\n      iterate: 2\n      as: cmd\n      inputs:\n        command:\n          lambda: '{{ list_of_commands[cmd] }}'\n      list_outputs:\n        stdout: outputs_list\n    - action: bash\n      inputs:\n        command:\n          template: |\n            echo '{{ outputs_list | join(\"\") }}'\n      outputs:\n        stdout: concatenated_outputs\n")))),(0,o.kt)("h2",{id:"-lets-go"},"\ud83d\ude80 Let's go!"),(0,o.kt)("p",null,"Great, now you know how to define workflows. The next step is to ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/writing-a-workflow"},"define your own workflow"),"."))}k.isMDXComponent=!0}}]);