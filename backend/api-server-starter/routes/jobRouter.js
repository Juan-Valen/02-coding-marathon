const express = require('express');
const router = express.Router();
const { getJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
} = require('../controllers/jobController'); 

// Get all jobs
router.get('/', getJobs);

// Get a job by ID
router.get('/:id', getJobById);

// Create a new job
router.post('/', createJob);

// Update a job by ID
router.put('/:id', updateJob);

// Delete a job by ID
router.delete('/:id', deleteJob);