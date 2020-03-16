import React, { Component } from "react";
import { Link } from "react-router-dom";
import photographer from '../images/cam.png'
import group from '../images/group.png'
import Select from 'react-select';
const CameraImage = require("../images/wlcm-img.png");
const formImage = require("../images/login-bg.png");
const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54},
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58}
];
class Form extends Component {
  // state = {
  //   selectedOption: '',
  // }
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };
}
handleInputChange = (value, e) => {
    if (e.action === 'input-change') {
        this.setState({value});
    }
}
  render() {
    const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    function logChange(val) {
      console.log("Selected: " + val);
      
    }
    return (
      <div className="form" style={{ backgroundImage: `url(${formImage})` }}>
        {/*start header section */}
        <section className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="myHeader">
                  <h4 className="header3">digital single lenz relex</h4>
                  <div className="spanandline">
                    <hr className="line"></hr>
                    <span className="headerSpan">community</span>
                  </div>
                </div>
              </div>

              <div
                className="col-md-3" 
                style={{ paddingRight: "0px", paddingLeft: "5px", marginLeft:"67px"}}
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div
                className="col-md-3"
                style={{ paddingRight: "0px", paddingLeft: "5px" }}
              >
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="forgotPass">
                  <Link>
                    <span>Forgot Password?</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-2" style={{maxWidth:'6.333%'}}>
       
                <button>Login</button>
             
              </div>
            </div>
          </div>
        </section>
        {/*end header section */}

        {/* start formGroup Section */}
        <div className="container">
          <section
            className="formGroup"
            style={{ backgroundImage: `url(${CameraImage})` }}
          >
            <div className="row">
              <div className="col-md-6 account" style={{paddingLeft:'60px'}}>
<h1>Create an account</h1>
<p>It's quick and easy.</p>
<hr className="line"/>

{/* radio buttons */}
<div className="Radio">
    <label className="accountLabel">Account Type:</label>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample"/>
  <label className="custom-control-label" for="defaultInline1"><img src={photographer} style={{marginTop:'-15px',
    marginRight:'7px'}}/>Photographer</label>
</div>

<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample"/>
  <label className="custom-control-label" for="defaultInline2"><img src={group} style={{marginTop:'-15px',
    marginRight:'7px'}}/>Client</label>
</div>


              </div>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
            <input
                  type="text"
                  className="form-control"
                  placeholder="Nick Name"
                  style={{marginLeft:'10px'}}
                />
                   <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                />
            <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  style={{marginLeft:'10px'}}
                />
                   <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  style={{marginBottom:'15px'}}
                />
            <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  style={{marginLeft:'10px',marginBottom:'15px'}}
                />
                <div className="Radio">
    <label className="accountLabel" style={{marginRight:'60px'}}>Gender:</label>
<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline11" name="inlineDefaultRadiosExample0"/>
  <label className="custom-control-label" for="defaultInline11">Male</label>
</div>

<div className="custom-control custom-radio custom-control-inline">
  <input type="radio" className="custom-control-input" id="defaultInline22" name="inlineDefaultRadiosExample0"/>
  <label className="custom-control-label" for="defaultInline22">Female</label>
</div>

</div>
                   {/* radio buttons */}
                   {/* <Select options={Countries} isMulti /> */}
                   {/* <Select options={Countries}
                    // onChange={(values) => this.setValues(values)}
                     /> */}
                     <Select 
                     options={Countries} isMulti 
                     styles={customStyles}
                    //  menuColor='red'
                     placeholder="Prefered Categories"
                     allowSelectAll={true}
                     closeMenuOnSelect={false}
                     onInputChange={this.handleInputChange}
                     inputValue={this.state.value}
                                       
                                       />

<p className="lead">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
<button>SIGN UP</button>
                               </div>
            </div>
          </section>
          <section className="footer text-center mt-5">
<Link><span>Help Center</span></Link>
<Link><span>Terms  Conditions</span></Link>
<Link><span>Privacy Policy</span></Link>
<Link><span>Cookies</span></Link>
<Link><span>Ads Info</span></Link>
<Link><span>Developers</span></Link>
<Link><span>Settings</span></Link>
<Link><span>Copyrights</span></Link>
<Link><span>Trade mark</span></Link>

          </section>
        </div>

        {/* end formGroup Section */}
      </div>
    );
  }
}
const customStyles = {
  control: (base, state) => ({
    ...base,
    width:'470px',
    textAlign:'center',
    borderRadius:'none',
    placeholder:'prefered',
    height:'48px',
    background: "none",
    paddingBottom:'30px',
    '&:hover': {
      border: '1px solid #747474',
      cursor: 'pointer',
  }
  }),
 
  
  menu: base => ({
    ...base,
    width:'400px',
     background: "#1b1b1b91",
    borderBottom:'1px solid #495057',
   
  }),
  menuList: (base,state) => ({
    ...base,
    padding: 0,
    backgroundColor: "#1C1C1C",
    width:'475px',
    color: '#495057',
    border:'1px solid #00000091', 
    borderBottom:'1px solid #495057',
    maxHeight: '300', 
    marginTop:'0px',
  }),

  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';


    return { ...provided, opacity, transition };
  }
};

export default Form;
