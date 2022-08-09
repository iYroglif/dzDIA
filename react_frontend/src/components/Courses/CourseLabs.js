import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const CourseLabs = ({ courses }) => {

    const [courseLabs, setCourseLabs] = useState([])
    let params = useParams()

    useEffect(() => {
        fetch(`/api/courses/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => setCourseLabs(data))
    }, [params.id])

    return (
        <>
            <hr />
            <p>Курс: <strong>{courses[0].name}</strong></p>
            <hr />
            <div class="list-group">
                <li class="list-group-item">Лабораторные работы:</li>
                {courseLabs.map(cl => (
                    <Link class="list-group-item list-group-item-action" to={`/labs/${cl.id}`}>{cl.name}</Link>
                ))}
            </div>
        </>
    );
}
