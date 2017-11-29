import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Calc100PercentMinus from '../../Utils/Calc100PercentMinus'
import FleetsAdd from './FleetsAdd'
import FleetsNew from './FleetsNew'
import FleetsContent from './FleetsContent'
import PoliciesAdd from './PoliciesAdd'
import FleetsEdit from './FleetsEdit'

export default class FleetsPage extends Component {
    
    render() {
        if (this.props.selectedIndex === null || this.props.actionList === 'Edit') {
            if(this.props.actionList === null) {
                return (
                    <div className="contentPane" style={{ width: Calc100PercentMinus(this.props.itemListPaneWidth) }}>
                        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 className="win-h1" style={{ color: 'grey' }}>No Selection</h1>
                        </div>
                    </div>
                )
            } else {
                switch (this.props.actionList) {
        
                    case "Add_":
                    return (
                        <div className="contentPane" style={{ width: Calc100PercentMinus(this.props.itemListPaneWidth) }}>
                            <FleetsAdd />
                        </div>
                    )
                    case "Add":
                    return (
                        <div className="contentPane listPane" style={{ height: '100%', width: Calc100PercentMinus(this.props.itemListPaneWidth), display: 'inline-block', verticalAlign: 'top' }}>
                            <FleetsNew 
                            location={this.props.location}
                            itemList={this.props.itemList} 
                            changeItemList={this.props.changeItemList}
                            changeActionList={this.props.changeActionList}
                            changeCurrentItem={this.props.changeCurrentItem} />
                        </div>
                    )
                    case "Add Tasks":

                        return (
                            <FleetsContent
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            location={this.props.location}
                            onNavigate={this.props.onNavigate}
                            itemList={this.props.itemList}
                            currentItem={this.props.currentItem}
                            changeItemList={this.props.changeItemList}
                            changeActionList={this.props.changeActionList} />
                        )
                    case "Add Policies":
                        return (
                            <PoliciesAdd />
                        )
                    case "Edit":
                        
                        return (
                            <FleetsEdit
                            itemListPaneWidth={this.props.itemListPaneWidth}
                            onNavigate={this.props.onNavigate}
                            location={this.props.location}
                            itemList={this.props.itemList}
                            changeItemList={this.props.changeItemList}
                            changeActionList={this.props.changeActionList} />
                        )
                        
                    default: 
                        return (
                            <div className="contentPane" style={{ width: Calc100PercentMinus(this.props.itemListPaneWidth) }}>
                                <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h1 className="win-h1" style={{ color: 'grey' }}>No Selection</h1>
                                </div>
                            </div>
                        )
                }
            }
            
        } else {
            let selectedItemList = this.props.itemList.getAt(this.props.selectedIndex)
            if(selectedItemList !== undefined) {
                return (
                    <FleetsContent
                    itemListPaneWidth={this.props.itemListPaneWidth}
                    location={this.props.location}
                    onNavigate={this.props.onNavigate}
                    itemList={this.props.itemList}
                    currentItem={selectedItemList}
                    changeItemList={this.props.changeItemList}
                    changeActionList={this.props.changeActionList} />
                )
            } else {
                return (
                    <div className="contentPane" style={{ width: Calc100PercentMinus(this.props.itemListPaneWidth) }}>
                        <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <h1 className="win-h1" style={{ color: 'grey' }}>No Selection</h1>
                        </div>
                    </div>
                )
            }
            
        }
    }
}
FleetsPage.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    selectedIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array
    ]),
    itemList: PropTypes.object.isRequired,
    actionList: PropTypes.string,
    changeItemList: PropTypes.func.isRequired,
    changeActionList: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
}
