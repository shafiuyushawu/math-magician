import { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorScreen from './CalculatorScreen';

function Calculator() {
  const [objState, setObjState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (btnButton) => {
    const newObjState = calculate(objState, btnButton);
    setObjState(newObjState);
  };

  return (
    <div>
      <div className="flex flex-col justify-center p-10 text-xl">
        <CalculatorScreen objState={objState} />
        <div>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('AC')}
          >
            AC
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('+/-')}
          >
            +/-
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('%')}
          >
            %
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-orange-400"
            onClick={() => handleClick('÷')}
          >
            ÷
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('7')}
          >
            7
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('8')}
          >
            8
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('9')}
          >
            9
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-orange-400"
            onClick={() => handleClick('x')}
          >
            x
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('4')}
          >
            4
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('5')}
          >
            5
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('6')}
          >
            6
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-orange-400"
            onClick={() => handleClick('-')}
          >
            -
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('1')}
          >
            1
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('2')}
          >
            2
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('3')}
          >
            3
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-orange-400"
            onClick={() => handleClick('+')}
          >
            +
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn text-xl w-[40%] h-20 bg-slate-200"
            onClick={() => handleClick('0')}
          >
            0
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-slate-200"
            onClick={() => handleClick('.')}
          >
            .
          </button>
          <button
            type="button"
            className="btn text-xl w-[20%] h-20 bg-orange-400"
            onClick={() => handleClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
