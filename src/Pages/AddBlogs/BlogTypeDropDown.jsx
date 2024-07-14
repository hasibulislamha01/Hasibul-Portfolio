import { Select } from "antd";
import PropTypes from 'prop-types'

const BlogTypeDropDown = ({handleBlogType}) => {


    const handleChange = (value) => {
        console.log(value)
        handleBlogType(value)
    };

    return (
        <Select
            defaultValue="Select Blog Type"
            style={{
                width: 200,
                height: 45
            }}
            
            onChange={handleChange}
            options={[

                {
                    value: 'Theory',
                    label: 'Theory',
                },
                {
                    value: 'Utility',
                    label: 'Utility',
                },
            ]}
        />
    );
};

BlogTypeDropDown.propTypes = {
    handleBlogType: PropTypes.func
}

export default BlogTypeDropDown;