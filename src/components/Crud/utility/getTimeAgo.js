// Формирует сообщение о том сколько прошло времени с момента публикации с правильным окончанием слова.
function formatTimeAgo(diffName, value) {
  const v = Math.floor(value);
	const n = v % 10; // Получаем последнюю цифру числа, от нее зависит окончание слова.

  let option = 3; // У слова может быть три варианта окончания.
  // Определяем вариант окончания слова.
	if (v === 11 || v === 12 || v === 13 || v === 14) option = 3; // Сюда попадут 11, 12, 13, 14.
	else if (n === 1) option = 1; // Сюда попадут числа оканчиающиеся на 1: 1, 21, 31, ... (кроме 11).
	else if ((n > 1) && (n < 5)) option = 2; // Сюда попадут числа оканчиающиеся на 2, 3, 4 (кроме 12, 13, 14).
	else option = 3; // Сюда попадут все остальные.

	// Три варианта окончания слова для минут, часов и дней:
  const options = {
		minutes: {
			1: 'минута',
			2: 'минуты',
			3: 'минут',
		},
		hours: {
			1: 'час',
			2: 'часа',
			3: 'часов',
		},
		days: {
			1: 'день',
			2: 'дня',
			3: 'дней',
		}
	}

	return `${v} ${options[diffName][option]} назад`;
}

// Определяет сколько прошло времени с момента публикации и возвращает соответствующее сообщение.
export default function getTimeAgo(date) {
	const oldDate = +new Date(date);
	const currDate = Date.now();

	const diffMinutes = (currDate - oldDate) / 1000 / 60; // Разница между датами в минутах.
	if (diffMinutes < 60 ) return formatTimeAgo('minutes', diffMinutes);

	const diffHours = diffMinutes / 60; // Разница между датами в часах.
	if (diffHours < 24) return formatTimeAgo('hours', diffHours);

	const diffDays = diffHours / 24; // Разница между датами в днях.
	return formatTimeAgo('days', diffDays);
}