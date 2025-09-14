
import {body, validationResult} from 'express-validator';


export function validateSignUp() {
  return [
    body("name")
      .notEmpty().withMessage("Name is required")
      .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

    body("email")
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Email is invalid"),

    body("password")
      .notEmpty().withMessage("Password is required")
      .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .withMessage("Password must be at least 8 chars, include uppercase, lowercase, number, and special char"),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];
};


export function validateSignIn() {
  return [
    body("email")
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Email is invalid"),

    body("password")
      .notEmpty().withMessage("Password is required"),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];
}