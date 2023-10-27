exports.create = (req, res) => {
  // Simply, we added the create as a property into exports objects. It helps to exports easily.
  res.json({
    data: "Test message by the controllers",
  });
};
