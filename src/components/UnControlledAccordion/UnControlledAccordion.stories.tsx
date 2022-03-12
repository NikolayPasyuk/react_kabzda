import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>
}
