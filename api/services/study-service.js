const studyService = require('./study-service');
const Evidence = require('../model/evidences');

exports.getInitialStudyList = function() {

    // Study 1
    var study1 = {
        authors: [{
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
        authors: [{
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
        authors: [{
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

    var study4 = {
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
        authors: [{
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
    var study6 = {
        authors: [{
                lastName: 'Buchan',
                firstName: 'Jim'
            },
            {
                lastName: 'MacDonell',
                firstName: 'Stephen'
            },
            {
                lastName: 'Yang',
                firstName: 'Jennifer'
            }
        ],
        title: 'Effective team onboarding in Agile software development: techniques and goals',
        date: '2018',
        url: 'https://arxiv.org/pdf/1907.10206.pdf',
        keywords: [
            'Agile teams',
            'onboarding',
            'software engineering'
        ],
        method: 'Interview Survey',
    }

    var study14 = {
        authors: [{
                lastName: 'Reyna',
                firstName: 'A'
            },
            {
                lastName: 'Martín',
                firstName: 'C'
            },
            {
                lastName: 'Chen',
                firstName: 'J'
            }
        ],
        title: 'On blockchain and its integration with IOT. Challenges and opportunities',
        date: '2018',
        url: 'https://doi.org/https://doi.org/10.1016/j.future.2018.05.046',
        keywords: [
            'Blockchain',
            'Insurance',
            'IoT'
        ],
        method: 'Interview Survey',
    }
    var studyList = [];
    studyList.push(study1);
    studyList.push(study2);
    studyList.push(study3);
    studyList.push(study4);
    studyList.push(study5);
    studyList.push(study6);
    studyList.push(study14);

    return studyList;
}

exports.seedStudies = function(res) {
    Evidence.findOne({ title: 'aReal Time Agile Metrics for Measuring Team Performance.' }, function(err, evidence) {
        if (err) {
            console.info(err);
        } else {
            if (evidence == null) {
                var studyList = studyService.getInitialStudyList();
                studyList.forEach(function(value, index, array) {
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
                                res.status(200).json({ 'evidence': 'evidence added successfully' });
                            }
                        })
                        .catch(err => {
                            if (res != null) {
                                res.status(400).send('Unable to add new evidence. Error: ' + err.message);
                            }
                        });
                });
            } else {
                if (res != null) {
                    res.json(successfulResult);
                }
            }
        }
    });
}