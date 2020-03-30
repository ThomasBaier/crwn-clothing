1. Pattern to get state into Component from Reducer:

    import {connect } from 'react-redux';


    const mapStateToProps = () =>({
        currentUser: state.user.currentUser
    });

    export default connect(mapStateToProps)(Header);
    // mapStateToProps makes sure to get currentUser as Props from  Redux

2. Pattern setState (dispatch State)
