import React, { useState, useEffect } from 'react'
import CardTitleInfo from './CardTitleInfo'
import Button from './Button'
import editIcon from '../assets/icons/edit.png';

const CardInformation = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };
        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Re-check on resize
        return () => {
            window.removeEventListener('resize', checkMobile); // Cleanup
        };
    }, []);

    return(
        <div className="card">
            {isMobile ? (
                <>
                {/* Information first for desktop */}
                <div className="informationContainer">
                    <div className="buttonContainer">
                        <Button 
                            iconName ={editIcon}
                            className="btn-text xs"
                            text="Edit"
                        />
                    </div>
                    <div className="column">
                        <CardTitleInfo title='last name' data= '***Handstand' />
                        <CardTitleInfo title='first name' data= '***Henri' />
                    </div>
                    <div className="column">
                        <CardTitleInfo title='email' data= '***henrihandstand@gmail.com' />
                        <CardTitleInfo title='password' data= '***' />
                    </div>
                </div>
                </>
            ) : (
                <>
                {/* Information first for desktop */}
                <div className="informationContainer">
                    <div className="column">
                        <CardTitleInfo title='last name' data= '***Handstand' />
                        <CardTitleInfo title='first name' data= '***Henri' />
                    </div>
                    <div className="column">
                        <CardTitleInfo title='email' data= '***henrihandstand@gmail.com' />
                        <CardTitleInfo title='password' data= '***' />
                    </div>
                    </div>
                    <div className="buttonContainer">
                        <Button 
                            iconName ={editIcon}
                            className="btn-text s"
                            text="Edit"
                        />
                    </div>
                </>
            )}
        </div>

    );
};
export default CardInformation