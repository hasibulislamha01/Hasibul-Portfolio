import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';


const Education = () => {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <div className=''>
                <h1 className="text-3xl mb-12">My Educational Journey</h1>
                <div className=''>
                    <Timeline
                        mode="alternate"
                        reverse
                        className=''
                        items={[
                            {
                                dot: (
                                    <ClockCircleOutlined
                                        style={{
                                            fontSize: '16px',
                                        }}
                                    />
                                ),
                                label: '31 December, 2012',
                                children: 'Completed primary education.',
                            },
                            {
                                dot: (
                                    <ClockCircleOutlined
                                        style={{
                                            fontSize: '16px',
                                        }}
                                    />
                                ),
                                label: '6 May, 2018',
                                children: 'Completed Secondary education in Science',
                                // color: 'green',
                            },
                            {
                                dot: (
                                    <ClockCircleOutlined
                                        style={{
                                            fontSize: '16px',
                                        }}
                                    />
                                ),
                                label: '30 January, 2021',
                                children: `Completed Higher Secondary Education in Science`,
                            },
                            {
                                dot: (
                                    <ClockCircleOutlined
                                        style={{
                                            fontSize: '16px',
                                        }}
                                    />
                                ),
                                label: '14 February, 2022',
                                children: 'Started schooling for B.Sc. in University of Rajshahi',
                                color: 'green',
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;