import axios from '../../Utils/axios';


export const getJobs = async () => {
  const res = await axios.get('/jobs');
  return res.data;
}

export const addJob = async (data) => {
  const res = await axios.post('/jobs', data);
  return res.data;
}

export const editJob = async (id, data) => {
  const res = await axios.put(`/jobs/${id}`, data);
  return res.data;
}

export const deleteJob = async (id) => {
  const res = await axios.put(`/jobs/${id}`);
  return res.data;
}