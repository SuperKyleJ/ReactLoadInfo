import {
  Button,
  DisplayRoot,
  Text,
  Card,
  Pill,
  ScrollContainer,
} from "mrbd-ui-kit";
import { useEffect, useState } from "react";
import { Camera, Heart } from "lucide-react";
import { StepForward, StepBack, RotateCcw } from "lucide-react";
function BrakeTest() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Step 1: Check governor cut out",
      instruction:
        "With the engine running and both tanks above 100 PSI, pump down on the brake pedal until the air pressure is just below 90 PSI. Stop pumping, and the compressor should begin to build air pressure.",
      instruction2:
        "Let pressure build until the air stops building. The air pressure should quit building at approximately 120 PSI. You will know the compressor cut out when you hear air exhaust from the air dryer or see the gauge has stopped rising.",
      instruction3: "",
    },

    {
      title: "Step 2: Test air leakage rate",
      instruction:
        "Next, shift the transmission into N, turn the engine off and leave the key in the ON position without starting the truck. Keep both feet on the floor and roll the window down.",
      instruction2:
        "Release all the brakes by pushing the red and yellow buttons in. Allow the air pressure gauges to stabilize.",
      instruction3:
        "Then, to complete your applied pressure test and check for leaks, push the brake pedal down firmly and hold for one minute. Watch the air gauges and listen out the window for signs of air leaks. Air loss should not exceed 4 PSI for a combination vehicle, or 3 PSI for a tractor only.",
    },

    {
      title: "Step 3: Test low pressure warning signal",
      instruction:
        "Next, complete the warning light and buzzer test. To do this, step on and off the brake pedal repeatedly to reduce the air tank pressure. The low air pressure warning signal must come on before the pressure drops to less than 60 PSI in the air tank, or half of the maximum pressure.",
      instruction2: "",
      instruction3: "",
    },

    {
      title: "Step 4: Check that spring brakes come on automatically",
      instruction:
        "Next, complete the protection valve pop-out test. To do this, continue to fan off the air pressure by stepping on and off the brake pedal to reduce tank pressure.",
      instruction2:
        "Both buttons on the dash should pop out when the air pressure falls to approximately 20-45 PSI. This will cause the spring brakes to come on.",
      instruction3: "",
    },
    {
      title: "Step 5: Check rate of air pressure buildup",
      instruction:
        "Next, remove the chock blocks and stow them away. Ensure the truck is off while doing this.",
      instruction2:
        "Then, enter the cab and start the engine to build up air pressure. Hold the accelerator at around 1200 RPM and watch the air gauges.",
      instruction3:
        "When the engine is at operating rpms, the pressure should build from 85 to 100 PSI within 45 seconds.",
    },
    {
      title: "Step 6: Trailer and parking brake test",
      instruction:
        "Next, place the transmission into D and push the yellow button in. Gently pull against the trailer parking brakes. Your unit should move but not drag the trailer.",
      instruction2:
        "Then, pull the yellow button out and push the red button in. Gently pull against the tractor parking brakes. Your unit should not move.",
      instruction3: "",
    },
    {
      title: "Step 7: Service brake test",
      instruction:
        "For your final test, push the yellow button in. Both buttons should be pushed in at this point.",
      instruction2:
        "Now, drive forward slowly at about 5 mph and apply the brake firmly. Your unit should stop with no pulling to either side and without any grinding noises.",
      instruction3: "",
    },
  ];
  function showStep() {
    const step = steps[currentStep];
    document.getElementById("stepTitle").textContent = step.title;
    document.getElementById("stepInstruction").textContent = step.instruction;
    document.getElementById("stepInstruction2").textContent = step.instruction2;
    document.getElementById("stepInstruction3").textContent = step.instruction3;
  }
  function nextStep() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }
  function previousStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }
  function restartTutorial() {
    if (currentStep > 0) {
      setCurrentStep(0);
      showStep();
    }
  }
  return (
    <div>
      <p>Brake Test</p>
      <Card>
        <p>{steps[currentStep].title}</p>
        <p>{steps[currentStep].instruction}</p>
        <p>{steps[currentStep].instruction2}</p>
        <p>{steps[currentStep].instruction3}</p>
      </Card>
      <Card>
        <button onClick={previousStep}>
          <StepBack />
        </button>
        <button onClick={nextStep}>
          <StepForward />
        </button>

        <button onClick={restartTutorial}>
          <RotateCcw />
        </button>
      </Card>
    </div>
  );
}
export default BrakeTest;
