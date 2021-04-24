declare var fromActions: any;

export interface ContactsState {
  loading: boolean;
  name: string | null;
  avatar: string | null;
  status: string | null;
}

export const initialState: ContactsState = {
  name: null,
  avatar: null,
  status: null,
  loading: false,
};

export function ContactsReducer(
  state = initialState,
  action: any
): ContactsState {
  switch (action.type) {
    case fromActions.RECENTTRANSFERS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.RECENTTRANSFERS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        ...data,
        loading: false,
      };
    }

    case fromActions.RECENTTRANSFERS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
