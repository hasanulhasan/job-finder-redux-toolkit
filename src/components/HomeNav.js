import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { jobType } from '../features/filterSlice';

const HomeNav = () => {
  const dispatch = useDispatch();
  const handleFilter = (type) => {
    dispatch(jobType(type))
  }
  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <Link onClick={() => handleFilter('')} to="/" className="main-menu menu-active lws-allJob">
            <i className="fa-solid fa-briefcase"></i>
            <span> All Available Jobs</span>
          </Link>
          <ul className="space-y-6 lg:space-y-2 ">
            <li>
              <button onClick={() => handleFilter('Internship')} className="sub-menu" href="/jobs/internship">
                <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                Internship
              </button>
            </li>
            <li>
              <button onClick={() => handleFilter('Full Time')} className="sub-menu" href="/jobs/fulltime">
                <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                Full Time
              </button>
            </li>
            <li>
              <button onClick={() => handleFilter('Remote')} className="sub-menu" href="/jobs/remote">
                <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                Remote
              </button>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/add" className="main-menu lws-AddJob">
            <i className="fa-solid fa-file-circle-plus"></i>
            <span>Add NewJob</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;