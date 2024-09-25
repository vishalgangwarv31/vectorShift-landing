import recycle from '../assets/images/recycle.avif'
import notion from '../assets/images/notion2.png'
import airtable from '../assets/images/airtable4.webp'
 
const Uses=()=>{
    return (
        <div className="use-container">
            <div className='use-left'>
                <div className='use-heading'>
                    <img className="recycle-img" src={recycle}/>
                    <h2>Assistants</h2>
                </div>
                <p>
                Integrate natural language 
                search and live-sync databases
                such as Notion and Airtable to 
                automate information retrieval.
                </p>
                <div className='use-icon'>
                    <img className='notion' src={notion}  />
                    <img className='airtable' src={airtable}  />
                    <div className='app-number'>
                        +64
                    </div>
                </div>
            </div>
            <div>
                <div>
                <Tile heading="When was this contract started?" 
                      task="20230329-Product-Contract-Acme.pdf"
                      description = "The contract started on January 1, 2023.">
                </Tile>
                <Tile heading="When was this contract started?" 
                      task="20230329-Product-Contract-Acme.pdf"
                      description = "The contract started on January 1, 2023.">
                </Tile>
                <Tile heading="When was this contract started?" 
                      task="20230329-Product-Contract-Acme.pdf"
                      description = "The contract started on January 1, 2023.">
                </Tile>
                </div>
                
            </div>
            
        </div>
    )
}

const Tile = (prop) =>{
    // console.log(prop)
    return (
        <div >
            <p>
                {prop.heading}
            </p>
            <div className='tile-container'>
                <div className='tile-task'>
                    <img className='notion' src={notion} alt="" />
                    {prop.task}
                </div>
                <p>
                    {prop.description}
                </p>
            </div>
        </div>
    )
}

export default Uses;