import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const LabDetail = () => {

    const [lab, setLab] = useState({})
    let params = useParams()

    useEffect(() => {
        fetch(`/api/labs/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => setLab(data))
    }, [params.id])

    return (
        <div>
            <p><strong>Выдана:</strong> {lab.issued}</p>
            <p><strong>Выполнена:</strong> {lab.completed}</p>
        </div>
    );
}
