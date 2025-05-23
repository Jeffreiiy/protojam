import "./Congrats.css";
interface countProps {
  questionCount: number;
  clickCount: number;
}

function Congrats({ questionCount, clickCount }: countProps) {
  return (
    <h3>
      {" "}
      Bravo, ça ne t'a pris que <span className="count1">{clickCount}</span>{" "}
      clicks pour repondre aux <span className="count2">{questionCount}</span>{" "}
      questions !
    </h3>
  );
}
export default Congrats;
