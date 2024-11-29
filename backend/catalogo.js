const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number, // 0 para cursos gratuitos
    link: String
});

const Course = mongoose.model('Course', CourseSchema);

app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

app.post('/courses', async (req, res) => {
    const { title, description, price, link } = req.body;
    const course = new Course({ title, description, price, link });
    await course.save();
    res.status(201).send('Course added');
});
