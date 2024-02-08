import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const decreaseStep = (step) => step - 1;
  const increaseStep = (step) => step + 1;

  const handlePrevious = () => step > 1 && setStep(decreaseStep);
  const handleNext = () => step < 3 && setStep(increaseStep);

  // Another way of doing it
  // const handlePrevious = () => step > 1 && setStep((step) => step - 1);
  // const handleNext = () => step < 3 && setStep((step) => step + 1);

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  const purpleBtnStyle = { backgroundColor: bgColor, color: textColor };

  return (
    <button style={purpleBtnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step}: {children}
    </div>
  );
}

// export default App;
