export default [
  {
    name: 'First Name',
    camelCase: 'firstName',
    type: 'text',
    required: true,
    def: 'foo'
  },
  {
    name: 'Family Name',
    camelCase: 'familyName',
    type: 'text',
    required: true,
    def: 'bar'
  },
  {
    name: 'Email',
    camelCase: 'email',
    type: 'text',
    required: true,
    def: 'foo@bar.com'
  },
  {
    name: 'Date of Birth',
    camelCase: 'dob',
    type: 'date',
    required: true,
    def: { year: 2000, month: 4, day: 22 }
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
