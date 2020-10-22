import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
const url = 'https://course-api.netlify.app/api/react-tabs-project';
function App() {
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setjobIndex] = useState(0);
  const [loading, setLoading] = useState(false)
  
  const fetchJobs = async () =>{
    setLoading(true);
    const res = await fetch(url);
    const jobs = await res.json();
    setJobs(jobs);
    setLoading(false);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  if(loading){
    return <></>
  }
  const selectedJob = jobs[jobIndex];
  return <section className="section">
    <div className="title">
      <h2>Experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job,index) => <button className={`job-btn ${job.id === selectedJob.id && 'active-btn'}`} key={job.id} onClick={() => {setjobIndex(index)}}>{job.company}</button>)}
      </div>
      {selectedJob && <article className="job-info">
<h3>{selectedJob.title}</h3>
<h4>{selectedJob.company}</h4>
<p className="job-date">{selectedJob.date}</p>
{selectedJob.duties.map((duty,index) =>{
  return <div className="job-desc" key={index}>
    <FaAngleDoubleRight className="job-icon"/>
    <p>{duty}</p>
  </div>
})}
      </article>}
    </div>
  </section>;
}

export default App;
