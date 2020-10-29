import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useFetchJobs from './api/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/job/Job';

function App() {
  const [params, setParams] = useState({ search: 'code' });
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing...</h1>}
      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
    </Container>
  );
}

export default App;
