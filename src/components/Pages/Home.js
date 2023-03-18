import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeNav from '../HomeNav';
import Job from '../Job';
import SideBar from '../SideBar';
import { fetchJobs } from '../../features/job/JobSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError, error } = useSelector(state => state.jobs);
  // console.log(jobs)

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  let content = null;
  if (isLoading) content = <p className='error'>Loading...</p>;
  if (!isLoading && isError) content = <p className='error'>There was an error</p>;
  if (!isLoading && !isError && jobs?.length === 0) content = <p className='error'>There is no Job</p>;
  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map(job => <Job key={job
      .id} job={job} />)
  }

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="sidebar">
        <HomeNav />
      </div>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <SideBar />

          <div className="jobs-list ">
            {/* <!-- Single Job 1--> */}
            {content}
            {/* <!-- Single Job 1--> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;