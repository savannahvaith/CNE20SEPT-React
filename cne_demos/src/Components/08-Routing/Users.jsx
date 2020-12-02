import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Users = () => {
    let { id } = useParams();
  
    return(
        <p>id: {id}</p>
    )
}
    export default Users;