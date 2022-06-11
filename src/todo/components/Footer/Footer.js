import React from "react";

export class Footer extends React.Component {
    createFooter = () => {
        if (this.props.todos > 0) {
            return (
                <div>
                    <span id="footerLeft">{this.props.notCompletedLength() + ' items left'}</span>
                    <button id="footerAll" onClick={() => this.props.filter('all')}>All</button>
                    <button id="footerActive" onClick={() => this.props.filter('active')}>Active</button>
                    <button id="footerCompleted" onClick={() => this.props.filter('completed')}>Completed</button>
                    {!!this.props.completedLength() && <button id="footerClear" onClick={this.props.deleteCompleted}>Clear completed</button>}
                </div>
            );
        }
    }

    render() {
        return (
            <footer>
                {this.createFooter()}
            </footer>
        );
    }
}