const mongoose = require('mongoose');

const MONGO_URI = `
	mongodb+srv://${process.env.MONGO_USER}:
		${process.env.MONGO_PASSWORD}@
		${process.env.MONGO_CLUSTER}/
		${process.env.MONGO_DATABASE}?retryWrites=true&w=majority
	`;

const dbConnect = () => {
	mongoose
		.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('MongoDB connected'))
		.catch((err) => console.log('MongoDB connection error:', err));
};

module.exports = dbConnect;
