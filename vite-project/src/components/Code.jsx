import { FileChartColumnIncreasing , Slack} from 'lucide-react';

const Code = () =>{
    return(
        <div className="code-container">
            <span className='heading-code-style'>Drag and Drop to build application</span>
            <div className="code-detail">
                <div className="code-info">
                    <header>No Code</header>
                    <p>
                        Build and deploy powerful applications with drag and drop components and 
                        customizable deployment interfaces. No coding required. 
                    </p>
                    <div className='box-container'>
                        <Box heading='File Input' data='JSON, CSV, PDF' icon={FileChartColumnIncreasing}></Box>
                        <Box heading='Instruction Text' data='Describe this file to me'></Box>
                        <Box heading='File Loader' data='Read the input file' icon={FileChartColumnIncreasing} ></Box>
                        <Box heading='OpenAI LLM' data='Model: gpt-4.0-turbo' icon={Slack} ></Box>
                        <Box heading='Result' data='Generated Output'></Box>
                    </div>
                    
                </div>
                <div className="code-code">
                    <header>Code SDK</header>
                    <p>
                        Build and deploy powerful applications with drag and drop components and 
                        customizable deployment interfaces. No coding required. 
                    </p>
                    &nbsp;
                    <div className='code-boxx'>
                        <header className='file-name'>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='title-code'> pipeline_setup.py</div>
                        </header>
                        <div className='import'>
                            <span className='blue'>import</span> vectorshift.node <span className='blue'>import</span> * <br/>
                            <span className='blue'>import</span> vectorshift.pipeline <span className='blue'>import</span>  *
                        </div>
                        <br />
                        
                        <div className='file-node'>file_node<span className='equal'> = </span><span className='blue'>InputNode</span> 
                            (<span className='brown'>name</span><span className='equal'>=</span><span className='sky'>'file_input'</span>,<span className='brown'>input_type</span><span className='equal'>=</span><span className='sky'>'file'</span>)
                        </div>

                        <div className='model_text_node'>model_text_node<span className='equal'> = </span><span className='blue'>TextNode</span> 
                            (<span className='brown'>text</span><span className='equal'>=</span><span className='sky'>'Describe this file to me.'</span>)
                        </div>

                        <div className='fileloader_node'>fileloader_node<span className='equal'> = </span><span className='blue'>FileLoaderNode</span> 
                            (<span className='brown'>file_input</span><span className='equal'>=</span><span className='sky'>file_node.output()</span>)
                        </div>

                        <div className='llm_node'>llm_node<span className='equal'> = </span><span className='blue'>OpenAI_LLMNode</span> 
                            (<br/>&nbsp;&nbsp;&nbsp;<span className='brown'>model</span><span className='equal'>=</span><span className='sky'>'gpt-4.0-turbo'</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>system_input</span><span className='equal'>=</span>model_text_node.<span className='sky'>output()</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>prompt_input</span><span className='equal'>=</span>fileloader_node.<span className='sky'>output()</span><br/>
                            )
                        </div>

                        <div className='output_node'>output_node<span className='equal'> = </span><span className='blue'>OutputNode</span> 
                            (<br/>&nbsp;&nbsp;&nbsp;<span className='brown'>name</span><span className='equal'>=</span><span className='sky'>'my_output'</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>output_type</span><span className='equal'>=</span><span className='sky'>'text'</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>input</span><span className='equal'>=</span>llm_node.<span className='sky'>output()</span><br/>
                            )
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

const Box = (payload)=>{
    return(
        <div className='box'>
            <p>{payload.heading}</p>
            { payload.icon  && <payload.icon/>}
            {payload.data}
        </div>
    )
}


export default Code;