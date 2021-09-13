import React from 'react' ;
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap'
//Import mutations and queries from apollo
import { useQuery, useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { removeJobId } from '../utils/localStorage';
//Import REMOVE_JOB mutation and GET_ME query
import { REMOVE_JOB } from '../utils/mutations';
import { GET_ME } from "../utils/queries";

<<<<<<< HEAD
const SavedJobs = () => {

    // const [userData, setUserData] = userState({});
    // use useQuery hook to make query request
    // loading property since it is async req
    // Once loaded, info stored in destructured data prop
    const { loading, data } = userQuery(GET_ME);
    // loading property = ability to contiditionally rener data based on whether or not there is data to even display
    
    // optional chaining = if data exists, store userData; If data is undefined, save an empty array to the userData component
    const userData = data?.me || [];

    const [removeJob] = useMutation(REMOVE_JOB);

    // use this to determine if `useEffect()` hook needs to run again
    // const userDataLength = Object.keys(userData).length;
  
  
    // create function that accepts the job's mongo _id value as param and deletes the job from the database
    const handleDeleteJob = async (jobId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        //using the imported useMutation hook
        await removeJob({
          variables: {jobId: jobId}});
        // setUserData(updatedUser);
        // upon success, remove job's id from localStorage
        removeJobId(jobId);
      } catch (err) {
        console.error(err);
      }
    };
  
    // if data isn't here yet, say so
    if (loading) {
      return <h2>LOADING...</h2>;
    }
  
    return (
      <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Viewing saved jobs!</h1>
          </Container>
        </Jumbotron>
        <Container>
          <h2>
            {userData.savedJobs.length
              ? `Viewing ${userData.savedJobs.length} saved ${userData.savedJobs.length === 1 ? 'job' : 'jobs'}:`
              : 'You have no saved jobs!'}
          </h2>
          <CardColumns>
            {userData.savedJobs.map((job) => {
              return (
                <Card key={job.jobId} border='dark'>
                  {job.image ? <Card.Img src={job.image} alt={`The cover for ${job.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <p className='small'>Authors: {job.authors}</p>
                    <Card.Text>{job.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteJob(job.jobId)}>
                      Delete this Job!
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };
  
  export default SavedJobs;





=======
import { REMOVE_JOB } from "../utils/mutations"
>>>>>>> 3b89d5f88733fd06138f5688d26c260aa89c4b00


<<<<<<< HEAD
=======
import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';

const SavedJobs = () => {

    const [removeJob, { error }] = useMutation(REMOVE_JOB);

    const { loading, data } = useQuery(GET_ME);

    const currentUser = data?.me || {};

    const [userData, setUserData] = useState(currentUser);

    const userDataLength = Object.keys(currentUser).length;

    useEffect(() => {
        const getUserData = async () => {
            // try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
            if (!token)
                return false;
        }

        // const response = await getMe(token);
        // if (!response.ok) {
        //     throw new Error('something is wrong!');
        // }
        console.log(currentUser);

        // const user = await response.json();
        setUserData(currentUser);
    // } catch (err) {
    //     console.error(err);
    // }

    getUserData();
}, [userDataLength]);

const handleDeleteJob = async (jobId) => {
    const token = Auth.loggedIn() ? Auth.getToken() :
    null;

    if (!token) {
        return false;
    }

    try {
        const { data } = await removeJob({
            variables: {
                jobId: jobId
            }
        });

        const response = await handleDeleteJob(jobId, token);

        // MutationEventif (!response.ok) {
        //     throw new Error('something is wrong!');
        // }

        // const updateUser = await response.json();
        // setUserData(updateUser);
        // upon success, remove job's id from localStorage
        removeJobId(jobId);
    } catch (err) {
        console.error(err);
    }
};

// if no data, let user know
if(!userDataLength) {
    return <h2>GETTING JOB......</h2>;
}

return (
    <>
)


}
>>>>>>> 3b89d5f88733fd06138f5688d26c260aa89c4b00
