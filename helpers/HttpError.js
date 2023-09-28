const errorMessageList = {
  400: "Bad Request", // Поганий запит
  401: "Unauthorized", // Несанкціонований
  403: "Forbidden", // Заборонено
  404: "Not found", // Не знайдено
  409: "Conflict", // Конфлікт
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
