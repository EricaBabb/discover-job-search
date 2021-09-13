import React from 'react' ;
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap'
//Import mutations and queries from apollo
import { useQuery, useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { removeJobId } from '../utils/localStorage';
//Import REMOVE_JOB mutation and GET_ME query
import { REMOVE_JOB } from '../utils/mutations';
import { GET_ME } from "../utils/queries";

const SavedJobs = () => {

    // const [userData, setUserData] = userState({});
    // use useQuery hook to make query request
    // loading property since it is async req
    // Once loaded, info stored in destructured data prop
    const { loading, data } = userQuery(GET_ME);
    // loading property = ability to contiditionally rener data based on whether or not there is data to even display
    
    // optional chaining = if data exists, store userData; If data is undefined, save an empty array to the userData component
    const userData = data?.me || [];

    
}







