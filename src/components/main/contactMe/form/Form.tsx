import * as React from "react"
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();

    const [formValue, setFormValue] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
    })

    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false,
        phone: false,
        message: false
    })

    const inputs = [
        {
            id: 0,
            name: 'name',
            type: 'text',
            label: 'Nome *',
            pattern: /^[A-Za-z0-9]{3,16}$/g,
            emptyError: 'Insere un nome',
            invalidError: 'Inserire un nome di almeno 3 lettere',
            required: true
        },
        {
            id: 1,
            name: 'surname',
            type: 'text',
            label: 'Cognome *',
            pattern: /^[A-Za-z0-9]{3,16}$/g,
            emptyError: 'Insere un nome',
            invalidError: 'Inserire un cognome di almeno 3 lettere',
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'text',
            label: 'Email *',
            pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g,
            emptyError: "Insere un'email",
            invalidError: "Inserire un'email valida",
            required: true
        },
        {
            id: 3,
            name: 'phone',
            type: 'text',
            label: 'Telefono *',
            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
            emptyError: 'Insere un numero di telefono',
            invalidError: 'Inserire un numero di telefono valido',
            required: true
        }
    ]

    const nameRegex = new RegExp('^[\\w\'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,20}$')
    const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const phoneRegex = new RegExp('^(([+]|00)39)?((3[1-6][0-9]))(\\d{7})$')

    const onChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const formFieldsCheck = (e) => {
        if(e.target.name === 'name' || e.target.name === 'surname') {
            if(nameRegex.test(e.target.value)) {
                setErrors({...errors, [e.target.name]: false})
            } else {
                setErrors({...errors, [e.target.name]: true})
            }
        } else if (e.target.name === 'email') {
            if(emailRegex.test(e.target.value)) {
                setErrors({...errors, [e.target.name]: false})
            } else {
                setErrors({...errors, [e.target.name]: true})
            }
        } else if (e.target.name === 'phone') {
            if(phoneRegex.test(e.target.value)) {
                setErrors({...errors, [e.target.name]: false})
            } else {
                setErrors({...errors, [e.target.name]: true})
            }
        } else if (e.target.name === 'message') {
            if(e.target.value.length > 5) {
                setErrors({...errors, [e.target.name]: false})
            } else {
                setErrors({...errors, [e.target.name]: true})
            }
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        let newState:any = {}
        Object.keys(errors).filter((key) => {
            if(!formValue[key]) {
                newState = {...newState, [key]: true}
            } else if(errors[key] === true) {
                newState = {...newState, [key]: true}
            } else {
                newState = {...newState, [key]: false}
            }
        })
        setErrors(newState)

        if( (errors.name || !formValue.name) ||
            (errors.surname || !formValue.surname) ||
            (errors.email || !formValue.email) ||
            (errors.phone || !formValue.phone) ||
            (errors.message || !formValue.message)) {
        } else {
            const initialState = {
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: ''
            }

            {
                emailjs.sendForm('service_ctu1qvq', 'template_hdkgqj9', form.current, '_8H8v9WlJx2oNsYXn')
                    .then((result) => {
                        alert('Email inviata correttamente!')
                        setFormValue(initialState)
                    }, (error) => {
                        alert('Email non inviata, riprovare.')
                    });
            }
        }
    };

    return (
        <form ref={form} id="form" onSubmit={sendEmail}>
            <div className="informations">
                <div className="information">
                    <i className="fa-solid fa-address-card" />
                    <span>Lorenzo Calzi</span>
                </div>

                <div className="information">
                    <i className="fa-solid fa-cake-candles" />
                    <span>23 Anni</span>
                </div>

                <div className="information">
                    <i className="fa-solid fa-map-location-dot" />
                    <span>Milano</span>
                </div>

                <div className="information">
                    <i className="fa-solid fa-envelope" />
                    <span>lorenzocalzi@gmail.com</span>
                </div>

                <div className="information">
                    <i className="fa-solid fa-phone" />
                    <span>3451559558</span>
                </div>
            </div>

            <div className="inputs">
                <div className="groups">
                    {
                        inputs.map((input, index) => (
                            <div className="input-group" key={index}>
                                <input type={input.type}
                                       name={input.name}
                                       value={formValue[input.name]}
                                       onChange={onChange}
                                       onBlur={formFieldsCheck}
                                       required
                                />
                                <label>{input.label}</label>
                                {errors[input.name] && (
                                    <div className="error-container">
                                        <i className="fa-solid fa-circle-exclamation" />
                                        <span className='error'>{formValue[input.name] === '' ? input.emptyError : input.invalidError}</span>
                                    </div>
                                )}
                            </div>
                        ))
                    }

                    <div className="textarea-group">
                            <textarea name="message"
                                      value={formValue.message}
                                      onChange={onChange}
                                      onBlur={formFieldsCheck}
                                      required
                            />
                        <label>Messaggio *</label>
                        {errors.message && (
                            <div className="error-container">
                                <i className="fa-solid fa-circle-exclamation" />
                                <span className='error'>{formValue.message === '' ? 'Inserire un messaggio' : 'Inserire un messaggio di almeno 5 caratteri'}</span>
                            </div>
                        )}
                    </div>
                </div>

                <input type="submit" value="Invia" className="submit" />
            </div>
        </form>
    )
}

export default Form
