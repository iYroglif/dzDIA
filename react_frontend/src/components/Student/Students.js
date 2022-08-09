import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Students = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/students/')
            .then(response => {
                setStudents(response.data)
            })
    }, [])

    return (
        <>
            <div class="list-group">
                <li class="list-group-item">Студенты:</li>
                {students.map(s => (
                    <Link class="list-group-item list-group-item-action" to={{ pathname: `/students/${s.id}/`, fromDashboard: false }}>{s.surname} {s.name} {s.patronymic} {s.group}</Link>
                ))}
            </div>
            <div class="d-grid d-md-flex justify-content-md-end">
                <p></p>
                <Link class="btn btn-primary" role="button" to={{ pathname: `/students-edit/`, fromDashboard: false }}>Добавить</Link>
            </div>
        </>
    );
}