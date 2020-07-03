import * as types from '../actions/types';

const cleanerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CLEANER_PROFILE:
      return {
        id: action.id,
        businessName: action.payload.businessName,
        imageUrl: action.payload.imageUrl,
        bio: action.payload.bio,
        streetAddress: action.address.streetAddress,
        city: action.address.city,
        state: action.address.state,
        postalCode: action.address.postalCode,
        phoneNumber: action.address.phoneNumber,
        email: action.payload.email,
        userId: action.payload.user_id,
        createdAt: null,
        updatedAt: null,
        shoeTypes: null,
      };
    default:
      return state;
  }
};

export default cleanerReducer;
