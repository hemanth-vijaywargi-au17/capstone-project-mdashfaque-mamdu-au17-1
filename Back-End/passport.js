const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("./models/User");

const google_options = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.SITE_URL}/auth/google/callback`,
};

const google_callback = async (accessToken, refreshToken, profile, cb) => {
  let user = {
    name: profile.displayName,
    email: profile.emails[0].value,
    profilePicURL: profile.photos[0].value,
    _id: null,
  }
  const dbResponse = await User.findOne({ email: profile.emails[0].value });
  if (dbResponse) {
    user._id = dbResponse._id;
    cb(null, user);
  } else {
    let dbResponse = await User.create({
      name: profile.displayName,
      email: profile.emails[0].value,
      profilePicURL: profile.photos[0].value,
      createdPosts: [],
      readingList: [],
      likedPosts: [],
      followers: [],
      following: [],
    });
    user._id = dbResponse._id;
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
