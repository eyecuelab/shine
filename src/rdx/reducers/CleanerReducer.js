import * as types from '../actions/types';

const cleanerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_CLEANER_PROFILE:
      console.log('REDUCER', action.payload);
      return action.payload;
    // errorMessage: null,
    // signupMessage: null,
    // status: 'Cleaner Profile added',;
    // case types.ADD_CLEANER_PROFILE:
    //   return {
    //     id: action.id,
    //     businessName: action.profile.businessName,
    //     imageUrl: action.profile.imageUrl,
    //     bio: action.profile.bio,
    //     streetAddress: action.address.streetAddress,
    //     city: action.address.city,
    //     state: action.address.state,
    //     postalCode: action.address.postalCode,
    //     phoneNumber: action.address.phoneNumber,
    //     email: action.profile.email,
    //     userId: action.profile.user_id,
    //     createdAt: null,
    //     updatedAt: null,
    //     // shoeTypes: null,
    //   };
    default:
      return state;
  }
};

export default cleanerReducer;
