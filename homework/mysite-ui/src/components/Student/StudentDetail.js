import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentDetail({match}) {

    const [student, setStudent] = useState({})
    const [labs, setLabs] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/student/${id}/`
        }).then(response => {
            setStudent(response.data)
            setLabs(response.data.labs)
        })
    }, [id])

    return (
        <div>
            Student with id {student.id}
            <p>Student: <strong>{student.name}</strong></p>
            <hr/>
            <div className="row">
                {labs.map(l => (
                    <div className="col-md-4" key={l.id}>
                        <h4>{l.issued}</h4>
                        <p>{l.changed}</p>
                        <p>{l.id}</p>
                        <Link to={{pathname: `/lab/${l.id}`, fromDashboard: false}}>Детали</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentDetail;