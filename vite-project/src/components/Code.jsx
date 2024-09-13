import { FileChartColumnIncreasing , Slack} from 'lucide-react';
import { useEffect } from 'react';

const Code = () =>{
    useEffect(() => {
        const hoverElements = document.querySelectorAll('.hover-box');
    
        const handleMouseEnter = () => {
          hoverElements.forEach(el => el.classList.add('active'));
        };
    
        const handleMouseLeave = () => {
          hoverElements.forEach(el => el.classList.remove('active'));
        };
    
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
        
        return () => {
          hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

      useEffect(() => {
        const hoverElements = document.querySelectorAll('.hover-box2');
    
        const handleMouseEnter = () => {
          hoverElements.forEach(el => el.classList.add('active'));
        };
    
        const handleMouseLeave = () => {
          hoverElements.forEach(el => el.classList.remove('active'));
        };
    
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
        
        return () => {
          hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);
      useEffect(() => {
        const hoverElements = document.querySelectorAll('.hover-box3');
    
        const handleMouseEnter = () => {
          hoverElements.forEach(el => el.classList.add('active'));
        };
    
        const handleMouseLeave = () => {
          hoverElements.forEach(el => el.classList.remove('active'));
        };
    
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
        
        return () => {
          hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);
      useEffect(() => {
        const hoverElements = document.querySelectorAll('.hover-box4');
    
        const handleMouseEnter = () => {
          hoverElements.forEach(el => el.classList.add('active'));
        };
    
        const handleMouseLeave = () => {
          hoverElements.forEach(el => el.classList.remove('active'));
        };
    
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
        
        return () => {
          hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);
      useEffect(() => {
        const hoverElements = document.querySelectorAll('.hover-box5');
    
        const handleMouseEnter = () => {
          hoverElements.forEach(el => el.classList.add('active'));
        };
    
        const handleMouseLeave = () => {
          hoverElements.forEach(el => el.classList.remove('active'));
        };
    
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter);
          el.addEventListener('mouseleave', handleMouseLeave);
        });
        
        return () => {
          hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', handleMouseEnter);
            el.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);
    

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
                        <div className='box hover-box'>
                            <p>File Input</p>
                             <FileChartColumnIncreasing/>
                            JSON, CSV, PDF
                        </div>
                        <div className='box hover-box2'>
                            <p>Instruction </p>
                             Describe this file to me
                        </div>
                        <div className='box hover-box3'>
                            <p>File Loader </p>
                            <FileChartColumnIncreasing/>
                            Read the input file
                        </div>
                        <div className='box hover-box4'>
                            <p>OpenAI LLM </p>
                            <Slack/>
                            Model: gpt-4.0-turbo
                        </div>
                        <div className='box hover-box5'>
                            <p>Result </p>
                            Generated Output
                        </div>
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
                        
                        <div id='box1' className='file-node hover-box'>file_node<span className='equal'> = </span><span className='blue'>InputNode</span> 
                            (<span className='brown'>name</span><span className='equal'>=</span><span className='sky'>'file_input'</span>,<span className='brown'>input_type</span><span className='equal'>=</span><span className='sky'>'file'</span>)
                        </div>

                        <div className='model_text_node hover-box2'>model_text_node<span className='equal'> = </span><span className='blue'>TextNode</span> 
                            (<span className='brown'>text</span><span className='equal'>=</span><span className='sky'>'Describe this file to me.'</span>)
                        </div>

                        <div className='fileloader_node hover-box3'>fileloader_node<span className='equal'> = </span><span className='blue'>FileLoaderNode</span> 
                            (<span className='brown'>file_input</span><span className='equal'>=</span><span className='sky'>file_node.output()</span>)
                        </div>

                        <div className='llm_node hover-box4'>llm_node<span className='equal'> = </span><span className='blue'>OpenAI_LLMNode</span> 
                            (<br/>&nbsp;&nbsp;&nbsp;<span className='brown'>model</span><span className='equal'>=</span><span className='sky'>'gpt-4.0-turbo'</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>system_input</span><span className='equal'>=</span>model_text_node.<span className='sky'>output()</span>,
                             <br/>&nbsp;&nbsp;&nbsp;<span className='brown'>prompt_input</span><span className='equal'>=</span>fileloader_node.<span className='sky'>output()</span><br/>
                            )
                        </div>

                        <div className='output_node hover-box5'>output_node<span className='equal'> = </span><span className='blue'>OutputNode</span> 
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
        <div id={payload.id} className='box hover-box' >
            <p>{payload.heading}</p>
            { payload.icon  && <payload.icon/>}
            {payload.data}
        </div>
    )
}


export default Code;