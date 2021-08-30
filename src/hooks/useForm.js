import {useState} from 'react';

const useForm = (callback) => {
    const [values, setvalues] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const auxValues = { ...values};
        auxValues[event.target.name] = event.target.value;
        setvalues(auxValues);
    };
    
    const handleSubmit = (callback) => (event) =>{
        event.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
    };
    return [{values, loading},  handleChange, handleSubmit];
};

export default useForm;