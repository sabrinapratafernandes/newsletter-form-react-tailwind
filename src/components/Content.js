import Form from "./Form";
import Button from "./Button";
import Benefits from "./Benefits";
import Title from "./Title";

const Content = () => {
    return (
        <div className="
                    p-2
                    flex 
                    flex-col">
            <Title/>
            <Benefits/>
            <Form/>
            <Button/>
        </div>
    )
}

export default Content