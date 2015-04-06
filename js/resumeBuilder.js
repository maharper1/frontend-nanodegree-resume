

var bio =
{
	name: "Annette Harper",
	role: "BI Developer",
    contacts:
    {
    	mobile: "812-493-9838",
    	email: "m.annette.harper@gmail.com",
    	github: "maharper1",
    	location: "Madison, Indiana"
    },
  bioPic: "images/Annette-Star-Trek.jpg",
  welcomeMessage: "Experienced Business Intelligence Developer, skilled business analyst, outstanding SQL coder, and more!",
	skills: ["SQL (TSQL, PL/SQL)", "MS BI (SSRS, SSIS, SSAS)", "Tableau", "Oracle BI Publisher", "Crystal Reports"],
  display: function()
  { $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
    $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
    $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
    $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
    $("#header").append(HTMLheaderName.replace("%data%",bio.name));
    $("#header").append(HTMLheaderRole.replace("%data%",bio.role));
    $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

    if(bio.skills.length > 0)
    {
      $("#header").append(HTMLskillsStart);
      for (i in bio.skills)
      {
        $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
      }
    }
  }
};

var work = {
	jobs:
  [
	   {
      work_id: 1,
      employer: "Humana RightSource",
	    title: "Reporting Consultant",
	    location: "Louisville, Kentucky",
	    dates: "December 2010 to May 2014",
	    description: "Technical lead for conversion of pharmacy operations reporting process to ANS ePostRx, a third-party SQL Server application. Reporting was implemented with SSRS. Primary developer of queries used in testing the data being stored and created by the new system for all areas such as operations, accounting, and marketing. Participated in the implementation as a requirements gatherer, a first-hand reporter of application bugs, as a 'translator' of issues uncovered by the business (verifying, writing up, and creating test scripts) and as a collaborator with the vendor working on corrections. Technical lead for replacing pharmacy productivity reporting process with tools from Verint, a third-party provider of productivity and scheduling software. Created data feeds to meet data interface specifications. Developed key management reports (Executive Summary, Work In Progress.) Developed reconciliation process between pharmacy dispensing and operational systems. Responsible for research and educating the reporting staff on technical topics such as SSRS, SSIS, Oracle BI Publisher (data templates, Excel and eText layouts,) performance tuning techniques for Oracle, SQL Server and Sybase queries, and conversion of Sharepoint to version 2010 and Sybase to version 15."
	   },
     {
      work_id: 2,
      employer: "Humana RightSource",
      title: "Reporting Process Manager",
      location: "Louisville, Kentucky",
      dates: "January 2010 to December 2010",
      description: "Grew RightSourceRx reporting team from 1 to 5. Planned, directed, and helped execute the conversion of approximately 130 Crystal Reports to Oracle BI Publisher. Built reporting for the Specialty Pharmacy to echo reporting available for the Mail Pharmacy, working closely with business leaders. Built report request forms for the business using Adobe Livecycle Designer and a report tracking tool in Sharepoint. Implemented Sharepoint as the distribution platform for scheduled reports, utilizing customized document libraries. I requested a role change to consultant in order to focus on technical architecture and to facilitate working remotely. Skills Used •   Oracle BI Publisher •   Sharepoint •   Requirements gathering and report specification creation •   General supervisory skills"
     },
     {
      work_id: 3,
      employer: "The Genealogy Shop, LLC",
      title: "Owner",
      location: "Madison, Indiana",
      dates: "May 2006 to January 2010",
      description: "The Genealogy Shop provided research, training, and software tools for individuals and genealogical societies. Developed facTree©, a commercial genealogy productivity tool for efficiently gathering census data and integrating it into family tree software applications. facTree is a Delphi application utilizing XML for data storage and embedded Crystal Reports XI for reporting. Developed LineageTracker, a genealogy society productivity tool for capturing lineage application information. LineageTracker is an Adobe LiveCycle Designer application. In addition, I have been the editor of the Indiana Genealogist, the quarterly journal of the Indiana Genealogical Society for two years. The journal uses Adobe InDesign for page layout. Other tools used in my business, or in my capacity as secretary of the Jefferson County (Indiana) Genealogical Society, include Quickbooks, Dreamweaver, and Joomla."
     },
     {
      work_id: 4,
      employer: "Sage Link, LLC",
      title: "Technical Author and Independent Consultant",
      location: "Columbus, Ohio",
      dates: "Oct 2002 to May 2006",
      description: "Wrote the CRCP Crystal Reports® Certified Professional All-In-One Exam Guide. This book was published by Osborne/McGraw-Hill in December of 2004. It covered all of the CRCP exam objectives, including all electives, for version 10. Wrote Crystal Reports 9® on Oracle® for McGraw-Hill/Osborne, published September 28, 2003. This is an intermediate to expert level text covering issues specific to the integration of Crystal Reports in an Oracle environment. Topics covered in the book •   Crystal Reports 9, Oracle 8i and 9i •   Extensive testing of connectivity options for feature capabilities and speed •   Overview of Oracle SQL with special attention to advanced SELECT options •   Creation of PL/SQL stored procedures for use with Crystal Reports •   Optimization techniques both from the Crystal side and the Oracle side •   Creation of a generic subreport to display the Oracle execution plan for any report •   Extensive investigation of parse reduction to enhance scalability, including the creation of a generic subreport to display report statistics •   Creation of materialized views •   Use of external tables, heterogeneous services, Oracle Flashback, and updating data via a Crystal Report •   Creation of a Data Dictionary report for use with any Oracle database The book was published two months ahead of schedule due to early delivery of draft chapters. Independent consultant on Crystal Reports and Oracle topics. Created and maintained web site for Sage Link."
     },
     {
      work_id: 5,
      employer: "Checks & Balances",
      title: "Systems Consultant",
      location: "Columbus, Ohio",
      dates: "2001 to 2002",
      description: "Checks & Balances handled external contractors for Nationwide Insurance. This was an intermediate step as I moved towards my own business. Worked with the systems staff of the Nationwide Insurance, Office of Investments. Designed, specified, oversaw development, and debugged several enhancements to the Portfolio Management Workstation (PMW) interface from the office data warehouse. These enhancements included the addition of historical and line of business views (Oracle queries), the addition of derivatives information, and the addition of information concerning assets that the company is committed to purchase, but which have not closed yet. Also developed, and supervised the development of, related Crystal Reports. The project included the development of an exceptions process for derivatives transactions, which required advanced view and report building logic. Skills Used • Analyzed problems (researched data flows through the system to pinpoint problem areas) • Clarified enhancement requests (conversion of portfolio managers’ and traders’ desires into actionable requirements) • Implemented data model changes and designed and coded PL/SQL procedures • Tested changes for accuracy, speed, and fit into existing systems • Designed and developed Crystal Reports for end-users and for quality assurance"
     },
     {
      work_id: 6,
      employer: "Nationwide Insurance Company",
      title: "Division Manager, Office of Investments",
      location: "Columbus, Ohio",
      dates: "2000 to 2001",
      description: "Responsible for the Office of Investments data store and most office reporting. Managed a staff of 10, including database administrators, database developers, systems analysts, and report writers. Continued to expand the office data store, added new asset classes, updated existing feeds because of updated source systems, and expanded existing in-house applications. Skills Used • General supervisory skills • Project management skills (utilized Microsoft Project for task organization) • Acted as senior architect and analyst, supplying design specifications for data modeling, ETL (PL/SQL), user applications (primarily Delphi), for the continuing growth of the data store • Acted as reporting technology and SQL expert for the reporting team"
     },
     {
      work_id: 7,
      employer: "Nationwide Insurance Company",
      title: "Unit Manager, Office of Investments",
      location: "Columbus, Ohio",
      dates: "1998 to 2000",
      description: "Worked with consultants and business experts to design and implement the Office of Investments Operational Data Store. After the initial data modeling with outside consultants, hired and directed an initial staff of 12 contractors in the development of the actual databases, processes and code, to extract data from several investment accounting systems, conform it, and load it into the operational data store on an ongoing daily basis. Developed interfaces between the operational data store and end-user applications. Directed the development of in-house applications to meet the business users’ needs. Developed a web reporting environment. Hired permanent staff. Proposed and implemented the consolidation of disparate reporting areas. Designed and oversaw the development of a web application for department budgeting. Skills Used • Understanding of investment related data including descriptive, trading, and income, for bonds, stocks, mortgages, short term assets, and derivatives • Project management (utilized Microsoft Project) • Requirements gathering and Systems analysis • Data modeling (PowerDesigner) • Application design • Development (PLSQL and Delphi with change control management and help file creation) • Database skills (Oracle for the data warehouse, SQL Server interface to mortgage data, Btrieve interface for  bond information, Informix interface for derivatives database, and Access) • Reporting skills (Crystal Reports) used to rewrite existing production reports and to develop new cross-office reports • OS and web server (Windows NT, IIS, Apache) • Documentation creation (RoboHelp)"
     },
     {
      work_id: 8,
      employer: "Nationwide Insurance Company",
      title: "Information Systems Technical Specialist, Nationwide Services Company",
      location: "Columbus, Ohio",
      dates: "1998",
      description: "Introduced Seagate Crystal Reports and web report distribution to the Producer Data System which tracked agent and customer profile data. Skills Used • Delphi • Crystal Reports • DB2"
     },
     {
      work_id: 9,
      employer: "Nationwide Insurance Company",
      title: "Senior Actuarial Specialist, Investment Actuarial",
      location: "Columbus, Ohio",
      dates: "1985 to 1998",
      description: "My role expanded over time and had three distinct components by 1998. Responsible for various financial reports, including the determination of liabilities by line of business for the Nationwide Life Insurance Company and the Nationwide Life and Annuity Insurance Company, the allocation of net investment income to lines of business for the Nationwide Life and Annuity Insurance Company, and was a significant contributor to the allocation of net investment income for the Nationwide Life Insurance Company. Skills Used • Financial mathematics • Accounting • Quattro Pro/Excel with macro extensions was the primary allocation and analysis tool • Business analysis Responsible for data acquisition and validation from other areas of the Nationwide enterprise. Served as application developer and database designer. Introduced client/server database technology and designed and developed the Investment Actuarial database, including data modeling and data extraction, transformation, and loading, as well as, general database administration. In a related function, designed and implemented a web reporting environment for the department. Skills Used • Delphi • Crystal Reports • Interbase • IIS • Windows NT Server Responsible for workstation and network support, including PC maintenance and troubleshooting, operating systems upgrades, server backup and recovery, network administration, server security, hardware and software procurement and installation, in a mixed Netware and Windows environment. Skills Used • Windows NT Server • Windows clients • Netware As an Actuarial Student I also had one year rotations in Life Actuarial and Corporate Actuarial, but I developed a much stronger interest in the information systems side of the business."
     }
	],
  display: function()
  {
    if(work.jobs.length > 0)
    {
      for (i in work.jobs)
      {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("%iddata%", work.jobs[i].work_id)
                                   + HTMLworkTitle.replace("%data%", work.jobs[i].title)
                                   + HTMLworkLocation.replace("%data%", work.jobs[i].location)
                                   + HTMLworkDates.replace("%data%", work.jobs[i].dates)
                                   + HTMLworkDescription.replace("%data%", work.jobs[i].description).replace("%iddata%", work.jobs[i].work_id)
                                   );
       }
    }
  }
};

var projects =
{
	projects:
  [
	  {
	  	title: "Udacity Online Portfolio",
	  	dates: "2015",
	  	description: "Project 1 for the Udacity Front-End Web Development nanoDegree",
	  	images: ["images/Annette.png"]
	  },
    {
      title: "Crystal Reports Certified Professional Exam Guide",
      dates: "2004",
      description: "Exam guide for the CRCP. Written for McGraw-Hill.",
      images: ["images/CRCP.jpg"]
    }
	],
  display: function()
  {
    if(projects.projects.length > 0)
    {
      for (project in projects.projects)
      {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title)
                                   + HTMLprojectDates.replace("%data%", projects.projects[project].dates)
                                   + HTMLprojectDescription.replace("%data%", projects.projects[project].description)
                                   );
        for (image in projects.projects[project].images)
        {
           $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
      }
    }
  }
};

var education =
{
  schools:
  [
    {name: "Udacity",
     location: "online",
     degree: "nanoDegree",
     majors: ["Front-End Web Development"],
     dates: "Expected to complete in 2015",
     url: "https://udacity.com"
    },
    {name: "University of Louisville",
     location: "Louisville, Kentucky",
     degree: "Graduate Certificate",
     majors: ["Data Mining"],
     dates: "2012 to 2014",
     url: "https://louisville.edu"
    },
    {name: "Hanover College",
     location: "Hanover, Indiana",
     degree: "B.A.",
     majors: ["Mathematics (Magna cum Laude, Honors in Mathematics)"],
     dates: "1986",
     url: "https://hanover.edu"
    },
    {name: "IVY Tech",
     location: "Madison, Indiana",
     degree: "A.A.S.",
     majors: ["Computer Programming"],
     dates: "1982",
     url: "https://ivytech.edu"
    },
  ],
  onlineCourses:
  [
    {
    	title: "JavaScript Basics",
    	school: "Udacity",
    	date: 2015,
    	url: "https://www.udacity.com/course/viewer#!/c-ud804-nd/"
    },
    {
      title: "How to Use Git and GitHub",
      school: "Udacity",
      date: 2015,
      url: "https://www.udacity.com/course/viewer#!/c-ud775-nd/l-3105028581"
    },
    {
      title: "Intro to HTML and CSS",
      school: "Udacity",
      date: 2015,
      url: "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-3342528615/m-3343838767"
    },
    {
      title: "Responsive Images",
      school: "Udacity",
      date: 2015,
      url: "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3574748851/m-3573228854"
    }
  ],
  display: function()
  {
    if(education.schools.length > 0)
    {
      for (school in education.schools)
      {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name)
                                   + HTMLschoolDegree.replace("%data%", education.schools[school].degree)
                                   + HTMLschoolDates.replace("%data%", education.schools[school].dates)
                                   + HTMLschoolLocation.replace("%data%", education.schools[school].location)
                                   );
        for (major in education.schools[school].majors)
        {
           $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
        }
      }
    }
    if(education.onlineCourses.length > 0)
    {
      $(".education-entry:last").append(HTMLonlineClasses);
      for (course in education.onlineCourses)
      {
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
                                   + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
                                   + HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)
                                   + HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
                                   );
      }
    }
  }
};


bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
function inName(){
    var names = bio.name.trim().split(" ");
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(" ");
}

$("#mapDiv").append(googleMap);