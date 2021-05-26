import React from "react";
import { Icon, IconColor, UserAvatar} from "./Styles";

const fontIconCodes = {
    [`bug`]: "\\ea55",
    [`task`]: "\\ea52",
    [`story`]: "\\e9d2",
    [`arrow-down`]: "\\ea3e",
    [`arrow-up`]: "\\ea3a",
};

export const TypeIcon = ({ color, type, ...iconProps }) => (
    <IconColor color={color}>
        <Icon {...iconProps} code={fontIconCodes[type]} />
    </IconColor>
);

export const PriorityIcon = ({ priority, ...iconProps }) => (
    <IconColor color={"PRIORITY" + priority}>
        <Icon
            {...iconProps}
            code={
                fontIconCodes[
                    parseInt(priority) > 2 ? "arrow-up" : "arrow-down"
                ]
            }
        />
    </IconColor>
);

export const UserIcon = ({ user }) => (
   <UserAvatar userAvatar={user && user.avatarUrl} />
);
