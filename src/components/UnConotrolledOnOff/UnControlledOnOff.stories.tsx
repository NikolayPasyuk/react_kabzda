import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UnControlledOnOff} from "./UnControlledOnOff";
import {OnOff} from "../OnOff/OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
}

const callback = action("accordion mode change event fired")

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>
export const BugMode = () => <div>Unsync when change defaultValue when</div>