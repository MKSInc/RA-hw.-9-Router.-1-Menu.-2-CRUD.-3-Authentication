import { useState, createContext } from 'react';

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  // Нужно ли ждать ответ от сервера. Если был запрос на изменение данных на сервере,
  // то нужно дождаться от сервера ответа с подтверждением изменений. И только после этого делать новый запрос за данными.
  const [waitingResponse, setWaitingResponse] = useState(false);

  const context = {
    waitingResponse,
    setWaitingResponse,
  };

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  );
}