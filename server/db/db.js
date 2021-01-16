const mongoose = require('mongoose')

const DB_URL = `mongodb+srv://qladmin:${process.env.DB_PASSWORD}@qlapp.01bb3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
	console.warn('Connected to database')
})
