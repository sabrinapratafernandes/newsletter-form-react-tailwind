import Form from "./Form";
import Button from "./Button";
import Benefits from "./Benefits";
import Title from "./Title";

const Main = () => {
    return(
        <div className="font-roboto">
          <img 
            src="/assets/illustration-sign-up-mobile.svg"
            className="
                w-full 
                rounded-b-lg"
          >
          </img>
          <Title/>
          <Benefits/>
          <Form/>
          <Button/>
        </div>
    )
}
export default Main