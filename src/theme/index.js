module.exports = {
  rules: {
    email: [
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
    ],
    number: [
      { type: 'number', message: 'Please input number', trigger: 'blur,change' }
    ]
  }
};
