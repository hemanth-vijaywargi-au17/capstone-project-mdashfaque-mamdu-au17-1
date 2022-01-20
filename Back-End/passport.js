const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/User");

const google_options = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

const google_callback = async (accessToken, refreshToken, profile, cb) => {
  const dbResponse = await User.findOne({ email: profile.emails[0].value }).populate('createdPosts');
  if (dbResponse) {
    cb(null, dbResponse);
  } else {
    let user = await User.create({
      name: profile.displayName,
      email: profile.emails[0].value,
      profilePicURL: profile.photos[0].value,
      createdPosts: [],
      readingList: [],
      likedPosts: [],
      followers: [],
      following: [],
    });
    cb(null, user);
  }
};

passport.use(new GoogleStrategy(google_options, google_callback));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
