// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt, FaTools } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Under Development Message */}
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="animate-bounce mb-8">
          <FaTools className="text-6xl text-violet-500" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
          Blog Section Under Development
        </h2>
        <p className="text-gray-400 text-center max-w-md">
          We&apos;re working hard to bring you amazing content. Please check back soon!
        </p>
        <div className="mt-8 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative px-6 py-3 bg-[#1a1443] rounded-lg">
            <span className="text-white">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;