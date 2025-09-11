import {body, validationResult} from 'express-validator';

export function validateIdea(){
    return [
        body("content")
            .notEmpty()
            .withMessage("Content cannot be empty")
            .isLength({ min: 3 })
            .withMessage("Content must be at least 3 chars"),

        body("reminderMeAt")
            .optional()
            .isISO8601()
            .withMessage("Please enter a valid date (e.g., 2025-09-20)")
            .toDate(),

        body("priority")
            .optional()
            .isIn(["low", "medium", "high"])
            .withMessage("Priority must be low, medium, or high"),

        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        },
    ];
}


export function validateIdeaForUpdate() {
    return [
        body("content")
            .optional()
            .isLength({ min: 3 }).withMessage("Content must be at least 3 characters"),

        body("reminderMeAt")
            .optional()
            .isISO8601()
            .withMessage("reminder date must be valid")
            .toDate(),

        body("priority")
            .optional()
            .isIn(["low", "medium", "high"]).withMessage("Priority must be low, mid, or high"),

        (req, res, next) => {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(400).json({ errors: err.array() });
            }
            next();
        },
    ];
}