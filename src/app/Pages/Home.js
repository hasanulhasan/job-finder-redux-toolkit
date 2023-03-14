import React from 'react';
import { useSelector } from 'react-redux';
import HomeNav from '../../components/HomeNav';
import Job from '../../components/Job';
import SideBar from '../../components/SideBar';

const Home = () => {
  const { jobs } = useSelector(state => state.jobs);
  console.log(jobs)

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
            <Job />
            {/* <!-- Single Job 1--> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;