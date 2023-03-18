import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../features/job/JobAPI';
import { fetchJobs } from '../features/job/JobSlice';

const JobForm = () => {
  const dispatch = useDispatch();
  // const { id, title, type, salary, deadline, } = job;

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState('');
  const [deadline, setDeadline] = useState('');

  const reset = () => {
    setTitle('');
    setType('');
    setSalary('');
    setDeadline('')
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(addJob({ title, type, salary, deadline }))
    reset();
  }
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  return (
    <form className="space-y-6" onSubmit={handleUpdate}>
      <div className="fieldContainer">
        <label for="lwsJobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
        <select value={title}
          onChange={e => setTitle(e.target.value)}
          id="lwsJobTitle" name="lwsJobTitle" autoComplete="lwsJobTitle" required>
          <option value="" hidden selected>Select Job</option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>
      <div className="fieldContainer">
        <label for="lwsJobType">Job Type</label>
        <select value={type}
          onChange={e => setType(e.target.value)} id="lwsJobType" name="lwsJobType" autoComplete="lwsJobType" required>
          <option value="" hidden selected>Select Job Type</option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label for="lwsJobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input value={salary}
            onChange={e => setSalary(e.target.value)} type="number" name="lwsJobSalary" id="lwsJobSalary" required className="!rounded-l-none !border-0"
            placeholder="20,00,000" />
        </div>
      </div>

      <div className="fieldContainer">
        <label for="lwsJobDeadline">Deadline</label>
        <input type="date" name="lwsJobDeadline" id="lwsJobDeadline" required />
      </div>
      <div value={deadline}
        onChange={e => setDeadline(e.target.value)} className="text-right">
        <input type="submit" value="Save" className="lws-submit cursor-pointer btn btn-primary w-fit" />
      </div>
    </form>
  );
};

export default JobForm;