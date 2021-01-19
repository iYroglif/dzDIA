import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentDetail({ match }) {

    const [student, setStudent] = useState({})
    const [labs, setLabs] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/students/${id}/`
        }).then(response => {
            setStudent(response.data)
            setLabs(response.data.labs)
        })
    }, [id])

    return (
        <div>
            <hr />
            <p>Студент: <strong>{student.surname} {student.name} {student.patronymic} </strong>{student.group}</p>
            <hr />
            {labs.map(l => (
                <div className="card" key={l.id}>
                    <div class="card-body">
                        <h5 class="card-title">{l.course_lab.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Курс: {l.course_lab.course.name}</h6>
                        <p class="card-text"><small class="text-muted">Выполнена: {l.completed}</small></p>
                        <Link class="btn btn-primary" to={{ pathname: `/labs/${l.id}`, fromDashboard: false }}>Детали</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StudentDetail;