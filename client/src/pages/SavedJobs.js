import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';


import { GET_ME } from "../utils/queries";

import { REMOVE_JOB } from "../utils/mutations"

import { useQuery, useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
// import { removeJobId } from '../utils/localStorage';

const savedJobs = () => {

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
    if (!userDataLength) {
        return <h2>GETTING JOB......</h2>;
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
                    {currentUser.savedJobs.length
                        ? `Viewing ${currentUser.savedJobs.length} saved ${currentUser.savedJobs.length === 1 ? 'job' : 'jobs'}:`
                        : 'You have no saved jobs!'}
                </h2>
                <CardColumns>
                    {currentUser.savedJobs.map((job) => {
                        return (
                            <Card key={job.jobId} border='dark'>
                                {job.image ? <Card.Img src={job.image} alt={`The card for ${job.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{job.title}</Card.Title>
                                    <p className='small'>Jobs: {job.title}</p>
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


export default savedJobs;