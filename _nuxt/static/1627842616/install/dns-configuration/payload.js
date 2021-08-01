__NUXT_JSONP__("/install/dns-configuration", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{document:{slug:"dns-configuration",description:"",title:"DNS configuration",position:2.3,category:"Installation",toc:[{id:L,depth:r,text:M},{id:N,depth:r,text:O},{id:P,depth:r,text:Q},{id:R,depth:r,text:S},{id:T,depth:r,text:U}],body:{type:"root",children:[{type:b,tag:n,props:{},children:[{type:a,value:"To work properly, you'll need to configure a number of DNS records for your Postal installation. Review the table below and create appropriate DNS records with your DNS provider. You will need to enter the record names you choose in your "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" configuration file."}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"We'll assume for the purposes of this documentation you have both IPv4 and IPv6 available to your server. We'll use the following values in this documentation, you'll need to replace them as appropriate."}]},{type:a,value:d},{type:b,tag:"ul",props:{},children:[{type:a,value:d},{type:b,tag:E,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:F}]},{type:a,value:" - IPv4 address"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:G}]},{type:a,value:" - IPv6 address"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:H}]},{type:a,value:" - the hostname you wish to use to run Postal"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{id:L},children:[{type:b,tag:t,props:{ariaHidden:u,href:"#a-records",tabIndex:v},children:[{type:b,tag:g,props:{className:[w,x]},children:[]}]},{type:a,value:M}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"You'll need these records for accessing the API, management interface & SMTP server."}]},{type:a,value:d},{type:b,tag:y,props:{},children:[{type:a,value:i},{type:b,tag:z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:C}]}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:D,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:H}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:W}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:F}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:H}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:X}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:i}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{id:N},children:[{type:b,tag:t,props:{ariaHidden:u,href:"#spf-record",tabIndex:v},children:[{type:b,tag:g,props:{className:[w,x]},children:[]}]},{type:a,value:O}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"You can configure a global SPF record for your mail server which means domains don't need to each individually reference your server IPs. This allows you to make changes in the future."}]},{type:a,value:d},{type:b,tag:y,props:{},children:[{type:a,value:i},{type:b,tag:z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:C}]}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:D,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"spf.postal.example.com"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"v=spf1 ip4:192.168.1.3 ip6:2a00:1234:abcd:1::3 ~all"}]}]},{type:a,value:f}]},{type:a,value:i}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:"alert",props:{},children:[{type:a,value:"\nYou may wish to replace "},{type:b,tag:h,props:{},children:[{type:a,value:"~all"}]},{type:a,value:" with "},{type:b,tag:h,props:{},children:[{type:a,value:"-all"}]},{type:a,value:" to make the SPF record stricter.\n"}]},{type:a,value:d},{type:b,tag:s,props:{id:P},children:[{type:b,tag:t,props:{ariaHidden:u,href:"#return-path",tabIndex:v},children:[{type:b,tag:g,props:{className:[w,x]},children:[]}]},{type:a,value:Q}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"The return path domain is the default domain that is used as the "},{type:b,tag:h,props:{},children:[{type:a,value:"MAIL FROM"}]},{type:a,value:" for all messages sent through a mail server. You should add DNS records as below."}]},{type:a,value:d},{type:b,tag:y,props:{},children:[{type:a,value:i},{type:b,tag:z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:C}]}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:D,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:W}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:F}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:X}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"v=spf1 a mx include:spf.postal.example.com ~all"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"postal._domainkey.rp.postal.example.com"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Value from "},{type:b,tag:h,props:{},children:[{type:a,value:"postal default-dkim-record"}]}]},{type:a,value:f}]},{type:a,value:i}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{id:R},children:[{type:b,tag:t,props:{ariaHidden:u,href:"#route-domain",tabIndex:v},children:[{type:b,tag:g,props:{className:[w,x]},children:[]}]},{type:a,value:S}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"If you wish to receive incoming e-mail by forwarding messages directly to routes in Postal, you'll need to configure a domain for this just to point to your server using an MX record."}]},{type:a,value:d},{type:b,tag:y,props:{},children:[{type:a,value:i},{type:b,tag:z,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:A}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:C}]}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:D,props:{},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"routes.postal.example.com"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"MX"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"10 postal.example.com"}]}]},{type:a,value:f}]},{type:a,value:i}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{id:T},children:[{type:b,tag:t,props:{ariaHidden:u,href:"#example-postal-configuration",tabIndex:v},children:[{type:b,tag:g,props:{className:[w,x]},children:[]}]},{type:a,value:U}]},{type:a,value:d},{type:b,tag:n,props:{},children:[{type:a,value:"In your "},{type:b,tag:h,props:{},children:[{type:a,value:V}]},{type:a,value:" you should have something like that looks like the below,."}]},{type:a,value:d},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-yaml","line-numbers"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"dns"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:i},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"mx_records"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:"-"}]},{type:a,value:K},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"smtp_server_hostname"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:K},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"track_domain"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:K},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"spf_include"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:" spf.postal.example.com\n  "},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"return_path"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:" rp.postal.example.com\n  "},{type:b,tag:g,props:{className:[j,o,p]},children:[{type:a,value:"route_domain"}]},{type:b,tag:g,props:{className:[j,m]},children:[{type:a,value:q}]},{type:a,value:" routes.postal.example.com\n"}]}]}]}]},dir:"\u002Fen\u002Finstall",path:"\u002Fen\u002Finstall\u002Fdns-configuration",extension:".md",createdAt:Y,updatedAt:Y,to:"\u002Finstall\u002Fdns-configuration"},prev:{slug:"upgrading",title:"Upgrading",to:"\u002Finstall\u002Fupgrading"},next:{slug:"upgrade-to-v2",title:"Upgrading from 1.x",to:"\u002Finstall\u002Fupgrade-to-v2"}}],fetch:{},mutations:[]}}("text","element","\n      ","\n","td","\n    ","span","code","\n  ","token","tr","th","punctuation","p","key","atrule",":",2,"h2","a","true",-1,"icon","icon-link","table","thead","Hostname","Type","Value\n    ","tbody","li","192.168.1.3","2a00:1234:abcd:1::3","postal.example.com","TXT","rp.postal.example.com"," postal.example.com\n  ","a-records","A Records","spf-record","SPF Record","return-path","Return Path","route-domain","Route domain","example-postal-configuration","Example Postal Configuration","postal.yml","A","AAAA","2021-08-01T18:29:46.008Z")));