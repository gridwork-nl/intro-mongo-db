const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever');
}

// define the schema first
const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  faveFodds: [{type: String}],
  info: {
    school: {
      type: String
    },
    shoeSize: {
      type: Number
    }
  }

})

// Student is the model that refers to the collection
const Student = mongoose.model('student', student);

connect()
  .then(async connection => {
    const student = await Student.create({firstName: "Johnnie"});
    const found = await Student.find({firstName: 'John'});
    const foundbyId = await Student.findById('123432sdsafssdfs');
    const updated = await Student.findByIdAndUpdate('hgsdfkjdshf', {})
    console.log(student);
  })
  .catch(e => console.log(e))