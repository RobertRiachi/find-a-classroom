/**
 * Created by Robert on 4/3/2016.
 */
import React from 'react';

export default class Input extends React.Component {

    constructor(){
        super();
        this.state = {
          day: "",
          times: 0,
          bgColM: "black",
          bgColT: "black",
          bgColW: "black",
          bgColH: "black",
          bgColF: "black"
        };
    }

    handleMondayChange(e) {
        this.setState({day: "M"});

    }
    handleTuesdayChange(e){
        this.setState({day: "T"});
    }
    handleWednesdayChange(e){
        this.setState({day: "W"});
    }
    handleThursdayChange(e){
        this.setState({day: "H"});
    }
    handleFridayChange(e){
        this.setState({day: "F"});
    }
    handleTimeChange(e){
        var time = (e.target.value);
        var hour = time.split(":")[0]
        var min = time.split(":")[1]
        var convertedTime = (parseInt(hour)*60) + (parseInt(min));
        this.setState({times: convertedTime});
    }
    handleFinder(){
        //Add Data + Convert Time
        //Fix Variables

        var day = this.state.day;
        var timeS = this.state.times;
        var newRooms = ""

        var classRoom =  [ { "name": "A-104", "time": { "M": [ [ 945, 1095 ] ], "T": [ [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 675, 765 ], [ 945, 1095 ] ], "H": [ [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "A-107", "time": { "M": [ [ 615, 735 ] ], "T": [ [ 495, 615 ], [ 735, 855 ], [ 975, 1095 ] ], "W": [ [ 735, 765 ], [ 855, 975 ] ], "H": [ [ 615, 675 ], [ 765, 855 ], [ 945, 1095 ] ], "F": [ [ 585, 615 ], [ 735, 855 ], [ 945, 1095 ] ] } }, { "name": "A-109", "time": { "M": [ [ 585, 735 ], [ 855, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 615 ], [ 735, 975 ] ], "W": [ [ 495, 765 ], [ 945, 1095 ] ], "H": [ [ 615, 675 ], [ 765, 975 ] ], "F": [ [ 495, 615 ], [ 735, 765 ], [ 945, 1095 ] ] } }, { "name": "A-306", "time": { "M": [ [ 585, 675 ], [ 855, 975 ], [ 1065, 1095 ] ], "T": [ [ 585, 855 ], [ 945, 1095 ] ], "W": [ [ 585, 765 ], [ 945, 1095 ] ], "H": [ [ 675, 855 ], [ 945, 1095 ] ], "F": [ [ 585, 765 ], [ 945, 1095 ] ] } }, { "name": "A-307", "time": { "M": [ [ 615, 675 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 675, 855 ], [ 1065, 1095 ] ], "W": [ [ 585, 675 ], [ 855, 975 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "A-310", "time": { "M": [ [ 615, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 615 ], [ 735, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 735, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 585, 615 ], [ 735, 765 ], [ 855, 1095 ] ] } }, { "name": "A-311", "time": { "M": [ [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ] ], "W": [ [ 585, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 765, 975 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "A-314", "time": { "M": [ [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 975 ], [ 1065, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "A-315", "time": { "M": [ [ 585, 675 ], [ 945, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ] ], "W": [ [ 615, 765 ], [ 975, 1095 ] ], "H": [ [ 615, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "A-319", "time": { "M": [ [ 945, 975 ] ], "T": [ [ 585, 615 ], [ 735, 855 ] ], "W": [ [ 735, 765 ] ], "H": [ [ 615, 675 ], [ 765, 855 ] ], "F": [ [ 585, 615 ], [ 735, 765 ], [ 975, 1095 ] ] } }, { "name": "A-361", "time": { "M": [ [ 615, 735 ], [ 855, 1095 ] ], "T": [ [ 735, 855 ] ], "W": [ [ 615, 765 ], [ 1065, 1095 ] ], "H": [ [ 615, 675 ], [ 765, 855 ] ], "F": [ [ 735, 765 ], [ 975, 1095 ] ] } }, { "name": "A-365", "time": { "M": [ [ 735, 765 ], [ 945, 975 ] ], "T": [ [ 765, 855 ] ], "W": [ [ 735, 765 ] ], "H": [ [ 495, 585 ], [ 765, 855 ] ], "F": [ [ 975, 1095 ] ] } }, { "name": "A-369", "time": { "M": [ [ 495, 585 ], [ 675, 735 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 675, 855 ], [ 945, 975 ] ], "W": [ [ 495, 585 ], [ 1065, 1095 ] ], "H": [ [ 615, 855 ], [ 945, 975 ] ], "F": [ [ 495, 585 ], [ 975, 1095 ] ] } }, { "name": "A-401", "time": { "M": [ [ 585, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 585, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 675, 855 ], [ 975, 1095 ] ], "F": [ [ 495, 585 ], [ 855, 1095 ] ] } }, { "name": "A-404", "time": { "M": [ [ 495, 1095 ] ], "T": [ [ 675, 1095 ] ], "W": [ [ 495, 675 ], [ 855, 1095 ] ], "H": [ [ 675, 1095 ] ], "F": [ [ 675, 735 ], [ 855, 1095 ] ] } }, { "name": "D-105", "time": { "M": [ [ 615, 675 ], [ 945, 975 ] ], "T": [ [ 495, 675 ], [ 765, 855 ] ], "W": [ [ 615, 675 ] ], "H": [ [ 765, 855 ] ], "F": [ [ 585, 675 ], [ 975, 1095 ] ] } }, { "name": "D-107", "time": { "M": [ [ 495, 735 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 615 ], [ 735, 855 ], [ 975, 1095 ] ], "W": [ [ 495, 855 ] ], "H": [ [ 615, 855 ], [ 975, 1095 ] ], "F": [ [ 495, 615 ], [ 735, 765 ], [ 975, 1095 ] ] } }, { "name": "D-109", "time": { "M": [ [ 735, 855 ] ], "T": [ [ 735, 855 ] ], "W": [ [ 975, 1095 ] ], "H": [ [ 495, 645 ], [ 765, 855 ] ], "F": [ [ 855, 1095 ] ] } }, { "name": "D-120A", "time": { "M": [ [ 585, 675 ], [ 765, 855 ], [ 945, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 585, 765 ], [ 855, 1095 ] ], "H": [ [ 585, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "D-120B", "time": { "M": [ [ 855, 975 ], [ 1035, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 975 ], [ 1065, 1095 ] ], "W": [ [ 495, 585 ], [ 1035, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 585, 765 ], [ 855, 1095 ] ] } }, { "name": "D-205", "time": { "M": [ [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 615 ], [ 735, 855 ] ], "W": [ [ 735, 765 ], [ 975, 1095 ] ], "H": [ [ 615, 675 ], [ 765, 855 ] ], "F": [ [ 735, 765 ], [ 975, 1095 ] ] } }, { "name": "D-207", "time": { "M": [ [ 855, 1095 ] ], "T": [ [ 585, 645 ], [ 765, 855 ] ], "W": [ [ 735, 765 ], [ 975, 1095 ] ], "H": [ [ 615, 855 ] ], "F": [ [ 675, 765 ], [ 975, 1095 ] ] } }, { "name": "D-209", "time": { "M": [ [ 495, 615 ] ], "T": [ [ 585, 615 ], [ 735, 855 ], [ 1065, 1095 ] ], "W": [ [ 495, 615 ], [ 735, 855 ], [ 945, 975 ] ], "H": [ [ 615, 645 ], [ 765, 855 ] ], "F": [ [ 735, 855 ], [ 945, 1095 ] ] } }, { "name": "D-218", "time": { "M": [ [ 945, 975 ] ], "T": [ [ 495, 645 ], [ 765, 855 ] ], "W": [ [ 615, 675 ], [ 765, 975 ] ], "H": [ [ 615, 675 ], [ 765, 855 ] ], "F": [ [ 495, 585 ], [ 675, 765 ], [ 945, 1095 ] ] } }, { "name": "D-220", "time": { "M": [ [ 615, 735 ], [ 945, 975 ] ], "T": [ [ 495, 615 ], [ 735, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 615, 765 ] ], "H": [ [ 615, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 615 ], [ 735, 765 ], [ 975, 1095 ] ] } }, { "name": "D-305", "time": { "M": [ [ 495, 615 ], [ 975, 1095 ] ], "T": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 495, 615 ], [ 855, 1095 ] ], "H": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 495, 615 ], [ 855, 1095 ] ] } }, { "name": "D-307", "time": { "M": [ [ 495, 615 ], [ 975, 1095 ] ], "T": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 975, 1095 ] ], "H": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 495, 615 ], [ 735, 1095 ] ] } }, { "name": "D-318", "time": { "M": [ [ 615, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 585, 765 ], [ 975, 1095 ] ], "H": [ [ 765, 975 ], [ 1065, 1095 ] ], "F": [ [ 855, 1095 ] ] } }, { "name": "D-320", "time": { "M": [ [ 495, 585 ], [ 675, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 495, 585 ], [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "D-405", "time": { "M": [ [ 495, 585 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 495, 735 ], [ 945, 1095 ] ], "H": [ [ 675, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 855, 1095 ] ] } }, { "name": "D-407", "time": { "M": [ [ 585, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 585, 675 ], [ 855, 975 ], [ 1065, 1095 ] ], "H": [ [ 585, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "D-409", "time": { "M": [ [ 585, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 585, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "D-414", "time": { "M": [ [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 675, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 855, 1095 ] ] } }, { "name": "D-416", "time": { "M": [ [ 585, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 765, 855 ], [ 945, 975 ] ], "W": [ [ 585, 615 ], [ 1065, 1095 ] ], "H": [ [ 765, 1095 ] ], "F": [ [ 585, 675 ], [ 945, 1095 ] ] } }, { "name": "F-105", "time": { "M": [ [ 495, 855 ], [ 1005, 1095 ] ], "T": [ [ 495, 675 ], [ 765, 855 ], [ 945, 1095 ] ], "W": [ [ 495, 615 ], [ 1005, 1095 ] ], "H": [ [ 495, 855 ], [ 945, 975 ] ], "F": [ [ 495, 675 ], [ 765, 855 ], [ 975, 1095 ] ] } }, { "name": "F-169", "time": { "M": [ [ 495, 915 ], [ 975, 1035 ] ], "T": [ [ 495, 975 ] ], "W": [ [ 495, 975 ], [ 1035, 1095 ] ], "H": [ [ 495, 1095 ] ], "F": [ [ 495, 1095 ] ] } }, { "name": "F-204", "time": { "M": [], "T": [ [ 735, 855 ] ], "W": [], "H": [ [ 735, 855 ] ], "F": [ [ 735, 1095 ] ] } }, { "name": "F-217", "time": { "M": [ [ 495, 585 ], [ 675, 855 ], [ 945, 975 ], [ 1035, 1095 ] ], "T": [ [ 675, 975 ], [ 1065, 1095 ] ], "W": [ [ 495, 585 ], [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 735, 975 ], [ 1065, 1095 ] ], "F": [ [ 675, 855 ], [ 945, 1095 ] ] } }, { "name": "F-306", "time": { "M": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 585, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 585, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 585, 675 ], [ 945, 1095 ] ] } }, { "name": "G-102", "time": { "M": [ [ 495, 765 ], [ 945, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 495, 765 ], [ 855, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 855, 1095 ] ] } }, { "name": "G-104", "time": { "M": [ [ 675, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "W": [ [ 675, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 675, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "G-202", "time": { "M": [ [ 975, 1095 ] ], "T": [ [ 615, 645 ], [ 765, 855 ] ], "W": [ [ 975, 1095 ] ], "H": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 975, 1095 ] ] } }, { "name": "G-210", "time": { "M": [ [ 585, 675 ], [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 765, 855 ], [ 1065, 1095 ] ], "W": [ [ 585, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "H": [ [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "G-214", "time": { "M": [ [ 945, 975 ], [ 1065, 1095 ] ], "T": [ [ 585, 675 ], [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 585, 615 ], [ 735, 765 ], [ 1065, 1095 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 1065, 1095 ] ], "F": [ [ 945, 1095 ] ] } }, { "name": "G-302", "time": { "M": [ [ 495, 675 ], [ 855, 1095 ] ], "T": [ [ 495, 855 ], [ 975, 1095 ] ], "W": [ [ 495, 615 ], [ 735, 855 ], [ 975, 1095 ] ], "H": [ [ 495, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 615, 1095 ] ] } }, { "name": "G-308", "time": { "M": [ [ 495, 615 ] ], "T": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "W": [ [ 975, 1095 ] ], "H": [ [ 615, 645 ], [ 765, 855 ], [ 975, 1095 ] ], "F": [ [ 615, 735 ], [ 855, 1095 ] ] } }, { "name": "I-107", "time": { "M": [ [ 975, 1095 ] ], "T": [ [ 495, 855 ] ], "W": [ [ 975, 1095 ] ], "H": [ [ 735, 1095 ] ], "F": [ [ 855, 1095 ] ] } }, { "name": "I-214", "time": { "M": [ [ 495, 585 ], [ 855, 1095 ] ], "T": [ [ 765, 1095 ] ], "W": [ [ 495, 585 ], [ 675, 765 ], [ 945, 1095 ] ], "H": [ [ 675, 1095 ] ], "F": [ [ 585, 675 ], [ 945, 1095 ] ] } }, { "name": "I-216", "time": { "M": [ [ 585, 615 ], [ 735, 765 ], [ 855, 975 ], [ 1065, 1095 ] ], "T": [ [ 495, 585 ], [ 765, 855 ], [ 945, 975 ] ], "W": [ [ 585, 765 ], [ 945, 975 ], [ 1065, 1095 ] ], "H": [ [ 675, 855 ], [ 945, 975 ] ], "F": [ [ 495, 585 ], [ 945, 1095 ] ] } }, { "name": "I-218", "time": { "M": [ [ 615, 765 ], [ 945, 975 ] ], "T": [ [ 495, 615 ], [ 735, 855 ], [ 1065, 1095 ] ], "W": [ [ 615, 675 ], [ 855, 975 ] ], "H": [ [ 495, 585 ], [ 765, 855 ], [ 1065, 1095 ] ], "F": [ [ 585, 615 ], [ 735, 765 ], [ 945, 1095 ] ] } }, { "name": "I-412", "time": { "M": [ [ 495, 585 ], [ 675, 855 ], [ 975, 1095 ] ], "T": [ [ 495, 675 ], [ 765, 855 ], [ 945, 975 ] ], "W": [ [ 495, 585 ], [ 675, 765 ], [ 855, 975 ] ], "H": [ [ 495, 675 ], [ 765, 855 ], [ 945, 975 ], [ 1065, 1095 ] ], "F": [ [ 585, 675 ], [ 765, 1095 ] ] } }, { "name": "I-414", "time": { "M": [ [ 495, 1095 ] ], "T": [ [ 495, 675 ], [ 765, 1095 ] ], "W": [ [ 495, 1095 ] ], "H": [ [ 495, 1095 ] ], "F": [ [ 495, 675 ], [ 765, 1095 ] ] } } ]

        for (var i in classRoom){
            for (var y in classRoom[i].time[day]){
                if (timeS > classRoom[i].time[day][y][0] && timeS < classRoom[i].time[day][y][1]){
                    newRooms += classRoom[i].name + ", ";

                }
            }
        }
        this.props.changeRoom(newRooms);
    }

    //button hovering method
    btnStyleHover(){
        this.setState({bgCol: "red"})

    }
    render () {
        const btnStyle = {
            position: "relative",
            display: "block",
            height: "30px",
            width: "200px",
            lineHeight: "30px",
            borderRadius: "6px",
            marginTop: "10px",
            color: "white",
            border: "1px solid black",
            backgroundColor: this.state.bgCol
        };

        return(
            <center><div>
            <btn onMouseEnter={this.btnStyleHover.bind(this)} onClick={this.handleMondayChange.bind(this)} style={btnStyle} bgCol = "black">Monday (M)</btn>
            <btn onClick={this.handleTuesdayChange.bind(this)} style={btnStyle}>Tuesday (T)</btn>
            <btn onClick={this.handleWednesdayChange.bind(this)} style={btnStyle}>Wednesday (W)</btn>
            <btn onClick={this.handleThursdayChange.bind(this)} style={btnStyle}>Thursday (H)</btn>
            <btn onClick={this.handleFridayChange.bind(this)}style={btnStyle}>Friday (F)</btn>
            <p>Day Selected: {this.state.day}</p>
            <p> Enter a Time (Note: If 1:00pm, write 13:00, etc...) </p>
            <input onChange = {this.handleTimeChange.bind(this)} />
            <btn onClick={this.handleFinder.bind(this)}> Search </btn>

            </div></center>
        );
    }


}