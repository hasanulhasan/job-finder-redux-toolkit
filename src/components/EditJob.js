import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeJob } from '../features/job/JobSlice';

const EditJob = ({ job }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: changeItemId, title: initialTitle, type: initialType, salary: initialSalary, deadline: initialDeadline, } = job;
  console.log(job)

  const [title, setTitle] = useState(initialTitle);
  const [type, setType] = useState(initialType);
  const [salary, setSalary] = useState(parseInt(initialSalary) * 1000);
  const [deadline, setDeadline] = useState(initialDeadline);

  const reset = () => {
    setTitle('');
    setType('');
    setSalary('');
    setDeadline('')
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(changeJob({
      id: changeItemId,
      data: { title, type, salary, deadline }
    }
    ))
    reset();
    navigate('/')
  }

  return (
    <div class="lg:pl-[14rem] mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 class="mb-10 text-center section-title">Edit Job</h1>
        <div class="max-w-3xl mx-auto">
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
                <input value={salary} onChange={e => setSalary(e.target.value)} type="number" name="lwsJobSalary" id="lwsJobSalary" required className="!rounded-l-none !border-0"
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label for="lwsJobDeadline">Deadline</label>
              <input value={deadline}
                onChange={e => setDeadline(e.target.value)} type="date" name="lwsJobDeadline" id="lwsJobDeadline" required />
            </div>
            <div className="text-right">
              <input type="submit" value="Edit" className="lws-submit cursor-pointer btn btn-primary w-fit" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;