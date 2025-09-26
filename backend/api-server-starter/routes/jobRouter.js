const express = require('express');
const router = express.Router();
const { getJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
} = require('../controllers/jobControllers');
const requireAuth = require('../middleware/requireAuth');

// Get all jobs (public)
router.get('/', getJobs);

// Get a job by ID (public)
router.get('/:id', getJobById);

if (process.env.PROTECTED == "true") {
    router.use(requireAuth)
}
// Create a new job (protected)
router.post('/', createJob);

// Update a job by ID (protected)
router.put('/:id', updateJob);

// Delete a job by ID (protected)
router.delete('/:id', deleteJob);

module.exports = router;
