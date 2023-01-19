import { connect } from 'react-redux';

const Ex = ({ X, Y, Sent, Message, dispatch }) => {
  const HandleJ1 = () => {
    dispatch({ type: 'INCREMENT_X' });
  };

  const HandleJ2 = () => {
    dispatch({ type: 'INCREMENT_Y' });
  };

  const HandleReturnto0 = () => {
    dispatch({ type: 'REMMETRE' });
  };

  const HandlePauseReprendre = () => {
    dispatch({ type: 'PAUSEREPRENDRE' });
  };

  return (
    <div>
      <label>
        <h1>{Sent} {X} . {Y}</h1>
      </label>

      <p>{Message}</p>
      <button onClick={HandleJ1}>Point joueur 1</button>
      <button onClick={HandleJ2}>Point joueur 2</button>
      <button onClick={HandleReturnto0}>Remettre a 0</button>
      <button onClick={HandlePauseReprendre}>Pause / Reprendre</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  X: state.X,
  Y: state.Y,
  Sent: state.Sent,
  Message: state.Message,
});

export default connect(mapStateToProps)(Ex);
