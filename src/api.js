export async function getTracks() {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/catalog/track/all/",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getUserSignup({ email, password, username }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    }
  );

  if (response.status === 400) {
    throw new Error({
      username: ["Пользователь с таким именем уже существует."],
      email: ["Пользователь с таким адрес электронной почты уже существует."],
      password: [
        "Введённый пароль слишком короткий. Он должен содержать как минимум 8 символов.",
        "Введённый пароль слишком широко распространён.",
        "Введённый пароль состоит только из цифр.",
      ],
    });
  } else if (response.status === 500) {
    throw new Error("Сервер сломался");
  }

  const data = await response.json();
  return data;
}
