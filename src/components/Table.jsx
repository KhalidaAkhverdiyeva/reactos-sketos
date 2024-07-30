import React from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import classNames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Table = ({ jobs, onDelete, currentPage, totalPages, onPageChange }) => {
  const getStatusClass = (status) => {
    return classNames({
      'text-white px-2 py-1 font-bold whitespace-nowrap rounded-md text-[12px]': true,
      'bg-[#34C38F]': status === 'Active',
      'bg-[#F46A6A]': status === 'Close',
      'bg-[#50A5F1]': status === 'New',
    });
  };

  const getTypeClass = (type) => {
    return classNames({
      'px-2 whitespace-nowrap rounded-md text-[12px]': true,
      'bg-[#34c38f2e] text-[#34c38f]': type === 'full time',
      'bg-[#554253] text-[#F46762]': type === 'part time',
      'bg-[#50A5F1] text-[#ffffff]': type === 'all',
      'bg-[#374D6B] text-[#50A5F1]': type === 'freelance',
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="bg-[#2A3042] p-[20px] overflow-x-auto">
      <table className="min-w-full table-fixed bg-[#2A3042] border-b border-[#353D55] rounded-md">
        <thead className='border-t border-[#353D55]'>
          <tr className="text-[#A6B0CF] text-[14px] text-left">
            <th className="p-3 border-b border-[#353D55] w-[5%]">No</th>
            <th className="p-3 border-b border-[#353D55] w-[20%]">Job Description</th>
            <th className="p-3 border-b border-[#353D55] w-[15%]">Company Name</th>
            <th className="p-3 border-b border-[#353D55] w-[15%]">Location</th>
            <th className="p-3 border-b border-[#353D55] w-[10%]">Experience</th>
            <th className="p-3 border-b border-[#353D55] w-[15%]">Type</th>
            <th className="p-3 border-b border-[#353D55] w-[10%]">Posted Date</th>
            <th className="p-3 border-b border-[#353D55] w-[10%]">Last Date</th>
            <th className="p-3 border-b border-[#353D55] w-[10%]">Status</th>
            <th className="p-3 border-b border-[#353D55] w-[10%]">Actions</th>
          </tr>
        </thead>
        <tbody className="text-[#A6B0CF] text-[14px]">
          {jobs?.map((job) => (
            <tr key={job.id} className='border-b border-[#353D55]'>
              <td className="p-3 whitespace-nowrap">{job.no}</td>
              <td className="p-3 whitespace-nowrap">{job.jobTitle}</td>
              <td className="p-3 whitespace-nowrap">{job.companyName}</td>
              <td className="p-3 whitespace-nowrap">{job.location}</td>
              <td className="p-3 whitespace-nowrap">{job.experience}</td>
              <td className="p-3 whitespace-nowrap">
                <button className={getTypeClass(job.type)}>{job.type}</button>
              </td>
              <td className="p-3 whitespace-nowrap">{job.postedDate}</td>
              <td className="p-3 whitespace-nowrap">{job.lastDate}</td>
              <td className="p-3 whitespace-nowrap">
                <button className={getStatusClass(job.status)}>{job.status}</button>
              </td>
              <td className="p-3 whitespace-nowrap flex gap-2 items-center justify-center">
                <div className='bg-[#50a5f11a] p-[8px] rounded-md'>
                  <HiOutlinePencil className="text-[#50a5f1] cursor-pointer" />
                </div>
                <div onClick={() => onDelete(job.id)} className='bg-[#f46a6a1a] p-[8px] rounded-md'>
                  <HiOutlineTrash className="text-[#FF6F61] cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-end gap-3 py-3 items-center'>
        <div
          className={`bg-slate-600 w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <GrFormPrevious />
        </div>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index + 1}
            className={`w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ${currentPage === index + 1 ? 'bg-[#556EE6]' : 'bg-slate-600'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}
        <div
          className={`bg-slate-600 w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <GrFormNext />
        </div>
      </div>
    </div>
  );
};

export default Table;
