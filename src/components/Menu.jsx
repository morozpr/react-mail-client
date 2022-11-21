import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Menu = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yy9753g', 'template_d9hp4mu', form.current, 'SgCWbbBtjBcG-Xn2M')
          .then((result) => {
              console.log(result.text);
              alert('ПИСЬМО УСПЕШНО ОТПРАВЛЕНО');
          }, (error) => {
              console.log(error.text);
              alert('ВНИМАНИЕ! ПРОИЗОШЛА НЕПРЕДВИДЕННАЯ ОШИБКА');
          });

        }

    return (
        <form className='menu' ref={form} onSubmit={ sendEmail }>
            <div className='ema'>
            <input name='sender' className='sender' placeholder='enter your email address' />
            <input name='reciever' className='reciever' placeholder='enter reciever email address' />
            <input name='subject' className='subject' placeholder='enter title' />
            </div>
            <div className='text'>
            <textarea name='message' className='body' placeholder='enter your text' />
            </div>
            <div className='botom'>
            <input type="submit" className='bot'/>
            </div>
        </form>
    )
}

export default Menu;