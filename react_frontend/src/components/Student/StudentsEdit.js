import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Students() {
    return (
        <div>
            <h4>Добавление студента</h4>
            
        </div>
    );
}

export default Students;

/*
<Formik
                initialValues={{ surname: '', name: '', patronymic: '', course: 1, group: '' }}
                validate={() => { }}
                onSubmit={values => {
                    fetch('https://h0mew0rk.herokuapp.com/api/students/', {
                        method: 'POST',
                        body: values
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
*/