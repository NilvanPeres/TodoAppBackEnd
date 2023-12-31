const { body, param } = require('express-validator');

const taskValidation = {
    createTask: [
        body('body').isString().withMessage('Body dever ser uma string').isLength({ max: 50 }).withMessage('A tarefa deve ter no máximo 50 caracteres'),
        body('status').isIn(['TODO', 'DONE']).withMessage('Status deve ser TODO ou DONE'),
    ],
    getTaskById: [
        param('id').isMongoId().withMessage('id deve ser MongoDB ObjectId válido')
    ],
    updateTask: [
        param('id').isMongoId().withMessage('id deve ser MongoDB ObjectId válido'),
        body('body').optional().isString().withMessage('Body dever ser uma string').isLength({ max: 50 }).withMessage('A tarefa deve ter no máximo 50 caracteres'),
        body('status').optional().isIn(['TODO', 'DONE']).withMessage('Status deve ser TODO ou DONE'),
    ],
    deleteTask: [
        param('id').isMongoId().withMessage('id deve ser MongoDB ObjectId válido')
    ]
};

module.exports = taskValidation;