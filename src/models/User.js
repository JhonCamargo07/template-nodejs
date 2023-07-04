const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
	{
		_id: { type: Schema.Types.ObjectId, required: false },
		name: { type: String, required: true },
		lastname: { type: String, required: false },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		phone: { type: String, required: false },
	},
	{ timestamps: true }
);

module.exports = model('User', UserSchema);
