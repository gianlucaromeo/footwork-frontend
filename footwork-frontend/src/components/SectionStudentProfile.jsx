import CardCourses from './CardCourses';
import CardInformation from './CardInformation';
import TitleWithArrow from './TitleWithArrow';
import Button from './Button';
import Chip from './Chip';
import deleteIcon from '../assets/icons/delete-white.png';

const SectionStudentProfile = () => {
    return (
        <div className="studentProfile">
            <div className="headerContainer">
                <TitleWithArrow
                    title = "Back"
                />
            </div>
            <div className="cardContainer">
                <Chip text="Test"/>
                <CardInformation/>
                <CardCourses/>
            </div>
            <div className="mainButtonContainer">
                <Button 
                    iconName ={deleteIcon}
                    className="btn-text s"
                    text="Delete Account"
                />
                <Button 
                    className="btn-primary s"
                    text="Logout"
                />
            </div>
        </div>
    )
}

export default SectionStudentProfile