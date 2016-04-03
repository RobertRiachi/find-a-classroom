/**
 * Created by Robert on 4/3/2016.
 */
import React from 'react';

export default class Input extends React.Component {

    constructor(){
        super();
        this.state = {
          day: "M",
          times: 0,
        };
    }

    handleDayChange(e) {
        this.setState({day: e.target.value});

    }

    handleTimeChange(e){
        var time = parseInt(e.target.value);
        this.setState({times: time});
    }
    handleFinder(){
        //Add Data + Convert Time
        //Fix Variables

        var day = this.state.day;
        var timeS = this.state.times;
        var newRooms = ""

        var classRoom =  [
            {
                "name": "A-104",
                "time": {
                    "M": [
                        [
                            945,
                            1095
                        ]
                    ],
                    "T": [
                        [
                            765,
                            855
                        ],
                        [
                            975,
                            1095
                        ]
                    ],
                    "W": [
                        [
                            675,
                            765
                        ],
                        [
                            945,
                            1095
                        ]
                    ],
                    "H": [
                        [
                            765,
                            855
                        ],
                        [
                            975,
                            1095
                        ]
                    ],
                    "F": [
                        [
                            945,
                            1095
                        ]
                    ]
                }
            },
            {
                "name": "A-107",
                "time": {
                    "M": [
                        [
                            615,
                            735
                        ]
                    ],
                    "T": [
                        [
                            495,
                            615
                        ],
                        [
                            735,
                            855
                        ],
                        [
                            975,
                            1095
                        ]
                    ],
                    "W": [
                        [
                            735,
                            765
                        ],
                        [
                            855,
                            975
                        ]
                    ],
                    "H": [
                        [
                            615,
                            675
                        ],
                        [
                            765,
                            855
                        ],
                        [
                            945,
                            1095
                        ]
                    ],
                    "F": [
                        [
                            585,
                            615
                        ],
                        [
                            735,
                            855
                        ],
                        [
                            945,
                            1095
                        ]
                    ]
                }
            }]

        for (var i in classRoom){
            for (var y in classRoom[i].time[day]){
                if (timeS > classRoom[i].time[day][y][0] && timeS < classRoom[i].time[day][y][1]){
                    newRooms += classRoom[i].name;

                }
            }
        }
        this.props.changeRoom(newRooms);
    }
    render () {


        return(
            <div>
            <p> Enter a Day: M, T, W, T, F </p>
            <input onChange = {this.handleDayChange.bind(this)} />
            <p> Enter a Time (Note: If 1:00pm, write 13:00) </p>
            <input onChange = {this.handleTimeChange.bind(this)} />
                <button onClick={this.handleFinder.bind(this)}> Search </button>

            </div>
        );
    }


}