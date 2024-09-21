import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types'

const RoundSkeleton = ({ size }) => {
    return (

        <SkeletonTheme
            baseColor="#2F4F4F"
            highlightColor="#FFC857"
        >
            <Skeleton
                circle
                width={size || 80}
                height={size || 80}
            />
        </SkeletonTheme>

    );
};


RoundSkeleton.propTypes = {
    size: PropTypes.number
}
export default RoundSkeleton;