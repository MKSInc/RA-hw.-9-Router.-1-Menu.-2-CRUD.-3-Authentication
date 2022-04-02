// Генерирует и возвращает ссылки для продакшена или разработки в зависимости от того,
// где разворачивается проект.

const url = new URL(window.location.href);

// Параметры для разработки.
if (url.hostname === 'localhost') {
  url.port = '8080';
}

// Для фронтенда на git-hub.
if (url.hostname === 'mksinc.github.io') {
  url.hostname = 'ra-9-2-crud.herokuapp.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = ''; // Убираем ненужный путь (/ru, /en, ...), чтобы ссылка была на корень.

const links = {
  root: root.origin,
  // posts: new URL('posts', url.href).href,
};

export default links;
