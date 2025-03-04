import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

 const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['admin', 'student'],
    required: true
  },
  studentId: {
    type: String,
    sparse: true,
    trim: true
  },
  sport: {
    type: String,
    trim: true
  },
  customId: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

 const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true,
    trim: true
  },
  sportsActivities: [{
    sportName: {
      type: String,
      required: true,
      trim: true
    }
  }],
  brochureLink: {
    type: String,
    trim: true
  },
  websiteLink: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const achievementSchema = new mongoose.Schema({
  sportType: {
    type: String,
    required: true,
    trim: true
  },
  participantName: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Gold', 'Silver', 'Bronze'],
    required: true
  },
  classification: {
    type: String,
    enum: ['Group', 'Individual'],
    required: true
  },
  level: {
    type: String,
    enum: [
      'Khelo India',
      'Southwest Zone',
      'City Level',
      'All India Inter University',
      'Division Level'
    ],
    required: true
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create models
const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Achievement = mongoose.model('Achievement', achievementSchema);

//export default { User, Event, Achievement };
export { User, Event, Achievement };