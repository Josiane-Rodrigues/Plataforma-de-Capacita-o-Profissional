const FeedbackSchema = new mongoose.Schema({
    employerId: mongoose.Schema.Types.ObjectId,
    workerId: mongoose.Schema.Types.ObjectId,
    feedback: String,
    rating: Number
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

app.post('/feedback', async (req, res) => {
    const { employerId, workerId, feedback, rating } = req.body;
    const newFeedback = new Feedback({ employerId, workerId, feedback, rating });
    await newFeedback.save();
    res.status(201).send('Feedback submitted');
});

app.get('/feedback/:workerId', async (req, res) => {
    const feedbacks = await Feedback.find({ workerId: req.params.workerId });
    res.json(feedbacks);
});
