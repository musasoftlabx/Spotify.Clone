export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  //"BQDlURby4V8KkT68TxxPR-siTFcnvjbeJRxWzQV5n3nJf1_Ti4NSLamJQacmu6wrFdGbE_X0xRMrajLxE_uvRks0I7nqMRpLj6CQrqwVyilgmgzufgNYBKAyMPIPVgIkPbjUnyVDpOpxLCTmxY72-qmn1kfPXhxyEBpvcN3b1DkiwUoWySJmC4b2",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
