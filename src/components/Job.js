import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editActive, removeJob } from '../features/job/JobSlice';

const Job = ({ job }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { id, title, type, salary, deadline, } = job;
  // console.log(job)

  let jobType = null;
  if (type === 'Full Time') jobType = '#FF8A00';
  if (type === 'Remote') jobType = '#56E5C4';
  if (type === 'Internship') jobType = '#FF5757';

  const handleDelete = (id) => {
    dispatch(removeJob(id));
  }

  const handleEdit = () => {
    dispatch(editActive(job))
    navigate(`/edit/${id}`);
    // <Edit job={job} />
  }

  return (
    <div className="job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i className={`fa-solid fa-stop !text-[${jobType}] text-lg mr-1.5`}></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button onClick={() => handleEdit()} type="button" className="lws-edit btn btn-primary">
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button onClick={() => handleDelete(id)} type="button" className="lws-delete btn btn-danger ">
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;