import axios from "axios";


export const getJobs = async () => {
  const res = await axios.get('http://localhost:9000/jobs');
  console.log(res);
  return res.data;
}