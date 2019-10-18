/* to run this script to fill fake data in MongoDB:
  
```
  MONGODB_URI='mongodb+srv://<username>:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' \
    MONGODB_DB_NAME=serler \
    DEBUG=api:* \
    node test/fake_data/fake_evidences.js
```

*/

const db = require('../../model/db');
const Evidence = require('../../model/evidences')
// var debug = require('debug')('api:route:evidences');
var debug = console.debug;

/*/
//insert test data for debug only
var ev1 = new Evidence({
  title: 'software engineering',
  url: 'http://wikipedia.com/software_engineering',
  authors: [{
    firstName: 'Foo',
    lastName: 'Bar'
  },{
    firstName: 'Foobar',
    lastName: 'Baz'
  }]
});

var ev2 = new Evidence({
  title: 'test title',
  url: 'http://test.url',
  authors: []
});

console.error(ev1);

// ev1.save(err => {
//   console.error('error', err);
// })

const ev1obj = ev1.toObject();
Evidence.updateOne({_id: ev1obj._id}, ev1obj, {upsert: true}, function (err, raw) {
  console.error('insert error', err, raw);
});

ev2.save();
//*/

var ev1 = new Evidence({
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
});

var ev2 = new Evidence({
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
});

var ev3 = new Evidence({
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
  abstract: 'In order to track the improvements of agile teams, a system of metrics and indicators is very important to be implemented. Agile Software Development (ASD) promotes working software as the primary way of measuring progress. The current set of metrics are more output oriented rather than using lines of code to estimate productivity. This paper presents the results of a background research in order to identify the most important metrics, indicators, measures and tools software development teams use in relation with agile-based methodologies. The paper also presents a case study based on data gathered in a software outsourcing company. The paper proposes an architecture of an automated system used to provide real-time metrics for measuring agile team performance.'
});

var ev4 = new Evidence({
  title: '',
  url: '',
  authors: [],
  keywords: [
    ''
  ],
  date: ''
});

let evs = [ev1, ev2, ev3];
Promise.all(evs.map(ev => new Promise(
    (resolve, reject) => {
      const obj = ev.toObject();
      Evidence.updateOne({_id: obj._id}, obj, {upsert: true}, function (err, raw) {
        if (err != null) {
          console.error('insert result: error: ', err, raw);
          reject(err);
        }
        console.error('insert result: ', err, raw);
        resolve(raw);
      });
    })))
  .then(() => {process.exit(0)})
  .catch(err => {process.exit(1)});
