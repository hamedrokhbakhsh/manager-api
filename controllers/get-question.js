


const sql = require('mssql');
const db = require('../public/db');
const config = require('../public/dbConfig');



exports.getQuestion = (req, res, next) =>{

    //const query = 'exec krf.GetMembershipQuestions \'79EC2DFA-C7E7-48E0-9A1D-B119FA021B30\''

    const json = [
        {
            "id": 1,
            "QuestionTitle": "سوال اول؟"
        },
        {
            "id": 2,
            "QuestionTitle": "سوال دوم؟"
        },
        {
            "id": 3,
            "QuestionTitle": "سوال سوم؟"
        },
        {
            "id": 4,
            "QuestionTitle": "سوال چهارم؟"
        },
        {
            "id": 5,
            "QuestionTitle": "سوال پنجم؟"
        },
        {
            "id": 6,
            "QuestionTitle": "سوال ششم؟"
        },
        {
            "id": 7,
            "QuestionTitle": "سوال هفتم؟"
        },
        {
            "id": 8,
            "QuestionTitle": "سوال هشتم؟"
        },
        {
            "id": 9,
            "QuestionTitle": "سوال نهم؟"
        },
        {
            "id": 10,
            "QuestionTitle": "سوال دهم؟"
        },
        {
            "id": 11,
            "QuestionTitle": "سوال یازدهم؟"
        },
        {
            "id": 12,
            "QuestionTitle": "سوال دوازدهم؟"
        },
        {
            "id": 13,
            "QuestionTitle": "سوال سیزدهم؟"
        },
        {
            "id": 14,
            "QuestionTitle": "سوال چهاردهم؟"
        },
        {
            "id": 15,
            "QuestionTitle": "سوال پانزدهم؟"
        },
        {
            "id": 16,
            "QuestionTitle": "سوال شانزدهم؟"
        },
        {
            "id": 17,
            "QuestionTitle": "سوال هفدهم؟"
        },
        {
            "id": 18,
            "QuestionTitle": "سوال هجدهم؟"
        },
        {
            "id": 19,
            "QuestionTitle": "سوال نوزدهم؟"
        },
        {

            "id": 20,
            "QuestionTitle": "سوال بیستم؟"
        }
    ]
    res.render('get-question', {title: 'title', json});
    /*   res.render('', { title: 'varzeshSoft' });

   sql.close();
   sql.connect(config.config).then(() => {
       return sql.query(query)
   }).then(result => {
       //const json =result.recordsets[0];

   }).catch(err => {
       res.status(404).json({
           status: 0 ,
           errorMessage: err ,
           data: 'internal  connection'
       })
   })


   sql.on('error', err => {
       res.status(400).json({
           status: 0 ,
           errorMessage: err ,
           data: 'internal  connection'
       })
   });
*/
}