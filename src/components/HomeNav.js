import React from 'react';

const HomeNav = () => {
  return (
    <nav>
      <ul class="space-y-4">
        <li>
          <a href="/jobs" class="main-menu menu-active lws-allJob">
            <i class="fa-solid fa-briefcase"></i>
            <span> All Available Jobs</span>
          </a>
          <ul class="space-y-6 lg:space-y-2 ">
            <li>
              <a class="sub-menu" href="/jobs/internship">
                <i class="fa-solid fa-stop !text-[#FF5757]"></i>
                Internship
              </a>
            </li>
            <li>
              <a class="sub-menu" href="/jobs/fulltime">
                <i class="fa-solid fa-stop !text-[#FF8A00]"></i>
                Full Time
              </a>
            </li>
            <li>
              <a class="sub-menu" href="/jobs/remote">
                <i class="fa-solid fa-stop !text-[#56E5C4]"></i>
                Remote
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/jobs" class="main-menu lws-AddJob">
            <i class="fa-solid fa-file-circle-plus"></i>
            <span>Add NewJob</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;