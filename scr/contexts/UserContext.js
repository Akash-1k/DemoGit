import React, {createContext} from 'react';
import {loginCheck} from './loginCheck';

const UserContext = createContext(loginCheck);

export default UserContext;