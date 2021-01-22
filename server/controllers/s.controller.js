const { Exam } = require('../models/s.model');

module.exports.createExam = (request, response) => {
    const { name, img, number, phrase, position, leg, eye, hand } = request.body;
    Exam.create({name, img, number, phrase, position, leg, eye, hand})
        .then(Exam => response.json(Exam))
        .catch((err) => response.status(400).json(err))
    }

module.exports.getAllExams = (request, response) => {
    Exam.find({})
        .then(Exams => response.json(Exams))
        .catch((err) => response.status(400).json(err))
    }

module.exports.getExam = (request, response) => {
    Exam.findOne({_id:request.params.id})
        .then(Exam => response.json(Exam))
        .catch((err) => response.status(400).json(err))
    }

module.exports.updateExam = (request, response) => {
    Exam.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(updateExam => response.json(updateExam))
        .catch((err) => response.status(400).json(err))
    }

module.exports.deleteExam = (request, response) => {
    Exam.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.status(400).json(err))
    }