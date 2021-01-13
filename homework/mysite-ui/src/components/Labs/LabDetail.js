import React, {useEffect, useState} from 'react';
import axios from 'axios';

function LabDetail({match}) {

    const [lab, setLab] = useState({})
    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/lab/${id}/`
        }).then(response => {
            setLab(response.data)
        })
    }, [id])

    return (
        <div>
            Lab with id {lab.id}
            <p>Lab: <strong>{lab.issued}</strong></p>
        </div>
    );
}

export default LabDetail;