import '../../Assets/Css/Interface.css'
import { evaluate } from 'mathjs'
import { useState } from 'react'

const Interface = () => {

    var panelValue;

    function showValuesPanel(e) {

        const inputLabel = document.getElementById('inputLabel')

        if (inputLabel.value === '0') {
            inputLabel.value = e
        } else {
            inputLabel.value += e
        }

        panelValue = inputLabel.value
        return inputLabel.value
    }


    function result(data) {

        const inputLabel = document.getElementById('inputLabel')
        let finalResult = evaluate(data)
        inputLabel.value = finalResult

    }


    return (
        <>
            <h1>Calculadora em ReactJS</h1>
            <div className='wrapperCalc'>
                <div><input type="text" id='inputLabel' value='0' /></div>
                <div className='wrapperPanelNumbers'>
                    <div className='panelNumbers'>
                        <div className='buttonNumber' onClick={() => showValuesPanel('1')} id='1' >1</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('2')} id='2'>2</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('3')} id='3'>3</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('4')} id='4'>4</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('5')} id='5'>5</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('6')} id='6'>6</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('7')} id='7'>7</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('8')} id='8'>8</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('9')} id='9'>9</div>
                        <div className='buttonNumber' onClick={() => showValuesPanel('0')} id='0'>0</div>
                    </div>
                    <div className='panelOperators'>
                        <div className='buttonOp' id='some' onClick={() => showValuesPanel('+')}>+</div>
                        <div className='buttonOp' onClick={() => showValuesPanel('-')} id='less'>-</div>
                        <div className='buttonOp' onClick={() => showValuesPanel('*')} id='mult'>*</div>
                        <div className='buttonOp' onClick={() => showValuesPanel('(')} id='colc_left'>(</div>
                        <div className='buttonOp' onClick={() => showValuesPanel(')')} id='colc_left'>)</div>
                        <div className='buttonOp' onClick={() => showValuesPanel('/')} id='div'>/</div>
                        <div className='buttonOp' onClick={() => result(panelValue)} id='result'>=</div>
                        <div className='buttonOp' id='erase' onClick={() => window.location.reload()}>C</div>
                    </div>
                </div>
            </div>
             </>
    )


}

export default Interface