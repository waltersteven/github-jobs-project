import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useFetchJobs from './api/useFetchJobs';
import { Container } from 'react-bootstrap';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing...</h1>}
      <h1>{jobs.length}</h1>
      {jobs.map((job) => (
        <p>{job.title}</p>
      ))}
    </Container>
  );
}

export default App;
