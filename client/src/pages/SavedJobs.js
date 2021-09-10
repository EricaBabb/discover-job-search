import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';


import { GET_ME } from "../utils/queries";

import { REMOVE_BOOK } from "../utils/mutations"

import { useQuery, useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
