const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing'
      }
    ]
  },
  {
    timestamps: true
  }
);


wishlistSchema.index({ user: 1 }, { unique: true });

module.exports = mongoose.model('Wishlist', wishlistSchema);