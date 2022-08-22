const express = require('express');
const router = express.Router();

const ProblemSet = require('../../model/ProblemSet');

router.get('/', (req, res) => {
    res.send(
        ProblemSet.map((problem) => {
            return { id: problem.id, title: problem.title, difficulty: problem.difficulty }
        })
    )
}
);

router.get('/:problemId', (req, res) => {
    const { problemId } = req.params;
    const problem = ProblemSet.find((problem) => {
        return problem.id === problemId;
    })
    if (problem) {
        res.send(problem);
    }
    else {
        res.status(404).send({ error: "Problem not found" });
    }
}
);

module.exports = router;