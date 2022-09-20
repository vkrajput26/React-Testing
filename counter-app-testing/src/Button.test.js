// should render without any error
// should have add and reduce buttons
// should have an element with counter value as default ( 0 )
// onClick of ADD, value of Counter should increment by 5
// onClick of REDUCE, the value of Counter should decrement by 5
 
import {render,screen,fireEvent} from "@testing-library/react"
import App from "./App"
import Button from "./Components/Button"
import userEvent from "@testing-library/user-event"

describe("Testing the button Component",()=>{
    it("should render without any error",()=>{

    })

    it("should have add and reduce buttons",()=>{
        render(<Button></Button>)
      
        let button1=screen.getByText("ADD")
        expect(button1).toBeInTheDocument();
         
        let button2=screen.getByText("REDUCER")
        expect(button2).toBeInTheDocument();
    })

    it("should have an element with counter value as default ( 0 )",()=>{
        render(<App/>)
        screen.debug()

        let initcount=screen.getByTestId("counter")
        expect(initcount).toHaveTextContent("0")
    })

    it("onClick of ADD, value of Counter should increment by 5",()=>{
       render(<App/>)
       let inc=screen.getByTestId("increment")
       userEvent.click(inc);
       expect(inc).toHaveTextContent("5")
    })

    it("onClick of REDUCE, the value of Counter should decrement by 5",()=>{
        render(<App/>)
        let inc=screen.getByTestId("decrement")
        userEvent.click(inc);
        expect(inc).toHaveTextContent("-5")
     })


})