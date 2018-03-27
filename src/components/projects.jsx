import React, { Component } from 'react';
import { List, Icon, Tag } from 'antd';

const data = [
  { title: 'Racing car sprays burning fuel into crowd.',
    tags: ['abc', 'tag', 'cars'],
    icon: 'pushpin-o'
  },
  { title: 'Japanese princess to wed commoner.',
    tags: ['abc', 'tag', 'japan', 'asia'],
    icon: 'pushpin-o'
  },
  { title: 'Australian walks 100km after outback crash.',
    tags: ['abc', 'tag', 'testag', 'walking'],
    icon: 'pushpin-o'
  },
  { title: 'Man charged over missing wedding girl.',
    tags: ['abc', 'tag', 'fuckup'],
    icon: 'pushpin-o'
  },
  { title: 'Los Angeles battles huge wildfires.',
    tags: ['abc', 'tag', '123', 'LA'],
    icon: 'pushpin-o'
  },
];

export default class Projects extends Component {
  render() {
    return (
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Icon type={item.icon}/>
            <h3>{item.title}</h3>
            {
              item.tags.map(tag => {
                return <Tag>{tag}</Tag>
              })
            }
            
          </List.Item>
        )}
      />
    );
  }
}
