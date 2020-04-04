import { createSelector} from 'reselect';
const selectUser = state => state.user;



export const selectCurrentUser = createSelector(
    [selectUser], // ARRAY of Input selectors
    (user) => user.currentUser
)