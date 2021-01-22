const Examcontroller = require('../controllers/s.controller');
module.exports = function(app){
    app.get('/api/exam', Examcontroller.getAllExams);
    app.get('/api/exam/:id', Examcontroller.getExam);
    app.post('/api/exam', Examcontroller.createExam);
    app.put('/api/exam/:id', Examcontroller.updateExam);
    app.delete('/api/exam/:id', Examcontroller.deleteExam);
}
