import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        const {change: currenctProps, locale: currenLocale} = this.props
        const {change: nextChange, locale: nextLocale} = nextProps
        if(currenctProps === nextChange && currenLocale === nextLocale){
            return false;
        }
        return true;
    }
    render(){
        console.log("button component update")
        let {change,locale} = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>{ locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}</button>
        )
    }
}

export default Button;