import PropTypes from 'prop-types';

function CalculatorScreen(props) {
  const { objState } = props;
  return (
    <>
      <div className="rounded-sm h-20 w-[80%] bg-slate-400 text-5xl text-right text-white p-2">
        {objState.next || objState.total || '0'}
      </div>
    </>
  );
}

CalculatorScreen.propTypes = {
  objState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default CalculatorScreen;
