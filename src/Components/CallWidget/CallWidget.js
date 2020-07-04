import React, { Component } from "react";
import "./callWidget.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMaximize2 } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      data: null,
    };
  }

  componentDidMount() {
    this.fetchNumber();
    this.interval = setInterval(() => {this.setState({ time: Date.now() })
    this.fetchNumber();
  }, 60000);
  }

  fetchNumber = async () => {
    await axios
      .get("https://codifyinditest.com/script_test/api-test/")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let label, phoneNumber;
    if (this.state.data) {
      Object.values(this.state.data).map((i) => {
        label = i.labels;
        phoneNumber = i.phone_number;
      });
    }
    return (
      <div className="widgetContainer">
        {!this.state.close ? (
          <div className="widget">
            <h3 style={{color:'white',textAlign:'center',width:'100%',paddingTop:'20px'}}>{label}</h3>
        <p style={{textAlign:'center'}}><span style={{borderRadius:'20px',width:'50px',fontWeight:'bold',backgroundColor:'#0c0c0c',padding:'10px',color:'#346f34'}}><span style={{fontSize:'11px'}}><FaPhoneAlt style={{marginTop:'10px'}}/></span>{"  "}{phoneNumber}</span></p>
          </div>
        ) : null}
        <div style={{ textAlign: "right" }}>
          {!this.state.close ? (
            <AiFillCloseCircle
              size={35}
              onClick={() => {
                this.setState({ close: true });
              }}
            />
          ) : (
            <FiMaximize2
              size={20}
              onClick={() => {
                this.setState({ close: false });
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
