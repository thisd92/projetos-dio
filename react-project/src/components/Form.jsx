import { Hello } from "./Hello";
import { ButtonState } from "./ButtonState";

function Form(){

    return(
        <>
            <Hello />
            Insert your name:
            <form>
                <input type="text" />
                <ButtonState txt="Enter"/>
            </form>
        </>
    )
}

export default Form;