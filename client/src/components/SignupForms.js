import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { ADD_USER } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';


import Auth from '../utils/auth';