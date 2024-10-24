const formatZodError = (errors) => {
  return errors.map((error) => ({
    field: error.path[0],
    message: error.message,
  }));
};

module.exports = { formatZodError };
