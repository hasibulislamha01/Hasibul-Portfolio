import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const WideCardSkeleton = () => {
    return (
        <SkeletonTheme
            baseColor="#FFC857"
            highlightColor="#fef9c3"
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex flex-col justify-between">
                    <Skeleton height={30} width={300} />
                    <Skeleton count={2} height={10} />
                </div>
                <div>
                    <Skeleton width={200} height={70} />
                </div>
            </div>
        </SkeletonTheme>
    );
};

export default WideCardSkeleton;