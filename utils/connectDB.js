var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hoxuanthinh68:QWU0zmglVGZgFsAr@cluster0.iuhk1wh.mongodb.net/manhuanobi?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))

module.exports = mongoose;