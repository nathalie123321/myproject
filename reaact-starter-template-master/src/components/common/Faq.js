import React, { Component } from "react";

function Faq ({faq, index, toggleFaq}) {
    return (
    <div className={"faq " + (faq.open ? 'open' : '')} 
    key={index} 
    onClick={() => toggleFaq(index)}
    >
        <div className="faq-mainTitle">
            {faq.mainTitle}
        </div>       
        <div className="faq-title">
            {faq.title}
        </div>
        <div className="faq-text1">
            {faq.text1}
        </div>
        <div className="faq-text2">
            {faq.text2}
        </div>
        <div className="faq-text3">
            {faq.text3}
        </div>
        <div className="faq-title2">
            {faq.title2}
        </div>
        <div className="faq-text4">
            {faq.text4}
        </div>
        <div className="faq-title3">
            {faq.title3}
        </div>
        <div className="faq-text5">
            {faq.text5}
        </div>
    </div>
    );
}
export default Faq;
