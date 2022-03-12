import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";


function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/*<UnControlledRating/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            {/*<UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}

            {/*<Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
*/}
            {/*<UnControlledAccordion titleValue={"Blabla"}/>*/}

            {/*<UnControlledOnOff on={true}/>
            <UnControlledOnOff on={false}/>
*/}
            {/*{
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*!/*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
