import Image from 'next/image';
import Question from '../components/question/question';

const DUMMY_DATA = [
  {
    id: 1,
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    id: 2,
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    id: 3,
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.',
  },
  {
    id: 4,
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    id: 5,
    question: 'Do you provide additional support?',
    answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

const page = () => {
  return (
    <div className='relative md:mx-auto md:w-fit md:h-fit  '>
      <Image
        src='/images/illustration-box-desktop.svg'
        alt=''
        width={200}
        height={250}
        className=' absolute  top-[190px] -left-[100px] z-30 hidden md:inline-block'
      ></Image>
      <div className='relative mt-[148px] mx-6 mb-[85px] bg-white px-6 pb-[48px] rounded-[23px] md:flex  md:px-0 md:mx-auto  md:max-w-[920px] md:overflow-hidden  md:items-center z-10 drop-shadow-[0_50px_50px_rgba(53,18,122,0.4972)] md:pb-[83px] md:pt-[65px] md:pr-[95px] min-w-[327px]'>
        <Image
          src='/images/bg-pattern-mobile.svg'
          alt=''
          width={240}
          height={145}
          className='mx-auto md:hidden'
        ></Image>
        <Image
          src='/images/illustration-woman-online-mobile.svg'
          alt=''
          width={237}
          height={180}
          className=' absolute -top-[105px] left-1/2 -translate-x-1/2  md:hidden'
        ></Image>
        <Image
          src='/images/illustration-woman-online-desktop.svg'
          alt=''
          width={472}
          height={359}
          className=' hidden md:inline-block  -translate-x-[84px] z-20 '
        ></Image>
        <Image
          src='/images/bg-pattern-desktop.svg'
          alt=''
          width={964}
          height={944}
          className=' absolute -left-[536px] -top-[264px] hidden md:inline-block z-10'
        ></Image>

        <div className='pt-[28px] md:w-[350px]  md:pt-[0]'>
          <h1 className=' font-bold text-[32px] text-center mb-[38px] md:text-left'>FAQ</h1>
          <div className='grid gap-[18px]'>
            {DUMMY_DATA.map(({ question, answer, id }) => {
              return <Question question={question} answer={answer} key={id}></Question>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
