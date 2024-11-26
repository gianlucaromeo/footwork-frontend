import React, { useState, useEffect } from 'react'
import CardTitleInfo from './CardTitleInfo'

const CardInformation = ({
    firstName,
    lastName,
    email,
}) => {
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
                    {/* Edit button 
                    <div className="buttonContainer">
                        <Button 
                            iconName ={editIcon}
                            className="btn-text xs"
                            text="Edit"
                        />
                    </div>
                    */}
                    <div className="column">
                        <CardTitleInfo title='last name' data={lastName} />
                        <CardTitleInfo title='first name' data={firstName} />
                    </div>
                    <div className="column">
                        <CardTitleInfo title='email' data={email} />
                        <CardTitleInfo title='password' data='******' />
                    </div>
                </div>
                </>
            ) : (
                <>
                {/* Information first for desktop */}
                <div className="informationContainer">
                    <div className="column">
                        <CardTitleInfo title='last name' data={lastName} />
                        <CardTitleInfo title='first name' data={firstName} />
                    </div>
                    <div className="column">
                        <CardTitleInfo title='email' data={email} />
                        <CardTitleInfo title='password' data= '******' />
                    </div>
                    </div>
                    {/* Edit button 
                    <div className="buttonContainer">
                        <Button 
                            iconName ={editIcon}
                            className="btn-text s"
                            text="Edit"
                        />
                    </div>
                    */}
                </>
            )}
        </div>

    );
};
export default CardInformation