import React from 'react';
import HomeNav from '../../components/HomeNav';
import Job from '../../components/Job';
import SideBar from '../../components/SideBar';

const Home = () => {
  return (
    <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <div class="sidebar">
        <HomeNav />
      </div>
      <div class="lg:pl-[14rem]  mt-[5.8125rem]">
        <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <SideBar />

          <div class="jobs-list ">
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