'use client';
import { useState } from 'react';
import Image from 'next/image';
const Question = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleHandler = () => {
    setExpanded((expanded) => !expanded);
  };
  return (
    <div className='border-b pb-[15px]'>
      <div className='flex justify-between items-center '>
        <h5
          className={`text-[#4B4C5F] text-[13px] md:text-[14px] leading-normal hover:text-[#F47B56] cursor-pointer ${
            expanded && 'font-bold text-[#1E1F36]'
          } `}
          onClick={toggleHandler}
        >
          {question}
        </h5>
        <button
          className={`h-[6px] w-[10px] cursor-pointer ${expanded && 'rotate-180'} transition-all`}
          onClick={toggleHandler}
        >
          <Image src='/images/icon-arrow-down.svg' alt='' width={8} height={4} layout='responsive'></Image>
        </button>
      </div>
      {expanded && <p className='mt-[12px] text-[#787887] text-xs leading-[18px]'>{answer}</p>}
    </div>
  );
};

export default Question;
