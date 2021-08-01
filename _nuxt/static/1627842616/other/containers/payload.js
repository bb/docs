__NUXT_JSONP__("/other/containers", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{document:{slug:"containers",description:"",title:"Our container image",position:5.2,category:"Other Notes",toc:[{id:A,depth:o,text:B},{id:C,depth:o,text:D},{id:E,depth:p,text:F},{id:G,depth:p,text:H},{id:I,depth:p,text:J},{id:K,depth:p,text:L},{id:M,depth:p,text:N},{id:O,depth:o,text:P},{id:Q,depth:o,text:R},{id:S,depth:o,text:T}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"This page contains information about how Postal actually is packaged and run within a container."}]},{type:a,value:c},{type:b,tag:q,props:{id:A},children:[{type:b,tag:f,props:{href:"#wheres-the-container",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Postal is packaged and hosted at "},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:V},{type:b,tag:d,props:{},children:[{type:a,value:"latest"}]},{type:a,value:" tag will always track the "},{type:b,tag:d,props:{},children:[{type:a,value:"main"}]},{type:a,value:" branch within the repository and therefore will have the latest copy of the application. It is not recommended to use this tag in production because you may start using it at any time without noticing."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Each version of Postal will also be tagged, for example, "},{type:b,tag:d,props:{},children:[{type:a,value:"2.0.0"}]},{type:a,value:". We always recommend using a version tag in production. To upgrade, you simply need to start using the newer version of the container and be sure to run the "},{type:b,tag:d,props:{},children:[{type:a,value:"upgrade"}]},{type:a,value:" command. You can view all the tags which exist "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fpostalserver\u002Fpostal\u002Fpkgs\u002Fcontainer\u002Fpostal",rel:[w,x,y],target:z},children:[{type:a,value:"on GitHub"}]},{type:a,value:" and in "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fpostalserver\u002Fpostal\u002Fblob\u002Fmain\u002FCHANGELOG.md",rel:[w,x,y],target:z},children:[{type:a,value:"our CHANGELOG"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:q,props:{id:C},children:[{type:b,tag:f,props:{href:"#what-processes-need-to-run",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There are 5 processes that need to be running for a successful Postal installation. All processes are run within the same image ("},{type:b,tag:d,props:{},children:[{type:a,value:U}]},{type:a,value:"). The table below identifies the processes."}]},{type:a,value:c},{type:b,tag:r,props:{id:E},children:[{type:b,tag:f,props:{href:"#the-web-server",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"postal web-server"}]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]},{type:a,value:" 5000"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This is the main web server that handles all web traffic for Postal's admin interface and open\u002Fclick tracking requests. By default, it listens on port 5000 but this can be configured in the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" file by changing the "},{type:b,tag:d,props:{},children:[{type:a,value:"web_server.port"}]},{type:a,value:" option."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can run multiple web servers and load balance between them to add additional capacity for web requests."}]},{type:a,value:c},{type:b,tag:r,props:{id:G},children:[{type:b,tag:f,props:{href:"#the-smtp-server",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"postal smtp-server"}]}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]},{type:a,value:" 25"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Capabilities required:"}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"NET_BIND_SERVICE"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This is the main SMTP server for receiving messages from clients and other MTAs. As with the web server, you can configure this to run on any port by changing the "},{type:b,tag:d,props:{},children:[{type:a,value:"smtp_server.port"}]},{type:a,value:" option in the "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" config file."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can run multiple SMTP servers and load balance between them to add additional capacity for SMTP connections."}]},{type:a,value:c},{type:b,tag:r,props:{id:I},children:[{type:b,tag:f,props:{href:"#the-workers",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"postal worker"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This runs a worker which will receive jobs from the message queue. Essentially, this handles processing all incoming and outgoing e-mail. If you're needing to process lots of e-mails, you may wish to run more than one of these. You can run as many of these as you wish."}]},{type:a,value:c},{type:b,tag:r,props:{id:K},children:[{type:b,tag:f,props:{href:"#the-cron",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"postal cron"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:X}]},{type:a,value:" It will automatically create jobs at appropriate times in order to handle scheduled actions. Running more of these will not increase the capacity of your system. Running none of them will cause many problems."}]},{type:a,value:c},{type:b,tag:r,props:{id:M},children:[{type:b,tag:f,props:{href:"#the-message-re-queuer",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:t}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"postal requeuer"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:X}]},{type:a,value:"  This process monitors the queues and ensures that messages that need to be retried are re-added to the message queue at the appropriate times. Like the cron, do not run more than one of these processes."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:"\nBe sure to configure your system to only allow a single "},{type:b,tag:d,props:{},children:[{type:a,value:"cron"}]},{type:a,value:" and "},{type:b,tag:d,props:{},children:[{type:a,value:"requeuer"}]},{type:a,value:" process to be running at the same time.\n"}]},{type:a,value:c},{type:b,tag:q,props:{id:O},children:[{type:b,tag:f,props:{href:"#configuration",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The image exists all configuration to be mounted at "},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fconfig"}]},{type:a,value:". At a minimum, this directory must contain a "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" and a "},{type:b,tag:d,props:{},children:[{type:a,value:Y}]},{type:a,value:". You can see an example "},{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:" in the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fpostalserver\u002Finstall\u002Fblob\u002Fmain\u002Fexamples\u002Fpostal.yml",rel:[w,x,y],target:z},children:[{type:a,value:"installation tool repository"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:V},{type:b,tag:d,props:{},children:[{type:a,value:Y}]},{type:a,value:" can be generated using the following command:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"openssl genrsa -out path\u002Fto\u002Fsigning.key 2018\n"}]}]}]},{type:a,value:c},{type:b,tag:q,props:{id:Q},children:[{type:b,tag:f,props:{href:"#networking",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you wish to utilise IP pools, you will need to run Postal using host networking. This is because Postal will need to be able to determine which physical IPs are available to it and be able to send and receiving traffic on those IPs."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you are not using IP pools, there is no need to use host networking and you can expose the ports listed above as appropriate."}]},{type:a,value:c},{type:b,tag:q,props:{id:S},children:[{type:b,tag:f,props:{href:"#waiting-for-services",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The container's entrypoint supports waiting for external services to be ready before starting the underlying process. To use this you need to set the ``WAIT_FOR_TARGETS"},{type:b,tag:d,props:{},children:[{type:a,value:"environment variable with a list of services and ports. For example,"}]},{type:a,value:"mariadb:3306"},{type:b,tag:d,props:{},children:[{type:a,value:", replacing "}]},{type:a,value:"mariadb` with the hostname or IP of your MariaDB server. You can specify multiple endpoint by separating them with a space."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The default maximum time to wait is 30 seconds, you can override this using the "},{type:b,tag:d,props:{},children:[{type:a,value:"WAIT_FOR_TIMEOUT"}]},{type:a,value:" environment variable."}]}]},dir:"\u002Fen\u002Fother",path:"\u002Fen\u002Fother\u002Fcontainers",extension:".md",createdAt:Z,updatedAt:Z,to:"\u002Fother\u002Fcontainers"},prev:{slug:"wildcards-and-address-tags",title:"Wildcards & Address Tags",to:"\u002Fother\u002Fwildcards-and-address-tags"},next:null}],fetch:{},mutations:[]}}("text","element","\n","code","p","a","true",-1,"span","icon","icon-link","strong","li"," ",2,3,"h2","h3","ul","Command:","postal.yml",".","nofollow","noopener","noreferrer","_blank","wheres-the-container","Where's the container?","what-processes-need-to-run","What processes need to run?","the-web-server","The web server","the-smtp-server","The SMTP server","the-workers","The worker(s)","the-cron","The cron","the-message-re-queuer","The message re-queuer","configuration","Configuration","networking","Networking","waiting-for-services","Waiting for services","ghcr.io\u002Fpostalserver\u002Fpostal","The ","Ports:","There must only be one of these running.","signing.key","2021-08-01T18:29:46.008Z")));