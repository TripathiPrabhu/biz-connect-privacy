import express from 'express';
import { sendOtp, sendPurchaseConfirmation, sendResetPasswordCode, verifyOtp, verifyResetPasswordCode ,sendDeletionRequest} from '../controllers/authController.js';

const router = express.Router();

router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/send-data-deletion-request', sendDeletionRequest);
router.post('/send-purchase-confirmation', sendPurchaseConfirmation);
router.post('/send-reset-password-code', sendResetPasswordCode);
router.post('/verify-reset-password-code', verifyResetPasswordCode);


export default router;
