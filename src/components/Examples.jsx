import { useState } from "react";

import TabButton from './TabButton';
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples (){

    const [ selectedTopic, setSelectedTopic] = useState(); 
  // React Hook -> 1. değer her zaman current state value olur 2. değer de durumu güncelleyen fonksiyon olur. useState(burada yazan değer de başlangıç durum değeri stored by React)

  function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    
  }
  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
    );
  }

    return(
        <Section title="Examples" id="examples">
            <Tabs 
            
            buttons={ 
                <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton> 
                {/* props.children Componentsı direkt children olarak görür !!! with  using children*/}
                {/* <TabButton label='Components'></TabButton> !!! with using Attributes*/}
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton> 
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton> 
                </>
                }
                >
                {tabContent}
                </Tabs>

        {/* {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && ( <div id="tab-content">
          
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)} */}
        </Section>
    );
}
