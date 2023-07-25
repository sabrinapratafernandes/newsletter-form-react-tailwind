import Form from "./Form";
import Button from "./Button";
import Benefits from "./Benefits";
import Title from "./Title";
import NewsletterForm from "./NewsletterForm";

const Content = () => {
    return (
        <div className="
                    p-2
                    flex 
                    flex-col">
            <Title/>
            <Benefits/>
            <NewsletterForm/>
        </div>
    )
}

export default Content