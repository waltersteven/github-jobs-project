import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useFetchJobs from './api/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/job/Job';
import JobsPagination from './components/job/JobsPagination';
import SearchForm from './components/form/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
    console.log('finished handleParamChange');
  }

  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing...</h1>}
      {jobs.map((job) => (
        <Job key={job.id} job={job}></Job>
      ))}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
