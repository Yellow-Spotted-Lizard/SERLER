const studyService = require('./study-service');
const Evidence = require('../model/evidences');

exports.getInitialStudyList = function () {

    // Study 1
    var study1 = {
      authors: [
        { 
          lastName: 'Buchan',
          firstName: 'Jim',
        },
        { 
          lastName: 'Bano',
          firstName: 'Muneera',
        },
        { 
          lastName: 'Zowghi',
          firstName: 'Didar',
        },
        { 
          lastName: 'MacDonell',
          firstName: 'Stephen',
        },
        { 
          lastName: 'Shinde',
          firstName: 'Amrita'
        }
      ],
      title: 'Alignment of Stakeholder Expectations About User Involvement in Agile Software Development',
      date: '2017',
      url: 'http://doi.acm.org/10.1145/3084226.3084251',
      keywords: [
        'Agile software development',
        'Repertory Grids',
        'User involvement',
        'alignment',
        'expectations'
      ],
      method: 'agile',
    };

    // Study 2
    var study2 = {
        title: 'Influential Factors on the Awareness of Agile Software Development Methodology: A Systematic Literature Review.',
        url: 'http://ezproxy.aut.ac.nz/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=bth&AN=119937601&site=eds-live',
        authors: [
          {
            lastName: 'Sulaiman', 
            firstName: 'Nur Liyana'
          },
          {
            lastName: 'Mahrin', 
            firstName: 'Mohd Naz\'ri',
          },
          {
            lastName: 'Yusoff', 
            firstName: 'Rasimah Che Mohd'
          }
        ],
        keywords: [
          'Electronic data processing',
          'Computer software industry',
          'Agile software development',
          'Awareness',
          'Literature reviews',
          'agile practices',
          'agile software development methodology'
        ],
        date: '2016',
        abstract: 'Agile software development methodology has been implemented by software industries over a decade ago and well accepted in the practitioner community. However, there is limited understanding on how agile practitioners aware towards implementation of agile practices in software development. Lack of awareness will lead to misunderstandings among agile practitioners and misuse the agile practices. In order to understand the awareness of agile practices, this paper aims to investigate the factors that affect awareness of agile practitioners in implementing agile practices. A systematic literature review (SLR)was conducted in order to classify and define the factors of awareness in agile software development methodology. The review was based on papers between 2002 and December 2014 from seven electronic databases. The relevant papers were included 20 journal articles, 24 conference papers,16 book chapters, 9 workshop papers.Consequently, 69 papers were identified that closely related with a',
        researchQuestion: 'this is another placeholder',
        result: 'result 2', 
        method: 'agile',
      };

    // Study 3
    var study3 = {
        title: 'Real Time Agile Metrics for Measuring Team Performance.',
        url: 'http://ezproxy.aut.ac.nz/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=bth&AN=134763690&site=eds-live',
        authors: [
          {
            lastName: 'BUDACU',
            firstName: 'Eduard Nicolae'
          },
          {
            lastName: 'POCATILU',
            firstName: 'Paul'
          }
        ],
        keywords: [
          'Productivity accounting',
          'Information networks',
          'Agile software development',
          'Software measurement',
          'Velocity',
          'Agile Development',
          'Cycle Time',
          'Indicators',
          'Lead Time',
          'Measurements',
          'Metrics'
        ],
        date: '2018',
        abstract: 'In order to track the improvements of agile teams, a system of metrics and indicators is very important to be implemented. Agile Software Development (ASD) promotes working software as the primary way of measuring progress. The current set of metrics are more output oriented rather than using lines of code to estimate productivity. This paper presents the results of a background research in order to identify the most important metrics, indicators, measures and tools software development teams use in relation with agile-based methodologies. The paper also presents a case study based on data gathered in a software outsourcing company. The paper proposes an architecture of an automated system used to provide real-time metrics for measuring agile team performance.',
        method: 'agile',
    };

    var study4 =  {
      title: 'Agile Collaboration for Distributed Teams [Software Technology].',
      url: 'http://ezproxy.aut.ac.nz/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=edseee&AN=edseee.8611454&site=eds-live',
      authors: [],
      keywords: [
          "Computing and Processing",
          "Agile software development",
          "Software development management",
          "Collaborative work"
      ],
      date: '2019',
      researchQuestion: 'this is a placeholder',
      result: 'result 1',
      method: 'agile',
    };

    var study5 = {
      authors: [
        {
          lastName: 'Senapathi',
          firstName: 'Mali'
        },
        {
          lastName: 'Buchan',
          firstName: 'Jim'
        },
        {
          lastName: 'Osman',
          firstName: 'Hady'
        }
      ],
      title: 'DevOps Capabilities, Practices, and Challenges: Insights from a Case Study',
      date: '2018',
      url: 'http://doi.acm.org/10.1145/3210459.3210465',
      keywords: [
        'DevOps benefits and challenges',
        'DevOps enablers and practices'
      ],
      method: 'devops',
     } 

     var study7 = {
      authors: [
        {
          lastName: 'Chen',
          firstName: 'Lianping'
        },
      ],
      title: 'Microservices: Architecting for Continuous Deliver and DevOps',
      date: '2018',
      url: 'https://www.researchgate.net/profile/Lianping_Chen/publication/323944215_Microservices_Architecting_for_Continuous_Delivery_and_DevOps/links/5af3ac2f4585157136c92238/Microservices-Architecting-for-Continuous-Delivery-and-DevOps.pdf',
      keywords: [
        'DevOps',
        'Microservices'
      ],
      method: 'devops',
     } 

     var study8 =  {
      title: 'Continuous Architecting with Microservices and DevOps: A Systematic Mapping Study',
      url: 'https://arxiv.org/pdf/1908.10337.pdf',
      authors: [
        {
          lastName: 'Taibi',
          firstName: 'Davide'
        },
        {
          lastName: 'Lenarduzzi',
          firstName: 'Valentina'
        },
        {
          lastName: 'Pahl',
          firstName: 'Claus'
        },
      ],
      keywords: [
        'DevOps',
        'Microservices',
        'Cloud-native'
      ],
      date: '2018',
      researchQuestion: [
      'Which are the different microservices-based architectural styles?',
      'What are the differences among the existing architectural styles?',
      'Which advantages and disadvantages have been highlighted in implementations described in the literature for the identified architec- turalstyles?'
      ],
      result: 'Most of the implementations reported in the papers are related to research prototypes, with the goal of validating the proposed approaches. Only six papers report on implementations in industrial context. Regarding the size of the systems implemented, all the implementations are related to small-sized applications, except [S38] that reports on the migration of a large scale system. Only four implementations report on the development language used (Java/NodeJS,  php/NodeJS/Python, php).',
      method: 'devops',
    };

    var study9 =  {
      title: 'DevOps as a Service: Pushing the Boundaries of Microservice Adoption.',
      url: 'https://ieeexplore-ieee-org.ezproxy.aut.ac.nz/stamp/stamp.jsp?tp=&arnumber=8379534',
      authors: [
        {
          lastName: 'Trihinas',
          firstName: 'Demetris'
        },
        {
          lastName: 'Tryfonos',
          firstName: 'Athanasios'
        },
        {
          lastName: 'Dikaiakos',
          firstName: 'Marios'
        },
        {
          lastName: 'Pallis',
          firstName: 'George'
        },
      ],
      keywords: [
          "Computing and Processing",
          "Software development",
          "Devops",
      ],
      date: '2018',
      researchQuestion: 'why are microservices so important to the future of DevOps? ',
      result: 'microservices can share the core of the underlying OS, which enables faster deployments in the cloud without diminishing performance. Thus, instead of all application services being part of one enormous monolith, business capabilities are self-contained with well-defined interfaces that avoid synchronous and blocking-calls whenever possible. By adopting the DevOps “ideology,” separate software teams are each responsible for different aspects of the end application allowing both the team and software core to develop, test, handle failures and scale independently. ',
      method: 'devops',
    };

    var study10 =  {
      title: 'What is DevOps? A Systematic Mapping Study on Definitions and Practices.',
      url: 'https://www.researchgate.net/profile/Ramtin_Jabbari/publication/308857081_What_is_DevOps_A_Systematic_Mapping_Study_on_Definitions_and_Practices/links/5aa2ae9145851543e63c223a/What-is-DevOps-A-Systematic-Mapping-Study-on-Definitions-and-Practices.pdf',
      authors: [
        {
          lastName: 'Jabbari',
          firstName: 'Ramtin'
        },
        {
          lastName: 'Ali',
          firstName: 'Nauman'
        },
        {
          lastName: 'Petersen',
          firstName: 'Kai'
        },
        {
          lastName: 'Tanveer',
          firstName: 'Binish'
        },
      ],
      keywords: [
          "DevOps definition",
          "DevOps practice",
          "Software development method",
      ],
      date: '2016',
      researchQuestion: [
        'How is “DevOps” defined in peer-reviewed literature on the topic?',
        'Which practices were associated with DevOps in the literature?',
        'What are the similarities and differences reported by the authors of primary studies between “DevOps” and the other development methods?'
        ],
      result: 'To explore the definitions for DevOps in literature, we attempted to identify the central components to define DevOps explicitly. Table 4 shows the identified components elicited from the corresponding studies.',
      method: 'devops',
    };

    var study11 =  {
      title: 'Alignment of Stakeholder Expectations about User Involvement in Agile Software Development',
      url: 'https://www.researchgate.net/profile/Muneera_Bano/publication/315090484_Alignment_of_Stakeholder_Expectations_about_User_Involvement_in_Agile_Software_Development/links/59475d68a6fdccb93abeaac4/Alignment-of-Stakeholder-Expectations-about-User-Involvement-in-Agile-Software-Development.pdf',
      authors: [
        {
          lastName: 'Buchan',
          firstName: 'Jim'
        },
        {
          lastName: 'Bano',
          firstName: 'Muneera'
        },
        {
          lastName: 'Zowghi',
          firstName: 'Didar'
        },
        {
          lastName: 'MacDonell',
          firstName: 'Stephen'
        },
      ],
      keywords: [
          "Agile software development",
          "Repertory Grids",
          "alignment",
      ],
      date: '2017',
      researchQuestion: [
        'How can we assess the alignment of the stakeholders’ expectations about user involvement in Agile software development?',
        ],
      result: 'Our results in this case study revealed that the development team’s expectations of both the PO’s and SME’s levels of involvement in user activities as well as user characteristics is mostly aligned with the PO’s and SME’s own expectations, with just a few exceptions. Therefore, the reasonable level of alignment of expectations observed was somewhat unexpected. ',
      method: 'Agile',
    };

    var study12 =  {
      title: 'Coordination in Distributed Agile Software Development: A Systematic Review',
      url: 'http://156.62.60.45/bitstream/handle/10292/12456/ACIS2017_paper_118_FULL.pdf?sequence=2&isAllowed=y',
      authors: [
        {
          lastName: 'Senapathi',
          firstName: 'Mali '
        },
        {
          lastName: 'Buchan',
          firstName: 'Jim'
        },
        {
          lastName: 'Talukder',
          firstName: 'A.B.M. Nurul Afser'
        },
      ],
      keywords: [
          "distributed agile software development.",
          "coordination",
      ],
      date: '2017',
      researchQuestion: [
        'what knowledge areas in coordination in distributed agile software development are addressed?',
        'what types of research are published in the area of coordination?',
        ],
      result: 'a number of studies have used the main coordination theories (Malone and Crowston 1994) to investigate the main coordination types, tasks, dependencies, and mechanisms associated with the coordination process in DASD. There is limited research on coordination effectiveness, and in particular, there is apparent lack of specific guidelines for measuring and monitoring coordination effectiveness in DASD. Though some specific roles have been identified, there is no specific research on understanding the functions and obligations associated with these roles.',
      method: 'Agile',
    };

    var study13 =  {
      title: 'Dependency Management in Large-Scale Agile: A Case Study of DevOps Teams',
      url: 'https://scholarspace.manoa.hawaii.edu/bitstream/10125/60137/0697.pdf',
      authors: [
        {
          lastName: 'Stray',
          firstName: 'Viktoria'
        },
        {
          lastName: 'Moe',
          firstName: 'Nils Brede'
        },
        {
          lastName: 'Aasheim',
          firstName: 'Andreas'
        },
      ],
      keywords: [
          "Dependency Management",
          "Agile",
          'DevOps',
      ],
      date: '2019',
      researchQuestion: [
        'How are dependencies managed in large-scale agile projects?',
        ],
      result: 'Our study supports the finding that Scrum of Scrum meetings by themselves are not enough to manage interteam dependencies in large projects. Other types of meetings, such as a meeting with the project manager and all the team leaders, is also necessary. The main implication of our study is, therefore, that project management needs to combine many coordination practices to be able to handle all the dependencies in large-scale agile projects.',
      method: 'Agile',
    };

    var studyList = [];
    studyList.push(study1);
    studyList.push(study2);
    studyList.push(study3);
    studyList.push(study4);
    studyList.push(study5);
    studyList.push(study7);
    studyList.push(study8);
    studyList.push(study9);
    studyList.push(study10);
    studyList.push(study11);
    studyList.push(study12);
    studyList.push(study13);

    return studyList;
}

exports.seedStudies = function (res) {
    Evidence.findOne({ title: 'aReal Time Agile Metrics for Measuring Team Performance.' }, function(err, evidence) {
        if (err) {
            console.info(err);
        } 
        else {
            if (evidence == null) {
                var studyList = studyService.getInitialStudyList();
                studyList.forEach(function (value, index, array) {
                    var evidence = new Evidence();
                    evidence.title = value.title;
                    evidence.authors = value.authors;
                    evidence.url = value.url;
                    evidence.date = value.date;
                    evidence.keywords = value.keywords;
                    evidence.abstract = value.abstract;
                    evidence.researchQuestion = value.researchQuestion;
                    evidence.result = value.result;
                    evidence.method = value.method;
            
                    evidence.markModified("title");
                    evidence.markModified("authors");
                    evidence.markModified("url");
                    evidence.markModified("date");
                    evidence.markModified("keywords");
                    evidence.markModified("abstract");
                    evidence.markModified("researchQuestion");
                    evidence.markModified("result");
                    evidence.markModified("method");
            
                    evidence.save()
                    .then(evidence => {
                        if (res != null) {
                            res.status(200).json({'evidence': 'evidence added successfully'});
                        }
                    })
                    .catch(err => {
                        if (res != null) {
                            res.status(400).send('Unable to add new evidence. Error: ' + err.message);
                        }
                    });
                });
            }
            else {
                if (res != null) {
                    res.json(successfulResult);
                }
            }
        }
    });
}
