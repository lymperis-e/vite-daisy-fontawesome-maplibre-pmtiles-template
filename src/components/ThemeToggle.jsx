import { useEffect, useState } from "react";
import { Toggle, Form } from "react-daisyui";
function ThemeToggle({
    light,
    dark,
    description
}) {
    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(true)
    const toggleTheme = () => {
        setTheme(theme === light ? dark : light);
    };
    const toggleChecked = () => {
        setChecked(checked === true ? false : true);
    };
    
    // set the theme based on the stored value in local storage, if available
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    // update the theme in local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <Form className="form-control">
            <Form.Label title={description}>
                <Toggle onClick={toggleTheme} className="toggle toggle-primary toggle-sm" onChange={toggleChecked} />
            </Form.Label>
        </Form>
    );
}
export default ThemeToggle