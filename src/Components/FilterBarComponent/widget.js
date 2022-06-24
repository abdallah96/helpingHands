import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import './widget.css'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdChevronRight,
    MdKeyboardArrowDown,
    MdAddBox,
    MdIndeterminateCheckBox,
    MdFolder,
    MdFolderOpen,
    MdInsertDriveFile
  } from "react-icons/md";
const nodes = 
[{
    value: 'category',
    label: 'Categories',
    children: [
        { value: 'Plumbing', label: 'plumbing' },
        { value: 'baby-sitting', label: 'baby-sitting' },
        { value: 'Gardening', label: 'Gardening' },
        { value: 'Tutors', label: 'Tutors' },
        { value: 'driving', label: 'driving' },
      
    ],
}];
const nodes2 = 
[{
    value: 'Price',
    label: 'Price',
    children: [
        { value: 'driving', label: '0-100$' },
        { value: 'baby-sitting', label: '101$-105$' },
    ],
}];
const nodes3 = 
[{
    value: 'Location',
    label: 'Location',
    children: [
        { value: 'Mannheim', label: 'Mannheim' },
        { value: 'Heidelberg', label: 'Heidelberg' },
        { value: 'Seckenheim', label: 'Seckenheim' },
        { value: 'Cologne', label: 'Cologne' },
        { value: 'Munich', label: 'Munich' },
        { value: 'Berlin', label: 'Berlin' },
    ],
}];
const icons = {
    check: <MdCheckBox className="rct-icon rct-icon-check" />,
    uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
    halfCheck: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
    ),
    expandClose: (
      <MdChevronRight className="rct-icon rct-icon-expand-close" />
    ),
    expandOpen: (
      <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
    ),
    expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
    collapseAll: (
      <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
    ),
    // parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
    // parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
    // leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />
  };

class Widget extends React.Component {
    state = {
        checked1: [],
        expanded1: [],
        checked2: [],
        expanded2: [],
        checked3: [],
        expanded3: [],
    };

    render() {
        return ( 
        < div className='sidebar' >
            <h3 className='filter' >Filter</h3>
            <CheckboxTree nodes = { nodes }
            checked = { this.state.checked1 }
            expanded = { this.state.expanded1 }
            onCheck = { checked1 => this.setState({ checked1 }) }
            onExpand = { expanded1 => this.setState({ expanded1 }) }
            icons={icons}
            />
            
            < CheckboxTree nodes = { nodes2 }
            checked = { this.state.checked2 }
            expanded = { this.state.expanded2 }
            onCheck = { checked2 => this.setState({ checked2 }) }
            onExpand = { expanded2 => this.setState({ expanded2 }) }
            icons={icons}
            />

< CheckboxTree nodes = { nodes3 }
            checked = { this.state.checked3 }
            expanded = { this.state.expanded3 }
            onCheck = { checked3 => this.setState({ checked3 }) }
            onExpand = { expanded3 => this.setState({ expanded3 }) }
            icons={icons}
            />

            
            </div >
        );
    }
}

export default Widget;