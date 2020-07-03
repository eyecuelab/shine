import * as types from '../actions/types';

const cleanerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CLEANER_PROFILE:
      return {
        id: action.id,
        businessName: action.payload.businessName,
        imageUrl: action.payload.imageUrl,
        bio: action.payload.bio,
        streetAddress: action.payload.streetAddress,
        city: action.payload.city,
        state: action.payload.state,
        postalCode: action.payload.postalCode,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        userId: action.payload.user_id,
        createdAt: action.payload.completeAt,
        updatedAt: action.payload.deletedAt,
        shoeTypes: action.payload.deletedAt,
      };
    default:
      return state;
  }
};

export default cleanerReducer;
