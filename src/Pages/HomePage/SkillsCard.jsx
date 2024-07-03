import { Card } from 'antd';
const { Meta } = Card;
import PropTypes from 'prop-types'


const SkillsCard = ({ skill }) => {


    return (
        <Card
            hoverable
            style={{
                width: 150,
                height: 180,
            }}
            cover={<img
                className='mx-auto pt-2'
                alt="example"
                style={{
                    height: 130,
                    width: 120,
                }}
                src={skill?.icon} />}
        >
            <Meta title={skill?.name} className='mx-auto text-center pb-3' />
        </Card>
    );
};

SkillsCard.propTypes = {
    skill: PropTypes.object
}
export default SkillsCard;