import React from 'react';

const JobUpdate = () => {
  return (
    <form className="space-y-6">
      <div className="fieldContainer">
        <label for="lwsJobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
        <select id="lwsJobTitle" name="lwsJobTitle" autocomplete="lwsJobTitle" required>
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
        <select id="lwsJobType" name="lwsJobType" autocomplete="lwsJobType" required>
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
          <input type="number" name="lwsJobSalary" id="lwsJobSalary" required className="!rounded-l-none !border-0"
            placeholder="20,00,000" />
        </div>
      </div>

      <div className="fieldContainer">
        <label for="lwsJobDeadline">Deadline</label>
        <input type="date" name="lwsJobDeadline" id="lwsJobDeadline" required />
      </div>
      <div className="text-right">
        <input type="submit" value="Save" className="lws-submit cursor-pointer btn btn-primary w-fit" />
      </div>
    </form>
  );
};

export default JobUpdate;