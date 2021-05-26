import React from 'react';
import {Icon, IconColor, UserAvatar} from './Styles';

  const fontIconCodes = {
    
    "task": '\\ea52',
    "story" : '\\e9d2',
    "bug" : '\\ea55',
    "arrow-up" : '\\ea3a',
    "arrow-down": '\\ea3e',
    "improvment": '\\e9da',
    
    "file-text-2": '\\e926',
    "arrow-up4" : '\\\ea32',
    "arrow-down4": '\\ea36',

  "jira" : '\\e900',
  "home": '\\e901',
  "pencil": '\\e905',
  "image" : '\\e90d',
  "file-empty": '\\e924',
  "folder" : '\\e92f',
  "folder-open" : '\\e930',
  "folder-plus" : '\\e931',
  "folder-minus": '\\e932',
  "price-tag" : '\\e935',
  // "address-book": '\\e944'
  "arrow-down2": '\\e944',
  "arrow-up2": '\\e944',
  "envelop" : '\\e945',
  // "bell" : '\\e951'
  // "story" : '\\e951'

  "stopwatch" : '\\e952',
  "display" : '\\e956',
  "floppy-disk": '\\e962',
  "user" : '\\e971',
  "spinner6": '\\e97f',
  "equalizer": '\\e992',
  "equalizer2": '\\e993',
  "cog" : '\\e994',
  "cogs": '\\e995',
  // "bug" : '\\e999',
  "stats-bars" : '\\e99c',
  "stats-bars2": '\\e99d',
  "bin" : '\\e9ac',
  "bin2": '\\e9ad',
  "clipboard": '\\e9b8',
  "list-numbered": '\\e9b9',
  "list" : '\\e9ba',
  "list2": '\\e9bb',
  "menu" : '\\e9bd',
  "link" : '\\e9cb',
  "attachment": '\\e9cd',
  "bookmarks": '\\e9d3',
  "plus" : '\\ea0a',
  "minus": '\\ea0b',
  "cancel-circle": '\\ea0d',
  "blocked": '\\ea0e',
  "cross" : '\\ea0f',
  "checkmark": '\\ea10',
  "checkmark2": '\\ea11',
  
  "sort-alpha-asc" : '\\ea48',
  "sort-alpha-desc" : '\\ea49',
  
  "checkbox-unchecked": '\\ea53',
 
  "github": '\\eab0',
}

export const TypeIcon = ({color, type, ...iconProps}) => (
  <IconColor color={color}>
  <Icon {...iconProps} code={fontIconCodes[type]}/>
  </IconColor>
);

export const PriorityIcon = ({priority, ...iconProps}) => (
    <IconColor color={priority}>
    <IconColor color={"PRIORITY" + priority}>
      <Icon {...iconProps} code={fontIconCodes[parseInt(priority) > 2 ? 'arrow-up' : 'arrow-down']}/>
    </IconColor>
);

export const UserIcon = ({user}) => <UserAvatar userAvatar={user.avatarUrl}></UserAvatar>