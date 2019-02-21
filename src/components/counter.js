import React, { Component } from 'react';

import Show from './show';
export default class Counter extends Component {
constructor() {
    super()

    this.state= {
        count: 0
    }

    this.hanldeAdd = this.hanldeAdd.bind(this)
    this.hanldeSub = this.hanldeSub.bind(this)
}

    hanldeAdd() {
        this.set.state({
            count: ++this.state.count
        })
    }

    handleSub() {
        this.set.state({
            count: --this.state.count
        })
    }
    render() {
        return (
            <div>
               <h3>
                   <div>
                    The Value of count is {this.state.count}
                   </div>
               </h3>
               <button onClick={this.hanldeAdd}>Add</button>
               <button onClick={this.hanldeSub}>Sub</button>
            </div>
        )
    }
}

