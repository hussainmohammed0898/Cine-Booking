import express from 'express';
import { checkUser, forgotPassword, getUser, google, logout, resetPassword, signin, signup } from '../controller/userController.js';
import authenticateUser from '../middleware/userMiddleware.js';
import { MovieDetails, Movies } from '../controller/movieController.js';
import { verifyToken } from '../middleware/verifyGoogleToken.js';
import { addReview } from '../controller/reviewController.js';
import { GetShowsByDate, ShowSeats } from '../controller/showController.js';

const userRouter = express.Router();


userRouter.post("/register",signup);
userRouter.post("/login",signin);
userRouter.post("/logout", logout);
userRouter.post("/forgot-password",forgotPassword);
userRouter.post('/reset-password/:id/:token', resetPassword);
userRouter.post("/google",verifyToken,google);
userRouter.get("/check-user",authenticateUser,checkUser);
userRouter.get('/movies',Movies);
userRouter.get('/movie-details/:id',authenticateUser,MovieDetails);
userRouter.get('/show',authenticateUser, GetShowsByDate)
userRouter.get('/show-seats/:showId', authenticateUser,ShowSeats)
userRouter.post('/add-review', authenticateUser, addReview)
userRouter.get("/get-user",authenticateUser,getUser);



export default userRouter

