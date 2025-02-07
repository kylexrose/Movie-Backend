class ErrorMessageHandlerClass extends Error {//set error class
  constructor(message, statusCode) {
    super(message, statusCode);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    console.log(this);
  }
}

module.exports = ErrorMessageHandlerClass;
