import {body} from 'express-validator';

export async function validateIdea(){
    return[
        body('content').notEmpty().withMessage('content can not be empty').isLength({min : 3}).withMessage('Content must be at least 3 characters'),
        body('reminderMeAt').isISO8601().withMessage('reminder date must be valid'),
        body('priority').optional().isIn(['low', 'mid' ,'high']).withMessage("Priority must be low, medium, or high")
    ]
}