// import passport from 'passport';
// import { Strategy as GitHubStrategy } from 'passport-github2';
// import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
// import User from '../models/User.js';

// // GitHub Strategy
// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: '/api/auth/github/callback'
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       let user = await User.findOne({ githubId: profile.id });
      
//       if (!user) {
//         user = await User.create({
//           githubId: profile.id,
//           name: profile.displayName || profile.username,
//           email: profile.emails[0].value,
//           password: Math.random().toString(36).slice(-8)
//         });
//       }
      
//       return done(null, user);
//     } catch (error) {
//       return done(error, null);
//     }
//   }
// ));

// // LinkedIn Strategy
// passport.use(new LinkedInStrategy({
//     clientID: process.env.LINKEDIN_CLIENT_ID,
//     clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
//     callbackURL: '/api/auth/linkedin/callback',
//     scope: ['r_emailaddress', 'r_liteprofile']
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       let user = await User.findOne({ linkedinId: profile.id });
      
//       if (!user) {
//         user = await User.create({
//           linkedinId: profile.id,
//           name: profile.displayName,
//           email: profile.emails[0].value,
//           password: Math.random().toString(36).slice(-8)
//         });
//       }
      
//       return done(null, user);
//     } catch (error) {
//       return done(error, null);
//     }
//   }
// ));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });