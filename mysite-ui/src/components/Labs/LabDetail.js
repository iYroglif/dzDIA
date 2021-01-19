import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getCookie from 'js-cookie'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const csrftoken = getCookie('csrftoken');

function LabDetail({ match }) {

    const [lab, setLab] = useState({})
    const [course_lab, setCourse_lab] = useState([])
    const [course, setCourse] = useState([])
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://h0mew0rk.herokuapp.com/api/labs/${id}/`
        }).then(response => {
            setLab(response.data)
            setCourse_lab(response.data.course_lab)
            setCourse(response.data.course_lab.course)
        })
    }, [id])

    return (
        <div>
            <h4><strong>{course_lab.name}</strong></h4>
            <h6><strong>Курс:</strong> {course.name}</h6>
            <p><strong>Задание:</strong> {course_lab.task}</p>
            <p><strong>Выдана:</strong> {lab.issued}</p>
            <p><strong>Выполнена:</strong> {lab.completed}</p>
        </div>
    );
}

export default LabDetail;