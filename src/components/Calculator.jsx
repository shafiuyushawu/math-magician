import CalculatorScreen from './CalculatorScreen';

function Calculator() {
  return (
    <>
      <div className="text-xl flex flex-col justify-center p-10">
        <CalculatorScreen />
        <div>
          <div className="btn text-xl w-[5%] bg-slate-200">AC</div>
          <div className="btn text-xl w-[5%] bg-slate-200">+/-</div>
          <div className="btn text-xl w-[5%] bg-slate-200">%</div>
          <div className="btn text-xl w-[5%] bg-orange-400">/</div>
        </div>
        <div>
          <div className="btn text-xl w-[5%] bg-slate-200">7</div>
          <div className="btn text-xl w-[5%] bg-slate-200">8</div>
          <div className="btn text-xl w-[5%] bg-slate-200">9</div>
          <div className="btn text-xl w-[5%] bg-orange-400">X</div>
        </div>
        <div>
          <div className="btn text-xl w-[5%] bg-slate-200">4</div>
          <div className="btn text-xl w-[5%] bg-slate-200">5</div>
          <div className="btn text-xl w-[5%] bg-slate-200">6</div>
          <div className="btn text-xl w-[5%] bg-orange-400">-</div>
        </div>
        <div>
          <div className="btn text-xl w-[5%] bg-slate-200">1</div>
          <div className="btn text-xl w-[5%] bg-slate-200">2</div>
          <div className="btn text-xl w-[5%] bg-slate-200">3</div>
          <div className="btn text-xl w-[5%] bg-orange-400">+</div>
        </div>
        <div>
          <div className="btn text-xl w-[10%] bg-slate-200">0</div>
          <div className="btn text-xl w-[5%] bg-slate-200">.</div>
          <div className="btn text-xl w-[5%] bg-orange-400">=</div>
        </div>
      </div>
    </>
  );
}
export default Calculator;