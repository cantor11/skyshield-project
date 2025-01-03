import { Text } from "@react-three/drei";
import useQuizStore from "../../../stores/quiz-store";

import Platform from "./trophies/Platform";
import GoldTrophy from "./trophies/GoldTrophy";
import SilverTrophy from "./trophies/SilverTrophy";
import BronzeTrophy from "./trophies/BronzeTrophy";

const Rewards = () => {
    const { questionsSection } = useQuizStore(); // Information brought from store
  
    return(
        <>
          <Text position={[-140, 10, 0]} rotation-y={Math.PI / 2.2} color="yellow" fontSize={10}>
            Trofeos
          </Text>
          <Text position={[-140, 1, 0]} rotation-y={Math.PI / 2.2} color="yellow" fontSize={5}>
            Gana trofeos por demostrar tu conocimiento
          </Text>
          <Text position={[-125, -80, 75]} rotation-y={Math.PI / 2} color="white" fontSize={6}>
            Mejor puntaje: {questionsSection.bestUserScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
          </Text>
          <Platform position={[-40, -23, -126.5]}/>
          {questionsSection.bestUserScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 1 ?
            <BronzeTrophy position={[-40, -20, -126.5]}/>
            : null}
          {questionsSection.bestUserScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 2 ?
            <SilverTrophy position={[-40, -20.5, -126.5]}/>
            : null}
          {questionsSection.bestUserScore.reduce((accumulator, currentValue) => accumulator + currentValue, 0) >= 3 ?
            <GoldTrophy position={[-40, -21, -126.5]}/>
            : null}
        </>
    )
}

export default Rewards;