import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Students() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/student/'
        }).then(response => {
            setStudents(response.data)
        })
    }, [])

    return (
        <div class="list-group">
            {students.map(s => (
                <Link class="list-group-item list-group-item-action" to={{pathname: `/student/${s.id}/`, fromDashboard: false}}>{s.name}</Link>
            ))}
        </div>
    );
}

export default Students;
