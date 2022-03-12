import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}
                                                  items={[]} onClick={onClickCallback}/>

export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                     items={[{title: "Nick", value: 1}, {title: "Masha", value: 2},
                                                         {title: "Bob", value: 3}, {title: "Victor", value: 4}]}
                                                     onClick={onClickCallback}
/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <Accordion titleValue={"Users"} collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Nick", value: 1},
                          {title: "Masha", value: 2},
                          {title: "Bob", value: 3},
                          {title: "Victor", value: 4}
                      ]}
                      onClick={(value) => {
                          alert(`user with ID ${value} should be happy`)
                      }}
    />
}