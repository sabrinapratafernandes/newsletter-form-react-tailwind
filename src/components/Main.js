import Content from "./Content"

const Main = () => {
    return(
        <div className="font-roboto w-full">
          <div className="w-full flex flex-col aling-center justify-center">
            <img 
              src="/assets/illustration-sign-up-mobile.svg"
              className="
                  w-full
                  h-auto
                  rounded-b-lg"
            />
          </div>
          <Content/>
        </div>
    )
}
export default Main