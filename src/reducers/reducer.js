const json = [
  {
    name: 'адын',
    price: 100,
    discount: '',
  },
  {
    name: 'dva',
    price: 200,
    discount: '',
  },
  {
    name: 'тры',
    price: 400,
    discount: '',
  },
]

export default function reducer(state = json, action) {
  switch (action.type) {
  case 'ADD_PRODUCT':
    return [
      ...state,
      action.payload
    ]
  case 'APPLY_DISCOUNT':
    return action.payload
  default:
    return state;
  }
}
