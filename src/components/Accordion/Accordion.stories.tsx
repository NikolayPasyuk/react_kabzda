import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import * as assert from "assert";
import {action} from "@storybook/addon-actions";

const GetCategoryObj = (categoryName: 'Color' | 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...GetCategoryObj('Color')
        },
        onChange: {
            ...GetCategoryObj('Event')
        },
        onClick: {
            ...GetCategoryObj('Event')
        },
        items: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')},
        titleValue: {...GetCategoryObj('Main')},
    }
}

const callback = action("accordion mode change event fired")
const onClickCallBack = action("some item was clicked")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
    onChange: callback,
    onClick: onClickCallBack
}

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: true,
    items: [],
}

export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: false,
    items: [{title: 'Nick', value: 1}, {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}, {title: 'Victor', value: 4}],
}


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    titleValue: "Users",
    items: [
        {title: 'Nick', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Victor', value: 4}
    ],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}
