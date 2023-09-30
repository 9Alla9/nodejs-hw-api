const errorMessageList = {
  400: "Bad Request", // поганий запит
  401: "Unauthorized", // несанкціонований
  403: "Forbidden", // заборонено
  404: "Not found", // не знайдено
  409: "Conflict", // конфлікт
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
