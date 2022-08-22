import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import axios from '../../api/axios';
import { GET_PROBLEM_SET } from '../../constants';
export default function AllProblems() {
  const [AllProblems, setAllProblems] = React.useState([]);
  useEffect(() => {
    try {
      axios
        .get(GET_PROBLEM_SET, {
          withCredentials: true,
        })
        .then((res) => {
          setAllProblems(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (<>
          <Helmet>
      <title>All Problems </title>
      </Helmet>

    <main className='px-12 py-14'>
      <h1 className='text-3xl font-bold'>All Problems</h1>
      <p className='text-sm opacity-60'>
        Here user would be able to view all the problems available on the site
        and solve them.
        <br />
        {/* <b>Pro Tip</b> :{' '}
        <i>
          You can filter the problems based on{' '}
          <span className='font-bold'> Difficulty </span> by clicking on it.
        </i> */}
      </p>
      <br />
      <hr />
      <br />

      <div className='flex flex-col gap-4'>
        {AllProblems?.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}
      </div>
    </main>
  </>
  );
}

const ProblemCard = ({ problem }) => {
  const navigate = useNavigate();
  return (
    <div className='px-8 py-6 border rounded'>
      <h5 className='text-lg font-bold text-gray-700 cursor-pointer'
      onClick={() => {
        navigate(`/problemset/${problem.id}`);
      }
      }
      >{problem.title}</h5>
      <span className={`link-hover opacity-60 ${problem?.difficulty === 'easy' ? 'text-green-700' : 'text-orange-700'}`}>{problem.difficulty}</span>
    </div>
  );
};
