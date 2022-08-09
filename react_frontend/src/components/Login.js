export const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/api/login/', {
            method: 'POST',
            body: new FormData(event.currentTarget)
        }).then((response) => {
            if (response.ok)
                document.location.href = "/"
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" name="username" />
            <label for="password">Пароль:</label>
            <input type="password" id="password" name="password" />
            <input type="submit" />
        </form>
    )
}