import React from 'react';
import Articles from '../Articles/Articles';
import ColorPicker from '../ColorPicker/ColorPicker';
import Counter from '../Counter/Counter';
import Feedback from '../Feedback/Feedback';
import Form from '../Form/Form';
import Phonebook from '../Phonebook/Phonebook';
import Profile from '../Profile/Profile';
import Tabs from '../Tabs/Tabs';

const FeaturesSet = ({handleSubmitForm}) => {

    return (
        <>
        <Profile/>
        <ColorPicker/>
        <Counter/>
        <Feedback/>
        <Phonebook/>
        <Tabs/>
        <Articles/>
        <Form handleSubmit = {handleSubmitForm}/>

        </>
    )
}

export default FeaturesSet;