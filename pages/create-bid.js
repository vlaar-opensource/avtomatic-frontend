import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import ProductInfo from '../component/pages/product-entry/ProductInfo';
import Pricing from '../component/pages/product-entry/Pricing'
import Timing from '../component/pages/product-entry/Timing'
import Summary from '../component/pages/product-entry/Summary';
import Router from 'next/router'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    navButton: {
        marginTop: theme.spacing.unit
    }
});

class CreateBid extends React.Component {

    state = {
        totalSteps : this.getSteps().length,
        activeStep: 0,
        finished : false
    }

    saveBid(){
        Router.push('/listing')   
    }

    handleNext = () => {
        const { activeStep, totalSteps } = this.state


        if (activeStep == totalSteps-1){
            
            this.saveBid()
        }else{
            this.setState({
                activeStep: activeStep + 1
            })
        }
    }

    handlePrev = () => {
        const { activeStep } = this.state
        this.setState({
            activeStep: activeStep - 1
        })
    }

    getSteps() {
        return [
            "Masukkan Keterangan Barang",
            "Upload Photo",
            "Tentukan Harga",
            "Tentukan Ketentuan Waktu",
            "Selesai"
        ]
    }

    getStepContent(idx) {
        const { classes } = this.props

        switch (idx) {
            case 0:
                return (<ProductInfo/>)
            case 1:
                return "Hello, content 1"
            case 2:
                return (<Pricing/>)

            case 3:
                return (
                    <Timing/>
                )
            case 4:
                return (<Summary />)
            default: "no content "
        }
    }

    render() {
        const steps = this.getSteps()
        const totalSteps = steps.length
        

        const { activeStep } = this.state
        const { classes } = this.props


        return (
            <div>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, idx) => {
                        const props = {}
                        const labelProps = {}
                        return (<Step key={label} {...props}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>)
                    })}
                </Stepper>
                <div className="content">
                    {this.getStepContent(activeStep)}
                </div>

                <div className={classes.navButton}>
                    {/*buttons*/}
                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handlePrev}
                    >
                        Prev
                </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                    >{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(CreateBid)
