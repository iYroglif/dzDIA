import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import getCookie from 'js-cookie'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const csrftoken = getCookie('csrftoken');

function Students() {
    return (
        <div>
            <Formik
                initialValues={{ surname: '', name: '', patronymic: '', course: 1, group: '' }}
                validate={() => { }}
                onSubmit={values => {
                    alert(JSON.stringify(csrftoken, null, 2));
                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8000/api/students/',
                        data: values
                    })
                }}
            >
                <Form>
                    <Field type="text" name="surname" />
                    <Field type="text" name="name" />
                    <Field type="text" name="patronymic" />
                    <Field type="number" name="course" />
                    <Field type="text" name="group" />
                    <button type="submit" >Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Students;
