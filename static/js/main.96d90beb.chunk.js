(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{178:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),s=a(6),l=a(7),c=a(9),d=a(8),u=a(10),m=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Skills"),this.props.data.map((function(e,t){return i.a.createElement("h3",{key:t,className:"tags desc"},e)})))}}]),t}(i.a.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Personal"),this.props.data.map((function(e,t){return i.a.createElement("h3",{key:t,className:"tags desc"},e)})))}}]),t}(i.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Summary"),i.a.createElement("div",{className:"desc"},i.a.createElement("h3",null,this.props.data[0]),i.a.createElement("h3",null,this.props.data[1])))}}]),t}(i.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,this.props.data.name),i.a.createElement("h4",null,this.props.data.desc),i.a.createElement("h4",null,"Cell: ",this.props.data.number),i.a.createElement("h4",null,this.props.data.email),i.a.createElement("a",{href:this.props.data.linkedin},i.a.createElement("img",{alt:"",src:"./in.png"})),i.a.createElement("a",{href:this.props.data.github},i.a.createElement("img",{alt:"",src:"./git.png"})))}}]),t}(i.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Experience"),this.props.data.map((function(e,t){return i.a.createElement("div",{key:t,className:"desc"},i.a.createElement("h2",null,e.title),i.a.createElement("h3",null,e.company),i.a.createElement("h3",null,e.dates),i.a.createElement("h3",null,e.location),i.a.createElement("h3",null,e.desc))})))}}]),t}(i.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Education"),this.props.data.map((function(e,t){return i.a.createElement("div",{key:t,className:"desc"},i.a.createElement("h2",null,e.degree),i.a.createElement("h3",null,e.institution),i.a.createElement("h3",null,e.dates))})))}}]),t}(i.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.data.map((function(e,t){return i.a.createElement("h4",{key:t,className:"tags"},e)})))}}]),t}(i.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Projects"),this.props.data.map((function(e,t){return i.a.createElement("div",{key:t,className:"desc"},i.a.createElement("h2",null,e.title),i.a.createElement(v,{data:e.tags}),i.a.createElement("h4",null,e.desc),""===e.link?null:i.a.createElement("a",{href:e.link,className:"btn btn-primary"},i.a.createElement("b",null,"Go to GitHub Repo")))})))}}]),t}(i.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"Certifications"),i.a.createElement("div",{className:"desc"},this.props.data.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("h2",null,e.title),i.a.createElement("h3",null,e.dates))}))))}}]),t}(i.a.Component),S=a(18);o.a.render(i.a.createElement(y,{data:S.Certifications}),document.getElementById("Certifications")),o.a.render(i.a.createElement(E,{data:S.Projects}),document.getElementById("Projects")),o.a.render(i.a.createElement(b,{data:S.Education}),document.getElementById("Education")),o.a.render(i.a.createElement(f,{data:S.Experience}),document.getElementById("Experience")),o.a.render(i.a.createElement(g,{data:S.Info}),document.getElementById("Info")),o.a.render(i.a.createElement(h,{data:S.Summary}),document.getElementById("Summary")),o.a.render(i.a.createElement(m,{data:S.Skills}),document.getElementById("Skills")),o.a.render(i.a.createElement(p,{data:S.Personal}),document.getElementById("Personal"))},18:function(e){e.exports=JSON.parse('{"Info":{"name":"Vatsal Vora","desc":"DataOps Engineer","address":"10275 Estuary Drive Tampa, FL 33647","number":"(813) 388-0312","email":"vatsalajvora@gmail.com","linkedin":"https://www.linkedin.com/in/vatsal-vora/","github":"https://www.github.com/vatsalvora"},"Summary":["Software Engineering Professional with a strong academic background and industry experience working in US and India. Quick learner with an insatiable appetite for learning new technical skills. Experience working in a startup and corporate environment. Developed applications on mobile and web platforms. Experienced in developing Cloud based solutions. Strong analytic and technical problem solving skills."],"Experience":[{"company":"The Nielsen Company","location":"Tampa, FL","title":"Software Developer","dates":"Sept 2017 - Present","desc":"Orchestrated a Data Pipeline using Apache airflow, AWS Step Functions, AWS DataPipeline, and AWS Lambda. Organized Spark jobs for data ingestion from s3 to Elasticsearch, spring batch jobs to ingest data from legacy databases, and machine learning processes with TensorFlow in the Data Pipeline. Wrote spark jobs for data ingestion from S3 to Cassandra and Elasticsearch. Received Simply Excellent Gold award for working with positive philosophy, acting quickly to eliminate wastage of cloud resources. Created Cassandra and Elasticsearch clusters. Set up backup and restore processes for Elasticsearch and Cassandra. Worked on reducing cloud costs by scheduling weekend shutdowns resulting in savings of 92% for weekend cloud spend. Received Simply Excellent Gold award for \u201cCost savings\u201d. Created DevOps CI/CD pipeline with Jenkins. Created deployment scripts with Ansible and Terraform to AWS Cloud. Designed and developed an application to manage and monitor a Hazelcast Cluster using a React frontend and Spring Boot Microservice backend. The application resulted in projected costs savings of $1 Million in licensing fees. Received Simply Excellent Gold award for going above and beyond planned commitments and taking up a stretch goal."},{"company":"CGS Infotech Solutions","location":"Mumbai, India","title":"Technology Consultant","dates":"July 2015 - June 2017","desc":" Worked on the Automated Interactive Managed Customer Assistance & Response (AIM-CAR) system, a voice-activated customer response app that provides real time conversation with customers. Developed the system using Node.js, Amazon Lambda, and the Alexa Skills Kit. Developed a system for live videography using a 360 degree camera and integrate Virtual Reality content into websites, social media, iOS and Android applications. Developed applications on the iOS and Android platforms. Web development with Javascript, PHP, and HTML5."},{"company":"JPMorgan Chase","location":"Tampa, FL","title":"Summer Technology Analyst Application Developer","dates":"June 2014 - Aug 2014","desc":"Worked on the Automated Clearing House payments project. Configured a Continuous Integration Server with Jenkins to alert the development team when a bad commit to a Subversion repository broke the build. Configured a Maven build for a multi-modal project. Wrote Scripts for three different Operating Systems (Windows, Unix and Mainframe). Performed regression testing on multiple Java applications."},{"company":"Sears Holding Corporation [MetaScale]","location":"San Jose, CA","title":"Analytics Applications Engineer Intern","dates":"June 2013 - Aug 2013","desc":"Developed a real time analytics application using predictive modeling to analyze and predict trends in the incoming high volume data flow of retail revenue. Developed the application using Java J2EE, Teradata, MongoDB, and open source libraries such as Apache Maven, Storm, Trident and Kafka."}],"Education":[{"degree":"Master\'s in Computer Science","institution":"University of Florida","dates":"August 2014 - May 2015"},{"degree":"Bachelor\'s in Computer Science Engineering","institution":"University of Florida","dates":"Aug 2011 - Dec 2014"}],"Projects":[{"title":"Gita (Alexa Skill)","tags":["Node.js","AWS"],"desc":"Developed an Alexa Skill for the Amazon Echo devices using the Node.js SDK for the Alexa Skills Kit. Programmed Alexa to sing verses from the Bhagavad Gita. Worked with the framework to program intents and grab user data into slots. Programmed a Microservice on AWS lambda, hosted audio files on AWS S3, configured logs on AWS CloudWatch, and stored session data on AWS DynamoDB.","link":"https://github.com/vatsalvora/GitaAlexaSkill"},{"title":"QuickSend","tags":["Chrome Extension"],"desc":"An application that allows you to send web links to your friends directly from the web page. You can now share links without ever leaving the webpage. You share the link through a Facebook Message or a Chrome Notification. Used Javascript, Graph API, and Google Cloud Messaging.","link":"https://github.com/HCI-Quick-Send"},{"title":"Hotspot","tags":["Web","iOS","Android","Node.js"],"desc":"Developed a multi-platform application for geo-location based chat groups using Android, iOS, Java, Node.js, MySQL, and Javascript. Created a REST API to transfer data between platforms. Integrated Facebook and Google authentication for secure login.","link":"https://github.com/Drop-it-Like-its-HotSpot"},{"title":"Gift Recommendation System","tags":["Facebook Application"],"desc":"Developed a Facebook App for a Gift Recommendation System using data mining techniques. Integrated Facebook authentication for secure login. System was developed using Graph API, JavaScript, JQuery, Ajax, PHP, Amazon AWS, Linux.","link":"https://github.com/vatsalvora/giftrecfb"},{"title":"Wish Lists","tags":["Android"],"desc":"Developed an Android App for sharing Wish Lists in a SCRUM environment as a part of a 5 member team. Used Android, Java, MySQL, and Facebook\u2019s Graph API. Integrated Facebook authentication for secure login.","link":"https://github.com/vatsalvora/WishList"},{"title":"SIS","tags":["Java","Swing"],"desc":"Developed a student information system using Java, Java Swing Interface, Oracle, and JDBC for students to access grades, register for courses, and update personal information.","link":""},{"title":"Restaurant Reservation System","tags":["Java","Swing"],"desc":"Developed a restaurant reservation system in a 24 hour hackathon to text customers when their seat is open. Built the system using Java Swing, MySQL and the Google Voice API.","link":""}],"Certifications":[{"title":"AWS Certified Developer - Associate","dates":"July 2017"}],"Skills":["Cassandra","Elasticsearch","Spark","Scala","AWS","AWS Step Functions","AWS EMR","AWS DataPipeline","React","Spring","Java","J2EE","JavaScript","Python","PHP","Oracle","Teradata","MongoDB","MySQL","Storm/Trident","Kafka","Matlab","R","SQL","Git","Maven","Node.js","Android","AWS Lambda","Facebook API","Google API"],"Personal":["US Citizen","Reading","Biking","Learning","New Technology","Community/Cultural Work"]}')},84:function(e,t,a){e.exports=a(178)}},[[84,1,2]]]);
//# sourceMappingURL=main.96d90beb.chunk.js.map