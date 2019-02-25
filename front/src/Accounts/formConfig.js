export default [
  {
    name: 'First Name',
    camelCase: 'firstName',
    type: 'text',
    required: true
  },
  {
    name: 'Family Name',
    camelCase: 'familyName',
    type: 'text',
    required: true
  },
  {
    name: 'Email',
    camelCase: 'email',
    type: 'text',
    required: true
  },
  {
    name: 'Date of Birth',
    camelCase: 'dob',
    type: 'date',
    required: true
  },
  {
    name: 'Gender',
    camelCase: 'gender',
    type: 'selection',
    required: true,
    selections: [
      { name: 'Male', camelCase: 'male' },
      { name: 'Female', camelCase: 'female' },
      { name: 'Other', camelCase: 'other' }
    ]
  }
]
