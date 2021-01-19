import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CourseLabDetail({ match }) {

    const [courseLab, setCourseLab] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://h0mew0rk.herokuapp.com/api/courses-labs/${id}/`
        }).then(response => {
            setCourseLab(response.data)
        })
    }, [id])

    return (
        <div>
            <hr />
            <p><strong>{courseLab.name}</strong></p>
            <p><strong>Задание: </strong>{courseLab.task}</p>
            <hr />
        </div>
    );
}

export default CourseLabDetail;