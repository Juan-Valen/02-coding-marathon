const Job = require('../models/jobModel');
const mongoose = require('mongoose');

// Get all jobs
const getJobs = async (req, res) => {
    const limit = parseInt(req.query.limit)

    try {
        const jobs = await limit ? Job.find().sort({ createdAt: -1 }).limit(limit) : Job.find().sort({ createdAt: -1 });

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
}

// Get a job by ID
const getJobById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid job ID' });
    }

    try {
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job' });
    }
}

// Create a new job
const createJob = async (req, res) => {
    const { title, type, description, company_name, company_description, company_contactEmail, company_contactPhone, location, salary } = req.body;

    if (!title || !type || !description || !company_name || !company_description || !company_contactEmail || !company_contactPhone || !location || !salary) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newjob = await Job.create({
            title,
            type,
            description,
            location,
            salary,
            company: {
                name: company_name,
                description: company_description,
                contactEmail: company_contactEmail,
                contactPhone: company_contactPhone
            }
        });
        res.status(201).json(newjob);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating job' });
    }
}

// Update a job by ID
const updateJob = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid job ID' });
    }

    try {
        const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: 'Error updating job' });
    }
};

// Delete a job by ID
const deleteJob = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid job ID' });
    }

    try {
        const deletedJob = await Job.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting job' });
    }
};

module.exports = {
    getJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
}; 