"use strict";

var Button = React.createClass({
    onClickCallback: function(event){
        this.props.btnCallback(this.props.text);
        console.log("click");
    },
    render: function(){
        var value = this.props.value;
        return (
            <div className={value?"btnCloud disabledCloud":"btnCloud activeCloud"}
                 onClick = {this.onClickCallback}>
                <p>{this.props.text}</p>
            </div>
        );
    }
});

module.exports = Button;
