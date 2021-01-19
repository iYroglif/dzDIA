import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'c3/c3.css';
import c3 from 'c3/c3.min.js';

function Report() {

    const [courseLabs, setSCourseLabs] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: 'https://h0mew0rk.herokuapp.com/api/courses-labs/'
        }).then(response => {
            setSCourseLabs(response.data)
        })
    }, [])

    var courses = new Set()
    var tmp = new Map()
    courseLabs.map(cl => {
        courses.add(cl.course.id)
        tmp.set(cl.course.id, cl.course.name)
    })

    var xd = []
    var data = ['Количество лабораторных работ']
    Array.from(courses).map(cs => {
        xd.push(tmp.get(cs))
        data.push(0)
        courseLabs.filter(cl => cl.course.id == cs).map(c => data[cs]++)
    })

    var chart = c3.generate({
        data: {
            columns: [
                data
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: xd
            }
        }
    });


    return (
        <div>
            <ul class="list-group">
                {Array.from(courses).map(cs => (
                    <li class="list-group-item"><h4>{tmp.get(cs)}</h4>
                        <ul class="list-group">
                            {courseLabs.filter(cl => cl.course.id == cs).map(c => (
                                <li class="list-group-item" class="text-left"><h5>{c.name}</h5>
                                    <ul class="list-group">
                                        {c.labs.map(l => (
                                            <li class="list-group-item">
                                                <p><strong>Студент: </strong>{l.student.surname} {l.student.name} {l.student.patronymic} {l.student.group}</p>
                                                <p><strong>Выполнена: </strong>{l.completed}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <div id="chart"></div>
        </div>
    );
}

export default Report;