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
            <h4>Добавление студента</h4>
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
                    <div class="mb-3">
                        <label class="form-label" for="surname">Фамилия:</label>
                        <br />
                        <Field type="text" name="surname" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Имя</label>
                        <br />
                        <Field type="text" name="name" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="patronymic">Отчество:</label>
                        <br />
                        <Field type="text" name="patronymic" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="course">Курс:</label>
                        <br />
                        <Field type="number" name="course" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="group">Группа:</label>
                        <br />
                        <Field type="text" name="group" />
                    </div>
                    <button class="btn btn-primary" type="submit" >Добавить</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Students;
