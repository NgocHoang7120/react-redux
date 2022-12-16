let initState = {
    listUser: [
        { id: 'abc-01', name: 'CNH', age: '18' },
        { id: 'abc-02', name: 'VNQ', age: '16' },
        { id: 'abc-03', name: 'NTH', age: '19' },
        { id: 'abc-04', name: 'CTD', age: '22' },
    ],
    posts: [],
    statusUser: [],
};

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'delete_user':
            let {listUser} = state
            console.log(">>>check userdetele: ", action);
            let currentList = listUser.filter(item => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    return null;
                }
            });
            return { ...state, listUser: currentList};
        case 'create_user':
            // console.log(">>>check action from create_newuser: ", action);
            return {...state, listUser: [...state.listUser, action.payload]};
        case 'edit_user':
            return {...state, listUser: action.payload};
        default:
            return state;
    }
};

export default rootReducer;