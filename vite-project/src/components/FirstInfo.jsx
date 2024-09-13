const FirstInfo = () =>{
    return (
       <div className="first-container">
            <p className="first-heading">The No-Code</p>
            <p className="first-heading"> AI automations platform</p>
           
            <p className="first-detail">
                An integrated framework of no-code, low-code, and out of the box<br/>
                generative AI solutions to build AI search engines, assistants,<br/>chatbots, and automations.
            </p>
            <Button></Button>
       </div>
    )
}

const Button = () =>{
    return(
        <>
            <button className="get-start-button">Get Started</button>
        </>
    )
}

export default FirstInfo