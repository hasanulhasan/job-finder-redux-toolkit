import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJob } from '../../features/job/JobAPI';
import EditJob from '../EditJob';
import HomeNav from '../HomeNav';
import SideBar from '../SideBar';
import './styles/style.css'

const Edit = () => {
  // const { id } = useParams();
  const { editItem, isLoading, isError } = useSelector(state => state.jobs)
  // const singleJob = getJob(id);
  // console.log(editItem)

  let content = null;
  if (isLoading) content = <p className='error'>Loading...</p>;
  if (!isLoading && isError) content = <p className='error'>There was an error</p>;
  if (!isLoading && !isError && editItem) content = <EditJob job={editItem} />;
  return (
    <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <div class="sidebar">
        <HomeNav />
      </div>
      {content}
    </div>
  );
};

export default Edit;