export default [
  {
    name: 'First Name',
    camelCase: 'firstName',
    type: 'text',
    required: true,
    def: 'Oliver'
  },
  {
    name: 'Family Name',
    camelCase: 'familyName',
    type: 'text',
    required: true,
    def: 'Plummer'
  },
  {
    name: 'Email',
    camelCase: 'email',
    type: 'text',
    required: true,
    def: 'oly.rbsc@gmail.com'
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
