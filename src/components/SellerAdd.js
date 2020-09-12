import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { MenuItem } from "@material-ui/core";
import Select from '@material-ui/core/Select'
import axios from "axios";
import App from "./App"
import Redirect from "react-router-dom/Redirect";
import store from "./Local"
const usersBackendURL = "http://localhost:2000";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
});

class SellerAdd extends Component {
    constructor(props) {

        super(props)
        this.state = {
            form:{
                pName:"",
                pDescription:"",
                pCategory:"",
                price:"",
                s_Id:"",
                pQuantity:"",
                pDiscount:"",
                pShippingCharges:"",
                pImage:"",
            },
            Electronics:{
                os:"",
                ram:"",
                rear:"",
                front:""
            },
            Clothing:{
                color:"",
                warranty:"",
                idealFor:"",
                fabric:""
            },
            Furniture:{
               color:"",
                size:"",
                type:"",
                warranty:""
            },
            Shoes:{
              color:"",
              outerMaterial:"",
              idealFor:"",
              soleMaterial:"",
              warranty:""
            },
            formErrMsg: {
                price:"",
                pQuantity:"",
                pDiscount:"",
                pShippingCharges:""
            },
            
            formValid: {
                price:false,
                pQuantity:false,
                pDiscount:false,
                pShippingCharges:false,
                buttonActive:false
            },
            successResponse: "",
            errorMessage: "",
            render:""

        }

    }


    handleInputChange = (e) => {
        const name = e.target.name;
        const enteredValue = e.target.value;
        var formObj=this.state.form
        formObj[name]=enteredValue
    
        this.setState({form:formObj})
        this.validateField(name,enteredValue)
    // const name = e.target.name;
    // const value = e.target.value;
    // this.setState({ form: { ...this.state.form, [name]: value } });
    // this.validateField(name, value);
    }
    handleInputElectronics=(e)=>{
        const name = e.target.name;
        const enteredValue = e.target.value;
        var Obj=this.state.Electronics
        Obj[name]=enteredValue
        this.setState({Electronics:Obj})
        
    }
    handleInputClothing=(e)=>{
        const name = e.target.name;
        const enteredValue = e.target.value;
        var Obj=this.state.Clothing
        Obj[name]=enteredValue
        this.setState({Clothing:Obj})
        
    }
    handleInputFurniture=(e)=>{
        const name = e.target.name;
        const enteredValue = e.target.value;
        var Obj=this.state.Furniture
        Obj[name]=enteredValue
        this.setState({Furniture:Obj})
        
    }
    handleInputShoes=(e)=>{
        const name = e.target.name;
        const enteredValue = e.target.value;
        var Obj=this.state.Shoes
        Obj[name]=enteredValue
        this.setState({Shoes:Obj})
        
    }


    validateField = (fieldName, value) => {
        var message;
        var { formErrMsg } = this.state;
        var { formValid } = this.state;
        switch (fieldName) {
            case 'price':
            value<0?message="Value cannot be negative":message=""
                break;
            case 'pDiscount':
            value<0?message="Value cannot be negative":message=""

                break;
            case 'pQuantity':
            value<0?message="Value cannot be negative":value<1?message="Min should be 1":message=""

                break;
            case 'pShippingCharges':
            value<0?message="Value cannot be negative":message=""

                break;
            default:
                break;
        }
        //Form err message set
        formErrMsg[fieldName] = message;
        this.setState({ formErrMsg: formErrMsg });
        //Form Valid set
        message === "" ? formValid[fieldName] = true : formValid[fieldName] = false;
        formValid.buttonActive = formValid.price&& formValid.pDiscount&&formValid.pQuantity&&formValid.pShippingCharges;
        this.setState({ formValid: formValid });
    }

    submitProduct = (e) => {
        e.preventDefault();
        var obj={}
        if(this.state.form.pCategory=="Electronics"){
        obj={
        s_Id:this.state.form.s_Id,
        pName:this.state.form.pName,
        pDescription:this.state.form.pDescription,
        price:this.state.form.price,
        pQuantity:this.state.form.pQuantity,
        pDiscount:this.state.form.pDiscount,
        pShippingCharges:this.state.form.pShippingCharges,
        pImage:this.state.form.pImage,
        pCategory:this.state.form.pCategory,
        os:this.state.Electronics.os,
        ram:this.state.Electronics.ram,
        rearCamera:this.state.Electronics.rear,
        frontCamera:this.state.Electronics.front
        }}
       else if(this.state.form.pCategory=="Clothing"){
        obj={
            s_Id:this.state.form.s_Id,
            pName:this.state.form.pName,
            pDescription:this.state.form.pDescription,
            price:this.state.form.price,
            pQuantity:this.state.form.pQuantity,
            pDiscount:this.state.form.pDiscount,
            pShippingCharges:this.state.form.pShippingCharges,
            pImage:this.state.form.pImage,
            pCategory:this.state.form.pCategory,
            color:this.state.Clothing.color,
            warranty:this.state.Clothing.warranty,
            idealFor:this.state.Clothing.idealFor,
            fabric:this.state.Clothing.fabric
        
        }
       }
       else if(this.state.form.pCategory=="Furniture"){
        obj={
            s_Id:this.state.form.s_Id,
            pName:this.state.form.pName,
            pDescription:this.state.form.pDescription,
            price:this.state.form.price,
            pQuantity:this.state.form.pQuantity,
            pDiscount:this.state.form.pDiscount,
            pShippingCharges:this.state.form.pShippingCharges,
            pImage:this.state.form.pImage,
            pCategory:this.state.form.pCategory,
            color:this.state.Furniture.color,
            size:this.state.Furniture.size,
            type:this.state.Furniture.type,
            warranty:this.state.Furniture.warranty
        
        }
       }
       else if(this.state.form.pCategory=="Shoes"){
        obj={
            s_Id:this.state.form.s_Id,
            pName:this.state.form.pName,
            pDescription:this.state.form.pDescription,
            price:this.state.form.price,
            pQuantity:this.state.form.pQuantity,
            pDiscount:this.state.form.pDiscount,
            pShippingCharges:this.state.form.pShippingCharges,
            pImage:this.state.form.pImage,
            pCategory:this.state.form.pCategory,
            color:this.state.Shoes.color,
            outerMaterial:this.state.Shoes.outerMaterial,
            idealFor:this.state.Shoes.idealFor,
            soleMaterial:this.state.Shoes.soleMaterial,
            warranty:this.state.Shoes.warranty
        }
       }
       console.log("obj",obj)
        this.setState({ errorMessage: "", successMessage: "" })
        axios.put(usersBackendURL + '/updprod', obj)
            .then(response => this.setState({ successResponse: response.data }))
            .catch(error => {
                console.log("errorResponse", error.response, "errorMessage", error.message);
                this.setState({ errorMessage: error.response ? error.response.data.message : error.message })
            })


    }
    handleClick = (e) => {
        e.preventDefault()
        
        
    }
   
    render() {
        
        const { formErrMsg } = this.state
        const { classes } = this.props;
        
        return (

            <React.Fragment>
                <br></br><br></br>
                <div className="col-md-4 offset-4">
                    <main className={classes.main}>
                        <CssBaseline />
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Add Products
                            </Typography>

                            <form className={classes.form} onSubmit={this.submitProduct} >
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pName">Product Name</InputLabel>
                                    <Input autoFocus
                                        id="pName" name="pName"
                                        value={this.state.form.pName} onChange={this.handleInputChange} required />
                                    
                                </FormControl>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pDescription">Product Description</InputLabel>
                                    <Input name="pDescription" type="text" value={this.state.form.pDescription}
                                        onChange={this.handleInputChange} id="pDescription"
                                    required/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="price">Price</InputLabel>
                                    <Input name="price" type="Number" value={this.state.form.price}
                                        onChange={this.handleInputChange} id="pCategory"
                                        required/>
                                </FormControl>
                                <span className="text-danger">{this.state.formErrMsg.price}</span>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pImage">Image Link</InputLabel>
                                    <Input name="pImage" type="text" value={this.state.form.pImage}
                                        onChange={this.handleInputChange} id="pImage" required
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="s_Id">Seller Id</InputLabel>
                                    <Input name="s_Id" type="text" value={this.state.form.s_Id}
                                        onChange={this.handleInputChange} id="s_Id"
                                        required
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pDiscount">Product Discount</InputLabel>
                                    <Input name="pDiscount" type="Number" max={100} value={this.state.form.pDiscount}
                                        onChange={this.handleInputChange} id="pDiscount"
                                    />
                                </FormControl>
                                <span className="text-danger">{this.state.formErrMsg.pDiscount}</span>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pQuantity">Product Quantity</InputLabel>
                                    <Input name="pQuantity" type="Number" value={this.state.form.pQuantity}
                                        onChange={this.handleInputChange} id="pQuantity" required placeholder="Should be min of 1"
                                    />
                                </FormControl>
                                <span className="text-danger">{this.state.formErrMsg.pQuantity}</span>

                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="pShippingCharges">Shipping Charges</InputLabel>
                                    <Input name="pShippingCharges" type="Number" value={this.state.form.pShippingCharges}
                                        onChange={this.handleInputChange} id="pShippingCharges"
                                    />
                                </FormControl>
                                <span className="text-danger">{this.state.formErrMsg.pShippingCharges}</span>

                                <br/>
                               
                                {/* <FormControl margin="normal" required fullWidth>
                                    
                                                                      
                                    <InputLabel htmlFor="pCategory">Electronics</InputLabel>
                        
                                    <Input required name="pCategory" type="radio" value="Electronics"
                                        onClick={this.handleInputChange} id="pCategory"
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>

                                    <InputLabel htmlFor="pCategory">Clothing</InputLabel>
                                    <Input required name="pCategory" type="radio" value="Clothing"
                                        onClick={this.handleInputChange} id="pCategory"
                                    />
                                    </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                   
                                    <InputLabel htmlFor="pCategory">Shoes</InputLabel>
                                    <Input required name="pCategory" type="radio" value="Shoes"
                                        onClick={this.handleInputChange} id="pCategory"
                                    />
                                    </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     
                                    <InputLabel htmlFor="pCategory">Furniture</InputLabel>
                                    <Input required name="pCategory" type="radio" value="Furniture"
                                        onClick={this.handleInputChange} id="pCategory"
                                    />
                                   
                                </FormControl> */}
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="" id="label">Product Category</InputLabel><br></br>
                                     <Select id="select" labelId="label" name="pCategory" value={this.state.form.pCategory} onChange={this.handleInputChange}>
                                         <MenuItem name="" >--SELECT--</MenuItem>
                                         <MenuItem  value="Electronics"  >Electronics</MenuItem>
                                         <MenuItem  value="Clothing"   >Clothing</MenuItem>
                                         <MenuItem  value="Shoes"   >Shoes</MenuItem>
                                         <MenuItem  value="Furniture" >Furniture</MenuItem>
                                     </Select>
                                    
                                 </FormControl>

                                {this.state.form.pCategory=="Electronics"?
                                <div> 
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="os">OS</InputLabel>
                                     <Input required name="os" type="text" value={this.state.Electronics.os}
                                         onChange={this.handleInputElectronics} id="os"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="ram">Ram</InputLabel>
                                     <Input required name="ram" type="text" value={this.state.Electronics.ram}
                                         onChange={this.handleInputElectronics} id="ram"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="rear">Rear Camera</InputLabel>
                                     <Input required name="rear" type="text" value={this.state.Electronics.rear}
                                         onChange={this.handleInputElectronics} id="rear"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="front">Front Camera</InputLabel>
                                     <Input required name="front" type="text" value={this.state.Electronics.front}
                                         onChange={this.handleInputElectronics} id="front"
                                     />    
                                </FormControl>
                                </div>:<div></div>}
                                {this.state.form.pCategory=="Clothing"?
                               <div>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="ccolor">Color</InputLabel>
                                     <Input required name="color" type="text" value={this.state.Clothing.color}
                                         onChange={this.handleInputClothing} id="ccolor"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="fabric">Fabric</InputLabel>
                                <Input required name="fabric" type="text" value={this.state.Clothing.fabric}
                                    onChange={this.handleInputClothing} id="fabric"
                                />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="idealFor">Ideal For</InputLabel>
                                <Input required name="idealFor" type="text" value={this.state.Clothing.idealFor}
                                    onChange={this.handleInputClothing} id="idealFor"
                                />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="cwarranty">Warranty</InputLabel>
                                <Input required name="warranty" type="text" value={this.state.Clothing.warranty}
                                    onChange={this.handleInputClothing} id="cwarranty"
                                />    
                                </FormControl></div>:
                                <div></div>}
                                
                                {this.state.form.pCategory == "Furniture" ?
                                    <div>
                                         <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="color">Color</InputLabel>
                                            <Input required name="color" type="text" value={this.state.Furniture.color}
                                                onChange={this.handleInputFurniture} id="color"
                                            />
                                        </FormControl>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="size">Size</InputLabel>
                                            <Input required name="size" type="text" value={this.state.Furniture.size}
                                                onChange={this.handleInputFurniture} id="size"
                                            />
                                        </FormControl>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="type">Type</InputLabel>
                                            <Input required name="type" type="text" value={this.state.Furniture.type}
                                                onChange={this.handleInputFurniture} id="type"
                                            />
                                        </FormControl>
                                        <FormControl margin="normal" required fullWidth>
                                            <InputLabel htmlFor="fwarranty">Warranty</InputLabel>
                                            <Input required name="warranty" type="text" value={this.state.Furniture.warranty}
                                                onChange={this.handleInputFurniture} id="fwarranty"
                                            />
                                        </FormControl></div>:
                                    <div></div>}  
                                       
                                {this.state.form.pCategory=="Shoes"?
                               <div>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="scolor">Color</InputLabel>
                                     <Input required name="color" type="text" value={this.state.Shoes.color}
                                         onChange={this.handleInputShoes} id="scolor"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="outerMaterial">Outer Material"</InputLabel>
                                     <Input required name="outerMaterial" type="text" value={this.state.Shoes.outerMaterial}
                                         onChange={this.handleInputShoes} id="outerMaterial"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="sidealFor">Ideal For</InputLabel>
                                <Input required name="idealFor" type="text" value={this.state.Shoes.idealFor}
                                    onChange={this.handleInputShoes} id="sidealFor"
                                />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="sole">Sole Material</InputLabel>
                                     <Input required name="soleMaterial" type="text" value={this.state.Shoes.soleMaterial}
                                         onChange={this.handleInputShoes} id="sole"
                                     />    
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                     <InputLabel htmlFor="swarranty">Warranty</InputLabel>
                                     <Input required name="warranty" type="text" value={this.state.Shoes.warranty}
                                         onChange={this.handleInputShoes} id="swarranty"
                                     />    
                                </FormControl></div>:
                                <div></div>}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={!this.state.formValid.buttonActive}
                                >SUBMIT
                                </Button>
                                
                            </form><br />
                            {this.state.errorMessage ? (
                                <div className={'text-danger'}>{this.state.errorMessage}</div>) :

                               <div className={"text-success"}> {this.state.successResponse}</div>} 




                        </Paper>
                    </main>
                </div>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SellerAdd)