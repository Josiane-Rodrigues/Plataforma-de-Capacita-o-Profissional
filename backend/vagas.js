const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String
});

const Job = mongoose.model('Job', JobSchema);

app.get('/jobs', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

app.post('/jobs', async (req, res) => {
    const { title, company, location, description } = req.body;
    const job = new Job({ title, company, location, description });
    await job.save();
    res.status(201).send('Job posted');
});
