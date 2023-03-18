import axios from '../../Utils/axios';


export const getJobs = async () => {
  const res = await axios.get('/jobs');
  return res.data;
}