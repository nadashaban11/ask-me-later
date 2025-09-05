import {body, validationResult} from 'express-validator';

export function validateIdea(){
    return[
        body('content').notEmpty().withMessage('content can not be empty').isLength({min : 3}).withMessage('Content must be at least 3 characters'),
        body('reminderMeAt').isISO8601().withMessage('reminder date must be valid'),
        body('priority').optional().isIn(['low', 'mid' ,'high']).withMessage("Priority must be low, medium, or high"),

        (req,res,next)=>{
            const err = validationResult(req);
            if(!err.isEmpty()){
                return res.status(400).json({errors : err.array()});
            }
            next();
        }
    ]
}