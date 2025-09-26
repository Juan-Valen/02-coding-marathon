import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";
import Spinner from "../components/Spinner";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.length === 0 ? (
            <p className="text-center col-span-full text-gray-600">
              No jobs available at the moment.
            </p>
          ) : (
            jobs.map((job) => <JobListing key={job.id} job={job} />)
          )}
        </div>
      )}
    </section>
  );
};

export default JobsPage;
