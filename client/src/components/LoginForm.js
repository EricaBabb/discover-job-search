import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import {useMutation, useQuery}  from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';