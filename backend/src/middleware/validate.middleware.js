const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.errors.map(e => ({
        field: e.path[0],
        message: e.message
      }))
    });
  }
};

export default validate;
